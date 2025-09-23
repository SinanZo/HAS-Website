// src/data/productsData.js
/* eslint-disable no-sparse-arrays */

const productsData = [
  // ===============================
  // 1) HEAD PROTECTION
  // ===============================

  // Safety Helmets
  {
    id: 1,
    name: "Zircon1",
    category: "Head Protection",
    subCategory: "Safety Helmets",
    subSubCategory: "",
    distributor: "Delta Plus",
    image: "/images/zircon1.png",
    description: "Electrically insulated safety helmet with adjustable strap.",
    brief: "Electrically insulated safety helmet with adjustable strap.",
    colors: ["green", "orange", "blue", "grey", "yellow", "white", "red"],
    sizes: ["Adjustable"],
    colorVariants: [
      { name: "green", gallery: ["/images/zircon1_green.png"] },
      { name: "orange", gallery: ["/images/zircon1_orange.png"] },
      { name: "blue", gallery: ["/images/zircon1_blue.png"] },
      { name: "grey", gallery: ["/images/zircon1_gray.png"] },
      { name: "yellow", gallery: ["/images/zircon1_yellow.png"] },
      { name: "white", gallery: ["/images/zircon1_white.png"] },
      { name: "red", gallery: ["/images/zircon1_red.png"] }
    ],
    gallery: [
      "/images/zircon1.png",
      "/images/zircon1_2.png",
      "/images/zircon1_3.png"
    ],
    additionalInfo: {
      ShellMaterial: "HDPE - Polypropylene - Non vented",
      HeadSize: "53-63 cm | Slip ratchet",
      TextileHarness: "8 points",
      NeckbandMaterial: "Polyester",
      Weight: "330 g",
      Standards: "EN397 -10°C +50°C 440VAC EN 50365 Class 0"
    }
  },
  {
    id: 2,
    name: "Diamond5",
    category: "Head Protection",
    subCategory: "Safety Helmets",
    distributor: "Delta Plus",
    image: "/images/diamond5.png",
    description:
      "Safety helmet featuring a sporty design for upright and inverted wear for maximum versatility.",
    brief:
      "Safety helmet featuring a sporty design for upright and inverted wear for maximum versatility.",
    colors: ["Grey-Yellow", "green", "red", "yellow", "black", "blue", "orange", "white"],
    sizes: ["Adjustable"],
    colorVariants: [
      { name: "Grey-Yellow", gallery: ["/images/diamond5_Grey-Yellow.png"] },
      { name: "green", gallery: ["/images/diamond5_green.png"] },
      { name: "red", gallery: ["/images/diamond5_red.png"] },
      { name: "yellow", gallery: ["/images/diamond5_yellow.png"] },
      { name: "black", gallery: ["/images/diamond5_black.png"] },
      { name: "blue", gallery: ["/images/diamond5_blue.png"] },
      { name: "orange", gallery: ["/images/diamond5_orange.png"] },
      { name: "white", gallery: ["/images/diamond5_white.png"] }
    ],
    gallery: [
      "/images/diamond5.png",
      "/images/diamond5_2.png",
      "/images/diamond5_3.png"
    ],
    additionalInfo: {
      "Shell material": "ABS - Non vented",
      "Head size": "53-63 cm, Wheel ratchet - Rotor adjustment",
      "Textile harness": "PA (Polyamide) - 8 points",
      "Neckband material": "Textiles - EVA foam",
      Weight: "404 g",
      "Face shield": "Accessory added to order",
      Standards: "EN397 MM LD -30°C +50°C 440VAC EN 50365 Class 0"
    }
  },
  {
    id: 3,
    name: "QUARTZ UP III",
    category: "Head Protection",
    subCategory: "Safety Helmets",
    distributor: "Delta Plus",
    image: "/images/quartz_up_iii.png",
    description: "Safety helmet with short visor equipped with rotor system for easy adjustment.",
    brief: "Safety helmet with short visor equipped with rotor system.",
    colors: ["red", "blue", "orange", "white", "yellow", "green"],
    sizes: ["S", "M", "L"],
    colorVariants: [
      { name: "red", gallery: ["/images/quartz_up_iii_red.png"] },
      { name: "blue", gallery: ["/images/quartz_up_iii_blue.png"] },
      { name: "orange", gallery: ["/images/quartz_up_iii_orange.png"] },
      { name: "white", gallery: ["/images/quartz_up_iii_white.png"] },
      { name: "yellow", gallery: ["/images/quartz_up_iii_yellow.png"] },
      { name: "green", gallery: ["/images/quartz_up_iii_green.png"] }
    ],
    gallery: [
      "/images/quartz_up_iii.png",
      "/images/quartz_up_iii_2.png",
      "/images/quartz_up_iii_3.png"
    ],
    additionalInfo: {
      "Shell Material": "Polypropylene - Non vented",
      "Head Measurement": "53-63 cm",
      "Rotor Ratchet": "Rotor adjustment",
      "Textile": "PA (Polyamide) - 8 points",
      "Comfort Headband": "Polyester - EVA foam",
      "Chin Strap": "Optional",
      Weight: "350 g",
      "Face Shield": "Accessory added to order",
      Standards: "EN397 MM LD -30°C +50°C 440VAC EN 50365 Class 0"
    }
  },
  {
    id: 4,
    name: "QUARTZ UP IV",
    category: "Head Protection",
    subCategory: "Safety Helmets",
    distributor: "Delta Plus",
    image: "/images/quartz_up_iv.png",
    description:
      "Ventilated safety helmet with short visor equipped with rotor system for easy adjustment.",
    brief: "Ventilated safety helmet with short visor and rotor system.",
    colors: ["green", "white", "yellow", "blue", "red", "orange"],
    sizes: ["Adjustable"],
    colorVariants: [
      { name: "green", gallery: ["/images/quartz_up_iv_green.png"] },
      { name: "white", gallery: ["/images/quartz_up_iv_white.png"] },
      { name: "yellow", gallery: ["/images/quartz_up_iv_yellow.png"] },
      { name: "blue", gallery: ["/images/quartz_up_iv_blue.png"] },
      { name: "red", gallery: ["/images/quartz_up_iv_red.png"] },
      { name: "orange", gallery: ["/images/quartz_up_iv_orange.png"] }
    ],
    gallery: [
      "/images/quartz_up_iv.png",
      "/images/quartz_up_iv_2.png",
      "/images/quartz_up_iv_3.png",
      "/images/quartz_up_iv_4.png",
      "/images/quartz_up_iv_5.png",
      "/images/quartz_up_iv_6.png",
      "/images/quartz_up_iv_7.png"
    ],
    additionalInfo: {
      "Shell Material": "Polypropylene - Vented",
      "Head Measurement": "53-63 cm",
      "Rotor Ratchet": "Rotor adjustment",
      "Textile": "PA (Polyamide) - 8 points",
      "Comfort Headband": "Polyester",
      Weight: "350 g",
      "Face Shield": "Accessory added to order",
      Standards: "CE EN397 MM -30°C +50°C "
    }
  },

  // ===============================
  // 2) HEAD PROTECTION - SAFETY SPECTACLES
  // ===============================
  {
    id: 5,
    name: "Brava2 AB",
    category: "Head Protection",
    subCategory: "Safety Spectacles",
    distributor: "Delta Plus",
    image: "/images/brava2_ab.png",
    description: "Clear-lens safety glasses with side protection and anti-fog coating.",
    brief: "Clear-lens safety glasses with side protection.",
    colors: ["clear", "smoke"],
    sizes: [],
    colorVariants: [
      { name: "clear", gallery: ["/images/brava2_ab.png"] },
      { name: "black", gallery: ["/images/brava2_ab_smoke.png"] }
    ],
    additionalInfo: {
      Lens: "Polycarbonate - Monoblock | Curved 9.5 | Frame Support : Temples - Polycarbonate | Side Protection | Weight : 25 g",
      Standards: "CE; EN166, 1 FT / FT; EN170, UV 2C - 1.2; ANSI-ISEA Z87.1 - Impact; Z87+ U6"
    }
  },
  {
    id: 6,
    name: "Galeras",
    category: "Head Protection",
    subCategory: "Safety Spectacles",
    distributor: "Delta Plus",
    image: "/images/galeras.png",
    description: "Clear-lens goggles for use with a respirator mask.",
    brief: "Clear-lens goggles for respirator compatibility.",
    colors: ["clear", "smoke"],
    sizes: [],
    colorVariants: [
      { name: "clear", gallery: ["/images/galeras.png"] },
      { name: "black", gallery: ["/images/galeras_smoke.png"] }
    ],
    additionalInfo: {
      Lens: "Polycarbonate - Monoblock - Anti-Fog / Anti-Scratch (Classic) | Curved 10 | Frame Support : Elastic - Nylon - PVC | Weight : 104 g",
      Standards: "CE; EN166, 1 BT / 34 BT; CSA Z94.3-20 ; ANSI Z87.1-2003, Z87+ U6 D3; "
    }
  },

  // ===============================
  // 3) HEAD PROTECTION - EAR MUFFS
  // ===============================
  {
    id: 7,
    name: "SPA 3",
    category: "Head Protection",
    subCategory: "Ear Muffs",
    distributor: "Delta Plus",
    image: "/images/spa_3.png",
    description: "Ear defenders with low pressure pads.",
    brief: "Ear defenders with low pressure pads.",
    colors: ["Blue-Black"],
    sizes: ["Adjustable"],
    colorVariants: [
      { name: "Blue", gallery: ["/images/spa_3.png"] }
    ],
    gallery: ["/images/spa_3.png", "/images/spa_3_2.png"],
    additionalInfo: {
      Cup: "ABS",
      Cushions: "PU foam",
      "Support Type": "Over-the-head - ABS",
      Weight: "155 g",
      Standards: "CE; EN 352-1;SNR 23 dB, H 24, M 20,L 14, Unique size"
    }
  },
  {
    id: 8,
    name: "Magny Course",
    category: "Head Protection",
    subCategory: "Ear Muffs",
    distributor: "Delta Plus",
    image: "/images/magny_course.png",
    description: "High-performance ear defenders with a metal-reinforced headband.",
    brief: "High-performance ear defenders with reinforced headband.",
    colors: ["black"],
    sizes: ["Adjustable"],
    colorVariants: [
      { name: "black", gallery: ["/images/magny_course.png"] }
    ],
    gallery: ["/images/magny_course.png", "/images/magny_course_2.png"],
    additionalInfo: {
      Cup: "ABS",
      Cushions: "Synthetic foam - PU",
      "Support Type": "Over-the-head - ABS",
      Weight: "338 g",
      Standards: "CE; EN 352-1;SNR 33 dB, H 34, M 32,L 25, Unique ;ANSI S3.19, NNR 26 dB"
    }
  },
  {
    id: 301,
    name: "CONICCO200",
    category: "Head Protection",
    subCategory: "Disposable Earplugs",
    distributor: "Delta Plus",
    image: "/images/CONICCO200.png",
    description: "Disposable earplugs with cord, box of 200 pairs.",
    brief: "Disposable earplugs with cord, box of 200 pairs.",
    colors: ["red"],
    sizes: ["Adjustable"],
    colorVariants: [
      { name: "red", gallery: ["/images/CONICCO200.png"] }
    ],
    gallery: ["/images/CONICCO200.png"],
    additionalInfo: {
      "Earplug material" : "PU foam | Cord - PVC",
      Standards: "CE; EN 352-2;SNR 36 dB,H 34,M 34,L 31,ø 7-12 mm ;ANSI S3.19, NNR 33 dB;"
    }
  },

  // ===============================
  // 4) HEAD PROTECTION - DISPOSABLE MASKS
  // ===============================
  {
    id: 9,
    name: "M1200VBC FFP2",
    category: "Head Protection",
    subCategory: "Disposable Masks",
    distributor: "Delta Plus",
    image: "/images/m1200vbc_ffp2.png",
    description:
      "Box of 10 simple and efficient P2 disposable respirator masks, vertically foldable, with valve for optimised breathing comfort.",
    brief: "Box of 10 simple and efficient P2 disposable respirator masks, vertically foldable, with valve for optimised breathing comfort.",
    colors: ["white"],
    sizes: ["Adjustable"],
    colorVariants: [
      { name: "white", gallery: ["/images/m1200vbc_ffp2.png"] }
    ],
    gallery: [
      "/images/m1200vbc_ffp2.png",
      "/images/m1200vbc_ffp2_2.png",
      "/images/m1200vbc_ffp2_3.png"
    ],
    additionalInfo: {
      Material: "Non-Woven Synthetic - Foldable",
      "Nose clip": "Steel",
      Fastening: "Bridles",
      Packaging: "Box of 10",
      Standards: "CE; EN 149, FFP2 NR Dolomite;"
    }
  },
    {
      id: 10,
      name: "M1200VWC FFP2",
      category: "Head Protection",
      subCategory: "Disposable Masks",
      distributor: "Delta Plus",
      image: "/images/m1200vwc_ffp2.png",
      description: "Box of 10 P2 disposable, anti-odour masks with valve.",
      brief: "Box of 10 P2 disposable, anti-odour masks with valve.",
      colors: ["gray"],
      sizes: ["Adjustable"],
      colorVariants: [
        { name: "white", gallery: ["/images/m1200vwc_ffp2.png"] }
      ],
      gallery: ["/images/m1200vwc_ffp2.png"],
      additionalInfo: {
        "Mask material": "Non-Woven Synthetic - Molded",
        "Nose clip material": "Steel",
        "Fastening": "Bridles",
        "Packaging": "Box of 10",
        "Type of conditioning": "Box of 10",
        "Conception": "Free ventilation mask: Disposable mask, Disposable mask: Molded",
        "Risk protection": "Particles - Dolomite",
        "Respiratory protection type": "Free ventilation mask",
        "Nose pliers characteristics": "External",
        "Lifetime (years)": "5",
        "Benefits element": "Adjustable - Staples free - Graphene free",
        "Standards": "CE EN 149, FFP2 NR Dolomite",
      }
    },
  {
    id: 11,
    name: "M1300VBC FFP3",
    category: "Head Protection",
    subCategory: "Disposable Masks",
    distributor: "Delta Plus",
    image: "/images/m1300vbc_ffp3.png",
    description:
      "Box of 10 simple and efficient P3 disposable respirator masks, vertically foldable, with valve for optimised breathing comfort.",
    brief: "Box of 10 simple and efficient P3 disposable respirator masks, vertically foldable, with valve for optimised breathing comfort.",
    colors: ["white"],
    sizes: ["Adjustable"],
    colorVariants: [
      { name: "white", gallery: ["/images/m1300vbc_ffp3.png"] }
    ],
    gallery: [
      "/images/m1300vbc_ffp3.png",
      "/images/m1300vbc_ffp3_2.png",
      "/images/m1300vbc_ffp3_3.png",
      "/images/m1300vbc_ffp3_4.png"
    ],
    additionalInfo: {
      Material: "Non-Woven Synthetic - Foldable",
      "Nose clip": "Steel",
      Fastening: "Bridles",
      Packaging: "Box of 10",
      "Standards": "CE EN 149, FFP3 NR Dolomite",
    }
  },

  // ===============================
  // 5) SAFETY GLOVES
  // ===============================
  //{
    //id: 12,
    //name: "Working Gloves",
    //category: "Safety Gloves",
    //subCategory: "Working Gloves",
    //distributor: "Delta Plus",
    //image: "/images/working_gloves.png",
    //description: "Working Gloves with reinforced grip and durability.",
    //brief: "Reliable hand protection with reinforced grip.",
    //colors: ["white"],
    //sizes: ["S", "M", "L", "XL"],
    //colorVariants: [
      //{ name: "white", gallery: ["/images/working_gloves.png"] }
    //],
    //gallery: ["/images/working_gloves.png", "/images/working_gloves_2.png"],
    //additionalInfo: {
    //}
  //},
  {
    id: 13,
    name: "Nitril Gloves",
    category: "Safety Gloves",
    subCategory: "Nitril Gloves",
    distributor: "Delta Plus",
    image: "/images/nitril_gloves.png",
    description: "Nitril Gloves designed for chemical resistance and tactile sensitivity.",
    brief: "Chemical resistance with enhanced tactile sensitivity.",
    colors: ["green"],
    sizes: ["6/7", "7/8", "8/9", "9/10", "10/11"],
    colorVariants: [
      { name: "green", gallery: ["/images/nitril_gloves.png"] }
    ],
    gallery: [
      "/images/nitril_gloves.png",
      "/images/nitril_gloves_2.png",
      "/images/nitril_gloves_3.png",
      "/images/nitril_gloves_4.png",
      "/images/nitril_gloves_5.png"
    ],
    additionalInfo: {
    }
  },
  {
    id: 14,
    name: "Chemical Gloves",
    category: "Safety Gloves",
    subCategory: "Chemical Gloves",
    distributor: "Delta Plus",
    image: "/images/chemical_gloves.png",
    description: "Chemical Gloves offer superior protection against hazardous substances.",
    brief: "Superior protection against hazardous substances.",
    colors: ["black"],
    sizes: ["6/7", "7/8", "8/9", "9/10", "10/11"],
    colorVariants: [
      { name: "black", gallery: ["/images/chemical_gloves.png"] }
    ],
    gallery: [
      "/images/chemical_gloves.png",
      "/images/chemical_gloves_2.png",
      "/images/chemical_gloves_3.png"
    ],
    additionalInfo: {
    }
  },
  {
    id: 15,
    name: "Welding Gloves",
    category: "Safety Gloves",
    subCategory: "Welding Gloves",
    distributor: "Delta Plus",
    image: "/images/welding_gloves.png",
    description: "Welding Gloves withstand high temperatures and provide heat resistance.",
    brief: "High temperature resistance and durability.",
    colors: ["red"],
    sizes: ["10"],
    colorVariants: [
      { name: "red", gallery: ["/images/welding_gloves.png"] }
    ],
    gallery: [
      "/images/welding_gloves.png",
      "/images/welding_gloves_2.png",
      "/images/welding_gloves_3.png"
    ],
    additionalInfo: {
    }
  },
  /*{
    id: 16,
    name: "Anti- Cold Gloves",
    category: "Safety Gloves",
    subCategory: "Anti- Cold Gloves",
    distributor: "Delta Plus",
    image: "/images/anti_cold_gloves.png",
    description: "Anti-Cold Gloves keep hands warm in extreme cold while ensuring dexterity.",
    brief: "Insulated for warmth with maintained dexterity.",
    colors: ["blue"],
    sizes: ["09", "10", "11"],
    colorVariants: [
      { name: "blue", gallery: ["/images/anti_cold_gloves.png"] },
    ],
    gallery: [
      "/images/anti_cold_gloves.png",
      "/images/anti_cold_gloves_2.png",
      "/images/anti_cold_gloves_3.png",
      "/images/anti_cold_gloves_4.png"
    ],
    additionalInfo: {
    }
  },*/
  {
    id: 302,
    name: "FBF15",
    category: "Safety Gloves",
    subCategory: "Anti Freezing Gloves",
    distributor: "Delta Plus",
    image: "/images/FBF15.png",
    description: "Thermal leather glove, ideal in cold environments thanks to the fur inside the glove.",
    brief: "Thermal leather glove, ideal in cold environments thanks to the fur inside the glove.",
    colors: ["yellow"],
    sizes: ["08", "10", "11"],
    colorVariants: [
      { name: "yellow", gallery: ["/images/FBF15.png"] }
    ],
    gallery: [
      "/images/FBF15.png",
      "/images/FBF15_2.png"
    ],
    additionalInfo: {
      "Material": "Non-Woven Synthetic - Foldable",
      "Nose clip": "Steel",
      "Fastening": "Bridles",
      "Packaging": "Box of 10",
      "Features": "Extensive test methods, data logging",
      "Usage": "Ideal for water labs and field testing",
      "Standard": "CE, EN 149, FFP3 NR Dolomite"
    }
  },
  {
    id: 300,
    name: "working gloves",
    category: "Safety Gloves",
    subCategory: "Working Gloves",
    distributor: "Hundal Group",
    image: "/images/RIGGER_GLOVE_2.png",
    description: "Working GLOVE MADE BY COW SPLIT LEATHER.",
    brief: "Working GLOVE MADE BY COW SPLIT LEATHER.",
    colors: ["red"],
    sizes: ["09", "10"],
    colorVariants: [
      { name: "red", gallery: ["/images/RIGGER_GLOVE_2.png"] },
    ],
    gallery: [
      "/images/RIGGER_GLOVE_2.png"
    ],
    additionalInfo: {
      Features: "THE PRODUCT IS DESIGNED AND MANUFACTURED TO COMPLY WITH THE REQUIREMENTS OF DIRECTIVE 89/686/EEC WITH EN 388 & EN 420"
    }
  },
  /* -------------------------------------------------------------
   *  ELECTRIC ‑ ARC‑FLASH GLOVES    (Honeywell – Salisbury)
   * ----------------------------------------------------------- */
  {
    id: 403,
    name: "Class 00",
    category: "Electric & ARC Flash Kit",
    subCategory: "Electrical Gloves",
    distributor: "Honeywell",
    image: "/images/Class00.png",
    brief: " Insulation of hands by class and according to the nominal supply voltage. ",
    description: "Insulation of hands by class and according to the nominal supply voltage.",
    colors: ["beige"],
    sizes: ["07", "08", "09", "10", "11"],
    colorVariants: [
      { name: "beige", gallery: ["/images/Class00.png"] }
    ],
    gallery: ["/images/Class00.png", "/images/Class00_detail1.png"],
    additionalInfo: {
      usageVoltage: "500 V",
      testVoltage: "2500 V",
      standard: "EN 60903",
    },
  },
  {
    id: 404,
    name: "Class0",
    category: "Electric & ARC Flash Kit",
    subCategory: "Electrical Gloves",
    distributor: "Honeywell",
    image: "/images/Class0.png",
    brief: "Insulation of hands by class and according to the nominal supply voltage.",
    description:"Insulation of hands by class and according to the nominal supply voltage.",
    colors: ["beige"],
    sizes: ["07", "08", "09", "10", "11"],
    colorVariants: [{ name: "beige", gallery: ["/images/Class0.png"] }],
    gallery: ["/images/Class0.png"],
    additionalInfo: {
      usageVoltage: "1000 V",
      testVoltage: "5000 V",
      standard: "EN 60903",
    },
  },
  {
    id: 405,
    name: "Class 1",
    category: "Electric & ARC Flash Kit",
    subCategory: "Electrical Gloves",
    distributor: "Honeywell",
    image: "/images/Class01.png",
    brief: "Insulation of hands by class and according to the nominal supply voltage.",
    description: "Insulation of hands by class and according to the nominal supply voltage.",
    colors: ["beige"],
    sizes: ["07", "08", "09", "10", "11"],
    colorVariants: [{ name: "beige", gallery: ["/images/Class01.png"] }],
    gallery: ["/images/Class01.png"],
    additionalInfo: {
      usageVoltage: "7500 V",
      testVoltage: "10000 V",
      standard: "EN 60903",
    },
  },
  {
    id: 406,
    name: "Class 2",
    category: "Electric & ARC Flash Kit",
    subCategory: "Electrical Gloves",
    distributor: "Honeywell",
    image: "/images/Class02.png",
    brief: "Insulation of hands by class and according to the nominal supply voltage.",
    description:"Insulation of hands by class and according to the nominal supply voltage.",
    colors: ["orange"],
    sizes: ["07", "08", "09", "10", "11"],
    colorVariants: [{ name: "orange", gallery: ["/images/Class02.png"] }],
    gallery: ["/images/Class02.png"],
    additionalInfo: {
      usageVoltage: "17500 V",
      testVoltage: "20000 V",
      standard: "EN 60903",
    },
  },
  {
    id: 407,
    name: "Class 3",
    category: "Electric & ARC Flash Kit",
    subCategory: "Electrical Gloves",
    distributor: "Honeywell",
    image: "/images/Class03.png",
    brief: "Insulation of hands by class and according to the nominal supply voltage.",
    description: "Insulation of hands by class and according to the nominal supply voltage.",
    colors: ["orange"],
    sizes: ["07", "08", "09", "10", "11"],
    colorVariants: [{ name: "orange", gallery: ["/images/Class03.png"] }],
    gallery: ["/images/Class03.png"],
    additionalInfo: {
      usageVoltage: "26500 V",
      testVoltage: "30000 V",
      standard: "EN 60903",
    },
  },
  {
    id: 408,
    name: "Class 4",
    category: "Electric & ARC Flash Kit",
    subCategory: "Electrical Gloves",
    distributor: "Honeywell",
    image: "/images/Class04.png",
    brief: "Insulation of hands by class and according to the nominal supply voltage.",
    description: "Insulation of hands by class and according to the nominal supply voltage.",
    colors: ["orange"],
    sizes: ["07", "08", "09", "10", "11"],
    colorVariants: [{ name: "orange", gallery: ["/images/Class04.png"] }],
    gallery: ["/images/Class04.png"],
    additionalInfo: {
      usageVoltage: "36000 V",
      testVoltage: "40000 V",
      standard: "EN 60903",
    },
  },

  /* -------------------------------------------------------------
   *  ARC‑FLASH PPE KITS    (Honeywell – Salisbury)
   * ----------------------------------------------------------- */
  {
    id: 409,
    name: "Salisbury ARC FLASH KIT 20 CAL SK20L",
    category: "Electric & ARC Flash Kit",
    subCategory: "ARC Flash Kit",
    distributor: "Honeywell",
    image: "/images/20CALSK20L.png",
    brief: "Salisbury by Honeywell is the most complete personal protective equipment provider to all electrical workers.The need for a comprehensive electrical safety program that's easy to use has never been more critical.",
    description: "Salisbury by Honeywell is the most complete personal protective equipment provider to all electrical workers.The need for a comprehensive electrical safety program that's easy to use has never been more critical.",
    colors: [" "],
    sizes: [" "],
    colorVariants: [{ name: " ", gallery: ["/images/20CALSK20L.png"] }],
    gallery: ["/images/20CALSK20L.png", "/images/20CALSK20L_detail.png"],
    additionalInfo: [
      "The NFPA 70E Standard and OSHA Regulations have been established to protect workers from electrical shock and arc flash hazards and to educate workers about the protection needed from these dangers.",
      "Kit includes: Arc Flash coat, Bib overalls, PRO-HOOD, AS1200 Hood, hard hat, safety glasses, and Salisbury storage bag.",
      "ATPV Rating of 20 CAL/CM².",
      "Each item can be ordered alone.",
      "Also available ARC FLASH GLOVES (different CAL)."
    ]
  },
  {
    id: 410,
    name: "Salisbury ARC FLASH KIT 40 CAL SK40RGL",
    category: "Electric & ARC Flash Kit",
    subCategory: "ARC Flash Kit",
    distributor: "Honeywell",
    image: "/images/40CALSK40RGL.png",
    brief: "Salisbury by Honeywell is the most complete personal protective equipment provider to all electrical workers. The need for a comprehensive electrical safety program that's easy to use has never been more critical.",
    description: "Salisbury by Honeywell is the most complete personal protective equipment provider to all electrical workers. The need for a comprehensive electrical safety program that's easy to use has never been more critical.",
    colors: [" "],
    sizes: [" "],
    colorVariants: [
      { name: "navy/khaki", gallery: ["/images/40CALSK40RGL.png"] },
    ],
    gallery: ["/images/40CALSK40RGL.png"],
    additionalInfo: [
      "Salisbury PRO-WEAR® Arc Flash Personal Protection Equipment Kits are available in an ATPV rating of 40 cal/cm2. This kit contains an arc flash coat, bib overalls, PRO-HOOD, hard hat, SKBAG, and safety glasses.NEW 2-COLOR PRO-WEAR Arc Flash Protection PPE Kits available .",
"This kit does not include insulating and arc flash gloves. Gloves should be ordered separately.",
"Each item can be ordered alone. ",
"Also available ARC FLASH GLOVES (different CAL)"
    ]
    
  },
  {
    id: 411,
    name: "Salisbury ARC FLASH KIT 100 CAL SK100RGL",
    category: "Electric & ARC Flash Kit",
    subCategory: "ARC Flash Kit",
    distributor: "Honeywell",
    image: "/images/100CALSK100RGL.png",
    brief: "Salisbury by Honeywell is the most complete personal protective equipment provider to all electrical workers. The need for a comprehensive electrical safety program that's easy to use has never been more critical.",
    description: "Salisbury by Honeywell is the most complete personal protective equipment provider to all electrical workers. The need for a comprehensive electrical safety program that's easy to use has never been more critical.",
    colors: [" "],
    sizes: [" "],
    colorVariants: [{ name: " ", gallery: ["/images/100CALSK100RGL.png"] }],
    gallery: ["/images/100CALSK100RGL.png"],
    additionalInfo: [
      "These kits meet NFPA 70E hazard risk category (HRC) 4. Rated 100 cal/cm². Kit includes an arc flash coat, bib overalls, Pro-Hood™, hard hat, safety glasses, and carrying bag.",
      "Each item can be ordered alone. ",
      "Also available ARC FLASH GLOVES (different CAL)"

    ]
  },
  {
    id: 304,
    name: "JUMPER2 S3",
    category: "Safety Boots",
    subCategory: "Steel Toecap and midsole Safety Boot",
    distributor: "Delta Plus",
    image: "/images/jumper2_S3.png",
    description: "Boot with steel toecap and reinforced midsole for robust protection.",
    brief: "Robust protection with steel toecap and reinforced midsole.",
    colors: ["black"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
    colorVariants: [
      { name: "black", gallery: ["/images/jumper2_S3.png"] },
    ],
    gallery: [
      "/images/jumper2_S3.png",
    ],
    additionalInfo: {
     Upper: "Pigmented split leather, S3 water resistant treatment.",
     Lining: "Polyamide mesh.",
     Insole: "Fixed - Polyamide on antibacterial latex.",
     Outsole: "Injected - Dual-density PU",
     "Standard": "EN ISO 20345, S3 WRU FO A E SRC."
    }
  },
  {
      id: 18,
      name: "PHOENIX S3 SRC",
      category: "Safety Boots",
      subCategory: "Composite Safety Boot",
      distributor: "Delta Plus",
      image: "/images/PHOENIX_S3_SRC.png",
      description:
        "All-terrain high-cut shoe, combining robustness and durability, regardless of the conditions.",
      brief:
        "All-terrain high-cut shoe, combining robustness and durability, regardless of the conditions.",
      colors: ["black"],
      sizes: ["6", "7", "8", "9", "10", "11", "11,5", "12", "13", "14"],
      colorVariants: [
        { name: "black", gallery: ["/images/PHOENIX_S3_SRC.png"] }
      ],
      additionalInfo: {
        "Upper": "Leather - Grain Leather - Water repellent",
        "Lining": "Polyamide - Absorbent",
        "Insole": "EVA - Polyester - Foam",
        "Outsole": "Welded - PU - Nitrile",
        "Reinforcements": "TPU",
        "Anti-perforation insert": "Metal free",
        "Safety toe-cap": "Composite",
        "Lacing system": "Laces",
        "Weight": "972 g per shoe",
        "Standard": "CE; EN ISO 20345; S3S HRO CI HI WPA FO A E SC LG SRC"
      }
    }
  },
  {
    id: 19,
    name: "COBRA4 S3 SRC",
    category: "Safety Boots",
    subCategory: "Welding Boots",
    distributor: "Delta Plus",
    image: "/images/COBRA4.png",
    description: "Welding-specific high-cut shoe, standard 20349-2.",
    brief: "Welding-specific high-cut shoe, standard 20349-2.",
    colors: ["black"],
    sizes: ["4" , "5" , "6" , "6" , "7" , "8" , "9" , "10" , "11" , "11,5" , "12" , "13" , "14"],
    colorVariants: [
      { name: "black", gallery: ["/images/COBRA4.png"] }
    ],
    gallery: [
      "/images/COBRA4.png",
      "/images/COBRA4_2.png",
      "/images/COBRA4_3.png"
    ],
    additionalInfo: {
      Features: "Upper : Leather - Croupon - Pigmented - Water repellent | Lining : Textile - Polyester | Insole : EVA - Polyamide | Outsole : Injected - PU - Nitrile rubber | Reinforcements : Para-aramid stitching | Anti-perforation insert : Stainless steel | Safety toe-cap : Stainless steel | Lacing system : Velcro | Weight : 726 g per shoe",
      Standard: "EN ISO 20345 S3 HRO HI WRU FO A E SRC."
    }
  },
  {
    id: 330,
    name: "MIAMI S2 SRC",
    category: "Safety Boots",
    subCategory: "Safety Shoes",
    distributor: "Delta Plus",
    image: "/images/MIAMI_S2_SRC.png",
    description: "Lightweight microfibre low-cut shoe with a water-repellent upper, meeting the requirements of the food industry and hygiene professions.",
    brief: "Lightweight microfibre low-cut shoe with a water-repellent upper, meeting the requirements of the food industry and hygiene professions.",
    colors: ["black", "White"],
    sizes: ["35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48"],
    colorVariants: [
      { name: "black", gallery: ["/images/MIAMI_S2_SRC.png"] }
    ],
    gallery: [
      "/images/MIAMI_S2_SRC.png",
    ],
    additionalInfo: {
      Features: "Upper : Leather - Croupon - Pigmented - Water repellent | Lining : Textile - Polyester | Insole : EVA - Polyamide | Outsole : Injected - PU - Nitrile rubber | Reinforcements : Para-aramid stitching | Anti-perforation insert : Stainless steel | Safety toe-cap : Stainless steel | Lacing system : Velcro | Weight : 726 g per shoe",
      Standard: "EN ISO 20345 S2 WRU FO A E SRC"
    }
  },
  // ===============================
  // 7) RESPIRATORS
  // ===============================

  // 7a) 3M Powered Air, TR-300
 // In your src/data/productsData.js file, update the following product objects:

// 7a) 3M Powered Air, TR-300
// Updated product objects without colors and sizes

// 7a) 3M Powered Air, TR-300
{
  id: 20,
  name: "3M™ Versaflo™ 1-A-3M™ Versaflo™ TR-315E+ Powered Air Starter Kit",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-300",
  distributor: "3M",
  image: "/images/3m_versaflo_tr_315e.png",
  description: "Powered Air system starter kit for reliable respiratory protection.",
  brief: "Reliable respiratory protection with powered air system.",
  colorVariants: [
    { name: "", gallery: ["/images/3m_versaflo_tr_315e.png"] }
  ],
  additionalInfo: {
    "Material": "High-grade plastic and composite components",
    "Connection": "Bayonet-style connector",
    "Usage": "Designed for use with 3M reusable respirators",
    "Standards": "CE EN 140:2013; NIOSH Approved"
  }
},
{
  id: 21,
  name: "3M™ Versaflo™ 1-B-3M™ Versaflo™ TR-300+ Series Ready to Use Kits Shroud Hood - TR300EECK",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-300",
  distributor: "3M",
  image: "/images/3m_tr300eeck.png",
  description: "Service package for refurbishment and health check for 3M Versaflo™ respirators.",
  brief: "Service package for refurbishment and health check.",
  colorVariants: [],
  additionalInfo: {
    "Package Contents": "Shroud hood, instructions, and warranty details",
    "Usage": "For refurbishment and periodic health checks",
    "Standards": "CE EN 140:2013"
  }
},
{
  id: 22,
  name: "3M™ Versaflo™ 1-C-3M™ Versaflo™ TR-315 / TR-302 Refurbishment & Health Check",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-300",
  distributor: "3M",
  image: "/images/3m_tr315_tr302.png",
  description: "TR300EECK kit with ready-to-use shroud hood for immediate deployment.",
  brief: "Ready-to-use shroud hood kit for immediate deployment.",
  colorVariants: [
    { name: "white", gallery: ["/images/3m_tr315_tr302.png"] },
    { name: "grey", gallery: ["/images/3m_tr315_tr302.png"] }
  ],
  additionalInfo: {
    "Material": "Durable polymer components",
    "Usage": "Ensures immediate respirator readiness after refurbishment",
    "Standards": "NIOSH Approved; CE EN 140:2013"
  }
},

// 7b) 3M Powered Air, TR-600
{
  id: 23,
  name: "3M™ Versaflo™ TR-619E Starter Kit and M-206 Respirator Helmet",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-600",
  distributor: "3M",
  image: "/images/3m_tr619e_m206.png",
  description: "Comprehensive kit with TR-619E Powered Air and M-206 Helmet.",
  brief: "Respiratory safety kit with powered air and helmet.",
  colorVariants: [
    { name: "white", gallery: ["/images/3m_tr619e_m206.png"] },
    { name: "grey", gallery: ["/images/3m_tr619e_m206.png"] }
  ],
  additionalInfo: {
    "Material": "High-strength composite materials",
    "Helmet": "Includes M-206 respirator helmet",
    "Usage": "For continuous industrial use",
    "Standards": "CE EN 140:2013; NIOSH Approved"
  }
},
{
  id: 24,
  name: "3M™ Versaflo™ TR-619E Powered Air Starter Kit",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-600",
  distributor: "3M",
  image: "/images/3m_tr619e.png",
  description: "TR-619E Powered Air Starter Kit for effective respiratory protection.",
  brief: "Effective respiratory protection with user-friendly features.",
  colorVariants: [
    { name: "white", gallery: ["/images/3m_tr619e.png"] },
    { name: "grey", gallery: ["/images/3m_tr619e.png"] }
  ],
  additionalInfo: {
    "Material": "Engineered plastics and alloy components",
    "Connection": "Standard bayonet connection",
    "Usage": "For reliable respiratory protection in industrial settings",
    "Standards": "CE EN 140:2013; NIOSH Approved"
  }
},
{
  id: 25,
  name: "3M™ Versaflo™ TR-619UK Powered Air Starter Kit",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-600",
  distributor: "3M",
  image: "/images/3m_tr619uk.png",
  description: "TR-619UK kit for intrinsic safety in volatile environments.",
  brief: "Intrinsically safe kit for volatile environments.",
  colorVariants: [
    { name: "white", gallery: ["/images/3m_tr619uk.png"] },
    { name: "grey", gallery: ["/images/3m_tr619uk.png"] }
  ],
  additionalInfo: {
    "Material": "Reinforced composite and alloy",
    "Usage": "Designed for use in volatile, hazardous environments",
    "Standards": "Intrinsic Safety Certified; CE EN 140:2013"
  }
},
{
  id: 26,
  name: "3M™ Versaflo™ Powered Air Respirator TR-619E",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-600",
  distributor: "3M",
  image: "/images/3m_versaflo_tr_619e.png",
  description: "Consistent airflow and enhanced protection for continuous industrial use.",
  brief: "Consistent airflow and enhanced protection.",
  colorVariants: [
    { name: "white", gallery: ["/images/3m_versaflo_tr_619e.png"] },
    { name: "grey", gallery: ["/images/3m_versaflo_tr_619e.png"] }
  ],
  additionalInfo: {
    "Material": "High-performance plastics and reinforced foam",
    "Usage": "For prolonged industrial use in hazardous settings",
    "Standards": "CE EN 140:2013; NIOSH Approved"
  }
},

// 7c) 3M Powered Air, TR-800
{
  id: 27,
  name: "3M™ Versaflo™ Intrinsically Safe Powered Air Turbo Starter Kit TR-819E",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-800",
  distributor: "3M",
  image: "/images/3m_tr819e.png",
  description: "TR-819E turbo starter kit for intrinsically safe operations in high-risk areas.",
  brief: "Intrinsically safe turbo starter kit for high-risk areas.",
  colorVariants: [
    { name: "white", gallery: ["/images/3m_tr819e.png"] },
    { name: "grey", gallery: ["/images/3m_tr819e.png"] }
  ],
  additionalInfo: {
    "Material": "High-temperature resistant alloys and plastics",
    "Usage": "For intrinsically safe operations in explosive atmospheres",
    "Standards": "Intrinsic Safety Certified; CE EN 140:2013"
  }
},
{
  id: 28,
  name: "3M™ Versaflo™ TR-819UK Intrinsically Safe Powered Air Turbo Starter Kit",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-800",
  distributor: "3M",
  image: "/images/3m_tr819uk.png",
  description: "Intrinsically safe respiratory protection with a turbo starter design for rapid deployment.",
  brief: "Rapid deployment with intrinsically safe design.",
  colorVariants: [
    { name: "white", gallery: ["/images/3m_tr819uk.png"] },
    { name: "grey", gallery: ["/images/3m_tr819uk.png"] }
  ],
  additionalInfo: {
    "Material": "Engineered for high-risk environments using specialized polymers",
    "Usage": "Rapidly deployable in intrinsically safe settings",
    "Standards": "Intrinsic Safety Certified; CE EN 140:2013"
  }
},
{
  id: 29,
  name: "3M™ Versaflo™ TR-819UK and M-306 Helmet Intrinsically Safe Powered Air Turbo Starter Kit",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-800",
  distributor: "3M",
  image: "/images/3m_tr819uk_m306.png",
  description: "Comprehensive kit with M-306 helmet and powered air system.",
  brief: "Powered air system plus M-306 helmet for enhanced protection.",
  colorVariants: [
    { name: "white", gallery: ["/images/3m_tr819uk_m306.png"] },
    { name: "grey", gallery: ["/images/3m_tr819uk_m306.png"] }
  ],
  additionalInfo: {
    "Material": "High-performance composite materials for helmet and unit",
    "Usage": "Comprehensive respiratory protection including headgear",
    "Standards": "CE EN 140:2013; Intrinsic Safety Certified"
  }
},
{
  id: 30,
  name: "3M™ Versaflo™ TR-819UK Intrinsically Safe Powered Air Turbo Starter Kit",
  category: "Respirators",
  subCategory: "3M Powered Air",
  subSubCategory: "TR-800",
  distributor: "3M",
  image: "/images/3m_tr819uk.png",
  description: "Another variant of TR-819UK kit for intrinsically safe environments.",
  brief: "Quick start capabilities in intrinsically safe environments.",
  colorVariants: [
    { name: "white", gallery: ["/images/3m_tr819uk.png"] },
    { name: "grey", gallery: ["/images/3m_tr819uk.png"] }
  ],
  additionalInfo: {
    "Material": "Engineered for high-risk, intrinsically safe use",
    "Usage": "For environments requiring rapid and secure respiratory protection",
    "Standards": "Intrinsic Safety Certified; CE EN 140:2013"
  }
},

// 7d) 3M Half/Full FaceMask
{
  id: 31,
  name: "3M™ 4251+ Reusable Respirator Half Mask - FFA1P2 R D",
  category: "Respirators",
  subCategory: "Half/Full FaceMask",
  distributor: "3M",
  image: "/images/3m_4251plus.png",
  description: "Reusable half mask offering reliable respiratory protection.",
  brief: "Reliable and comfortable reusable half mask.",
  colorVariants: [
    { name: "blue", gallery: ["/images/3m_4251plus.png"] },
    { name: "white", gallery: ["/images/3m_4251plus.png"] }
  ],
  additionalInfo: {
    "Material": "Advanced polymer blend",
    "Usage": "For routine industrial respiratory protection",
    "Standards": "NIOSH Approved; CE EN 140:2013"
  }
},
{
  id: 32,
  name: "3M™ 4279+ Reusable Respirator Half Mask - FFABEK1P3 R D",
  category: "Respirators",
  subCategory: "Half/Full FaceMask",
  distributor: "3M",
  image: "/images/3m_4279plus.png",
  description: "High-performance reusable half mask for effective filtration.",
  brief: "High-performance filtration with durable design.",
  colorVariants: [
    { name: "blue", gallery: ["/images/3m_4279plus.png"] },
    { name: "white", gallery: ["/images/3m_4279plus.png"] }
  ],
  additionalInfo: {
    "Material": "Reinforced polymer and foam",
    "Usage": "For high-performance respiratory filtration in industrial settings",
    "Standards": "NIOSH Approved; CE EN 140:2013"
  }
},
{
  id: 33,
  name: "3M™ 6800 Reusable Full Face Mask - Medium",
  category: "Respirators",
  subCategory: "Half/Full FaceMask",
  distributor: "3M",
  image: "/images/3m_6800.png",
  description: "Reusable full face mask providing comprehensive protection with a medium fit.",
  brief: "Comprehensive protection with a medium fit.",
  colorVariants: [
    { name: "blue", gallery: ["/images/3m_6800.png"] },
    { name: "white", gallery: ["/images/3m_6800.png"] }
  ],
  additionalInfo: {
    "Material": "High-performance composite material",
    "Usage": "Provides full-face respiratory protection for industrial workers",
    "Standards": "NIOSH Approved; CE EN 140:2013"
  }
},
{
  id: 34,
  name: "3M™ 6200 Half Facepiece Reusable Respirator Mask -Medium",
  category: "Respirators",
  subCategory: "Half/Full FaceMask",
  distributor: "3M",
  image: "/images/3m_6200.png",
  description: "Half facepiece mask for comfortable, long-term wear with effective filtration.",
  brief: "Comfortable for long-term wear with effective filtration.",
  colorVariants: [
    { name: "blue", gallery: ["/images/3m_6200.png"] },
    { name: "white", gallery: ["/images/3m_6200.png"] }
  ],
  additionalInfo: {
    "Material": "Durable, lightweight polymers",
    "Usage": "Ideal for extended use in industrial environments",
    "Standards": "NIOSH Approved; CE EN 140:2013"
  }
},
{
  id: 35,
  name: "Honeywell Full Face Mask Model: 54001",
  category: "Respirators",
  subCategory: "Half/Full FaceMask",
  distributor: "Honeywell",
  image: "/images/honeywell_full_face_54001.png",
  description: "Honeywell's full face mask 54001 for comprehensive respiratory protection.",
  brief: "Full face protection with a secure fit.",
  colorVariants: [
    { name: "blue", gallery: ["/images/honeywell_full_face_54001.png"] },
    { name: "white", gallery: ["/images/honeywell_full_face_54001.png"] }
  ],
  additionalInfo: {
    "Material": "High-durability composite and soft lining",
    "Usage": "For full-face respiratory protection in hazardous environments",
    "Standards": "NIOSH Approved; CE EN 140:2013"
  }
},
{
  id: 36,
  name: "Honeywell Half Face Mask 55003",
  category: "Respirators",
  subCategory: "Half/Full FaceMask",
  distributor: "Honeywell",
  image: "/images/honeywell_half_face_55003.png",
  description: "Honeywell half face mask 55003 offers reliable protection with breathability.",
  brief: "Reliable protection with enhanced breathability.",
  colorVariants: [
    { name: "blue", gallery: ["/images/honeywell_half_face_55003.png"] },
    { name: "white", gallery: ["/images/honeywell_half_face_55003.png"] }
  ],
  additionalInfo: {
    "Material": "Lightweight polymer with breathable mesh",
    "Usage": "Provides effective respiratory protection with enhanced airflow",
    "Standards": "NIOSH Approved; CE EN 140:2013"
  }
},
{
  id: 400,
  name: "3M™ Scott™ Sigma-2 Type 2 SCBA",
  category: "Respirators",
  subCategory: "Half/Full FaceMask",
  distributor: "3M",
  image: "/images/ist_scba.png",
  description: "breathing apparatus combines the highest level of respiratory protection in a simple-to-operate, cost-effective piece of equipment that meets the needs of industrial and marine firefighting.",
  brief: "breathing apparatus combines the highest level of respiratory protection in a simple-to-operate, cost-effective piece of equipment that meets the needs of industrial and marine firefighting.",
  colorVariants: [  ],
  additionalInfo: {
    "Airline Connector Brand" : "None",
    "Brands" : "Scott™",
    "Buckle Material" : "Polymer",
    "Harness Material" : "Kevlar® Blend",
    "Included Regulator" : "Tempest",
    "Standard" : "Approved to EN 137:2006 Type 2, MED (Shipswheel approval), ISO 20269-2 and ISO 23269-3"
  }
},
{
  id: 401,
  name: "Honeywell Fenzy X-Pro SCBA",
  category: "Respirators",
  subCategory: "Half/Full FaceMask",
  subSubCategory: "",
  distributor: "Honeywell",
  image: "/images/Honeywell_scba.png",
  description: "Honeywell Fenzy X-Pro SCBA offers exceptional respiratory protection featuring an ultra-lightweight, height-adjustable backplate suitable for various body shapes and operational needs.",
  brief: "Ultra-lightweight, adjustable SCBA for comfort and protection.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: ["/images/Honeywell_scba.png"],
  additionalInfo: {
    "Key Features": [
      "Ultra-light, height adjustable backplate for various body shapes",
      "Thermo-compressed fibre comfort cushions on shoulders, waistbelt straps and upper back straps",
      "Curved shoulder straps to maintain apparatus stability",
      "Washable harness",
      "Adjustable, fast-tightening shoulder straps buckles",
      "Pull forward fast-tightening waistbelt buckles",
      "Rotating hip belt supporting user movements",
      "Multiple anchoring rings for accessories",
      "Adjustable cylinder strap",
      "Reducer with built-in second user outlet for additional air supply (rescue hood, mask or airline)",
      "Minimal maintenance requirements for reduced life cycle cost",
      "Optional flame-retardant reflective pads accessories for shoulders",
      "Optional medium pressure airline connection accessories (various connectors available)",
      "Fast assembly/disassembly harness system with robust stainless steel buckles",
      "Movable and foldable foot protecting cylinder and high-pressure system from impacts",
      "Integrated antistatic flexible HP and MP hoses in back plate for optimal protection",
      "Color reinforced sewing on key safety elements",
      "Easy-to-grab top carry handle",
      "Two large handles for fast, easy access"
    ],
    "Recommended Industries/Use": [
      "Fire Protection",
      "Government",
      "Law Enforcement",
      "Military"
    ],
    "Hazards": [
      "Airborne Particulates",
      "Biohazard",
      "Chemical",
      "Contamination",
      "Fire",
      "Gas, Vapors, Smoke"
    ],
    "Standard" : "EN 137 Type 2: 2006, SOLAS, MED, IMO, MSC, AS/NZS 2003*, ISO 23261-3"
  }
},

  // ===============================
  // 8) LABELS & PRINTERS
  // ===============================// Example updates for selected product objects in productsData.js:

// ===============================
// Labels & Printers
// ===============================
{
  id: 37,
  name: "Aggressive Adhesive Multi-Purpose Nylon Labels ... 0.5\"a",
  category: "Labels & Printers",
  distributor: "Brady",
  image: "/images/brady_nylon_labels.png",
  description: "High-performance nylon labels for M4/M5 printers with aggressive adhesive.",
  brief: "Nylon labels with aggressive adhesive for M4/M5 printers.",
  colors: ["white", "black"],
  sizes: [],
  colorVariants: [
    { name: "white", gallery: ["/images/brady_nylon_labels.png"] },
    { name: "black", gallery: ["/images/brady_nylon_labels.png"] }
  ],
  additionalInfo: {
    Material: "High-grade nylon",
    Adhesive: "Aggressive industrial-grade adhesive",
    Usage: "Ideal for high-temperature and high-stress labeling applications",
    Standards: "CE EN 1304"
  }
},
{
  id: 38,
  name: "Self-Laminating Vinyl Wrap Around Labels ... 1\" x 1\"",
  category: "Labels & Printers",
  distributor: "Brady",
  image: "/images/brady_vinyl_labels.png",
  description: "Self-laminating vinyl labels that wrap for enhanced durability and legibility.",
  brief: "Enhanced durability and legibility vinyl labels.",
  colors: ["white"],
  sizes: [],
  colorVariants: [
    { name: "white", gallery: ["/images/brady_vinyl_labels.png"] }
  ],
  additionalInfo: {
    Material: "High-quality vinyl",
    Feature: "Self-laminating wrap-around design",
    Usage: "Provides long-lasting, weather-resistant labeling",
    Standards: "CE EN 13606"
  }
},
{
  id: 39,
  name: "M710 Bluetooth & Wi-Fi Label Printer",
  category: "Labels & Printers",
  distributor: "Brady",
  image: "/images/m710_printer.png",
  description: "Versatile label printer with Bluetooth and Wi-Fi for seamless operations.",
  brief: "Versatile label printer with Bluetooth & Wi-Fi.",
  colors: ["white", "black"],
  sizes: [],
  colorVariants: [
    { name: "white", gallery: ["/images/m710_printer.png"] },
    { name: "black", gallery: ["/images/m710_printer.png"] }
  ],
  additionalInfo: {
    Connectivity: "Bluetooth, Wi-Fi, USB",
    Usage: "Suitable for both industrial and office labeling tasks",
    Standards: "FCC, CE"
  }
},
{
  id: 40,
  name: "M510 Portable Industrial Label Printer",
  category: "Labels & Printers",
  distributor: "Brady",
  image: "/images/m510_printer.png",
  description: "Portable label printer designed for industrial environments.",
  brief: "Portable industrial label printer with reliable performance.",
  colors: ["white", "black"],
  sizes: [],
  colorVariants: [
    { name: "white", gallery: ["/images/m510_printer.png"] },
    { name: "black", gallery: ["/images/m510_printer.png"] }
  ],
  additionalInfo: {
    Connectivity: "USB; Bluetooth (optional)",
    Durability: "Rugged design built for harsh industrial settings",
    Usage: "Ideal for on-the-go label printing in factories and warehouses",
    Standards: "CE, FCC"
  }
},
{
  id: 41,
  name: "M211 Portable Bluetooth Label Printer",
  category: "Labels & Printers",
  distributor: "Brady",
  image: "/images/m211_printer.png",
  description: "Compact portable label printer with Bluetooth for quick labeling tasks.",
  brief: "Compact portable label printer with Bluetooth.",
  colors: ["white", "black"],
  sizes: [],
  colorVariants: [
    { name: "white", gallery: ["/images/m211_printer.png"] },
    { name: "black", gallery: ["/images/m211_printer.png"] }
  ],
  additionalInfo: {
    Connectivity: "Bluetooth, USB",
    Portability: "Compact and lightweight for mobile use",
    Usage: "Perfect for quick, on-the-go label printing",
    Standards: "FCC, CE"
  }
},

// ===============================
// Lab Supplies – Rapid test and comparators
// ===============================
{
  id: 42,
  name: "Minikit",
  category: "Lab Supplies",
  subCategory: "Rapid test and comparators",
  distributor: "Lovibond",
  image: "/images/minikit.png",
  description: "Minikit provides essential tools for rapid testing and accurate comparisons.",
  brief: "Essential tools for rapid testing in labs.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "High-durability plastic",
    Usage: "Quick field testing and laboratory comparisons",
    Standards: "ISO 9001"
  }
},
{
  id: 43,
  name: "Test kits",
  category: "Lab Supplies",
  subCategory: "Rapid test and comparators",
  distributor: "Lovibond",
  image: "/images/test_kits.png",
  description: "Test kits designed for quick and reliable lab testing, ensuring precise results.",
  brief: "Quick and reliable lab testing kits.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Premium quality plastics and reagents",
    Usage: "Rapid, on-site testing and laboratory analysis",
    Standards: "CE EN 15204"
  }
},
{
  id: 44,
  name: "Pool testers",
  category: "Lab Supplies",
  subCategory: "Rapid test and comparators",
  distributor: "Lovibond",
  image: "/images/pool_testers.png",
  description: "Pool testers for accurate water quality testing in pools.",
  brief: "Accurate water quality testing for pools.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Robust plastic construction",
    Usage: "Designed specifically for pool water testing",
    Standards: "ISO 17025"
  }
},
{
  id: 45,
  name: "CHEKIT Comparators",
  category: "Lab Supplies",
  subCategory: "Rapid test and comparators",
  distributor: "Lovibond",
  image: "/images/chekit_comparators.png",
  description: "Precision instruments for reliable comparative measurements in lab tests.",
  brief: "Precision instruments for reliable comparisons.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Engineered components for high precision",
    Usage: "Used for standard laboratory comparative analyses",
    Standards: "ISO 17025"
  }
},
{
  id: 46,
  name: "Comparators 2000+",
  category: "Lab Supplies",
  subCategory: "Rapid test and comparators",
  distributor: "Lovibond",
  image: "/images/comparators_2000.png",
  description: "High-accuracy comparisons for various lab applications.",
  brief: "High-accuracy comparisons for lab applications.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Precision-engineered components",
    Usage: "Used in advanced laboratory comparison setups",
    Standards: "CE EN 125"
  }
},

// ===============================
// Lab Supplies – Photometry
// ===============================
{
  id: 47,
  name: "MD100",
  category: "Lab Supplies",
  subCategory: "Lab & Portable Instruments",
  subSubCategory: "Photometry",
  distributor: "Lovibond",
  image: "/images/md100.png",
  description: "MD100 is a portable photometry instrument for accurate measurements.",
  brief: "Portable photometry for accurate water analysis.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Plastic and electronic components",
    Usage: "Used for on-site water analysis",
    Standards: "ISO 17025"
  }
},
{
  id: 48,
  name: "MD110",
  category: "Lab Supplies",
  subCategory: "Lab & Portable Instruments",
  subSubCategory: "Photometry",
  distributor: "Lovibond",
  image: "/images/md110.png",
  description: "MD110 offers enhanced photometric analysis with ease of use.",
  brief: "Enhanced photometric analysis in lab settings.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "High precision sensors and durable plastics",
    Usage: "Ideal for routine laboratory photometry",
    Standards: "CE EN 123"
  }
},
{
  id: 49,
  name: "MD200",
  category: "Lab Supplies",
  subCategory: "Lab & Portable Instruments",
  subSubCategory: "Photometry",
  distributor: "Lovibond",
  image: "/images/MD200.png",
  description: "MD200 photometer with multi-parameter capability for water analysis.",
  brief: "Multi-parameter photometry for water testing.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Advanced sensor technology with robust casing",
    Usage: "Used for multi-parameter water analysis",
    Standards: "ISO 17025"
  }
},
{
  id: 200,
  name: "MD600",
  category: "Lab Supplies",
  subCategory: "Lab & Portable Instruments",
  subSubCategory: "Photometry",
  distributor: "Lovibond",
  image: "/images/md600.png",
  description: "MD600 multi-parameter photometer for advanced water analysis.",
  brief: "Advanced multi-parameter photometer.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [],
  additionalInfo: {
    Features: "Extensive test methods, data logging",
    Usage: "Ideal for water labs and field testing",
    Standards: "ISO 17025"
  }
},
{
  id: 201,
  name: "MD610",
  category: "Lab Supplies",
  subCategory: "Lab & Portable Instruments",
  subSubCategory: "Photometry",
  distributor: "Lovibond",
  image: "/images/md610.png",
  description: "MD610 photometer for wide-range water testing with data management.",
  brief: "Versatile photometer for water analysis.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [],
  additionalInfo: {
    Features: "Enhanced data logging, user-friendly interface",
    Usage: "Routine lab or on-site testing",
    Standards: "CE EN 134"
  }
},
{
  id: 202,
  name: "MD640",
  category: "Lab Supplies",
  subCategory: "Lab & Portable Instruments",
  subSubCategory: "Photometry",
  distributor: "Lovibond",
  image: "/images/md640.png",
  description: "MD640 for an extensive photometric range, robust for challenging environments.",
  brief: "High-range photometry for demanding conditions.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [],
  additionalInfo: {
    Features: "Durable design, wide photometric range",
    Usage: "Ideal for industrial & municipal water labs",
    Standards: "ISO 9001"
  }
},
{
  id: 203,
  name: "MultiDirect",
  category: "Lab Supplies",
  subCategory: "Lab & Portable Instruments",
  subSubCategory: "Photometry",
  distributor: "Lovibond",
  image: "/images/multidirect.png",
  description: "MultiDirect photometer for multi-parameter testing with direct reading colorimeter.",
  brief: "Multi-parameter direct reading photometer.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [],
  additionalInfo: {
    Features: "Multiple test methods, direct reading",
    Usage: "Comprehensive water analysis",
    Standards: "CE EN 1500"
  }
},

// ===============================
// Spectrophotometer
// ===============================
{
  id: 50,
  name: "XD7000",
  category: "Lab Supplies",
  subCategory: "Lab & Portable Instruments",
  subSubCategory: "Spectrophotometer",
  distributor: "Lovibond",
  image: "/images/xd7000.png",
  description: "XD7000 is a state-of-the-art spectrophotometer for reliable readings.",
  brief: "Advanced spectrophotometer for lab conditions.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Precision optical components",
    Usage: "Advanced spectrophotometric analysis",
    Standards: "ISO 9001"
  }
},
{
  id: 51,
  name: "XD7500",
  category: "Lab Supplies",
  subCategory: "Lab & Portable Instruments",
  subSubCategory: "Spectrophotometer",
  distributor: "Lovibond",
  image: "/images/xd7500.png",
  description: "XD7500 delivers precise spectrophotometric measurements with advanced tech.",
  brief: "Precise spectrophotometric measurements.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "High-performance optical sensors",
    Usage: "Accurate colorimetric analysis",
    Standards: "CE EN 12345"
  }
},

// ===============================
// Incubators & Reactors
// ===============================
{
  id: 60,
  name: "Thermostatically controlled cabinets",
  category: "Lab Supplies",
  subCategory: "Incubators & Reactors",
  distributor: "Lovibond",
  image: "/images/thermostatically_controlled.png",
  description: "Consistent temperature control for incubators and reactors.",
  brief: "Consistent temperature for lab incubators/reactors.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Insulated steel construction",
    Usage: "Maintains consistent reactor temperature",
    Standards: "ISO 9001"
  }
},
{
  id: 61,
  name: "Laboratory cabinets with spark-free interior",
  category: "Lab Supplies",
  subCategory: "Incubators & Reactors",
  distributor: "Lovibond",
  image: "/images/laboratory_cabinets.png",
  description: "Spark-free interiors for safety in volatile lab environments.",
  brief: "Spark-free interiors for enhanced lab safety.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "High-grade plastic and metal",
    Usage: "Safe storage in volatile environments",
    Standards: "CE EN 61010"
  }
},
{
  id: 232,
  name: "DI10 Incubator",
  category: "Lab Supplies",
  subCategory: "Incubators & Reactors",
  subSubCategory: "",
  distributor: "Lovibond",
  image: "/images/di10_incubator.png",
  description: "DI10 Incubator for controlled lab incubation.",
  brief: "Controlled incubation for lab samples.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Stainless steel and tempered glass",
    Usage: "Maintains strict temperature control for sensitive samples",
    Standards: "ISO 13485"
  }
},
{
  id: 233,
  name: "DI20 Incubator",
  category: "Lab Supplies",
  subCategory: "Incubators & Reactors",
  subSubCategory: "",
  distributor: "Lovibond",
  image: "/images/di20_incubator.png",
  description: "DI20 Incubator offering enhanced temperature stability for lab use.",
  brief: "Enhanced lab incubator with temperature stability.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "High-grade polymers",
    Usage: "Ideal for prolonged incubation with minimal temperature fluctuations",
    Standards: "CE EN 60601"
  }
},

// ===============================
// Microbiology
// ===============================
{
  id: 234,
  name: "Legionella Test Kits",
  category: "Lab Supplies",
  subCategory: "Microbiology",
  distributor: "Lovibond",
  image: "/images/legionella_test_kits.png",
  description: "Legionella Test Kits for detecting Legionella bacteria in water systems.",
  brief: "Test kits for Legionella detection.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Disposable plastic components",
    Usage: "Detection of Legionella bacteria in water",
    Standards: "ISO 17025"
  }
},
{
  id: 235,
  name: "Coliform/E.Coli Test Kits",
  category: "Lab Supplies",
  subCategory: "Microbiology",
  distributor: "Lovibond",
  image: "/images/coliform_ecoli_test_kits.png",
  description: "Test kits for detecting Coliform and E. Coli bacteria in water.",
  brief: "Rapid detection of Coliform/E.Coli in water samples.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "High-quality disposable reagents",
    Usage: "Rapid screening for coliform and E. Coli contamination",
    Standards: "CE EN 15204"
  }
},

// ===============================
// Parameter
// ===============================
{
  id: 80,
  name: "Parameter",
  category: "Lab Supplies",
  subCategory: "Parameter",
  distributor: "Lovibond",
  image: "/images/parameter.png",
  description: "Instrument ensures accurate measurement of key lab variables.",
  brief: "Accurate measurement of lab variables.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Robust sensor components",
    Usage: "Measurement of various lab parameters",
    Standards: "ISO 9001"
  }
},
{
  id: 81,
  name: "Method",
  category: "Lab Supplies",
  subCategory: "Parameter",
  distributor: "Lovibond",
  image: "/images/method.png",
  description: "Reliable procedures for lab measurements and parameter assessments.",
  brief: "Reliable procedures for parameter assessments.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Precision instruments",
    Usage: "Standardized lab measurement methods",
    Standards: "CE EN 123"
  }
},

// ===============================
// Cartridges & Filters
// (IDs 90-95 already include additionalInfo – see your data)
// ===============================

{
  id: 90,
  name: "3M™ Multi Gas/Vapor Cartridge 6006, 60 ea/Case",
  category: "Cartridges & Filters",
  subCategory: "",
  subSubCategory: "",
  distributor: "3M",
  image: "/images/3m_cartridge_6006.png",
  description: "The 3M™ Multi Gas/Vapor Cartridge 6006 provides reliable respiratory protection against a wide range of gases and vapors, ideal for use in hazardous environments.",
  brief: "Reliable filtration for hazardous environments.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [
    "/images/3m_cartridge_6006.png",
    "/images/3m_cartridge_6006_2.png",
    "/images/3m_cartridge_6006_3.png"
  ],
  additionalInfo: {
    "Gas & Vapor Protection Type": "Ammonia, Certain Organic Vapors, Chlorine, Chlorine Dioxide, Formaldehyde, Hydrogen Chloride, Hydrogen Fluoride, Hydrogen Sulfide, Methylamine, Sulfur Dioxide",
    "Approval": "NIOSH approved for use against a wide range of gases and vapors depending upon the model selected",
    "Connection Type": "Bayonet-style connection fits a wide range of compatible half and full facepiece 3M™ Reusable Respirators",
    "Compatible Respirators": "Use with NIOSH approved 3M™ Half and Full Facepiece Reusable 6000, 6500, 7500, 7800S or FF-400 Series; or the 3M™ Scott™ AV-3000 SureSeal or AV-3000 HT"
  }
},
{
  id: 91,
  name: "3M™ Organic Vapor/Acid Gas Cartridge 6003/07047(AAD), 60 EA/Case",
  category: "Cartridges & Filters",
  distributor: "3M",
  image: "/images/3m_cartridge_6003.png",
  description: "Organic Vapor/Acid Gas Cartridge 6003 for hazardous environments.",
  brief: "Reliable filtration for hazardous environments.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: ["/images/3m_cartridge_6003.png","/images/3m_cartridge_6003_2.png"],
  additionalInfo: {
    "Gas & Vapor Protection Type": "Organic Vapors, Chlorine, HCl, HF, H2S, SO2",
    "NIOSH Approval": "Approved for wide range of gases/vapors",
    "Connection": "Bayonet-style for 3M™ Reusable Respirators",
    "Usage": "Use with 3M™ Half/Full Facepiece or AV-3000"
  }
},
{
  id: 92,
  name: "3M™ Gas and Vapour Filter, ABE1, 6057",
  category: "Cartridges & Filters",
  distributor: "3M",
  image: "/images/3m_filter_6057.png",
  description:
    "CE approved filter 6057 for a wide range of gases/vapours. Fits 3M™ Reusable Masks.",
  brief: "CE approved gas/vapour filter for 3M masks.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: ["/images/3m_filter_6057.png","/images/3m_filter_6057_2.png","/images/3m_filter_6057_3.png"],
  additionalInfo: {
    "Gas & Vapor Protection Type": "Organic Vapors (b.pt. >65°C), Chlorine, etc.",
    "Approval": "CE approved for wide range of gases/vapours",
    "Connection": "Bayonet-style for 3M™ Reusable Masks",
    "Usage": "Use with 3M™ Half/Full Masks 6000/6500QL/7500"
  }
},
{
  id: 93,
  name: "3M™ Gas, Vapour and Particulate Filter, AXP3 NR, 6098",
  category: "Cartridges & Filters",
  distributor: "3M",
  image: "/images/3m_filter_6098.png",
  description:
    "AXP3 NR, 6098 filter for comprehensive protection against gases/vapours/particulates.",
  brief: "Comprehensive filter for gases, vapours, particulates.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [
    "/images/3m_filter_6098.png",
    "/images/3m_filter_6098_2.png",
    "/images/3m_filter_6098_3.png"
  ],
  additionalInfo: {
    "Gas & Vapor Protection Type": "Organic Vapors (b.pt. <65°C)",
    "Approval": "NIOSH for wide range of gases/vapors/particulates",
    "Connection": "Bayonet-style for 3M™ Reusable Respirators",
    "Design": "Swept-back, low profile for good field of view"
  }
},
{
  id: 94,
  name: "3M™ Particulate Filter 2097/07184(AAD), P100 ... 100 EA/Case",
  category: "Cartridges & Filters",
  distributor: "3M",
  image: "/images/3m_filter_2097.png",
  description:
    "High-efficiency particulate filtration with nuisance-level organic vapor relief.",
  brief: "High-efficiency filtration with vapor relief.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [
    "/images/3m_filter_2097.png",
    "/images/3m_filter_2097_2.png",
    "/images/3m_filter_2097_3.png"
  ],
  additionalInfo: {
    "Particulate Protection": "Asbestos, Mold, Organic Vapor, Silica",
    "Approval": "NIOSH for oil & non-oil based particles",
    "Connection": "Bayonet-style for 3M™ Respirators",
    "Usage": "Use with 3M™ Half/Full Facepiece or AV-3000"
  }
},
{
  id: 95,
  name: "3M™ Particulate Filter 2091/07000(AAD), P100 100 EA/Case",
  category: "Cartridges & Filters",
  distributor: "3M",
  image: "/images/3m_filter_2091.png",
  description:
    "3M™ Particulate Filter 2091 for robust filtration in demanding environments.",
  brief: "Robust particulate filtration for industrial use.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [
    "/images/3m_filter_2091.png",
    "/images/3m_filter_2091_2.png",
    "/images/3m_filter_2091_3.png"
  ],
  additionalInfo: {
    "Particulate Protection": "Asbestos, Mold, Silica",
    "Approval": "NIOSH for certain oil/non-oil based particles",
    "Connection": "Bayonet-style for 3M™ Respirators",
    "Usage": "Use with 3M™ Half/Full Facepiece or AV-3000"
  }
},


// ===============================
// Fire Safety
// ===============================
{
  id: 100,
  name: "IST Fire Fighter Suit",
  category: "Working Wear",
  subCategory: "Fire Fighter Suit",
  distributor: "IST",
  image: "/images/ist_fire_suit.png",
  description: "Offers comprehensive protection with high heat/flame resistance.",
  brief: "Comprehensive protection for firefighters.",
  colors: [""],
  sizes: ["S", "M", "L", "XL"],
  colorVariants: [
    { name: "black", gallery: ["/images/ist_fire_suit.png"] }
  ],
  additionalInfo: {
    Material: "Flame-retardant fabric and reinforced composite",
    Usage: "Protection against extreme heat and flames for firefighting operations",
    Standards: "NFPA 1971"
  }
},
{
  id: 101,
  name: "IST Safety Shower and Eyewash",
  category: "Safety Shower & Eyewash",
  distributor: "IST",
  image: "/images/ist_safety_shower.png",
  description: "ISTEC® TYPE ESW Combined Unit, Eyewash and Emergency Shower",
  brief: "ISTEC® TYPE ESW Combined Unit, Eyewash and Emergency Shower",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [
    "/images/ist_safety_shower.png",
    "/images/ist_safety_shower_2.png",
    "/images/ist_safety_shower_3.png",
    "/images/ist_safety_shower_4.png",
    "/images/ist_safety_shower_5.png",
    "/images/ist_safety_shower_6.png",
    "/images/ist_safety_shower_7.png"
  ],
  additionalInfo: {
    "Available in different materials":
      "Stainless Steel 304, Stainless Steel 316, Galvanized and Painted Steel.",
    "Available in different mechanism":
      "Pull Rod control for Safety Shower and Push handle control for Eyewash, or Foot treadle control for Safety Shower and Push handle control for Eyewash, among others.",
    "Product Features": [
      "Durable and Aesthetic Design: STEC TYPE ESW features a stainless steel structure, offering durability and an aesthetic appearance. It is suitable for floor mounting with its own base. It saves space and maintains order in the workspace.",
      "Certified for Safe Use: Our ATEX-certified (explosion-proof) models are available for safe usage in hazardous environments.",
      "Manufactured to Standards: Produced and certified in accordance with ANSI/ISEA Z358.1-2014 and EN 15154-1, EN 15154-2, EN 15154-5 standards."
    ]
  }
},
{
  id: 102,
  name: "IST Eyewash",
  category: "Safety Shower & Eyewash",
  distributor: "IST",
  image: "/images/ist_eyewash.png",
  description: "ISTEC Type EW-ESL Deck-Mounted, laboratory Type, Hand Pedal Eye/Face Wash.",
  brief: "ISTEC Type EW-ESL Deck-Mounted, laboratory Type, Hand Pedal Eye/Face Wash.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [
    "/images/ist_ew4.png",
    "/images/ist_ew5.png",
    "/images/ist_ew6.png"
  ],
  additionalInfo: {
    "Available in different materials":
      "Stainless steel 304, stainless steel 316, Galvanized and Painted Steel",
    "Available in different mechanism":
      "Push handle control for Eyewash or foot treadle control for Eyewash",
    Description:
      "ISTEC Type EW-ESL Deck-Mounted, laboratory Type, Hand Pedal Eye/Face Wash is designed to provide rapid and effective intervention during accidental incidents in hazardous work environments. It is manufactured in compliance with ANSI/ISEA Z358.1-2014 and EN 15154-2 standards and is certified accordingly. This product is highly preferred in industries such as chemical, petrochemical, pharmaceutical, food, metal processing, and other sectors.",
    "Product Features": [
      "Durable and Aesthetic Design: ISTEC TYPE EW features a stainless steel structure, offering durability and an aesthetic appearance. It is suitable for floor mounting with its own base. It saves space and maintains order in the workspace.",
      "Certified for Safe Use: Our ATEX-certified (explosion-proof) models are available for safe usage in hazardous environments, ensuring full compliance with occupational health and safety standards.",
      "Manufactured to Standards: Produced and certified in accordance with ANSI/ISEA Z358.1-2014 and EN 15154-2 standards."
    ]
  }
}
,
{
  id: 103,
  name: "IST Shower",
  category: "Safety Shower & Eyewash",
  distributor: "IST",
  image: "/images/ist_Shower.png",
  description: "ISTEC® TYPE ES, Pedestal Type, Foot Operated Emergency Shower.",
  brief: "ISTEC® TYPE ES, Pedestal Type, Foot Operated Emergency Shower.",
  colors: [],
  sizes: [],
  colorVariants: [],
  gallery: [
    "/images/ist_1.png",
    "/images/ist_2.png",
    "/images/ist_3.png"
  ],
  additionalInfo: {
    "Available in different materials":
      "Stainless steel 304, stainless steel 316, Galvanized and Painted Steel",
    "Available in different mechanism":
      "Pull Rod control for Safety Shower or foot treadle control for Safety Shower",
    Description:
      "The ISTEC TYPE ES Pedestal Type, Foot Operated Emergency Shower is designed to provide rapid and effective intervention during accidental incidents in hazardous work environments. It is manufactured in compliance with ANSI/ISEA Z358.1-2014 and EN 15154-1 standards and is certified accordingly. This product is highly preferred in industries such as chemical, petrochemical, pharmaceutical, food, metal processing, and other sectors.",
    "Product Features": [
      "Durable and Aesthetic Design: ISTEC TYPE ES features a stainless steel structure, offering durability and an aesthetic appearance. It is suitable for floor mounting with its own base. It saves space and maintains order in the workspace.",
      "Certified for Safe Use: Our ATEX-certified (EXPROOF) models are available for safe usage in hazardous environments.",
      "Manufactured to Standards: Produced and certified in accordance with ANSI/ISEA Z358.1-2014 and EN 15154-1 standard."
    ]
  }
}
,

// ===============================
// Welding Protection
// ===============================
{
  id: 110,
  name: "Cepro Welding Blanket",
  category: "Welding Protection",
  distributor: "Cepro",
  image: "/images/cepro_welding_blanket.png",
  description: "Heat resistance and protection from sparks/spatter during welding.",
  brief: "Heat resistance for welding protection.",
  colors: ["black"],
  sizes: [],
  colorVariants: [
    { name: "black", gallery: ["/images/cepro_welding_blanket.png"] }
  ],
  additionalInfo: {
    Material: "High-temperature resistant fabric",
    Usage: "Protects personnel and equipment during welding",
    Standards: "EN 1083"
  }
},
{
  id: 111,
  name: "Cepro Welding Curtain",
  category: "Welding Protection",
  distributor: "Cepro",
  image: "/images/cepro_welding_curtain.png",
  description: "Welding curtain to shield bystanders and ensure a safe environment.",
  brief: "Shielding and safety during welding operations.",
  colors: ["black"],
  sizes: [],
  colorVariants: [
    { name: "black", gallery: ["/images/cepro_welding_curtain.png"] }
  ],
  additionalInfo: {
    Material: "Flame-retardant, durable material",
    Usage: "Used to create a safe barrier during welding",
    Standards: "EN 13136"
  }
},

// ===============================
// KOSMODISK
// ===============================
{
  id: 120,
  name: "KOSMODISK PRESTIGE Car Application",
  category: "KOSMODISK",
  distributor: "KOSMODISK",
  image: "/images/kosmodisk_prestige.png",
  description: "Engineered for automotive safety and performance enhancement.",
  brief: "Automotive safety and performance enhancement.",
  colors: [],
  sizes: [],
  colorVariants: [],
  additionalInfo: {
    Material: "Specialized composite materials",
    Usage: "Enhances automotive safety performance",
    Standards: "ISO 9001"
  }
},
{
  id: 121,
  name: "KOSMODISK ACTIVE Sports Belt",
  category: "KOSMODISK",
  distributor: "KOSMODISK",
  image: "/images/kosmodisk_active.png",
  description: "Ergonomic design and robust performance for active lifestyles.",
  brief: "Ergonomic design for active lifestyles.",
  colors: ["black"],
  sizes: ["S", "M", "L"],
  colorVariants: [
    { name: "black", gallery: ["/images/kosmodisk_active.png"] }
  ],
  additionalInfo: {
    Material: "High-strength fabric and metal components",
    Usage: "Provides support during active sports and work",
    Standards: "CE EN 12345"
  }
},
{
  id: 122,
  name: "KOSMODISK CLASSIC Spine Massager",
  category: "KOSMODISK",
  distributor: "KOSMODISK",
  image: "/images/kosmodisk_classic.png",
  description: "Effective relief and promotes spinal health.",
  brief: "Effective relief for spinal health.",
  colors: ["black", "grey"],
  sizes: [],
  colorVariants: [
    { name: "black", gallery: ["/images/kosmodisk_classic.png"] },
    { name: "grey", gallery: ["/images/kosmodisk_classic.png"] }
  ],
  additionalInfo: {
    Material: "Medical-grade plastic and foam",
    Usage: "Designed to relieve back pain and improve posture",
    Standards: "ISO 13485"
  }
}
,
  // ===============================
  // 14) WORKING WEAR (Example)
  // ===============================
  {
    id: 212,
    name: "AUSTRAL2 Trousers",
    category: "Working Wear",
    subCategory: "Anti Freez Clothes",
    distributor: "Delta Plus",
    image: "/images/austral2_trousers.png",
    description:
      "3M Thinsulate™ fleece-lined dungarees with hood, for optimum protection from the cold down to -50°C, ideal for refrigeration workers.",
    brief: "3M Thinsulate™ fleece-lined dungarees with hood, for optimum protection from the cold down to -50°C, ideal for refrigeration workers.",
    colors: ["navy"],
    sizes: ["M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "navy", gallery: ["/images/austral2_trousers.png"] }
    ],
    gallery: [],
    additionalInfo: {
      Material: "Twill 85% Polyester 15% Cotton ",
      "Lining and padding" : "100% polyester" ,
      "Number of pockets" :"4",
      Standards: "EN342 | 0,408 m² K/W (B), 2 X | EN ISO 13688"
    }
  },
  
    {
      id: 305,
      name: "MILTON2",
      category: "Working Wear",
      subCategory: "Winter Clothing",
      distributor: "Delta Plus",
      image: "/images/MILTON2.png",
      description:
        "Waterproof-breathable stretch parka with windproof mitt, combining freedom of movement and warmth.",
      brief:
        "Waterproof-breathable stretch parka with windproof mitt, combining freedom of movement and warmth.",
      colors: ["black", "red", "navy"],
      sizes: ["SM", "MD", "LG", "XL", "2X", "3X"],
      colorVariants: [
        { name: "black", gallery: ["/images/MILTON2_black.png"] },
        { name: "black", gallery: ["/images/MILTON2_black_2.png"] },
        { name: "Red", gallery: ["/images/MILTON2_red.png"] },
        { name: "Red", gallery: ["/images/MILTON2_red_2.png"] },
        { name: "navy", gallery: ["/images/MILTON2_navy.png"] },
        { name: "navy", gallery: ["/images/MILTON2_navy_2.png"] }
      ],
      gallery: [
        "/images/MILTON2.png",
        "/images/MILTON2_2.png",
        "/images/MILTON2_3.png",
        "/images/MILTON2_4.png",
        "/images/MILTON2_5.png",
        "/images/MILTON2_6.png",
        "/images/MILTON2_7.png",
        "/images/MILTON2_8.png"
      ],
      additionalInfo: {
        Material: "Canvas (94% Polyester, 6% Elastane) with TPU membrane (2 rolled layers)",
        LiningAndPadding: "100% Polyester",
        Hood: "Removable by zip hood",
        Seams: "Waterproof",
        InnerWrist: "Elastane with Elastane thumb",
        NumberOfPockets: "6",
        Standards: "CE; EN 14058; EN ISO 13688"
      }
    },
    {
      id: 306,
      name: "DARWIN3",
      category: "Working Wear",
      subCategory: "Winter Clothing",
      distributor: "Delta Plus",
      image: "/images/DARWIN3.png",
      description:
        "Universal waterproof parka for added warmth.",
      brief:
        "Universal waterproof parka for added warmth.",
      colors: ["navy"],
      sizes: ["XS","SM", "MD", "LG", "XL", "2X", "3X"],
      colorVariants: [
        { name: "navy", gallery: ["/images/DARWIN3.png"] }
      ],
      gallery: [
        "/images/DARWIN3.png",
        "/images/DARWIN3_2.png",
        "/images/DARWIN3_3.png",
        "/images/DARWIN3_4.png",
      ],
      additionalInfo: {
        Material: "Canvas Pongee 100% Polyester PVC coating",
        LiningAndPadding: "100% Polyester",
        Hood: "Fixed retractable",
        Waist : "Cord adjustment",
        InnerWrist: "Ribbed cuff",
        NumberOfPockets: "5",
        "Standards" : "CE . EN 343 3 ; 1* ; x . EN ISO 13688",
      }
    },
  {
    id: 213,
    name: "COD set up",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Photometry",
    distributor: "Lovibond",
    image: "/images/cod_setup.png",
    description: "Complete setup for Chemical Oxygen Demand (COD) testing.",
    brief: "COD testing kit for water analysis.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 214,
    name: "MD 50",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Photometry",
    distributor: "Lovibond",
    image: "/images/md50.png",
    description: "Compact photometer MD 50 for essential water testing.",
    brief: "Compact photometer for basic water analysis.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 215,
    name: "MD150",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Photometry",
    distributor: "Lovibond",
    image: "/images/md150.png",
    description: "MD150 photometer offering expanded measurement parameters.",
    brief: "Expanded parameter photometer for water analysis.",
    colors: [],
    sizes: [],
    colorVariants: []
  },

  // Lab & Portable Instruments - Electrochemistry
  {
    id: 216,
    name: "pH Meter",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Electrochemistry",
    distributor: "Lovibond",
    image: "/images/ph_meter.png",
    description: "Portable pH meter for accurate acidity/alkalinity measurement.",
    brief: "Accurate pH meter for lab or field use.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 217,
    name: "Conductivity (CON) Meter",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Electrochemistry",
    distributor: "Lovibond",
    image: "/images/con_meter.png",
    description: "Conductivity meter for measuring electrical conductivity in solutions.",
    brief: "Reliable conductivity meter for water quality analysis.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 218,
    name: "Dissolved Oxygen (DO) Meter",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Electrochemistry",
    distributor: "Lovibond",
    image: "/images/do_meter.png",
    description: "Meter for measuring dissolved oxygen in water samples.",
    brief: "Accurate DO meter for water analysis.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 219,
    name: "TDS Meter",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Electrochemistry",
    distributor: "Lovibond",
    image: "/images/tds_meter.png",
    description: "Meter for measuring Total Dissolved Solids (TDS) in water.",
    brief: "TDS meter for assessing water quality.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 220,
    name: "Temperature (TEMP) Meter",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Electrochemistry",
    distributor: "Lovibond",
    image: "/images/temp_meter.png",
    description: "Digital temperature meter for water or lab use.",
    brief: "Precision temperature measurement.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 221,
    name: "Salinity Meter",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Electrochemistry",
    distributor: "Lovibond",
    image: "/images/salinity_meter.png",
    description: "Meter for measuring water salinity.",
    brief: "Measures water salinity accurately.",
    colors: [],
    sizes: [],
    colorVariants: []
  },

  // Lab & Portable Instruments - Turbidity
  {
    id: 222,
    name: "TB 211 IR",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Turbidity",
    distributor: "Lovibond",
    image: "/images/tb211_ir.png",
    description: "Turbidity meter TB 211 IR for water clarity testing.",
    brief: "Turbidity meter for measuring water clarity.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 223,
    name: "TB 300 IR",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Turbidity",
    distributor: "Lovibond",
    image: "/images/tb300_ir.png",
    description: "TB 300 IR turbidity meter for precise water clarity analysis.",
    brief: "Precise turbidity measurements.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 224,
    name: "TB 350",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Turbidity",
    distributor: "Lovibond",
    image: "/images/tb350.png",
    description: "TB 350 turbidity meter designed for robust water clarity testing.",
    brief: "Robust turbidity meter for industrial use.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 225,
    name: "T-CAL Standards",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Turbidity",
    distributor: "Lovibond",
    image: "/images/tcal_standards.png",
    description: "Calibration standards for turbidity meters.",
    brief: "Ensure accurate turbidity measurements with T-CAL standards.",
    colors: [],
    sizes: [],
    colorVariants: []
  },

  // Lab & Portable Instruments - BOD
  {
    id: 226,
    name: "BD 600",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "BOD",
    distributor: "Lovibond",
    image: "/images/bd600.png",
    description: "BOD analyzer BD 600 for biochemical oxygen demand testing.",
    brief: "BOD analyzer for water quality testing.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 227,
    name: "BD 600 GLP",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "BOD",
    distributor: "Lovibond",
    image: "/images/bd600_glp.png",
    description: "BD 600 GLP variant for BOD testing with enhanced features.",
    brief: "Enhanced BOD testing instrument.",
    colors: [],
    sizes: [],
    colorVariants: []
  },

  // Lab & Portable Instruments - Floc-Tester
  {
    id: 228,
    name: "ET 730",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Floc-Tester",
    distributor: "Lovibond",
    image: "/images/et730.png",
    description: "ET 730 floc-tester for water quality analysis.",
    brief: "Floc-tester for rapid flocculation testing.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 229,
    name: "ET 740",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Floc-Tester",
    distributor: "Lovibond",
    image: "/images/et740.png",
    description: "ET 740 floc-tester offering precise analysis of flocculation.",
    brief: "Precise floc-tester for water analysis.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 230,
    name: "ET 750",
    category: "Lab Supplies",
    subCategory: "Lab & Portable Instruments",
    subSubCategory: "Floc-Tester",
    distributor: "Lovibond",
    image: "/images/et750.png",
    description: "ET 750 floc-tester for advanced flocculation measurement.",
    brief: "Advanced floc-tester for water quality.",
    colors: [],
    sizes: [],
    colorVariants: []
  },

  // Incubators & Reactors
  {
    id: 231,
    name: "Thermoreactor RD 125",
    category: "Lab Supplies",
    subCategory: "Incubators & Reactors",
    subSubCategory: "Reactors",
    distributor: "Lovibond",
    image: "/images/thermoreactor_rd125.png",
    description: "Thermoreactor RD 125 for precise reactor temperature control.",
    brief: "Reactor with precise temperature control.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 232,
    name: "DI10 Incubator",
    category: "Lab Supplies",
    subCategory: "Incubators & Reactors",
    subSubCategory: "",
    distributor: "Lovibond",
    image: "/images/di10_incubator.png",
    description: "DI10 Incubator for controlled lab incubation.",
    brief: "Controlled incubation for lab samples.",
    colors: [],
    sizes: [],
    colorVariants: []
  },
  {
    id: 233,
    name: "DI20 Incubator",
    category: "Lab Supplies",
    subCategory: "Incubators & Reactors",
    subSubCategory: "",
    distributor: "Lovibond",
    image: "/images/di20_incubator.png",
    description: "DI20 Incubator offering enhanced temperature stability for lab use.",
    brief: "Enhanced lab incubator with temperature stability.",
    colors: [],
    sizes: [],
    colorVariants: []
  },

  // Microbiology
  //{
   // id: 234,
   // name: "Legionella Test Kits",
    //category: "Lab Supplies",
    //subCategory: "Microbiology",
    //subSubCategory: "",
    //distributor: "Lovibond",
    //image: "/images/legionella_test_kits.png",
    //description: "Legionella Test Kits for detecting Legionella bacteria in water systems.",
    //brief: "Test kits for Legionella detection.",
    //colors: [],
    //sizes: [],
    //colorVariants: []
  //},
  //{
    //id: 235,
    //name: "Coliform/E.Coli Test Kits",
    //category: "Lab Supplies",
    //subCategory: "Microbiology",
    //subSubCategory: "",
    //distributor: "Lovibond",
    //image: "/images/coliform_ecoli_test_kits.png",
    //description: "Test kits for detecting Coliform and E. Coli bacteria in water.",
    //brief: "Rapid detection of Coliform/E.Coli in water samples.",
    //colors: [],
    //sizes: [],
    //colorVariants: []
  //},
  {
    id: 236,
    name: "Igloo2 Overall",
    category: "Working Wear",
    subCategory: "Anti Freez Clothes",
    distributor: "Delta Plus",
    image: "/images/igloo2_overall.png",
    description:
      "3M Thinsulate™ polar fleece-lined coveralls with hood, for optimum cold protection down to -45°C, ideal for refrigeration workers.",
    brief: "3M Thinsulate™ polar fleece-lined coveralls with hood, for optimum cold protection down to -45°C, ideal for refrigeration workers.",
    colors: ["navy"],
    sizes: ["M" , "L" , "XL" , "XXL"],
    colorVariants: [
      { name: "navy", gallery: ["/images/igloo2_overall.png"] },
    ],
    gallery: [
      "/images/igloo2_overall.png"
    ],
    additionalInfo: {
      Material: "Twill 85% Polyester 15% Cotton.",
      "Lining and padding" : "100% polyester ",
      Hood: "Fixed",
      Waist: "Elastic back" ,
      "Inner wrist": "Ribbed cuff" ,
      "Number of pockets": "6",
      Standards: "EN342 | 0,373 m² K/W (B), 2 X | EN ISO 13688",

    }
  },
  {
    id: 237,
    name: "Laponie2 Jacket",
    category: "Working Wear",
    subCategory: "Anti Freez Clothes",
    distributor: "Delta Plus",
    image: "/images/laponie2_jacket.png",
    description:
      "3M Thinsulate™ polar fleece-lined parka with removable hood, for optimum protection from the cold down to -50°C, ideal for refrigeration workers.",
    brief:
      "3M Thinsulate™ polar fleece-lined parka with removable hood, for optimum protection from the cold down to -50°C, ideal for refrigeration workers.",
    colors: ["navy"],
    sizes: ["M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "black", gallery: ["/images/laponie2_jacket_black.png"] }
    ],
    gallery: ["/images/laponie2_jacket.png"],
    additionalInfo: {
      Material: "Twill 85% Polyester, 15% Cotton",
      "Lining and padding": "100% Polyester",
      "Removable by zip hood": "Yes",
      "Upper neck polar lining": "Yes",
      "Waist adjustment": "Cord adjustment",
      "Inner wrist": "Ribbed cuff",
      "Number of pockets": "6",
      Standards: "EN342 | 0,408 m² K/W (B), 2 X | EN ISO 13688"
    }
  }
,  
  {
    id: 238,
    name: "Northwood3",
    category: "Working Wear",
    subCategory: "Winter Clothing",
    subSubCategory: "",
    distributor: "Delta Plus",
    image: "/images/NORTHWOOD3.png",
    description:
      "Working Suit Winter Jacket is designed for maximum protection and mobility in extremely cold conditions with advanced insulation.",
    brief: "Winter work suit with advanced insulation and ergonomic design.",
    colors: ["grey"],
    sizes: ["S", "M", "L", "XL"],
    colorVariants: [
      { name: "navy", gallery: ["/images/NORTHWOOD3.png"] },
    ],
    gallery: [
      "/images/NORTHWOOD3.png"
    ],
    additionalInfo: {
      Material: "Durable, insulated fabric",
      Features: "Water-resistant, windproof, ergonomic design",
      Standards: "EN ISO 11611"
    }
  },
  {
    id: 239,
    name: "EASYVIEW",
    category: "Working Wear",
    subCategory: "Winter Clothing",
    subSubCategory: "",
    distributor: "Delta Plus",
    image: "/images/EASYVIEW.png",
    description:
      "Universal waterproof parka, combining resistance and moderate warmth, for day and night visibility.",
    brief: "Universal waterproof parka, combining resistance and moderate warmth, for day and night visibility.",
    colors: ["yellow","orange"],
    sizes: ["SM" , "MD" , "LG" , "XL" , "2X" , "3X"],
    colorVariants: [
      { name: "yellow", gallery: ["/images/EASYVIEW.png"] },
      { name: "orange", gallery: ["/images/EASYVIEW_orange.png"] },

    ],
    gallery: [
      "/images/EASYVIEW.png"
    ],
    additionalInfo: {
      Material: "Canvas Oxford 100% Polyester Polyurethane coating",
      "Lining and padding" : "100% Polyester",
      hood: "Fixed retractable",
      Seams : "Waterproof",
      "Number of pockets" : 3,
      Standards: "CE, EN ISO 20471, Class 3 x25; EN343 , 3 1* x, EN ISO 13688"
    }
  },
  {
    id: 307,
    name: "MO70630",
    category: "Working Wear",
    subCategory: "Winter Clothing",
    subSubCategory: "",
    distributor: "COVER GUARD",
    image: "/images/MO70630.png",
    description:
      "Universal waterproof parka, combining resistance and moderate warmth, for day and night visibility.",
    brief:
      "Universal waterproof parka, combining resistance and moderate warmth, for day and night visibility.",
    colors: ["yellow"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colorVariants: [
      { name: "yellow", gallery: ["/images/MO70630.png"] }
    ],
    gallery: [
      "/images/MO70630.png"
    ],
    additionalInfo: {
      Outshell: "Softshell (94% polyester / 6% spandex), water repellent and breathable, bonded on 100% polyester micro polar fleece 310 g/m²",
      Lining: "100% polyester tricot",
      Waterproofness: "8000 mm",
      Breathability: "3000 mvp",
      Bands: "Retroreflective (2 belts, 2 shoulder straps from front to back, 2 arm belts on each sleeve)",
      Closing: "One-way zipper up to the top of the collar",
      Collar: "High-necked with integrated hood",
      RemovableSleeves: "Cuffs with scratch bands",
      BottomTightening: "Elastic with block cords on inner sides",
      Pockets: "2 bottom pockets with vertical smooth zipper, 1 upper pocket with smooth vertical zipper",
      Standards: "EN ISO 20471:2013 + A1:2016"
    }
  }
,  
  {
    id: 308,
    name: "CO600",
    category: "Working Wear",
    subCategory: "Chemical Overalls",
    subSubCategory: "",
    distributor: "Delta Plus",
    image: "/images/CO600.png",
    description:
      "Overalls for type 3 chemical protection.",
    brief: "Overalls for type 3 chemical protection.",
    colors: ["green"],
    sizes: ["S" , "M" , "L" , "XL" , "2XL" , "3XL"],
    colorVariants: [
      { name: "green", gallery: ["/images/CO600.png"] },

    ],
    gallery: [
      "/images/CO600.png"
    ],
    additionalInfo: {
      Material : "Support 100% Polyester Double-sided PVC coating 380 g/m² ",
      hood: " Fixed ",
      Seams : "Thermo-welded",
      Standards: "CE; EN14605 Type 3; EN ISO 13688"
    }
  },
  {
    id: 309,
    name: "TYVEK 800 J",
    category: "Working Wear",
    subCategory: "Chemical Overalls",
    subSubCategory: "",
    distributor: "DuPont",
    image: "/images/TYVEK800J.png",
    description:
      "Overalls for type 3 chemical protection.",
    brief: "Overalls for type 3 chemical protection.",
    colors: ["White"],
    sizes: ["SM, MD, LG, XL, 2X, 3X, 4X, 5X, 6X, 7X"],
    colorVariants: [
      { name: "White", gallery: ["/images/TYVEK800J.png"] },

    ],
    gallery: [
      "/images/TYVEK800J.png"
    ],
    additionalInfo: {
      Materials :"Fabric/	TYVEK®",
      Design :	"Hooded coverall",
      Seam	: "Taped",
      Quantity : "Box	25 per case",
      Standard: " According to EN 14325 , According to EN 14126 , According to EN 1073-2 , According to EN 14116 , According to EN 11612 , Front Tyvek ® / Back , Based on test according to ASTM D-572 "
    }
  },
  {
    id: 310,
    name: "Tychem 2000 C",
    category: "Working Wear",
    subCategory: "Chemical Overalls",
    subSubCategory: "",
    distributor: "DuPont",
    image: "/images/Tychem2000C.png",
    description:
      "Standard Fit Hood. Elastic Wrists. Attached Socks. Storm Flap with Adhesive Closure. Taped Seams. Pin Lock Slider Zipper Pull.",
    brief: "Standard Fit Hood. Elastic Wrists. Attached Socks. Storm Flap with Adhesive Closure. Taped Seams. Pin Lock Slider Zipper Pull.",
    colors: ["Yellow"],
    sizes: ["MD, LG, XL, 2X, 3X, 4X, 5X, 6X"],
    colorVariants: [
      { name: "Yellow", gallery: ["/images/Tychem2000C.png"] },

    ],
    gallery: [
      "/images/Tychem2000C.png"
    ],
    additionalInfo: {
      Materials :"Fabric/	TYVEK® 2000",
      Design :	"Coverall w/ Hood, Elastic Wrists, Att. Socks",
      Seam	: "Taped",
      Quantity : "4 per case",
      Standard: " EN 14325 , EN 1073-2 , EN 11612 , EN 11611 5 Front Tyvek ® / Back , ASTM D-572 "
    }
  },
  {
    id: 311,
    name: "DT 117",
    category: "Working Wear",
    subCategory: "Disposable Overalls",
    subSubCategory: "",
    distributor: "Delta Plus",
    image: "/images/DT117.png",
    description:
      "Type 5, disposable, anti-static, dry particle resistant chemical protective coveralls offering a good fit and enhanced protection.",
    brief: "Type 5, disposable, anti-static, dry particle resistant chemical protective coveralls offering a good fit and enhanced protection.",
    colors: ["white"],
    sizes: ["MD , LG , XL , 2X"],
    colorVariants: [
      { name: "ehite", gallery: ["/images/DT117.png"] },

    ],
    gallery: [
      "/images/DT117.png",
      "/images/DT117_2.png",
      "/images/DT117_3.png",
      "/images/DT117_4.png",
      "/images/DT117_5.png",
      "/images/DT117_6.png"
    ],
    additionalInfo: {
      hood: "Fixed",
      "Inner wrist" : "Ribbed cuff",
      Standard: "CE ; EN ISO 13982-1 Type 5B ,EN13034 Type 6B , EN14126 , EN1149-5 , EN 1073-2"
    }
  }
];

export default productsData;