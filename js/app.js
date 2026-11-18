/**
 * We Love Reading — Children's Books Redesign Prototype
 * Router, Bilingual RTL/LTR Controller, Age Filter, and View Renderer
 */

(function () {
  "use strict";

  const DATA = window.WLR_DATA;
  const STORAGE_LANG_KEY = "wlr_prototype_lang";

  const state = {
    lang: localStorage.getItem(STORAGE_LANG_KEY) === "ar" ? "ar" : "en",
    ageFilter: "all",
    selectedBookSlug: null,
    catalogueTheme: "all",
    catalogueAge: "all",
    magazineFilter: "all",
    magazineBookSlug: null,
    mobileMenuOpen: false,
    researchSlideTimer: null,
    researchSlideIndex: 0,
    researchFilters: {
      targetGroups: [],
      subjects: [],
      publicationTypes: []
    }
  };

  /**
   * Computes a sequence of pastel class names of length `count` using all 5 pastels
   * ('yellow', 'mint', 'pink', 'blue', 'peach') such that NO two adjacent tiles
   * share the same color on 5-col desktop (i-5), 3-col tablet (i-3), 2-col mobile (i-2),
   * or horizontally (i-1).
   */
  function buildPastelSequence(count, seedOffset = 0) {
    const palette = DATA.pastelSequence; // 5 colors
    const result = [];
    for (let i = 0; i < count; i++) {
      const forbidden = new Set();
      if (i >= 1) forbidden.add(result[i - 1]);
      if (i >= 2) forbidden.add(result[i - 2]);
      if (i >= 3) forbidden.add(result[i - 3]);
      if (i >= 5) forbidden.add(result[i - 5]);

      let chosen = palette[(i + seedOffset) % palette.length];
      for (let step = 0; step < palette.length; step++) {
        const candidate = palette[(i + seedOffset + step) % palette.length];
        if (!forbidden.has(candidate)) {
          chosen = candidate;
          break;
        }
      }
      result.push(chosen);
    }
    return result;
  }

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function t() {
    return DATA.ui[state.lang];
  }

  function getBookCover(book) {
    if (state.lang === "ar" && book.coverAr) {
      return book.coverAr;
    }
    return book.coverEn;
  }

  function getBookOriginalUrl(book) {
    return state.lang === "ar" && book.urlAr ? book.urlAr : book.urlEn;
  }

  function isSpecificBookBuyUrl(url) {
    if (!url || typeof url !== "string") return false;
    const normalized = url.trim().replace(/\/+$/, "").toLowerCase();
    if (!normalized || !/^https?:\/\//i.test(normalized)) return false;
    const generalBuyUrls = new Set([
      ((DATA.siteLinks && DATA.siteLinks.buyBooksEn) || "").replace(/\/+$/, "").toLowerCase(),
      ((DATA.siteLinks && DATA.siteLinks.buyBooksAr) || "").replace(/\/+$/, "").toLowerCase(),
      "https://welovereading.org/buy-our-books",
      "https://welovereading.org/ar/buy-our-books",
      "https://welovereading.org/ar/copy-of-buy-our-books"
    ]);
    return !generalBuyUrls.has(normalized);
  }

  function getAgeCategoryObj(ageId) {
    return DATA.ageCategories.find((c) => c.id === ageId) || DATA.ageCategories[0];
  }

  function applyDocumentDirection() {
    const html = document.documentElement;
    html.lang = state.lang;
    html.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.title =
      state.lang === "ar"
        ? "نحن نحب القراءة — مجموعة قصص الأطفال"
        : "We Love Reading — Children’s Books";
  }

  /* ========================================================================
     Header & Navigation Rendering (Exact 4-Section Children's Books Structure)
     ======================================================================== */
  function renderHeader(activeRoute) {
    const ui = t();
    const headerEl = document.getElementById("site-header");

    const isWlrActive = ["our-books", "book", "catalogue", "magazine"].includes(activeRoute.view);
    const isLatestActive = activeRoute.view === "latest";
    const isResourcesActive = activeRoute.view === "resources";
    const isCoronaActive = activeRoute.view === "coronavirus";
    const isResearchActive = activeRoute.view === "research";

    const chevronSvg = `<svg class="nav-chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    headerEl.innerHTML = `
      <div class="container header-inner">
        <a href="#/our-books" class="brand-lockup" aria-label="${escapeHtml(ui.brandTop)} — ${escapeHtml(ui.brandSub)}">
          <span class="brand-butterfly" aria-hidden="true">
            <span class="brand-dot"></span>
            <span class="brand-dot"></span>
            <span class="brand-dot"></span>
            <span class="brand-dot"></span>
          </span>
          <span class="brand-text">
            <span class="brand-name">${escapeHtml(ui.brandTop)}</span>
            <span class="brand-sub">${escapeHtml(ui.brandSub)}</span>
          </span>
        </a>

        <nav class="primary-nav" aria-label="Children’s Books Navigation">
          <!-- 1. WLR Children Books -->
          <div class="nav-group">
            <button type="button" class="nav-trigger ${isWlrActive ? "is-active" : ""}" aria-expanded="false">
              <span>${escapeHtml(ui.nav.wlrBooks)}</span>
              ${chevronSvg}
            </button>
            <div class="nav-dropdown" role="menu">
              <div class="nav-dropdown-header">${escapeHtml(ui.nav.wlrBooks)}</div>
              <a href="#/our-books" class="nav-dropdown-link ${activeRoute.view === "our-books" ? "is-current" : ""}" role="menuitem">
                <span>${escapeHtml(ui.nav.ourBooks)}</span>
              </a>
              <a href="#/catalogue" class="nav-dropdown-link ${activeRoute.view === "catalogue" ? "is-current" : ""}" role="menuitem">
                <span>${escapeHtml(ui.nav.catalogue)}</span>
              </a>
              <a href="#/magazine" class="nav-dropdown-link ${activeRoute.view === "magazine" ? "is-current" : ""}" role="menuitem">
                <span>${escapeHtml(ui.nav.magazine)}</span>
              </a>
            </div>
          </div>

          <!-- 2. Our Latest Book (Split Navigation: Label -> Overview, Arrow -> 3 Books) -->
          <div class="nav-group nav-group--split" id="latest-nav-group">
            <div class="nav-split-trigger ${isLatestActive ? "is-active" : ""}">
              <a
                href="#/latest"
                class="nav-split-label"
                ${activeRoute.view === "latest" && !activeRoute.param ? 'aria-current="page"' : ""}
              >
                <span>${escapeHtml(ui.nav.latestBook)}</span>
              </a>
              <button
                type="button"
                class="nav-trigger-arrow"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="latest-nav-dropdown"
                aria-label="${escapeHtml(ui.nav.latestBook)}"
              >
                ${chevronSvg}
              </button>
            </div>
            <div id="latest-nav-dropdown" class="nav-dropdown" role="menu">
              <a href="#/latest/queen-of-balloons" class="nav-dropdown-link ${activeRoute.view === "latest" && activeRoute.param === "queen-of-balloons" ? "is-current" : ""}" role="menuitem">
                <span>${escapeHtml(ui.nav.queenOfBalloons)}</span>
              </a>
              <a href="#/latest/the-peppered-moth" class="nav-dropdown-link ${activeRoute.view === "latest" && activeRoute.param === "the-peppered-moth" ? "is-current" : ""}" role="menuitem">
                <span>${escapeHtml(ui.nav.pepperedMoth)}</span>
              </a>
              <a href="#/latest/shells-of-freedom" class="nav-dropdown-link ${activeRoute.view === "latest" && activeRoute.param === "shells-of-freedom" ? "is-current" : ""}" role="menuitem">
                <span>${escapeHtml(ui.nav.shellsOfFreedom)}</span>
              </a>
            </div>
          </div>

          <!-- 3. Resources for Digital Children's Books -->
          <div class="nav-group">
            <button type="button" class="nav-trigger ${isResourcesActive ? "is-active" : ""}" aria-expanded="false">
              <span>${escapeHtml(ui.nav.resourcesShort)}</span>
              ${chevronSvg}
            </button>
            <div class="nav-dropdown" role="menu">
              <div class="nav-dropdown-header">${escapeHtml(ui.nav.resources)}</div>
              <a href="#/resources/alnqsh" class="nav-dropdown-link" role="menuitem">
                <span>${escapeHtml(ui.nav.resWebsite)}</span>
              </a>
              <a href="#/resources/historical-archive" class="nav-dropdown-link" role="menuitem">
                <span>${escapeHtml(ui.nav.resArchive)}</span>
              </a>
              <a href="#/resources/audible-stories" class="nav-dropdown-link" role="menuitem">
                <span>${escapeHtml(ui.nav.resAudible)}</span>
              </a>
            </div>
          </div>

          <!-- 4. Children Books About the Coronavirus -->
          <div class="nav-group nav-group--end">
            <button type="button" class="nav-trigger ${isCoronaActive ? "is-active" : ""}" aria-expanded="false">
              <span>${escapeHtml(ui.nav.coronaShort)}</span>
              ${chevronSvg}
            </button>
            <div class="nav-dropdown" role="menu">
              <div class="nav-dropdown-header">${escapeHtml(ui.nav.corona)}</div>
              <a href="#/coronavirus/who-corona" class="nav-dropdown-link" role="menuitem">
                <span>${escapeHtml(ui.nav.coronaWho)}</span>
              </a>
              <a href="#/coronavirus/pangea-corona" class="nav-dropdown-link" role="menuitem">
                <span>${escapeHtml(ui.nav.coronaPangea)}</span>
              </a>
            </div>
          </div>

          <!-- 5. Research & Studies (Top-Level Navigation Item) -->
          <div class="nav-group nav-group--direct">
            <a
              href="#/research"
              id="top-nav-research-link"
              class="nav-trigger nav-top-link ${isResearchActive ? "is-active" : ""}"
              ${activeRoute.view === "research" && !activeRoute.param ? 'aria-current="page"' : ""}
            >
              <span>${escapeHtml(ui.nav.researchStudies)}</span>
            </a>
          </div>
        </nav>

        <div class="header-actions">
          <button type="button" id="lang-toggle-btn" class="lang-btn" aria-label="${escapeHtml(ui.langToggleAria)}">
            ${escapeHtml(ui.langToggleLabel)}
          </button>
          <button type="button" id="mobile-menu-toggle" class="mobile-menu-btn" aria-expanded="${state.mobileMenuOpen}" aria-label="Toggle Menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer preserving full structure -->
      <div id="mobile-drawer" class="mobile-drawer ${state.mobileMenuOpen ? "is-open" : ""}">
        <div class="mobile-nav-section">
          <p class="mobile-nav-heading">${escapeHtml(ui.nav.wlrBooks)}</p>
          <div class="mobile-nav-links">
            <a href="#/our-books">${escapeHtml(ui.nav.ourBooks)}</a>
            <a href="#/catalogue">${escapeHtml(ui.nav.catalogue)}</a>
            <a href="#/magazine">${escapeHtml(ui.nav.magazine)}</a>
          </div>
        </div>
        <div class="mobile-nav-section mobile-nav-section--latest">
          <div class="mobile-split-header">
            <a href="#/latest" class="mobile-nav-heading mobile-nav-heading-link">${escapeHtml(ui.nav.latestBook)}</a>
            <button
              type="button"
              id="mobile-latest-subtoggle"
              class="mobile-submenu-toggle"
              aria-expanded="false"
              aria-controls="mobile-latest-links"
              aria-label="${escapeHtml(ui.nav.latestBook)}"
            >
              ${chevronSvg}
            </button>
          </div>
          <div id="mobile-latest-links" class="mobile-nav-links mobile-nav-links--collapsible">
            <a href="#/latest/queen-of-balloons">${escapeHtml(ui.nav.queenOfBalloons)}</a>
            <a href="#/latest/the-peppered-moth">${escapeHtml(ui.nav.pepperedMoth)}</a>
            <a href="#/latest/shells-of-freedom">${escapeHtml(ui.nav.shellsOfFreedom)}</a>
          </div>
        </div>
        <div class="mobile-nav-section">
          <p class="mobile-nav-heading">${escapeHtml(ui.nav.resources)}</p>
          <div class="mobile-nav-links">
            <a href="#/resources/alnqsh">${escapeHtml(ui.nav.resWebsite)}</a>
            <a href="#/resources/historical-archive">${escapeHtml(ui.nav.resArchive)}</a>
            <a href="#/resources/audible-stories">${escapeHtml(ui.nav.resAudible)}</a>
          </div>
        </div>
        <div class="mobile-nav-section">
          <p class="mobile-nav-heading">${escapeHtml(ui.nav.corona)}</p>
          <div class="mobile-nav-links">
            <a href="#/coronavirus/who-corona">${escapeHtml(ui.nav.coronaWho)}</a>
            <a href="#/coronavirus/pangea-corona">${escapeHtml(ui.nav.coronaPangea)}</a>
          </div>
        </div>
        <div class="mobile-nav-section">
          <div class="mobile-split-header">
            <a href="#/research" class="mobile-nav-heading mobile-nav-heading-link">${escapeHtml(ui.nav.researchStudies)}</a>
          </div>
        </div>
      </div>
    `;

    bindHeaderEvents();
  }

  function bindHeaderEvents() {
    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        state.lang = state.lang === "en" ? "ar" : "en";
        localStorage.setItem(STORAGE_LANG_KEY, state.lang);
        applyDocumentDirection();
        handleRoute(false);
      });
    }

    const mobileBtn = document.getElementById("mobile-menu-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener("click", () => {
        state.mobileMenuOpen = !state.mobileMenuOpen;
        mobileBtn.setAttribute("aria-expanded", String(state.mobileMenuOpen));
        mobileDrawer.classList.toggle("is-open", state.mobileMenuOpen);
      });

      mobileDrawer.querySelectorAll('a[href="#/research"]').forEach((mLink) => {
        mLink.addEventListener("click", (e) => {
          if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            e.preventDefault();
            state.mobileMenuOpen = false;
            mobileBtn.setAttribute("aria-expanded", "false");
            mobileDrawer.classList.remove("is-open");
            if (window.location.hash !== "#/research") {
              window.location.hash = "#/research";
            } else {
              handleRoute(true);
            }
          }
        });
      });
    }

    // Accessible click & keyboard toggle for desktop dropdowns (standard + split nav)
    const navGroups = document.querySelectorAll(".nav-group");

    function closeAllNavDropdowns() {
      navGroups.forEach((g) => {
        g.classList.remove("is-open");
        const b = g.querySelector("button.nav-trigger, .nav-trigger-arrow");
        if (b) b.setAttribute("aria-expanded", "false");
      });
    }

    const topResearchLink = document.getElementById("top-nav-research-link");
    if (topResearchLink) {
      topResearchLink.addEventListener("click", (e) => {
        if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
          e.preventDefault();
          closeAllNavDropdowns();
          if (window.location.hash !== "#/research") {
            window.location.hash = "#/research";
          } else {
            handleRoute(true);
          }
        }
      });
    }

    navGroups.forEach((group) => {
      const btn = group.querySelector("button.nav-trigger, .nav-trigger-arrow");
      const splitLabel = group.querySelector(".nav-split-label");
      const menuLinks = Array.from(group.querySelectorAll(".nav-dropdown-link"));

      if (splitLabel) {
        splitLabel.addEventListener("click", () => {
          closeAllNavDropdowns();
          if (window.location.hash === "#/latest") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        });
        splitLabel.addEventListener("keydown", (e) => {
          if (e.key === "ArrowDown" && menuLinks.length) {
            e.preventDefault();
            closeAllNavDropdowns();
            group.classList.remove("is-dismissed");
            group.classList.add("is-open");
            if (btn) btn.setAttribute("aria-expanded", "true");
            requestAnimationFrame(() => menuLinks[0].focus());
          }
        });
      }

      if (btn) {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const wasOpen = group.classList.contains("is-open");
          closeAllNavDropdowns();
          if (!wasOpen) {
            group.classList.remove("is-dismissed");
            group.classList.add("is-open");
            btn.setAttribute("aria-expanded", "true");
          } else if (group.classList.contains("nav-group--split")) {
            group.classList.add("is-dismissed");
            btn.setAttribute("aria-expanded", "false");
          }
        });

        btn.addEventListener("keydown", (e) => {
          if (e.key === "ArrowDown" && menuLinks.length) {
            e.preventDefault();
            closeAllNavDropdowns();
            group.classList.remove("is-dismissed");
            group.classList.add("is-open");
            btn.setAttribute("aria-expanded", "true");
            requestAnimationFrame(() => menuLinks[0].focus());
          } else if (e.key === "Escape" && group.classList.contains("is-open")) {
            e.preventDefault();
            closeAllNavDropdowns();
            group.classList.add("is-dismissed");
            btn.focus();
          }
        });
      }

      if (group.classList.contains("nav-group--split")) {
        group.addEventListener("mouseleave", () => {
          group.classList.remove("is-dismissed");
        });
      }

      menuLinks.forEach((link, idx) => {
        link.addEventListener("click", (e) => {
          const targetHash = link.getAttribute("href");
          closeAllNavDropdowns();
          if (targetHash === "#/research") {
            if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
              e.preventDefault();
              if (document.activeElement && typeof document.activeElement.blur === "function") {
                document.activeElement.blur();
              }
              if (window.location.hash !== "#/research") {
                window.location.hash = "#/research";
              } else {
                handleRoute(true);
              }
            }
          } else if (targetHash && window.location.hash === targetHash) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        });
        link.addEventListener("keydown", (e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            menuLinks[(idx + 1) % menuLinks.length].focus();
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            menuLinks[(idx - 1 + menuLinks.length) % menuLinks.length].focus();
          } else if (e.key === "Escape") {
            e.preventDefault();
            closeAllNavDropdowns();
            if (btn) btn.focus();
          }
        });
      });

      group.addEventListener("focusout", (e) => {
        if (!group.contains(e.relatedTarget) && group.classList.contains("is-open")) {
          group.classList.remove("is-open");
          if (btn) btn.setAttribute("aria-expanded", "false");
        }
      });
    });

    const mobileLatestToggle = document.getElementById("mobile-latest-subtoggle");
    const mobileLatestLinks = document.getElementById("mobile-latest-links");
    if (mobileLatestToggle && mobileLatestLinks) {
      mobileLatestToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nextOpen = !mobileLatestLinks.classList.contains("is-open");
        mobileLatestLinks.classList.toggle("is-open", nextOpen);
        mobileLatestToggle.setAttribute("aria-expanded", String(nextOpen));
      });
    }
  }

  /* ========================================================================
     Global Footer, Right-Side Floating Social Bar & Back to Top
     ======================================================================== */
  function getSocialIconSvg(id) {
    switch (id) {
      case "x":
        return `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
      case "facebook":
        return `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M13.6 21v-8.2h2.76l.41-3.2H13.6V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.29-.04-1.3-.13-2.47-.13-2.45 0-4.12 1.49-4.12 4.23v2.36H7.53v3.2h2.77V21h3.3z"/></svg>`;
      case "instagram":
        return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>`;
      case "linkedin":
        return `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.06a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 13.4c0-3.36-1.79-4.92-4.18-4.92-1.93 0-2.79 1.06-3.27 1.8V8.5H9.61c.04.95 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.93.27-.68.89-1.39 1.93-1.39 1.36 0 1.91 1.04 1.91 2.56V20h3.38v-6.6z"/></svg>`;
      case "youtube":
        return `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M21.58 7.19a2.75 2.75 0 00-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46a2.75 2.75 0 00-1.94 1.95A28.7 28.7 0 002 12a28.7 28.7 0 00.42 4.81 2.75 2.75 0 001.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 001.94-1.95A28.7 28.7 0 0022 12a28.7 28.7 0 00-.42-4.81zM10.1 15.1V8.9l5.35 3.1-5.35 3.1z"/></svg>`;
      default:
        return "";
    }
  }

  function updateBackToTopVisibility() {
    const btn = document.getElementById("back-to-top-btn");
    if (!btn) return;
    const isVisible = window.scrollY > 140;
    btn.classList.toggle("is-visible", isVisible);
  }

  function renderFooter() {
    const ui = t();
    const isAr = state.lang === "ar";
    const footerEl = document.getElementById("site-footer");
    if (!footerEl) return;

    const fd = DATA.footerData;
    const chevron = isAr ? "‹" : "›";

    const newsItemsHtml = fd.latestNews
      .map((item) => {
        const title = isAr ? item.titleAr : item.titleEn;
        const date = isAr ? item.dateAr : item.dateEn;
        const url = isAr ? item.urlAr : item.urlEn;
        return `
          <li class="footer-news-item">
            <a
              href="${escapeHtml(url)}"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-news-link"
            >
              ${escapeHtml(title)}
            </a>
            <time class="footer-news-date">${escapeHtml(date)}</time>
          </li>
        `;
      })
      .join("");

    const usefulLinksHtml = fd.usefulLinks
      .map((item) => {
        const label = isAr ? item.labelAr : item.labelEn;
        const url = isAr ? item.urlAr : item.urlEn;
        return `
          <li class="footer-useful-item">
            <a
              href="${escapeHtml(url)}"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-useful-link"
            >
              <span class="footer-useful-chevron" aria-hidden="true">${chevron}</span>
              <span>${escapeHtml(label)}</span>
            </a>
          </li>
        `;
      })
      .join("");

    const socialItemsHtml = fd.socialLinks
      .map((soc) => {
        const label = isAr ? soc.labelAr : soc.labelEn;
        return `
          <a
            href="${escapeHtml(soc.url)}"
            target="_blank"
            rel="noopener noreferrer"
            class="floating-social-link floating-social-link--${escapeHtml(soc.id)}"
            aria-label="${escapeHtml(label)}"
            title="${escapeHtml(label)}"
          >
            ${getSocialIconSvg(soc.id)}
          </a>
        `;
      })
      .join("");

    footerEl.innerHTML = `
      <div class="footer-dark-section">
        <div class="container footer-main-grid">
          <section class="footer-col footer-col--news" aria-labelledby="footer-news-heading">
            <h2 id="footer-news-heading" class="footer-col-heading">${escapeHtml(ui.footer.latestNewsHeading)}</h2>
            <ul class="footer-news-list">
              ${newsItemsHtml}
            </ul>
          </section>

          <nav class="footer-col footer-col--links" aria-labelledby="footer-links-heading">
            <h2 id="footer-links-heading" class="footer-col-heading">${escapeHtml(ui.footer.usefulLinksHeading)}</h2>
            <ul class="footer-useful-list">
              ${usefulLinksHtml}
            </ul>
          </nav>
        </div>

        <nav id="floating-social-bar" class="floating-social-bar" aria-label="${escapeHtml(ui.footer.socialNavAria)}">
          ${socialItemsHtml}
        </nav>
      </div>

      <div class="footer-copyright-bar">
        <div class="container footer-copyright-inner">
          <p class="footer-copyright-text">${escapeHtml(ui.footer.copyright)}</p>
        </div>
      </div>

      <button
        type="button"
        id="back-to-top-btn"
        class="back-to-top-btn"
        aria-label="${escapeHtml(ui.footer.backToTopLabel)}"
        title="${escapeHtml(ui.footer.backToTopLabel)}"
      >
        <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
          <path d="M3.5 10L8 5.5L12.5 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    `;

    const backTopBtn = footerEl.querySelector("#back-to-top-btn");
    if (backTopBtn) {
      backTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
    updateBackToTopVisibility();
  }

  function getGalleryFlatCover(book) {
    if (state.lang === "ar" && book.coverAr) {
      return `assets/covers/${book.slug}-ar.jpg`;
    }
    return `assets/covers/${book.slug}.jpg`;
  }

  /* ========================================================================
     Reusable Book Tile Renderer (Nancy Conescu Editorial Pastel Grid)
     ======================================================================== */
  function renderBookGridItems(books, seedOffset = 0, useGalleryFlatCovers = false) {
    const pastels = buildPastelSequence(books.length, seedOffset);
    return books
      .map((book, idx) => {
        const meta = book[state.lang];
        const pastelClass = `pastel-${pastels[idx]}`;
        const coverSrc = useGalleryFlatCovers ? getGalleryFlatCover(book) : getBookCover(book);
        const fallbackSrc = useGalleryFlatCovers ? getBookCover(book) : (book.coverFallback || "");

        return `
          <article class="book-item">
            <a href="#/book/${encodeURIComponent(book.slug)}" class="book-tile-link" aria-label="${escapeHtml(meta.title)}">
              <div class="book-tile ${pastelClass}">
                <img
                  src="${escapeHtml(coverSrc)}"
                  data-fallback="${escapeHtml(fallbackSrc)}"
                  data-title="${escapeHtml(meta.title)}"
                  alt="${escapeHtml(meta.title)}"
                  class="book-cover-img"
                  loading="lazy"
                />
              </div>
              <div class="book-caption">
                <h3 class="book-caption-title">${escapeHtml(meta.title)}</h3>
                <p class="book-caption-meta">${escapeHtml(meta.theme)}</p>
              </div>
            </a>
          </article>
        `;
      })
      .join("");
  }

  /* ========================================================================
     View 1: Our Books — Interactive Story Journey Timeline
     ======================================================================== */
  const JOURNEY_MARKER_TONES = ["lavender", "blush", "mint", "gold", "sky"];

  function getDefaultJourneySlug(ageFilter, filteredBooks) {
    if (!filteredBooks.length) return null;
    const preferredByFilter = {
      all: "shells-of-freedom",
      "4-6": "chaos-in-the-kitchen",
      "5-8": "the-bridge-to-dreamland",
      "7-10": "shells-of-freedom"
    };
    const preferred = preferredByFilter[ageFilter];
    if (preferred && filteredBooks.some((b) => b.slug === preferred)) {
      return preferred;
    }
    return filteredBooks[Math.min(2, Math.floor(filteredBooks.length / 2))].slug;
  }

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function renderOurBooksView(stage) {
    const ui = t();
    const filteredBooks =
      state.ageFilter === "all"
        ? DATA.books
        : DATA.books.filter((b) => b.age === state.ageFilter);

    if (!state.selectedBookSlug || !filteredBooks.some((b) => b.slug === state.selectedBookSlug)) {
      state.selectedBookSlug = getDefaultJourneySlug(state.ageFilter, filteredBooks);
    }

    let selectedIndex = Math.max(
      0,
      filteredBooks.findIndex((b) => b.slug === state.selectedBookSlug)
    );
    const selectedBook = filteredBooks[selectedIndex] || DATA.books[0];

    const filterButtonsHtml = [
      `
        <button
          type="button"
          class="journey-filter-pill ${state.ageFilter === "all" ? "is-active" : ""}"
          aria-pressed="${state.ageFilter === "all"}"
          data-age-filter="all"
        >
          ${escapeHtml(ui.gallery.allAges)}
        </button>
      `,
      ...DATA.ageCategories.map((cat) => {
        const active = state.ageFilter === cat.id;
        const label = state.lang === "ar" ? cat.arShort : cat.enShort;
        return `
          <button
            type="button"
            class="journey-filter-pill ${active ? "is-active" : ""}"
            aria-pressed="${active}"
            data-age-filter="${escapeHtml(cat.id)}"
          >
            ${escapeHtml(label)}
          </button>
        `;
      })
    ].join("");

    const stopsHtml = filteredBooks
      .map((book, idx) => {
        const meta = book[state.lang];
        const globalIdx = DATA.books.indexOf(book);
        const markerTone = JOURNEY_MARKER_TONES[(Math.max(0, globalIdx) + 3) % JOURNEY_MARKER_TONES.length];
        const isSelected = idx === selectedIndex;
        const coverSrc = getGalleryFlatCover(book);
        const fallbackSrc = getBookCover(book);

        return `
          <article
            class="journey-stop ${isSelected ? "is-selected" : ""}"
            data-book-slug="${escapeHtml(book.slug)}"
            data-book-index="${idx}"
            role="listitem"
          >
            <div class="journey-cover-stage">
              <button
                type="button"
                class="journey-cover-btn"
                data-select-book="${escapeHtml(book.slug)}"
                aria-pressed="${isSelected}"
                aria-label="${escapeHtml(meta.title)}"
              >
                <span class="journey-cover-frame">
                  <img
                    src="${escapeHtml(coverSrc)}"
                    data-fallback="${escapeHtml(fallbackSrc)}"
                    data-title="${escapeHtml(meta.title)}"
                    alt="${escapeHtml(meta.title)}"
                    class="journey-cover-img"
                    draggable="false"
                    loading="${Math.abs(idx - selectedIndex) <= 4 ? "eager" : "lazy"}"
                  />
                </span>
              </button>
            </div>

            <div class="journey-axis">
              <button
                type="button"
                class="journey-marker journey-marker--${markerTone}"
                data-marker-book="${escapeHtml(book.slug)}"
                aria-label="${escapeHtml(meta.title)} — ${escapeHtml(meta.theme)}"
                aria-current="${isSelected ? "true" : "false"}"
              ></button>
            </div>

            <div class="journey-caption" data-caption-book="${escapeHtml(book.slug)}">
              <h2 class="journey-book-title">${escapeHtml(meta.title)}</h2>
              <p class="journey-book-theme">${escapeHtml(meta.theme)}</p>
            </div>
          </article>
        `;
      })
      .join("");

    const exploreArrow = state.lang === "ar" ? "←" : "→";
    const selectedTitle = selectedBook ? selectedBook[state.lang].title : "";
    const isCompactTrack = filteredBooks.length < 5;

    stage.innerHTML = `
      <section class="story-journey-page" aria-labelledby="story-journey-heading">
        <!-- Subtle Upper Pastel Clouds & Bird (Decorative) -->
        <div class="journey-sky-decor" aria-hidden="true">
          <svg class="journey-cloud journey-cloud--left" viewBox="0 0 250 130" fill="none">
            <path d="M-12 104C-12 80 6 62 30 62C36 62 42 63.4 47.4 66C56.8 42.5 79.8 26 106.8 26C139.2 26 166.1 49.9 170.4 81.1C175.1 78.5 180.6 77 186.5 77C205.6 77 221 92.4 221 111.5C221 114.6 220.6 117.5 219.8 120.3H-12V104Z" fill="#DCEEFB" fill-opacity="0.78"/>
            <path d="M214 38C219.5 32.5 226.5 31.5 231.5 36.2C236.2 30.2 243.5 29.8 248 34.5" stroke="#9BBEDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg class="journey-cloud journey-cloud--right" viewBox="0 0 260 135" fill="none">
            <path d="M272 108C272 83 253 64 228 64C221.5 64 215.4 65.4 209.8 68C199.8 43.2 175.6 26 147.2 26C113.2 26 85.1 51.1 80.5 83.8C75.5 81.1 69.8 79.5 63.6 79.5C43.9 79.5 28 95.4 28 115.1C28 118.2 28.4 121.2 29.2 124H272V108Z" fill="#FCE4EE" fill-opacity="0.82"/>
          </svg>
        </div>

        <div class="container journey-header-wrap">
          <header class="journey-hero">
            <span class="journey-eyebrow">${escapeHtml(ui.storyJourney.eyebrow)}</span>
            <h1 id="story-journey-heading" class="journey-title">
              <span class="journey-title-inner">
                <span class="journey-title-text">${escapeHtml(ui.storyJourney.title)}</span>
                <svg class="journey-title-brush" viewBox="0 0 260 16" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 11.5C68 5.2 168 4.4 256 10.2" stroke="#FAD3E0" stroke-width="7.5" stroke-linecap="round"/>
                </svg>
                <svg class="journey-title-rays" viewBox="0 0 34 30" fill="none" aria-hidden="true">
                  <path d="M6 21L10 9" stroke="#F5C445" stroke-width="3" stroke-linecap="round"/>
                  <path d="M15 23L25 13" stroke="#F5C445" stroke-width="3" stroke-linecap="round"/>
                  <path d="M19 27L30 23" stroke="#F5C445" stroke-width="2.8" stroke-linecap="round"/>
                </svg>
              </span>
            </h1>
            <p class="journey-subtitle">${escapeHtml(ui.storyJourney.subtitle)}</p>
          </header>

          <div class="journey-filters" role="region" aria-label="${escapeHtml(ui.gallery.filterLabel)}">
            ${filterButtonsHtml}
          </div>
        </div>

        <div class="journey-stage-outer">
          <button
            type="button"
            id="journey-prev-btn"
            class="journey-arrow journey-arrow--prev"
            aria-label="${escapeHtml(ui.storyJourney.prevAria)}"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M12.5 4.5L7 10L12.5 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <div
            id="journey-viewport"
            class="journey-viewport"
            role="region"
            aria-label="${escapeHtml(ui.storyJourney.timelineAria)}"
            tabindex="0"
          >
            <div class="journey-track ${isCompactTrack ? "journey-track--compact" : ""}" role="list">
              ${stopsHtml}
            </div>
          </div>

          <button
            type="button"
            id="journey-next-btn"
            class="journey-arrow journey-arrow--next"
            aria-label="${escapeHtml(ui.storyJourney.nextAria)}"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M7.5 4.5L13 10L7.5 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="journey-cta-wrap">
          <a
            id="journey-explore-btn"
            href="#/book/${encodeURIComponent(selectedBook.slug)}"
            class="journey-explore-btn"
            aria-label="${escapeHtml(ui.storyJourney.exploreBtn)} — ${escapeHtml(selectedTitle)}"
          >
            <span>${escapeHtml(ui.storyJourney.exploreBtn)}</span>
            <span class="journey-explore-arrow" aria-hidden="true">${exploreArrow}</span>
          </a>
        </div>

        <!-- Subtle Storybook Landscape & Illustrated Books Along Bottom Edge -->
        <div class="journey-meadow-decor" aria-hidden="true">
          <svg class="journey-meadow-svg" viewBox="0 0 1440 132" preserveAspectRatio="none" fill="none">
            <path d="M0 98C138 68 296 72 448 104C610 118 764 78 938 86C1108 94 1268 62 1440 84V132H0V98Z" fill="#FCE6EF" fill-opacity="0.72"/>
            <path d="M0 86C162 56 324 88 492 108C680 126 876 96 1068 106C1214 114 1344 74 1440 66V132H0V86Z" fill="#DCEFD8" fill-opacity="0.82"/>
            <path d="M0 106C190 88 360 116 576 118C812 120 1062 94 1268 104C1346 108 1398 98 1440 92V132H0V106Z" fill="#CBE5C8" fill-opacity="0.75"/>
          </svg>

          <!-- Left Botanical Leaves + Small Stack of Storybooks -->
          <svg class="journey-corner-art journey-corner-art--left" viewBox="0 0 210 140" fill="none">
            <!-- Delicate Stem & Leaves -->
            <path d="M34 118C26 88 28 54 44 22" stroke="#8AB87A" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M32 88C16 82 10 68 14 56C25 60 33 73 32 88Z" fill="#9ED08E"/>
            <path d="M34 66C48 58 56 44 52 32C40 37 33 50 34 66Z" fill="#A9D697"/>
            <path d="M39 42C27 34 24 20 29 10C39 16 43 29 39 42Z" fill="#B5DF9F"/>
            <path d="M44 23C54 18 63 10 64 2C53 4 46 12 44 23Z" fill="#9ED08E"/>
            <!-- Small Stack of 3 Illustrated Storybooks -->
            <!-- Bottom book (warm berry) -->
            <rect x="28" y="97" width="76" height="15" rx="4" transform="rotate(-3 28 97)" fill="#DF7A78"/>
            <rect x="33" y="100" width="66" height="9" rx="2.5" transform="rotate(-3 33 100)" fill="#FFF8EE"/>
            <!-- Middle book (sage teal) -->
            <rect x="33" y="83" width="68" height="14" rx="4" transform="rotate(2 33 83)" fill="#6EB5A8"/>
            <rect x="38" y="86" width="58" height="8" rx="2" transform="rotate(2 38 86)" fill="#FFFDF8"/>
            <!-- Top book (sunny peach/gold) -->
            <rect x="37" y="69" width="60" height="14" rx="4" transform="rotate(-2 37 69)" fill="#F3B36B"/>
            <rect x="42" y="72" width="50" height="8" rx="2" transform="rotate(-2 42 72)" fill="#FFFDF8"/>
            <!-- Tiny grass tufts -->
            <path d="M134 122L131 112M137 122L139 110M140 122L145 114" stroke="#7EB06E" stroke-width="2" stroke-linecap="round"/>
          </svg>

          <!-- Right Botanical Leaves & Sprouts -->
          <svg class="journey-corner-art journey-corner-art--right" viewBox="0 0 190 140" fill="none">
            <path d="M152 124C158 94 154 62 138 34" stroke="#8AB87A" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M153 94C168 87 175 74 171 62C160 66 152 79 153 94Z" fill="#9ED08E"/>
            <path d="M150 72C136 64 129 50 133 38C144 43 151 56 150 72Z" fill="#AED99B"/>
            <path d="M144 49C156 41 160 28 155 18C145 24 140 36 144 49Z" fill="#B5DF9F"/>
            <path d="M114 124C116 111 112 98 104 89" stroke="#8AB87A" stroke-width="2" stroke-linecap="round"/>
            <path d="M113 108C103 104 98 95 101 87C109 90 114 98 113 108Z" fill="#A9D697"/>
            <path d="M62 124L59 114M65 124L67 112M68 124L73 116" stroke="#7EB06E" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </section>
    `;

    const viewport = document.getElementById("journey-viewport");
    const prevBtn = document.getElementById("journey-prev-btn");
    const nextBtn = document.getElementById("journey-next-btn");
    const exploreBtn = document.getElementById("journey-explore-btn");
    const stopEls = Array.from(stage.querySelectorAll(".journey-stop"));

    function centerStopInViewport(index, smooth) {
      if (!viewport || !stopEls[index]) return;
      const stopEl = stopEls[index];
      const vpRect = viewport.getBoundingClientRect();
      const stopRect = stopEl.getBoundingClientRect();
      const delta = stopRect.left + stopRect.width / 2 - (vpRect.left + vpRect.width / 2);
      if (Math.abs(delta) < 1) return;
      const behavior = smooth && !prefersReducedMotion() ? "smooth" : "auto";
      viewport.scrollBy({ left: delta, behavior });
    }

    function updateNavigationState() {
      if (prevBtn) {
        prevBtn.disabled = selectedIndex <= 0;
      }
      if (nextBtn) {
        nextBtn.disabled = selectedIndex >= filteredBooks.length - 1;
      }
    }

    function selectJourneyBook(nextIndex, smoothScroll = true) {
      if (nextIndex < 0 || nextIndex >= filteredBooks.length) return;
      selectedIndex = nextIndex;
      const book = filteredBooks[selectedIndex];
      state.selectedBookSlug = book.slug;
      const meta = book[state.lang];

      stopEls.forEach((el, idx) => {
        const active = idx === selectedIndex;
        el.classList.toggle("is-selected", active);
        const coverBtn = el.querySelector(".journey-cover-btn");
        const markerBtn = el.querySelector(".journey-marker");
        if (coverBtn) coverBtn.setAttribute("aria-pressed", String(active));
        if (markerBtn) markerBtn.setAttribute("aria-current", active ? "true" : "false");
      });

      if (exploreBtn) {
        exploreBtn.setAttribute("href", `#/book/${encodeURIComponent(book.slug)}`);
        exploreBtn.setAttribute(
          "aria-label",
          `${ui.storyJourney.exploreBtn} — ${meta.title}`
        );
      }

      updateNavigationState();
      centerStopInViewport(selectedIndex, smoothScroll);
    }

    // Bind Age Filter Pills
    stage.querySelectorAll("[data-age-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = btn.getAttribute("data-age-filter");
        if (state.ageFilter === chosen) return;
        state.ageFilter = chosen;
        const targetHash =
          chosen === "all" ? "#/our-books" : `#/our-books?age=${encodeURIComponent(chosen)}`;
        if (window.location.hash !== targetHash) {
          history.replaceState(null, "", targetHash);
        }
        renderOurBooksView(stage);
      });
    });

    // Pointer Drag-to-Scroll on Desktop (ephemeral window listeners, zero leak)
    let didDrag = false;
    if (viewport) {
      let isPointerDown = false;
      let startX = 0;
      let startScrollLeft = 0;

      viewport.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        isPointerDown = true;
        didDrag = false;
        startX = e.clientX;
        startScrollLeft = viewport.scrollLeft;
        viewport.classList.add("is-dragging");

        const onMouseMove = (moveEvt) => {
          if (!isPointerDown) return;
          const dx = moveEvt.clientX - startX;
          if (Math.abs(dx) > 6) {
            didDrag = true;
          }
          if (didDrag) {
            viewport.scrollLeft = startScrollLeft - dx;
          }
        };

        const onMouseUp = () => {
          isPointerDown = false;
          viewport.classList.remove("is-dragging");
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
          if (didDrag) {
            setTimeout(() => {
              didDrag = false;
            }, 40);
          }
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mouseup", onMouseUp);
      });

      // Keyboard navigation along the timeline
      viewport.addEventListener("keydown", (e) => {
        const isRtl = state.lang === "ar";
        if (e.key === "ArrowRight") {
          e.preventDefault();
          selectJourneyBook(selectedIndex + (isRtl ? -1 : 1), true);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          selectJourneyBook(selectedIndex + (isRtl ? 1 : -1), true);
        } else if (e.key === "Home") {
          e.preventDefault();
          selectJourneyBook(0, true);
        } else if (e.key === "End") {
          e.preventDefault();
          selectJourneyBook(filteredBooks.length - 1, true);
        }
      });

      if (typeof ResizeObserver === "function") {
        let lastWidth = viewport.clientWidth;
        const ro = new ResizeObserver(() => {
          if (!viewport.isConnected) {
            ro.disconnect();
            return;
          }
          const w = viewport.clientWidth;
          if (Math.abs(w - lastWidth) > 2) {
            lastWidth = w;
            centerStopInViewport(selectedIndex, false);
          }
        });
        ro.observe(viewport);
      }
    }

    // Cover click: select unselected book, or open book detail page if already selected
    stage.querySelectorAll("[data-select-book]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (didDrag) {
          e.preventDefault();
          return;
        }
        const slug = btn.getAttribute("data-select-book");
        const idx = filteredBooks.findIndex((b) => b.slug === slug);
        if (idx < 0) return;
        if (idx === selectedIndex) {
          window.location.hash = `#/book/${encodeURIComponent(slug)}`;
        } else {
          selectJourneyBook(idx, true);
        }
      });
    });

    // Marker click: select and center book
    stage.querySelectorAll("[data-marker-book]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (didDrag) {
          e.preventDefault();
          return;
        }
        const slug = btn.getAttribute("data-marker-book");
        const idx = filteredBooks.findIndex((b) => b.slug === slug);
        if (idx >= 0) {
          selectJourneyBook(idx, true);
        }
      });
    });

    // Caption click: select if unselected, open detail if already selected
    stage.querySelectorAll("[data-caption-book]").forEach((cap) => {
      cap.addEventListener("click", () => {
        if (didDrag) return;
        const slug = cap.getAttribute("data-caption-book");
        const idx = filteredBooks.findIndex((b) => b.slug === slug);
        if (idx < 0) return;
        if (idx === selectedIndex) {
          window.location.hash = `#/book/${encodeURIComponent(slug)}`;
        } else {
          selectJourneyBook(idx, true);
        }
      });
    });

    // Left / Right (Prev / Next) Arrow Buttons
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (selectedIndex > 0) {
          selectJourneyBook(selectedIndex - 1, true);
        }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (selectedIndex < filteredBooks.length - 1) {
          selectJourneyBook(selectedIndex + 1, true);
        }
      });
    }

    updateNavigationState();
    attachCoverFallbacks(stage);

    requestAnimationFrame(() => {
      centerStopInViewport(selectedIndex, false);
    });
  }

  /* ========================================================================
     View 2: Individual Book Detail Page (Section 3)
     ======================================================================== */
  function renderBookDetailView(stage, slug) {
    const ui = t();
    const bookIndex = DATA.books.findIndex((b) => b.slug === slug);
    const book = bookIndex >= 0 ? DATA.books[bookIndex] : DATA.books[0];
    const meta = book[state.lang];
    const ageObj = getAgeCategoryObj(book.age);
    const ageLabel = state.lang === "ar" ? ageObj.arShort : ageObj.enShort;
    const pastelName = DATA.pastelSequence[Math.max(0, bookIndex) % DATA.pastelSequence.length];
    const coverSrc = getBookCover(book);

    // Credits
    const credits = [];
    if (meta.storyBy) {
      credits.push({ label: ui.bookDetail.storyBy, val: meta.storyBy });
    }
    credits.push({ label: ui.bookDetail.author, val: meta.author });
    if (meta.englishWriter) {
      credits.push({ label: ui.bookDetail.englishWriter, val: meta.englishWriter });
    }
    if (meta.editor) {
      credits.push({ label: ui.bookDetail.editor, val: meta.editor });
    }
    credits.push({ label: ui.bookDetail.illustrator, val: meta.illustrator });

    const creditsHtml = credits
      .map(
        (c) => `
        <div class="credit-item">
          <dt>${escapeHtml(c.label)}</dt>
          <dd>${escapeHtml(c.val)}</dd>
        </div>
      `
      )
      .join("");

    // Actions: Keep BUY only if it links directly to purchasing this specific book; preserve working WATCH & REVIEWS
    const isAr = state.lang === "ar";
    const buyHref = isAr && book.actions.buyAr ? book.actions.buyAr : book.actions.buy;
    const watchHref =
      isAr && book.actions.watchAr
        ? book.actions.watchAr
        : book.actions.watch || book.actions.watchAr;
    const reviewsHref =
      isAr && book.actions.reviewsAr
        ? book.actions.reviewsAr
        : book.actions.reviews || book.actions.reviewsAr;
    const actionButtons = [];

    if (isSpecificBookBuyUrl(buyHref)) {
      const priceSuffix = book.actions.price ? ` · ${book.actions.price}` : "";
      actionButtons.push(`
        <a href="${escapeHtml(buyHref)}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--primary">
          ${escapeHtml(ui.bookDetail.buy)}${escapeHtml(priceSuffix)} ↗
        </a>
      `);
    }
    if (isValidExternalActionUrl(watchHref, book)) {
      actionButtons.push(`
        <a href="${escapeHtml(watchHref)}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--pastel pastel-mint">
          ${escapeHtml(ui.bookDetail.watch)} ↗
        </a>
      `);
    }
    if (isValidExternalActionUrl(reviewsHref, book)) {
      actionButtons.push(`
        <a href="${escapeHtml(reviewsHref)}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--pastel pastel-pink">
          ${escapeHtml(ui.bookDetail.reviews)} ↗
        </a>
      `);
    }
    if (book.actions.storyBackground) {
      const hasInternalLatestStory =
        DATA.latestBooksContent && DATA.latestBooksContent[book.slug];
      if (hasInternalLatestStory) {
        const dirArrow = isAr ? "←" : "→";
        actionButtons.push(`
          <a href="#/latest/${encodeURIComponent(book.slug)}" class="action-btn action-btn--pastel pastel-blue">
            ${escapeHtml(ui.bookDetail.storyBackground)} ${dirArrow}
          </a>
        `);
      } else {
        actionButtons.push(`
          <a href="${escapeHtml(book.actions.storyBackground)}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--pastel pastel-blue">
            ${escapeHtml(ui.bookDetail.storyBackground)} ↗
          </a>
        `);
      }
    }

    // Related books from the same age category
    const relatedBooks = DATA.books
      .filter((b) => b.age === book.age && b.slug !== book.slug)
      .slice(0, 5);

    const backHref =
      state.ageFilter && state.ageFilter !== "all"
        ? `#/our-books?age=${encodeURIComponent(state.ageFilter)}`
        : "#/our-books";

    stage.innerHTML = `
      <div class="container">
        <div class="breadcrumb-bar">
          <a href="${backHref}" class="back-link">
            <span class="back-arrow" aria-hidden="true">←</span>
            <span>${escapeHtml(ui.bookDetail.backToBooks)}</span>
          </a>
        </div>

        <div class="book-detail-layout">
          <div class="book-detail-stage pastel-${pastelName}">
            <img
              src="${escapeHtml(coverSrc)}"
              data-fallback="${escapeHtml(book.coverFallback || "")}"
              data-title="${escapeHtml(meta.title)}"
              alt="${escapeHtml(meta.title)}"
            />
          </div>

          <div class="book-detail-info">
            <div class="detail-badges">
              <span class="detail-badge pastel-yellow">${escapeHtml(ui.bookDetail.ageCategory)}: ${escapeHtml(ageLabel)}</span>
              <span class="detail-badge pastel-blue">${escapeHtml(ui.bookDetail.theme)}: ${escapeHtml(meta.theme)}</span>
            </div>

            <h1 class="detail-title">${escapeHtml(meta.title)}</h1>

            <dl class="credits-list">
              ${creditsHtml}
            </dl>

            <p class="detail-description">${escapeHtml(meta.description)}</p>

            ${
              meta.editorialNote
                ? `<div class="detail-editorial-note">${escapeHtml(meta.editorialNote)}</div>`
                : ""
            }

            ${
              actionButtons.length > 0
                ? `
                <div class="detail-actions">
                  ${actionButtons.join("")}
                </div>
              `
                : ""
            }
          </div>
        </div>

        ${
          relatedBooks.length > 0
            ? `
            <section class="related-section" aria-labelledby="related-books-heading">
              <div class="age-section-header">
                <h2 id="related-books-heading" class="age-heading">
                  ${escapeHtml(ui.bookDetail.relatedHeading)} (${escapeHtml(ageLabel)})
                </h2>
                <p class="age-description">${escapeHtml(ui.bookDetail.relatedSub)}</p>
              </div>
              <div class="book-grid">
                ${renderBookGridItems(relatedBooks, 3)}
              </div>
            </section>
          `
            : ""
        }
      </div>
    `;

    attachCoverFallbacks(stage);
  }

  /* ========================================================================
     View 3: Story Books Catalogue (Section 4)
     ======================================================================== */
  function renderCatalogueView(stage) {
    const ui = t();
    const featuredPdf =
      state.lang === "ar" ? DATA.catalogues.featured.pdfAr : DATA.catalogues.featured.pdfEn;
    const altPdf =
      state.lang === "ar" ? DATA.catalogues.featured.pdfEn : DATA.catalogues.featured.pdfAr;
    const hasDistinctAltPdf = Boolean(altPdf && altPdf !== featuredPdf);

    stage.innerHTML = `
      <div class="container">
        <header class="editorial-hero">
          <span class="eyebrow">${escapeHtml(ui.catalogue.eyebrow)}</span>
          <h1 class="editorial-title">${escapeHtml(ui.catalogue.title)}</h1>
          <p class="editorial-subtitle">${escapeHtml(ui.catalogue.subtitle)}</p>
        </header>

        <!-- Official 2026 PDF Catalogue Section (Single Unified Catalogue Section) -->
        <section class="catalogue-banner pastel-mint" aria-label="${escapeHtml(ui.catalogue.latestEditionTitle)}">
          <div>
            <span class="archive-year">${escapeHtml(ui.catalogue.latestEditionBadge)}</span>
            <h2 class="age-heading" style="margin-block: 10px 12px;">${escapeHtml(ui.catalogue.latestEditionTitle)}</h2>
            <p style="margin: 0; color: var(--ink-secondary); max-width: 58ch;">
              ${escapeHtml(ui.catalogue.latestEditionDesc)}
            </p>
          </div>
          <div class="detail-actions">
            <button
              type="button"
              class="action-btn action-btn--primary"
              data-open-pdf="${escapeHtml(featuredPdf)}"
              data-pdf-title="${escapeHtml(ui.catalogue.latestEditionTitle)}"
            >
              ${escapeHtml(ui.catalogue.viewPdf)}
            </button>
            ${
              hasDistinctAltPdf
                ? `
                <button
                  type="button"
                  class="action-btn action-btn--outline"
                  data-open-pdf="${escapeHtml(altPdf)}"
                  data-pdf-title="${escapeHtml(ui.catalogue.switchLangPdf)}"
                >
                  ${escapeHtml(ui.catalogue.switchLangPdf)}
                </button>
              `
                : ""
            }
          </div>
        </section>
      </div>
    `;

    bindPdfModalTriggers(stage);
  }

  /* ========================================================================
     View 4: WLR Children Books Magazine — Complete Interactive Redesign
     ======================================================================== */
  let pdfJsLoadPromise = null;

  function loadPdfJsLibrary() {
    if (window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/vendor/pdfjs/pdf.worker.min.js";
      return Promise.resolve(window.pdfjsLib);
    }
    if (pdfJsLoadPromise) return pdfJsLoadPromise;

    pdfJsLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "assets/vendor/pdfjs/pdf.min.js";
      script.async = true;
      script.onload = () => {
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/vendor/pdfjs/pdf.worker.min.js";
          resolve(window.pdfjsLib);
        } else {
          reject(new Error("PDF.js failed to initialize"));
        }
      };
      script.onerror = () => reject(new Error("Failed to load PDF.js script"));
      document.head.appendChild(script);
    });
    return pdfJsLoadPromise;
  }

  function getSdgIconSvg(num) {
    switch (num) {
      case 3:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M4 17H9.5L12.5 10L16.5 23L19.8 14.5L22 17H28" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      case 5:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="15" cy="12.5" r="6" stroke="#fff" stroke-width="2.2"/><path d="M19.5 8L24.5 3M24.5 3H20.2M24.5 3V7.3M15 18.8V27.5M11.5 24H18.5" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      case 6:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 4.5C16 4.5 8.5 13.4 8.5 19.2C8.5 23.4 11.9 26.8 16 26.8C20.1 26.8 23.5 23.4 23.5 19.2C23.5 13.4 16 4.5 16 4.5Z" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><path d="M12.5 20.2C13.2 22 14.6 23 16.5 23" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`;
      case 7:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="5.5" stroke="#fff" stroke-width="2.2"/><path d="M16 4.5V7.5M16 24.5V27.5M4.5 16H7.5M24.5 16H27.5M7.9 7.9L10.1 10.1M21.9 21.9L24.1 24.1M24.1 7.9L21.9 10.1M10.1 21.9L7.9 24.1" stroke="#fff" stroke-width="2.1" stroke-linecap="round"/></svg>`;
      case 10:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M12 13.5H20M12 18.5H20" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M16 5.5L19.2 9H12.8L16 5.5ZM16 26.5L12.8 23H19.2L16 26.5ZM5.5 16L9 12.8V19.2L5.5 16ZM26.5 16L23 19.2V12.8L26.5 16Z" fill="#fff"/></svg>`;
      case 11:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 26H27M7.5 26V13.5L13.5 9.5V26M13.5 15.5H20V26M20 12H24.5V26" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      case 12:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 16C13.8 12.6 11.4 11 8.8 11C5.9 11 4 13.2 4 16C4 18.8 5.9 21 8.8 21C11.4 21 13.8 19.4 16 16ZM16 16C18.2 19.4 20.6 21 23.2 21C26.1 21 28 18.8 28 16C28 13.2 26.1 11 23.2 11C20.6 11 18.2 12.6 16 16Z" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      case 13:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M3.8 16C6.7 10.6 11 8 16 8C21 8 25.3 10.6 28.2 16C25.3 21.4 21 24 16 24C11 24 6.7 21.4 3.8 16Z" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><circle cx="16" cy="16" r="4.2" stroke="#fff" stroke-width="2.1"/></svg>`;
      case 15:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 26.5V17.5M11 26.5H21" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M16 6.5C12.2 6.5 9.5 9.4 9.5 12.8C9.5 16 12.2 18.2 16 18.2C19.8 18.2 22.5 16 22.5 12.8C22.5 9.4 19.8 6.5 16 6.5Z" stroke="#fff" stroke-width="2.2"/></svg>`;
      case 16:
        return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M9 21.5C13.5 21.5 18.2 19.2 21.2 14.5C22.2 13 23.8 12 25.5 11.8C23.8 10.2 21.4 9.8 19.4 10.8C17.8 8.2 14.8 7 11.8 7.5C13.4 9.6 13.8 12 13 14.2C10.2 14.6 7.8 16.4 6.5 19.2C7.4 20.6 8.2 21.5 9 21.5Z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><path d="M8.5 25.5H23.5" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>`;
      default:
        return "";
    }
  }

  function renderSdgBadgesHtml(sdgNums) {
    if (!Array.isArray(sdgNums) || sdgNums.length === 0) return "";
    const isAr = state.lang === "ar";
    return sdgNums
      .map((num) => {
        const meta = DATA.sdgCatalog && DATA.sdgCatalog[num];
        if (!meta) return "";
        const label = isAr ? meta.ar : meta.en;
        const numStr = String(meta.num).padStart(2, "0");
        return `
          <div class="mag-sdg-card" title="SDG ${meta.num}: ${escapeHtml(label)}">
            <div class="mag-sdg-square" style="background-color: ${escapeHtml(meta.color)};">
              <span class="mag-sdg-num">${escapeHtml(numStr)}</span>
              <span class="mag-sdg-icon">${getSdgIconSvg(meta.num)}</span>
            </div>
            <div class="mag-sdg-meta">
              <span class="mag-sdg-code">SDG ${meta.num}</span>
              <span class="mag-sdg-name">${escapeHtml(label)}</span>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function isValidExternalActionUrl(url, book) {
    if (!url || typeof url !== "string") return false;
    const trimmed = url.trim();
    if (!trimmed) return false;
    // Exclude circular self-links pointing back to the book's own WLR page
    if (book && (trimmed === book.urlEn || trimmed === book.urlAr)) return false;
    return /^https?:\/\//i.test(trimmed);
  }

  function renderMagazineView(stage) {
    const ui = t();
    const issue = DATA.magazines[0];
    const isAr = state.lang === "ar";

    const title = isAr ? issue.arTitle : issue.enTitle;
    const editionLabel = isAr ? issue.editionAr : issue.editionEn;
    const coverSrc = isAr ? issue.coverAr : issue.coverEn;
    const pdfSrc = isAr ? issue.pdfAr : issue.pdfEn;
    const downloadName = isAr ? issue.downloadNameAr : issue.downloadNameEn;

    // Resolve all 35 unique verified Magazine books in exact original shelf order
    const allMagazineBooks = (issue.bookSlugs || [])
      .map((slug) => DATA.books.find((b) => b.slug === slug))
      .filter(Boolean);

    const featuredReviewsMap = issue.featuredReviews || {};

    stage.innerHTML = `
      <div class="magazine-page">
        <div class="container">
          <!-- 1. Editorial Hero Spread: Summer 2024 Edition + Real Cover Preview -->
          <section class="magazine-hero-spread" aria-labelledby="magazine-main-title">
            <div class="magazine-hero-copy">
              <span class="eyebrow pastel-yellow">${escapeHtml(ui.magazine.eyebrow)}</span>
              <h1 id="magazine-main-title" class="editorial-title magazine-hero-title">
                ${escapeHtml(ui.magazine.title)}
              </h1>
              <p class="magazine-hero-tagline">${escapeHtml(ui.magazine.tagline)}</p>
              <p class="magazine-hero-desc">${escapeHtml(ui.magazine.subtitle)}</p>

              <dl class="magazine-meta-strip">
                <div class="magazine-meta-item">
                  <dt>${escapeHtml(ui.magazine.metaEditionLabel)}</dt>
                  <dd>${escapeHtml(ui.magazine.metaEditionVal)}</dd>
                </div>
                <div class="magazine-meta-item">
                  <dt>${escapeHtml(ui.magazine.metaBooksLabel)}</dt>
                  <dd>${escapeHtml(ui.magazine.metaBooksVal)}</dd>
                </div>
                <div class="magazine-meta-item">
                  <dt>${escapeHtml(ui.magazine.metaFormatLabel)}</dt>
                  <dd>${escapeHtml(ui.magazine.metaFormatVal)}</dd>
                </div>
              </dl>

              <div class="magazine-hero-cta">
                <button
                  type="button"
                  id="mag-jump-gallery-btn"
                  class="action-btn action-btn--primary"
                >
                  ${escapeHtml(ui.magazine.browseGalleryBtn)} ↓
                </button>
                <button
                  type="button"
                  id="read-magazine-btn"
                  class="action-btn action-btn--outline"
                >
                  ${escapeHtml(ui.magazine.readMagazine)}
                </button>
              </div>
            </div>

            <div class="magazine-hero-cover-col">
              <button
                type="button"
                class="magazine-cover-preview pastel-blue"
                data-open-mag-reader="true"
                aria-label="${escapeHtml(ui.magazine.readMagazine)} — ${escapeHtml(title)} (${escapeHtml(editionLabel)})"
              >
                <img
                  src="${escapeHtml(coverSrc)}"
                  alt="${escapeHtml(title)} — ${escapeHtml(editionLabel)}"
                  data-title="${escapeHtml(title)}"
                  class="magazine-real-cover-img"
                />
              </button>
            </div>
          </section>

          <!-- 2. Interactive Magazine Book Gallery & Individual Book Detail Stage -->
          <section
            id="mag-interactive-stage"
            class="mag-interactive-section"
            aria-labelledby="mag-gallery-heading"
          ></section>
        </div>

        <!-- 3. Dedicated Interactive PDF Magazine Reader -->
        <div
          id="mag-reader-overlay"
          class="mag-reader-overlay"
          role="dialog"
          aria-modal="true"
          aria-hidden="true"
          aria-labelledby="mag-reader-doc-title"
        >
          <div class="mag-reader-shell">
            <header class="mag-reader-bar">
              <div class="mag-reader-doc-info">
                <span class="mag-reader-edition-pill">${escapeHtml(editionLabel)}</span>
                <h2 id="mag-reader-doc-title" class="mag-reader-doc-title">${escapeHtml(title)}</h2>
              </div>

              <div class="mag-reader-controls">
                <!-- Page Navigation -->
                <div class="mag-ctrl-group" role="group" aria-label="Page navigation">
                  <button
                    type="button"
                    id="mag-prev-page"
                    class="mag-ctrl-btn"
                    aria-label="${escapeHtml(ui.magazine.readerPrev)}"
                    title="${escapeHtml(ui.magazine.readerPrev)}"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M10 3.5L5.5 8L10 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <div class="mag-page-indicator">
                    <input
                      type="number"
                      id="mag-page-input"
                      class="mag-page-input"
                      min="1"
                      max="${issue.totalPages}"
                      value="1"
                      aria-label="Current page"
                    />
                    <span class="mag-page-sep">${escapeHtml(ui.magazine.readerPageOf)}</span>
                    <span id="mag-page-total" class="mag-page-total">${issue.totalPages}</span>
                  </div>
                  <button
                    type="button"
                    id="mag-next-page"
                    class="mag-ctrl-btn"
                    aria-label="${escapeHtml(ui.magazine.readerNext)}"
                    title="${escapeHtml(ui.magazine.readerNext)}"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>

                <!-- Zoom Controls -->
                <div class="mag-ctrl-group" role="group" aria-label="Zoom controls">
                  <button
                    type="button"
                    id="mag-zoom-out"
                    class="mag-ctrl-btn"
                    aria-label="${escapeHtml(ui.magazine.readerZoomOut)}"
                    title="${escapeHtml(ui.magazine.readerZoomOut)}"
                  >
                    <span aria-hidden="true">−</span>
                  </button>
                  <button
                    type="button"
                    id="mag-zoom-reset"
                    class="mag-zoom-badge"
                    aria-label="${escapeHtml(ui.magazine.readerZoomReset)}"
                    title="${escapeHtml(ui.magazine.readerZoomReset)}"
                  >
                    100%
                  </button>
                  <button
                    type="button"
                    id="mag-zoom-in"
                    class="mag-ctrl-btn"
                    aria-label="${escapeHtml(ui.magazine.readerZoomIn)}"
                    title="${escapeHtml(ui.magazine.readerZoomIn)}"
                  >
                    <span aria-hidden="true">+</span>
                  </button>
                </div>

                <!-- Download & Close -->
                <div class="mag-ctrl-actions">
                  <a
                    id="mag-download-pdf"
                    href="${escapeHtml(pdfSrc)}"
                    download="${escapeHtml(downloadName)}"
                    class="mag-action-pill"
                  >
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 2.5V10.5M8 10.5L5 7.5M8 10.5L11 7.5M3 13H13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>${escapeHtml(ui.magazine.readerDownload)}</span>
                  </a>
                  <button
                    type="button"
                    id="mag-close-reader"
                    class="mag-action-pill mag-action-pill--close"
                  >
                    <span>${escapeHtml(ui.magazine.readerClose)}</span>
                  </button>
                </div>
              </div>
            </header>

            <div id="mag-reader-viewport" class="mag-reader-viewport" tabindex="0">
              <div id="mag-reader-status" class="mag-reader-status">
                ${escapeHtml(ui.magazine.readerLoading)}
              </div>
              <div id="mag-reader-pages" class="mag-reader-pages"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    attachCoverFallbacks(stage);

    const interactiveStage = document.getElementById("mag-interactive-stage");
    const jumpGalleryBtn = document.getElementById("mag-jump-gallery-btn");

    function getFilteredMagazineBooks() {
      if (state.magazineFilter === "reviews") {
        return allMagazineBooks.filter((b) => Boolean(featuredReviewsMap[b.slug]));
      }
      if (DATA.ageCategories.some((c) => c.id === state.magazineFilter)) {
        return allMagazineBooks.filter((b) => b.age === state.magazineFilter);
      }
      return allMagazineBooks;
    }

    function updateMagazineUrl(bookSlug, push = false) {
      const targetHash = bookSlug
        ? `#/magazine?book=${encodeURIComponent(bookSlug)}`
        : "#/magazine";
      if (window.location.hash !== targetHash) {
        if (push) {
          history.pushState(null, "", targetHash);
        } else {
          history.replaceState(null, "", targetHash);
        }
      }
    }

    function renderInteractiveMagazineStage(scrollIntoSection = false) {
      if (!interactiveStage) return;

      const selectedSlug = state.magazineBookSlug;
      const selectedBook = selectedSlug
        ? allMagazineBooks.find((b) => b.slug === selectedSlug)
        : null;

      if (!selectedBook) {
        // ==================== INTERACTIVE GALLERY MODE ====================
        const visibleBooks = getFilteredMagazineBooks();
        const pastels = buildPastelSequence(visibleBooks.length, 2);
        const reviewCount = allMagazineBooks.filter((b) => Boolean(featuredReviewsMap[b.slug])).length;

        const filterPillsHtml = [
          `
            <button
              type="button"
              class="filter-pill ${state.magazineFilter === "all" ? "is-active" : ""}"
              aria-pressed="${state.magazineFilter === "all"}"
              data-mag-filter="all"
            >
              <span>${escapeHtml(ui.magazine.filterAll)}</span>
              <span class="pill-count">(${allMagazineBooks.length})</span>
            </button>
          `,
          ...DATA.ageCategories.map((cat) => {
            const count = allMagazineBooks.filter((b) => b.age === cat.id).length;
            const active = state.magazineFilter === cat.id;
            const label = isAr ? cat.arShort : cat.enShort;
            return `
              <button
                type="button"
                class="filter-pill ${active ? "is-active" : ""}"
                aria-pressed="${active}"
                data-mag-filter="${escapeHtml(cat.id)}"
              >
                <span>${escapeHtml(label)}</span>
                <span class="pill-count">(${count})</span>
              </button>
            `;
          }),
          `
            <button
              type="button"
              class="filter-pill ${state.magazineFilter === "reviews" ? "is-active" : ""}"
              aria-pressed="${state.magazineFilter === "reviews"}"
              data-mag-filter="reviews"
            >
              <span>${escapeHtml(ui.magazine.filterReviews)}</span>
              <span class="pill-count">(${reviewCount})</span>
            </button>
          `
        ].join("");

        const galleryItemsHtml = visibleBooks
          .map((book, idx) => {
            const meta = book[state.lang];
            const pastelClass = `pastel-${pastels[idx]}`;
            const flatCover = getGalleryFlatCover(book);
            const fallbackCover = getBookCover(book);
            const hasFeaturedReview = Boolean(featuredReviewsMap[book.slug]);
            const sdgDotsHtml =
              Array.isArray(book.sdgs) && book.sdgs.length > 0
                ? `<span class="mag-card-sdg-dots" aria-hidden="true">${book.sdgs
                    .map((n) => {
                      const c = DATA.sdgCatalog[n] ? DATA.sdgCatalog[n].color : "#888";
                      return `<span class="mag-card-sdg-dot" style="background-color:${escapeHtml(c)};"></span>`;
                    })
                    .join("")}</span>`
                : "";

            return `
              <article class="book-item mag-gallery-item">
                <button
                  type="button"
                  class="mag-book-card-btn"
                  data-open-mag-book="${escapeHtml(book.slug)}"
                  aria-label="${escapeHtml(meta.title)}"
                >
                  <div class="book-tile mag-book-tile ${pastelClass}">
                    ${
                      hasFeaturedReview
                        ? `<span class="mag-review-ribbon">${escapeHtml(ui.magazine.featuredReviewTag)}</span>`
                        : ""
                    }
                    <img
                      src="${escapeHtml(flatCover)}"
                      data-fallback="${escapeHtml(fallbackCover)}"
                      data-title="${escapeHtml(meta.title)}"
                      alt="${escapeHtml(meta.title)}"
                      class="book-cover-img mag-book-cover-img"
                      loading="lazy"
                    />
                  </div>
                  <div class="book-caption mag-book-caption">
                    <h3 class="book-caption-title">${escapeHtml(meta.title)}</h3>
                    <div class="mag-caption-subrow">
                      <p class="book-caption-meta">${escapeHtml(meta.theme)}</p>
                      ${sdgDotsHtml}
                    </div>
                  </div>
                </button>
              </article>
            `;
          })
          .join("");

        interactiveStage.innerHTML = `
          <div class="mag-gallery-panel">
            <header class="mag-gallery-header">
              <span class="eyebrow pastel-mint">${escapeHtml(ui.magazine.galleryEyebrow)}</span>
              <h2 id="mag-gallery-heading" class="age-heading mag-gallery-title">
                ${escapeHtml(ui.magazine.galleryHeading)}
              </h2>
              <p class="age-description mag-gallery-sub">${escapeHtml(ui.magazine.gallerySub)}</p>
            </header>

            <div class="filter-bar mag-filter-bar" role="region" aria-label="${escapeHtml(ui.gallery.filterLabel)}">
              <div class="filter-group">
                ${filterPillsHtml}
              </div>
            </div>

            <div class="book-grid mag-book-grid">
              ${galleryItemsHtml}
            </div>
          </div>
        `;

        interactiveStage.querySelectorAll("[data-mag-filter]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const chosen = btn.getAttribute("data-mag-filter");
            if (state.magazineFilter === chosen) return;
            state.magazineFilter = chosen;
            renderInteractiveMagazineStage(false);
          });
        });

        interactiveStage.querySelectorAll("[data-open-mag-book]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const slug = btn.getAttribute("data-open-mag-book");
            state.magazineBookSlug = slug;
            updateMagazineUrl(slug, true);
            renderInteractiveMagazineStage(true);
          });
        });

        attachCoverFallbacks(interactiveStage);
      } else {
        // ==================== INDIVIDUAL BOOK DETAIL MODE ====================
        const navList = getFilteredMagazineBooks();
        const activePool = navList.some((b) => b.slug === selectedBook.slug)
          ? navList
          : allMagazineBooks;
        const currentIdx = activePool.findIndex((b) => b.slug === selectedBook.slug);
        const prevBook =
          activePool[(currentIdx - 1 + activePool.length) % activePool.length];
        const nextBook = activePool[(currentIdx + 1) % activePool.length];

        const meta = selectedBook[state.lang];
        const companionTitle = isAr ? selectedBook.en.title : selectedBook.ar.title;
        const ageObj = getAgeCategoryObj(selectedBook.age);
        const ageLabel = isAr ? ageObj.arShort : ageObj.enShort;
        const globalIdx = allMagazineBooks.findIndex((b) => b.slug === selectedBook.slug);
        const pastelName =
          DATA.pastelSequence[Math.max(0, globalIdx) % DATA.pastelSequence.length];
        const coverSrcDetail = getGalleryFlatCover(selectedBook);
        const fallbackDetail = getBookCover(selectedBook);

        // Creative Credits
        const credits = [];
        if (meta.storyBy) {
          credits.push({ label: ui.bookDetail.storyBy, val: meta.storyBy });
        }
        credits.push({ label: ui.bookDetail.author, val: meta.author });
        if (meta.englishWriter) {
          credits.push({ label: ui.bookDetail.englishWriter, val: meta.englishWriter });
        }
        if (meta.editor) {
          credits.push({ label: ui.bookDetail.editor, val: meta.editor });
        }
        credits.push({ label: ui.magazine.drawingsLabel, val: meta.illustrator });

        const creditsHtml = credits
          .map(
            (c) => `
              <div class="credit-item">
                <dt>${escapeHtml(c.label)}</dt>
                <dd>${escapeHtml(c.val)}</dd>
              </div>
            `
          )
          .join("");

        // Verified SDG Badges (omitted cleanly when book has no SDGs on source)
        const sdgHtml = renderSdgBadgesHtml(selectedBook.sdgs);

        // Featured Magazine Review Spread (for the 8 spotlighted books in pp. 11–18)
        const reviewEntry = featuredReviewsMap[selectedBook.slug];
        const reviewBoxHtml = reviewEntry
          ? `
            <div class="mag-detail-review-box pastel-yellow">
              <div class="mag-detail-review-top">
                <span class="mag-detail-review-label">
                  ${escapeHtml(ui.magazine.magReviewHeading)} · ${escapeHtml(isAr ? reviewEntry.magPageAr : reviewEntry.magPageEn)}
                </span>
              </div>
              <h3 class="mag-detail-review-headline">
                ${escapeHtml(isAr ? reviewEntry.headlineAr : reviewEntry.headlineEn)}
              </h3>
              <blockquote class="mag-detail-review-quote">
                ${escapeHtml(isAr ? reviewEntry.quoteAr : reviewEntry.quoteEn)}
              </blockquote>
              <button
                type="button"
                class="text-action-link"
                data-open-mag-pdf-page="${reviewEntry.pdfPage}"
              >
                ${escapeHtml(ui.magazine.openSpreadInPdf)} →
              </button>
            </div>
          `
          : "";

        // Valid Action Buttons ONLY (Approved Default #1: hide empty or invalid links)
        const actions = selectedBook.actions || {};
        const buyUrl = isAr && actions.buyAr ? actions.buyAr : actions.buy;
        const watchUrl = isAr && actions.watchAr ? actions.watchAr : actions.watch || actions.watchAr;
        const reviewsUrl =
          isAr && actions.reviewsAr ? actions.reviewsAr : actions.reviews || actions.reviewsAr;

        const detailActionBtns = [];
        if (isValidExternalActionUrl(buyUrl, selectedBook)) {
          const priceSuffix = actions.price ? ` · ${actions.price}` : "";
          detailActionBtns.push(`
            <a
              href="${escapeHtml(buyUrl)}"
              target="_blank"
              rel="noopener noreferrer"
              class="action-btn action-btn--primary"
            >
              ${escapeHtml(ui.bookDetail.buy)}${escapeHtml(priceSuffix)} ↗
            </a>
          `);
        }
        if (isValidExternalActionUrl(watchUrl, selectedBook)) {
          detailActionBtns.push(`
            <a
              href="${escapeHtml(watchUrl)}"
              target="_blank"
              rel="noopener noreferrer"
              class="action-btn action-btn--pastel pastel-mint"
            >
              ${escapeHtml(ui.bookDetail.watch)} ↗
            </a>
          `);
        }
        if (isValidExternalActionUrl(reviewsUrl, selectedBook)) {
          detailActionBtns.push(`
            <a
              href="${escapeHtml(reviewsUrl)}"
              target="_blank"
              rel="noopener noreferrer"
              class="action-btn action-btn--pastel pastel-pink"
            >
              ${escapeHtml(ui.bookDetail.reviews)} ↗
            </a>
          `);
        }

        const prevArrowChar = isAr ? "→" : "←";
        const nextArrowChar = isAr ? "←" : "→";

        interactiveStage.innerHTML = `
          <div class="mag-book-detail-panel">
            <div class="mag-detail-topbar">
              <button type="button" id="mag-back-gallery-btn" class="back-link mag-back-btn">
                <span aria-hidden="true">${prevArrowChar}</span>
                <span>${escapeHtml(ui.magazine.backToGallery)}</span>
              </button>

              <div class="mag-detail-stepper">
                <button
                  type="button"
                  id="mag-prev-book-btn"
                  class="mag-step-btn"
                  data-step-book="${escapeHtml(prevBook.slug)}"
                >
                  <span aria-hidden="true">${prevArrowChar}</span>
                  <span>${escapeHtml(ui.magazine.prevBook)}</span>
                </button>
                <span class="mag-step-position">
                  ${escapeHtml(ui.magazine.bookPosition(currentIdx + 1, activePool.length))}
                </span>
                <button
                  type="button"
                  id="mag-next-book-btn"
                  class="mag-step-btn"
                  data-step-book="${escapeHtml(nextBook.slug)}"
                >
                  <span>${escapeHtml(ui.magazine.nextBook)}</span>
                  <span aria-hidden="true">${nextArrowChar}</span>
                </button>
              </div>
            </div>

            <div class="book-detail-layout mag-detail-spread">
              <div class="book-detail-stage mag-detail-cover-stage pastel-${pastelName}">
                <img
                  src="${escapeHtml(coverSrcDetail)}"
                  data-fallback="${escapeHtml(fallbackDetail)}"
                  data-title="${escapeHtml(meta.title)}"
                  alt="${escapeHtml(meta.title)}"
                  class="mag-detail-cover-img"
                />
              </div>

              <div class="book-detail-info mag-detail-info">
                <div class="detail-badges">
                  <span class="detail-badge pastel-yellow">
                    ${escapeHtml(ui.bookDetail.ageCategory)}: ${escapeHtml(ageLabel)}
                  </span>
                  <span class="detail-badge pastel-blue">
                    ${escapeHtml(ui.bookDetail.theme)}: ${escapeHtml(meta.theme)}
                  </span>
                </div>

                <h2 id="mag-gallery-heading" class="detail-title mag-detail-title">
                  ${escapeHtml(meta.title)}
                </h2>
                ${
                  companionTitle && companionTitle !== meta.title
                    ? `<p class="mag-companion-title">${escapeHtml(companionTitle)}</p>`
                    : ""
                }

                <dl class="credits-list">
                  ${creditsHtml}
                </dl>

                <p class="detail-description">${escapeHtml(meta.description)}</p>

                ${
                  sdgHtml
                    ? `
                    <div class="mag-sdg-section">
                      <h3 class="mag-sdg-heading">${escapeHtml(ui.magazine.sdgHeading)}</h3>
                      <div class="mag-sdg-list">
                        ${sdgHtml}
                      </div>
                    </div>
                  `
                    : ""
                }

                ${
                  detailActionBtns.length > 0
                    ? `
                    <div class="detail-actions mag-detail-actions">
                      ${detailActionBtns.join("")}
                    </div>
                  `
                    : ""
                }

                ${reviewBoxHtml}
              </div>
            </div>
          </div>
        `;

        const backBtn = document.getElementById("mag-back-gallery-btn");
        if (backBtn) {
          backBtn.addEventListener("click", () => {
            state.magazineBookSlug = null;
            updateMagazineUrl(null, false);
            renderInteractiveMagazineStage(true);
          });
        }

        interactiveStage.querySelectorAll("[data-step-book]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const nextSlug = btn.getAttribute("data-step-book");
            state.magazineBookSlug = nextSlug;
            updateMagazineUrl(nextSlug, false);
            renderInteractiveMagazineStage(true);
          });
        });

        interactiveStage.querySelectorAll("[data-open-mag-pdf-page]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const p = parseInt(btn.getAttribute("data-open-mag-pdf-page"), 10) || 1;
            openMagazineReader(p);
          });
        });

        attachCoverFallbacks(interactiveStage);
      }

      if (scrollIntoSection) {
        const rect = interactiveStage.getBoundingClientRect();
        const headerOffset = 94;
        const targetTop = window.scrollY + rect.top - headerOffset;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: prefersReducedMotion() ? "auto" : "smooth"
        });
      }
    }

    if (jumpGalleryBtn && interactiveStage) {
      jumpGalleryBtn.addEventListener("click", () => {
        if (state.magazineBookSlug) {
          state.magazineBookSlug = null;
          updateMagazineUrl(null, false);
          renderInteractiveMagazineStage(true);
        } else {
          const rect = interactiveStage.getBoundingClientRect();
          window.scrollTo({
            top: Math.max(0, window.scrollY + rect.top - 94),
            behavior: prefersReducedMotion() ? "auto" : "smooth"
          });
        }
      });
    }

    // Interactive PDF.js Reader Controller (Scoped to Magazine View)
    const overlay = document.getElementById("mag-reader-overlay");
    const readBtn = document.getElementById("read-magazine-btn");
    const coverTrigger = stage.querySelector("[data-open-mag-reader]");
    const closeReaderBtn = document.getElementById("mag-close-reader");
    const prevPageBtn = document.getElementById("mag-prev-page");
    const nextPageBtn = document.getElementById("mag-next-page");
    const pageInput = document.getElementById("mag-page-input");
    const pageTotalEl = document.getElementById("mag-page-total");
    const zoomOutBtn = document.getElementById("mag-zoom-out");
    const zoomResetBtn = document.getElementById("mag-zoom-reset");
    const zoomInBtn = document.getElementById("mag-zoom-in");
    const readerViewport = document.getElementById("mag-reader-viewport");
    const readerPagesEl = document.getElementById("mag-reader-pages");
    const readerStatusEl = document.getElementById("mag-reader-status");

    const ZOOM_STEPS = [0.7, 0.85, 1.0, 1.25, 1.5, 1.75, 2.0];
    let zoomIdx = 2; // 1.0 (100%)
    let currentPage = 1;
    let totalPages = issue.totalPages || 19;
    let pdfDocInstance = null;
    let pdfPagesCache = [];
    let sheetEntries = [];
    let renderPassId = 0;
    let activeRenderTasks = [];
    let zoomDebounceTimer = null;
    let isProgrammaticScroll = false;
    let isReaderOpen = false;

    function getBasePageWidth(naturalW, naturalH) {
      const vpWidth = readerViewport ? readerViewport.clientWidth : window.innerWidth;
      const horizontalPad = vpWidth < 640 ? 24 : 56;
      const availWidth = Math.max(260, vpWidth - horizontalPad);
      if (vpWidth < 680) {
        return availWidth;
      }
      const isLandscape = naturalW > naturalH * 1.05;
      return isLandscape ? Math.min(availWidth, 1020) : Math.min(availWidth, 650);
    }

    function updateNavUi() {
      if (pageInput && document.activeElement !== pageInput) {
        pageInput.value = String(currentPage);
      }
      if (pageTotalEl) {
        pageTotalEl.textContent = String(totalPages);
      }
      if (prevPageBtn) {
        prevPageBtn.disabled = currentPage <= 1;
      }
      if (nextPageBtn) {
        nextPageBtn.disabled = currentPage >= totalPages;
      }
      if (zoomResetBtn) {
        zoomResetBtn.textContent = `${Math.round(ZOOM_STEPS[zoomIdx] * 100)}%`;
      }
      if (zoomOutBtn) {
        zoomOutBtn.disabled = zoomIdx <= 0;
      }
      if (zoomInBtn) {
        zoomInBtn.disabled = zoomIdx >= ZOOM_STEPS.length - 1;
      }
    }

    function cancelActiveRenderTasks() {
      activeRenderTasks.forEach((task) => {
        try {
          task.cancel();
        } catch (_) {
          // Ignore already completed render tasks
        }
      });
      activeRenderTasks = [];
    }

    function applySheetDimensions() {
      const zoomFactor = ZOOM_STEPS[zoomIdx];
      sheetEntries.forEach((entry) => {
        const baseW = getBasePageWidth(entry.naturalW, entry.naturalH);
        const cssW = Math.round(baseW * zoomFactor);
        const cssH = Math.round((cssW * entry.naturalH) / entry.naturalW);
        entry.cssW = cssW;
        entry.cssH = cssH;
        entry.sheet.style.width = `${cssW}px`;
        entry.sheet.style.height = `${cssH}px`;
        entry.canvas.style.width = `${cssW}px`;
        entry.canvas.style.height = `${cssH}px`;
      });
    }

    async function renderCanvasesForCurrentZoom() {
      const myPass = ++renderPassId;
      cancelActiveRenderTasks();
      if (!sheetEntries.length) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const ordered = sheetEntries.slice().sort((a, b) => {
        const da = Math.abs(a.pageNum - currentPage);
        const db = Math.abs(b.pageNum - currentPage);
        if (da <= 2 || db <= 2) return da - db;
        return a.pageNum - b.pageNum;
      });

      for (const entry of ordered) {
        if (myPass !== renderPassId || !isReaderOpen) return;
        const scale = (entry.cssW / entry.naturalW) * dpr;
        const viewport = entry.page.getViewport({ scale });
        const targetW = Math.max(1, Math.floor(viewport.width));
        const targetH = Math.max(1, Math.floor(viewport.height));

        if (entry.renderedW === targetW && entry.renderedH === targetH) {
          continue;
        }

        const offCanvas = document.createElement("canvas");
        offCanvas.width = targetW;
        offCanvas.height = targetH;
        const ctx = offCanvas.getContext("2d", { alpha: false });

        const renderTask = entry.page.render({
          canvasContext: ctx,
          viewport
        });
        activeRenderTasks.push(renderTask);

        try {
          await renderTask.promise;
          if (myPass !== renderPassId) return;
          entry.canvas.width = targetW;
          entry.canvas.height = targetH;
          const destCtx = entry.canvas.getContext("2d", { alpha: false });
          destCtx.drawImage(offCanvas, 0, 0);
          entry.renderedW = targetW;
          entry.renderedH = targetH;
          entry.sheet.classList.add("is-rendered");
        } catch (err) {
          if (err && err.name === "RenderingCancelledException") {
            return;
          }
        }
      }
    }

    function scrollToPage(pageNum, smooth = true) {
      const clamped = Math.max(1, Math.min(totalPages, pageNum));
      currentPage = clamped;
      updateNavUi();

      const targetEntry = sheetEntries[clamped - 1];
      if (!targetEntry || !readerViewport) return;

      isProgrammaticScroll = true;
      const topOffset = Math.max(0, targetEntry.sheet.offsetTop - 18);
      readerViewport.scrollTo({
        top: topOffset,
        behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto"
      });
      setTimeout(() => {
        isProgrammaticScroll = false;
      }, smooth ? 360 : 40);
    }

    function setZoomIndex(nextIdx) {
      const clamped = Math.max(0, Math.min(ZOOM_STEPS.length - 1, nextIdx));
      if (clamped === zoomIdx) return;
      const anchorPage = currentPage;
      zoomIdx = clamped;
      applySheetDimensions();
      updateNavUi();
      scrollToPage(anchorPage, false);

      clearTimeout(zoomDebounceTimer);
      zoomDebounceTimer = setTimeout(() => {
        renderCanvasesForCurrentZoom();
      }, 90);
    }

    async function ensurePdfLoadedAndRendered(initialPage = 1) {
      if (pdfDocInstance && sheetEntries.length) {
        applySheetDimensions();
        scrollToPage(initialPage, false);
        renderCanvasesForCurrentZoom();
        return;
      }

      if (readerStatusEl) {
        readerStatusEl.style.display = "flex";
      }

      try {
        const pdfjsLib = await loadPdfJsLibrary();
        pdfDocInstance = await pdfjsLib.getDocument(pdfSrc).promise;
        totalPages = pdfDocInstance.numPages;
        if (pageInput) pageInput.max = String(totalPages);

        const pagePromises = [];
        for (let p = 1; p <= totalPages; p++) {
          pagePromises.push(pdfDocInstance.getPage(p));
        }
        pdfPagesCache = await Promise.all(pagePromises);

        readerPagesEl.innerHTML = "";
        sheetEntries = pdfPagesCache.map((page, idx) => {
          const pageNum = idx + 1;
          const vp1 = page.getViewport({ scale: 1 });
          const sheet = document.createElement("div");
          sheet.className = "mag-page-sheet";
          sheet.id = `mag-pdf-page-${pageNum}`;
          sheet.setAttribute("data-page-number", String(pageNum));

          const canvas = document.createElement("canvas");
          canvas.className = "mag-page-canvas";
          sheet.appendChild(canvas);

          const badge = document.createElement("span");
          badge.className = "mag-page-badge";
          badge.textContent = `${pageNum} / ${totalPages}`;
          sheet.appendChild(badge);

          readerPagesEl.appendChild(sheet);
          return {
            pageNum,
            page,
            naturalW: vp1.width,
            naturalH: vp1.height,
            cssW: 0,
            cssH: 0,
            renderedW: 0,
            renderedH: 0,
            sheet,
            canvas
          };
        });

        if (readerStatusEl) {
          readerStatusEl.style.display = "none";
        }

        applySheetDimensions();
        scrollToPage(initialPage, false);
        await renderCanvasesForCurrentZoom();
      } catch (err) {
        if (readerStatusEl) readerStatusEl.style.display = "none";
        readerPagesEl.innerHTML = `
          <iframe
            src="${escapeHtml(pdfSrc)}"
            title="${escapeHtml(title)}"
            class="mag-fallback-iframe"
          ></iframe>
        `;
      }
    }

    function onReaderKeyDown(e) {
      if (!isReaderOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeMagazineReader();
        return;
      }
      if (document.activeElement === pageInput) return;

      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        scrollToPage(currentPage + 1, true);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        scrollToPage(currentPage - 1, true);
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        setZoomIndex(zoomIdx + 1);
      } else if (e.key === "-") {
        e.preventDefault();
        setZoomIndex(zoomIdx - 1);
      }
    }

    function onDetailKeyDown(e) {
      if (isReaderOpen || !state.magazineBookSlug) return;
      if (!document.body.contains(interactiveStage)) {
        document.removeEventListener("keydown", onDetailKeyDown);
        return;
      }
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "ArrowRight") {
        const btn = document.getElementById(isAr ? "mag-prev-book-btn" : "mag-next-book-btn");
        if (btn) btn.click();
      } else if (e.key === "ArrowLeft") {
        const btn = document.getElementById(isAr ? "mag-next-book-btn" : "mag-prev-book-btn");
        if (btn) btn.click();
      }
    }

    function onRouteCleanup() {
      isReaderOpen = false;
      cancelActiveRenderTasks();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onReaderKeyDown);
      document.removeEventListener("keydown", onDetailKeyDown);
      window.removeEventListener("hashchange", onRouteCleanup);
      window.removeEventListener("resize", onViewportResize);
    }

    function onViewportResize() {
      if (!isReaderOpen || !sheetEntries.length) return;
      applySheetDimensions();
      clearTimeout(zoomDebounceTimer);
      zoomDebounceTimer = setTimeout(() => {
        renderCanvasesForCurrentZoom();
      }, 140);
    }

    function openMagazineReader(targetPage = 1) {
      if (!overlay) return;
      isReaderOpen = true;
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onReaderKeyDown);
      window.addEventListener("hashchange", onRouteCleanup);
      window.addEventListener("resize", onViewportResize);
      updateNavUi();
      ensurePdfLoadedAndRendered(targetPage);
      if (readerViewport) {
        readerViewport.focus({ preventScroll: true });
      }
    }

    function closeMagazineReader() {
      if (!overlay || !isReaderOpen) return;
      isReaderOpen = false;
      cancelActiveRenderTasks();
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onReaderKeyDown);
      window.removeEventListener("resize", onViewportResize);
      if (readBtn) {
        readBtn.focus({ preventScroll: true });
      }
    }

    if (readBtn) {
      readBtn.addEventListener("click", () => openMagazineReader(1));
    }
    if (coverTrigger) {
      coverTrigger.addEventListener("click", () => openMagazineReader(1));
    }

    if (closeReaderBtn) {
      closeReaderBtn.addEventListener("click", closeMagazineReader);
    }
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeMagazineReader();
      });
    }

    if (prevPageBtn) {
      prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) scrollToPage(currentPage - 1, true);
      });
    }
    if (nextPageBtn) {
      nextPageBtn.addEventListener("click", () => {
        if (currentPage < totalPages) scrollToPage(currentPage + 1, true);
      });
    }
    if (pageInput) {
      const commitPageJump = () => {
        const parsed = parseInt(pageInput.value, 10);
        if (!Number.isNaN(parsed)) {
          scrollToPage(parsed, true);
        } else {
          pageInput.value = String(currentPage);
        }
      };
      pageInput.addEventListener("change", commitPageJump);
      pageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commitPageJump();
          pageInput.blur();
        }
      });
    }

    if (zoomOutBtn) {
      zoomOutBtn.addEventListener("click", () => setZoomIndex(zoomIdx - 1));
    }
    if (zoomInBtn) {
      zoomInBtn.addEventListener("click", () => setZoomIndex(zoomIdx + 1));
    }
    if (zoomResetBtn) {
      zoomResetBtn.addEventListener("click", () => setZoomIndex(2));
    }

    if (readerViewport) {
      readerViewport.addEventListener(
        "scroll",
        () => {
          if (isProgrammaticScroll || !sheetEntries.length) return;
          const probeY = readerViewport.scrollTop + readerViewport.clientHeight * 0.34;
          let detected = 1;
          for (let i = 0; i < sheetEntries.length; i++) {
            const sh = sheetEntries[i].sheet;
            if (sh.offsetTop <= probeY) {
              detected = i + 1;
            } else {
              break;
            }
          }
          if (detected !== currentPage) {
            currentPage = detected;
            updateNavUi();
          }
        },
        { passive: true }
      );
    }

    document.addEventListener("keydown", onDetailKeyDown);
    window.addEventListener("hashchange", onRouteCleanup, { once: true });

    renderInteractiveMagazineStage(Boolean(state.magazineBookSlug));
    updateNavUi();
  }

  /* ========================================================================
     View 5: Our Latest Book — Fully Internal Featured Books Experience
     Queen of Balloons · The Peppered Moth · Shells of Freedom
     ======================================================================== */
  function renderLatestBooksView(stage, focusSlug) {
    const ui = t();
    const isAr = state.lang === "ar";
    const latestSlugs = ["queen-of-balloons", "the-peppered-moth", "shells-of-freedom"];
    const latestCatalog = DATA.latestBooksContent || {};
    const latestEntries = latestSlugs
      .map((slug) => latestCatalog[slug])
      .filter(Boolean);

    const activeEntry =
      focusSlug && latestCatalog[focusSlug] ? latestCatalog[focusSlug] : null;

    const forwardArrow = isAr ? "←" : "→";
    const backArrow = isAr ? "→" : "←";

    // ==================== MODE 1: FEATURED RELEASES SHOWCASE (#/latest) ====================
    if (!activeEntry) {
      const quickPillsHtml = latestEntries
        .map((entry, idx) => {
          const meta = entry[state.lang];
          return `
            <a
              href="#/latest/${encodeURIComponent(entry.slug)}"
              class="filter-pill latest-quick-pill"
            >
              <span class="pill-count">0${idx + 1}</span>
              <span>${escapeHtml(meta.title)}</span>
            </a>
          `;
        })
        .join("");

      const spreadsHtml = latestEntries
        .map((entry, idx) => {
          const meta = entry[state.lang];
          const ageObj = getAgeCategoryObj(entry.age);
          const ageLabel = isAr ? ageObj.arShort : ageObj.enShort;
          const coverSrc = isAr ? entry.coverAr : entry.coverEn;
          const detailHref = `#/latest/${encodeURIComponent(entry.slug)}`;

          const creditsLine = (meta.credits || [])
            .map((c) => `${c.label}: ${c.value}`)
            .join(" · ");

          const sdgMiniHtml = (entry.sdgBadges || [])
            .map((b) => {
              const sdgMeta = DATA.sdgCatalog && DATA.sdgCatalog[b.num];
              const sdgName = sdgMeta ? (isAr ? sdgMeta.ar : sdgMeta.en) : `SDG ${b.num}`;
              const badgeImg = isAr ? b.imgAr : b.imgEn;
              return `
                <img
                  src="${escapeHtml(badgeImg)}"
                  alt="SDG ${b.num}: ${escapeHtml(sdgName)}"
                  title="SDG ${b.num}: ${escapeHtml(sdgName)}"
                  class="latest-card-sdg-img"
                  loading="lazy"
                />
              `;
            })
            .join("");

          return `
            <article id="latest-${escapeHtml(entry.slug)}" class="featured-spread latest-showcase-card pastel-${escapeHtml(entry.pastel)}">
              <div class="featured-cover-wrap latest-showcase-cover-wrap">
                <a href="${detailHref}" class="latest-cover-link" aria-label="${escapeHtml(meta.title)}">
                  <img
                    src="${escapeHtml(coverSrc)}"
                    data-title="${escapeHtml(meta.title)}"
                    alt="${escapeHtml(meta.title)}"
                    class="latest-showcase-cover-img"
                  />
                </a>
              </div>

              <div class="featured-content latest-showcase-content">
                <div class="latest-showcase-badges">
                  <span class="featured-number" style="margin-bottom:0;">
                    0${idx + 1} · ${escapeHtml(ui.latest.spotlightLabel)}
                  </span>
                  <span class="detail-badge" style="background:rgba(255,255,255,0.78);">
                    ${escapeHtml(ageLabel)}
                  </span>
                  <span class="detail-badge" style="background:rgba(255,255,255,0.78);">
                    ${escapeHtml(meta.theme)}
                  </span>
                </div>

                <h2 class="featured-book-title latest-showcase-title">
                  <a href="${detailHref}" class="latest-title-link">${escapeHtml(meta.title)}</a>
                </h2>
                ${
                  meta.companionTitle
                    ? `<p class="latest-companion-sub">${escapeHtml(meta.companionTitle)}</p>`
                    : ""
                }

                <p class="featured-book-credits">${escapeHtml(creditsLine)}</p>
                <p class="featured-book-desc">${escapeHtml(meta.synopsis)}</p>

                <div class="latest-showcase-footer">
                  <a href="${detailHref}" class="action-btn action-btn--primary">
                    <span>${escapeHtml(ui.latest.readDetails)}</span>
                    <span aria-hidden="true">${forwardArrow}</span>
                  </a>
                  ${
                    sdgMiniHtml
                      ? `<div class="latest-card-sdgs" aria-label="${escapeHtml(ui.latest.sdgHeading)}">${sdgMiniHtml}</div>`
                      : ""
                  }
                </div>
              </div>
            </article>
          `;
        })
        .join("");

      stage.innerHTML = `
        <div class="latest-page">
          <div class="container">
            <header class="editorial-hero latest-hero-header">
              <span class="eyebrow pastel-yellow">${escapeHtml(ui.latest.eyebrow)}</span>
              <h1 class="editorial-title">${escapeHtml(ui.latest.title)}</h1>
              <p class="editorial-subtitle">${escapeHtml(ui.latest.subtitle)}</p>
              <nav class="latest-quick-nav" aria-label="${escapeHtml(ui.latest.title)}">
                ${quickPillsHtml}
              </nav>
            </header>

            <div class="latest-spreads">
              ${spreadsHtml}
            </div>
          </div>
        </div>
      `;

      attachCoverFallbacks(stage);
      return;
    }

    // ==================== MODE 2: INTERNAL BOOK DETAIL PAGE (#/latest/<slug>) ====================
    const currentIdx = latestEntries.findIndex((e) => e.slug === activeEntry.slug);
    const prevEntry =
      latestEntries[(currentIdx - 1 + latestEntries.length) % latestEntries.length];
    const nextEntry = latestEntries[(currentIdx + 1) % latestEntries.length];

    const meta = activeEntry[state.lang];
    const ageObj = getAgeCategoryObj(activeEntry.age);
    const ageLabel = isAr ? ageObj.arShort : ageObj.enShort;
    const coverSrc = isAr ? activeEntry.coverAr : activeEntry.coverEn;
    const wrapSrc = isAr ? activeEntry.wrapSpreadAr : activeEntry.wrapSpreadEn;

    const creditsHtml = (meta.credits || [])
      .map(
        (c) => `
          <div class="credit-item">
            <dt>${escapeHtml(c.label)}</dt>
            <dd>${escapeHtml(c.value)}</dd>
          </div>
        `
      )
      .join("");

    const sdgTilesHtml = (activeEntry.sdgBadges || [])
      .map((b) => {
        const sdgMeta = DATA.sdgCatalog && DATA.sdgCatalog[b.num];
        const sdgLabel = sdgMeta ? (isAr ? sdgMeta.ar : sdgMeta.en) : `SDG ${b.num}`;
        const imgSrc = isAr ? b.imgAr : b.imgEn;
        return `
          <div class="latest-sdg-tile-card">
            <img
              src="${escapeHtml(imgSrc)}"
              alt="SDG ${b.num}: ${escapeHtml(sdgLabel)}"
              class="latest-sdg-tile-img"
              loading="lazy"
            />
            <div class="latest-sdg-tile-meta">
              <span class="latest-sdg-tile-code">SDG ${b.num}</span>
              <span class="latest-sdg-tile-title">${escapeHtml(sdgLabel)}</span>
            </div>
          </div>
        `;
      })
      .join("");

    const externalActionBtnsHtml = (meta.externalActions || [])
      .filter((act) =>
        act.type === "buy" ? isSpecificBookBuyUrl(act.url) : Boolean(act.url)
      )
      .map((act) => {
        const btnClass =
          act.style === "primary"
            ? "action-btn action-btn--primary"
            : `action-btn action-btn--pastel ${act.style || "pastel-mint"}`;
        return `
          <a
            href="${escapeHtml(act.url)}"
            target="_blank"
            rel="noopener noreferrer"
            class="${escapeHtml(btnClass)}"
          >
            <span>${escapeHtml(act.label)}</span>
            <span aria-hidden="true">↗</span>
          </a>
        `;
      })
      .join("");

    const articlesHtml = (meta.articles || [])
      .map((art, artIdx) => {
        const blocksHtml = (art.blocks || [])
          .map((blk) => {
            if (blk.type === "h3") {
              return `<h3 class="latest-article-h3">${escapeHtml(blk.text)}</h3>`;
            }
            if (blk.type === "image") {
              const layoutMod = blk.layout || "wide";
              return `
                <figure class="latest-article-figure latest-article-figure--${escapeHtml(layoutMod)}">
                  <img
                    src="${escapeHtml(blk.src)}"
                    alt="${escapeHtml(blk.alt || meta.title)}"
                    data-title="${escapeHtml(blk.alt || meta.title)}"
                    class="latest-article-img"
                    loading="lazy"
                  />
                </figure>
              `;
            }
            if (blk.type === "link") {
              return `
                <p class="latest-article-extlink">
                  <a
                    href="${escapeHtml(blk.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-action-link"
                  >
                    ${escapeHtml(blk.label)} ↗
                  </a>
                </p>
              `;
            }
            if (blk.type === "linksRow") {
              const pills = (blk.links || [])
                .map(
                  (lnk) => `
                    <a
                      href="${escapeHtml(lnk.url)}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="action-btn action-btn--pastel pastel-mint"
                    >
                      <span>${escapeHtml(lnk.label)}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  `
                )
                .join("");
              return `
                <div class="latest-article-links-row">
                  <span class="latest-article-links-label">${escapeHtml(blk.prefix)}</span>
                  <div class="detail-actions" style="margin-top:0;">
                    ${pills}
                  </div>
                </div>
              `;
            }
            return `<p class="latest-article-p">${escapeHtml(blk.text)}</p>`;
          })
          .join("");

        return `
          <section class="latest-article-section" aria-labelledby="latest-art-heading-${artIdx}">
            <header class="latest-article-header">
              <span class="eyebrow pastel-${escapeHtml(activeEntry.pastel)}">${escapeHtml(art.kicker)}</span>
              <h2 id="latest-art-heading-${artIdx}" class="latest-article-heading">
                ${escapeHtml(art.heading)}
              </h2>
            </header>
            <div class="latest-article-body">
              ${blocksHtml}
            </div>
          </section>
        `;
      })
      .join("");

    const otherEntries = latestEntries.filter((e) => e.slug !== activeEntry.slug);
    const otherCardsHtml = otherEntries
      .map((other) => {
        const oMeta = other[state.lang];
        const oCover = isAr ? other.coverAr : other.coverEn;
        const oAge = isAr
          ? getAgeCategoryObj(other.age).arShort
          : getAgeCategoryObj(other.age).enShort;
        return `
          <a
            href="#/latest/${encodeURIComponent(other.slug)}"
            class="latest-other-card pastel-${escapeHtml(other.pastel)}"
          >
            <div class="latest-other-cover">
              <img
                src="${escapeHtml(oCover)}"
                alt="${escapeHtml(oMeta.title)}"
                data-title="${escapeHtml(oMeta.title)}"
                loading="lazy"
              />
            </div>
            <div class="latest-other-body">
              <span class="archive-year">0${other.order} · ${escapeHtml(oAge)} · ${escapeHtml(oMeta.theme)}</span>
              <h3 class="latest-other-title">${escapeHtml(oMeta.title)}</h3>
              <p class="latest-other-desc">${escapeHtml(oMeta.synopsis)}</p>
              <span class="text-action-link">${escapeHtml(ui.latest.readDetails)} ${forwardArrow}</span>
            </div>
          </a>
        `;
      })
      .join("");

    stage.innerHTML = `
      <div class="latest-page latest-detail-page">
        <div class="container">
          <!-- Top Breadcrumb + Previous / Next Book Navigation -->
          <div class="latest-detail-topbar">
            <a href="#/latest" class="back-link latest-back-btn">
              <span aria-hidden="true">${backArrow}</span>
              <span>${escapeHtml(ui.latest.backToLatest)}</span>
            </a>

            <nav class="latest-detail-stepper" aria-label="Featured releases navigation">
              <a
                id="latest-prev-book-btn"
                href="#/latest/${encodeURIComponent(prevEntry.slug)}"
                class="latest-step-btn"
              >
                <span aria-hidden="true">${backArrow}</span>
                <span>${escapeHtml(ui.latest.prevBook)}</span>
              </a>
              <span class="latest-step-position">
                ${escapeHtml(ui.latest.bookPosition(currentIdx + 1, latestEntries.length))}
              </span>
              <a
                id="latest-next-book-btn"
                href="#/latest/${encodeURIComponent(nextEntry.slug)}"
                class="latest-step-btn"
              >
                <span>${escapeHtml(ui.latest.nextBook)}</span>
                <span aria-hidden="true">${forwardArrow}</span>
              </a>
            </nav>
          </div>

          <!-- Unified Queen of Balloons Editorial Book Detail Template -->
          <section class="book-detail-layout latest-hero-spread" aria-labelledby="latest-book-main-title">
            <div class="book-detail-stage latest-cover-stage pastel-${escapeHtml(activeEntry.pastel)}">
              <img
                src="${escapeHtml(coverSrc)}"
                data-title="${escapeHtml(meta.title)}"
                alt="${escapeHtml(meta.title)}"
                class="latest-detail-cover-img"
              />
            </div>

            <div class="book-detail-info latest-detail-info">
              <div class="detail-badges">
                <span class="detail-badge pastel-${escapeHtml(activeEntry.pastel)}">
                  0${activeEntry.order} · ${escapeHtml(ui.latest.spotlightLabel)}
                </span>
                <span class="detail-badge pastel-yellow">
                  ${escapeHtml(ui.bookDetail.ageCategory)}: ${escapeHtml(ageLabel)}
                </span>
                <span class="detail-badge pastel-blue">
                  ${escapeHtml(ui.bookDetail.theme)}: ${escapeHtml(meta.theme)}
                </span>
              </div>

              <h1 id="latest-book-main-title" class="detail-title latest-detail-title">
                ${escapeHtml(meta.title)}
              </h1>
              ${
                meta.companionTitle
                  ? `<p class="latest-companion-title">${escapeHtml(meta.companionTitle)}</p>`
                  : ""
              }

              <dl class="credits-list">
                ${creditsHtml}
              </dl>

              <p class="detail-description">${escapeHtml(meta.synopsis)}</p>

              ${
                sdgTilesHtml
                  ? `
                  <div class="latest-sdg-block">
                    <h2 class="latest-sdg-heading">${escapeHtml(ui.latest.sdgHeading)}</h2>
                    <div class="latest-sdg-grid">
                      ${sdgTilesHtml}
                    </div>
                  </div>
                `
                  : ""
              }

              ${
                externalActionBtnsHtml
                  ? `
                  <div class="detail-actions latest-detail-actions">
                    ${externalActionBtnsHtml}
                  </div>
                `
                  : ""
              }
            </div>
          </section>

          <!-- Original Full Cover Spread Showcase -->
          <section class="latest-wrap-showcase" aria-label="${escapeHtml(ui.latest.wrapSpreadHeading)}">
            <div class="latest-wrap-frame pastel-${escapeHtml(activeEntry.pastel)}">
              <span class="latest-wrap-caption">${escapeHtml(ui.latest.wrapSpreadHeading)}</span>
              <img
                src="${escapeHtml(wrapSrc)}"
                alt="${escapeHtml(meta.title)} — ${escapeHtml(ui.latest.wrapSpreadHeading)}"
                data-title="${escapeHtml(meta.title)}"
                class="latest-wrap-img"
                loading="lazy"
              />
            </div>
          </section>

          <!-- Complete Verbatim Original Story, Launch & Inspiration Articles -->
          <div class="latest-articles-container">
            ${articlesHtml}
          </div>

          <!-- Bottom Internal Navigation & Other Featured Releases -->
          <section class="latest-more-section" aria-labelledby="latest-more-heading">
            <div class="latest-bottom-stepper">
              <a
                href="#/latest/${encodeURIComponent(prevEntry.slug)}"
                class="latest-step-btn"
              >
                <span aria-hidden="true">${backArrow}</span>
                <span>${escapeHtml(ui.latest.prevBook)}: ${escapeHtml(prevEntry[state.lang].title)}</span>
              </a>
              <a href="#/latest" class="text-action-link">
                ${escapeHtml(ui.latest.backToLatest)}
              </a>
              <a
                href="#/latest/${encodeURIComponent(nextEntry.slug)}"
                class="latest-step-btn"
              >
                <span>${escapeHtml(ui.latest.nextBook)}: ${escapeHtml(nextEntry[state.lang].title)}</span>
                <span aria-hidden="true">${forwardArrow}</span>
              </a>
            </div>

            <div class="age-section-header" style="margin-top:36px;">
              <h2 id="latest-more-heading" class="age-heading">${escapeHtml(ui.latest.moreReleasesHeading)}</h2>
              <p class="age-description">${escapeHtml(ui.latest.moreReleasesSub)}</p>
            </div>
            <div class="latest-other-grid">
              ${otherCardsHtml}
            </div>
          </section>
        </div>
      </div>
    `;

    function onLatestKeyDown(e) {
      if (!document.body.contains(stage)) {
        document.removeEventListener("keydown", onLatestKeyDown);
        return;
      }
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight") {
        const targetSlug = isAr ? prevEntry.slug : nextEntry.slug;
        window.location.hash = `#/latest/${encodeURIComponent(targetSlug)}`;
      } else if (e.key === "ArrowLeft") {
        const targetSlug = isAr ? nextEntry.slug : prevEntry.slug;
        window.location.hash = `#/latest/${encodeURIComponent(targetSlug)}`;
      }
    }

    document.addEventListener("keydown", onLatestKeyDown);
    window.addEventListener(
      "hashchange",
      () => {
        document.removeEventListener("keydown", onLatestKeyDown);
      },
      { once: true }
    );

    attachCoverFallbacks(stage);
  }

  /* ========================================================================
     View 6: Digital Resources Library (Section 7)
     ======================================================================== */
  function renderResourcesView(stage, focusId) {
    const ui = t();

    const rowsHtml = DATA.digitalResources
      .map((res) => {
        const groupLabel = state.lang === "ar" ? res.groupAr : res.groupEn;
        const title = state.lang === "ar" ? res.arTitle : res.enTitle;
        const desc = state.lang === "ar" ? res.arDesc : res.enDesc;

        return `
          <article id="resource-${escapeHtml(res.id)}" class="resource-row pastel-${res.pastel}">
            <div class="resource-index" aria-hidden="true">${escapeHtml(res.index)}</div>
            <div>
              <div class="resource-group-label">${escapeHtml(groupLabel)}</div>
              <h2 class="resource-title">${escapeHtml(title)}</h2>
              <p class="resource-desc">${escapeHtml(desc)}</p>
              <span class="resource-domain">${escapeHtml(ui.resources.externalDomain)}: ${escapeHtml(res.domain)}</span>
            </div>
            <div>
              <a href="${escapeHtml(res.url)}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--primary">
                ${escapeHtml(ui.resources.visitResource)} ↗
              </a>
            </div>
          </article>
        `;
      })
      .join("");

    stage.innerHTML = `
      <div class="container">
        <header class="editorial-hero">
          <span class="eyebrow pastel-mint">${escapeHtml(ui.resources.eyebrow)}</span>
          <h1 class="editorial-title">${escapeHtml(ui.resources.title)}</h1>
          <p class="editorial-subtitle">${escapeHtml(ui.resources.subtitle)}</p>
        </header>

        <div class="resources-list">
          ${rowsHtml}
        </div>
      </div>
    `;

    if (focusId) {
      requestAnimationFrame(() => {
        const el = document.getElementById(`resource-${focusId}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }

  /* ========================================================================
     View 7: Coronavirus Books Collection (Section 8)
     ======================================================================== */
  function renderCoronavirusView(stage, focusId) {
    const ui = t();

    const cardsHtml = DATA.coronavirusBooks
      .map((book) => {
        const org = state.lang === "ar" ? book.orgAr : book.orgEn;
        const title = state.lang === "ar" ? book.arTitle : book.enTitle;
        const desc = state.lang === "ar" ? book.arDesc : book.enDesc;

        const actionsHtml = book.isPdf
          ? `
            <button
              type="button"
              class="action-btn action-btn--primary"
              data-open-pdf="${escapeHtml(book.url)}"
              data-pdf-title="${escapeHtml(title)}"
            >
              ${escapeHtml(ui.corona.openPdf)}
            </button>
            <a href="${escapeHtml(book.url)}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--outline" style="background: rgba(255,255,255,0.8);">
              ${escapeHtml(ui.corona.visitBookPage)} ↗
            </a>
          `
          : `
            <a href="${escapeHtml(book.url)}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--primary">
              ${escapeHtml(ui.corona.visitBookPage)} ↗
            </a>
          `;

        return `
          <article id="corona-${escapeHtml(book.id)}" class="corona-card pastel-${book.pastel}">
            <div>
              <div class="corona-cover-plate">
                <span class="corona-org">${escapeHtml(org)}</span>
                <h2 class="corona-title">${escapeHtml(title)}</h2>
                <span style="font-size: 0.75rem; color: var(--ink-muted);">
                  ${escapeHtml(ui.corona.placeholderBadge)} · ${escapeHtml(book.domain)}
                </span>
              </div>
              <p style="margin: 22px 0 0; color: var(--ink-secondary); line-height: 1.75;">
                ${escapeHtml(desc)}
              </p>
            </div>

            <div class="detail-actions">
              ${actionsHtml}
            </div>
          </article>
        `;
      })
      .join("");

    stage.innerHTML = `
      <div class="container">
        <header class="editorial-hero">
          <span class="eyebrow pastel-pink">${escapeHtml(ui.corona.eyebrow)}</span>
          <h1 class="editorial-title">${escapeHtml(ui.corona.title)}</h1>
          <p class="editorial-subtitle">${escapeHtml(ui.corona.subtitle)}</p>
        </header>

        <div class="corona-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    bindPdfModalTriggers(stage);

    if (focusId) {
      requestAnimationFrame(() => {
        const el = document.getElementById(`corona-${focusId}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }

  /* ========================================================================
     View 8: Source Assets & Missing Content Audit (Deliverable 5)
     ======================================================================== */
  function renderAuditView(stage) {
    const ui = t();
    const cardsHtml = DATA.missingAssetsReport
      .map((item) => {
        const heading = state.lang === "ar" ? item.categoryAr : item.categoryEn;
        const body = state.lang === "ar" ? item.detailAr : item.detailEn;
        return `
          <article class="audit-card">
            <h3>${escapeHtml(heading)}</h3>
            <p>${escapeHtml(body)}</p>
          </article>
        `;
      })
      .join("");

    stage.innerHTML = `
      <div class="container">
        <header class="editorial-hero">
          <span class="eyebrow pastel-peach">Deliverable · Content & Asset Verification</span>
          <h1 class="editorial-title">${escapeHtml(ui.audit.title)}</h1>
          <p class="editorial-subtitle">${escapeHtml(ui.audit.subtitle)}</p>
        </header>
        <div class="audit-list">
          ${cardsHtml}
        </div>
      </div>
    `;
  }

  /* ========================================================================
     View 8: Research & Studies (#/research and internal category sub-routes)
     ======================================================================== */
  function clearResearchSlideTimer() {
    if (state.researchSlideTimer) {
      window.clearInterval(state.researchSlideTimer);
      state.researchSlideTimer = null;
    }
  }

  function buildResearchSubnavHtml(activeSectionSlug) {
    const ui = t();
    const isAr = state.lang === "ar";
    const rd = DATA.researchData;
    const backArrow = isAr ? "→" : "←";

    const pillsHtml = rd.categories
      .map((cat) => {
        const label = isAr ? cat.titleAr : cat.titleEn;
        const routeHref = cat.route || `#/research/${cat.id}`;
        const isCurrent = cat.id === activeSectionSlug;
        return `
          <a
            href="${escapeHtml(routeHref)}"
            class="research-subnav-pill ${isCurrent ? "is-active" : ""}"
            ${isCurrent ? 'aria-current="page"' : ""}
          >
            <span>${escapeHtml(label)}</span>
          </a>
        `;
      })
      .join("");

    return `
      <nav class="research-subnav" aria-label="${escapeHtml(ui.nav.researchStudies)}">
        <a href="#/research" class="back-link research-back-link">
          <span aria-hidden="true">${backArrow}</span>
          <span>${escapeHtml(ui.research.backToResearch)}</span>
        </a>
        <div class="research-subnav-pills">
          ${pillsHtml}
        </div>
      </nav>
    `;
  }

  function renderResearchOverview(stage) {
    const isAr = state.lang === "ar";
    const rd = DATA.researchData;
    const heroEyebrow = isAr ? rd.hero.eyebrowAr : rd.hero.eyebrowEn;
    const heroTitle = isAr ? rd.hero.titleAr : rd.hero.titleEn;

    state.researchSlideIndex = 0;

    const categoriesHtml = rd.categories
      .map((cat) => {
        const title = isAr ? cat.titleAr : cat.titleEn;
        const hoverDesc = isAr ? cat.hoverDescAr : cat.hoverDescEn;
        const ctaLabel = isAr ? cat.ctaLabelAr : cat.ctaLabelEn;
        const routeHref = cat.route || `#/research/${cat.id}`;

        return `
          <a
            href="${escapeHtml(routeHref)}"
            class="research-cat-card"
            data-cat-id="${escapeHtml(cat.id)}"
            aria-label="${escapeHtml(title)}"
          >
            <div class="research-card-plate pastel-${escapeHtml(cat.pastel)}">
              <div class="research-card-front">
                <img
                  src="${escapeHtml(cat.icon)}"
                  data-fallback="${escapeHtml(cat.iconFallback)}"
                  data-title="${escapeHtml(title)}"
                  alt="${escapeHtml(title)}"
                  class="research-cat-icon"
                />
              </div>
              <div class="research-card-overlay pastel-${escapeHtml(cat.pastel)}" aria-hidden="true">
                ${hoverDesc ? `<p class="research-cat-desc">${escapeHtml(hoverDesc)}</p>` : ""}
                <span class="action-btn action-btn--primary research-cat-cta">
                  ${escapeHtml(ctaLabel)}
                </span>
              </div>
            </div>
            <h2 class="research-cat-title">${escapeHtml(title)}</h2>
          </a>
        `;
      })
      .join("");

    const slides = rd.slideshow.slides;
    const slidesHtml = slides
      .map((slide, idx) => {
        const altText = isAr ? slide.altAr : slide.altEn;
        const isActive = idx === 0;
        return `
          <figure
            class="research-slide ${isActive ? "is-active" : ""}"
            data-slide-index="${idx}"
            aria-hidden="${isActive ? "false" : "true"}"
          >
            <img
              src="${escapeHtml(slide.src)}"
              data-fallback="${escapeHtml(slide.fallbackUrl)}"
              data-title="${escapeHtml(heroTitle)}"
              alt="${escapeHtml(altText)}"
              width="${slide.width}"
              height="${slide.height}"
              class="research-slide-img"
            />
          </figure>
        `;
      })
      .join("");

    const dotsHtml = slides
      .map((_, idx) => {
        const isActive = idx === 0;
        return `<span class="research-slide-dot ${isActive ? "is-active" : ""}" data-dot-index="${idx}" aria-hidden="true"></span>`;
      })
      .join("");

    stage.innerHTML = `
      <div class="container research-page">
        <header class="editorial-hero research-hero">
          <span class="eyebrow pastel-blue">${escapeHtml(heroEyebrow)}</span>
          <h1 class="editorial-title">${escapeHtml(heroTitle)}</h1>
        </header>

        <section class="research-overview-split" aria-label="${escapeHtml(heroTitle)}">
          <div class="research-categories-grid">
            ${categoriesHtml}
          </div>

          <div class="research-slideshow-panel">
            <div class="research-slideshow-stage" id="research-slideshow-stage" aria-live="off">
              ${slidesHtml}
              <div class="research-slideshow-dots" aria-hidden="true">
                ${dotsHtml}
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    attachCoverFallbacks(stage);

    // Continuous automatic 3-photograph slideshow rotation
    const slideEls = Array.from(stage.querySelectorAll(".research-slide"));
    const dotEls = Array.from(stage.querySelectorAll(".research-slide-dot"));
    if (slideEls.length > 1) {
      const intervalMs = (rd.slideshow && rd.slideshow.intervalMs) || 4500;
      state.researchSlideTimer = window.setInterval(() => {
        const stageStillMounted = document.getElementById("research-slideshow-stage");
        if (!stageStillMounted) {
          clearResearchSlideTimer();
          return;
        }
        state.researchSlideIndex = (state.researchSlideIndex + 1) % slideEls.length;
        slideEls.forEach((el, idx) => {
          const active = idx === state.researchSlideIndex;
          el.classList.toggle("is-active", active);
          el.setAttribute("aria-hidden", active ? "false" : "true");
        });
        dotEls.forEach((dot, idx) => {
          dot.classList.toggle("is-active", idx === state.researchSlideIndex);
        });
      }, intervalMs);
    }
  }

  function renderResearchSummarySubpage(stage) {
    const isAr = state.lang === "ar";
    const rd = DATA.researchData;
    const cat = rd.categories.find((c) => c.id === "research-summary") || rd.categories[0];
    const heading = isAr ? cat.titleAr : cat.titleEn;
    const summaryStatement = isAr ? cat.hoverDescAr : cat.hoverDescEn;
    const downloadLabel = isAr ? cat.ctaLabelAr : cat.ctaLabelEn;
    const pdfHref = isAr ? cat.pdfAr : cat.pdfEn;
    const downloadName = isAr ? cat.downloadNameAr : cat.downloadNameEn;

    stage.innerHTML = `
      <div class="container research-page research-subpage">
        ${buildResearchSubnavHtml("research-summary")}

        <header class="editorial-hero research-subhero">
          <span class="eyebrow pastel-yellow">${escapeHtml(isAr ? rd.hero.titleAr : rd.hero.titleEn)}</span>
          <h1 class="editorial-title">${escapeHtml(heading)}</h1>
        </header>

        <section class="research-rct-layout">
          <aside class="research-rct-aside">
            <div class="research-rct-card pastel-yellow">
              <div class="research-rct-cover-wrap research-summary-icon-wrap">
                <img
                  src="${escapeHtml(cat.icon)}"
                  data-fallback="${escapeHtml(cat.iconFallback)}"
                  data-title="${escapeHtml(heading)}"
                  alt="${escapeHtml(heading)}"
                  class="research-summary-hero-icon"
                />
              </div>
              <a
                href="${escapeHtml(pdfHref)}"
                target="_blank"
                rel="noopener noreferrer"
                download="${escapeHtml(downloadName)}"
                class="action-btn action-btn--primary research-rct-download-btn"
              >
                ${escapeHtml(downloadLabel)}
              </a>
            </div>
          </aside>

          <div class="research-rct-main">
            <h2 class="research-rct-workshop-title">${escapeHtml(summaryStatement)}</h2>
          </div>
        </section>
      </div>
    `;

    attachCoverFallbacks(stage);
  }

  function formatMultilineText(str) {
    return escapeHtml(str).replace(/\n/g, "<br />");
  }

  function renderOngoingResearchSubpage(stage) {
    const isAr = state.lang === "ar";
    const rd = DATA.researchData;
    const ongoing = rd.ongoingResearch;
    const heading = isAr ? ongoing.headingAr : ongoing.headingEn;
    const projects = (isAr ? ongoing.projectsAr : ongoing.projectsEn) || [];

    const projectsHtml = projects
      .map((proj) => {
        const metaLinesHtml = (proj.metaLines || [])
          .map((line) => {
            const isFunder = /^\s*Funder\s*:/i.test(line);
            const cls = isFunder
              ? "research-ongoing-meta-line research-ongoing-meta-line--funder"
              : "research-ongoing-meta-line";
            return `<p class="${cls}">${formatMultilineText(line)}</p>`;
          })
          .join("");

        const paragraphsHtml = (proj.paragraphs || [])
          .map((para) => `<p class="research-ongoing-desc">${formatMultilineText(para)}</p>`)
          .join("");

        const ctaObj = proj.cta;
        const ctaHref = ctaObj ? ctaObj.localPdf || ctaObj.url : "";

        return `
          <article class="research-ongoing-card" data-ongoing-id="${escapeHtml(proj.id)}">
            <div class="research-ongoing-logo-plate pastel-${escapeHtml(proj.pastel)}">
              <div class="research-ongoing-logo-well">
                <img
                  src="${escapeHtml(proj.image)}"
                  data-fallback="${escapeHtml(proj.imageFallback)}"
                  data-title="${escapeHtml(proj.imgTitle || proj.title)}"
                  alt="${escapeHtml(proj.alt || proj.imgTitle || proj.title)}"
                  title="${escapeHtml(proj.imgTitle || "")}"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="research-ongoing-body">
              <h2 class="research-ongoing-title">${formatMultilineText(proj.title)}</h2>
              ${metaLinesHtml ? `<div class="research-ongoing-meta-list">${metaLinesHtml}</div>` : ""}
              <div class="research-ongoing-paragraphs">
                ${paragraphsHtml}
              </div>
              ${
                ctaObj && ctaHref
                  ? `
                    <div class="research-card-actions">
                      <a
                        href="${escapeHtml(ctaHref)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="${escapeHtml(ctaObj.label)}"
                        class="action-btn action-btn--primary research-ongoing-cta"
                      >
                        <span>${escapeHtml(ctaObj.label)}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  `
                  : ""
              }
            </div>
          </article>
        `;
      })
      .join("");

    stage.innerHTML = `
      <div class="container research-page research-subpage">
        ${buildResearchSubnavHtml("ongoing-research")}

        <header class="editorial-hero research-subhero">
          <span class="eyebrow pastel-mint">${escapeHtml(isAr ? rd.hero.titleAr : rd.hero.titleEn)}</span>
          <h1 class="editorial-title">${escapeHtml(heading)}</h1>
        </header>

        <div class="research-ongoing-list">
          ${projectsHtml}
        </div>
      </div>
    `;

    attachCoverFallbacks(stage);
  }

  function renderPublishedResearchSubpage(stage) {
    const ui = t();
    const isAr = state.lang === "ar";
    const rd = DATA.researchData;
    const pub = rd.publishedResearch;
    const heading = isAr ? pub.headingAr : pub.headingEn;
    const filtersMeta = pub.filters;

    const tgLabelMap = new Map(filtersMeta.targetGroups.options.map((o) => [o.id, isAr ? o.ar : o.en]));
    const subjLabelMap = new Map(filtersMeta.subjects.options.map((o) => [o.id, isAr ? o.ar : o.en]));
    const typeLabelMap = new Map(filtersMeta.publicationTypes.options.map((o) => [o.id, isAr ? o.ar : o.en]));

    const chevronSvg = `<svg class="pub-multiselect-chevron" viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const calendarSvg = `<svg class="research-pub-calendar-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true"><rect x="2.25" y="3.25" width="11.5" height="10.5" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M5.25 1.75V4.25M10.75 1.75V4.25M2.25 6.5H13.75" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;

    function getOrderedOptions(groupMeta) {
      if (isAr && Array.isArray(groupMeta.arOrder)) {
        const byId = new Map(groupMeta.options.map((o) => [o.id, o]));
        return groupMeta.arOrder.map((id) => byId.get(id)).filter(Boolean);
      }
      return groupMeta.options;
    }

    function buildDropdownHtml(groupKey, groupMeta) {
      const defaultLabel = isAr ? groupMeta.labelAr : groupMeta.labelEn;
      const orderedOpts = getOrderedOptions(groupMeta);
      const selectedArr = state.researchFilters[groupKey] || [];

      const checkboxesHtml = orderedOpts
        .map((opt) => {
          const text = isAr ? opt.ar : opt.en;
          const isChecked = selectedArr.includes(opt.id);
          return `
            <label class="pub-multiselect-option ${isChecked ? "is-checked" : ""}">
              <input
                type="checkbox"
                class="pub-multiselect-checkbox"
                data-filter-group="${escapeHtml(groupKey)}"
                value="${escapeHtml(opt.id)}"
                ${isChecked ? "checked" : ""}
              />
              <span class="pub-multiselect-box" aria-hidden="true">
                <svg viewBox="0 0 12 12" width="11" height="11" fill="none">
                  <path d="M2.2 6.2L4.8 8.8L9.8 3.4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="pub-multiselect-option-text">${escapeHtml(text)}</span>
            </label>
          `;
        })
        .join("");

      return `
        <div class="pub-multiselect" data-multiselect-group="${escapeHtml(groupKey)}">
          <button
            type="button"
            class="pub-multiselect-trigger"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span class="pub-multiselect-trigger-text" data-default-label="${escapeHtml(defaultLabel)}">${escapeHtml(defaultLabel)}</span>
            ${chevronSvg}
          </button>
          <div class="pub-multiselect-panel" role="group" aria-label="${escapeHtml(defaultLabel)}">
            <div class="pub-multiselect-panel-head">
              <span class="pub-multiselect-panel-title">${escapeHtml(defaultLabel)}</span>
              <button
                type="button"
                class="pub-multiselect-close"
                aria-label="${escapeHtml(ui.research.closeDropdown)}"
              >×</button>
            </div>
            <div class="pub-multiselect-options">
              ${checkboxesHtml}
            </div>
          </div>
        </div>
      `;
    }

    stage.innerHTML = `
      <div class="container research-page research-subpage">
        ${buildResearchSubnavHtml("published-research")}

        <header class="editorial-hero research-subhero">
          <span class="eyebrow pastel-blue">${escapeHtml(isAr ? rd.hero.titleAr : rd.hero.titleEn)}</span>
          <h1 class="editorial-title">${escapeHtml(heading)}</h1>
        </header>

        <section class="research-filter-bar" aria-label="${escapeHtml(heading)}">
          <div class="research-filter-controls">
            ${buildDropdownHtml("targetGroups", filtersMeta.targetGroups)}
            ${buildDropdownHtml("subjects", filtersMeta.subjects)}
            ${buildDropdownHtml("publicationTypes", filtersMeta.publicationTypes)}
          </div>

          <div id="pub-active-filters-bar" class="pub-active-filters-bar" hidden>
            <div id="pub-active-chips" class="pub-active-chips"></div>
            <button type="button" id="research-filter-reset" class="lang-btn research-filter-reset">
              ${escapeHtml(ui.research.resetFilters)}
            </button>
          </div>

          <p id="research-results-count" class="research-results-count" aria-live="polite"></p>
        </section>

        <div id="research-publications-list" class="research-publications-list"></div>
      </div>
    `;

    const multiselectEls = Array.from(stage.querySelectorAll(".pub-multiselect"));
    const activeBarEl = stage.querySelector("#pub-active-filters-bar");
    const activeChipsEl = stage.querySelector("#pub-active-chips");
    const resetBtn = stage.querySelector("#research-filter-reset");
    const countEl = stage.querySelector("#research-results-count");
    const listEl = stage.querySelector("#research-publications-list");

    const pastels = buildPastelSequence(pub.items.length, 2);

    const groupMapLookup = {
      targetGroups: tgLabelMap,
      subjects: subjLabelMap,
      publicationTypes: typeLabelMap
    };

    function closeAllFilterDropdowns() {
      multiselectEls.forEach((ms) => {
        ms.classList.remove("is-open");
        const trig = ms.querySelector(".pub-multiselect-trigger");
        if (trig) trig.setAttribute("aria-expanded", "false");
      });
    }

    function syncTriggerLabelsAndChips() {
      const chipsHtml = [];

      multiselectEls.forEach((ms) => {
        const groupKey = ms.getAttribute("data-multiselect-group");
        const selectedIds = state.researchFilters[groupKey] || [];
        const labelMap = groupMapLookup[groupKey];
        const trig = ms.querySelector(".pub-multiselect-trigger");
        const trigTextEl = ms.querySelector(".pub-multiselect-trigger-text");
        const defaultLabel = trigTextEl.getAttribute("data-default-label") || "";

        if (selectedIds.length === 0) {
          trigTextEl.textContent = defaultLabel;
          trig.classList.remove("has-selection");
        } else if (selectedIds.length === 1) {
          trigTextEl.textContent = labelMap.get(selectedIds[0]) || selectedIds[0];
          trig.classList.add("has-selection");
        } else {
          trigTextEl.textContent = `${defaultLabel} (${selectedIds.length})`;
          trig.classList.add("has-selection");
        }

        ms.querySelectorAll(".pub-multiselect-option").forEach((optRow) => {
          const cb = optRow.querySelector(".pub-multiselect-checkbox");
          const checked = selectedIds.includes(cb.value);
          cb.checked = checked;
          optRow.classList.toggle("is-checked", checked);
        });

        selectedIds.forEach((id) => {
          const termLabel = labelMap.get(id) || id;
          chipsHtml.push(`
            <button
              type="button"
              class="pub-filter-chip"
              data-remove-group="${escapeHtml(groupKey)}"
              data-remove-id="${escapeHtml(id)}"
              aria-label="${escapeHtml(ui.research.removeFilterAria)}: ${escapeHtml(termLabel)}"
            >
              <span>${escapeHtml(termLabel)}</span>
              <span class="pub-filter-chip-x" aria-hidden="true">×</span>
            </button>
          `);
        });
      });

      const hasAny = chipsHtml.length > 0;
      activeBarEl.hidden = !hasAny;
      activeChipsEl.innerHTML = chipsHtml.join("");
    }

    function updatePublicationsList() {
      syncTriggerLabelsAndChips();

      const selTg = state.researchFilters.targetGroups || [];
      const selSubj = state.researchFilters.subjects || [];
      const selType = state.researchFilters.publicationTypes || [];

      const filtered = pub.items.filter((item) => {
        const itemTypes = (isAr ? item.publicationTypesAr : item.publicationTypesEn) || [];
        const itemTg = item.targetGroups || [];
        const itemSubj = item.subjects || [];

        if (selTg.length > 0 && !selTg.some((id) => itemTg.includes(id))) return false;
        if (selSubj.length > 0 && !selSubj.some((id) => itemSubj.includes(id))) return false;
        if (selType.length > 0 && !selType.some((id) => itemTypes.includes(id))) return false;
        return true;
      });

      const prefix = isAr ? pub.sortNoticePrefixAr : pub.sortNoticePrefixEn;
      countEl.textContent = `${prefix} ${filtered.length}`;

      if (!filtered.length) {
        listEl.innerHTML = `<p class="research-empty-state">${escapeHtml(ui.research.noFilterResults)}</p>`;
        return;
      }

      const readMoreLabel = isAr ? pub.readMoreAr : pub.readMoreEn;

      listEl.innerHTML = filtered
        .map((item, idx) => {
          const title = isAr ? item.titleAr : item.titleEn;
          const dateStr = isAr ? item.dateAr : item.dateEn;
          const desc = isAr ? item.descAr : item.descEn;
          const itemTypes = isAr ? item.publicationTypesAr : item.publicationTypesEn;
          const pastel = pastels[idx % pastels.length];
          const primaryHref = item.url;

          const badges = [
            ...(itemTypes || []).map((id) => `<span class="research-tag research-tag--type">${escapeHtml(typeLabelMap.get(id) || id)}</span>`),
            ...(item.subjects || []).map((id) => `<span class="research-tag">${escapeHtml(subjLabelMap.get(id) || id)}</span>`),
            ...(item.targetGroups || []).map((id) => `<span class="research-tag">${escapeHtml(tgLabelMap.get(id) || id)}</span>`)
          ].join("");

          return `
            <article class="research-pub-card" data-pub-id="${escapeHtml(item.id)}">
              <a
                href="${escapeHtml(primaryHref)}"
                target="_blank"
                rel="noopener noreferrer"
                class="research-pub-thumb pastel-${escapeHtml(pastel)}"
                aria-label="${escapeHtml(title)}"
              >
                <img
                  src="${escapeHtml(item.thumb)}"
                  data-fallback="${escapeHtml(item.thumbFallback)}"
                  data-title="${escapeHtml(title)}"
                  alt="${escapeHtml(title)}"
                  loading="lazy"
                />
              </a>
              <div class="research-pub-content">
                <h2 class="research-pub-title">
                  <a href="${escapeHtml(primaryHref)}" target="_blank" rel="noopener noreferrer">
                    ${escapeHtml(title)}
                  </a>
                </h2>
                <div class="research-pub-meta">
                  <time class="research-pub-date">${calendarSvg}<span>${escapeHtml(dateStr)}</span></time>
                  <div class="research-pub-tags">${badges}</div>
                </div>
                <p class="research-pub-desc">${escapeHtml(desc)}</p>
                <div class="research-card-actions">
                  <a
                    href="${escapeHtml(primaryHref)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="action-btn action-btn--primary research-read-btn"
                  >
                    <span>${escapeHtml(readMoreLabel)}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          `;
        })
        .join("");

      attachCoverFallbacks(listEl);
    }

    multiselectEls.forEach((ms) => {
      const trig = ms.querySelector(".pub-multiselect-trigger");
      const closeBtn = ms.querySelector(".pub-multiselect-close");

      trig.addEventListener("click", (e) => {
        e.stopPropagation();
        const wasOpen = ms.classList.contains("is-open");
        closeAllFilterDropdowns();
        if (!wasOpen) {
          ms.classList.add("is-open");
          trig.setAttribute("aria-expanded", "true");
        }
      });

      if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          ms.classList.remove("is-open");
          trig.setAttribute("aria-expanded", "false");
          trig.focus();
        });
      }

      ms.querySelectorAll(".pub-multiselect-checkbox").forEach((cb) => {
        cb.addEventListener("change", () => {
          const groupKey = cb.getAttribute("data-filter-group");
          const val = cb.value;
          const current = new Set(state.researchFilters[groupKey] || []);
          if (cb.checked) {
            current.add(val);
          } else {
            current.delete(val);
          }
          state.researchFilters[groupKey] = Array.from(current);
          updatePublicationsList();
        });
      });
    });

    activeChipsEl.addEventListener("click", (e) => {
      const chip = e.target.closest(".pub-filter-chip");
      if (!chip) return;
      const groupKey = chip.getAttribute("data-remove-group");
      const removeId = chip.getAttribute("data-remove-id");
      if (groupKey && state.researchFilters[groupKey]) {
        state.researchFilters[groupKey] = state.researchFilters[groupKey].filter((id) => id !== removeId);
        updatePublicationsList();
      }
    });

    resetBtn.addEventListener("click", () => {
      state.researchFilters.targetGroups = [];
      state.researchFilters.subjects = [];
      state.researchFilters.publicationTypes = [];
      closeAllFilterDropdowns();
      updatePublicationsList();
    });

    updatePublicationsList();
  }

  function renderRctGuideSubpage(stage) {
    const isAr = state.lang === "ar";
    const rd = DATA.researchData;
    const rct = rd.rctGuide;
    const heading = isAr ? rct.headingAr : rct.headingEn;
    const workshopTitle = isAr ? rct.workshopTitleAr : rct.workshopTitleEn;
    const dateLine = isAr ? rct.dateAr : rct.dateEn;
    const authorsLine = isAr ? rct.authorsAr : rct.authorsEn;
    const contentsLabel = isAr ? rct.contentsLabelAr : rct.contentsLabelEn;
    const contentsItems = isAr ? rct.contentsAr : rct.contentsEn;
    const downloadLabel = isAr ? rct.downloadLabelAr : rct.downloadLabelEn;
    const pdfHref = rct.pdfLocal || rct.pdfFallback;

    const bulletsHtml = contentsItems.map((line) => `<li>${escapeHtml(line)}</li>`).join("");

    stage.innerHTML = `
      <div class="container research-page research-subpage">
        ${buildResearchSubnavHtml("rct-guide")}

        <header class="editorial-hero research-subhero">
          <span class="eyebrow pastel-peach">${escapeHtml(isAr ? rd.hero.titleAr : rd.hero.titleEn)}</span>
          <h1 class="editorial-title">${escapeHtml(heading)}</h1>
        </header>

        <section class="research-rct-layout">
          <aside class="research-rct-aside">
            <div class="research-rct-card pastel-peach">
              <div class="research-rct-cover-wrap">
                <img
                  src="${escapeHtml(rct.coverImage)}"
                  data-fallback="${escapeHtml(rct.coverFallback)}"
                  data-title="${escapeHtml(heading)}"
                  alt="${escapeHtml(heading)}"
                  class="research-rct-cover-img"
                />
              </div>
              <a
                href="${escapeHtml(pdfHref)}"
                target="_blank"
                rel="noopener noreferrer"
                download="${escapeHtml(rct.downloadName)}"
                class="action-btn action-btn--primary research-rct-download-btn"
              >
                ${escapeHtml(downloadLabel)}
              </a>
            </div>
          </aside>

          <div class="research-rct-main">
            <h2 class="research-rct-workshop-title">${escapeHtml(workshopTitle)}</h2>
            <p class="research-rct-date">${escapeHtml(dateLine)}</p>
            <p class="research-rct-authors">${escapeHtml(authorsLine)}</p>

            <div class="research-rct-contents-box">
              <h3 class="research-rct-contents-heading">${escapeHtml(contentsLabel)}</h3>
              <ul class="research-rct-contents-list">
                ${bulletsHtml}
              </ul>
            </div>
          </div>
        </section>
      </div>
    `;

    attachCoverFallbacks(stage);
  }

  function renderResearchView(stage, sectionSlug) {
    clearResearchSlideTimer();
    if (sectionSlug === "research-summary") {
      renderResearchSummarySubpage(stage);
    } else if (sectionSlug === "ongoing-research") {
      renderOngoingResearchSubpage(stage);
    } else if (sectionSlug === "published-research") {
      renderPublishedResearchSubpage(stage);
    } else if (sectionSlug === "rct-guide") {
      renderRctGuideSubpage(stage);
    } else {
      renderResearchOverview(stage);
    }
  }

  /* ========================================================================
     Image Fallback & PDF Modal Utilities
     ======================================================================== */
  function attachCoverFallbacks(root) {
    root.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", function handleImgError() {
        const fallback = img.getAttribute("data-fallback");
        if (fallback && img.src !== fallback) {
          img.src = fallback;
          return;
        }
        // Replace with labeled authentic placeholder plate if offline
        const title = img.getAttribute("data-title") || img.alt || "WLR Storybook";
        const plate = document.createElement("div");
        plate.className = "cover-fallback-plate";
        plate.innerHTML = `
          <span class="cover-fallback-tag">WLR Original Cover</span>
          <strong class="cover-fallback-title">${escapeHtml(title)}</strong>
          <span class="cover-fallback-tag">Offline Preview</span>
        `;
        img.replaceWith(plate);
      });
    });
  }

  function bindPdfModalTriggers(root) {
    const modal = document.getElementById("pdf-modal");
    const frame = document.getElementById("pdf-modal-frame");
    const modalTitle = document.getElementById("pdf-modal-title");
    const closeBtn = document.getElementById("pdf-modal-close");

    root.querySelectorAll("[data-open-pdf]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pdfUrl = btn.getAttribute("data-open-pdf");
        const title = btn.getAttribute("data-pdf-title") || "PDF Document";
        const ui = t();

        modalTitle.textContent = title;
        if (closeBtn) closeBtn.textContent = ui.modal.close;
        frame.src = pdfUrl;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
      });
    });
  }

  function closePdfModal() {
    const modal = document.getElementById("pdf-modal");
    const frame = document.getElementById("pdf-modal-frame");
    if (modal && modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      frame.src = "about:blank";
    }
  }

  /* ========================================================================
     Hash Router
     ======================================================================== */
  function parseHash() {
    const raw = (window.location.hash || "#/our-books").replace(/^#\/?/, "");
    const [pathPart, queryPart] = raw.split("?");
    const segments = pathPart.split("/").filter(Boolean);
    const view = segments[0] || "our-books";
    const param = segments[1] ? decodeURIComponent(segments[1]) : null;
    const params = new URLSearchParams(queryPart || "");
    return { view, param, params };
  }

  function handleRoute(scrollToTop = true) {
    clearResearchSlideTimer();
    const route = parseHash();
    state.mobileMenuOpen = false;

    if (route.view === "our-books") {
      const qAge = route.params.get("age");
      if (qAge && DATA.ageCategories.some((c) => c.id === qAge)) {
        state.ageFilter = qAge;
      } else if (!qAge) {
        state.ageFilter = "all";
      }
    }

    if (route.view === "magazine") {
      const qBook = route.params.get("book");
      const validSlugs = (DATA.magazines[0] && DATA.magazines[0].bookSlugs) || [];
      if (qBook && validSlugs.includes(qBook)) {
        state.magazineBookSlug = qBook;
      } else {
        state.magazineBookSlug = null;
      }
    }

    renderHeader(route);
    renderFooter();

    const oldStage = document.getElementById("app-stage");
    // Re-trigger subtle CSS fade animation
    const freshStage = oldStage.cloneNode(false);
    oldStage.replaceWith(freshStage);

    switch (route.view) {
      case "book":
        renderBookDetailView(freshStage, route.param);
        break;
      case "catalogue":
        renderCatalogueView(freshStage);
        break;
      case "magazine":
        renderMagazineView(freshStage);
        break;
      case "latest":
        renderLatestBooksView(freshStage, route.param);
        break;
      case "resources":
        renderResourcesView(freshStage, route.param);
        break;
      case "research":
        renderResearchView(freshStage, route.param);
        break;
      case "coronavirus":
        renderCoronavirusView(freshStage, route.param);
        break;
      case "audit":
        renderAuditView(freshStage);
        break;
      case "our-books":
      default:
        renderOurBooksView(freshStage);
        break;
    }

    const hasMagBookQuery = route.view === "magazine" && Boolean(route.params.get("book"));
    if (scrollToTop && !route.param && !hasMagBookQuery) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    } else if (scrollToTop && (route.view === "book" || route.view === "latest" || route.view === "research")) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  }

  /* ========================================================================
     Bootstrapping
     ======================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    applyDocumentDirection();

    // Global dismiss handlers for dropdowns & modal
    document.addEventListener("click", (e) => {
      document.querySelectorAll(".nav-group.is-open").forEach((g) => {
        g.classList.remove("is-open");
        const b = g.querySelector(".nav-trigger, .nav-trigger-arrow");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!e.target.closest(".pub-multiselect")) {
        document.querySelectorAll(".pub-multiselect.is-open").forEach((ms) => {
          ms.classList.remove("is-open");
          const trig = ms.querySelector(".pub-multiselect-trigger");
          if (trig) trig.setAttribute("aria-expanded", "false");
        });
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closePdfModal();
        document.querySelectorAll(".nav-group.is-open").forEach((g) => {
          g.classList.remove("is-open");
          const b = g.querySelector(".nav-trigger, .nav-trigger-arrow");
          if (b) b.setAttribute("aria-expanded", "false");
        });
        document.querySelectorAll(".pub-multiselect.is-open").forEach((ms) => {
          ms.classList.remove("is-open");
          const trig = ms.querySelector(".pub-multiselect-trigger");
          if (trig) {
            trig.setAttribute("aria-expanded", "false");
            if (ms.contains(document.activeElement)) trig.focus();
          }
        });
      }
    });

    const closeBtn = document.getElementById("pdf-modal-close");
    const modal = document.getElementById("pdf-modal");
    if (closeBtn) closeBtn.addEventListener("click", closePdfModal);
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closePdfModal();
      });
    }

    window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
    window.addEventListener("hashchange", () => handleRoute(true));
    handleRoute(true);
  });
})();
