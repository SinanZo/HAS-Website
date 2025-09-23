// src/data/categoriesData.js

const categories = [
  {
    name: "Safety Helmets",
    // Note: Ensure you have Font Awesome loaded (or your preferred icon library)
    // The icon field holds the Font Awesome class names that you can apply
    // on an <i> element (or a component that supports className)
    icon: "fas fa-hard-hat",
    subcategories: ["Construction Helmets", "Electrical Helmets"]
  },
  {
    name: "Safety Spectacles",
    icon: "fas fa-glasses",
    subcategories: ["Anti-Scratch Glasses", "UV Protective Glasses"]
  },
  {
    name: "Disposable Masks",
    icon: "fas fa-mask",
    subcategories: ["FFP2 Masks", "FFP3 Masks"]
  },
  {
    name: "Respirators",
    icon: "fas fa-head-side-mask",
    subcategories: ["Half Face Masks", "Full Face Masks"]
  },
  {
    name: "Cartridges & Filters",
    icon: "fas fa-filter",
    subcategories: [
      "Organic Vapor",
      "Acid Gas Filters",
      "Gas & Vapour Filters",
      "Particulate Filters"
    ]
  },
  {
    name: "Labels & Printers",
    icon: "fas fa-barcode",
    subcategories: ["Industrial Labels", "Barcode Printers"]
  },
  {
    name: "Fire Safety",
    icon: "fas fa-fire-extinguisher",
    subcategories: ["Firefighting Suits", "Thermal Gloves"]
  },
  {
    name: "Welding Protection",
    icon: "fas fa-wrench",
    subcategories: ["Welding Blankets", "Welding Curtains"]
  },
  {
    name: "KOSMODISK",
    icon: "fas fa-heartbeat",
    subcategories: [] // No subcategories defined
  }
];

export default categories;
