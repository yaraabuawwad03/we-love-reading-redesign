/**
 * We Love Reading — Children's Books Redesign Prototype
 * Authentic Dataset Extracted from https://welovereading.org/ & https://welovereading.org/ar/
 * No invented books, covers, age groups, links, or publication records.
 */

window.WLR_DATA = {
  siteLinks: {
    homeEn: "https://welovereading.org/",
    homeAr: "https://welovereading.org/ar/",
    ourBooksEn: "https://welovereading.org/our-books/",
    ourBooksAr: "https://welovereading.org/ar/our-books/",
    buyBooksEn: "https://welovereading.org/buy-our-books/",
    buyBooksAr: "https://welovereading.org/ar/copy-of-buy-our-books/",
    logoUrl: "https://welovereading.org/wp-content/uploads/2020/05/wlr-logo.png"
  },

  pastelSequence: ["yellow", "mint", "pink", "blue", "peach"],

  sdgCatalog: {
    3: {
      num: 3,
      color: "#4C9F38",
      en: "Good Health and Well-Being",
      ar: "الصحة الجيدة والرفاه"
    },
    5: {
      num: 5,
      color: "#FF3A21",
      en: "Gender Equality",
      ar: "المساواة بين الجنسين"
    },
    6: {
      num: 6,
      color: "#26BDE2",
      en: "Clean Water and Sanitation",
      ar: "المياه النظيفة والنظافة الصحية"
    },
    7: {
      num: 7,
      color: "#FCC30B",
      en: "Affordable and Clean Energy",
      ar: "طاقة نظيفة وبأسعار معقولة"
    },
    10: {
      num: 10,
      color: "#DD1367",
      en: "Reduced Inequalities",
      ar: "الحد من أوجه عدم المساواة"
    },
    11: {
      num: 11,
      color: "#FD9D24",
      en: "Sustainable Cities and Communities",
      ar: "مدن ومجتمعات محلية مستدامة"
    },
    12: {
      num: 12,
      color: "#BF8B2E",
      en: "Responsible Consumption and Production",
      ar: "الاستهلاك والإنتاج المسؤولان"
    },
    13: {
      num: 13,
      color: "#3F7E44",
      en: "Climate Action",
      ar: "العمل المناخي"
    },
    15: {
      num: 15,
      color: "#56C02B",
      en: "Life on Land",
      ar: "الحياة في البر"
    },
    16: {
      num: 16,
      color: "#00689D",
      en: "Peace, Justice and Strong Institutions",
      ar: "السلام والعدل والمؤسسات القوية"
    }
  },

  ui: {
    en: {
      brandTop: "We Love Reading",
      brandSub: "Children’s Books Collection",
      visitMainSite: "Main WLR Site",
      langToggleLabel: "العربية",
      langToggleAria: "Switch language to Arabic (RTL)",
      nav: {
        wlrBooks: "WLR Children Books",
        ourBooks: "Our Books",
        catalogue: "Story Books Catalogue",
        magazine: "WLR Children Books Magazine",
        latestBook: "Our Latest Book",
        latestOverview: "Featured Latest Releases",
        queenOfBalloons: "Queen of Balloons",
        pepperedMoth: "The Peppered Moth",
        shellsOfFreedom: "Shells of Freedom",
        resources: "Resources for Digital Children’s Books",
        resourcesShort: "Digital Resources",
        resWebsite: "Website containing children’s books",
        resArchive: "Archive of 6,000 historical children’s books",
        resAudible: "Audible Stories",
        researchStudies: "Research & Studies",
        corona: "Children Books About the Coronavirus",
        coronaShort: "Coronavirus Books",
        coronaWho: "WHO children’s book about corona",
        coronaPangea: "Children’s book from Pangea Education about corona"
      },
      gallery: {
        eyebrow: "We Love Reading · Original Storybooks",
        title: "Our Books",
        subtitle: "Original picture books created to nurture a lifelong love of reading for pleasure, empathy, curiosity, and positive action among children.",
        filterLabel: "Filter by Age",
        allAges: "All Ages",
        booksCount: (n) => `${n} ${n === 1 ? "Book" : "Books"}`,
        ageHeadingPrefix: "Age Category:",
        ageNoteEnDiscrepancy: "Showing the complete We Love Reading collection across all three original age categories (4–6, 5–8, and 7–10 years).",
        originalPageLink: "View original WLR Our Books page"
      },
      storyJourney: {
        eyebrow: "OUR BOOKS",
        title: "Story Journey",
        subtitle: "Explore our children's stories along a reading journey, and discover books that spark curiosity, empathy, and a love of reading.",
        exploreBtn: "Explore the Book",
        prevAria: "Previous books",
        nextAria: "Next books",
        timelineAria: "Story Journey interactive book timeline"
      },
      bookDetail: {
        backToBooks: "Back to Our Books",
        author: "Author",
        storyBy: "Story",
        englishWriter: "Writer",
        illustrator: "Illustrator",
        editor: "Adaptation / Editing",
        ageCategory: "Age Category",
        yearsSuffix: "Years",
        theme: "Theme",
        buy: "BUY",
        watch: "WATCH",
        reviews: "REVIEWS",
        originalPage: "Original WLR Page",
        storyBackground: "Story Background",
        priceNote: "WLR Store Price:",
        relatedHeading: "More in Age Category",
        relatedSub: "Explore other We Love Reading storybooks for this age group."
      },
      catalogue: {
        eyebrow: "Official Publication Index",
        title: "Story Books Catalogue",
        subtitle: "Explore the official We Love Reading illustrated storybook catalogue featuring original children’s books, themes, age milestones, and synopses.",
        latestEditionBadge: "Latest Official Edition · 2026",
        latestEditionTitle: "We Love Reading Story Books Catalogue (2026)",
        latestEditionDesc: "The complete illustrated guide to We Love Reading’s original children’s books, themes, age milestones, and synopses.",
        viewPdf: "Explore Catalogue",
        switchLangPdf: "Arabic Catalogue (2026)"
      },
      magazine: {
        eyebrow: "Summer 2024 Edition",
        title: "We Love Reading Children Books",
        tagline: "Explore what lies beyond the pages",
        subtitle: "Discover the original Summer 2024 interactive magazine from We Love Reading — explore all 35 featured storybooks with their creative credits, Sustainable Development Goals, and original links, or read the complete 19-page illustrated issue.",
        readMagazine: "Read Full Magazine (PDF)",
        browseGalleryBtn: "Explore Interactive Gallery",
        metaEditionLabel: "Edition",
        metaEditionVal: "Summer 2024",
        metaBooksLabel: "Interactive Gallery",
        metaBooksVal: "35 Verified Storybooks",
        metaFormatLabel: "Original Issue",
        metaFormatVal: "19 Illustrated Pages",
        galleryEyebrow: "Interactive Book Collection · Pages 5–6",
        galleryHeading: "Explore the Magazine’s Storybooks",
        gallerySub: "Click any book cover below to open its full synopsis, author and illustrator credits, Sustainable Development Goals (SDGs), magazine review, and original Buy, Watch, and Reviews links.",
        filterAll: "All Books",
        filterReviews: "Featured Reviews",
        featuredReviewTag: "Magazine Review",
        backToGallery: "Back to Magazine Gallery",
        prevBook: "Previous Book",
        nextBook: "Next Book",
        bookPosition: (curr, total) => `Book ${curr} of ${total}`,
        drawingsLabel: "Drawings",
        sdgHeading: "Sustainable Development Goals (SDGs)",
        magReviewHeading: "Featured in Summer 2024 Magazine",
        openSpreadInPdf: "Read Full Review Spread in PDF",
        insideHeading: "Original Editorial Chapters & Research",
        insideSub: "Articles, ambassador reflections, and scientific studies preserved inside the Summer 2024 magazine (click any chapter to open that spread in the PDF reader):",
        studiesHeading: "Research Studies Linked in the Magazine (Page 10)",
        openStudyPdf: "Open Research PDF",
        readerPrev: "Previous page",
        readerNext: "Next page",
        readerPageOf: "of",
        readerZoomOut: "Zoom out",
        readerZoomIn: "Zoom in",
        readerZoomReset: "Reset zoom",
        readerDownload: "Download",
        readerClose: "Close",
        readerLoading: "Loading Summer 2024 Magazine…"
      },
      latest: {
        eyebrow: "Featured Releases",
        title: "Our Latest Book",
        subtitle: "Three landmark storybooks from We Love Reading — complete with original cover art, verbatim synopses, Sustainable Development Goals (SDGs), creator interviews, launch features, and story inspirations.",
        readDetails: "Explore Complete Book Page",
        originalRelease: "Original WLR Page",
        spotlightLabel: "Featured Release",
        backToLatest: "Back to Our Latest Book",
        prevBook: "Previous Book",
        nextBook: "Next Book",
        bookPosition: (curr, total) => `Book ${curr} of ${total}`,
        sdgHeading: "Sustainable Development Goals (SDGs)",
        wrapSpreadHeading: "Original Full Cover Artwork",
        moreReleasesHeading: "Explore the Other Featured Releases",
        moreReleasesSub: "Continue browsing our featured releases directly inside the website."
      },
      research: {
        backToResearch: "Back to Research & Studies",
        resetFilters: "Clear Filters",
        closeDropdown: "Close dropdown",
        removeFilterAria: "Remove filter",
        noFilterResults: "No publications match the selected filters.",
        slideCounter: "Field Photograph",
        exploreOtherCategories: "Explore Other Research Sections"
      },
      resources: {
        eyebrow: "Curated External Portals",
        title: "Resources for Digital Children’s Books",
        subtitle: "Trusted free digital libraries, book review directories, historical archives, and audio storytelling platforms recommended by We Love Reading.",
        visitResource: "Open Original Resource",
        externalDomain: "External Resource"
      },
      corona: {
        eyebrow: "Special Health & Wellbeing Collection",
        title: "Children Books About the Coronavirus",
        subtitle: "Curated illustrated storybooks helping children and families understand COVID-19, manage emotions, and care for their communities.",
        openPdf: "Read Storybook (PDF)",
        visitBookPage: "Open Original Resource",
        placeholderBadge: "External Resource · No Cover Image Hosted on WLR"
      },
      audit: {
        title: "Source Assets & Content Audit",
        subtitle: "Transparent report of missing assets, direct-PDF routes, and structural discrepancies identified on welovereading.org during prototype creation."
      },
      footer: {
        prototypeNotice: "Redesign Prototype — Children’s Books Section for We Love Reading",
        auditLink: "Missing Assets & Site Audit",
        originalCollection: "Original Our Books Page",
        mainWebsite: "welovereading.org",
        latestNewsHeading: "Latest News",
        usefulLinksHeading: "Useful Links",
        copyright: "Copyrights © We Love Reading TM 2026. All rights reserved.",
        socialNavAria: "Official We Love Reading social media links",
        backToTopLabel: "Back to top"
      },
      modal: {
        close: "Close Reader",
        openNewTab: "Open Original File in New Tab"
      }
    },

    ar: {
      brandTop: "نحن نحب القراءة",
      brandSub: "مجموعة قصص الأطفال",
      visitMainSite: "الموقع الرئيسي",
      langToggleLabel: "English",
      langToggleAria: "التبديل إلى اللغة الإنجليزية (LTR)",
      nav: {
        wlrBooks: "قصص الأطفال من نحن نحب القراءة",
        ourBooks: "قصصنا",
        catalogue: "كتالوج القصص",
        magazine: "مجلة كتب أطفال نحن نحب القراءة",
        latestBook: "آخر قصصنا",
        latestOverview: "إصداراتنا المميزة الأخيرة",
        queenOfBalloons: "ملكة البالونات",
        pepperedMoth: "العُثة المتبلة",
        shellsOfFreedom: "صدفات الحرية",
        resources: "مصادر لكتب الأطفال الرقمية",
        resourcesShort: "المصادر الرقمية",
        resWebsite: "موقع يحتوي على العديد من قصص الأطفال",
        resArchive: "أرشيف يضم 6,000 كتاب تاريخي للأطفال",
        resAudible: "كتب مسموعة مجانية للأطفال (Audible)",
        researchStudies: "الأبحاث والدراسات",
        corona: "قصص للأطفال عن فيروس كورونا",
        coronaShort: "قصص عن كورونا",
        coronaWho: "قصة منظمة الصحة العالمية عن كورونا",
        coronaPangea: "قصة للأطفال عن كورونا من Pangea Education"
      },
      gallery: {
        eyebrow: "نحن نحب القراءة · إصداراتنا القصصية",
        title: "قصصنا",
        subtitle: "قصص مصورة أصيلة صُمّمت لغرس حب القراءة من أجل المتعة، وتعزيز التعاطف والفضول العلمي والمبادرة الإيجابية لدى الأطفال.",
        filterLabel: "تصفية حسب الفئة العمرية",
        allAges: "جميع الأعمار",
        booksCount: (n) => `${n} ${n === 1 ? "قصة" : "قصص"}`,
        ageHeadingPrefix: "للفئة العمرية:",
        ageNoteEnDiscrepancy: "تضم المجموعة كافة قصص «نحن نحب القراءة» المصنفة ضمن الفئات العمرية الأصيلة (4–6، 5–8، و7–10 سنوات).",
        originalPageLink: "عرض الصفحة الأصلية على موقع نحن نحب القراءة"
      },
      storyJourney: {
        eyebrow: "قصصنا",
        title: "رحلة القصص",
        subtitle: "قصص مصورة أصيلة صُمّمت لغرس حب القراءة من أجل المتعة، وتعزيز التعاطف والفضول العلمي والمبادرة الإيجابية لدى الأطفال.",
        exploreBtn: "تفاصيل القصة",
        prevAria: "القصص السابقة",
        nextAria: "القصص التالية",
        timelineAria: "رحلة القصص التفاعلية"
      },
      bookDetail: {
        backToBooks: "العودة إلى قصصنا",
        author: "تأليف",
        storyBy: "قصة",
        englishWriter: "إعداد النص الإنجليزي",
        illustrator: "رسوم",
        editor: "إعداد وتحرير",
        ageCategory: "الفئة العمرية",
        yearsSuffix: "سنوات",
        theme: "الموضوع",
        buy: "شراء",
        watch: "مشاهدة",
        reviews: "تقييمات",
        originalPage: "الصفحة الأصلية للقصة",
        storyBackground: "خلفية القصة وأبطالها",
        priceNote: "السعر في متجر الموقع:",
        relatedHeading: "قصص أخرى من نفس الفئة العمرية",
        relatedSub: "استكشف المزيد من قصص «نحن نحب القراءة» المخصصة لهذه المرحلة العمرية."
      },
      catalogue: {
        eyebrow: "الدليل الرقمي لإصداراتنا",
        title: "كتالوج قصص الأطفال",
        subtitle: "استكشف الدليل المصوّر الرسمي لقصص الأطفال الصادرة عن «نحن نحب القراءة» مع موضوعاتها وفئاتها العمرية وملخصاتها.",
        latestEditionBadge: "أحدث إصدار رسمي · 2026",
        latestEditionTitle: "كتالوج قصص نحن نحب القراءة (2026)",
        latestEditionDesc: "الدليل الشامل لكافة قصص الأطفال المصورة الصادرة عن برنامج «نحن نحب القراءة» مع ملخصاتها وموضوعاتها وفئاتها العمرية.",
        viewPdf: "استكشاف الكتالوج",
        switchLangPdf: "الكتالوج باللغة الإنجليزية (2026)"
      },
      magazine: {
        eyebrow: "إصدار صيف ٢٠٢٤",
        title: "كتب نحن نحب القراءة",
        tagline: "اكتشف ما وراء الصفحات",
        subtitle: "استكشف إصدار صيف ٢٠٢٤ التفاعلي الأصلي من مجلة كتب أطفال «نحن نحب القراءة» — تصفّح القصص الـ٣٥ المميزة مع بيانات المؤلفين والرسامين وأهداف التنمية المستدامة والروابط الأصلية، أو اقرأ العدد المصوّر الكامل (١٩ صفحة).",
        readMagazine: "قراءة المجلة الكاملة (PDF)",
        browseGalleryBtn: "تصفّح معرض القصص التفاعلي",
        metaEditionLabel: "الإصدار",
        metaEditionVal: "صيف ٢٠٢٤",
        metaBooksLabel: "المعرض التفاعلي",
        metaBooksVal: "٣٥ قصة مصوّرة أصيلة",
        metaFormatLabel: "العدد الأصلي",
        metaFormatVal: "١٩ صفحة مصوّرة",
        galleryEyebrow: "مجموعة قصص المجلة التفاعلية · ص ٥–٦",
        galleryHeading: "استكشف قصص المجلة المصوّرة",
        gallerySub: "اضغط على غلاف أي قصة لعرض ملخصها الكامل، وأسماء المؤلفين والرسامين، وأهداف التنمية المستدامة، ومراجعتها في المجلة، وروابط الشراء والمشاهدة والتقييمات.",
        filterAll: "جميع القصص",
        filterReviews: "مراجعات مختارة",
        featuredReviewTag: "مراجعة في المجلة",
        backToGallery: "العودة إلى معرض المجلة",
        prevBook: "القصة السابقة",
        nextBook: "القصة التالية",
        bookPosition: (curr, total) => `القصة ${curr} من ${total}`,
        drawingsLabel: "رسوم",
        sdgHeading: "أهداف التنمية المستدامة (SDGs)",
        magReviewHeading: "مراجعة القصة في مجلة صيف ٢٠٢٤",
        openSpreadInPdf: "فتح صفحة المراجعة في المجلة (PDF)",
        insideHeading: "أبواب المجلة الأصلية والدراسات العلمية",
        insideSub: "المقالات وتجارب السفراء والأبحاث المحفوظة في مجلة صيف ٢٠٢٤ (اضغط على أي باب لفتحه مباشرة في عارض المجلة):",
        studiesHeading: "الدراسات البحثية المرتبطة في المجلة (صفحة ١٠)",
        openStudyPdf: "فتح الدراسة (PDF)",
        readerPrev: "الصفحة السابقة",
        readerNext: "الصفحة التالية",
        readerPageOf: "من",
        readerZoomOut: "تصغير",
        readerZoomIn: "تكبير",
        readerZoomReset: "إعادة ضبط التكبير",
        readerDownload: "تحميل",
        readerClose: "إغلاق",
        readerLoading: "جاري تحميل مجلة صيف ٢٠٢٤…"
      },
      latest: {
        eyebrow: "أحدث الإصدارات المميزة",
        title: "آخر قصصنا",
        subtitle: "ثلاث قصص مميزة من أحدث إصدارات «نحن نحب القراءة» — مع الأغلفة والرسومات الأصلية الكاملة، والملخصات الأصيلة، وأهداف التنمية المستدامة، ولقاءات المؤلفين وتغطيات الإطلاق وإلهام كل قصة.",
        readDetails: "استكشف صفحة القصة الكاملة",
        originalRelease: "الصفحة الأصلية على الموقع",
        spotlightLabel: "إصدار مميز",
        backToLatest: "العودة إلى آخر قصصنا",
        prevBook: "القصة السابقة",
        nextBook: "القصة التالية",
        bookPosition: (curr, total) => `القصة ${curr} من ${total}`,
        sdgHeading: "أهداف التنمية المستدامة (SDGs)",
        wrapSpreadHeading: "لوحة الغلاف الكامل الأصلي",
        moreReleasesHeading: "استكشف بقية الإصدارات المميزة",
        moreReleasesSub: "واصل تصفّح أحدث قصصنا وتفاصيلها الكاملة مباشرة داخل الموقع."
      },
      research: {
        backToResearch: "العودة إلى الأبحاث والدراسات",
        resetFilters: "مسح التصفية",
        closeDropdown: "إغلاق القائمة",
        removeFilterAria: "إزالة التصفية",
        noFilterResults: "لا توجد نتائج",
        slideCounter: "صورة ميدانية",
        exploreOtherCategories: "استكشف أقسام الأبحاث الأخرى"
      },
      resources: {
        eyebrow: "مكتبات ومنصات رقمية مختارة",
        title: "مصادر لكتب الأطفال الرقمية",
        subtitle: "مجموعة منتقاة من المنصات الرقمية ومراجعات الكتب والأرشيفات التاريخية والقصص المسموعة المجانية الموصى بها من «نحن نحب القراءة».",
        visitResource: "زيارة المصدر الأصلي",
        externalDomain: "رابط خارجي"
      },
      corona: {
        eyebrow: "مجموعة التوعية الصحية والنفسية",
        title: "قصص للأطفال عن فيروس كورونا",
        subtitle: "قصص مصورة توعوية لمساعدة الأطفال والعائلات على فهم جائحة كورونا والتعامل مع المشاعر بروح الأمل والتعاون.",
        openPdf: "قراءة القصة (PDF)",
        visitBookPage: "فتح المصدر الأصلي",
        placeholderBadge: "مصدر خارجي · لا توجد صورة غلاف مرفوعة على خادم الموقع"
      },
      audit: {
        title: "تقرير فحص الأصول والمحتوى الأصلي",
        subtitle: "توثيق شامل للملفات المفقودة أو الروابط المباشرة والملاحظات البنيوية التي رُصدت في الموقع الأصلي welovereading.org."
      },
      footer: {
        prototypeNotice: "نموذج إعادة التصميم — قسم قصص الأطفال لمبادرة نحن نحب القراءة",
        auditLink: "تقرير الأصول والمحتوى المفقود",
        originalCollection: "صفحة قصصنا الأصلية",
        mainWebsite: "welovereading.org",
        latestNewsHeading: "آخر الأخبار",
        usefulLinksHeading: "روابط مفيدة",
        copyright: "حقوق الطبع والنشر © نحن نحب القراءة 2026. جميع الحقوق محفوظة.",
        socialNavAria: "الحسابات الرسمية لمبادرة نحن نحب القراءة على مواقع التواصل الاجتماعي",
        backToTopLabel: "العودة إلى الأعلى"
      },
      modal: {
        close: "إغلاق العارض",
        openNewTab: "فتح الملف الأصلي في نافذة جديدة"
      }
    }
  },

  ageCategories: [
    {
      id: "4-6",
      enHeading: "Age Category: 4-6 Years",
      arHeading: "للفئة العمرية: 4-6",
      enShort: "4–6 Years",
      arShort: "4–6 سنوات",
      enDesc: "Early childhood picture books sparking curiosity, kindness, environmental care, and imagination.",
      arDesc: "قصص مصورة للطفولة المبكرة تنمّي الخيال واللطف والوعي البيئي وتقبّل الآخر."
    },
    {
      id: "5-8",
      enHeading: "Age Category: 5-8 Years",
      arHeading: "للفئة العمرية: 5-8",
      enShort: "5–8 Years",
      arShort: "5–8 سنوات",
      enDesc: "Transitional stories exploring empathy, friendship, and navigating life changes.",
      arDesc: "قصص تعزّز مشاعر التعاطف والصداقة والتكيّف الإيجابي مع المتغيرات."
    },
    {
      id: "7-10",
      enHeading: "Age Category: 7-10 Years",
      arHeading: "للفئة العمرية: 7-10",
      enShort: "7–10 Years",
      arShort: "7–10 سنوات",
      enDesc: "Richer narratives inspiring scientific inquiry, climate action, social inclusion, resilience, and non-violence.",
      arDesc: "حكايات أعمق تلهم البحث العلمي والعمل المناخي والاندماج الاجتماعي ونبذ العنف والأمل."
    }
  ],

  books: [
    // ================= AGE CATEGORY: 4-6 YEARS (15 BOOKS) =================
    {
      slug: "questions-in-a-traveling-bag",
      age: "4-6",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/asela-fe-haqeebat-safar-1.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/asela-fe-haqeebat-safar-1.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/questions-in-a-traveling-bag/",
      urlAr: "https://welovereading.org/ar/our-books/questions-in-a-traveling-bag/",
      en: {
        title: "Questions in a Traveling Bag",
        author: "Maya Abou Al Hayat",
        illustrator: "Ishraq Othmane",
        theme: "Refugees",
        description: "What can a kid carry of questions in a traveling bag? And is the taste of Kousa mahshi in the new house different than the taste in the old house? Maybe we could find an answer to the question, or maybe we could find thirteen. But first, let’s gather some questions in the traveling bag."
      },
      ar: {
        title: "أسئلة في حقيبة سفر",
        author: "مايا أبو الحيّات",
        illustrator: "إشراق عثمان",
        theme: "اللاجئين",
        description: "ماذا يمكن طفلًا أن يحمل من أسئلة في حقيبة سفر؟ وهل طعم «الكوسا المحشي» في البيت الجديد يختلف عن طعمه في البيت القديم؟ ربّما نجد جوابًا للسّؤال، وربّما نجد ثلاثة عشر. لكن أوّلًا لنجمع بعض الأسئلة في حقيبة السّفر."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37595962?___from_store=ar",
        reviews: "https://alnqsh.com/books/883/%D8%A3%D8%B3%D8%A6%D9%84%D8%A9-%D9%81%D9%8A-%D8%AD%D9%82%D9%8A%D8%A8%D8%A9-%D8%B3%D9%81%D8%B1"
      }
    },
    {
      slug: "eid-gift",
      age: "4-6",
      sdgs: [13, 12],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/hadiatu-al-eid.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/hadiatu-al-eid.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/eid-gift/",
      urlAr: "https://welovereading.org/ar/our-books/eid-gift/",
      en: {
        title: "Eid Gift",
        author: "Fedaa Azoumr",
        illustrator: "Rawan Sadr",
        theme: "Anti-Littering",
        description: "Eid is here, each and every kid got a gift. What did the kids give to Uncle Nadeef? Did they give him nice gifts? Or they gave him…? That’s what you’ll know when you read this story."
      },
      ar: {
        title: "هديّة العيد",
        author: "فداء الزمر",
        illustrator: "روان صدر",
        theme: "نظافة البيئة",
        description: "جاء العيد، حصل كلّ طفل على هدّية. ماذا أهدى الأطفال العمّ نظيفًا؟ هل أهدوه هدايا جميلة؟ أم أهدوه …؟! هذا ما ستعرفه عند قراءتك لهذه القصّة."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37518277?___from_store=en",
        buyAr: "https://jamalon.com/ar/catalog/product/view/id/37518277",
        watch: "https://youtu.be/Y-7ZenJjFrM",
        reviews: "https://alnqsh.com/books/879/eid-gift",
        reviewsAr: "https://alnqsh.com/books/879/%D9%87%D8%AF%D9%8A%D9%91%D8%A9-%D8%A7%D9%84%D8%B9%D9%8A%D8%AF"
      }
    },
    {
      slug: "salmas-riddle",
      age: "4-6",
      sdgs: [6],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/hazzourat-salma.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/hazzourat-salma.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/product/salmas-riddle/",
      urlAr: "https://welovereading.org/ar/our-books/salmas-riddle/",
      en: {
        title: "Salma’s Riddle",
        author: "Imane Zaheer AlTarawna",
        illustrator: "Ishraq Othman Algay",
        theme: "Water & Environment",
        description: "Salma loves drawing so much. But how can she use drawing to change her family’s bad water-using habits? Let’s read the story together to find out."
      },
      ar: {
        title: "حزّورة سلمى",
        author: "إيمان زهير الطراونة",
        illustrator: "إشراق عثمان غلغاي",
        theme: "المياه",
        description: "سلمى تهوى الرّسم كثيرًا؛ ولكن كيف ستستخدم الرّسم في تغيير عادات عائلتها الخاطئة في استخدام الماء؟ هيّا نقرأ هذه القصّة سويًّا لنعرف!"
      },
      actions: {
        buy: "https://welovereading.org/product/salmas-riddle/",
        price: "5.00 JOD",
        watch: "https://youtu.be/By8SE3wSMiU",
        reviews: "https://alnqsh.com/books/880/%D8%AD%D8%B2%D9%91%D9%88%D8%B1%D8%A9-%D8%B3%D9%84%D9%85%D9%89"
      }
    },
    {
      slug: "why-did-electricity-run-away",
      age: "4-6",
      sdgs: [12],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/lematha-harabat-alkahraba.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/lematha-harabat-alkahraba.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/716497-2/",
      urlAr: "https://welovereading.org/ar/our-books/716497-2/",
      en: {
        title: "Why did Electricity Run Away?",
        author: "Nerdeen Abou Nabaa",
        illustrator: "Ishraq Ghulghai",
        theme: "Energy",
        description: "Electricity got tired and it decided to cut off from Zaid and his siblings’ house… Why did electricity get tired? Is it coming back? Read this story to know the answer."
      },
      ar: {
        title: "لماذا هربت الكهرباء؟",
        author: "نردين أبو نبعة",
        illustrator: "إشراق غلغاي",
        theme: "الطاقة",
        description: "تعبت الكهرباء وقرّرت الانقطاع عن بيت زيد وإخوته … يا ترى لماذا تعبت الكهرباء؟ وهل سترجع؟ اقرأ هذه القصّة لتعرف الإجابة …"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37518279?___from_store=ar",
        reviews: "https://alnqsh.com/books/903/%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D9%87%D8%B1%D8%A8%D8%AA-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1%D8%9F"
      }
    },
    {
      slug: "a-sun-without-bills",
      age: "4-6",
      sdgs: [7, 12],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/shams-bela-fawateer.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/shams-bela-fawateer.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/product/a-sun-without-bills/",
      urlAr: "https://welovereading.org/ar/our-books/a-sun-without-bills/",
      en: {
        title: "A Sun Without Bills",
        author: "Mahmoud Abu Farwa Alrajabi",
        illustrator: "Rawan Mohamed Sadr",
        theme: "Energy & Environment",
        description: "There is a problem inside of Firas’ house that is solved only when he opened the airport and started receiving fantastic ideas. Read the story to find out what happened to our friend Firas."
      },
      ar: {
        title: "شمس بلا فواتير!",
        author: "محمود أبوفروة الرّجبي",
        illustrator: "روان محمد صدر",
        theme: "الطاقة",
        description: "مشكلة داخل منزل فراس. الأمّ تقول: إنّ فراسًا صغير، ولكنّه حينما فتح المطار، وبدأ باستقبال الأفكار المدهشة، حُلّت المشكلة! اقرأوا القصّة لتعرفوا ما حصل مع صديقنا فراس."
      },
      actions: {
        buy: "https://welovereading.org/product/a-sun-without-bills/",
        price: "5.00 JOD",
        reviews: "https://alnqsh.com/books/881/%D8%B4%D9%85%D8%B3-%D8%A8%D9%84%D8%A7-%D9%81%D9%88%D8%A7%D8%AA%D9%8A%D8%B1!"
      }
    },
    {
      slug: "the-amazing-water-hero",
      age: "4-6",
      sdgs: [6],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/batal-almaa.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/batal-almaa.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/product/the-amazing-water-hero/",
      urlAr: "https://welovereading.org/ar/our-books/the-amazing-water-hero/",
      en: {
        title: "The Amazing Water Hero",
        author: "Mahmoud Abu Farwa Alrajabi",
        illustrator: "Wafaa Adnane Salama",
        theme: "Water & Environment",
        description: "Why did Kareem deserve the name of the Amazing Water Hero? What did he do to become a real hero that is applauded for all of his amazing work? Read this story with us to find out what Kareem did."
      },
      ar: {
        title: "بطل الماء المدهش!",
        author: "محمود أبوفروة الرّجبي",
        illustrator: "وفاء عدنان سلامة",
        theme: "المياه",
        description: "لماذا استحقّ كريم لقب بطل الماء المدهش؟ وما هي التّصرّفات الّتي قام بها وجعلته بطلًا حقيقيًا يصفّق له الجميع على أعماله الرّائعة؟ اقرأوا معنا القصّة لتعرفوا ذلك."
      },
      actions: {
        buy: "https://welovereading.org/product/the-amazing-water-hero/",
        price: "5.00 JOD",
        watch: "https://youtu.be/cVg1RXWhI6o",
        reviews: "https://alnqsh.com/books/882/%D8%A8%D8%B7%D9%84-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D8%AF%D9%87%D8%B4!"
      }
    },
    {
      slug: "um-hatta-the-cat",
      age: "4-6",
      sdgs: [16, 10],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/alqettah-1.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/alqettah-1.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/um-hatta-the-cat/",
      urlAr: "https://welovereading.org/ar/our-books/the-cat-hattas-mother/",
      en: {
        title: "“Um Hattah” the Cat",
        author: "Bassam Al Tajy",
        illustrator: "Walid Kateena",
        theme: "Non-Violence",
        description: "A little boy named Ali loves niggling and he gets angry very quickly… he plays alone. He breaks the wood boards. What’s Ali’s story with the cat that is standing on the tree… “Hatta’s mother”?"
      },
      ar: {
        title: "القطّة أم «حطّة»",
        author: "بسّام التّاجي",
        illustrator: "وليد قطّينة",
        theme: "نبذ العنف",
        description: "ولد صغير اسمه عليّ … عليّ يحبّ الشّغب، وهو سريع الغضب … يلعب وحده، ويحطّم ألواح الخشب. ما قصّة عليّ مع القطّة أمّ «حطّة»، الّتي تقف فوق الشّجرة؟"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547879?___from_store=en",
        reviews: "https://alnqsh.com/books/900/%D8%A7%D9%84%D9%82%D8%B7%D8%A9-%D8%A3%D9%85-%D8%AD%D8%B7%D8%A9"
      }
    },
    {
      slug: "the-words-cook",
      age: "4-6",
      sdgs: [16, 10],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/taba5at-al-kalemat-1.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/taba5at-al-kalemat-1.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/the-words-cook/",
      urlAr: "https://welovereading.org/ar/our-books/the-words-cook/",
      en: {
        title: "The Word’s Cook",
        author: "Maya Abou Al Hayyat",
        illustrator: "Noor Dawood",
        theme: "Non-Violence",
        description: "Mayyada is alone in the kindergarten, she has no friends, but can a delicious cake change it all? Let’s all discover Mayyada’s story."
      },
      ar: {
        title: "طبّاخة الكلمات",
        author: "مايا أبو الحيّات",
        illustrator: "نور داود",
        theme: "نبذ العنف",
        description: "ميّادة وحيدة في الرّوضة، فلا أصدقاء لها، لكن هل يمكن لكعكة لذيذة أن تغيّر الحال؟ لنتعرّف معًا قصّة ميّادة."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547878?___from_store=ar",
        reviews: "https://alnqsh.com/books/607/%D8%B7%D8%A8%D8%A7%D8%AE%D8%A9-%D8%A7%D9%84%D9%83%D9%84%D9%85%D8%A7%D8%AA"
      }
    },
    {
      slug: "chaos-in-the-kitchen",
      age: "4-6",
      sdgs: [5],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/11/fawda.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/11/fawda.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/an-earthquake-in-the-kitchen/",
      urlAr: "https://welovereading.org/ar/our-books/an-earthquake-in-the-kitchen/",
      en: {
        title: "Chaos in the Kitchen",
        author: "Bassam Al Tajy",
        illustrator: "Alaa Youssef",
        theme: "Gender",
        description: "My grandmother came from a trip, so mom, my brother, and I went to receive her. But my dad decided to stay home to cook us delicious food. Everything was great, except for the kitchen — it got…"
      },
      ar: {
        title: "فوضى في المطبخ",
        author: "بسّام التّاجي",
        illustrator: "علا يوسف",
        theme: "النوع الإجتماعي",
        description: "جاءت جدّتي من السّفر، فذهبت لاستقبالها مع أمّي وأخي. أمّا أبي، فقرّر أن يبقى في المنزل ليطهو لنا الطّعام الشّهيّ. كان كلّ شيء بأفضل حال، إلّا المطبخ، فقد أصابه …"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547868?___from_store=ar",
        reviews: "https://alnqsh.com/books/891/%D8%B2%D9%84%D8%B2%D8%A7%D9%84-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%B7%D8%A8%D8%AE"
      }
    },
    {
      slug: "my-brother-hany",
      age: "4-6",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/akhi-hani-1.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/akhi-hani-1.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/my-brother-hany/",
      urlAr: "https://welovereading.org/ar/our-books/my-brother-hany/",
      en: {
        title: "My Brother Hany",
        author: "Oroub Sobh",
        illustrator: "Haya Halaw",
        theme: "Disabilities",
        description: "Between us two… endless love and friendship… starting from before we were born… because we’re twins… I am Dina and he is Hany… and this is our story."
      },
      ar: {
        title: "أخي هاني",
        author: "عروب صبح",
        illustrator: "هيا حلاو",
        theme: "الاحتياجات الخاصة",
        description: "نحن الاثنان … بيننا صداقة وحبّ لا ينتهيان … بدآ قبل أن نولد … فنحن توأمان… أنا دينا، وهو هاني … وهذه قصّتنا."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547872?___from_store=ar",
        reviews: "https://alnqsh.com/books/902/%D8%A3%D8%AE%D9%8A-%D9%87%D8%A7%D9%86%D9%8A"
      }
    },
    {
      slug: "bashour",
      age: "4-6",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/bashoor-1.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/bashoor-1.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/bashour/",
      urlAr: "https://welovereading.org/ar/our-books/bashour/",
      en: {
        title: "Bashour",
        author: "Maya Abou Al Hayyat",
        illustrator: "Amany Youssef",
        theme: "Social Inclusion",
        description: "Bashoor with the five eyes can’t sleep — but is it really a problem? We can read the story and know that!"
      },
      ar: {
        title: "بشّور",
        author: "مايا أبو الحيّات",
        illustrator: "أماني يوسف",
        theme: "الإندماج الإجتماعي",
        description: "بشّور ذو العيون الخمس، لا يستطيع أن ينام، لكن هل هذه مشكلة؟ يمكننا أن نقرأ القصّة، ونعرف ذلك."
      },
      actions: {
        watch: "https://youtu.be/agxC2yHbeSE",
        reviews: "https://alnqsh.com/books/606/%D8%A8%D8%B4%D9%88%D8%B1"
      }
    },
    {
      slug: "were-the-same",
      age: "4-6",
      sdgs: [11, 10],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/natashabah-2.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/natashabah-2.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/were-the-same/",
      urlAr: "https://welovereading.org/ar/our-books/were-the-same/",
      en: {
        title: "We’re the Same",
        author: "Mariam Kamal Abedi, Saja Naeef Abu-Omar",
        illustrator: "Sajeeda Jalad",
        theme: "Social Inclusion",
        description: "We are friends… each one of us lives in a different place… but in spite of all differences we’re still alike."
      },
      ar: {
        title: "نتشابه نتشابه",
        author: "مريم كمال عابدي",
        illustrator: "ساجدة جلاد",
        theme: "الإندماج الإجتماعي",
        description: "نحن صديقتان … تسكن كلّ منّا في مكان … ولكن على الرّغم من كلّ الاختلافات، إلّا أنّنا متشابهتان."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547880?___from_store=ar",
        reviews: "https://alnqsh.com/books/901/%D9%86%D8%AA%D8%B4%D8%A7%D8%A8%D9%87-%D9%86%D8%AA%D8%B4%D8%A7%D8%A8%D9%87"
      }
    },
    {
      slug: "a-strange-story-in-the-fantastic-trolley",
      age: "4-6",
      sdgs: [5, 10],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/qessa-ghareeba-1.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/qessa-ghareeba-1.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/a-strange-story-in-the-fantastic-trolley/",
      urlAr: "https://welovereading.org/ar/our-books/a-strange-story-in-the-fantastic-trolley/",
      en: {
        title: "A Strange Story in the Fantastic Trolley",
        author: "Bassam Al Tajy",
        illustrator: "Noor Dawed",
        theme: "Refugees",
        description: "We played and played and with our fantastic car we went to the library… There we studied, dreamed, in the space we flew and in the deep oceans we dived."
      },
      ar: {
        title: "قصّة غريبة بالعربة العجيبة",
        author: "بسّام التّاجي",
        illustrator: "نور داود",
        theme: "اللاجئين",
        description: "لعبنا ولعبنا وبعربتنا العجيبة إلى المكتبة ذهبنا … هناك قرأنا وحلمنا، وفي الفضاء طرنا، وفي أعماق البحار غصنا …"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37595961?___from_store=ar",
        reviews: "https://alnqsh.com/books/893/%D9%82%D8%B5%D9%91%D8%A9-%D8%BA%D8%B1%D9%8A%D8%A8%D8%A9-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%A9-%D8%A7%D9%84%D8%B9%D8%AC%D9%8A%D8%A8%D8%A9"
      }
    },
    {
      slug: "tomorrow-i-will-be",
      age: "4-6",
      sdgs: [5],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/ghadan-saakoon-1.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/ghadan-saakoon-1.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/tomorrow-i-will-be/",
      urlAr: "https://welovereading.org/ar/our-books/tomorrow-i-will-be/",
      en: {
        title: "Tomorrow I Will Be",
        author: "Bassam Al Tajy",
        illustrator: "Dyala Zada",
        theme: "Gender",
        description: "Every night before we sleep, my dad and mom read us a story. We live afterwards amazing adventures. This time my dad read to us a story about a great adventurer… next day… ouuff! Guess who woke up in a big jungle, took a ride on an elephant, was greeted by a crocodile and crossed a big river."
      },
      ar: {
        title: "غدًا سأكون",
        author: "بسّام التّاجي",
        illustrator: "ديالا زادة",
        theme: "النوع الإجتماعي",
        description: "كلّ ليلة قبل أن ننام، أبي وأمّي يقرآن لنا قصّة، نعيش بعدها مغامرات عجيبة. هذه المرّة قرأ لنا أبي قصّة عن مغامر عظيم … وفي اليوم التّالي … «بوف!» … احزروا من استيقظ في غابة كبيرة وركب فيلًا، وسلّم عليه تمساح صغير وقطع نهرًا كبيرًا …"
      },
      actions: {
        reviews: "https://alnqsh.com/books/890/%D8%BA%D8%AF%D9%8B%D8%A7-%D8%B3%D8%A3%D9%83%D9%88%D9%86"
      }
    },
    {
      slug: "somethings-really-strange",
      age: "4-6",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/06/shai-ghareeb-2.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/shai-ghareeb-2.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/somethings-really-strange/",
      urlAr: "https://welovereading.org/ar/our-books/somethings-really-strange/",
      en: {
        title: "Something’s Really Strange",
        author: "Imane Zaheer Al Tarawnah",
        illustrator: "Amany Youssef",
        theme: "Disabilities",
        description: "They say that my friend Massa is very different than me. I didn’t understand how she is different than me, we are similar in everything. But when I thought about it over and over again, I remembered. You know what? Yes. My friend Massa is indeed different than me, because…"
      },
      ar: {
        title: "شيء غريب فعلًا",
        author: "إيمان زهير الطراونة",
        illustrator: "أماني يوسف",
        theme: "الاحتياجات الخاصة",
        description: "يقولون إنّ صديقتي ماسة مختلفة عنّي. لم أفهم كيف تختلف عنّي، مع أنّنا نتشابه في كلّ شيء، ولكن عندما فكّرت وفكّرت وفكّرت، تذكّرت. أتعرفون شيئًا؟ نعم، صديقتي ماسة بالفعل مختلفة عنّي، فهي …"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547881?___from_store=ar",
        watch: "https://www.youtube.com/watch?v=3rDZ_HwEf3Q&list=PL-DGUuaPQiZlTWhQqQQT2zEQZGumaBdAf&index=4",
        reviews: "https://alnqsh.com/books/894/%D8%B4%D9%8A%D8%A1-%D8%BA%D8%B1%D9%8A%D8%A8-%D9%81%D8%B9%D9%84%D9%8B%D8%A7"
      }
    },

    // ================= AGE CATEGORY: 5-8 YEARS (2 BOOKS) =================
    {
      slug: "the-bridge-to-dreamland",
      age: "5-8",
      sdgs: [],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/11/ard-al-ahlam-2-1.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/11/ard-al-ahlam-2-1.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/the-bridge-to-dreamland/",
      urlAr: "https://welovereading.org/ar/our-books/the-bridge-to-dreamland/",
      en: {
        title: "The Bridge to Dreamland",
        author: "Huda Eissa Al-Kannass, Balqiss Mohammed Saif",
        illustrator: "Julenar Hajou, Farah Abou Arjaa, Sarah Zamel, Zaid Ishaq",
        theme: "Empathy",
        description: "Samer used to love running so much… A new girl came to school… then everything changed."
      },
      ar: {
        title: "الجسر إلى أرض الأحلام",
        author: "هدى عيسى القناص",
        illustrator: "جلنار حاجو، فرح أبو عرجا، ساره زامل، زيد اسحاق",
        theme: "التعاطف",
        description: "كان سامر يحب الركض كثيرًا … جاءت إلى المدرسة بنت جديدة … فتغير كل شيء …"
      },
      actions: {
        watch: "https://www.youtube.com/watch?v=ig27VOfYbg0",
        reviews: "https://alnqsh.com/books/871/%D8%A7%D9%84%D8%AC%D8%B3%D8%B1-%D8%A5%D9%84%D9%89-%D8%A3%D8%B1%D8%B6-%D8%A7%D9%84%D8%A3%D8%AD%D9%84%D8%A7%D9%85"
      }
    },
    {
      slug: "the-apple-tree",
      age: "5-8",
      sdgs: [],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/11/shajarat-al-tuffah-1.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/11/shajarat-al-tuffah-1.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/the-apple-tree/",
      urlAr: "https://welovereading.org/ar/our-books/the-apple-tree/",
      en: {
        title: "The Apple Tree",
        author: "Ahmed Al Hawatmah",
        illustrator: "Julenar Hajou, Farah Abou Arjaa, Sarah Zamel, Zaid Ishaq",
        theme: "Empathy",
        description: "Balqiss… used to love the apple tree… suddenly an unexpected change happened in her life."
      },
      ar: {
        title: "شجرة التّفاح",
        author: "أحمد الحواتمة",
        illustrator: "جلنار حاجو، فرح أبو عرجا، ساره زامل، زيد اسحاق",
        theme: "التعاطف",
        description: "كانت بلقيس … تحب شجرة التفاح … وفجأة حصل تغيير غير متوقع في حياتها."
      },
      actions: {
        watch: "https://www.youtube.com/watch?v=j_1oLmcSFWs",
        reviews: "https://alnqsh.com/books/869/%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D9%91%D9%81%D8%A7%D8%AD"
      }
    },

    // ================= AGE CATEGORY: 7-10 YEARS (19 BOOKS) =================
    {
      slug: "queen-of-balloons",
      age: "7-10",
      sdgs: [6, 13],
      isLatest: true,
      latestOrder: 1,
      coverEn: "assets/covers/queen-of-balloons.jpg",
      coverAr: "assets/covers/queen-of-balloons-ar.jpg",
      remoteCoverEn: "https://welovereading.org/wp-content/uploads/2023/10/booklets-02.jpg",
      remoteCoverAr: "https://welovereading.org/wp-content/uploads/2023/10/booklets-AR-02.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2023/10/Queen-of-balloons-AR.jpg?fit=3000%2C2250&ssl=1",
      urlEn: "https://welovereading.org/our-books/queen-of-balloons/",
      announcementUrlEn: "https://welovereading.org/our-latest-book-titled-queen-of-balloons-is-available-now/",
      urlAr: "https://welovereading.org/ar/our-books/%d9%85%d9%84%d9%83%d8%a9-%d8%a7%d9%84%d8%a8%d8%a7%d9%84%d9%88%d9%86%d8%a7%d8%aa/",
      en: {
        title: "Queen of Balloons",
        author: "Lina Qtaishat",
        englishWriter: "Amina Awad",
        illustrator: "Ali Ahmad Elzeny",
        theme: "Climate Change",
        description: "In a quest to become the Queen of Balloons in her neighborhood, Ayah discovers Uncle Omar’s Shop for Magical Solutions. At first, she believes she has unlocked the secret to winning each balloon game. But Ayah ends up learning a much more valuable secret…",
        editorialNote: "Inspired by the scientific breakthroughs of Prof. Omar Yaghi in harvesting clean water from desert air, connecting neighborhood play to climate resilience and water scarcity."
      },
      ar: {
        title: "ملكة البالونات",
        author: "لينة قطيشات",
        illustrator: "علي الزيني",
        theme: "المياه، والتغير المناخي",
        description: "تكتشف آية متجر العم عمر للبالونات السحرية، فجعلها ذلك ملكة لعبة البالونات في كل الأحياء.. لكن في أحد أيام الأربعاء، وقبل بداية اللعبة بدقائق عديدة حصل مالم يكن في الحسبان!",
        editorialNote: "قصة مستلهمة من ابتكارات العالم الأردني البروفيسور عمر ياغي في حصاد المياه من الهواء، تقرّب مفاهيم التغير المناخي وشح المياه للأطفال بأسلوب مشوّق."
      },
      actions: {
        buy: "https://welovereading.org/buy-our-books/",
        buyAr: "https://welovereading.org/ar/copy-of-buy-our-books/",
        watch: "https://welovereading.org/we-love-reading-program-launched-its-latest-childrens-book-queen-of-balloons-during-the-national-reading-day/",
        watchAr: "https://welovereading.org/ar/%d8%a5%d8%b7%d9%84%d8%a7%d9%82-%d8%a2%d8%ae%d8%b1-%d9%82%d8%b5%d8%b5-%d9%86%d8%ad%d9%86-%d9%86%d8%ad%d8%a8-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%a1%d8%a9-%d8%a8%d8%b9%d9%86%d9%88%d8%a7%d9%86-%d9%85%d9%84/",
        reviews: "https://welovereading.org/our-latest-book-titled-queen-of-balloons-is-available-now/",
        reviewsAr: "https://welovereading.org/ar/%d8%a5%d8%b7%d9%84%d8%a7%d9%82-%d8%a2%d8%ae%d8%b1-%d9%82%d8%b5%d8%b5-%d9%86%d8%ad%d9%86-%d9%86%d8%ad%d8%a8-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%a1%d8%a9-%d8%a8%d8%b9%d9%86%d9%88%d8%a7%d9%86-%d9%85%d9%84/"
      }
    },
    {
      slug: "the-peppered-moth",
      age: "7-10",
      sdgs: [13, 15],
      isLatest: true,
      latestOrder: 2,
      coverEn: "assets/covers/the-peppered-moth.jpg",
      coverAr: "assets/covers/the-peppered-moth-ar.jpg",
      remoteCoverEn: "https://welovereading.org/wp-content/uploads/2023/10/booklets-03-1.jpg",
      remoteCoverAr: "https://welovereading.org/wp-content/uploads/2023/10/booklets-AR-03.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2023/10/booklets-03-1.jpg?fit=5001%2C3314&ssl=1",
      urlEn: "https://welovereading.org/our-books/the-peppered-moth/",
      urlAr: "https://welovereading.org/ar/our-books/%d8%a7%d9%84%d8%b9%d9%8c%d8%ab%d8%a9-%d8%a7%d9%84%d9%85%d8%aa%d8%a8%d9%84%d8%a9/",
      en: {
        title: "The Peppered Moth",
        author: "Rana Dajani",
        illustrator: "Ali Al-Zaini",
        theme: "Climate Change",
        description: "Salma is very curious. Salma wants to know what is happening to the peppered moths on the trees in her garden. Let’s join Salma on her journey of discovery.",
        editorialNote: "Written by We Love Reading founder Prof. Rana Dajani, inviting young readers to observe nature closely and discover how living organisms adapt to changing environments."
      },
      ar: {
        title: "العُثة المتبلة",
        author: "د. رنا الدجاني",
        editor: "ندى أبو الذهب",
        illustrator: "علي الزيني",
        theme: "التغير المناخي",
        description: "شيء عجيب يحدث في عالم سلمى، تغير ألوان العُثَث والأشجار حتى لون ملابسها ونظاراتها! فهل تكتشف سلمى السبب؟",
        editorialNote: "بقلم مؤسِّسة «نحن نحب القراءة» د. رنا الدجاني، تأخذ القصة الأطفال في رحلة تأمل وبحث علمي لاكتشاف التنوع الحيوي وتكيّف الكائنات مع بيئتها."
      },
      actions: {
        buy: "https://welovereading.org/buy-our-books/",
        buyAr: "https://welovereading.org/ar/copy-of-buy-our-books/",
        watchAr: "https://welovereading.org/ar/%d9%86%d8%ad%d9%86-%d9%86%d8%ad%d8%a8-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%a1%d8%a9-%d8%aa%d8%b7%d9%84%d9%82-%d8%a7%d9%84%d8%b9%d8%ab%d8%a9-%d8%a7%d9%84%d9%85%d8%aa%d8%a8%d9%84%d8%a9-%d8%a2%d8%ae%d8%b1/",
        reviewsAr: "https://welovereading.org/ar/%d9%86%d8%ad%d9%86-%d9%86%d8%ad%d8%a8-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%a1%d8%a9-%d8%aa%d8%b7%d9%84%d9%82-%d8%a7%d9%84%d8%b9%d8%ab%d8%a9-%d8%a7%d9%84%d9%85%d8%aa%d8%a8%d9%84%d8%a9-%d8%a2%d8%ae%d8%b1/"
      }
    },
    {
      slug: "shells-of-freedom",
      age: "7-10",
      sdgs: [3, 16],
      isLatest: true,
      latestOrder: 3,
      coverEn: "assets/covers/shells-of-freedom.jpg",
      coverAr: "assets/covers/shells-of-freedom-ar.jpg",
      remoteCoverEn: "https://welovereading.org/wp-content/uploads/2026/05/Untitled-design.png",
      remoteCoverAr: "https://welovereading.org/wp-content/uploads/2026/05/Untitled-design.png%D8%B9%D8%B1%D8%A8%D9%8A.png",
      coverFallback: "https://welovereading.org/wp-content/uploads/2026/05/Untitled-design.png",
      urlEn: "https://welovereading.org/our-books/shells-of-freedom/",
      urlAr: "https://welovereading.org/ar/our-books/%d8%b5%d8%af%d9%81%d8%a7%d8%aa-%d8%a7%d9%84%d8%ad%d8%b1%d9%8a%d8%a9/",
      storyArticleUrl: "https://welovereading.org/shells-of-freedom/",
      en: {
        title: "Shells of Freedom",
        storyBy: "Mohammad Aeshan",
        author: "Amina Awad",
        illustrator: "Aly Elziny",
        theme: "Non-Violence",
        description: "Salah and Maryam gather seashells, dreaming of a life bigger than genocide, siege and sorrow. When their cat “Mishmish” slips behind the iron fence, they rush after him with small, fearless hearts.",
        editorialNote: "Inspired by the real experiences, courage, and steadfast hope of children, educators, medics, and journalists in Palestine."
      },
      ar: {
        title: "صدفات الحرية",
        storyBy: "محمد عيشان",
        author: "مايا أبو الحيات",
        illustrator: "علي الزيني",
        theme: "نبذ العنف",
        description: "يجمع صلاح ومريم الصدفات لتكوين عائلة، وحياة أوسع من الإبادة والظلم والحصار، وحين يضيع القط «مشمش» خلف السياج الحديدي الخطير، ينطلقان بشجاعة وبسالة لإنقاذه. هل سيتمكن الطفلان من الوصول إلى «مشمش»؟",
        editorialNote: "قصة مستوحاة من تجارب الأطفال والعائلات في فلسطين، تسلط الضوء على الشجاعة والتكاتف والأمل المتجذر رغم الألم."
      },
      actions: {
        buy: "https://welovereading.org/buy-our-books/",
        buyAr: "https://welovereading.org/ar/copy-of-buy-our-books/",
        storyBackground: "https://welovereading.org/shells-of-freedom/"
      }
    },
    {
      slug: "mamas-magic",
      age: "7-10",
      sdgs: [10, 16],
      coverEn: "https://welovereading.org/wp-content/uploads/2023/10/Mamas-Magic-booklet-01.jpg",
      coverAr: "https://welovereading.org/wp-content/uploads/2023/10/booklets-AR-01-2.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2023/10/booklets-AR-01-2.jpg?fit=5000%2C3314&ssl=1",
      urlEn: "https://welovereading.org/our-books/mamas-magic/",
      urlAr: "https://welovereading.org/ar/our-books/%d9%85%d8%a7%d9%85%d8%a7-%d8%a7%d9%84%d8%ad%d9%83%d9%88%d8%a7%d8%aa%d9%8a%d8%a9/",
      en: {
        title: "My Mama’s Magic",
        author: "Amina Awad",
        illustrator: "Eshraq Othman",
        theme: "Refugees",
        description: "The residents of Zaatari Camp have a Hakawati among them. This is the story of the woman behind the magic and how she spreads the Love of Reading far and wide."
      },
      ar: {
        title: "ماما الحكواتية",
        author: "مايا أبو الحيات",
        illustrator: "إشراق عثمان",
        theme: "اللاجئين",
        description: "هذه قصة سما الحكواتيّة، التي لا تكون هي نفسها مرتين، فهي مرة مارداً عملاقا ومرّة عصفورة صغيرة، ومرّة فراشة بين الزنابق. إن قرأت هذه القصة لشخص آخر ستعرف السبب."
      },
      actions: {
        buy: "https://welovereading.org/buy-our-books/",
        buyAr: "https://welovereading.org/ar/copy-of-buy-our-books/",
        watch: "https://welovereading.org/our-latest-book-mamas-magic/",
        reviews: "https://www.neelwafurat.com/itempage.aspx?id=aeb435753-10436394&search=books"
      }
    },
    {
      slug: "grannies-plan",
      age: "7-10",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/aljaddat.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/aljaddat.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/grannies-plan/",
      urlAr: "https://welovereading.org/ar/our-books/grannies-plan/",
      en: {
        title: "Grannies’ Plan",
        author: "Yasmine Ayyoud",
        illustrator: "Ghada Al Jourmy",
        theme: "Social Inclusion",
        description: "In one of the country’s neighborhoods lived three grannies who have a strong loving friendship… with their wisdom they solve the most difficult problems… so join us kids, girls and boys, to discover all together The Grannies’ Plan."
      },
      ar: {
        title: "خطّة الجدّات",
        author: "ياسمين عيّود",
        illustrator: "غادة الجرمي",
        theme: "الإندماج الإجتماعي",
        description: "في حيّ من أحياء البلاد … عاشت ثلاث جدّات … تجمعهنّ صداقة متينة ومحبّة ووداد … بحنكتهن يحللن أصعب المشكلات … فانضمّوا إلينا يا أطفال … صبيانًا وبنات … لنكتشف معًا خطّة الجدّات."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547873?___from_store=ar",
        reviews: "https://alnqsh.com/books/897/%D8%AE%D8%B7%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%AA"
      }
    },
    {
      slug: "the-black-chicken",
      age: "7-10",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/dajajeh.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/dajajeh.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/the-black-chicken/",
      urlAr: "https://welovereading.org/ar/our-books/the-black-chicken/",
      en: {
        title: "The Black Chicken",
        author: "Yasmine Ayyoud",
        illustrator: "Mohamed Al Maaty",
        theme: "Social Inclusion",
        description: "Once upon a time… there was a big farm where many animals lived… fat chickens too. One day during spring, specifically in the chicken coop, there was a big celebration where something really strange happened… What could be the reason for this celebration? And what will happen in it?"
      },
      ar: {
        title: "الدّجاجة السّوداء",
        author: "ياسمين عيّود",
        illustrator: "محمد المعطي",
        theme: "الإندماج الإجتماعي",
        description: "كان يا ما كان، في قديم الزّمان … كان هناك مزرعة كبيرة … تعيش فيها حيوانات كثيرة … ودجاجات سمينة. في أحد أيّام الرّبيع … وفي خمّ الدّجاج تحديدًا، كان هناك احتفال كبير، حدث فيه أمر عجيب … يا ترى، ما سبب هذا الاحتفال؟ وماذا سيحدث فيه؟"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547877?___from_store=ar",
        reviews: "https://alnqsh.com/books/898/%D8%A7%D9%84%D8%AF%D8%AC%D8%A7%D8%AC%D8%A9-%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1"
      }
    },
    {
      slug: "i-would-like-to-introduce-you-to",
      age: "7-10",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/o7ebbu-ann-.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/o7ebbu-ann-.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/i-would-like-to-introduce-you-to/",
      urlAr: "https://welovereading.org/ar/our-books/i-would-like-to-introduce-you-to/",
      en: {
        title: "I Would Like to Introduce You To…",
        author: "Arroub Sobh",
        illustrator: "Ishraq Othmane",
        theme: "Disabilities",
        description: "We’re three best friends. We never thought that a stranger would be added to our group… until new neighbors joined our neighborhood. What happened? And what did Rayya discover? I am Ali… I would like to introduce you to…"
      },
      ar: {
        title: "أحبّ أن أعرّفكم على …",
        author: "عروب صبح",
        illustrator: "إشراق عثمان",
        theme: "الاحتياجات الخاصة",
        description: "نحن الثّلاثة أعزّ الأصدقاء. ما ظننّا أنّنا سنضم إلى مجموعتنا أحدًا من الغرباء … إلى أن سكن في حيّنا جيران جدد. ما الّذي حدث؟ وماذا اكتشفت ريّا؟ أنا عليّ … أحبّ أن أعرّفكم على …"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547876?___from_store=ar",
        reviews: "https://alnqsh.com/books/899/%D8%A3%D8%AD%D8%A8-%D8%A3%D9%86-%D8%A3%D8%B9%D8%B1%D9%81%D9%83%D9%85-%D8%B9%D9%84%D9%89-"
      }
    },
    {
      slug: "the-golden-garden",
      age: "7-10",
      sdgs: [13, 12],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/hadeeqaton-men-thahab.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/hadeeqaton-men-thahab.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/the-golden-garden/",
      urlAr: "https://welovereading.org/ar/our-books/the-golden-garden/",
      en: {
        title: "The Golden Garden",
        author: "Mahmoud Abou Farwa Arajabi",
        illustrator: "Samar Zareek",
        theme: "Anti-Littering",
        description: "Can we transform things that are not beautiful into amazing and fantastic things? How does it happen? Does it need everybody’s collaboration? Read with us this story to know what happened to Ahmed’s family with the ignored garden that got transformed into a golden garden."
      },
      ar: {
        title: "حديقة من ذهب",
        author: "محمود أبوفروة الرجبي",
        illustrator: "سمر زريق",
        theme: "نظافة البيئة",
        description: "هل يمكن أن نحوّل الأشياء غير الجميلة إلى أخرى رائعة ومدهشة؟ كيف يتمّ ذلك؟ هل يحتاج الأمر إلى تعاون من الجميع؟ اقرأوا معنا هذه القصّة لتعرفوا ما حصل لعائلة أحمد مع الحديقة المهملة الّتي تحوّلت إلى حديقة ذهبيّة."
      },
      actions: {
        buy: "https://jamalon.com/ar/catalog/product/view/id/37518273",
        watch: "https://youtu.be/EDk5RWVIAcQ",
        reviews: "https://alnqsh.com/books/873/%D8%AD%D8%AF%D9%8A%D9%82%D8%A9-%D9%85%D9%86-%D8%B0%D9%87%D8%A8"
      }
    },
    {
      slug: "sun-and-suns",
      age: "7-10",
      sdgs: [7, 12],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/shams-wa-shumoos.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/shams-wa-shumoos.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/sun-and-suns/",
      urlAr: "https://welovereading.org/ar/our-books/sun-and-suns/",
      en: {
        title: "Sun and Suns",
        author: "Fedaa Azoumr",
        illustrator: "Rawan Sadr",
        theme: "Energy",
        description: "There are many stars lighting the kids’ rooms! They gave up their bright beautiful sun. Where did these suns come from? Did they fall from other galaxies? Let’s read what happened in this story."
      },
      ar: {
        title: "شمس وشموس",
        author: "فداء الزمر",
        illustrator: "روان صدر",
        theme: "الطاقة",
        description: "هناك شموس كثيرة تضيء غرف الأطفال! لقد استغنوا عن شمسهم الغالية الجميلة. من أين جاءت هذه الشّموس؟! هل سقطت من مجرّات أخرى؟! تعالوا بنا نقرأ ما جاء في هذه القصّة."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37518274?___from_store=ar",
        watch: "https://youtu.be/9ygc7hBozzI",
        reviews: "https://alnqsh.com/books/876/%D8%B4%D9%85%D8%B3-%D9%88%D8%B4%D9%85%D9%88%D8%B3"
      }
    },
    {
      slug: "who-defeated-the-squandering-demon",
      age: "7-10",
      sdgs: [7, 12],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/man-hazama-shereer-al-tabtheer.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/man-hazama-shereer-al-tabtheer.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/who-defeated-the-squandering-demon/",
      urlAr: "https://welovereading.org/ar/our-books/who-defeated-the-squandering-demon/",
      en: {
        title: "Who Defeated the Squandering Demon",
        author: "Mahmoud Abou Farwa Arajabi",
        illustrator: "Rached Al Labariti",
        theme: "Energy",
        description: "The squandering demon ran away from Ahmed’s house. Who’s the hero who made him run away in a hurry? That’s what we will figure out in this story."
      },
      ar: {
        title: "من هزم شرّير التّبذير",
        author: "محمود أبوفروة الرجبي",
        illustrator: "راشد الكباريتي",
        theme: "الطاقة",
        description: "شرّير التّبذير هرب من بيت أحمد. ترى من هو البطل الّذي جعله يهرب مسرعًا؟ هذا ما سنعرفه في هذه القصّة."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37518275?___from_store=ar",
        watch: "https://youtu.be/GKE_zkMS7Rc",
        reviews: "https://alnqsh.com/books/877/%D9%85%D9%86-%D9%87%D8%B2%D9%85-%D8%B4%D8%B1%D9%91%D9%8A%D8%B1-%D8%A7%D9%84%D8%AA%D9%91%D8%A8%D8%B0%D9%8A%D8%B1"
      }
    },
    {
      slug: "shafafas-enjoyable-trip",
      age: "7-10",
      sdgs: [6],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/shafafa.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/shafafa.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/shafafas-enjoyable-trip/",
      urlAr: "https://welovereading.org/ar/our-books/shafafas-enjoyable-trip/",
      en: {
        title: "Shafafa’s Enjoyable Trip",
        author: "Nerdin Abou Nabaa",
        illustrator: "Widad Arshid",
        theme: "Water",
        description: "Shafafa is a beautiful drop of water, just like the beauty of a pearl. Before coming down to planet Earth she put her head on her mom’s chest and was very scared and sad! Why was Shafafa sad and scared? Read this story to know the answer."
      },
      ar: {
        title: "رحلة شفّافة الممتعة",
        author: "نردين أبو نبعة",
        illustrator: "وداد إرشيد",
        theme: "المياه",
        description: "«شفّافة» قطرة ماء جميلة … تشبه الّلؤلؤ في جمالها … قبل نزولها على سطح الأرض وضعت رأسها على صدر أمّها … وكانت حزينة وخائفة!! يا ترى، لماذا كانت شفّافة حزينة وخائفة؟ اقرأ هذه القصّة لتعرف الإجابة."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37518276?___from_store=ar",
        reviews: "https://alnqsh.com/books/878/%D8%B1%D8%AD%D9%84%D8%A9-%D8%B4%D9%81%D9%91%D8%A7%D9%81%D8%A9-%D8%A7%D9%84%D9%85%D9%85%D8%AA%D8%B9%D8%A9"
      }
    },
    {
      slug: "amal",
      age: "7-10",
      sdgs: [16, 10],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/amal.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/amal.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/amal/",
      urlAr: "https://welovereading.org/ar/our-books/amal/",
      en: {
        title: "Amal",
        author: "Yasmine Houssein Ayoud",
        illustrator: "Farah Farouka",
        theme: "Refugees",
        description: "Once upon a time… there were three boys and two little girls, a small lamp and two hands praying, and many tents everywhere… Let’s read our story to know what’s hidden in it and how children loaded with knowledge and hope return colors to their homeland."
      },
      ar: {
        title: "أمل",
        author: "ياسمين حسين عيّود",
        illustrator: "فرح فاروقة",
        theme: "اللاجئين",
        description: "في زمان مثل هذا الزّمان … كان هناك ثلاثة صبيان وفتاتان صغيرتان … مصباح صغير ويدان تدعوان … وخيم كثيرة في كلّ مكان … لنقرأ قصّتنا فنعرف ما خفي فيها وما كان … وكيف سيعود الأطفال محمّلين بالعلم والأمل ليعيدوا للوطن الألوان."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547867?___from_store=ar",
        reviews: "https://alnqsh.com/books/884/%D8%A3%D9%85%D9%84"
      }
    },
    {
      slug: "kenan-and-watermelon-head",
      age: "7-10",
      sdgs: [16, 10],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/Kenan.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/Kenan.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/kenan-and-watermelon-head/",
      urlAr: "https://welovereading.org/ar/our-books/kenan-and-watermelon-head/",
      en: {
        title: "Kenan and Watermelon Head",
        author: "Ghada Mahmoud",
        illustrator: "Samia Bassam Khalef",
        theme: "Gender",
        description: "Books flying here and there in Kenan’s new class, and there is a head growing and growing! What’s the story? Who’s the owner of the puffed bag? And most importantly: who taught Kenan the acrobatic movements that impressed everybody? Let’s read and know the story."
      },
      ar: {
        title: "كنان ورأس البطّيخة",
        author: "غادة محمود",
        illustrator: "سامية بسّام خلف",
        theme: "النوع الإجتماعي",
        description: "كتب تتطاير هنا وهناك في صفّ كنان الجديد، وهناك رأس بطّيخة يكبر ويكبر! ما قصّة رأس البطّيخة؟ ومن صاحب الحقيبة المنفوخة؟ والأهمّ: من الّذي علّم كنانًا الحركات البهلوانيّة الّتي أبهرت الجميع؟ هيّا لنقرأ ونعرف الحكاية."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547870?___from_store=ar",
        reviews: "https://alnqsh.com/books/885/%D9%83%D9%86%D8%A7%D9%86-%D9%88%D8%B1%D8%A3%D8%B3-%D8%A7%D9%84%D8%A8%D8%B7%D9%91%D9%8A%D8%AE%D8%A9"
      }
    },
    {
      slug: "a-space-adventure-with-jasmin-and-batraa",
      age: "7-10",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2021/11/moghamara-fel-fada.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/11/moghamara-fel-fada.jpg?fit=1200%2C795&ssl=1",
      urlEn: "https://welovereading.org/our-books/a-space-adventure-with-jasmin-and-batraa/",
      urlAr: "https://welovereading.org/ar/our-books/a-space-adventure-with-jasmin-and-batraa/",
      en: {
        title: "A Space Adventure with Jasmin and Aliaa",
        author: "Bassam Al Tajy",
        illustrator: "Sajeda Jallad",
        theme: "Disabilities",
        description: "The two sisters Jasmin and Aliaa decided to make a trip through space. After taking off, a technical problem occurred on the starship, so they landed on a planet with green land… there they met a giant with one eye and thick blue fur… what will happen with them, and will they come back before dinner time?"
      },
      ar: {
        title: "مغامرة في الفضاء مع ياسمين وعلياء",
        author: "بسّام التّاجي",
        illustrator: "ساجدة جلاد",
        theme: "الاحتياجات الخاصة",
        description: "قرّرت الأختان ياسمين وعلياء القيام برحلة عبر الفضاء. وبعد الانطلاق، حدث خلل في المركبة الفضائيّة؛ فهبطتا على كوكب أرضه خضراء … وهناك التقتا بعملاق بعين واحدة وفروة كثيفة زرقاء … ماذا سيحدث معهما؟ وهل ستعودان قبل موعد العشاء؟"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547869?___from_store=ar",
        reviews: "https://alnqsh.com/books/888/%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1-%D9%85%D8%B9-%D9%8A%D8%A7%D8%B3%D9%85%D9%8A%D9%86-%D9%88%D8%A8%D8%AA%D8%B1%D8%A7%D8%A1"
      }
    },
    {
      slug: "the-opened-tap",
      age: "7-10",
      sdgs: [6],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/alsunboor-al-maftooh.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/alsunboor-al-maftooh.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/the-opened-tap/",
      urlAr: "https://welovereading.org/ar/our-books/the-opened-tap/",
      en: {
        title: "The Opened Tap",
        author: "Fedaa Azoumr",
        illustrator: "Mahmoud Ahndaoui",
        theme: "Water",
        description: "The water drops are massively leaking from the tap. Where do these water drops go? Is there any water left in the tap? Who can help us save what’s left of the water drops?"
      },
      ar: {
        title: "الصّنبور المفتوح",
        author: "فداء الزمر",
        illustrator: "محمود هنداوي",
        theme: "المياه",
        description: "قطرات الماء تتسرّب بغزارة من الصنبور. إلى أين تذهب هذه القطرات؟! هل بقي ماء في الصّنبور؟! من يمدّ لنا العون لننقذ ما تبقّى من قطرات الماء؟!"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37518272?___from_store=ar",
        watch: "https://youtu.be/7XhFZX4eBZc",
        reviews: "https://alnqsh.com/books/872/%D8%A7%D9%84%D8%B5%D9%91%D9%86%D8%A8%D9%88%D8%B1-%D8%A7%D9%84%D9%85%D9%81%D8%AA%D9%88%D8%AD"
      }
    },
    {
      slug: "zanbout",
      age: "7-10",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/zanboot.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/zanboot.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/zanbout/",
      urlAr: "https://welovereading.org/ar/our-books/zanbout/",
      en: {
        title: "Zanbout",
        author: "Layla Ouda",
        illustrator: "Ishraq Othmane",
        theme: "Social Inclusion",
        description: "A new day with siblings Fares and Deema filled with inventions and pops. But this time something unexpected happened with a strange guest that loves eating popcorn. Who is this guest? Where did he come from? And how will he leave?"
      },
      ar: {
        title: "زنبوط",
        author: "ليلى عودة",
        illustrator: "إشراق عثمان",
        theme: "الإندماج الإجتماعي",
        description: "يوم جديد مع الأخوين فارس وديمة مليء بالاختراعات والفرقعات. ولكن في هذه المرّة حصل شيء غير متوقّع مع ضيف غريب يحبّ أكل (البوشار). من هذا الضّيف؟ من أين أتى؟ وكيف سيرحل؟"
      },
      actions: {
        reviews: "https://alnqsh.com/books/892/%D8%B2%D9%86%D8%A8%D9%88%D8%B7"
      }
    },
    {
      slug: "i-left-a-surprise-for-you",
      age: "7-10",
      sdgs: [5],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/taraktu-laka-mufaja.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/taraktu-laka-mufaja.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/i-left-a-surprise-for-you/",
      urlAr: "https://welovereading.org/ar/our-books/i-left-a-surprise-for-you/",
      en: {
        title: "I Left a Surprise for You",
        author: "Maryem Kamal Abedy, Heba Jameel Sabeeha, Imane Zuhair Al Tarawnah",
        illustrator: "Lara Farouka",
        theme: "Gender",
        description: "There is a surprise. Who left it? Who is it for? And what’s the story of the big desert, sharks in the kitchen, and wild animals in the living room? Let’s read our story to discover that and more together."
      },
      ar: {
        title: "تركت لك مفاجأة",
        author: "مريم كمال عابدي، هبة جميل صبيحه، إيمان زهير الطراونة",
        illustrator: "لارا فاروقة",
        theme: "النوع الإجتماعي",
        description: "هناك مفاجأة. يا ترى، من تركها؟ ولمن هي؟ وما قصّة الصّحراء الكبرى، وأسماك القرش في المطبخ، والحيوانات البرّيّة في غرفة الجلوس؟ هيّا نقرأ قصّتنا؛ لنكتشف ذلك والمزيد معًا."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37595960?___from_store=ar",
        watch: "https://www.youtube.com/watch?v=7ly0WZ3bFaQ&list=PL-DGUuaPQiZlTWhQqQQT2zEQZGumaBdAf&index=2",
        reviews: "https://alnqsh.com/books/887/%D8%AA%D8%B1%D9%83%D8%AA-%D9%84%D9%83-%D9%85%D9%81%D8%A7%D8%AC%D8%A3%D8%A9"
      }
    },
    {
      slug: "the-big-envelope",
      age: "7-10",
      sdgs: [16],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/moghallaf.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/moghallaf.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/the-big-envelope/",
      urlAr: "https://welovereading.org/ar/our-books/the-big-envelope/",
      en: {
        title: "The Big Envelope",
        author: "Layla Awda",
        illustrator: "Samar Zraik",
        theme: "Non-Violence",
        description: "Omar is a new kid at school; he is being bullied at school by his classmate Hamza. How did Omar react? How did he and Hamza become friends? To know more, read the story The Big Envelope."
      },
      ar: {
        title: "المغلّف الكبير",
        author: "ليلى عودة",
        illustrator: "سمر زريق",
        theme: "نبذ العنف",
        description: "عمر ولد جديد في المدرسة، يتعرّض لبعض المضايقات من زميله حمزة. كيف تصرّف عمر؟ وكيف أصبح عمر وحمزة صديقين؟ لتعرفوا أكثر؛ اقرؤوا قصّة «المغلّف الكبير»."
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547875?___from_store=ar",
        reviews: "https://alnqsh.com/books/895/%D8%A7%D9%84%D9%85%D8%BA%D9%84%D9%81-%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1"
      }
    },
    {
      slug: "the-secret-of-the-world-of-harmony",
      age: "7-10",
      sdgs: [10],
      coverEn: "https://welovereading.org/wp-content/uploads/2020/06/we2am.jpg",
      coverFallback: "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/we2am.jpg?fit=3229%2C2139&ssl=1",
      urlEn: "https://welovereading.org/our-books/the-secret-of-the-world-of-harmony/",
      urlAr: "https://welovereading.org/ar/our-books/the-secret-of-the-world-of-harmony/",
      en: {
        title: "The Secret of the World of Harmony",
        author: "Bassam Al Tajy",
        illustrator: "Dyala Zada",
        theme: "Social Inclusion",
        description: "Izza is from Gaza, Addy is from Dubai, and Widad is from Baghdad… and I am Adnane, I live in Amman. We love mornings! But we always wait for the night… so if we fall asleep we’ll meet in the World of Harmony… we are four now — when are we going to become ten?"
      },
      ar: {
        title: "سرّ عالم الوئام",
        author: "بسّام التّاجي",
        illustrator: "ديالا زادة",
        theme: "الإندماج الإجتماعي",
        description: "عزّة من غزّة، وعديّ من دبي، ووداد من بغداد … وأنا عدنان، أسكن في عمّان. كم نحبّ الصّباح! … إلّا أنّنا دومًا ننتظر قدوم المساء … فإن غفونا ونمنا فسنلتقي في عالم الوئام … لكنّنا نحن أربعة … متى سنصبح -يا ترى- عشرة؟"
      },
      actions: {
        buy: "https://jamalon.com/en/catalog/product/view/id/37547874?___from_store=ar",
        reviews: "https://alnqsh.com/books/896/%D8%B3%D8%B1-%D8%B9%D8%A7%D9%84%D9%85-%D8%A7%D9%84%D9%88%D8%A6%D8%A7%D9%85"
      }
    }
  ],

  catalogues: {
    featured: {
      year: "2026",
      pdfEn: "https://welovereading.org/wp-content/uploads/2026/04/catalog-WLR-english-new-2026.pdf",
      pdfAr: "https://welovereading.org/wp-content/uploads/2026/04/Catalogue-Ar-2026.pdf"
    }
  },

  magazines: [
    {
      id: "books-mag-summer-2024",
      isPrimaryNavLink: true,
      editionEn: "Summer 2024",
      editionAr: "صيف ٢٠٢٤",
      enTitle: "We Love Reading Children Books",
      arTitle: "كتب نحن نحب القراءة",
      taglineEn: "Explore what lies beyond the pages",
      taglineAr: "اكتشف ما وراء الصفحات",
      coverEn: "assets/magazine/summer-2024-cover-en.jpg",
      coverAr: "assets/magazine/summer-2024-cover-ar.jpg",
      pdfEn: "assets/magazine/magazine-of-books-eidted-6EN-Last-version4554.pdf",
      pdfAr: "assets/magazine/WLR-Books-magazine-v-AR.6.4555.pdf",
      sourceUrlEn: "https://welovereading.org/wp-content/uploads/2024/06/magazine-of-books-eidted-6EN-Last-version4554.pdf",
      sourceUrlAr: "https://welovereading.org/wp-content/uploads/2024/06/WLR-Books-magazine-v-AR.6.4555.pdf",
      downloadNameEn: "WLR-Childrens-Books-Magazine-Summer-2024-EN.pdf",
      downloadNameAr: "WLR-Childrens-Books-Magazine-Summer-2024-AR.pdf",
      totalPages: 19,
      // Exact 35 unique books featured across Magazine pp. 5–6 in shelf order
      bookSlugs: [
        "somethings-really-strange",
        "chaos-in-the-kitchen",
        "bashour",
        "were-the-same",
        "tomorrow-i-will-be",
        "the-words-cook",
        "the-bridge-to-dreamland",
        "amal",
        "the-apple-tree",
        "kenan-and-watermelon-head",
        "the-big-envelope",
        "the-black-chicken",
        "mamas-magic",
        "queen-of-balloons",
        "the-peppered-moth",
        "um-hatta-the-cat",
        "my-brother-hany",
        "the-secret-of-the-world-of-harmony",
        "i-left-a-surprise-for-you",
        "the-golden-garden",
        "salmas-riddle",
        "questions-in-a-traveling-bag",
        "the-opened-tap",
        "the-amazing-water-hero",
        "sun-and-suns",
        "a-strange-story-in-the-fantastic-trolley",
        "why-did-electricity-run-away",
        "shafafas-enjoyable-trip",
        "zanbout",
        "a-sun-without-bills",
        "a-space-adventure-with-jasmin-and-batraa",
        "who-defeated-the-squandering-demon",
        "eid-gift",
        "i-would-like-to-introduce-you-to",
        "grannies-plan"
      ],
      featuredReviews: {
        "the-peppered-moth": {
          magPageEn: "Page 11",
          magPageAr: "صفحة ١١",
          pdfPage: 9,
          headlineEn: "The Peppered Moth: Ignites Curiosity for Exploration in Science",
          headlineAr: "«العثة المتبلة» تحرك الفضول للبحث والاستكشاف في العلوم",
          quoteEn: "“The story is rich in ideas, and its illustrations merge reality with imagination in a style that instills a love for knowledge and narrative suspense. This made children in reading sessions wonder and search for the peppered moth in the book and whether the moth is truly peppered, ultimately discovering the deeper meaning of the book.” — WLR Ambassador Amina Al-Jamil",
          quoteAr: "«القصة غنية بالأفكار وزخمة بالرسوم التي تدمج الواقع بالخيال بأسلوب حب المعرفة وعنصر التشويق السردي، الذي جعل الأطفال في جلسة القراءة يتساءلون ويبحثون عن العثة المذكورة في القصة، وهل فعلاً العثة متبلة؟ ليكتشفوا في النهاية المعنى الأكبر للقصة.» — سفيرة نحن نحب القراءة آمنة الجمل"
        },
        "queen-of-balloons": {
          magPageEn: "Page 12",
          magPageAr: "صفحة ١٢",
          pdfPage: 10,
          headlineEn: "Queen of Balloons: Stimulates Creativity and Innovation to Solve Problems",
          headlineAr: "«ملكة البالونات» تحفز الإبداع والابتكار لحل المشكلات",
          quoteEn: "“What caught my attention is that children aged 4 to 5 showed interest in the balloon game in the story, while children aged 10 to 11 focused on the plot and the scientific aspect. They wondered how the balloons were filled with water without anyone filling them… Moreover, the story enriches language skills in children and enhances their problem-solving abilities.” — WLR Ambassador Huda Abu Al-Khair",
          quoteAr: "«ما لفت انتباهي هو أن الأطفال الذين تتراوح أعمارهم بين ٤ و٥ أعوام أبدوا اهتماماً بلعبة البالونات في القصة، بينما ركز الأطفال الذين تتراوح أعمارهم بين ١٠ و١١ عاماً على الحبكة والجانب العلمي للقصة. كانوا يتساءلون عن كيفية ملء البالونات بالماء دون وجود شخص يملؤها… علاوة على ذلك، تثري القصة مهارات اللغة لدى الأطفال وتعزز قدراتهم في حل المشكلات.» — سفيرتنا هدى أبو الخير"
        },
        "the-words-cook": {
          magPageEn: "Page 13",
          magPageAr: "صفحة ١٣",
          pdfPage: 11,
          headlineEn: "The Word Cook: Changing Bullying Behavior",
          headlineAr: "قصة «طباخة الكلمات» وسيلة لتغيير سلوك التنمر",
          quoteEn: "“When the children heard how we can cook up beautiful words and their impact, as well as the impact of negative words, the story indirectly made the other child feel embarrassed and led him to apologize for his words to the teacher as well as my child when he realized the consequences of those words. At that moment, I realized the impact we can have simply by reading a book.” — WLR Ambassador Amina Al-Jamal",
          quoteAr: "«عندما سمع الأطفال كيف يمكننا طبخ الكلمات الجميلة وما هو تأثيرها، وما تأثير الكلمات السيئة بلغة الأطفال، جعلت القصة الطفل الآخر يشعر بالإحراج بشكل غير مباشر، وقرر الاعتذار عن كلماته للمعلمة ولطفلي عندما أدرك عواقب تلك الكلمات. هنا شعرت ما يمكننا فعله فقط بقراءة القصة.» — سفيرة نحن نحب القراءة آمنة الجمل"
        },
        "mamas-magic": {
          magPageEn: "Page 14",
          magPageAr: "صفحة ١٤",
          pdfPage: 12,
          headlineEn: "My Mama’s Magic: Reading Aloud as a Savior from the Depths of Challenges",
          headlineAr: "«ماما الحكواتية» القراءة كمنقذ من جوف التحديات",
          quoteEn: "“I was reading ‘My Mama’s Magic’ next to one of the children who was translating it, and I was amazed by the repetition of the same feelings and interaction when I read it to Arab children. At that moment, I felt that a child is a child, that they are similar in every society and place, despite the differences in lifestyle, the feelings are the same.” — WLR Ambassador Asmaa Al-Rashid",
          quoteAr: "«كنت أقرؤها وأحد الأطفال يترجمها وأدهشني وجود المشاعر والتفاعل ذاته عندما قرأتها للأطفال العرب، حينها شعرت أن الطفل طفل، أنهم متشابهون في كل مجتمع ومكان، بالرغم من اختلاف أسلوب الحياة، لكن المشاعر هي ذاتها.» — سفيرة نحن نحب القراءة أسماء الراشد"
        },
        "zanbout": {
          magPageEn: "Page 15",
          magPageAr: "صفحة ١٥",
          pdfPage: 13,
          headlineEn: "Zanbout: A Reading Session Full of Imagination",
          headlineAr: "«زنبوط» جلسة قراءة تعج بالخيال",
          quoteEn: "“‘Zanbout’ is one of the books that children ask to read more than once; it represents real joy during reading and inspires children through its funny sentences, striking at the center of their imagination… ‘Zanbout’ was one of the books that sparked questions in the children’s minds and taught our children to imagine and dream.” — WLR Ambassador Seba Hassa",
          quoteAr: "«من أكثر القصص التي يطلب الأطفال قراءتها أكثر من مرة، ‹زنبوط› تمثل المتعة الحقيقية خلال القراءة وتلهم الأطفال من خلال الجمل المضحكة الموجودة فيها، وتقرع على مركز خيالهم… وأهم ما تُعلمه ‹زنبوط› لأطفالنا هو القدرة على الخيال والقدرة على الحلم.» — سفيرة برنامج نحن نحب القراءة صبا حسن"
        },
        "questions-in-a-traveling-bag": {
          magPageEn: "Page 16",
          magPageAr: "صفحة ١٦",
          pdfPage: 14,
          headlineEn: "Questions in a Travel Bag",
          headlineAr: "«أسئلة في حقيبة سفر»",
          quoteEn: "“The children ask me to place the book on the floor to meditate on the detailed drawings as well as the fantastic colors, as if they would not miss anything from its illustrations and capture it through their eyes.” — WLR Ambassador Zhour Dghimat",
          quoteAr: "«إن مما يطلبه الأطفال خلال جلسة القراءة لكتاب ‹أسئلة في حقيبة سفر› على نحو خاص، وضع الكتاب على الأرض لتأمل رسوماته المليئة بالتفاصيل وألوانه الفاتنة وكأنهم لا يريدون أن يفوتهم شيء من رسوماته إلا ويرصدوه بأعينهم.» — سفيرتنا زهور دغيمات"
        },
        "tomorrow-i-will-be": {
          magPageEn: "Page 17",
          magPageAr: "صفحة ١٧",
          pdfPage: 15,
          headlineEn: "Tomorrow I Will Be: Children’s Compass Guides Them on the Path of Their Dreams",
          headlineAr: "«غداً سأكون» بوصلة للأطفال لدرب أحلامهم",
          quoteEn: "“After concluding the session with the book ‘Tomorrow I Will Be,’ the child came to me to say that he wants to become an ophthalmologist to treat my eyesight problems instead of wearing glasses. That’s when I touched the greater impact of the book.” — WLR Ambassador Jamila Abu Malham",
          quoteAr: "«بعدما انتهت الجلسة بختام كتاب ‹غداً سأكون› جاء الطفل نحوي ليقول إنه يريد أن يصبح طبيب عيون لمعالجة عيني من النظارات الطبية، حينها أدركت الأثر الأكبر للقصة، فلو أنني تحدثت إليه مراراً ربما لن يغير رأيه كما فعل الكتاب.» — سفيرة نحن نحب القراءة جميلة أبو ملحم"
        },
        "the-big-envelope": {
          magPageEn: "Page 18",
          magPageAr: "صفحة ١٨",
          pdfPage: 16,
          headlineEn: "The Big Envelope: Changes a Common Behavior in Schools",
          headlineAr: "«المغلف الكبير» كيف تساهم القراءة في التوجيه",
          quoteEn: "“Teaching children to solve their problems by themselves in a manner that is close to them and within their capabilities, away from solving problems among friends through violence, through smart and extremely friendly communication methods.” — WLR Ambassador Lena Al-Ghurair",
          quoteAr: "«تعليم الأطفال حل مشكلاتهم بأنفسهم وبطريقة تواصل قريبة منهم وضمن قدراتهم، بعيداً عن ما نشاهده من صور التربية الحالية بحل المشكلات بين الأصدقاء من خلال العنف بل بطرق تواصل ذكية وودودة للغاية.» — سفيرة القراءة لينا الغرير"
        }
      },
      contents: [
        {
          pagesEn: "pp. 3–4",
          pagesAr: "ص ٣–٤",
          pdfPage: 2,
          titleEn: "Letter from the Founder & About We Love Reading",
          titleAr: "رسالة من مؤسِّسة نحن نحب القراءة وعن البرنامج"
        },
        {
          pagesEn: "pp. 7–8",
          pagesAr: "ص ٧–٨",
          pdfPage: 6,
          titleEn: "Children’s Books Development, Arab Thought Foundation Criteria & SDGs",
          titleAr: "قسم تطوير كتب الأطفال، معايير مؤسسة الفكر العربي، وأهداف التنمية المستدامة"
        },
        {
          pagesEn: "pp. 9–10",
          pagesAr: "ص ٩–١٠",
          pdfPage: 7,
          titleEn: "We Love Reading Online Training & Impact in Research and Studies",
          titleAr: "تدريب برنامج نحن نحب القراءة عن بُعد وأثر القصص في البحوث والدراسات"
        },
        {
          pagesEn: "pp. 11–18",
          pagesAr: "ص ١١–١٨",
          pdfPage: 9,
          titleEn: "Storybook Reviews & Ambassador Voices (8 Featured Picture Books)",
          titleAr: "مراجعات القصص وتجارب سفراء القراءة (٨ قصص مصوّرة مختارة)"
        },
        {
          pagesEn: "pp. 19–21",
          pagesAr: "ص ١٩–٢١",
          pdfPage: 17,
          titleEn: "Rights of the Reader & We Love Reading’s Guide to Developing Children’s Books",
          titleAr: "حقوق القارئ ودليل نحن نحب القراءة لتطوير قصص الأطفال المصورة"
        }
      ],
      researchStudies: [
        {
          id: "env-study-2017",
          year: "2017",
          titleEn: "Reading social stories in the community: A promising intervention for promoting children’s environmental knowledge and behavior in Jordan",
          titleAr: "تقييم فعالية التدخل بالقراءة في تغيير المعرفة والسلوك البيئي لدى الأطفال في الأردن",
          url: "https://welovereading.org/wp-content/uploads/2019/12/Environment_Study_2017.pdf"
        },
        {
          id: "empathy-study-2015",
          year: "2015",
          titleEn: "Reading about people’s feelings increases empathic concern and generosity in children (University of Chicago & Hashemite University)",
          titleAr: "هل يسهّل برنامج نحن نحب القراءة على الأطفال في جعلهم أكثر سخاءً وتعاطفاً؟ (جامعة شيكاغو والجامعة الهاشمية)",
          url: "https://welovereading.org/wp-content/uploads/2019/12/Empathy-Chicago-University-2015.pdf"
        }
      ]
    }
  ],

  digitalResources: [
    {
      id: "alnqsh",
      index: "01",
      pastel: "mint",
      groupEn: "Arabic Book Discovery & Reader Reviews",
      groupAr: "اكتشاف قصص الأطفال ومراجعات القراء",
      navTitleEn: "Website containing children’s books",
      navTitleAr: "موقع يحتوي على العديد من قصص الأطفال",
      originalMenuLabelEn: "a Website Contains a lot of interesting children’s books",
      enTitle: "Alnqsh — Children’s & Young Adult Book Platform",
      arTitle: "منصة النقش (Alnqsh) لكتب وقصص الأطفال",
      enDesc: "An Arabic digital discovery platform containing hundreds of children’s books, community ratings, reader reviews, and curated reading lists — including reviews for We Love Reading’s own storybooks.",
      arDesc: "منصة عربية متخصصة تضم مئات كتب وقصص الأطفال واليافعين مع تقييمات ومراجعات القرّاء، بما في ذلك صفحات تقييم قصص «نحن نحب القراءة».",
      url: "https://alnqsh.com/",
      domain: "alnqsh.com"
    },
    {
      id: "historical-archive",
      index: "02",
      pastel: "yellow",
      groupEn: "Open-Access Historical Digital Library",
      groupAr: "الأرشيفات الرقمية التاريخية المفتوحة",
      navTitleEn: "Archive of 6,000 historical children’s books",
      navTitleAr: "أرشيف يضم 6,000 كتاب تاريخي للأطفال",
      originalMenuLabelEn: "Archive of 6,000 Historical Children’s Books, All Digitized and Free to Read Online",
      enTitle: "Archive of 6,000 Historical Children’s Books (Open Culture / UF Baldwin Library)",
      arTitle: "أرشيف 6,000 كتاب تاريخي مصوّر للأطفال — رقمية ومجانية للقراءة",
      enDesc: "A gateway via Open Culture to the Baldwin Library of Historical Children’s Literature at the University of Florida, offering more than 6,000 digitized classic illustrated children’s books free to read online.",
      arDesc: "بوابة رقمية عبر موقع Open Culture تتيح تصفح أكثر من 6,000 كتاب وقصة مصورة تاريخية للأطفال مرقمنة بالكامل ومتاحة للقراءة مجانًا عبر الإنترنت.",
      url: "http://www.openculture.com/2016/08/enter-an-archive-of-6000-historical-childrens-books-all-digitized-and-free-to-read-online.html",
      domain: "openculture.com"
    },
    {
      id: "audible-stories",
      index: "03",
      pastel: "blue",
      groupEn: "Multilingual Audio Storytelling",
      groupAr: "القصص والكتب الصوتية للأطفال",
      navTitleEn: "Audible Stories",
      navTitleAr: "كتب مسموعة مجانية للأطفال (Audible Stories)",
      originalMenuLabelEn: "Audible Stories: Free Audiobooks for Kids",
      enTitle: "Audible Stories: Free Audiobooks for Kids",
      arTitle: "قصص أوديبل المسموعة (Audible Stories)",
      enDesc: "Audio stories and spoken-word children’s classics across multiple languages, curated for young listeners, Littlest Listeners, elementary readers, and families.",
      arDesc: "مكتبة قصص وكتب صوتية موجهة للأطفال والناشئة بلغات متعددة للاستماع وتنمية الخيال السمعي واللغوي.",
      url: "https://stories.audible.com/",
      domain: "stories.audible.com"
    }
  ],

  coronavirusBooks: [
    {
      id: "who-corona",
      pastel: "blue",
      isPdf: true,
      orgEn: "World Health Organization (WHO) & IASC",
      orgAr: "منظمة الصحة العالمية (WHO) واللجنة الدائمة المشتركة بين الوكالات",
      navTitleEn: "WHO children’s book about corona",
      navTitleAr: "قصة منظمة الصحة العالمية عن كورونا",
      enTitle: "My Hero is You: How Kids Can Fight COVID-19!",
      arTitle: "بطلي هو أنت: كيف يمكن للأطفال محاربة كوفيد-19!",
      enDesc: "Developed by the Inter-Agency Standing Committee Reference Group on Mental Health and Psychosocial Support in Emergency Settings (with WHO, UNICEF, and UNHCR). Follow Sara and her friendly creature Ario around the world as children learn how to protect themselves, their families, and their friends from coronavirus while managing difficult emotions.",
      arDesc: "قصة مصورة أعدّتها منظمة الصحة العالمية واللجنة الدائمة المشتركة بين الوكالات لدعم الصحة النفسية للأطفال، ترافق الطفلة سارة وصديقها الخيالي «آريو» في رحلة حول العالم لتعلّم كيف يحمي الأطفال أنفسهم وعائلاتهم وأصدقاءهم من فيروس كورونا.",
      url: "https://interagencystandingcommittee.org/system/files/2020-04/My%20Hero%20is%20You%2C%20Storybook%20for%20Children%20on%20COVID-19.pdf",
      domain: "interagencystandingcommittee.org (PDF)"
    },
    {
      id: "pangea-corona",
      pastel: "peach",
      isPdf: false,
      orgEn: "Pangea Educational Development",
      orgAr: "مؤسسة Pangea Educational Development",
      navTitleEn: "Children’s book from Pangea Education about corona",
      navTitleAr: "قصة للأطفال عن فيروس كورونا من Pangea Education",
      enTitle: "The Unwelcome Stranger — Coronavirus Storybook by Pangea Education",
      arTitle: "الغريب غير المرحّب به (The Unwelcome Stranger) — Pangea Education",
      enDesc: "An illustrated educational children’s story created by Pangea Educational Development to explain what the coronavirus is, how germs spread, and practical everyday habits young readers can practice to keep their communities safe. (Listed in the original WLR menu under 'Children book from pangeaeducation about corona').",
      arDesc: "قصة تعليمية مصورة للأطفال أصدرتها مؤسسة Pangea Educational Development لتبسيط مفهوم فيروس كورونا وطرق الوقاية اليومية بأسلوب قصصي قريب من الأطفال.",
      url: "https://www.pangeaeducation.org/the-unwelcome-stranger",
      domain: "pangeaeducation.org"
    }
  ],

  latestBooksContent: {
    "queen-of-balloons": {
      "slug": "queen-of-balloons",
      "order": 1,
      "pastel": "yellow",
      "age": "7-10",
      "coverEn": "assets/covers/queen-of-balloons.jpg",
      "coverAr": "assets/covers/queen-of-balloons-ar.jpg",
      "wrapSpreadEn": "assets/latest/wrap-queen-of-balloons-en.jpg",
      "wrapSpreadAr": "assets/latest/wrap-queen-of-balloons-ar.jpg",
      "sdgBadges": [
        {
          "num": 6,
          "imgEn": "assets/latest/sdg-06-en.png",
          "imgAr": "assets/latest/sdg-06-ar.png"
        },
        {
          "num": 13,
          "imgEn": "assets/latest/sdg-13-en.png",
          "imgAr": "assets/latest/sdg-13-ar.png"
        }
      ],
      "en": {
        "title": "Queen of Balloons",
        "companionTitle": "ملكة البالونات",
        "theme": "Climate Change",
        "credits": [
          {
            "label": "Author",
            "value": "Lina Qtaishat"
          },
          {
            "label": "Drawings",
            "value": "Ali Ahmad Elzeny"
          },
          {
            "label": "English Writer",
            "value": "Amina Awad"
          }
        ],
        "synopsis": "In a quest to become the Queen of Balloons in her neighborhood, Ayah discovers Uncle Omar’s Shop for Magical Solutions. At first, she believes she has unlocked the secret to winning each balloon game. But Ayah ends up learning a much more valuable secret…",
        "externalActions": [
          {
            "type": "buy",
            "label": "Buy",
            "url": "https://welovereading.org/buy-our-books/",
            "style": "primary"
          },
          {
            "type": "video",
            "label": "Launching Event — Part 1",
            "url": "https://www.facebook.com/WLReading/videos/6925459297493617/",
            "style": "pastel-mint"
          },
          {
            "type": "video",
            "label": "Launching Event — Part 2",
            "url": "https://www.facebook.com/WLReading/videos/1356884788369390",
            "style": "pastel-pink"
          }
        ],
        "articles": [
          {
            "kicker": "Featured Book Release · September 20, 2023",
            "heading": "Our latest book titled “Queen of Balloons” is available now",
            "blocks": [
              {
                "type": "image",
                "src": "assets/latest/qob-feature-1.jpg",
                "alt": "Author Lina Qtaishat holding Queen of Balloons",
                "layout": "portrait"
              },
              {
                "type": "p",
                "text": "“In a quest to become the Queen of Balloons in her neighborhood, Ayah discovers Uncle Omar’s shop for magical solutions. At first, she believes she has unlocked the secret to winning each balloon game. But Ayah ends up learning a much more valuable secret”. That is what you will be discovering in the latest We Love Reading book written by author Lina Qtaishat and illustrated by Ali. Al-Zaini."
              },
              {
                "type": "p",
                "text": "The problem of water and climate change is one of the most pressing issues confronting the world today, and it opens the door to an infinite number of opportunities to find various solutions and raise awareness among adults and children in a variety of ways, which is what We Love Reading program and author Lina Qtaishat hope to accomplish in “The Queen of Balloons” book. This was recently produced and inspired by the character of Jordanian scientist Omar Munis Yaghi, a chemistry professor at Berkeley University who invented the technology of extracting water from the air. To simulate the problem of water shortage as one of the most significant future concerns in light of global climate change."
              },
              {
                "type": "p",
                "text": "In an interview with Lina Qtaishat, director of research projects and book development in the We Love Reading program, Lina is an architect and interested in the arts, she mentioned that the idea for the book came to her mind during her visit to Korea as a project manager, accompanied by Dr. Rana Dajani, founder of We Love Reading program, and during a discussion to develop a story for children. In the 2023 project, where it was determined that the overall topic of the stories would be science-related, a unique concept had to be picked in order to achieve We Love Reading’s aim of encouraging the children to read for fun."
              },
              {
                "type": "p",
                "text": "Lina remembered glimpses of her childhood, to bring herself back to being a child in the place of the reading children. In addition, she placed second in a short-story competition in school. As “Queen of Balloons” was not her first experience with writing. But the first in terms of children’s writing."
              },
              {
                "type": "image",
                "src": "assets/latest/qob-feature-2.jpg",
                "alt": "Young reader holding Queen of Balloons",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "Books as influential factor in changing behavior."
              },
              {
                "type": "p",
                "text": "Due to the importance of educating children at an early age and teaching children in an indirect or hidden manner, apart from issuing instructions, the writer attempted to avoid idealism and give advice directly, as the story focuses on an activity that children enjoy, without preventing them from doing so, but rather encourages them to research and innovate to find alternative solutions."
              },
              {
                "type": "p",
                "text": "In addition, “Queen of Balloons” included common names from the Arab world was also chosen as character names, which makes the child view himself as a character inside the book and highlights the significance of the individual and developing the child’s self-confidence in terms of developing the core character. Therefore, to emphasize short paragraphs and assonance, which made the text easy to hear, as if the child were watching a cartoon movie, a departure from standard children’s literature."
              },
              {
                "type": "image",
                "src": "assets/latest/qob-feature-3.jpg",
                "alt": "Original storyboard sketches for Queen of Balloons",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "“Reading for pleasure” is the program’s slogan."
              },
              {
                "type": "p",
                "text": "We Love Reading program takes responsibility for representing Arab identity and civilization in the content of books as well as in illustrations by depicting the Arab neighborhood and the shape of the characters, as well as the surrounding landscape."
              },
              {
                "type": "p",
                "text": "On the other hand, the program considers translating books into various languages and provides an opportunity to share Arab culture with people in other countries."
              },
              {
                "type": "p",
                "text": "In this text, the illustrator Ali Al-Zaini, who created the drawings for” Queen of Balloons,” specialized in children’s books and won the Sharjah Children’s Book Award and the Etisalat Award."
              },
              {
                "type": "p",
                "text": "Lina remarked that collaboration with painter Ali Al-Zaini helped to create this work, which achieved integration between the author’s idea and his application with his painter, and working with him was a fantastic opportunity via the details that he touched with his brush."
              },
              {
                "type": "p",
                "text": "Regardless, visual nourishment in my engineering studies is similar to my experience working with We Love Reading, which created a linguistic stock to produce “Queen of Balloons”, Lina spotted."
              },
              {
                "type": "p",
                "text": "“My Joining to We Love Reading program in 2019, and being responsible for the book development department for three years, put me in contact with writers and illustrators, and gave me a greater knowledge of children’s literature in general, in addition to my interaction with children as an ambassador, so I could see through the reading aloud sessions that I held, and this contact, as well as my experience, resulted in my enthusiasm to writing stories for children.”"
              },
              {
                "type": "image",
                "src": "assets/latest/qob-feature-4.jpg",
                "alt": "Author Lina Qtaishat presenting Queen of Balloons",
                "layout": "portrait"
              },
              {
                "type": "p",
                "text": "It is worth noting that the We Love Reading organization has developed more than 30 stories for children between the ages of 4 and 10. In topics include environmental protection, acceptance of mental and physical disabilities, refugees, anti-violence, social unity, and gender equality."
              },
              {
                "type": "p",
                "text": "Do not hesitate to obtain free online training on the digital community for We Love Reading’s ambassadors to acquire” Queen of Balloons” and other books from We Love Reading."
              },
              {
                "type": "link",
                "label": "https://wlr-community-2l1x.glide.page/dl/245b4e",
                "url": "https://wlr-community-2l1x.glide.page/dl/245b4e"
              }
            ]
          },
          {
            "kicker": "National Reading Day Launch · October 2, 2023",
            "heading": "We Love Reading program launched its latest children’s book, “Queen of Balloons” during the National Reading Day",
            "blocks": [
              {
                "type": "image",
                "src": "assets/latest/qob-launch-event.png",
                "alt": "Queen of balloons event",
                "layout": "wide"
              },
              {
                "type": "p",
                "text": "In celebration of National Reading Day, the We Love Reading program launched its latest children’s book, “Queen of Balloons,” written by Lina Qtaishat and illustrated by Ali Al-Zaini. The event featured several prominent speakers, including the Book Author and The Research Project Manager at We Love Reading(WLR), WLR Founder Prof. Rana Dajani, the Secretary of the “Climate Change and Environment Protection Association” Eng. Mary Bahdousha, and We Love Reading’s Ambassador Huda Abu Al-Khair, a teacher and volunteer in various fields."
              },
              {
                "type": "p",
                "text": "Prof. Rana Dajani highlighted the importance of diversifying the stories we read to our children, making sure they are enjoyable, captivating, and visually appealing while also reflecting our culture and reality. As children learn more effectively through stories rather than instructions and commands, “At We Love Reading, we began by creating stories with the aim of changing children’s behaviors and enriching Arabic literature.” Prof. Rana said."
              },
              {
                "type": "p",
                "text": "35 Arabic books have been produced by the We Love Now program so far, covering a wide range of topics like literacy, gender, environment, science, climate change, and more."
              },
              {
                "type": "p",
                "text": "In addition to shedding light on Arab scientists, Lina Qtaishat noted that “Queen of Balloons” intends to raise children’s awareness of the increasing temperatures and water scarcity resulting from climate change. She mentioned that the word “magic” in the story is a reference to children’s ideas which we cannot imagine, but they actually exist, so the magic is a reality."
              },
              {
                "type": "p",
                "text": "Lina described the stages of the story’s development and its inspiration, and how it all began when she was inspired during a conversation with Dr. Rana Dajani about the Jordanian scientist Omar Munther Yaghi. He sparked the idea for her, and she aimed to convey his concept to children, not through instructions and an idealized character, but in a language and manner that resonates indirectly with children.”"
              },
              {
                "type": "p",
                "text": "Qtaishat thanked the We Love Reading program for providing her an opportunity to translate her ideas onto paper and share them with the children. She followed by expressing gratitude to the painter Ali Al-Zaini, who portrayed the story with the best scenes through his illustrations."
              },
              {
                "type": "p",
                "text": "In the context of educating children about environmental issues through reading, Mary Bahdoucheh, Secretary of the Jordanian Climate Change and Environmental Protection Association, discussed the challenge of the lack of effective response to climate change issues and pointed out that the association is targeting the most vulnerable group and the most affected by climate change, which are children because they do not have enough scientific or social background on the correct behavior during disasters. So, the association created a competition that simulated the annoying behaviors of children. They found through their drawings that throwing garbage and piling up garbage bags is what bothers children the most. Following the competition, they gave environmental awareness lectures in schools with focusing on learning by playing."
              },
              {
                "type": "p",
                "text": "he first fundamental step in developing a society that is environmentally aware and conscious of the associated hazards is to focus on children,” she adds."
              },
              {
                "type": "p",
                "text": "Furthermore, to create books tailored to the unique experiences of each reader within the “We Love Reading” program, encompassing both children and program ambassadors, Ambassador Huda Abu Al-Khair shared her experience of reading the book “Queen of Balloons” with various age groups of children in her class. She also highlighted the key themes that resonated with each age group in the story."
              },
              {
                "type": "p",
                "text": "It is worth noting that last year, We Love Reading collaborated with the Jordanian Ministry of Culture for the National Reading Campaign, an initiative that was followed by the declaration of September 29th as National Reading Day."
              },
              {
                "type": "linksRow",
                "prefix": "To attend the Launching event:",
                "links": [
                  {
                    "label": "Part 1",
                    "url": "https://www.facebook.com/WLReading/videos/6925459297493617/"
                  },
                  {
                    "label": "Part 2",
                    "url": "https://www.facebook.com/WLReading/videos/1356884788369390"
                  }
                ]
              }
            ]
          }
        ]
      },
      "ar": {
        "title": "ملكة البالونات",
        "companionTitle": "Queen of Balloons",
        "theme": "المياه، والتغير المناخي",
        "credits": [
          {
            "label": "تأليف",
            "value": "لينة قطيشات"
          },
          {
            "label": "رسوم",
            "value": "علي الزيني"
          }
        ],
        "synopsis": "تكتشف آية متجر العم عمر للبالونات السحرية، فجعلها ذلك ملكة لعبة البالونات في كل الأحياء.. لكن في أحد أيام الأربعاء، وقبل بداية اللعبة بدقائق عديدة حصل مالم يكن في الحسبان!",
        "externalActions": [
          {
            "type": "buy",
            "label": "شراء",
            "url": "https://welovereading.org/ar/copy-of-buy-our-books/",
            "style": "primary"
          },
          {
            "type": "video",
            "label": "فعالية الإطلاق — الجزء الأول",
            "url": "https://www.facebook.com/WLReading/videos/6925459297493617/",
            "style": "pastel-mint"
          },
          {
            "type": "video",
            "label": "فعالية الإطلاق — الجزء الثاني",
            "url": "https://www.facebook.com/WLReading/videos/1356884788369390",
            "style": "pastel-pink"
          }
        ],
        "articles": [
          {
            "kicker": "إصدار القصة · ٢٠ سبتمبر ٢٠٢٣",
            "heading": "إصدار آخر كتبنا بعنوان “ملكة البالونات”",
            "blocks": [
              {
                "type": "image",
                "src": "assets/latest/qob-feature-1.jpg",
                "alt": "الكاتبة لينة قطيشات تحمل قصة ملكة البالونات",
                "layout": "portrait"
              },
              {
                "type": "p",
                "text": "“تكتشف آية متجر العم عمر للبالونات السحرية، فجعلها ذلك ملكة لعبة البالونات في كل الأحياء، لكن في أحد أيام الأربعاء، وقبل بداية اللعبة بدقائق عديدة، حصل مالم يكن في الحسبان” هذا ماستكتشفونه في آخر إصدارات قصص نحن نحب القراءة للكاتبة لينة قطيشات والرسام علي الزيني."
              },
              {
                "type": "p",
                "text": "تعد مشكلة المياه والتغير المناخي من واحدة من أهم المشاكل التي تؤرق العالم في الوقت الحالي، وتفتح الباب على مساحة لامتناهية من الفرص لإيجاد الحلول المتنوعة لنشر التوعية للكبار والصغار بجميع الطرق، وهذا مايهدف له برنامج نحن نحب القراءة والمؤلفة لينة قطيشات من خلال قصة “ملكة البالونات” التي صدرت مؤخراً، والمستوحاة من شخصية العالم الأردني عمر مؤنس ياغي، أستاذ الكيماء في جامعة بيركلي، والذي ابتكر تقنية التقاط الماء من الهواء، لتحاكي مشكلة شح المياه كواحدة من أهم التحديات المستقبلية في ظل تغير المناخ العالمي."
              },
              {
                "type": "p",
                "text": "في حديث مع لينة قطيشات مديرة المشاريع البحثية وتطوير القصص في برنامج نحن نحب القراءة، مهندسة معمارية ومهتمة بكل مايتعلق بالفنون، ذكرت أن فكرة القصة لمعت في ذهنها أثناء زيارتها لكوريا كمديرة مشروع برفقة الدكتورة رنا الدجاني مؤسسة برنامج نحن نحب القراءة، وخلال مناقشة لتطوير قصة للأطفال في مشروع عام 2023، حيث تقرر هذا العام أن يكون الموضوع العام للقصص متعلقاً بالعلوم، وكان لابد من اختيار فكرة مبتكرة وذلك سعياً لتحقيق هدف نحن نحب القراءة في جعل الأطفال يقرأون من أجل الاستمتاع."
              },
              {
                "type": "p",
                "text": "حيث تذكرت لينة لمحات من طفولتها، وتذكرت لعبة البالونات التي كانت تتم في اليوم المفتوح في المدرسة، لتعيد نفسها طفلة مكان الأطفال القراء، وأشارت لينة أنها قد فازت بالمركز الثاني عن مسابقة القصة القصيرة في المدرسة حيث لم تكن” ملكة البالونات” التجربة الأولى لها بالكتابة لكنها الأولى من حيث الكتابة للأطفال."
              },
              {
                "type": "image",
                "src": "assets/latest/qob-feature-2.jpg",
                "alt": "طفلة تحمل قصة ملكة البالونات",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "القصص كعامل مؤثر في تغيير السلوك"
              },
              {
                "type": "p",
                "text": "نظراً لأهمية توعية الأطفال بأعمار مبكرة وبطريقة غير مباشرة أو مبطنة بعيداً عن إصدار التعليمات والأوامر، حاولت الكاتبة البعد عن المثالية وإعطاء النصيحة بشكل مباشر، حيث تركز القصة على نشاط محبب للأطفال، بدون منعهم من القيام به بل تشجعهم على البحث والابتكار لإيجاد حلول بديلة."
              },
              {
                "type": "p",
                "text": "كما تم اختيار أسماء شائعة في عالمنا العربي كأسماء للشخصيات وذلك حتى يستطيع الطفل أن يرى نفسه شخصية داخل القصة تجعل الطفل يرى نفسه شخصية داخل القصة، أيضا ركزت القصة على الفقرات القصيرة والسجع مما جعل النص مريح للسمع وكأن الطفل يشاهد فيلم كرتوني بعيدا عن الكتابة التقليدية للأطفال."
              },
              {
                "type": "p",
                "text": "وتشير قطيشات أن القصة تؤكد على أهمية الفرد وبناء الثقة بالنفس لدى الطفل من حيث بناء الشخصية الأساسية في القصة وصفاتها وكسر التقليد، ببناء شخصية مستقلة ومتينة لدى الطفل."
              },
              {
                "type": "image",
                "src": "assets/latest/qob-feature-3.jpg",
                "alt": "مخططات رسوم قصة ملكة البالونات",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "“القراءة من أجل المتعة” شعار نحن نحب القراءة"
              },
              {
                "type": "p",
                "text": "يهتم برنامج نحن نحب القراءة بعكس الهوية والحضارة العربية في رسومات القصص، وذلك من خلال إظهار الحارة العربية وشكل الشخصيات بالإضافة غلى البيئة المحيطة."
              },
              {
                "type": "p",
                "text": "حيث كما يعتبر برنامج نحن نحب القراءة ترجمة القصص للغات أخرى فرصة لمشاركة الثقافة العربية مع الدول الأخرى."
              },
              {
                "type": "p",
                "text": "وقد قام بإنتاج الرسومات الخاصة بالقصة الرسام علي الزيني وهو رسام متخصص في قصص الأطفال وحاصل على جائزة “الشارقة لكتاب الطفل” و”جائزة اتصالات”."
              },
              {
                "type": "p",
                "text": "وتذكر لينة أن التعاون مع الرسام علي الزيني شكل هذا العمل الذي حقق التكامل بين خيال الكاتب وتطبيقه بألوان الرسام، وأن العمل معه كان فرصة كبيرة من خلال التفاصيل التي أضافها بريشته."
              },
              {
                "type": "p",
                "text": "في هذا الصدد ذكرت لينة أن التغذية البصرية في دراستها للهندسة مشابهة لتجربتها بالعمل مع نحن نحب القراءة الذي كون لديها مخزون خرج منه” ملكة البالونات”."
              },
              {
                "type": "p",
                "text": "تقول لينة: “انضمامي لبرنامج نحن نحب القراءة عام 2019 ، وكوني المسؤولة عن قسم تطوير الكتب لمدة ثلاث سنوات، وضعني بمحطة احتكاك مع الكتاب والرسامين ومنحني إطلاع أكبر على أدب الاطفال بشكل عام عدا عن احتكاكي مع الأطفال كسفيرة فكنت أرى بجلسات القراءة التي أعقدها بصوت عال للأطفال تعابيرهم على كل قصة، فنتج عن هذا الاحتكاك وعصارة التجربة الحماسة لدي لكتابة قصص للأطفال”."
              },
              {
                "type": "image",
                "src": "assets/latest/qob-feature-4.jpg",
                "alt": "الكاتبة لينة قطيشات تعرض قصة ملكة البالونات",
                "layout": "portrait"
              },
              {
                "type": "p",
                "text": "يذكر أن برنامج نحن نحب القراءة طور أكثر من 35 قصة للأطفال للأعمار بين 4 و10 سنوات، في مواضيع متعددة وهادفة كحماية البيئة، وتقبل الإعاقات العقلية والجسدية، واللاجئين، ومناهضة العنف، والوحدة الاجتماعية، والمساواة بين الجنسين."
              },
              {
                "type": "p",
                "text": "للحصول على “ملكة البالونات” وكتب أخرى من نحن نحب القراءة لا تتردوا في حضور التدريب المجاني عبر المجتمع الرقمي لسفراء نحن نحب القراءة."
              }
            ]
          },
          {
            "kicker": "فعالية الإطلاق في يوم القراءة الوطني · ٢ أكتوبر ٢٠٢٣",
            "heading": "إطلاق آخر قصص نحن نحب القراءة بعنوان ملكة البالونات في يوم القراءة الوطني",
            "blocks": [
              {
                "type": "image",
                "src": "assets/latest/qob-launch-event.png",
                "alt": "فعالية إطلاق قصة ملكة البالونات",
                "layout": "wide"
              },
              {
                "type": "p",
                "text": "احتفالاً باليوم الوطني للقراءة، أطلق برنامح نحن نحب القراءة آخر إصدار من قصصه “قصة ملكة البالونات” للمؤلفة لينة قطيشات، والرسام علي الزيني، بحضور كل من المتحدثين، د. رنا الدجاني مؤسسة نحن نحب القراءة وأمينة سر جمعية التغير المناخي وحماية البيئة الأردنية ماري بحدوشة والمهندسة لينة قطيشات مؤلفة القصة ومديرة المشاريع البحثية في نحن نحب القراءة، والسفيرة هدى أبو الخير معلمة ومتطوعة في أكثر من مجال."
              },
              {
                "type": "p",
                "text": "وسلطت الدكتورة رنا الدجاني الضوء على أهمية تنوع القصص التي نقرأها لأطفالنا وأن تكون ممتعة وشيقة وجذابة برسوماتها وبلغتنا الأم ومن واقعنا وذلك لأننا نتعلم من خلال القصص أكثر من التعليمات والأوامر، حيث بدأ نحن نحب القراءة بتأليف قصص تهدف لتغيير سلوكيات الأطفال وتثري الأدب العربي."
              },
              {
                "type": "p",
                "text": "أنتج برنامج نحن نحب القراءة للآن 35 قصة باللغة العربية بمواضيع متعددة ومتعلقة بالجندروالبيئة والعلوم وغيرها من المواضيع."
              },
              {
                "type": "p",
                "text": "ولفتت كاتبة القصة لينة قطيشات أن القصة تهدف لنشر التوعية بين الأطفال حول ارتفاع درجات الحرارة وقلة المياه بسبب التغير المناخي، وتسلط الضوء على العلماء العرب وذكرت أن كلمة” سحرية ” في القصة هي إشارة لأفكارالأطفال التي لا نتخيل وجودها إلا أنها موجودة فعلا وبإمكاننا خلقها فكلمة سحرية هي حقيقة، وناقشت لينة مراحل تطور القصة وانطلاق شرارتها عندما ألهمها حديث بينها وبين الدكتورة رنا الدجاني عن العالم الأردني عمر مؤنس ياغي الذي أوحى لها بالقصة، لتنقل فكرتها للأطفال ليس من خلال تعليمات وشخصية مثالية بل بلغة الأطفال وبطريقة غير مباشرة."
              },
              {
                "type": "p",
                "text": "من جانبها شكرت قطيشات برنامج نحن نحب القراءة على هذه الفرصة التي ترجمت فكرتها على الورق ونقلتها للأطفال، و واصلت شكرها للرسام علي الزيني الذي نقل القصة بأفضل مشهد من خلال رسوماته."
              },
              {
                "type": "p",
                "text": "وفي سياق توعية الأطفال حول البيئة من خلال القراءة ، ناقشت ماري بحدوشة أمينة سر جمعية التغير المناخي وحماية البيئة الأردنية تحدي عدم الاستجابة الفعالة لمواضيع التغير المناخي، وأشارت لتوجه الجمعية لأضعف وأكثر فئة متأثرة بالتغير المناخي وهم الأطفال لعدم امتلاكهم الخلفية العلمية أو الاجتماعية حول التصرف الصحيح أثناء الكوارث، ومن هذا المنطلق أوجدت الجمعية مسابقة تحاكي السلوكيات المزعجة للأطفال ووجدوا من خلال رسوماتهم أن رمي القمامة وأكياس النفايات المتكدسة من أكثر ما يزعج الأطفال، وقاموا على إثر المسابقة بإعطاء محاضرات توعوية في المدارس تركز على التعلم من خلال اللعب بمواضيع متعلقة بالبيئة."
              },
              {
                "type": "p",
                "text": "ولفتت بحدوشة أن التوجه لهذا الفئة هو بمثابة بناء اللبنة الأولى لتنشئة مجتمع متفهم لقضايا البيئة ومخاطرها."
              },
              {
                "type": "p",
                "text": "كما شاركتنا السفيرة هدى أبو الخير تجربتها بجلسة قراءة قصة ملكة البالونات داخل صفها ولفئات عمرية متعددة وعن أبرز المحاور التي لفتت انتباه كل فئة عمرية بالقصة للعمل على تطوير قصص مبنية على تجارب كل من آراء قراء قصص برنامج نحن نحب القراءة من الأطفال وسفراء وسفيرات البرنامج."
              },
              {
                "type": "p",
                "text": "من الجدير بالذكر أن منصة نحن نحب القراءة أطلقت العام الماضي بالتعاون مع وزارة الثقافة، كما قام دولة رئيس الوزراء بتحديد 29 من شهر سبتمبر من كل عام ليكون اليوم الوطني للقراءة."
              },
              {
                "type": "linksRow",
                "prefix": "لحضور فعالية الإطلاق:",
                "links": [
                  {
                    "label": "الجزء الأول",
                    "url": "https://www.facebook.com/WLReading/videos/6925459297493617/"
                  },
                  {
                    "label": "الجزء الثاني",
                    "url": "https://www.facebook.com/WLReading/videos/1356884788369390"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "the-peppered-moth": {
      "slug": "the-peppered-moth",
      "order": 2,
      "pastel": "mint",
      "age": "7-10",
      "coverEn": "assets/covers/the-peppered-moth.jpg",
      "coverAr": "assets/covers/the-peppered-moth-ar.jpg",
      "wrapSpreadEn": "assets/latest/wrap-the-peppered-moth-en.jpg",
      "wrapSpreadAr": "assets/latest/wrap-the-peppered-moth-ar.jpg",
      "sdgBadges": [
        {
          "num": 13,
          "imgEn": "assets/latest/sdg-13-pm-en.png",
          "imgAr": "assets/latest/sdg-13-pm-ar.png"
        },
        {
          "num": 15,
          "imgEn": "assets/latest/sdg-15-en.png",
          "imgAr": "assets/latest/sdg-15-ar.png"
        }
      ],
      "en": {
        "title": "The Peppered Moth",
        "companionTitle": "العُثة المتبلة",
        "theme": "Climate Change",
        "credits": [
          {
            "label": "Author",
            "value": "Rana Dajani"
          },
          {
            "label": "Drawings",
            "value": "Ali Al-Zaini"
          }
        ],
        "synopsis": "Salma is very curious. Salma wants to know what is happening to the peppered moths on the trees in her garden. Let’s join Salma on her journey of discovery.",
        "externalActions": [
          {
            "type": "buy",
            "label": "Buy",
            "url": "https://welovereading.org/buy-our-books/",
            "style": "primary"
          }
        ],
        "articles": [
          {
            "kicker": "Official Book Launch & Reviews · November 8, 2023",
            "heading": "We Love Reading launches it’s latest book “The Peppered Moth”",
            "blocks": [
              {
                "type": "image",
                "src": "assets/latest/pm-launch-en.jpg",
                "alt": "The peppered moth",
                "layout": "wide"
              },
              {
                "type": "p",
                "text": "“Salma is very curious. Salma wants to know what is happening to the peppered moths on the trees in her garden. Let’s join Salma on her journey of discovery."
              },
              {
                "type": "p",
                "text": "Join Salma in her fun adventure in nature in “The Peppered Moth”, the latest WLR children’s book and the first children’s book by Prof. Rana Dajani the Founder of We Love Reading, illustrated by Ali Al-Zaini, translating and editing to Arabic Language by Nada Abu Al-Zahab."
              },
              {
                "type": "p",
                "text": "Recently The We Love Reading program has launched “The Peppered Moth”, a book that was recently published under the environment and biodiversity theme. The event featured Prof. Rana Dajani and Nada Abu Al-Zahab as speakers, along with a number of We Love Reading ambassadors. Dajani began the event with a moment of silence in respect for the innocent souls we lost in the Gaza war and invited everyone to support them with what they can do."
              },
              {
                "type": "p",
                "text": "She emphasized the importance of WLR work and added that “read” was the first word revealed in the Holy Quran, not only to untie the handwriting but to learn and critique and to make a voice that allows us to communicate our identity and culture to the world, and through our role in spreading reading and encouraging writing, we will create a generation that loves reading and who can distinguish between true news and fake ones."
              },
              {
                "type": "p",
                "text": "“The Peppered Moth” is a dream that I wasn’t able to pursue due to circumstances, and now is the time to highlight the importance of understanding organisms and their natural diversity, as well as the process of evolution and coexistence with other organisms. The book is inspired by a group of people even if I had the main idea, purpose, and the general perspective of the book, but the brainstorming sessions and the exchange of ideas with others was crucial in promoting its creativity”. Dajani says. In addition, she expresses her gratitude to those who contributed to the book."
              },
              {
                "type": "p",
                "text": "“The choice of the story’s title was intended to teach children new things in science and encourage them to search for and learn about this name” Dajani noted, emphasizing the significance of not spoon-feeding children with all the information, but instead, creating an environment that fosters critical thinking and imagination. Over-explaining during the reading session can hamper their journey of discovery and deprive them of the enjoyment and thrill of guessing and searching."
              },
              {
                "type": "p",
                "text": "Nada Abu Al-Zahab expressed her gratitude for being part of this work, particularly because it involves the topic of climate change, which is one of the least discussed topics in children’s books. “The Peppered Moth” is a story that combines science and literature, characterized by its inclusiveness. Although it is a scientific story, it is presented in a literary narrative style that simplifies complex themes for children, making them interested and creative to stimulate their curiosity to learn more about the subject. Its drawings also contain unwritten words that provide more information than the text, which encourages the reader to reach their own conclusions, observe, analyze, and connect images and words. Abu Al-Zahab is a children’s literature author and a mother of two with an early childhood education certificate, who is passionate about writing children’s stories and empowering the children to discover themselves."
              },
              {
                "type": "p",
                "text": "A group of ambassadors have shared their experiences and children’s reviews after reading sessions. “The book is filled with ideas and illustrations that convey real events in a storytelling style that is curious and demonstrates a love of knowledge, leaving children to wonder and look for the moth that is mentioned in the book. Is the moth really peppered? To finally discover the big meaning beyond the story”, Amna Al-Jamal pointed out."
              },
              {
                "type": "p",
                "text": "Lina Rafe’ We Love Reading ambassador, shared her comments about the quality of stories in the program and the process of producing them with simple words and engaging topics addressed. She shared her experience in holding reading sessions for disabled children and how they were able to understand and enjoy the books like other children. This is the most significant evidence that reflects the splendor of stories and their smoothness in delivering the message in a way that any child can enjoy."
              },
              {
                "type": "p",
                "text": "Jameela Abu Melhem stated that the book’s character structure, which is based on fiction and thought-provoking content, aims to encourage children to explore and discover solutions related to environmental pollution. It also teaches them new ways of thinking and problem-solving."
              },
              {
                "type": "p",
                "text": "In this context, Lina Qutaishat, the Manager of Books Development at WLR, explained that the process of producing books involves multiple stages. Some of these stages involve selecting appropriate age groups, as well as ensuring the use of new words and to what extent we can utilize new words to expose children to them. In addition, the sentence construction, and editing are reviewed by language specialists. Additionally, psychologists also review the content of the books to ensure that it does not cause any psychological harm to children in any way, by not using words that may be harmful or presenting ideas or psychological dimensions that are inappropriate for certain age groups."
              },
              {
                "type": "p",
                "text": "Nada Abu Al-Zahab stated that reading and writing are two sides of the same coin, and reading is a divine matter that cannot be underestimated, we need institutions such as the We Love Reading approach that demonstrate the importance of reading and how it is not an optional thing for a person. Rather, a person won’t evolve enough without reading."
              },
              {
                "type": "p",
                "text": "Prof. Rana concluded that the writing should come from the heart of the author who is passionate about writing, and writing either for adults or young readers it’s a means of having a conversation between the writer and the reader. Additionally, the writing should aim to inspire and motivate other writers to produce more literature, ultimately promoting reading at all times."
              }
            ]
          }
        ]
      },
      "ar": {
        "title": "العُثة المتبلة",
        "companionTitle": "The Peppered Moth",
        "theme": "التغير المناخي",
        "credits": [
          {
            "label": "تأليف",
            "value": "د. رنا الدجاني"
          },
          {
            "label": "رسوم",
            "value": "علي الزيني"
          },
          {
            "label": "ترجمة",
            "value": "ندى أبو الذهب"
          }
        ],
        "synopsis": "شيٌ عجيب يحدث في عالم سلمى، تغير ألوان العُثَث والأشجار حتى لون ملابسها ونظاراتها! فهل تكتشف سلمى السبب؟",
        "externalActions": [
          {
            "type": "buy",
            "label": "شراء",
            "url": "https://welovereading.org/ar/copy-of-buy-our-books/",
            "style": "primary"
          }
        ],
        "articles": [
          {
            "kicker": "فعالية إطلاق القصة وتجارب القراء · ٨ نوفمبر ٢٠٢٣",
            "heading": "نحن نحب القراءة تطلق آخر إصداراتها بعنوان العثة المتبلة",
            "blocks": [
              {
                "type": "image",
                "src": "assets/latest/pm-launch-ar.jpg",
                "alt": "العثة المتبلة",
                "layout": "wide"
              },
              {
                "type": "p",
                "text": "شيء عجيب يحدث في عالم سلمى، تغير لون العثث، والأشجار، حتى لون ملابسها ونظارتها!"
              },
              {
                "type": "p",
                "text": "فهل تكتشف سلمى السبب؟”"
              },
              {
                "type": "p",
                "text": "اكتشفوا سببب تلك العجائب مع سلمى في قصة “العثة المتبلة” أخر إصدارات برنامج نحن نحب القراءة وأول كتاب للطفل لمؤسسة نحن نحب القراءة الدكتورة رنا الدجاني، رسم علي الزيني، ترجمتها وحررتها باللغة العربية: ندى أبو الذهب."
              },
              {
                "type": "p",
                "text": "عقد برنامج نحن نحب القراءة فعالية إطلاق قصة “العثة المتبلة” التي صدرت مؤخراً تحت فئة البيئة والتنوع الحيوي، وحضر الفعالية كل من الدكتورة رنا الدجاني والكاتبة ندى أبو الذهب ومجموعة من السفراء نحن نحب القراءة، بدأت الفعالية بدقيقة صمت على أرواح الشهداء والأبرياء في مدينة غزة ودعت الدكتورة رنا بالدعاء ومساندتهم كل منا ضمن إمكانياته وذكرت دورهم بالدفاع ليس فقط عن قضاياهم بل جميع الأمة الإسلامية ومايفعلونه لإنقاذ العالم من مستقبل مقيد."
              },
              {
                "type": "p",
                "text": "وأكدت على أهمية عمل برنامج نحن نحب القراءة في هذه الأيام وهو أن نقرأ، وفعل” أقرأ” أول كلمة نزلت في القران الكريم، ليس فقط لأجل فك الخط بل للتعلم والنقد ولنصنع صوت نقف به من خلال هويتنا وثقافتنا أمام العالم، ومن خلال دورنا في نشر القراءة والتشجيع على الكتابة سننشئ جيلاً قائماً على حب القراءة لديه الوعي بالأخبار الكاذبة من الصحيحة."
              },
              {
                "type": "p",
                "text": "وأشارت الدكتورة رنا أن “العثة المتبلة هي حلم لم تشأ الظروف لكتابتها واليوم جاء الوقت المناسب لأكتب للأطفال عن الكائنات الحية والتنوع الطبيعي وكيف تتطور الكائنات وكيف نعيش نحن بتناغم مع الحياة ومع بعض ومع الكائنات الحية المختلفة، وبالطبع القصة كانت إلهام من مجموعة من الناس، بالرغم من وجود الفكرة والمنظور العام والهدف إلا أن أي عمل ليزداد إبداعا بحاجة لوجود عصف ذهني وتبادل الأفكار مع الأخرين، وأشكر على ذلك كل من شارك بإنتاج هذه القصة، وتضيف الدجاني: “من منطلق تشجيع الطفل على التفكير النقدي جاءت القصة كمشوار يعيشه الطفل من واقع حقيقي من يومه.”"
              },
              {
                "type": "p",
                "text": "حيث نوهت الدجاني أن اختيار عنوان القصة جاء ليعلم الأطفال كل جديد في العلوم ويدفعه للبحث عن هذا الاسم والتعرف عليه، وتؤكد على فلسفة الإبهام في القراءة للأطفال بعدم تفسير كل شيء في القصص والصحيح أن نخلق مساحة للأطفال للتفكير والتخيل وتفسير الكلمات أثناء القراءة يقطع عنهم رحلة الاستكشاف ويسرق المتعة بينما يحرك التخمين والتفتيش الفضول بداخلهم."
              },
              {
                "type": "p",
                "text": "وأعربت ندى أبو الذهب عن امتنناها للمشاركة في هذا العمل المتعلق بالبيئة وهو من أكثر المواضيع التي لا تتوافر كتب كافية عنها، وذكرت أن “العثة المتبلة” تتميز بشمولها العلم والأدب فبالرغم من أنها قصة علمية إلا أنها مطروحة بأسلوب أدبي سردي وبالرغم من أن مواضيع القصة عملاقة ومتشعبة إلا أنه تم تبسيطها بحيث لا تكون تلقينية بل تحوي جانب إبداعي وتشويقي لتحفيز الفضول لدى الطفل لمعرفة المزيد عن الموضوع وماذا سيحدث لاحقاً في القصة حتى النهاية، ولاتكفي قراءتها مرة أو مرتين، بالإضافة لرسوماتها التي يمكن من خلالها استنباط معلومات أكثر من المعلومات الموجودة في النص نفسه، مما يشجع استنتاج الحقائق وتحفيز الملاحظة والتحليل والربط بين الصورة والكلمة، يذكر أن أبو الذهب كاتبة في أدب الطفل وأم لطفلين، حاصلة على شهادة تربية في الطفولة المبكرة، شغوفة بكتابة قصص الأطفال وتسعى من خلالها لتمكينهم لاكتشاف ذواتهم."
              },
              {
                "type": "p",
                "text": "وشاركت مجموعة من السفراء والسفيرات ممن حصلوا على القصة أرائهم وأراء الاطفال بعد جلسة القراءة، منهم السفيرة أمنة الجمل حيث قالت: “القصة غنية بالأفكار وزخمة بالرسومات التي تدمج الواقع بالخيال بأسلوب حب المعرفة وعنصر التشويق السردي، الذي جعل الأطفال في جلسة القراءة يتساءلون و يبحثون عن العثة المذكورة في القصة، وهل فعلا العثة متبلة؟ ليكتشفوا في النهاية المعنى الأكبر للقصة”."
              },
              {
                "type": "p",
                "text": "وأبدت سفيرة البرنامج لينا رافع ملاحظتها حول جودة القصص في برنامج نحن نحب القراءة وعملية إنتاجها من بساطة الكلمات وجودة الرسومات والمواضيع المتناولة وتروي حول جلساتها لذوي الاحتياجات الخاصة وقدرتهم على فهم القصة والاستمتاع بها كالأطفال الأخرين وهذا أكبر دليل يعكس روعة القصص وسلاستها بإيصال الرسالة بطريقة يستوعبها أي طفل."
              },
              {
                "type": "p",
                "text": "“إن بناء الشخصية في القصة بشكل قائم على الفكر والخيال و السعي للبحث والاستكشاف وطرح الاحتمالات المتعلقة بالتلوث البيئي، تعلم الطفل أساليب وطرق جديدة للتفكير بالمشاكل وحلولها” هذا ماقالته السفيرة جميلة أبو ملحم في محافظة جرش."
              },
              {
                "type": "p",
                "text": "وفي هذا السياق تذكر المهندسة لينة قطيشات مديرة تطوير القصص في برنامج نحن نحب القراءة، أن عملية إنتاج القصص في البرنامج تمر بعدة مراحل من أهمها: عرض القصة على مختصي اللغة لتحديد الفئة العمرية المستهدفة والكلمات المستخدمة لكل فئة ولأي مدى يمكن إضافة مفردات جديدة، بحكم انه من غير الطبيعي عدم تعريض الطفل لمفردات جديدة لكن كيفية طرحها والتركيبة اللغوية والتحرير وهيكلة الجمل هي مايحددها مختصي اللغة، إلى جانب عرضها على خبراء نفسيين للتأكد من أن محتوى القصة لايضر بأي شكل من الأشكال العامل النفسي لدى الطفل كإستخدام كلمات لها وقع نفسي أو مفاهيم وأساليب تربوية غير مناسبة لفئة عمرية معينة وتبني الحذر بالأفكار المطروحة وأبعادها النفسية."
              },
              {
                "type": "p",
                "text": "وذكرت ندى أبو الذهب أن القراءة والكتابة وجهين لعملة واحدة و القراءة هي أمر الهي لا يستهان به ونحن بحاجة لمؤسسات مثل فكر نحن نحب القراءة ومثل هذه المبادرات التي تنهض وتبين أهمية القراءة، وأنها ليست بالشيء الاختياري للإنسان بل الإنسان لا ينهض إلا بالقراءة."
              },
              {
                "type": "p",
                "text": "و تختم الدكتورة رنا بأن الكتابة تأتي من القلب وتنبع من كون الكاتب يحب مايكتب عنه ويريد نشره ولديه فكرة يريد إيصالها للأطفال، وأن الكتابة سواء للكبار و للصغار هي بمثابة حديث مع من أمامنا، ومحاولات نشجع من خلالها كتاب أكثر لنملك أدب أكثر وبالتالي نشجع القراءة على الدوام."
              }
            ]
          }
        ]
      }
    },
    "shells-of-freedom": {
      "slug": "shells-of-freedom",
      "order": 3,
      "pastel": "blue",
      "age": "7-10",
      "coverEn": "assets/covers/shells-of-freedom.jpg",
      "coverAr": "assets/covers/shells-of-freedom-ar.jpg",
      "wrapSpreadEn": "assets/latest/sof-hero-bg-en.png",
      "wrapSpreadAr": "assets/latest/sof-hero-bg-ar.png",
      "sdgBadges": [
        {
          "num": 3,
          "imgEn": "assets/latest/sdg-03-en.png",
          "imgAr": "assets/latest/sdg-03-ar.png"
        },
        {
          "num": 16,
          "imgEn": "assets/latest/sdg-16-en.png",
          "imgAr": "assets/latest/sdg-16-ar.png"
        }
      ],
      "en": {
        "title": "Shells of Freedom",
        "companionTitle": "صَدَفَاتُ الحُرِّيَّة",
        "theme": "Non-Violence",
        "credits": [
          {
            "label": "Story by",
            "value": "Mohammad Aeshan"
          },
          {
            "label": "Writer",
            "value": "Amina Awad"
          },
          {
            "label": "Illustrations",
            "value": "Aly Elziny"
          }
        ],
        "synopsis": "Salah and Maryam gather seashells, dreaming of a life bigger than genocide, siege and sorrow. When their cat “Mishmish” slips behind the iron fence, they rush after him with small, fearless hearts.",
        "externalActions": [
          {
            "type": "buy",
            "label": "Buy",
            "url": "https://welovereading.org/buy-our-books/",
            "style": "primary"
          }
        ],
        "articles": [
          {
            "kicker": "About the Story · Shells of Freedom",
            "heading": "Shells of Freedom",
            "blocks": [
              {
                "type": "p",
                "text": "This story is inspired by the real experiences of children and families in Palestine during the genocidal war on Gaza. It shines a light on their suffering and courage in the face of fear and destruction—and on the hope that continues to take root despite the pain."
              },
              {
                "type": "p",
                "text": "The characters in this story are drawn from real heroes who left their mark on the land of Palestine: from the martyred journalist Maryam Abu Daqqa, who wielded words and a camera as weapons for truth, to the teachers who continued educating children in tents, and the medics who risked their lives to save others. Every name in this story carries a true account of steadfastness, compassion, and an unyielding will to live."
              },
              {
                "type": "p",
                "text": "From Gaza to the world, the voice of this story travels through the We Love Reading program, now present in more than 78 countries. Through this program, children across the globe have brought Palestinian stories into their little libraries and shared feelings of love and solidarity with the children of Gaza in many ways: through prayer, through words, and through art."
              }
            ]
          },
          {
            "kicker": "Story Inspiration & Real-Life Heroes · November 20, 2025",
            "heading": "From Gaza… to the world",
            "blocks": [
              {
                "type": "image",
                "src": "assets/latest/sof-01-freepalestine-en.png",
                "alt": "From Gaza to the world — Free Palestine illustration",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "The Child Mariam"
              },
              {
                "type": "p",
                "text": "Her name is inspired by the journalist Maryam Abu Daqqa, who was martyred during the genocidal war on Gaza on 25 August 2025, when the occupying army bombed and targeted the emergency department at Nasser Medical Complex in Khan Younis, southern Gaza."
              },
              {
                "type": "p",
                "text": "Journalist Maryam Abu Daqqa was 33 years old. Over her professional career, she worked as a freelance photojournalist and field correspondent with several media organizations. She was known for her profound humanity. She was the mother of a boy, about 13 years old, named Ghaith, and had once donated a kidney to save her father without hesitation."
              },
              {
                "type": "p",
                "text": "Maryam, the daughter of Gaza and an icon of free speech, embodied through her courage and resolve the true image of the Palestinian journalist who conveys the truth despite every risk. She dedicated her life to defending her people’s cause and stood on the ground as a witness to both pain and hope, wielding her pen and camera as weapons against injustice and blackout. She departed as a martyr to human and professional duty, remaining a symbol of steadfast journalism and an unbreakable will. Her message lives on in Palestine’s memory and in all who believe in freedom."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-02-childsalah.png",
                "alt": "Illustration of Mariam and children on the Gaza beach with Mishmish",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "The Child Salah; A Name Inspired by Salah Al-Dein Al-Ayyubi"
              },
              {
                "type": "p",
                "text": "Salah Al-Dein Al-Ayyubi (Saladin) was a renowned Muslim leader born in 1137 in Tikrit, Iraq. Celebrated for his bravery, justice, and wisdom, he became Sultan of Egypt and Syria. His greatest achievement was confronting the Crusaders who occupied large parts of Palestinian especially Jerusalem. In 1187, he led his army and opened Jerusalem after the famous Battle of Hattin, without killing the city inhabitants, demonstrating mercy that made him a symbol of justice and courage. His leadership helped unite much of the Muslim world in his era, and Palestine was central to his focus, as he sought its return to just and secure rule."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-03-teachers.png",
                "alt": "Illustration of Salah holding Mishmish near the fence",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "Teachers in Palestine"
              },
              {
                "type": "p",
                "text": "Amid the devastation left by the assault on Gaza, the teacher Ahmad Al -Najjar stands as an example of resilience and insistence on life. Ahmad taught Arabic at a UNRWA school that was completely destroyed in the bombardment. Despite losing his home and being displaced with his family to a temporary camp, he did not abandon his educational mission. He gathered children beneath a small tent, using scattered scraps of paper and remnants of boards to explain lessons and read stories, trying to give them a moment of safety amid fear and ruin. We teach them so the occupation does not steal their dreams twice, Ahmad says, once when it demolishes our homes, and again when it kills hope within us. His story represents thousands of Palestinian teachers who continue teaching through their wounds, believing that the word is stronger than war and that education is a form of resistance."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-04-paramedics.png",
                "alt": "Illustration of Palestinian teacher teaching children",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "Paramedics in Palestine"
              },
              {
                "type": "p",
                "text": "In Gaza shattered streets, paramedics work under bombardment as soldiers of humanity, armed only with bandages and an unwavering resolve to save lives. Since the start of the latest assault, their work has become nearly impossible amid fuel shortages, the collapse of the health system, and the targeting of ambulances themselves. Yet they continue moving toward strike sites to pull the wounded from beneath the rubble, fully aware their lives are at risk at every moment. Many have lost colleagues or family members while on duty, but they refuse to stop. When we reach an injured child and save them, says paramedic Samar Al-Shafie, we feel we have defeated death if only for a moment. These paramedics are Gaza last line of defense for life, embodying courage and the deep conviction that saving one person is, in itself, resistance in the face of genocide."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-05-aboutpalestine.png",
                "alt": "Illustration of children searching amid rubble in Gaza",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "About Palestine"
              },
              {
                "type": "p",
                "text": "Over the past two years, Palestine has witnessed an unprecedented escalation in the occupation crimes against the Palestinian people, culminating in genocide and the wide scale assault on the Gaza Strip since October 2023. The occupation perpetrated systematic acts of extermination including the bombing of residential neighborhoods, hospitals, schools, and refugee camp resulting in the martyrdom of tens of thousands of civilians, most of them women and children, and widespread destruction of infrastructure. These crimes were not merely military operations, but the continuation of colonial policies aimed at uprooting Palestinians from their land and imposing a new demographic reality. In the West Bank, settler attacks backed by the occupation army intensified, with settlement expansion, land confiscation, and home demolitions. Despite broad international condemnation, the occupation continues to enjoy political and military protection from some major powers, deepening Palestinian suffering and entrenching a colonial reality that threatens Palestinian existence and the right to freedom, return, and self-determination."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-06-gaza.png",
                "alt": "Illustration of children gathering seashells by the sea in Gaza",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "About Gaza"
              },
              {
                "type": "p",
                "text": "Gaza is a Palestinian city with a large population that was subjected to mass extermination in 2023. The genocide began after Palestinian fighters entered areas within the occupied Palestinian territories, prompting a violent response by the occupying army. Countless homes were destroyed; electricity and water were cut off; and many families were forced to leave their houses in search of safety. Children in Gaza endured extremely difficult days."
              },
              {
                "type": "p",
                "text": "The genocidal war on Gaza has not ended and has continued since October 2023, causing vast destruction and immense human suffering. Children in Gaza live under extraordinarily harsh conditions: many have lost their homes and schools, and face shortages of food, water, and medicine. Despite everything, hope remains in their heart they dream of a day when peace returns and life once again is filled with play, learning, and safety. It is important for children around the world to know that their friends in Gaza need prayers and support, and that peace is the most beautiful dream we can all share."
              },
              {
                "type": "p",
                "text": "Gaza was home to vital and beautiful places that sustained daily life schools where children learned, mosques where people prayed, libraries, and hospitals. During the genocide, these landmarks were devastated. The education system was destroyed, depriving children of learning. Ancient mosques such as the Ahmad Yassin mosque were reduced to rubble after missile strikes, turning places of worship into ruins. Even hospitals were not spared: the healthcare system was shattered, with facilities such as Al-Shifa Hospital and others coming under bombardment, making treatment of the sick far more difficult. All this occurred as aircraft struck buildings at different times during the genocide, robbing Gaza of cherished places that had symbolized life and hope."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-07-neighborhood.png",
                "alt": "Illustration of journalists, paramedics, and children in Gaza",
                "layout": "wide"
              },
              {
                "type": "p",
                "text": "In Gaza there are remarkable people, journalists, doctors, and paramedics who risk their lives to help others and to tell the world what is happening. Journalists work day and night to report the news from destroyed homes to people in desperate need even in the most dangerous conditions. Doctors and paramedics enter the rubble to treat patients and evacuate the wounded, doing everything they can to save lives."
              },
              {
                "type": "p",
                "text": "According to global organizations, approximately 180 to 190 journalists and media workers Palestinians and others have been confirmed killed since the genocide began (most of them in Gaza), including the well-known Palestinian photojournalist Ismail Abu Hatab, who was martyred in an airstrike on 30 June 2025 while on duty. It is also said that more than 300 paramedics and doctors were killed during the genocide, among them medical staff, ambulance workers, and first responders for example, the massacre of paramedics in Rafah on 23 March 2025, when 15 emergency and rescue personnel, including members of the civil Red Crescent, were killed after ambulances and rescuers were targeted."
              },
              {
                "type": "p",
                "text": "These heroes teach us courage and sacrifice. They do not stop even when danger is extreme, because they want people’s voices to be heard and their suffering to be known and because they want to save lives."
              },
              {
                "type": "h3",
                "text": "About the Neighborhood where the Children in the Story Live: Al-Shujaiyya"
              },
              {
                "type": "p",
                "text": "Al-Shujaiyya is one of Gaza City’s oldest and most famous neighborhoods, located in the eastern part of the city. It is known for its narrow streets, old houses, and traditional markets that reflect the community heritage. Historically, it has been a center of culture, education, and trade. The neighborhood is named after the Al-Shujaiyya family, who lived there for centuries and were known for their courage and generosity attributes that became inseparably linked with the area. Today, Al-Shujaiyya remains a cultural and historical emblem of Gaza, distinguished by the spirit of its people and their proud heritage."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-08-gaza1.png",
                "alt": "Map of Gaza City showing Shuja'iyya neighborhood",
                "layout": "square"
              },
              {
                "type": "h3",
                "text": "The Barrier Around Gaza"
              },
              {
                "type": "p",
                "text": "The barrier around the Gaza Strip also known as the Iron-Wall is a security system built by the occupation along its border with the Strip to prevent infiltration and attacks by armed Palestinian factions. Construction began in 1994 and evolved in stages until it reached its current form by 2021, costing around USD 1.1 billion and extending roughly 65 kilometers. The barrier consists of multiple layers, including an above ground fence and an underground component several meters deep, equipped with hundreds of cameras, radars, and advanced sensors. Despite these fortifications, the Palestinian resistance led by the Izz al-Din al-Qassam Brigades managed to breach the barrier on several occasions, most notably during the Al-Aqsa Flood operation in October 2023, exposing vulnerabilities in the occupation security system and highlighting the resistance ability to adapt and innovate on the ground."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-09-shell.png",
                "alt": "The Iron-Wall barrier around Gaza",
                "layout": "square"
              }
            ]
          }
        ]
      },
      "ar": {
        "title": "صَدَفَاتُ الحُرِّيَّة",
        "companionTitle": "Shells of Freedom",
        "theme": "نبذ العنف",
        "credits": [
          {
            "label": "قصة",
            "value": "محمد عيشان"
          },
          {
            "label": "الكاتبة",
            "value": "مايا أبو الحيّات – اللغة العربية"
          },
          {
            "label": "الرسام",
            "value": "علي الزيني"
          }
        ],
        "synopsis": "يجمع صلاح ومريم الصدفات لتكوين عائلة، وحياة أوسع من الإبادة والظلم والحصار، وحين يضيع القط «مشمش» خلف السياج الحديدي الخطير، ينطلقان بشجاعة وبسالة لإنقاذه. هل سيتمكن الطفلان من الوصول الى «مشمش»؟",
        "externalActions": [
          {
            "type": "buy",
            "label": "شراء",
            "url": "https://welovereading.org/ar/copy-of-buy-our-books/",
            "style": "primary"
          }
        ],
        "articles": [
          {
            "kicker": "عن القصة · صَدَفَاتُ الحُرِّيَّة",
            "heading": "صَدَفَاتُ الحُرِّيَّة",
            "blocks": [
              {
                "type": "p",
                "text": "عَلَى شَاطِئِ غَزَّةَ الْمُحَاصَرَةِ بِالسِّيَاجِ وَالظَّلَامِ، يَجْمَعُ صَلَاحٌ وَمَرْيَمُ الصَّدَفَاتِ لِتَكْوِينِ عَائِلَةٍ، وَحَيَاةٍ أَوْسَعَ مِنَ الْإِبَادَةِ وَالظُّلْمِ وَالْحِصَارِ، وَحِينَ يَضِيعُ الْقِطُّ «مِشْمِشْ» خَلْفَ السِّيَاجِ الْحَدِيدِيِّ الْخَطِيرِ، يَنْطَلِقَانِ بِشَجَاعَةٍ وَبَسَالَةٍ لِإِنْقَاذِه. هُنَالِكَ أَصْدِقَاءُ يُسَاعِدُونَ، وَصَوْتُ أَذَانٍ يَبْعَثُ عَلَى الدِّفْءِ وَالطُّمَأْنِينَةِ، وَنَسَمَاتُ بَحْرٍ دَافِئَةٌ تَأْتِي بِالْأَحِبَّةِ الْبَعِيدِينَ. هَلْ سَيَتَمَكَّنُ الطِّفْلَانِ مِنَ الْوُصُولِ إِلَى «مِشْمِشٍ»؟ هَذِهِ قِصَّةٌ عَنِ الأَطْفَالِ الَّذِينَ يَبْحَثُونَ دَائِمًا عَنِ الْحَيَاةِ وَالْحُبِّ وَالْحُرِّيَّةِ، وَعَنْ غَزَّةَ الَّتِي لَا تَمُوتُ أَبَدًا، وَعَنْ هُتَافَاتِ أَحْرَارِ الْعَالَمِ مِنْ أَجْلِ «الْحُرِّيَّةِ لِفِلَسْطِين»."
              },
              {
                "type": "p",
                "text": "هذه القصّة مستوحاة من واقعٍ حقيقي عاشه الأطفال والعائلات في فلسطين خلال حرب الإبادة على غزة. تسلّط الضوء على معاناتهم وشجاعتهم في مواجهة الخوف والدمار، وعلى الأمل الذي ما زال ينبت رغم الألم."
              },
              {
                "type": "p",
                "text": "استُلهمت شخصيّات القصّة من أبطالٍ حقيقيّين تركوا بصمتهم في أرض فلسطين؛ من الصحفيّة الشهيدة مريم أبو دقة التي حملت الكلمة والعدسة سلاحًا للحقيقة، إلى المعلمين الذين تابعوا تعليم الأطفال تحت الخيام، والمسعفين الذين خاطروا بحياتهم لإنقاذ الآخرين، فكل اسمٍ في القصة يحمل وراءه قصة حقيقية تعبّر عن الصمود، والرحمة، والإصرار على الحياة."
              },
              {
                "type": "p",
                "text": "ومن غزة إلى العالم، يمتد صوت هذه القصة عبر برنامج نحن نحب القراءة المنتشر في أكثر من 78 دولة. من خلال هذا البرنامج، حمل أطفال من مختلف البلدان القصص الفلسطينيّة إلى مكتباتهم الصغيرة، وشاركوا مشاعر الحب والدعم مع أطفال غزّة بطرقٍ شتى؛ بالدعاء، وبالكلمة، وبالفن."
              }
            ]
          },
          {
            "kicker": "إلهام القصة وأبطالها الحقيقيون · ٢٠ نوفمبر ٢٠٢٥",
            "heading": "من غزّة… إلى العالم",
            "blocks": [
              {
                "type": "image",
                "src": "assets/latest/sof-01-palestinearabic-ar.png",
                "alt": "من غزة إلى العالم — لوحة صدفات الحرية",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "الطفلة مريم"
              },
              {
                "type": "p",
                "text": "اسمها مستوحى من اسم الصحفية مريم أبو دقة التي استشهدت خلال حرب الإبادة على غزة في 25 أغسطس 2025، إثر قصف جيش الاحتلال واستهداف قسم الطوارئ في مجمع ناصر الطبي في مدينة خانيونس جنوب قطاع غزة."
              },
              {
                "type": "p",
                "text": "استُشهدت الصحفية مريم أبو دقة عن عمر ناهز 33 عامًا، بعد مسيرة مهنيّة عملت خلالها مصوّرة صحفية مستقلة ومراسلة وثّقت الأحداث الميدانيّة في غزة مع عدة مؤسّسات إعلاميّة، وكانت تُعرف بإنسانيّتها العميقة، فهي أمّ لطفل يبلغ من العمر نحو 13 عامًا يُدعى غيث، كما ضحّت سابقًا حين تبرّعت بإحدى كليتيها لإنقاذ والدها دون تردّد."
              },
              {
                "type": "p",
                "text": "الصحفية الشهيدة مريم أبو دقة، ابنة غزّة وأيقونة الكلمة الحرّة، جسّدت بشجاعتها وإصرارها الصورة الحقيقيّة للصحفي الفلسطيني الذي ينقل الحقيقة رغم المخاطر كلّها. كرّست حياتها للدفاع عن قضايا شعبها، ووقفت في الميدان شاهدةً على الألم والأمل معًا، حاملةً قلمها وعدستها كسلاح في وجه الظلم والتعتيم. رحلت مريم شهيدةً للواجب الإنسانيّ والمهنيّ، لتبقى رمزًا للصحافة المقاومة وللإرادة التي لا تنكسر، ورسالتها خالدة في ذاكرة فلسطين وكلّ من يؤمن بالحريّة."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-02-childsalah.png",
                "alt": "رسم الطفلة مريم والأطفال على شاطئ غزة مع القط مشمش",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "الطفل صلاح – اسم مستوحى من اسم القائد صلاح الدين الأيوبي."
              },
              {
                "type": "p",
                "text": "صلاح الدين الأيوبي هو قائد مسلم مشهور وُلد سنة 1137م في تكريت بالعراق. اشتهر بالشجاعة والعدل والحكمة، وأصبح سلطانًا على مصر وسوريا. أشهر إنجازاته كانت مواجهة الصليبيين الذين احتلوا أجزاء كبيرة من فلسطين خاصة القدس. في عام 1187م، قاد صلاح الدين جيشه وحقق فتح مدينة القدس بعد معركة حطين الشهيرة، دون أن يقتل أهل المدينة، بل أظهر الرحمة تجاههم، وهذا جعله رمزًا للعدل والشجاعة. لقد ساعدت قيادته في توحيد العالم الإسلامي في عصره، وكانت فلسطين محور اهتمامه لأنّه أراد أن تعود تحت الحكم الإسلامي بطريقة عادلة وآمنة."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-03-teachers.png",
                "alt": "رسم الطفل صلاح يحمل القط مشمش قرب السياج",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "المعلمون في فلسطين"
              },
              {
                "type": "p",
                "text": "في قلب الدمار الذي خلّفه العدوان على غزة، يبرز المعلم أحمد النجار مثالًا للصمود والإصرار على الحياة. كان أحمد يدرّس اللّغة العربيّة في إحدى مدارس وكالة الغوث التي دُمّرت بالكامل خلال القصف، ورغم فقدانه منزله وتهجير عائلته إلى مخيم مؤقت، لم يتخلَّ عن رسالته التعليمية. جمع الأطفال حوله تحت خيمة صغيرة، مستخدمًا قطع الورق المبعثرة وبقايا الألواح لشرح الدروس وقراءة القصص، محاولًا أن يمنحهم لحظة أمان وسط الخوف والدمار. يقول أحمد: “نحن نعلّمهم كي لا يسرق الاحتلال أحلامهم مرّتين: مرة حين يهدم بيوتنا، ومرة حين يقتل فينا الأمل.” قصّته تمثّل آلاف المعلمين الفلسطينيين الذين يواصلون التعليم رغم الجراح، مؤمنين بأنّ الكلمة أقوى من الحرب، وأنّ التربية هي شكل من أشكال المقاومة."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-04-paramedics.png",
                "alt": "رسم المعلم الفلسطيني يشرح الدرس للأطفال",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "المسعفون في فلسطين"
              },
              {
                "type": "p",
                "text": "في شوارع غزة المدمّرة، يعمل المسعفون تحت القصف جنودًا للإنسانية، لا يحملون سلاحًا سوى ضماداتهم وإصرارهم على إنقاذ الأرواح. منذ بداية العدوان الأخير، أصبح عملهم مهمّة شبه مستحيلة وسط نقص الوقود وانهيار المنظومة الصحية واستهداف سيارات الإسعاف نفسها، ومع ذلك، يواصلون التقدم إلى مواقع القصف لإخراج الجرحى من تحت الأنقاض، وهم يعلمون أنّ حياتهم مهدّدة في كل لحظة. كثير منهم فقد زملاءه أو أفراد عائلته في أثناء أداء الواجب، لكنّهم يرفضون التوقف. تقول المسعفة سمر الشافعي: “حين نصل إلى الطفل المصاب وننقذه، نشعر بأننا انتصرنا على الموت، ولو للحظة.” هؤلاء المسعفون يمثّلون خط الدفاع الأخير عن الحياة في غزة، يجسّدون الشجاعة والإيمان العميق بأنّ إنقاذ إنسان واحد هو مقاومة في وجه الإبادة."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-05-aboutpalestine.png",
                "alt": "رسم صلاح ومريم وسط الركام بحثاً عن مشمش",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "عن فلسطين"
              },
              {
                "type": "p",
                "text": "خلال العامين الماضيين، شهدت فلسطين تصعيدًا غير مسبوق في جرائم الاحتلال بحق الشعب الفلسطيني، بلغت ذروتها في الإبادة و العدوان الواسع على قطاع غزة منذ أكتوبر 2023، فقد ارتكب الاحتلال أعمال إبادة ممنهجة شملت قصف الأحياء السكنيّة والمستشفيات والمدارس ومخيمات اللاجئين، ما أدّى إلى استشهاد عشرات الآلاف من المدنيين، معظمهم من النساء والأطفال، ودمار واسع للبنية التحتيّة. هذه الجرائم لم تكن مجرّد “عمليات عسكريّة” بل استمرار لسياسات استعمارية تهدف إلى اقتلاع الفلسطينيين من أرضهم وفرض واقع ديمغرافي جديد. في الضفة الغربيّة تصاعدت الاعتداءات اليوميّة للمستوطنين المدعومين من الجيش الاحتلال، مع توسع الاستيطان ومصادرة الأراضي وهدم المنازل، ورغم الإدانة الواسعة دوليًّا، ما زال الاحتلال يتمتّع بحماية سياسيّة وعسكريّة من بعض القوى الكبرى، مما عمّق معاناة الفلسطينيين ورسّخ واقعًا استعماريًّا يهدّد الوجود الفلسطيني وحقّه في الحريّة والعودة وتقرير المصير."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-06-gaza.png",
                "alt": "رسم الأطفال يجمعون الصدفات على شاطئ غزة",
                "layout": "wide"
              },
              {
                "type": "h3",
                "text": "عن غزّة"
              },
              {
                "type": "p",
                "text": "غزّة مدينة فلسطينيّة يعيش فيها كثير من الناس، لكنّها تعرّضت لإبادة كبيرة في سنة 2023. بدأت الإبادة بعد أن دخل مقاتلون فلسطينيون إلى مناطق داخل المناطق الفلسطينيّة المحتلة، ما أدّى إلى ردّ عنيف من الجيش الاحتلال. في هذه الإبادة تضرّرت بيوت كثيرة، وانقطعت الكهرباء والماء عن السكّان، واضطر كثير من العائلات إلى مغادرة منازلهم بحثًا عن الأمان. الأطفال في غزّة عاشوا أيّامًا صعبة. حرب الإبادة على غزة لم تنتهِ بعد، وما زالت مستمرة منذ أكتوبر 2023، وتسبّبت في دمار كبير ومعاناة إنسانيّة واسعة. الأطفال في غزّة يعيشون ظروفًا صعبة جدًّا، حيث فقد كثير منهم منازلهم ومدارسهم، ويواجهون نقصًا في الطعام والماء والدواء. رغم كل هذا، يبقى الأمل موجودًا في قلوبهم، ويحلمون بيوم يعود فيه السلام، وتعود الحياة كما كانت، مليئة باللعب والدراسة والأمان. من المهم أن يعرف الأطفال حول العالم أنّ أصدقاءهم في غزّة يحتاجون إلى الدعاء والدعم، وأنّ السلام هو أجمل ما يمكن أن نحلم به جميعًا."
              },
              {
                "type": "p",
                "text": "في غزة كانت هناك أماكن جميلة ومهمّة تساعد الناس في حياتهم اليوميّة، مثل: المدارس التي يتعلم فيها الأطفال، والمساجد التي يصلّي فيها الناس، والمكتبات والمستشفيات، لكن خلال الإبادة، تعرّضت هذه المعالم للدمار، فدُمّرت المنظومة التعليميّة، ولم يعد بإمكان الأطفال تلقي العلم، كما هُدمت مساجد قديمة مثل مسجد “أحمد ياسين” عندما استُهدفت بالصواريخ، فتحوّل مكان العبادة إلى ركام، حتى المستشفيات لم تسلم، فقد دُمّرت المنظومة الصحيّة، مثلًا تعرض مستشفى الشفاء ومرافق أخرى للقصف، مما جعل علاج المرضى أصعب. كلّ ذلك حدث بسبب الطائرات التي قصفت المباني في أوقات مختلفة من الإبادة، فخسرت غزّة أماكن عزيزة كانت رمزًا للحياة والأمل."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-07-neighborhood.png",
                "alt": "رسم الصحفيين والمسعفين والأطفال في غزة",
                "layout": "wide"
              },
              {
                "type": "p",
                "text": "في غزّة يوجد أشخاصٌ مدهشون؛ صحفيّون، وأطباء، ومسعفون، يضحّون بحياتهم ليساعدوا الآخرين ويخبروا العالم بما يحدث. الصحفيّون يعملون ليلًا ونهارًا لنقل الأخبار، من البيوت التي تدمر، إلى الناس الذين يحتاجون إلى المساعدة، حتى لو كان المكان خطيرًا جدًّا. الأطباء والمسعفون أيضًا يدخلون بين الأنقاض، يُعالِجون المرضى، يُخلون الجرحى، يفعلون كل شيء ممكن لينقذوا الأرواح."
              },
              {
                "type": "p",
                "text": "حسب منظمات عالمية، تمّ تأكيد مقتل حوالي 180 إلى 190 صحفيًّا وإعلاميًّا من فلسطين وغيرهم منذ بدء الإبادة (أغلبهم من غزّة) منهم إسماعيل أبو حطب، مصوّر صحفي فلسطيني معروف، استُشهد بقصف جوي في 30 يونيو 2025 أثناء تأدية عمله، و كذلك يُقال إنّ حوالي أكثر من 300 مسعف وطبيب قُتلوا خلال الإبادة من بينهم: أفراد الطواقم الطبيّة، والمسعفون، والعاملون في الإسعاف؛ مثال حادثة مجزرة المسعفين في رفح في يوم 23 مارس 2025، حيث قُتل 15 من العاملين في الإسعاف والإنقاذ، منهم مسعفون من الهلال الأحمر المدني، بعد أن استُهدفت سيارات إسعاف وعمال إنقاذ."
              },
              {
                "type": "p",
                "text": "هؤلاء الأبطال يُعلّموننا الشجاعة والتضحية، فهم لا يتوقّفون حتى عندما يكون الخطر كبيرًا، لأنّهم يريدون أن تُسمَع أصوات الناس وتُعرف معاناتهم، ولأنّهم يريدون إنقاذ حياة الآخرين."
              },
              {
                "type": "h3",
                "text": "عن الحيّ الذي يسكنه الأطفال في القصة و هو حي الشجاعيّة"
              },
              {
                "type": "p",
                "text": "حيّ الشجاعيّة هو أحد أقدم أحياء مدينة غزة وأشهرها، ويقع في الجزء الشرقي من المدينة. يتميز بشوارعه الضيّقة والمنازل القديمة والأسواق الشعبيّة التي تعكس حياة سكّانه التقليديّة. يُعرف الحيّ بنشاط أهله الاجتماعي والتجاري عبر التاريخ، وكان مركزًا للثقافة والتعليم والتجارة. سُمّي حيّ الشجاعيّة بهذا الاسم نسبةً إلى عائلة الشجاعيّة التي كانت تسكن المنطقة منذ قرون، وكانت معروفة بالشجاعة والكرم، ولذلك أصبح اسم العائلة مرتبطًا بالحي. اليوم، يظلّ حيّ الشجاعيّة رمزًا من رموز غزة التاريخيّة والثقافيّة، ويتميّز بروح الأهالي وتاريخهم العريق."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-08-gaza1.png",
                "alt": "خريطة مدينة غزة تظهر حي الشجاعية",
                "layout": "square"
              },
              {
                "type": "h3",
                "text": "السياج الفاصل حول غزة"
              },
              {
                "type": "p",
                "text": "السياج الفاصل حول قطاع غزة، المعروف أيضًا بـ”الجدار الحديدي” هو منظومة أمنيّة أنشأها الاحتلال على طول حدوده مع القطاع بهدف منع التسلل والهجمات من قبل الفصائل الفلسطينيّة المسلحة. بدأ بناء هذا السياج في عام 1994، وتطوّر على مراحل حتى أصبح في شكله الحالي بحلول عام 2021، حيث بلغت تكلفته نحو 1.1 مليار دولار، وامتد لمسافة تقارب 65 كيلومترًا. يتكوّن الجدار من طبقات متعدّدة تشمل سياجًا فوق الأرض وآخر تحتها بعمق عدة أمتار، وهو مزوّد بمئات الكاميرات والرادارات وأجهزة الاستشعار المتطورة. رغم هذه التحصينات، تمكّنت المقاومة الفلسطينيّة- وعلى رأسها كتائب القسام- من اختراق السياج في عدة مناسبات، أبرزها عملية “طوفان الأقصى” في أكتوبر 2023، مما كشف عن ثغرات في المنظومة الأمنيّة للاحتلال وأعاد تسليط الضوء على قدرة المقاومة على التكيف والتطوير الميداني."
              },
              {
                "type": "image",
                "src": "assets/latest/sof-09-shell.png",
                "alt": "السياج الفاصل حول قطاع غزة",
                "layout": "square"
              }
            ]
          }
        ]
      }
    }
  },

  missingAssetsReport: [
    {
      categoryEn: "English vs. Arabic Age Category Visibility",
      categoryAr: "تفاوت ظهور الفئات العمرية بين النسختين الإنجليزية والعربية",
      detailEn: "On the live English page (welovereading.org/our-books/), only Age Categories 4–6 (15 books) and 5–8 (2 books) are rendered in the gallery grid, omitting Age Category 7–10. However, the Arabic gallery (/ar/our-books/) displays all 19 books in Age Category 7–10, and all 19 books have live individual English pages under /our-books/<slug>/. Our prototype unifies all 36 authentic books across 4–6, 5–8, and 7–10 in both languages.",
      detailAr: "تعرض الصفحة الإنجليزية الحالية فئتي 4–6 و5–8 فقط (17 قصة) وتغفل قسم 7–10 رغم وجود صفحات إنجليزية منشورة لكافة القصص الـ19 في هذه الفئة. يجمع النموذج القصص الـ36 الأصيلة كاملة في اللغتين."
    },
    {
      categoryEn: "Standalone Pages for Catalogue & Magazine",
      categoryAr: "عدم وجود صفحات ويب مستقلة للكتالوج والمجلة في الموقع الأصلي",
      detailEn: "In the live WLR navigation menu, 'Story Books Catalogue' and 'WLR Children Books Magazine' link directly to raw PDF uploads (catalog-WLR-english-new-2026.pdf and magazine-of-books-eidted-6EN-Last-version4554.pdf); web slugs /story-books-catalogue/ and /wlr-children-books-magazine/ return 404. The prototype provides dedicated redesigned pages while preserving direct viewing and downloading of those exact PDFs.",
      detailAr: "في الموقع الأصلي، تقود روابط «كتالوج القصص» و«مجلة كتب الأطفال» مباشرة إلى ملفات PDF خام دون صفحات ويب مخصصة. يوفر النموذج صفحات مصممة بالكامل مع الحفاظ على خيار القراءة والتحميل المباشر للملفات الأصلية."
    },
    {
      categoryEn: "Magazine Cover Thumbnails vs. PDF Pairing",
      categoryAr: "اقتران أغلفة المجلة بملفات PDF في أرشيف الوسائط",
      detailEn: "The Special Gaza Magazine Edition (En-Gaza-magazine-finalEDITEN.pdf) has a valid hosted PDF on WLR but no standalone cover PNG image — a labeled editorial typographic cover plate is shown. Conversely, the 2015 Second Edition Community Magazine has an uploaded cover PNG (WLR-magazine_2nd_edition_arabic_2015-01.png) without a corresponding PDF upload, so PDF read/download buttons are omitted for that entry.",
      detailAr: "يتوفر ملف PDF رسمي للعدد الخاص بغزة دون صورة غلاف منفصلة (استُخدم غلاف طباعي مع تنويه واضح)، بينما تتوفر صورة غلاف للإصدار الثاني (2015) دون ملف PDF مرتبط، لذا حُجبت أزرار التحميل التزاماً بالدقة."
    },
    {
      categoryEn: "Coronavirus Storybooks Cover Images",
      categoryAr: "أغلفة قصص التوعية بفيروس كورونا",
      detailEn: "We Love Reading’s menu links directly to external resources (IASC/WHO PDF for 'My Hero is You' and pangeaeducation.org for 'The Unwelcome Stranger') without hosting cover artwork on welovereading.org. Clearly labeled editorial cover plates are displayed alongside the preserved external links.",
      detailAr: "ترتبط قصص كورونا في قائمة الموقع بروابط خارجية مباشرة دون صور أغلفة مرفوعة على خادم «نحن نحب القراءة»، لذا وُضعت لوحات غلاف تعريفية واضحة مع الحفاظ على الروابط الأصلية."
    },
    {
      categoryEn: "Circular / Broken Action Links on Original Book Pages",
      categoryAr: "روابط دائرية أو متاجر متوقفة في بعض صفحات القصص الأصلية",
      detailEn: "On the live WLR site, 'WATCH' buttons on Eid Gift, Why did Electricity Run Away?, and The Peppered Moth self-link back to the book’s own URL rather than a video; our prototype omits circular self-links so only genuine video/article Watch URLs appear. Additionally, three books (Salma’s Riddle, A Sun Without Bills, The Amazing Water Hero) redirect on English WLR to WooCommerce /product/ pages (5.00 JOD), and several older 'BUY' buttons point to legacy Jamalon URLs.",
      detailAr: "تحتوي بعض صفحات القصص الأصلية على أزرار «مشاهدة» تعيد توجيه المستخدم لنفس الصفحة بدل فيديو فعلي (تم استبعاد الروابط الدائرية)، كما تشير بعض أزرار «شراء» القديمة إلى متجر جملون المتوقف، في حين تُحوّل 3 قصص إلى صفحات متجر الموقع مباشرة."
    },
    {
      categoryEn: "Arabic Cover Artwork on Bilingual Gallery",
      categoryAr: "لغات تصميم الأغلفة الأصلية",
      detailEn: "Only four newer titles (Queen of Balloons, The Peppered Moth, Shells of Freedom, and My Mama’s Magic) have separate English-lettered and Arabic-lettered cover image files uploaded on welovereading.org. Earlier titles (2020–2021) use the original Arabic-lettered illustrated cover image on both English and Arabic WLR book pages.",
      detailAr: "تتوفر أغلفة منفصلة بالنسختين العربية والإنجليزية لأحدث أربع قصص فقط، بينما تستخدم بقية القصص على الموقع الأصلي نفس الغلاف المصور الأصلي في الواجهتين العربية والإنجليزية."
    }
  ],

  researchData: {
    "hero": {
      "eyebrowEn": "Evidence-Based Impact",
      "eyebrowAr": "الأبحاث والدراسات العلمية",
      "titleEn": "Research and Studies",
      "titleAr": "الأبحاث والدراسات"
    },
    "slideshow": {
      "intervalMs": 4500,
      "transitionMs": 700,
      "slides": [
        {
          "id": "slide-1",
          "src": "assets/research/slide-1.jpg",
          "fallbackUrl": "https://welovereading.org/wp-content/uploads/2022/07/image-25-01-22-03-34-4.jpeg",
          "altEn": "research field photos1",
          "altAr": "research field photos1",
          "width": 1920,
          "height": 1440
        },
        {
          "id": "slide-2",
          "src": "assets/research/slide-2.jpg",
          "fallbackUrl": "https://welovereading.org/wp-content/uploads/2022/07/image-25-01-22-03-34-1.jpeg",
          "altEn": "research field photos2",
          "altAr": "research field photos2",
          "width": 1440,
          "height": 1920
        },
        {
          "id": "slide-3",
          "src": "assets/research/slide-3.jpg",
          "fallbackUrl": "https://welovereading.org/wp-content/uploads/2022/07/IMG_20220221_102542.jpg",
          "altEn": "",
          "altAr": "",
          "width": 2976,
          "height": 3968
        }
      ]
    },
    "categories": [
      {
        "id": "research-summary",
        "pastel": "yellow",
        "icon": "assets/research/icons/research-icons-03.png",
        "iconFallback": "https://welovereading.org/wp-content/uploads/2022/07/research-icons-03.png",
        "titleEn": "Research Summary",
        "titleAr": "ملخص الأبحاث",
        "hoverDescEn": "Our Research tells our story",
        "hoverDescAr": "أبحاثنا تروي القصة",
        "actionType": "download",
        "route": "#/research/research-summary",
        "ctaLabelEn": "Click to Download",
        "ctaLabelAr": "لتحميل الملخص",
        "pdfEn": "https://welovereading.org/wp-content/uploads/2024/09/EN-WLR-Research-and-Impact-.pdf",
        "pdfFallbackEn": "https://welovereading.org/wp-content/uploads/2024/09/EN-WLR-Research-and-Impact-.pdf",
        "downloadNameEn": "EN-WLR-Research-and-Impact-.pdf",
        "pdfAr": "https://welovereading.org/wp-content/uploads/2024/09/AR-WLR-Research-and-Impact.pdf",
        "pdfFallbackAr": "https://welovereading.org/wp-content/uploads/2024/09/AR-WLR-Research-and-Impact.pdf",
        "downloadNameAr": "AR-WLR-Research-and-Impact.pdf"
      },
      {
        "id": "ongoing-research",
        "pastel": "mint",
        "icon": "assets/research/icons/research-icons-01.png",
        "iconFallback": "https://welovereading.org/wp-content/uploads/2022/07/research-icons-01.png",
        "titleEn": "Ongoing Research",
        "titleAr": "الأبحاث الجارية",
        "hoverDescEn": "Many research projects are happening",
        "hoverDescAr": "العديد من الدراسات الجارية",
        "actionType": "internal",
        "route": "#/research/ongoing-research",
        "ctaLabelEn": "Know More",
        "ctaLabelAr": "لمعرفة المزيد"
      },
      {
        "id": "published-research",
        "pastel": "blue",
        "icon": "assets/research/icons/research-icons-02.png",
        "iconFallback": "https://welovereading.org/wp-content/uploads/2022/07/research-icons-02.png",
        "titleEn": "Published Research",
        "titleAr": "الأبحاث المنشورة",
        "hoverDescEn": "We Love Reading is a community-driven evidence-based model where impact is measured through scientific research",
        "hoverDescAr": "برنامج نحن نحب القراءة هو نموذج قائم على الأدلة يقوده المجتمع حيث يتم قياس تأثيره من خلال البحث العلمي",
        "actionType": "internal",
        "route": "#/research/published-research",
        "ctaLabelEn": "Know More",
        "ctaLabelAr": "لمعرفة المزيد"
      },
      {
        "id": "rct-guide",
        "pastel": "peach",
        "icon": "assets/research/icons/research-icons-04.png",
        "iconFallback": "https://welovereading.org/wp-content/uploads/2022/07/research-icons-04.png",
        "titleEn": "Our RCT Guide",
        "titleAr": "دليلنا للتجارب المنضبطة المعشاة",
        "hoverDescEn": "Taghyeer Organization’s Executive Workshop evaluating social programs using Randomized Controlled Trials",
        "hoverDescAr": "",
        "actionType": "internal",
        "route": "#/research/rct-guide",
        "ctaLabelEn": "Know More",
        "ctaLabelAr": "لمعرفة المزيد"
      }
    ],
    "ongoingResearch": {
      "headingEn": "ONGOING RESEARCH",
      "headingAr": "الأبحاث الجارية",
      "projectsEn": [
        {
          "id": "kncu-theory-of-change",
          "pastel": "blue",
          "image": "assets/research/ongoing/kncu.jpg",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2022/07/The-Korean-National-Commission-for-UNESCO-KNCU.jpg",
          "alt": "",
          "imgTitle": "The Korean National Commission for UNESCO (KNCU)",
          "title": "Theory of change and social Impact measurement of We Love Reading",
          "metaLines": [
            "Funder: The Korean National Commission for UNESCO (KNCU)",
            "Dr. Catherine Panter-Brick: Yale University",
            "Dr. Rana Dajani: The Hashemite University",
            "Dr. Susanna Chui: The Hang Seng University of Hong kong",
            "Dr. Amal Kharoof: University of Jordan"
          ],
          "paragraphs": [
            "The project aims to test whether a community-based intervention (We Love Reading, WLR) impacts the leadership disposition, social support, sense of empowerment, and personal social networks of socially disadvantaged women living in Amman. It will use a randomized control trial design with intervention and control groups.",
            "The published research compared the change in outcome variables over time for the intervention group, with respect to the change over time for controls, to assess the added value of the intervention.",
            "The current study will investigate whether and how the effect of the We Love Reading (WLR) intervention training program gets “under the skin” of women refugees in Jordan. To this end, we will examine changes in biomarkers, including genetic and epigenetic markers (specifically, DNA methylation), immune markers, and hormones, both before and after the intervention. Differences in these biological changes will be compared between the intervention and control groups. Using both an epigenetic biomarker of biological aging, the pediatric buccal epigenetic (PedBE) clock, developed by Kobor lab, as well as an exploratory, epigenome-wide approach, we will identify epigenetic changes associated with WLR. Post-hoc analyses will be conducted to scrutinize how biological findings may associate with underlying genotypic differences, as well as map onto psychological and health outcomes that are potentially related to the intervention, such as subjective wellbeing, perceived stress, physical health, and attachment style."
          ],
          "cta": null
        },
        {
          "id": "fierce-long-term-ba",
          "pastel": "mint",
          "image": "assets/research/ongoing/british-academy.png",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2022/07/BA_Primary-Logo-Black.png",
          "alt": "British Academy",
          "imgTitle": "BA_Primary-Logo-Black",
          "title": "(FIERCE): Family Intervention for Empowerment through Reading and Education. (Long term)",
          "metaLines": [
            "Funder: British Academy.",
            "The Korean National Commission for UNESCO (KNCU)",
            "Dr. Kristin Hadfield: Trinity College Dublin",
            "Dr. Isabelle: Mareschal, Queen Mary University of London",
            "Dr Rana Dajani: The Hashemite University",
            "Dr. Amal Alkharouf:  University of Jordan",
            "Dr. Sophie von Stumm: University of York"
          ],
          "paragraphs": [
            "Community-led, shared book-reading interventions have been shown to improve early childhood development and reduce inequity. There is limited research on their impact on refugees, but shared book-reading programs may be helpful in addressing some of the many educational challenges that Syrian refugee children in Jordan face.",
            "Children who took part in We Love Reading had more positive attitudes toward reading. There were no impacts on child literacy.",
            "Literacy levels among participating children are very low. Literacy is important to many aspects of children’s development and functioning; it is critical to address these low literacy rates, to enable the prosperity and future positive functioning of Syrian refugees in Jordan. We Love Reading shows promise in improving children’s attitudes toward reading. Better attitudes toward reading may have many positive knock-on effects on children. We will study these other impacts with a 3rd data collection period."
          ],
          "cta": {
            "label": "See research snapshot",
            "url": "https://welovereading.org/wp-content/uploads/2022/07/FIERCE-Research-snapshot.pdf",
            "localPdf": ""
          }
        },
        {
          "id": "fierce-fathers-yale",
          "pastel": "yellow",
          "image": "assets/research/ongoing/yale.png",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2021/05/yale.png",
          "alt": "",
          "imgTitle": "yale",
          "title": "(FIERCE) Syrian Refugee Fathers Study",
          "metaLines": [
            "Funder: Yale University",
            "Catherine Panter-Brick: Yale University",
            "Zaid Alkayed: University of Jordan",
            "Majd Al-Soleiti: Yale University",
            "Isabelle Mareschal: Queen Mary University",
            "Kristin Hadfield: Trinity College Dublin",
            "Rana Dajani: The Hashemite University",
            "Lama Sawalha: University of Jordan"
          ],
          "paragraphs": [
            "This published study aimed to assess, in a cohort of Syrian families living as refugees in Jordan, the extent to which fathers engage with their family, contribute to family cohesiveness, and assess family-level impacts of the COVID-19 pandemic.  In doing so, it offers both a humanistic and social lens on Syrian refugee fathers and their roles across generations.",
            "Our research with Syrian refugees capitalized on an opportunity to follow families over time, assessing father roles, family cohesiveness, and family-level COVID responses before and after a structured reading intervention.",
            "The findings of the study are being developed using epigenetic research and analyses. The effect of father involvement will be studied through the biological changes on the mother and child."
          ],
          "cta": null
        },
        {
          "id": "social-entrepreneurs-taghyeer",
          "pastel": "peach",
          "image": "assets/research/ongoing/taghyeer.webp",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2022/07/Tageer-logo.webp",
          "alt": "",
          "imgTitle": "Tageer-logo",
          "title": "How We Love Reading volunteers go on to become social entrepreneurs:",
          "metaLines": [
            "Funder: Taghyeer",
            "Empowering people to create positive change in their communities",
            "Farah Al Taji: Brunel University London",
            "Rawan Alheresh: Harvard university",
            "Zeina Muqbel: Harvard university",
            "Rama Kummitha: Northumbria university"
          ],
          "paragraphs": [
            "The Path from Volunteering to Social Entrepreneurship is a research study that explores women’s intention to become social entrepreneurs after volunteering with the not-for-profit organisation ‘We Love Reading’ (WLR). The purpose of the research is to advance our understanding of whether the experience of volunteering encourages women to be more active in their local communities, specifically by playing a key role through proposing and participating in solutions to community challenges. WLR provides volunteers with training and resources which 1) empower them to create and manage a library for children in their neighbourhoods, and in turn 2) encourages children to read for pleasure by reading aloud through regular story telling sessions. There has been anecdotal evidence that the WLR project not only empowers these women to be volunteers, but the skills, agency and confidence gained lead them to go further independently and become social entrepreneurs. Social entrepreneurship in Jordan is an extremely under-researched and ill-understood field of activity. Yet the need for greater understanding on how to encourage their establishment is of paramount importance as the Jordanian government, local government actors and non-profit organisations increasingly lack the financial ability to respond to the needs of the Jordanian community, not to forget the reverberation of COVID-19 crisis which has already overwhelmed the public and private sectors. In such an environment, the social enterprise – being locally led and financially sustainable – offers an exciting alternative.",
            "In phase one of the research, a longitudinal quantitative survey was conducted with over 100 women volunteers. In the second phase, we built on initial findings: a series of semi-structured interviews with 34 women who have already completed the questionnaire of the first phase of data collection. The two phases are intended to provide insights not only regarding volunteering experience as an antecedent to foster the intension to create social entrepreneurship, but also in connection with resilience as a mediator factor. Preliminary findings of the study reveal that women’s social entrepreneurship intention has positively evolved during women’s volunteering journey with WLR. The study shows that the voluntary experience with WLR encourages women volunteers to go beyond what they do with WLR and realise other social needs around them, which in turn drives them to take on the responsibility of thinking and looking for solutions to change the status quo. The study also shows that WLR experience has a positive impact on women volunteers’ resilience and personal identity, which both have an influence on women’s intention to create further social impact in the community they belong to. These findings make a useful contribution to existing literature in the field of entrepreneurship, gender studies, voluntary action, and development studies through analysing the longer-term impact of voluntary action on women’s self-perception and engagement with their communities."
          ],
          "cta": null
        }
      ],
      "projectsAr": [
        {
          "id": "ar-fierce-fathers",
          "pastel": "blue",
          "image": "assets/research/ongoing/yale2.png",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2021/05/yale2.png",
          "alt": "",
          "imgTitle": "yale2",
          "title": "دراسة (فييرس) للآباء من اللاجئين السوريين",
          "metaLines": [
            "مجد السليتي، زيد الكايد، كاثرين بانتر بريك، إيزابيل مارشال، كريستين هادفيلد، أمل الخاروف، وصوفي فون ستوم."
          ],
          "paragraphs": [
            "تركز دراسة الآباء على مجموعة من اللاجئين السوريين الذين يعيشون حاليًا في الأردن، حيث تكمل تقييمًا عشوائيًا تجريبيًا جماعيًا مضبوطًا لتأثيرات نحن نحب القراءة، والذي تم تنفيذه مع الأمهات لتعزيز معرفة القراءة والكتابة لدى الأطفال والمواقف تجاه القراءة. تتبع هذه التجربة (FIERCE: التدخل الأسري للتمكين من خلال القراءة والتعليم) مجموعة من 300 أم وأطفالهم الذين تتراوح أعمارهم بين 4-8 سنوات، وجمع البيانات في منازلهم في عمان ومخيم الزعتري، في نقطتين زمنيتين قبل / بعد مداخلة القراءة."
          ],
          "cta": null
        },
        {
          "id": "ar-fierce-trinity",
          "pastel": "mint",
          "image": "assets/research/ongoing/tcd.jpg",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2021/05/tcd.jpg",
          "alt": "",
          "imgTitle": "tcd",
          "title": "(فييرس):  التدخل الأسري للتمكين من خلال القراءة والتعليم",
          "metaLines": [
            "كريستين هادفيلد،كلية ترينيتي دبلن"
          ],
          "paragraphs": [
            "يمكن أن تؤدي تدخلات قراءة الكتب المشتركة بقيادة المجتمع المحلي إلى تحسين تنمية الطفولة المبكرة والحد من عدم المساواة، تم تنفيذ أحد هذه البرامج، نحن نحب القراءة، في الأردن استجابة لأزمة اللاجئين السوريين ويتضمن قراءة الأمهات القصص للأطفال. سوف ندرس الطبيعة التحويلية المحتملة للبرنامج، من خلال (أ) تقييم البرنامج نوعياً وكمياً و (ب) إجراء مقابلات مع الأشخاص الذين طوروا ونفذوا البرنامج (سفراء القراءة، النساء اللواتي تلقين تدريب القراءة، الأطفال الذين شاركوا) لإنشاء مجموعة أدوات من أجل البرنامج. تطوير وتنفيذ موارد التعليم غير النظامي بشكل فعال في أماكن أخرى. لمعالجة الهدف الأول، سنجري تحليلًا نظريًا أساسيًا للمقابلات مع الجهات المعنية (أي الآباء والأطفال) وسنجري تجربة كمية عشوائية معشاة مع لاجئين سوريين من النساء والأطفال. سيسمح لنا ذلك بفهم كيفية تأثير التدخل التعليمي على المسارات التعليمية للأطفال أثناء الحرب والنزوح، وكيف يمكننا التدخل بشكل فعال في سياقات الأزمات الإنسانية الأخرى."
          ],
          "cta": null
        },
        {
          "id": "ar-emotion-qmul",
          "pastel": "yellow",
          "image": "assets/research/ongoing/queen-mary.jpg",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2019/12/Queen-Mary-University-of-London-1.jpg",
          "alt": "",
          "imgTitle": "Queen-Mary-University-of-London-1",
          "title": "تحسين الادراك العاطفي وصنع القرار بين الأطفال اللاجئين في الأردن: تقييم تدخل منخفض التكلفة وقائم على القراءة.",
          "metaLines": [
            "ايزابيل ماريشال جامعة كوين ماري في لندن"
          ],
          "paragraphs": [
            "تسعى ھذه الدراسة للإجابة على السؤال التالي: ما ھي تأثیرات النزوح القسري، والتعرض للصدمات، والبیئات غیر الآمنة على مھارات صنع القرار لدى الأطفال اللاجئین ومھارات الادراك العاطفي، وھل یمكن للتدخل القائم على القراءة )نموذج “نحن نحب القراءة”( تحسین ھذه النتائج؟ وبالنظر إلى أن الصدمة یمكن أن تؤدي إلى إدراك عاطفي غیر ملائم وسلوكیات غیر مناسبة للمؤثرات العاطفیة، فمن المھم دراسة ھذه الروابط لدى الأطفال الذین عانوا من الحرب والنزوح."
          ],
          "cta": null
        },
        {
          "id": "ar-joint-attention-nyuad",
          "pastel": "pink",
          "image": "assets/research/ongoing/nyu-abu-dhabi.png",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2019/12/NYUAbuDhabi-logo.png",
          "alt": "",
          "imgTitle": "NYUAbuDhabi-logo",
          "title": "تنسيق اهتمام الطفل ووالده أو والدته: استكشاف آليات حقيقية للاهتمام المشترك\nمن خلال قراءة احد الوالدين كتابا للطفل.",
          "metaLines": [
            "جامعة نيويورك أبو ظبي Antje von Suchodoletz",
            "رنا دجاني، الجامعة الهاشمية"
          ],
          "paragraphs": [
            "تسعى ھذه الدراسة للإجابة على السؤال التالي: ما ھي تأثیرات النزوح القسري، والتعرض للصدمات، والبیئات غیر الآمنة على مھارات صنع القرار لدى الأطفال اللاجئین ومھارات الادراك العاطفي، وھل یمكن للتدخل القائم على القراءة (نموذج “نحن نحب القراءة”) تحسین ھذه النتائج؟ وبالنظر إلى أن الصدمة یمكن أن تؤدي إلى إدراك عاطفي غیر ملائم وسلوكیات غیر مناسبة للمؤثرات العاطفیة، فمن المھم دراسة ھذه الروابط لدى الأطفال الذین عانوا من الحرب والنزوح."
          ],
          "cta": null
        },
        {
          "id": "ar-social-entrepreneurs-polimi",
          "pastel": "peach",
          "image": "assets/research/ongoing/politecnico-milano.png",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2021/06/Polytechnic-University-of-Milan.png",
          "alt": "",
          "imgTitle": "Polytechnic University of Milan",
          "title": ":كيف يستمر متطوعي “نحن نحب القراءة” ليصبحوا رواداً في العمل الإجتماعي",
          "metaLines": [
            ".تمكين الناس لإحداث تغيير إيجابي في مجتمعاتهم",
            "فرح التاجي وراما كوميتيا… من جامعة بوليتيكنيكو، ميلانو، إيطاليا",
            "مجدي عبدالعزيز"
          ],
          "paragraphs": [
            "يتبّع برنامج ” نحن نحب القراءة” للریادة الاجتماعیة الذي الفلسفة التالیة: “إذا كان بإمكاني فتح مكتبة، ماذا یمكنني أن أفعل؟”",
            "يحلل هذا البحث إلى أي مدى تعزز الخبرة الطوعیة من “نحن نحب القراءة” النوایا لبدء مشروع ریادة الأعمال الاجتماعیة الخاصة بھم فیما بعد. وسیتم التحقیق في ذلك من خلال اتباع نھج متعدد الطرق من الأسالیب الكمیة .والنوعیة لتتبع عینة من 200 من متطوعي “نحن نحب القراءة” لمدة 6 أشهر"
          ],
          "cta": null
        },
        {
          "id": "ar-ptsd-kings-college",
          "pastel": "blue",
          "image": "assets/research/ongoing/kings-college.png",
          "imageFallback": "https://welovereading.org/wp-content/uploads/2021/06/kl.png",
          "alt": "",
          "imgTitle": "kl",
          "title": "فعالية التدخلات منخفضة التكلفة كبديل للأمراض العقلية ، على وجه التحديد اضطراب ما بعد الصدمة ، علاجات عالية التكلفة",
          "metaLines": [
            "أسيل الزغول",
            "عالم تشيفننج 2018",
            "كلية كينغز لندن"
          ],
          "paragraphs": [
            "سؤالنا هو:",
            "هل قراءة القصص بصوت عالٍ، بالنسبة للأطفال اللاجئین السوریین الذین یعیشون خارج المخیمات، والذين تتعرضوا للحرب في سوريا، تقلل من ضغوطهم النفسیة وأعراض اضطراب ما بعد الصدمة؟",
            "نتوقع أن يظهر أطفال اللاجئون السوريون في الأردن الذین تعرضوا لحرب تتراوح أعمارھم بین 8 و 10 سنوات والذین یشاركون في برنامج “نحن نحب القراءة” انخفاضاً في الألم النفسي وأعراض اضطراب ما بعد الصدمة، مقارنة بالأطفال الذین لا یشاركون في البرنامج."
          ],
          "cta": null
        }
      ]
    },
    "rctGuide": {
      "headingEn": "Our RCT Guide",
      "headingAr": "دليلنا للتجارب المنضبطة المعشاة",
      "coverImage": "assets/research/rct-guide-cover.jpg",
      "coverFallback": "https://welovereading.org/wp-content/uploads/2020/01/RCTen-hover.jpg",
      "pdfLocal": "https://welovereading.org/wp-content/uploads/2024/05/Taghyeer-RCT-Workshop_PDF1320.pdf",
      "pdfFallback": "https://welovereading.org/wp-content/uploads/2024/05/Taghyeer-RCT-Workshop_PDF1320.pdf",
      "downloadName": "Taghyeer-RCT-Workshop_PDF1320.pdf",
      "downloadLabelEn": "Click to download",
      "downloadLabelAr": "اضغط هنا للتحميل",
      "readInlineLabelEn": "Read Guide in Browser",
      "readInlineLabelAr": "قراءة الدليل داخل الموقع",
      "workshopTitleEn": "Taghyeer Organization’s Executive Workshop EVALUTING SOCIAL PROGRAMS Using Randomized Controlled Trials",
      "dateEn": "November 24, 2015",
      "authorsEn": "Eman Tarawneh & Suhayb Al-Absi",
      "contentsLabelEn": "contents :",
      "contentsEn": [
        "Social Program Evaluation",
        "What is Randomized Controlled Trails (RCT)?",
        "Who could beneﬁt from such evaluations?",
        "Programs and their Evaluations: Where do we start?",
        "Program Evaluation Components?",
        "Theory of Change",
        "Impact Evaluation",
        "When to collect data?",
        "Sources of Data",
        "What to measure",
        "The Main Challenge in Measurement",
        "Unit of Randomization",
        "Relative Solutions",
        "Randomization Designs",
        "Stratiﬁcation",
        "Common Threats",
        "Threat to External Validity"
      ],
      "workshopTitleAr": "تقـيـيـم الـــبـرامـج الإجــتماعية بإستخدام التجارب المنضبطة المعشاة",
      "dateAr": "نتيجة لورشة عمل تقييم المشاريع الاجتماعية والتي أقيمت في الولايات المتحدة الأمريكية بولاية ماساتوستس/ مدينة بوستن بجامعة MIT والتي عقدت بالفترة 15-19/6/2015",
      "authorsAr": "تقديم: صهيب العبسي وإيمان الطراونة",
      "contentsLabelAr": "المحتويات:",
      "contentsAr": [
        "من هم المستفيدون من تقييم البرامج الإجتماعية؟",
        "طرق دارجة في تقييم البرامج الإجتماعية :-",
        "التجارب المنضبطة المعشاة",
        "نبذة عن تاريخ التجارب المنضبطة المعشاة",
        "من أين نبدأ؟",
        "الخطوات الرئيسية لتقييم البرامج الإجتماعية",
        "تقييم التأثير",
        "الخطوات الرئيسية لإجراء التجارب العشوائية",
        "قياسات",
        "التوزيع العشوائي",
        "تحليل البيانات والأخطار على الدراسة",
        "ملحق أوراق العمل"
      ]
    },
    "publishedResearch": {
      "headingEn": "Published Research and Studies",
      "headingAr": "الأبحاث والدراسات المنشورة",
      "sortNoticePrefixEn": "Publications are listed from newest to oldest — Results:",
      "sortNoticePrefixAr": "تعرض المنشورات من الأحدث إلى الأقدم — النتائج:",
      "readMoreEn": "Read more",
      "readMoreAr": "اقرأ المزيد",
      "readPdfInlineEn": "Open PDF Reader",
      "readPdfInlineAr": "قراءة ملف PDF",
      "filters": {
        "targetGroups": {
          "labelEn": "Target Groups",
          "labelAr": "الفئات المستهدفة",
          "allEn": "All Target Groups",
          "allAr": "جميع الفئات المستهدفة",
          "arOrder": [
            "fathers",
            "children",
            "adults",
            "youth"
          ],
          "options": [
            {
              "id": "adults",
              "en": "Adults",
              "ar": "البالغون"
            },
            {
              "id": "children",
              "en": "Children",
              "ar": "الأطفال"
            },
            {
              "id": "fathers",
              "en": "Fathers",
              "ar": "الآباء"
            },
            {
              "id": "youth",
              "en": "Youth",
              "ar": "الشباب"
            }
          ]
        },
        "subjects": {
          "labelEn": "Subjects",
          "labelAr": "المواضيع",
          "allEn": "All Subjects",
          "allAr": "جميع المواضيع",
          "arOrder": [
            "child-development",
            "reading",
            "program",
            "empowerment",
            "parenting",
            "education",
            "mental-health"
          ],
          "options": [
            {
              "id": "child-development",
              "en": "Child Development",
              "ar": "نمو الطفل"
            },
            {
              "id": "education",
              "en": "Education",
              "ar": "التعليم"
            },
            {
              "id": "empowerment",
              "en": "Empowerment",
              "ar": "التمكين"
            },
            {
              "id": "mental-health",
              "en": "Mental Health",
              "ar": "الصحة النفسية"
            },
            {
              "id": "parenting",
              "en": "Parenting",
              "ar": "التربية الوالدية"
            },
            {
              "id": "program",
              "en": "Program",
              "ar": "البرنامج"
            },
            {
              "id": "reading",
              "en": "Reading",
              "ar": "القراءة"
            }
          ]
        },
        "publicationTypes": {
          "labelEn": "Publication Types",
          "labelAr": "أنواع المنشورات",
          "allEn": "All Publication Types",
          "allAr": "جميع أنواع المنشورات",
          "arOrder": [
            "journal-article",
            "conference-proceeding",
            "research-report",
            "master-thesis"
          ],
          "options": [
            {
              "id": "conference-proceeding",
              "en": "Conference Proceeding",
              "ar": "وقائع مؤتمر"
            },
            {
              "id": "journal-article",
              "en": "Journal Article",
              "ar": "مقالة علمية"
            },
            {
              "id": "master-thesis",
              "en": "Master Thesis",
              "ar": "رسالة ماجستير"
            },
            {
              "id": "research-report",
              "en": "Research Report",
              "ar": "تقرير بحثي"
            }
          ]
        }
      },
      "items": [
        {
          "id": "pub-01",
          "dateEn": "04, Sep 2025",
          "dateAr": "04, سبتمبر 2025",
          "titleEn": "Study Reveals Impact of COVID-19 Pandemic on Young Children’s Mental Health in Jordan",
          "titleAr": "دراسة تكشف أثر جائحة كوفيد-19 على الصحة النفسية للأطفال الصغار في الأردن",
          "descEn": "This study sought to explore the effect of disruptions caused by the COVID-19 pandemic on the mental health of young children in low-income households in the Arab region. The study focused on Jordan by following 50 preschool-aged children in Jordan and their mothers over two years, collecting information before and during the pandemic. Researchers looked at changes in children’s emotional and behavioral well-being and examined how these changes related to their mothers’ mental health. The study found that most children showed stable emotional and behavioral well-being over time, while a smaller group experienced increasing emotional difficulties or consistently high behavioral challenges. The researchers found that children’s behavioral patterns were associated with their mothers’ mental health. These findings highlight that children are affected by crises in different ways and can help identify those who may need additional mental health support.",
          "descAr": "هدفت هذه الدراسة إلى استكشاف تأثير الاضطرابات التي سببتها جائحة كوفيد-19 على الصحة النفسية للأطفال الصغار في الأسر منخفضة الدخل في المنطقة العربية، مع التركيز على الأردن. تابعت الدراسة 50 طفلًا في سن ما قبل المدرسة وأمهاتهم على مدى عامين، وجمعت بيانات قبل الجائحة وأثناءها. وأظهرت النتائج أن معظم الأطفال حافظوا على مستوى مستقر من الصحة النفسية والسلوكية، في حين ظهرت لدى مجموعة أصغر صعوبات عاطفية متزايدة أو مشكلات سلوكية مرتفعة بشكل مستمر. كما تبين أن الأنماط السلوكية للأطفال كانت مرتبطة بالحالة النفسية لأمهاتهم. وتبرز النتائج اختلاف استجابة الأطفال للأزمات وتساعد في تحديد من قد يحتاجون إلى دعم إضافي في مجال الصحة النفسية.",
          "thumb": "assets/research/publications/pub-01-covid-mental-health.jpeg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/07/1-Covid-19.jpeg?fit=791%2C1024&ssl=1",
          "url": "https://kneopen.com/gespr/article/view/17589/16357/",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "mental-health"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-02",
          "dateEn": "14, Feb 2025",
          "dateAr": "14, فبراير 2025",
          "titleEn": "Mapping the Perceived Impacts of a Social Innovation Program on Women’s Agency and Life Satisfaction",
          "titleAr": "برنامج “نحن نحب القراءة” يعزز تمكين المرأة الإماراتية: دراسة جديدة حول بناء القدرات والابتكار الاجتماعي",
          "descEn": "The purpose of this study was to explore the effect of reading programs such as the We Love Reading program beyond encouraging people to read but also aiding the process of building confidence, independence, and leadership skills. This was done by focusing the study on women in the Arab region specifically by studying the experience of 78 female Emirati university students who participated in We Love Reading. Researchers used surveys and group discussions to understand how the program influences participants. They identified six key elements that shape women's sense of agency: ability, control, inner strength, authority, freedom to act, and responsibility. Participants felt that We Love Reading strengthened these qualities while also improving their overall satisfaction with life. This suggests that reading initiatives like We Love Reading can not only promote reading but also empower women, encourage positive social change, and support national efforts to build a stronger culture of reading and knowledge across the Arab world.",
          "descAr": "هدفت الدراسة إلى استكشاف أثر البرامج القرائية، مثل \"نحن نحب القراءة\"، في تعزيز الثقة بالنفس والاستقلالية والمهارات القيادية. وشملت 78 طالبة جامعية إماراتية. وحدد الباحثون ستة عناصر للتمكين: الكفاءة، والقدرة على التحكم، والقوة الداخلية، والسلطة، وحرية التصرف، وتحمل المسؤولية. وأفادت المشاركات بأن البرنامج عزز هذه الجوانب ورفع مستوى رضاهن عن الحياة، بما يشير إلى قدرة المبادرات القرائية على تمكين المرأة ودعم التغيير الاجتماعي الإيجابي.",
          "thumb": "assets/research/publications/pub-02-womens-agency.webp",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2025/05/fsoc-10-1527841-g001.webp?fit=410%2C649&ssl=1",
          "url": "https://www.frontiersin.org/journals/sociology/articles/10.3389/fsoc.2025.1527841/full#h10",
          "localPdf": "",
          "targetGroups": [
            "adults"
          ],
          "subjects": [
            "empowerment",
            "reading"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-03",
          "dateEn": "25, Nov 2024",
          "dateAr": "25, نوفمبر 2024",
          "titleEn": "Exploring Factors Related to the Development and Implementation of a Local Intervention Program for Syrian Refugee Children",
          "titleAr": "استكشاف العوامل المرتبطة بتطوير وتنفيذ برنامج تدخل محلي للأطفال اللاجئين السوريين",
          "descEn": "This study sought to explore how We Love Reading was able to remain sustainable by interviewing 21 people who helped develop or implement We Love Reading to understand the factors that contributed to this program’s long-term success. The study found that community-based programs’ sustainability depends on balancing two key elements: maintaining the flexibility that allows volunteers to adapt the program to their communities, while also fostering strong motivation and commitment among volunteers. Participants highlighted that both elements were essential for keeping the initiative active. These lessons can help organizations design more sustainable initiatives that continue to benefit communities over time.",
          "descAr": "استكشفت الدراسة العوامل التي ساعدت برنامج \"نحن نحب القراءة\" على الاستمرار وتحقيق الاستدامة، من خلال مقابلات مع 21 شخصًا شاركوا في تطويره أو تنفيذه. وأظهرت النتائج أن استدامة البرامج المجتمعية تعتمد على التوازن بين المرونة التي تتيح للمتطوعين تكييف البرنامج مع احتياجات مجتمعاتهم، وتعزيز دافعيتهم والتزامهم. وأكد المشاركون ضرورة العنصرين لاستمرار المبادرة وفاعليتها.",
          "thumb": "assets/research/publications/pub-03-local-intervention.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/07/2-Local-Intervention.png?fit=186%2C231&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2024/12/Exploring-Factors-Related-to-the-Development-and-Implementation-of-a-Local-Intervention-Program-for-Syrian5539.pdf",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "program"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-04",
          "dateEn": "01, Aug 2024",
          "dateAr": "01, أغسطس 2024",
          "titleEn": "Effectiveness of a community-led shared book reading intervention in Syrian refugee children: a randomised controlled trial",
          "titleAr": "فعالية برنامج مجتمعي للقراءة المشتركة للأطفال اللاجئين السوريين: تجربة عشوائية محكمة",
          "descEn": "This study explored the extent that community-led reading programs, such as We Love Reading can aid in improving reading skills, attitudes toward reading, and family relationships among Syrian refugee children in Jordan. The research followed 322 Syrian refugee mothers and their children, aged 4-8 years comparing families who participated in the program with those who had not yet joined. The study found that the program did not improve children's reading skills, family relationships, or children's own views about reading. However, mothers reported that their children developed a more positive attitude toward reading after participating. These findings suggest that while We Love Reading may help encourage an interest in reading, further improvements may be needed for effective shared book reading for refugee children.",
          "descAr": "استكشفت الدراسة قدرة «نحن نحب القراءة» على تحسين مهارات القراءة والاتجاهات نحوها والعلاقات الأسرية لدى الأطفال اللاجئين السوريين في الأردن. وشملت 322 أمًا وأطفالهن من 4 إلى 8 سنوات. لم يؤد البرنامج إلى تحسين مهارات القراءة أو العلاقات الأسرية أو نظرة الأطفال الذاتية إلى القراءة، إلا أن الأمهات أفدن بأن أطفالهن أصبحوا أكثر إيجابية تجاه القراءة. وتشير النتائج إلى الحاجة إلى تطوير أساليب القراءة المشتركة لزيادة فاعليتها.",
          "thumb": "assets/research/publications/pub-04-syrian-rct-nature.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2024/08/41598_2024_68903_Fig1_HTML.png?fit=685%2C508&ssl=1",
          "url": "https://www.nature.com/articles/s41598-024-68903-9#Ack1",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "reading"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-05",
          "dateEn": "30, May 2024",
          "dateAr": "30, مايو 2024",
          "titleEn": "Volunteer programs, empowerment, and life satisfaction in Jordan: mapping local knowledge and systems change to inform public policy and science diplomacy",
          "titleAr": "برامج التطوع والتمكين والرضا عن الحياة في الأردن: توظيف المعرفة المحلية والتغيير المنظومي لدعم السياسات العامة والدبلوماسية العلمية",
          "descEn": "Community volunteering is often described as empowering women and benefitting the poor, but there is limited research on what that means from the perspectives of those effected. This study explored how Syrian refugee and Jordanian women from low-income families understood empowerment and life satisfaction, and the impact of participating in community-based volunteering programs, specifically We Love Reading. Through group discussions, participants shared their experiences and mapped the factors they believed contributed to positive change in their lives. The study found that women viewed empowerment through cultural, financial, and psychological dimensions, while life satisfaction was associated with adaptation, acceptance, and contentment. Participants also identified volunteering as an important driver of positive change, particularly in strengthening cultural empowerment. These findings highlight the importance of listening to local perspectives when designing and evaluating community programs, helping ensure that policies and initiatives reflect the experiences and priorities of the people they are intended to serve.",
          "descAr": "استكشفت الدراسة فهم النساء السوريات اللاجئات والأردنيات من الأسر منخفضة الدخل للتمكين والرضا عن الحياة، وأثر التطوع المجتمعي، خاصة \"نحن نحب القراءة\". وأظهرت النقاشات الجماعية أن التمكين يُفهم بأبعاد ثقافية واقتصادية ونفسية، بينما يرتبط الرضا عن الحياة بالتكيف والتقبل والقناعة. ورأت المشاركات أن التطوع عامل مهم في التغيير الإيجابي، خصوصًا في التمكين الثقافي، مما يؤكد أهمية المعرفة المحلية في تصميم السياسات والبرامج.",
          "thumb": "assets/research/publications/pub-05-volunteers-jordan.webp",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/08/Volunteers.webp?fit=654%2C722&ssl=1",
          "url": "https://www.frontiersin.org/journals/sociology/articles/10.3389/fsoc.2024.1371760/full",
          "localPdf": "",
          "targetGroups": [
            "adults"
          ],
          "subjects": [
            "empowerment"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-06",
          "dateEn": "30, Apr 2024",
          "dateAr": "30, أبريل 2024",
          "titleEn": "Does volunteering impact refugee women’s life satisfaction, empowerment, and wellbeing? Experimental evidence, local knowledge, and causal reasoning.",
          "titleAr": "هل يؤثر العمل التطوعي في رضا النساء اللاجئات عن حياتهن وتمكينهن ورفاههن؟ أدلة تجريبية ومعرفة محلية واستدلال سببي",
          "descEn": "Although volunteering is often claimed to improve volunteers’ well-being, empowerment, and life satisfaction, there is limited evidence showing how these changes happen, especially in the Middle East. This study explored the impact of We Love Reading on Syrian refugee women living in low-income households in Amman, Jordan. Researchers followed 105 women over one year, using surveys and group discussions to understand how volunteering influenced their lives and how participants defined empowerment and life satisfaction. The study found that volunteering improved women's overall life satisfaction, although it did not show the same impact on other measures of well-being or empowerment. Through the group discussions, women described empowerment as the ability to make decisions, pursue personal goals, and persevere despite challenges. Many participants also felt that volunteering strengthened their determination to keep working toward their goals. These findings help clarify how and why volunteering achieves social change across different cultures through their definitions and goals.",
          "descAr": "استكشفت الدراسة أثر «نحن نحب القراءة» على 105 نساء سوريات لاجئات من أسر منخفضة الدخل في عمّان على مدار عام. أظهرت النتائج أن التطوع حسّن الرضا العام عن الحياة، لكنه لم يحقق الأثر نفسه في بقية مقاييس الرفاه أو التمكين. ووصفت المشاركات التمكين بالقدرة على اتخاذ القرار والسعي إلى الأهداف والمثابرة، ورأت كثيرات أن التطوع عزز إصرارهن على تحقيق أهدافهن.",
          "thumb": "assets/research/publications/pub-06-womens-life-satisfaction.gif",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/07/6-Womens-life-satisfaction.gif?fit=150%2C200&ssl=1",
          "url": "https://www.sciencedirect.com/science/article/pii/S0277953624001795",
          "localPdf": "",
          "targetGroups": [
            "adults"
          ],
          "subjects": [
            "empowerment"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-07",
          "dateEn": "04, Mar 2024",
          "dateAr": "04, مارس 2024",
          "titleEn": "Father Involvement and Child Development: A Prospective Study of Syrian Refugee Families",
          "titleAr": "مشاركة الآباء في رعاية الأطفال ونموهم: دراسة مستقبلية على أسر اللاجئين السوريين",
          "descEn": "Fathers play an important role in children's development, but little is known about father involvement in refugee families or how it affects children's well-being. This study explored how Syrian refugee mothers and fathers in Jordan viewed fathers' involvement in caring for their children and whether these views were linked to family relationships and child development. Researchers followed 160 refugee families with children aged 4–8 years, collecting information from mothers, fathers, and children. The study found that fathers generally viewed themselves as being more involved in their children's lives than mothers believed they were. Even though fathers' level of involvement was not strongly linked to children's development, differences between mothers' and fathers' views were associated with poorer family relationships, lower maternal well-being, and weaker social and emotional skills among children. These findings suggest that shared understanding and communication between parents about caregiving may be just as important as the amount of time fathers spend with their children. This highlights the value of supporting families in developing responsive and cooperative parenting practice.",
          "descAr": "استكشفت الدراسة تصورات الآباء والأمهات السوريين اللاجئين في الأردن لمشاركة الآباء في رعاية الأطفال وعلاقتها بالعلاقات الأسرية ونمو الطفل. تابعت 160 أسرة لديها أطفال من 4 إلى 8 سنوات. كان الآباء يقيّمون مشاركتهم بدرجة أعلى من الأمهات، وارتبط الاختلاف بين تصورات الوالدين بضعف العلاقات الأسرية وانخفاض رفاه الأمهات وتراجع المهارات الاجتماعية والعاطفية للأطفال. وتؤكد النتائج أهمية الفهم المشترك والتواصل بين الوالدين.",
          "thumb": "assets/research/publications/pub-07-father-involvement.webp",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/07/7-Father-Involvement.webp?fit=316%2C426&ssl=1",
          "url": "https://link.springer.com/article/10.1007/s10826-024-02809-y#author-information",
          "localPdf": "",
          "targetGroups": [
            "adults",
            "children",
            "fathers"
          ],
          "subjects": [
            "child-development",
            "parenting"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-08",
          "dateEn": "01, Oct 2023",
          "dateAr": "01, أكتوبر 2023",
          "titleEn": "Social networks, empowerment, and wellbeing among Syrian refugee and Jordanian women: Implications for development and social inclusion",
          "titleAr": "الشبكات الاجتماعية والتمكين والرفاه بين النساء السوريات اللاجئات والأردنيات: دلالات للتنمية والاندماج الاجتماعي",
          "descEn": "Strong social connections can help improve women's well-being and sense of empowerment, but little is known about how these networks develop among refugee and communities living alongside them. This study explored the social networks of Syrian refugee and Jordanian women living in low-income neighborhoods in Amman and examined how these connections related to empowerment, well-being, and community participation. Researchers surveyed 215 women and held group discussions to better understand how participants viewed empowerment and the role of their social relationships. The study found that Syrian refugee women and women living in the poorest households generally had smaller social networks. Women with larger and more diverse networks reported higher levels of empowerment, motivation to lead, and perceived social support. Those who participated in community volunteering also tended to build broader social connections beyond their immediate families and reported greater resourcefulness and psychological well-being. These participants described empowerment as having the ability to act and feeling that their voices and contributions mattered. These findings suggest that creating more opportunities for women to volunteer and engage in their communities can strengthen social connections, encourage leadership, and support their overall well-being.",
          "descAr": "استكشفت الدراسة الشبكات الاجتماعية للنساء السوريات اللاجئات والأردنيات في أحياء منخفضة الدخل بعمّان وعلاقتها بالتمكين والرفاه والمشاركة المجتمعية. شملت 215 امرأة. امتلكت اللاجئات والأسر الأشد فقرًا شبكات أصغر، بينما ارتبطت الشبكات الأوسع والأكثر تنوعًا بمستويات أعلى من التمكين والدافعية للقيادة والدعم الاجتماعي. كما ساعد التطوع النساء على بناء علاقات تتجاوز الأسرة وتعزيز الاعتماد على الذات والرفاه النفسي.",
          "thumb": "assets/research/publications/pub-08-social-networks.jpg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/08/world.jpg?fit=576%2C768&ssl=1",
          "url": "https://www.sciencedirect.com/science/article/pii/S0305750X23001420",
          "localPdf": "",
          "targetGroups": [
            "adults"
          ],
          "subjects": [
            "empowerment",
            "mental-health"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-09",
          "dateEn": "03, Aug 2023",
          "dateAr": "03, أغسطس 2023",
          "titleEn": "Facial emotion recognition in refugee children with a history of war trauma",
          "titleAr": "التعرّف على تعابير الوجه الانفعالية لدى الأطفال اللاجئين الذين مروا بتجارب صدمات الحرب",
          "descEn": "Millions of children around the world have been displaced by war, but little is known about how these experiences affect the way they understand other people's emotions. This study explored whether Syrian refugee children who had experienced war and displacement recognized facial expressions differently from Jordanian children. Researchers worked with 278 children in Jordan, using a series of activities to examine how they recognized emotions such as happiness, sadness, and fear from people's facial expressions. The study found no meaningful differences between the two groups. Despite refugee children having experienced higher levels of war-related trauma, they recognized facial expressions just as accurately and used similar visual patterns when interpreting emotions. These findings suggest that early experiences of war and displacement did not affect children's ability to recognize facial expressions.",
          "descAr": "هدفت الدراسة إلى معرفة ما إذا كان الأطفال السوريون اللاجئون الذين تعرضوا للحرب والنزوح يميزون تعابير الوجه الانفعالية بصورة مختلفة عن الأطفال الأردنيين. شارك 278 طفلًا. لم تظهر فروق جوهرية بين المجموعتين؛ فرغم ارتفاع التعرض للصدمات لدى اللاجئين، تعرفوا إلى تعابير الوجه بالدقة نفسها واستخدموا أنماطًا بصرية متشابهة. وتشير النتائج إلى أن تجارب الحرب والنزوح المبكرة لم تؤثر في هذه القدرة.",
          "thumb": "assets/research/publications/pub-09-facial-emotion.jpg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2023/08/Emotion.jpg?fit=221%2C299&ssl=1",
          "url": "https://pubmed.ncbi.nlm.nih.gov/37535569/#:~:text=Taken%20together%2C%20our%20results%20suggest,APA%2C%20all%20rights%20reserved).",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "child-development",
            "mental-health"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-10",
          "dateEn": "06, Apr 2023",
          "dateAr": "06, أبريل 2023",
          "titleEn": "From Readers to Changemakers: Reading Aloud to Develop Learners Who Love to Read – Childhood Education International",
          "titleAr": "من قرّاء إلى صنّاع تغيير: القراءة الجهرية لبناء جيل يحب القراءة – منظمة التعليم الدولي للطفولة",
          "descEn": "This article highlights the approach of We Love Reading, which encourages adults to read aloud to children to make reading an enjoyable and meaningful experience. The program focuses on building a lifelong love of reading rather than simply improving literacy skills. Reading aloud helps children build confidence, connect spoken and written language, strengthen their imagination and creativity, improve attention and memory, and create a sense of belonging through shared reading experiences. The article emphasizes that making reading a joyful part of everyday life can support children's learning while strengthening the connections between children, families, and their communities.",
          "descAr": "يسلط المقال الضوء على منهجية «نحن نحب القراءة» التي تشجع البالغين على القراءة الجهرية للأطفال لجعل القراءة ممتعة وذات معنى. ويركز البرنامج على غرس حب القراءة مدى الحياة، ويسهم في تعزيز الثقة بالنفس وربط اللغة المنطوقة بالمكتوبة وتنمية الخيال والإبداع والانتباه والذاكرة والشعور بالانتماء. ويؤكد المقال أن إدماج القراءة الممتعة في الحياة اليومية يدعم التعلم ويعزز الروابط الأسرية والمجتمعية.",
          "thumb": "assets/research/publications/pub-10-readers-changemakers.jpg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2023/08/download-2.jpg?fit=225%2C225&ssl=1",
          "url": "https://ceinternational1892.org/article/from-readers-to-changemakers/",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "education",
            "program",
            "reading"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-11",
          "dateEn": "02, Nov 2022",
          "dateAr": "02, نوفمبر 2022",
          "titleEn": "War-related trauma linked to increased sustained attention to threat in children the COVID- 19 pandemic",
          "titleAr": "الصدمات المرتبطة بالحرب ترتبط بزيادة الانتباه المستمر للمثيرات المهددة لدى الأطفال",
          "descEn": "War and displacement can affect children's emotional well-being and development, but less is known about how these experiences influence the way children respond to emotional cues. This study explored how Syrian refugee and Jordanian children living in Jordan paid attention to facial expressions showing different emotions. Researchers used eye-tracking technology to observe where children looked when viewing emotional faces and examined whether these patterns were linked to experiences of war-related trauma. The study found that refugee children were initially more likely to look away from both angry and happy faces than non-refugee children. It also found that children who had experienced higher levels of trauma spent more time looking at angry faces. These findings suggest that experiences of war and displacement may influence how children process emotional information, offering new insights into the ways trauma can shape children's emotional development.",
          "descAr": "استكشفت الدراسة كيفية توجيه الأطفال السوريين اللاجئين والأردنيين انتباههم إلى تعابير الوجه الانفعالية باستخدام تتبع حركة العين. كان الأطفال اللاجئون في البداية أكثر ميلًا إلى صرف النظر عن الوجوه الغاضبة والسعيدة، بينما أمضى الأطفال الأكثر تعرضًا للصدمات وقتًا أطول في النظر إلى الوجوه الغاضبة. وتشير النتائج إلى أن الحرب والنزوح قد يؤثران في معالجة المعلومات الانفعالية.",
          "thumb": "assets/research/publications/pub-11-child-development.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2022/07/child-development.png?fit=600%2C600&ssl=1",
          "url": "https://srcd.onlinelibrary.wiley.com/doi/full/10.1111/cdev.13739",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "child-development",
            "mental-health"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-12",
          "dateEn": "09, Sep 2022",
          "dateAr": "09, سبتمبر 2022",
          "titleEn": "Predictors of Literacy and Attitudes Toward Reading Among Syrian Refugee Children in Jordan",
          "titleAr": "العوامل المؤثرة في مهارات القراءة والاتجاهات نحوها لدى الأطفال السوريين اللاجئين في الأردن",
          "descEn": "Refugee children often experience interruptions to their education, but little is known about their reading skills and attitudes toward reading in low- or middle-income refugee accepting countries. This study assessed the reading abilities and attitudes of 322 Syrian refugee children, aged 4–8 years, living in Jordan. The researchers found that while many children were enthusiastic about reading, their literacy levels were generally low. Children's reading skills were stronger when they were older and when their mothers had higher levels of education and were able to read, particularly for children attending school. Among children enrolled in school, those participating in hybrid learning showed stronger literacy skills than those learning only in person or only online. Children's attitudes toward reading were influenced by a wider range of factors, with no clear pattern emerging. These findings highlight the need to improve literacy skills for refugee children while building on their strong interest in reading to encourage learning and long-term educational success.",
          "descAr": "قيّمت الدراسة مهارات القراءة والاتجاهات نحوها لدى 322 طفلًا سوريًا لاجئًا من 4 إلى 8 سنوات في الأردن. كان كثير من الأطفال متحمسين للقراءة، لكن مهاراتهم كانت منخفضة عمومًا. تحسنت المهارات لدى الأكبر سنًا، ولدى أبناء الأمهات الأعلى تعليمًا والأكثر إتقانًا للقراءة، ولا سيما الملتحقين بالمدرسة. وحقق التعليم الهجين نتائج أفضل بين الملتحقين بالمدارس. وتؤكد النتائج أهمية تطوير المهارات مع الاستفادة من اهتمام الأطفال بالقراءة.",
          "thumb": "assets/research/publications/pub-12-predictors-literacy.jpg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2022/12/OMEP-IS-SEEKING-A-CANDIDATE-IJEC.jpg?fit=274%2C434&ssl=1",
          "url": "https://pubmed.ncbi.nlm.nih.gov/36105520/",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "education",
            "reading"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-13",
          "dateEn": "06, Sep 2021",
          "dateAr": "06, سبتمبر 2021",
          "titleEn": "Adrenocortical and psychosocial responses of families in Jordan to the COVID- 19 pandemic",
          "titleAr": "الاستجابات الهرمونية والنفسية والاجتماعية للأسر في الأردن خلال جائحة كوفيد-19",
          "descEn": "This study sought to explore the COVID-19 pandemic placed significant pressure on families facing economic hardship in Jordan. The study followed 52 Jordanian and Syrian families with young children in Jordan from before the pandemic through its first nine months to better understand how family life, coping, and children's well-being changed over time. Researchers found that families who had lower incomes before the pandemic and children with more behavioral challenges experienced greater disruption to their daily lives. Mothers in these families also reported greater difficulty coping with the challenges brought on by the pandemic. Children from families that experienced more negative changes showed higher levels of stress, while both children and mothers experienced poorer emotional and social well-being later in the pandemic.",
          "descAr": "استكشفت الدراسة أثر ضغوط جائحة كوفيد-19 على 52 أسرة أردنية وسورية لديها أطفال صغار، منذ ما قبل الجائحة وحتى الأشهر التسعة الأولى منها. تعرضت الأسر الأقل دخلًا والأسر التي كان أطفالها يعانون من مشكلات سلوكية أكبر لاضطرابات أكثر، وواجهت الأمهات صعوبة أكبر في التكيف. كما سجل الأطفال في الأسر التي شهدت تغيرات سلبية أكبر مستويات أعلى من التوتر، وتراجع رفاه الأطفال والأمهات مع استمرار الجائحة.",
          "thumb": "assets/research/publications/pub-11-child-development.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2022/07/child-development.png?fit=600%2C600&ssl=1",
          "url": "https://srcd.onlinelibrary.wiley.com/doi/10.1111/cdev.13662",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "mental-health"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-14",
          "dateEn": "24, Apr 2021",
          "dateAr": "24, أبريل 2021",
          "titleEn": "Comparing online and in-person surveys: assessing a measure of resilience with Syrian refugee youth",
          "titleAr": "مقارنة الاستبيانات الإلكترونية والاستبيانات الحضورية: تقييم أداة لقياس المرونة النفسية لدى الشباب السوريين اللاجئين",
          "descEn": "Conducting research with refugee communities can be challenging, particularly during crises such as the COVID-19 pandemic, when in-person data collection may not be possible. This study explored whether an online survey could reliably measure resilience among Syrian refugee adolescents living in Jordan. Researchers asked 119 young people aged 14–18 to complete an online questionnaire about their resilience, social experiences, and living conditions, then compared the results with data previously collected through in-person surveys. The study found that the online survey produced reliable and consistent results, suggesting that it can be an effective way to collect information about resilience when face-to-face research is not feasible. The findings also highlight practical and ethical considerations for conducting online research with refugee communities and offer guidance for future studies in crisis-affected settings.",
          "descAr": "تحققت الدراسة من موثوقية الاستبيانات الإلكترونية في قياس المرونة النفسية لدى المراهقين السوريين اللاجئين في الأردن. شارك 119 شابًا وشابة من 14 إلى 18 عامًا، وقورنت نتائجهم ببيانات سابقة جُمعت حضوريًا. أظهرت النتائج أن الاستبيان الإلكتروني قدم نتائج موثوقة ومتسقة، ويمكن استخدامه عندما يتعذر البحث وجهًا لوجه، مع مراعاة الجوانب العملية والأخلاقية في البيئات المتأثرة بالأزمات.",
          "thumb": "assets/research/publications/pub-14-online-surveys.jpg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/08/international-journal-of-social-research-methodology.jpg?fit=200%2C285&ssl=1",
          "url": "https://www.tandfonline.com/doi/abs/10.1080/13645579.2021.1919789?journalCode=tsrm20",
          "localPdf": "",
          "targetGroups": [
            "youth"
          ],
          "subjects": [
            "mental-health"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-15",
          "dateEn": "24, Mar 2021",
          "dateAr": "24, مارس 2021",
          "titleEn": "The Effects of a Reading-Based Intervention on Emotion Processing in children Who Have Suffered Early Adversity and War Related Trauma",
          "titleAr": "أثر برنامج قائم على القراءة في معالجة المشاعر لدى الأطفال الذين تعرضوا لظروف صعبة وصدمات مرتبطة بالحرب",
          "descEn": "Early experiences of adversity and trauma can affect children's emotional well-being and development, making it important to identify programs that support their emotional growth. This study explored whether We Love Reading, a community-based reading program, could improve emotion recognition and mental health among Syrian refugee and Jordanian children living in Jordan. Researchers assessed how children interpreted facial expressions and measured their emotional well-being before and after participating in the program. Before the program, many children tended to interpret unclear facial expressions as sad. After participating in We Love Reading, Syrian refugee children became less likely to interpret these expressions as sad, although this change was no longer evident two months after the program ended. The program did not lead to measurable improvements in children's self-reported mental health during the study period. These findings suggest that shared reading may positively influence how children interpret emotions, but further research is needed to understand whether these effects can be sustained over time and whether they lead to broader improvements in mental well-being.",
          "descAr": "استكشفت الدراسة ما إذا كان \"نحن نحب القراءة\" يمكن أن يحسن تعرف الأطفال السوريين اللاجئين والأردنيين إلى المشاعر وصحتهم النفسية. قبل البرنامج كان كثير من الأطفال يفسرون التعابير الغامضة على أنها حزينة. بعد البرنامج قل هذا الميل لدى الأطفال السوريين اللاجئين، لكنه لم يستمر بعد شهرين. ولم يظهر تحسن ملموس في الصحة النفسية وفق تقييمات الأطفال الذاتية. وتشير النتائج إلى أثر محتمل للقراءة المشتركة يحتاج إلى مزيد من البحث.",
          "thumb": "assets/research/publications/pub-15-frontiers-psychology.jpg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/08/frontierslogo_bigcubes_blog1.jpg?fit=290%2C290&ssl=1",
          "url": "https://www.frontiersin.org/articles/10.3389/fpsyg.2021.613754/full?&utm_source=Email_to_authors_&utm_medium=Email&utm_content=T1_11.5e1_author&utm_campaign=Email_publication&field=&journalName=Frontiers_in_Psychology&id=613754",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "mental-health",
            "reading"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-16",
          "dateEn": "21, Dec 2020",
          "dateAr": "21, ديسمبر 2020",
          "titleEn": "Reading for pleasure among Jordanian children: a community-based reading intervention",
          "titleAr": "القراءة من أجل المتعة لدى الأطفال الأردنيين: برنامج مجتمعي لتعزيز القراءة",
          "descEn": "This study explored the impact of We Love Reading in encouraging children to read more from an early age and long-term positive reading habits. Researchers followed 1,718 children across Jordan, comparing those who participated in the program with children who did not take part in any reading initiative. The study found that children who participated in We Love Reading showed modest improvements in both their attitudes toward reading and their reading habits. These positive effects were observed among boys and girls of all ages included in the study. The findings suggest that community-led reading programs can help foster a love of reading and encourage children to engage with books, supporting the development of lifelong reading habits.",
          "descAr": "تابعت الدراسة 1,718 طفلًا من أنحاء الأردن وقارنت المشاركين في \"نحن نحب القراءة\" بغير المشاركين. حقق المشاركون تحسنًا متواضعًا في اتجاهاتهم نحو القراءة وعاداتهم القرائية، وظهر الأثر لدى الذكور والإناث وفي مختلف الأعمار. وتشير النتائج إلى أن برامج القراءة المجتمعية يمكن أن تغرس حب القراءة وتدعم عادات تستمر مدى الحياة.",
          "thumb": "assets/research/publications/pub-16-reading-for-pleasure.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/08/Journal-of-research-in-reading.png?fit=592%2C557&ssl=1",
          "url": "https://onlinelibrary.wiley.com/doi/10.1111/1467-9817.12342",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "education",
            "reading"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-17",
          "dateEn": "02, Dec 2020",
          "dateAr": "02, ديسمبر 2020",
          "titleEn": "The Value of the We Love Reading Program for Executive Functions In Jordanian Children",
          "titleAr": "قيمة برنامج “نحن نحب القراءة” في تنمية الوظائف التنفيذية لدى الأطفال الأردنيين",
          "descEn": "Early childhood experiences play an important role in developing the thinking and self-regulation skills that support children's learning and future success. This study explored whether We Love Reading, a community-based read-aloud program, could strengthen these skills by encouraging reading for pleasure at home. Researchers assessed children's thinking and self-regulation skills and collected information from parents about their children's reading habits before and after participating in the program over a six-month period. The study found that families had more books at home after participating in We Love Reading, and more children reported reading as a hobby. Children whose families increased reading activities at home also showed greater improvements in thinking and self-regulation skills, particularly younger children and those from lower-income households. These findings suggest that creating enjoyable reading experiences at home may support children's cognitive development while fostering positive reading habits.",
          "descAr": "استكشفت الدراسة ما إذا كان «نحن نحب القراءة» يسهم في تنمية مهارات التفكير وضبط الذات من خلال القراءة للمتعة في المنزل. على مدى ستة أشهر ازداد عدد الكتب في المنازل وارتفعت نسبة الأطفال الذين يعدون القراءة هواية. وحقق الأطفال الذين ازدادت أنشطة القراءة لديهم تحسنًا أكبر في مهارات التفكير وضبط الذات، خصوصًا الأصغر سنًا وأبناء الأسر منخفضة الدخل.",
          "thumb": "assets/research/publications/pub-17-easychair.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/08/EasyChair-Logo.png?fit=136%2C136&ssl=1",
          "url": "https://easychair.org/publications/paper/sjDr",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "child-development",
            "education",
            "reading"
          ],
          "publicationTypesEn": [
            "conference-proceeding"
          ],
          "publicationTypesAr": [
            "research-report"
          ]
        },
        {
          "id": "pub-18",
          "dateEn": "31, May 2020",
          "dateAr": "31, مايو 2020",
          "titleEn": "“Dad, read us a story!” An ecological systems approach to understanding fathers’ perceptions on shared storybook reading in Jordan",
          "titleAr": "“أبي، اقرأ لنا قصة!” مقاربة النظم البيئية لفهم تصورات الآباء حول القراءة القصصية المشتركة في الأردن",
          "descEn": "Reading with children helps support their learning and development, yet fathers are often less involved in shared reading than mothers, particularly in the Middle East and North Africa. This study explored how We Love Reading influenced fathers' involvement in reading with their children and how this affected their families and communities in Jordan. Researchers interviewed fathers who had completed the program to learn about their experiences before and after becoming We Love Reading ambassadors. The study found that many fathers initially viewed reading with children as the mother's responsibility and were not actively involved. After participating in the program, all of the fathers continued reading with their own children, many also read to other children, and they encouraged family members and people in their communities to do the same. These findings suggest that engaging fathers in shared reading can strengthen their involvement in children's learning while inspiring a wider culture of reading within families and communities.",
          "descAr": "استكشفت الدراسة مشاركة الآباء في القراءة المشتركة في الأردن وأثر \"نحن نحب القراءة\" عليها. أظهرت المقابلات أن كثيرًا من الآباء كانوا يعدون القراءة للأطفال مسؤولية الأم، لكن بعد البرنامج واصل جميع الآباء القراءة لأطفالهم، وبدأ كثيرون القراءة لأطفال آخرين وتشجيع الأسرة والمجتمع على ذلك. وتشير النتائج إلى أن إشراك الآباء يعزز دورهم في التعلم وينشر ثقافة القراءة.",
          "thumb": "assets/research/publications/pub-18-lund.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/lund.png?fit=280%2C280&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2020/07/Madina-Olomi-Masters-Thesis.pdf",
          "localPdf": "",
          "targetGroups": [
            "adults",
            "children",
            "fathers"
          ],
          "subjects": [
            "parenting",
            "reading"
          ],
          "publicationTypesEn": [
            "master-thesis"
          ],
          "publicationTypesAr": [
            "master-thesis"
          ]
        },
        {
          "id": "pub-19",
          "dateEn": "15, May 2019",
          "dateAr": "15, مايو 2019",
          "titleEn": "Knowledge management in the development of ‘We Love Reading’",
          "titleAr": "إدارة المعرفة في تطوير برنامج “نحن نحب القراءة”",
          "descEn": "As organizations grow, finding effective ways to share knowledge and learn from experience becomes essential to sustaining their impact. This study explored how We Love Reading manages knowledge, shares successful practices, and expands its work across different communities. Researchers used interviews and observations to understand the organization's approach, the challenges it faced, and the role of leadership in supporting this process. The study found that We Love Reading relies on shared principles, practical tools, and clear guidance to help volunteers and staff exchange knowledge and replicate the program. As the organization grew, it faced challenges in introducing new knowledge management systems and encouraging people to adopt them. Strong leadership helped overcome these challenges by building trust, supporting innovation, and motivating staff to embrace new ways of working. These findings highlight the importance of effective knowledge sharing and collaborative leadership in helping social organizations grow while maintaining the quality and consistency of their work.",
          "descAr": "استكشفت الدراسة إدارة المعرفة في «نحن نحب القراءة» وآليات تبادل الممارسات والتوسع. أظهرت المقابلات والملاحظات أن البرنامج يعتمد على مبادئ وأدوات وإرشادات مشتركة تساعد على نقل المعرفة وتكرار التطبيق. ومع التوسع ظهرت تحديات في إدخال أنظمة جديدة لإدارة المعرفة، وأسهمت القيادة الفاعلة في تجاوزها عبر بناء الثقة وتشجيع الابتكار وتبني أساليب عمل جديدة.",
          "thumb": "assets/research/publications/pub-19-cbs.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/06/cbs-coursera-logo-square__1280x1280px.png?fit=180%2C180&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2020/06/Masters_Thesis_Dyar_WLR_case.pdf",
          "localPdf": "",
          "targetGroups": [
            "adults"
          ],
          "subjects": [
            "program"
          ],
          "publicationTypesEn": [
            "master-thesis"
          ],
          "publicationTypesAr": [
            "master-thesis"
          ]
        },
        {
          "id": "pub-20",
          "dateEn": "16, Apr 2019",
          "dateAr": "16, أبريل 2019",
          "titleEn": "Exploring a newly developed measure to assess children’s interest in school in Jordan. Presented at the 63rd Annual Conference of the Comparative and International Education Society in San Francisco 2019",
          "titleAr": "استكشاف أداة حديثة لقياس اهتمام الأطفال بالمدرسة في الأردن (ورقة مقدمة في المؤتمر السنوي الثالث والستين للجمعية الدولية للتعليم المقارن والدولي – سان فرانسيسكو، 2019)",
          "descEn": "Children's interest in school plays an important role in their learning, motivation, and academic success, yet little is known about how children in Jordan feel about school. This study developed and tested a simple questionnaire to measure school interest among Jordanian children, focusing on both their overall feelings about school and their interest in reading. Researchers worked with 325 children to better understand how school interest varied across different groups. The study found that most children reported moderate to high levels of interest in school. However, older children and boys were generally less interested in school than younger children and girls. These findings suggest that encouraging school engagement, particularly among boys and older students, may help improve motivation and support children's learning. They also provide a practical tool for understanding children's attitudes toward school and identifying where additional support may be needed.",
          "descAr": "هدفت الدراسة إلى تطوير واختبار استبيان مبسط لقياس اهتمام الأطفال الأردنيين بالمدرسة والقراءة. شارك 325 طفلًا. أفاد معظمهم باهتمام متوسط إلى مرتفع بالمدرسة، لكن الأطفال الأكبر سنًا والذكور أظهروا اهتمامًا أقل من الأصغر سنًا والإناث. وتشير النتائج إلى أهمية تعزيز ارتباط هذه الفئات بالمدرسة، كما تقدم أداة عملية لفهم اتجاهات الأطفال وتحديد من يحتاجون إلى دعم إضافي.",
          "thumb": "assets/research/publications/pub-20-cies.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/08/CIES-education-for-sustainability-2019.png?fit=537%2C523&ssl=1",
          "url": "https://convention2.allacademic.com/one/cies/cies19/index.php?program_focus=view_paper&selected_paper_id=1479611&cmd=online_program_direct_link&sub_action=online_program",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "child-development",
            "education",
            "reading"
          ],
          "publicationTypesEn": [
            "conference-proceeding"
          ],
          "publicationTypesAr": [
            "research-report"
          ]
        },
        {
          "id": "pub-21",
          "dateEn": "02, Apr 2019",
          "dateAr": "02, أبريل 2019",
          "titleEn": "Fostering Literate Environments: Increasing the Reach of the “We Love Reading” Program",
          "titleAr": "تعزيز البيئات الداعمة للقراءة: توسيع نطاق برنامج “نحن نحب القراءة”",
          "descEn": "This report evaluates the We Love Reading program and how it can expand its reach while maintaining its impact. Drawing on research, interviews, and organizational data, it finds that the program's greatest strengths are its adaptability, sustainability, and lasting impact within communities. It also identifies opportunities to strengthen impact measurement, improve access to books, address language barriers, and enhance organizational systems, including governance and long-term funding. The report concludes that combining improvements to the existing program with partnerships with international organizations offers the most effective path to reaching more children while preserving its community-led approach.",
          "descAr": "قيّم التقرير «نحن نحب القراءة» وسبل توسيع نطاقه مع الحفاظ على أثره المجتمعي. حددت الأدبيات والمقابلات وبيانات المؤسسة المرونة والاستدامة والأثر طويل الأمد بوصفها نقاط قوة رئيسية. كما أوصى بتطوير قياس الأثر والوصول إلى الكتب ومعالجة التحديات اللغوية وتحسين الحوكمة والتمويل المستدام. وخلص إلى أن تطوير البرنامج وبناء الشراكات الدولية هو النهج الأكثر فاعلية للتوسع مع الحفاظ على طابعه المجتمعي.",
          "thumb": "assets/research/publications/pub-21-harvard-kennedy.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2020/08/harvard-kennedy-school-1.png?fit=600%2C600&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2020/08/Final-PAE.pdf",
          "localPdf": "",
          "targetGroups": [
            "adults",
            "children"
          ],
          "subjects": [
            "program"
          ],
          "publicationTypesEn": [
            "master-thesis"
          ],
          "publicationTypesAr": [
            "master-thesis"
          ]
        },
        {
          "id": "pub-22",
          "dateEn": "01, Jun 2017",
          "dateAr": "01, يونيو 2017",
          "titleEn": "Reading social stories in the community: A promising intervention for promoting children’s environmental knowledge and behavior in Jordan",
          "titleAr": "قراءة القصص الاجتماعية في المجتمع: تدخل واعد لتعزيز المعرفة والسلوك البيئي لدى الأطفال في الأردن",
          "descEn": "Encouraging children to care for the environment is an important part of promoting sustainable communities. This study explored whether We Love Reading could increase children's environmental awareness by using stories that addressed issues such as water conservation, electricity use, and littering. Researchers examined changes in children's environmental knowledge and collected parents' reports on their children's behavior after participating in the program. The study found that children gained a better understanding of environmental issues, while parents reported positive changes in everyday behaviors, including reducing electricity and water consumption and avoiding littering. These findings suggest how reading stories in community settings can be adapted school and community curricula to develop awareness on environmental issues.",
          "descAr": "استكشفت الدراسة قدرة «نحن نحب القراءة» على تعزيز الوعي البيئي باستخدام قصص عن ترشيد المياه والكهرباء والحد من النفايات. اكتسب الأطفال فهمًا أفضل للقضايا البيئية، وأفاد أولياء الأمور بتغيرات إيجابية في سلوكياتهم اليومية، مثل ترشيد الاستهلاك وعدم رمي النفايات. وتشير النتائج إلى أن القصص المجتمعية أداة واعدة يمكن توظيفها في المناهج والبرامج لتعزيز الوعي البيئي.",
          "thumb": "assets/research/publications/pub-22-env-education.jpg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2022/07/The-Journal-of-Environmental-Education.jpg?fit=200%2C287&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2019/12/Environment_Study_2017.pdf",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "education",
            "reading"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-23",
          "dateEn": "31, May 2017",
          "dateAr": "31, مايو 2017",
          "titleEn": "Evaluation of the We Love Reading program",
          "titleAr": "تقييم برنامج “نحن نحب القراءة”",
          "descEn": "This report studies the significance and effect of the We Love Reading program by evaluating the extent of increase in children’s attitude towards reading. The research found that the impact on children ages 4-5 proved to be more significant that middle and late stages. Overall, the program indicated a slight increase in children’ willingness to go to school by both children and parents’ observation. This was mostly due to children’s already high willingness to go to school before the program was conducted. The research found that reading practices and willingness to go to school did not differ according to children’s gender and place indicating an equal increase regarding the reading practices and willingness to go to school.",
          "descAr": "قيّمت الدراسة أثر «نحن نحب القراءة» في اتجاهات الأطفال نحو القراءة وتحقيق أهداف البرنامج. كان الأثر أكبر لدى الأطفال من 4 إلى 5 سنوات مقارنة بالأكبر سنًا. كما ظهرت زيادة طفيفة في الرغبة في الذهاب إلى المدرسة، مع كون المستوى الأساسي مرتفعًا أصلًا. ولم تختلف ممارسات القراءة أو الرغبة في المدرسة بحسب جنس الطفل أو مكان الإقامة، ما يشير إلى تقارب الأثر بين الفئات.",
          "thumb": "assets/research/publications/pub-23-unicef.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2017/01/unicef-logo.png?fit=600%2C614&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2020/03/UNICEF-Brief-flyer-EN.pdf",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "education",
            "reading"
          ],
          "publicationTypesEn": [
            "research-report"
          ],
          "publicationTypesAr": [
            "conference-proceeding"
          ]
        },
        {
          "id": "pub-24",
          "dateEn": "30, May 2017",
          "dateAr": "30, مايو 2017",
          "titleEn": "We Love Reading – A Women’s Literacy Program in the Arab World",
          "titleAr": "“نحن نحب القراءة”: برنامج لمحو الأمية وتعزيز تمكين المرأة في العالم العربي",
          "descEn": "Women around the world continue to face barriers to leadership, education, and opportunities for meaningful participation in their communities. This paper describes how We Love Reading supports women's empowerment by training local women to lead community read-aloud sessions for children. The training combines reading promotion with activities that strengthen leadership, communication, public speaking, confidence, and entrepreneurship, preparing women to become active community leaders. By creating neighborhood libraries and encouraging reading for pleasure, women take on visible roles that promote learning and community engagement. The paper suggests that this approach has the potential to strengthen women's leadership, increase their confidence, and support their participation in community decision-making while fostering a culture of reading among children and families.",
          "descAr": "تستعرض الورقة مساهمة «نحن نحب القراءة» في تمكين المرأة عبر تدريب النساء على تنظيم جلسات القراءة الجهرية للأطفال. يجمع البرنامج بين تشجيع القراءة وتنمية القيادة والتواصل والتحدث أمام الجمهور والثقة بالنفس وريادة الأعمال. ومن خلال المكتبات المجتمعية والقراءة للمتعة، تؤدي النساء أدوارًا فاعلة في التعلم والمشاركة المجتمعية، بما يعزز القيادة النسائية والمشاركة في صنع القرار وثقافة القراءة.",
          "thumb": "assets/research/publications/pub-24-ohio-ascd.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2022/07/Ohio-ASCD-Journal.png?fit=541%2C578&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2019/12/OH-ASCD-Winter-2016-WLR.pdf",
          "localPdf": "",
          "targetGroups": [
            "adults"
          ],
          "subjects": [
            "empowerment",
            "reading"
          ],
          "publicationTypesEn": [
            "journal-article"
          ],
          "publicationTypesAr": [
            "journal-article"
          ]
        },
        {
          "id": "pub-25",
          "dateEn": "28, Feb 2017",
          "dateAr": "28, فبراير 2017",
          "titleEn": "Impact Assessment We Love Reading",
          "titleAr": "تقييم الأثر لبرنامج “نحن نحب القراءة”",
          "descEn": "Creating opportunities for children to enjoy reading depends not only on access to books but also on strong community support and effective volunteer programs. This independent impact assessment examined the We Love Reading program to understand how well it achieved its goals, how it supported volunteers and communities, and how it could strengthen its long-term impact. Researchers used surveys, interviews, focus group discussions, observations, and document reviews to gather feedback from volunteers, staff, partners, parents, children, and community members. The assessment found that the program was highly effective in fostering a love of reading among children and was valued for its community-based, volunteer-led approach, which made it both sustainable and adaptable. Participants also described positive changes in children's attitudes and behaviours and recognized the program's role in supporting women's leadership within their communities. At the same time, the assessment identified opportunities to strengthen volunteer support, improve monitoring and evaluation systems, clarify the program's theory of change, and expand training to further support community leadership and long-term sustainability.",
          "descAr": "قيّمت دراسة مستقلة «نحن نحب القراءة» باستخدام الاستبيانات والمقابلات ومجموعات النقاش والملاحظات وتحليل الوثائق. أظهرت النتائج فاعلية كبيرة في غرس حب القراءة، واستدامة النهج القائم على المجتمع والتطوع وقابليته للتكيف، إلى جانب تغييرات إيجابية في اتجاهات الأطفال وسلوكياتهم ودعم القيادة النسائية. وأوصى التقييم بتعزيز دعم المتطوعين والمتابعة والتقييم ونظرية التغيير والتدريب لضمان الاستدامة.",
          "thumb": "assets/research/publications/pub-25-integrated.jpg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/08/integrated_insight-to-impact.jpg?fit=200%2C200&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2020/06/WLR-Impact-assessment-Integrated-FULL.pdf",
          "localPdf": "",
          "targetGroups": [
            "adults",
            "children"
          ],
          "subjects": [
            "empowerment",
            "program",
            "reading"
          ],
          "publicationTypesEn": [
            "research-report"
          ],
          "publicationTypesAr": [
            "conference-proceeding"
          ]
        },
        {
          "id": "pub-26",
          "dateEn": "30, Aug 2014",
          "dateAr": "30, أغسطس 2014",
          "titleEn": "The Impact of the We Love Reading Pilot Program on the Psychosocial Health of Participating Children in Zaatari Refugee Camp",
          "titleAr": "أثر البرنامج التجريبي “نحن نحب القراءة” في الصحة النفسية والاجتماعية للأطفال المشاركين في مخيم الزعتري للاجئين",
          "descEn": "Children living in refugee settings often face challenges that can affect their emotional and social well-being. This report examined how the We Love Reading pilot program influenced children participating in reading sessions in Za’atari Refugee Camp in Jordan. Researchers collected information before and after the program and interviewed storytellers about their experiences. The findings showed improvements in children's emotional and social well-being, behaviour, relationships with others, and kind and helpful behaviour. Storytellers also described greater interest in reading, writing, and learning among participating children. While the report notes that other activities in the camp may also have contributed to these changes, the findings suggest that community-based reading programs can provide meaningful support for children's well-being while encouraging a love of reading.",
          "descAr": "استكشفت الدراسة أثر البرنامج التجريبي «نحن نحب القراءة» على الأطفال في مخيم الزعتري. أظهرت البيانات قبل البرنامج وبعده تحسنًا في الصحة النفسية والاجتماعية والسلوك والعلاقات، وزيادة في التعاون ومساعدة الآخرين. كما أفاد رواة القصص بارتفاع اهتمام الأطفال بالقراءة والكتابة والتعلم. ورغم احتمال مساهمة أنشطة أخرى في التحسن، تشير النتائج إلى قيمة برامج القراءة المجتمعية في دعم رفاه الأطفال.",
          "thumb": "assets/research/publications/pub-26-yale.png",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2021/06/yale.png?fit=280%2C280&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2019/12/Zaatari-Psycosocial-report-2014.pdf",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "mental-health"
          ],
          "publicationTypesEn": [
            "research-report"
          ],
          "publicationTypesAr": [
            "conference-proceeding"
          ]
        },
        {
          "id": "pub-27",
          "dateEn": "30, Jan 2014",
          "dateAr": "30, يناير 2014",
          "titleEn": "Reading about people’s feelings increases empathic concern and generosity in children",
          "titleAr": "القراءة عن مشاعر الآخرين تعزز التعاطف والكرم لدى الأطفال",
          "descEn": "Helping children understand the feelings of others can encourage kindness and positive social behaviour. This study explored whether reading stories about people's emotions and experiences could strengthen empathy among children. Researchers compared children who participated in the reading program with a control group by measuring empathy and generosity before and after the intervention. The findings showed that children who took part in the reading sessions became more generous and reported greater concern for the feelings of others, while no similar changes were found in the control group. However, the program did not affect children's sensitivity to others' physical pain. These findings suggest that reading stories focused on emotions and relationships can help foster empathy and encourage positive social behaviours such as sharing.",
          "descAr": "استكشفت الدراسة ما إذا كانت قراءة القصص التي تتناول مشاعر الآخرين تعزز التعاطف لدى الأطفال. مقارنة بالمجموعة الضابطة، أصبح المشاركون في جلسات القراءة أكثر ميلًا إلى الكرم وأكثر اهتمامًا بمشاعر الآخرين، بينما لم يظهر تغير مماثل لدى غير المشاركين. ولم يؤثر البرنامج في حساسية الأطفال تجاه الألم الجسدي لدى الآخرين. وتشير النتائج إلى أن القصص التي تركز على المشاعر والعلاقات يمكن أن تنمي التعاطف والسلوك الاجتماعي الإيجابي.",
          "thumb": "assets/research/publications/pub-27-uchicago.jpg",
          "thumbFallback": "https://i0.wp.com/welovereading.org/wp-content/uploads/2026/08/TUC-logo.jpg?fit=554%2C554&ssl=1",
          "url": "https://welovereading.org/wp-content/uploads/2019/12/Empathy-Chicago-University-2015.pdf",
          "localPdf": "",
          "targetGroups": [
            "children"
          ],
          "subjects": [
            "child-development",
            "mental-health",
            "reading"
          ],
          "publicationTypesEn": [
            "research-report"
          ],
          "publicationTypesAr": [
            "conference-proceeding"
          ]
        }
      ]
    }
  },

  footerData: {
    latestNews: [
      {
        id: "news-digital-impact",
        titleEn: "Professor Rana Dajani Participates in a Dialogue Session as Part of the “Digital Impact” Project",
        dateEn: "Nov 18, 2026",
        urlEn: "https://welovereading.org/professor-rana-dajani-participates-in-a-dialogue-session-as-part-of-the-digital-impact-project/",
        titleAr: "الدكتورة رنا الدجاني تشارك في جلسة حوارية ضمن مشروع «أثر رقمي»",
        dateAr: "نوفمبر 18, 2026",
        urlAr: "https://welovereading.org/ar/%d8%a7%d9%84%d8%af%d9%83%d8%aa%d9%88%d8%b1%d8%a9-%d8%b1%d9%86%d8%a7-%d8%a7%d9%84%d8%af%d8%ac%d8%a7%d9%86%d9%8a-%d8%aa%d8%b4%d8%a7%d8%b1%d9%83-%d9%81%d9%8a-%d8%ac%d9%84%d8%b3%d8%a9-%d8%ad%d9%88%d8%a7/"
      },
      {
        id: "news-muslim-500",
        titleEn: "Celebrating Professor Rana Dajani’s Inclusion in The Muslim 500 – 2026",
        dateEn: "Nov 15, 2026",
        urlEn: "https://welovereading.org/celebrating-professor-rana-dajanis-inclusion-in-the-muslim-500-2026/",
        titleAr: "نفخر بالدكتورة رنا الدجاني ضمن قائمة The Muslim 500 لعام 2026",
        dateAr: "نوفمبر 15, 2026",
        urlAr: "https://welovereading.org/ar/%d9%86%d9%81%d8%ae%d8%b1-%d8%a8%d8%a7%d9%84%d8%af%d9%83%d8%aa%d9%88%d8%b1%d8%a9-%d8%b1%d9%86%d8%a7-%d8%a7%d9%84%d8%af%d8%ac%d8%a7%d9%86%d9%8a-%d8%b6%d9%85%d9%86-%d9%82%d8%a7%d8%a6%d9%85%d8%a9-the-musl/"
      },
      {
        id: "news-ipsykit",
        titleEn: "Professor Rana Dajani Participates in the iPsykit! Symposium at The International Academy – Amman",
        dateEn: "Nov 15, 2026",
        urlEn: "https://welovereading.org/professor-rana-dajani-participates-in-the-ipsykit-symposium-at-the-international-academy-amman/",
        titleAr: "الدكتورة رنا الدجاني تشارك في ملتقى iPsykit! في الأكاديمية الدولية – عمّان",
        dateAr: "نوفمبر 15, 2026",
        urlAr: "https://welovereading.org/ar/%d8%a7%d9%84%d8%af%d9%83%d8%aa%d9%88%d8%b1%d8%a9-%d8%b1%d9%86%d8%a7-%d8%a7%d9%84%d8%af%d8%ac%d8%a7%d9%86%d9%8a-%d8%aa%d8%b4%d8%a7%d8%b1%d9%83-%d9%81%d9%8a-%d9%85%d9%84%d8%aa%d9%82%d9%89-ipsykit/"
      }
    ],
    usefulLinks: [
      {
        id: "faq",
        labelEn: "Frequently Asked Questions",
        labelAr: "الأسئلة الأكثر تكرارًا",
        urlEn: "https://welovereading.org/faq/",
        urlAr: "https://welovereading.org/ar/faq/"
      },
      {
        id: "calendar",
        labelEn: "Events Calendar",
        labelAr: "رزنامة الفعاليات",
        urlEn: "https://welovereading.org/calendar/",
        urlAr: "https://welovereading.org/calendar/"
      },
      {
        id: "useful-resources",
        labelEn: "Useful Resources",
        labelAr: "مصادر مفيدة",
        urlEn: "https://welovereading.org/resources/",
        urlAr: "https://welovereading.org/ar/resources/"
      },
      {
        id: "training-portal",
        labelEn: "Training Portal",
        labelAr: "منصة التدريب",
        urlEn: "https://welovereading.org/training-portal/",
        urlAr: "https://welovereading.org/ar/training-portal/"
      },
      {
        id: "jobs",
        labelEn: "Jobs",
        labelAr: "الوظائف",
        urlEn: "https://welovereading.org/jobs/",
        urlAr: "https://welovereading.org/ar/jobs/"
      }
    ],
    socialLinks: [
      {
        id: "x",
        url: "https://x.com/welovereading",
        labelEn: "Follow We Love Reading on X (Twitter)",
        labelAr: "تابع نحن نحب القراءة على منصة إكس (تويتر)"
      },
      {
        id: "facebook",
        url: "https://www.facebook.com/WLReading/",
        labelEn: "Visit We Love Reading on Facebook",
        labelAr: "تفضل بزيارة صفحة نحن نحب القراءة على فيسبوك"
      },
      {
        id: "instagram",
        url: "https://www.instagram.com/wlreading/",
        labelEn: "Follow We Love Reading on Instagram",
        labelAr: "تابع نحن نحب القراءة على إنستغرام"
      },
      {
        id: "linkedin",
        url: "https://www.linkedin.com/company/we-love-reading",
        labelEn: "Connect with We Love Reading on LinkedIn",
        labelAr: "تواصل مع نحن نحب القراءة على لينكدإن"
      },
      {
        id: "youtube",
        url: "https://www.youtube.com/channel/UCLFiXMzXlakCv6zsWo0hdXA",
        labelEn: "Subscribe to We Love Reading on YouTube",
        labelAr: "اشترك في قناة نحن نحب القراءة على يوتيوب"
      }
    ]
  }
};
