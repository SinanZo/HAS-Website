// src/i18n.jsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // CONTACT BAR
      contactBar: {
        tel: "Tel",
        mob: "Mob",
        whatsapp: "WhatsApp",
        email: "Email",
        address: "Address",
        fax: "Fax",
      },
      // NAVBAR
      navbar: {
        home: "Home",
        products: "Products",
        categories: "Categories",
        catalogues: "Catalogues",
        manufacturers: "Manufacturers",
        aboutUs: "About Us",
        contactUs: "Contact Us",
        careers: "Careers",
        signIn: "Sign In",
        register: "Register",
      },

      // CATEGORY BAR
      categoryBar: {
        headProtection: {
          label: "Head Protection",
          sub: {
            safetyHelmets: {
              label: "Safety Helmets",
              sub: {
                constructionHelmets: "Construction Helmets",
                industrialHelmets: "Industrial Helmets",
              },
            },
            earMuffs: {
              label: "Ear Muffs",
            },
          },
        },
        safetyGloves: {
          label: "Safety Gloves",
          sub: {
            workingGloves: { label: "Working Gloves" },
            nitrilGloves: { label: "Nitril Gloves" },
          },
        },
        safetyBoots: { label: "Safety Boots" },
        respirators: { label: "Respirators" },
        labelsPrinters: { label: "Labels & Printers" },
        labSupplies: { label: "Lab Supplies" },
        cartridgesFilters: { label: "Cartridges & Filters" },
        fireSafety: { label: "Fire Safety" },
        weldingProtection: { label: "Welding Protection" },
        kosmodisk: { label: "KOSMODISK" },
        workingWear: { label: "Working Wear" },
      },

      // HERO
      hero: {
        welcome: "Welcome to",
        title: "Hilmi Abu Sham & Partner Co.",
        browseProducts: "Browse Products",
        getQuote: "Get a Quote",
        safetyHelmets: "Safety Helmets",
        safetyHelmetsDesc: "High-quality helmets for ultimate head protection.",
        disposableMasks: "Disposable Masks",
        disposableMasksDesc: "Effective masks for respiratory protection.",
        earMuffs: "Ear Muffs",
        earMuffsDesc: "Comfortable ear defenders with noise reduction.",
        safetySpectacles: "Safety Spectacles",
        safetySpectaclesDesc: "Protective eyewear for industrial use.",
        respirators: "Respirators",
        respiratorsDesc: "Reliable respirators for hazardous environments.",
        cartridgesFilters: "Cartridges & Filters",
        cartridgesFiltersDesc: "Various filter cartridges for respirators.",
        labInstruments: "Lab Instruments",
        labInstrumentsDesc: "Precision instruments for lab testing.",
        incubators: "Incubators",
        incubatorsDesc: "Temperature-controlled solutions for labs.",
        testKits: "Test Kits",
        testKitsDesc: "Rapid test kits for water and industrial testing.",
        fireSafety: "Fire Safety",
        fireSafetyDesc: "Equipment and gear for fire protection.",
        weldingProtection: "Welding Protection",
        weldingProtectionDesc: "Gear and curtains for welding safety.",
        therapeuticSupport: "Therapeutic Support",
        therapeuticSupportDesc: "Spine massagers and supportive belts.",
        safetyGloves: "Safety Gloves",
        safetyGlovesDesc: "Hand protection for various industries.",
        safetyBoots: "Safety Boots",
        safetyBootsDesc: "Footwear with toe caps and slip resistance.",
        workingWear: "Working Wear",
        workingWearDesc: "Durable apparel for industrial tasks.",
        gasDetectors: "Gas Detectors",
        gasDetectorsDesc: "Monitor hazardous gas levels effectively.",
      },

      // ABOUT PAGE
      aboutPage: {
        pageTitle: "About Hilmi Abu Sham & Partner Co.",
        pageIntro:
          "Since its establishment in May 1982, our company has grown into a trusted leader in innovative safety solutions, lab equipment, and mining machines.",
        backgroundTitle: "Background",
        backgroundDesc:
          "Hilmi Abu Sham & Partner Co. was founded in May 1982 as an engineering and trading company to supply local clients with their needs in oil, gas, energy, mining, safety systems, petrochemicals, and laboratory equipment.",
        productOfferingTitle: "Product Offering",
        productOfferingDesc:
          "We specialize in high-quality safety tools and equipment that guarantee consistent performance in water testing, lab equipment, and mining machines.",
        personalSafetyTitle: "Personal Safety & Workwear Products",
        personalSafetyDesc:
          "Personal protective equipment is essential in any industrial or construction environment. Our offerings include a wide range of reliable safety products.",
        labEquipmentTitle: "Water Testing, Lab Equipment & Mining Machines",
        labEquipmentDesc:
          "We also distribute and supply various solutions for labs and mining operations.",
        manufacturersTitle: "Our Manufacturers",
        manufacturersDesc:
          "Our trusted partnerships ensure that you receive only the best quality products.",
        keyFeaturesTitle: "Key Features",
        keyFeaturesDesc:
          "We take pride in our extensive product range, reliable after-sales service, and customized safety solutions.",
        whyChooseUsTitle: "Why Choose Us",
        whyChooseUsDesc:
          "Our commitment to excellence and customer satisfaction has made us the preferred choice in the safety and lab equipment industry.",
        contactInfoTitle: "Contact Information",
        contactInfoDetails:
          "Address: Jabal Amman – Third Circle – Mithqal AL Fayez Street, Building #25, Amman 11183, Jordan\nTel: +962-6-4645651/2\nFax: +962-6-4645653\nEmails: haspco@habusham.com, enghaspco@outlook.com\nP.O. Box: 831164, Amman 11183, Jordan",
      },

      // ABOUT SUMMARY (short snippet on homepage)
      aboutSummary: {
        companyBriefTitle: "Company Brief",
        companyBriefDesc:
          "Hilmi Abu Sham & Partner Co. (HASPCO) was established in May 1982 as an Engineering & Trading company supplying local clients with requirements in oil, gas, energy, mining, safety systems, petrochemical industries, and laboratory equipment. We specialize in high-quality safety tools, water testing & lab instruments, and mining machines.",
        readMore: "Read More",
      },

      // MANUFACTURERS
      manufacturers: {
        title: "Our Trusted Manufacturers",
        description: "Select a manufacturer to view available categories.",
        noManufacturers: "No manufacturers available.",
        noCategories: "No categories found.",
        allManufacturers: "All Manufacturers",
        allCategories: "All Categories",
      },

      // FEATURED PRODUCTS
      featuredProducts: {
        title: "Featured Products",
        orderNow: "Order Now",
        viewAll: "View All Products",
        noFeatured: "No featured products found.",
        viewDetails: "View Details",
      },

      // CONTACT US
      contact: {
        title: "Contact Us",
        description: "We’re here to assist you. Reach out to us anytime!",
        companyName: "Hilmi Abu Sham & Partner Co.",
        address:
          "Jabal Amman - Third Circle - Mithqal AL Fayez Street, Building #25, Amman 11183, Jordan",
        phone: "Phone",
        mobile: "Mobile",
        email: "Email",
        sendMessage: "Send Us a Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendButton: "Send Message",
        successMessage: "Message sent successfully!",
        visitUs: "Visit Us",
        website: "Website",
      },

      // FOOTER
      footer: {
        company: "Hilmi Abu Sham & Partner Co.",
        address:
          "Jabal Amman - Third Circle - Mithqal AL Fayez Street, Building #25, Amman 11183, Jordan",
        quickLinks: "Quick Links",
        aboutUs: "About Us",
        products: "Products",
        contactUs: "Contact Us",
        careers: "Careers",
        privacyPolicy: "Privacy Policy",
        terms: "Terms of Use",
        followUs: "Follow Us",
        copyright: "© 2025 Hilmi Abu Sham & Partner Co. All rights reserved.",
      },
    },
  },

  ar: {
    translation: {
      // CONTACT BAR
      contactBar: {
        tel: "هاتف",
        mob: "موبايل",
        whatsapp: "واتساب",
        email: "البريد الإلكتروني",
        address: "العنوان",
        fax: "فاكس",
      },

      // NAVBAR
      navbar: {
        home: "الرئيسية",
        products: "المنتجات",
        categories: "الفئات",
        catalogues: "الكتالوجات",
        manufacturers: "المصنّعون",
        aboutUs: "من نحن",
        contactUs: "اتصل بنا",
        careers: "الوظائف",
        signIn: "تسجيل الدخول",
        register: "إنشاء حساب",
      },

      // CATEGORY BAR
      categoryBar: {
        headProtection: {
          label: "حماية الرأس",
          sub: {
            safetyHelmets: {
              label: "خوذات الأمان",
              sub: {
                constructionHelmets: "خوذات البناء",
                industrialHelmets: "خوذات صناعية",
              },
            },
            earMuffs: {
              label: "واقيات الأذن",
            },
          },
        },
        safetyGloves: {
          label: "قفازات الأمان",
          sub: {
            workingGloves: { label: "قفازات العمل" },
            nitrilGloves: { label: "قفازات نيتريل" },
          },
        },
        safetyBoots: { label: "أحذية الأمان" },
        respirators: { label: "أجهزة التنفس" },
        labelsPrinters: { label: "الملصقات والطابعات" },
        labSupplies: { label: "مستلزمات المختبر" },
        cartridgesFilters: { label: "الخراطيش والفلاتر" },
        fireSafety: { label: "السلامة من الحريق" },
        weldingProtection: { label: "حماية اللحام" },
        kosmodisk: { label: "KOSMODISK" },
        workingWear: { label: "ملابس العمل" },
      },

      // HERO
      hero: {
        welcome: "مرحبًا بكم في",
        title: "شركة حلمي أبو شام وشريكته",
        browseProducts: "تصفح المنتجات",
        getQuote: "احصل على تسعيرة",
        safetyHelmets: "خوذات الأمان",
        safetyHelmetsDesc: "خوذات عالية الجودة للحماية القصوى للرأس.",
        disposableMasks: "أقنعة يمكن التخلص منها",
        disposableMasksDesc: "أقنعة فعالة للحماية التنفسية.",
        earMuffs: "واقيات الأذن",
        earMuffsDesc: "واقيات أذن مريحة مع تخفيض للضوضاء.",
        safetySpectacles: "نظارات الأمان",
        safetySpectaclesDesc: "نظارات وقائية للاستخدام الصناعي.",
        respirators: "أجهزة التنفس",
        respiratorsDesc: "أجهزة موثوقة للعمل في بيئات خطرة.",
        cartridgesFilters: "الخراطيش والفلاتر",
        cartridgesFiltersDesc: "مجموعة متنوعة من الفلاتر لأجهزة التنفس.",
        labInstruments: "أجهزة المختبر",
        labInstrumentsDesc: "أجهزة دقيقة للاختبارات المختبرية.",
        incubators: "الحاضنات",
        incubatorsDesc: "حلول حرارية ثابتة للمختبرات.",
        testKits: "أطقم الاختبار",
        testKitsDesc: "أطقم اختبار سريعة للمياه والصناعة.",
        fireSafety: "السلامة من الحريق",
        fireSafetyDesc: "معدات وأدوات مكافحة الحرائق.",
        weldingProtection: "حماية اللحام",
        weldingProtectionDesc: "معدات وستائر لحماية اللحام.",
        therapeuticSupport: "الدعم العلاجي",
        therapeuticSupportDesc: "أجهزة تدليك ودعامات للعمود الفقري.",
        safetyGloves: "قفازات الأمان",
        safetyGlovesDesc: "حماية لليدين لمختلف الصناعات.",
        safetyBoots: "أحذية الأمان",
        safetyBootsDesc: "أحذية مع مقدمة معدنية ومقاومة للانزلاق.",
        workingWear: "ملابس العمل",
        workingWearDesc: "ملابس متينة تناسب الأعمال الصناعية.",
        gasDetectors: "كواشف الغازات",
        gasDetectorsDesc: "مراقبة مستويات الغازات الخطرة بكفاءة.",
      },

      // ABOUT PAGE
      aboutPage: {
        pageTitle: "حول شركة حلمي أبو شام وشريكته",
        pageIntro:
          "منذ تأسيسها في مايو 1982، نمت شركتنا لتصبح رائدًا موثوقًا في تقديم حلول السلامة والمعدات المختبرية وآلات التعدين.",
        backgroundTitle: "الخلفية",
        backgroundDesc:
          "تأسست شركة حلمي أبو شام وشريكته في مايو 1982 كشركة هندسية وتجارية لتزويد العملاء المحليين باحتياجاتهم في مجالات النفط والغاز والطاقة والتعدين وأنظمة السلامة والبتروكيماويات والمختبرات.",
        productOfferingTitle: "مجال المنتجات",
        productOfferingDesc:
          "نختص في توفير أدوات السلامة عالية الجودة والمعدات التي تضمن أداءً متسقًا في اختبار المياه والمختبرات وآلات التعدين.",
        personalSafetyTitle: "منتجات السلامة الشخصية وملابس العمل",
        personalSafetyDesc:
          "معدات الوقاية الشخصية أساسية في أي بيئة صناعية أو إنشائية. نقدم مجموعة واسعة من المنتجات الموثوقة.",
        labEquipmentTitle: "اختبار المياه، المعدات المختبرية وآلات التعدين",
        labEquipmentDesc:
          "نقوم أيضًا بتوزيع وتوريد حلول متنوعة للمختبرات وعمليات التعدين.",
        manufacturersTitle: "مصنّعونا",
        manufacturersDesc: "شراكاتنا الموثوقة تضمن حصولكم على أفضل المنتجات جودةً.",
        keyFeaturesTitle: "أهم الميزات",
        keyFeaturesDesc:
          "نفتخر بتشكيلة منتجات واسعة، وخدمة ما بعد البيع موثوقة، وحلول سلامة مخصصة.",
        whyChooseUsTitle: "لماذا تختارنا",
        whyChooseUsDesc:
          "إن التزامنا بالتميز ورضا العملاء جعلنا الخيار المفضل في مجال معدات السلامة والمختبرات.",
        contactInfoTitle: "معلومات الاتصال",
        contactInfoDetails:
          "العنوان: جبل عمان – الدوار الثالث – شارع مثقال الفايز، مبنى رقم 25، عمان 11183، الأردن\nالهاتف: +962-6-4645651/2\nالفاكس: +962-6-4645653\nالبريد الإلكتروني: haspco@habusham.com, enghaspco@outlook.com\nصندوق البريد: 831164، عمان 11183، الأردن",
      },

      // ABOUT SUMMARY (short snippet on homepage)
      aboutSummary: {
        companyBriefTitle: "نبذة عن الشركة",
        companyBriefDesc:
          "تأسست شركة حلمي أبو شام وشريكته (HASPCO) في مايو 1982 كشركة هندسية وتجارية لتزويد العملاء المحليين باحتياجاتهم في مجالات النفط والغاز والطاقة والتعدين وأنظمة السلامة والبتروكيماويات والمختبرات. نختص في توفير أدوات السلامة عالية الجودة وأجهزة اختبار المياه والمختبرات وآلات التعدين.",
        readMore: "اقرأ المزيد",
      },

      // MANUFACTURERS
      manufacturers: {
        title: "مصنّعونا الموثوقون",
        description: "اختر مصنّعًا لعرض الفئات المتاحة.",
        noManufacturers: "لا يوجد مصنّعون متاحون.",
        noCategories: "لم يتم العثور على فئات.",
        allManufacturers: "جميع المصنّعين",
        allCategories: "جميع الفئات",
      },

      // FEATURED PRODUCTS
      featuredProducts: {
        title: "المنتجات المميزة",
        orderNow: "اطلب الآن",
        viewAll: "عرض جميع المنتجات",
        noFeatured: "لم يتم العثور على منتجات مميزة.",
        viewDetails: "عرض التفاصيل",
      },

      // CONTACT US
      contact: {
        title: "اتصل بنا",
        description: "نحن هنا لمساعدتك. تواصل معنا في أي وقت!",
        companyName: "شركة حلمي أبو شام وشريكته",
        address:
          "جبل عمان - الدوار الثالث - شارع مثقال الفايز، مبنى #25، عمان 11183، الأردن",
        phone: "هاتف",
        mobile: "موبايل",
        email: "بريد إلكتروني",
        sendMessage: "أرسل رسالة",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك الإلكتروني",
        messagePlaceholder: "رسالتك",
        sendButton: "إرسال",
        successMessage: "تم إرسال الرسالة بنجاح!",
        visitUs: "زرنا",
        website: "الموقع الإلكتروني",
      },

      // FOOTER
      footer: {
        company: "شركة حلمي أبو شام وشريكته",
        address:
          "جبل عمان - الدوار الثالث - شارع مثقال الفايز، مبنى #25، عمان 11183، الأردن",
        quickLinks: "روابط سريعة",
        aboutUs: "من نحن",
        products: "المنتجات",
        contactUs: "اتصل بنا",
        careers: "الوظائف",
        privacyPolicy: "سياسة الخصوصية",
        terms: "شروط الاستخدام",
        followUs: "تابعنا",
        copyright: "© 2025 شركة حلمي أبو شام وشريكته. جميع الحقوق محفوظة.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    supportedLngs: ["en", "ar"],
  });

// Dynamically set <html> lang and dir attributes
i18n.on("languageChanged", (lang) => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
});

export default i18n;
