# We Love Reading — Children’s Books Redesign Prototype

A standalone, editorial-style redesign prototype for the **Children’s Books** section of [We Love Reading (`welovereading.org`)](https://welovereading.org/), visually inspired by the pastel portfolio grid aesthetic of `nancyconescubooks.com` while preserving 100% authentic We Love Reading books, covers, age categories, links, and bilingual support.

---

## Key Features & Deliverables

1. **Preserved Navigation Structure**
   - **WLR Children Books**: `Our Books`, `Story Books Catalogue`, `WLR Children Books Magazine`
   - **Our Latest Book**: `Queen of Balloons`, `The Peppered Moth`, `Shells of Freedom` (plus Featured Overview)
   - **Resources for Digital Children’s Books**: Alnqsh (`alnqsh.com`), Archive of 6,000 Historical Children’s Books (`openculture.com`), `Audible Stories` (`stories.audible.com`)
   - **Children Books About the Coronavirus**: WHO / IASC *My Hero is You* (PDF), Pangea Education *The Unwelcome Stranger*
2. **Our Books Gallery & Age Filter**
   - Responsive editorial grid: **5 columns on desktop** (`≥1100px`), **3 columns on tablet** (`680px–1099px`), **2 columns on mobile** (`<680px`).
   - Neighbor-aware soft pastel square tiles (Pastel Yellow, Mint, Blush Pink, Baby Blue, and Peach) with zero heavy borders or product-card clutter.
   - Working **Filter by Age** (`All Ages`, `4–6 Years`, `5–8 Years`, `7–10 Years`) displaying all **36 authentic We Love Reading storybooks**.
3. **Redesigned Individual Book Pages**
   - Large original book cover stage, literary title, Author & Illustrator credits, Age Category, Theme, full original description, preserved **BUY / WATCH / REVIEWS** links where valid, original WLR page link, and **Related Books** from the same age category.
4. **Story Books Catalogue & WLR Magazine**
   - Dedicated editorial Catalogue page with inline PDF reader & download options for the official **2026 English & Arabic Story Books Catalogues** (plus 2020–2024 historical editions) and interactive theme + age filtering.
   - Editorial **WLR Children Books Magazine** gallery displaying authentic covers from the WLR archive, showing PDF read/download actions strictly when valid PDF files exist on the source server.
5. **Bilingual English (LTR) & Arabic (RTL)**
   - Instant `العربية / English` toggle in the header switching layout direction (`dir="ltr"` / `dir="rtl"`), typography, navigation, and authentic English/Arabic book metadata extracted from `welovereading.org`.

---

## Missing or Discrepant Original Assets & Content Report

During the live audit of `https://welovereading.org/` and `https://welovereading.org/ar/`, the following missing assets and structural discrepancies were identified and handled transparently without inventing content:

1. **Omitted Age 7–10 Section on Live English Gallery (`welovereading.org/our-books/`)**
   - The live English `/our-books/` grid currently renders only **Age Category: 4–6 Years** (15 books) and **Age Category: 5–8 Years** (2 books), omitting **Age Category: 7–10 Years**.
   - However, the live Arabic gallery (`/ar/our-books/`) lists **19 books under Age 7–10**, and every single one of those 19 books has a published English book detail page on `welovereading.org/our-books/<slug>/`. Our prototype includes all 36 authentic books across all three age categories in both languages.
2. **No Standalone Web Pages for Catalogue & Magazine on Original Site**
   - In the live WLR header menu, *Story Books Catalogue* (`.../catalog-WLR-english-new-2026.pdf`) and *WLR Children Books Magazine* (`.../magazine-of-books-eidted-6EN-Last-version4554.pdf`) link directly to raw PDF uploads; `/story-books-catalogue/` and `/wlr-children-books-magazine/` return `404`. The prototype provides full editorial pages while linking directly to those exact official PDFs.
3. **Unpaired Magazine Cover Thumbnails vs. PDFs**
   - *Special Gaza Magazine Edition (2024)* (`En-Gaza-magazine-finalEDITEN.pdf`) has a valid PDF hosted on WLR, but no separate cover PNG image uploaded — a labeled editorial typographic cover plate is used.
   - *WLR Community Magazine — 2nd Edition (2015)* has an original cover PNG (`WLR-magazine_2nd_edition_arabic_2015-01.png`) in the WLR media library, but no corresponding PDF upload — PDF read/download buttons are omitted for that issue.
4. **External Coronavirus Storybooks Have No Locally Hosted Covers on WLR**
   - The two Coronavirus menu items link directly to external resources (IASC/WHO PDF and `pangeaeducation.org`) without cover thumbnails hosted on `welovereading.org`. Clearly labeled editorial cover plates are shown alongside their preserved external links.
5. **Circular `WATCH` Links & Legacy Store Links on Original Book Pages**
   - On the live site, the `WATCH` button on *Eid Gift*, *Why did Electricity Run Away?*, and *The Peppered Moth* self-links back to the book’s own page URL instead of a video; circular self-links are omitted in the prototype so only genuine video/launch links appear.
   - Three English book links (*Salma’s Riddle*, *A Sun Without Bills*, *The Amazing Water Hero*) redirect on the live site to WooCommerce `/product/` pages (`5.00 JOD`), and several older `BUY` links point to legacy `jamalon.com` URLs; all original URLs are preserved faithfully.
6. **Cover Artwork Language Availability**
   - Separate English-lettered and Arabic-lettered cover files exist on `welovereading.org` for four newer releases (*Queen of Balloons*, *The Peppered Moth*, *Shells of Freedom*, and *My Mama’s Magic*). Earlier 2020–2021 books use the same original illustrated Arabic-lettered cover image across both the English and Arabic WLR pages.

---

## Running the Prototype Locally

Because the prototype uses pure, dependency-free HTML, CSS, and JavaScript with hash-based routing (`#/...`), no build step is required.

### Option 1: Open Directly in Any Browser
Double-click `index.html` (or open `c:\Users\yaraa\Downloads\WLR-Children-Books-Redesign\index.html` in Chrome, Edge, Firefox, or Safari).

### Option 2: Run with a Local HTTP Server (Recommended)
From `c:\Users\yaraa\Downloads\WLR-Children-Books-Redesign`:

**Using Python:**
```powershell
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

**Using Node.js (`npx`):**
```powershell
npx serve -l 8080 .
```
Then open `http://localhost:8080` in your browser.
