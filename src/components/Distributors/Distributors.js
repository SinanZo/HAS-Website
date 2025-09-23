import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Distributors.css";

const distributorsData = [
  {
    name: "Delta Plus",
    logo: "/images/delta-plus.png",
    categories: {
      "Safety Helmets": {
        "Construction Helmets": ["Zircon1", "Diamond5"],
        "Electrical Helmets": ["QUARTZ UP III", "QUARTZ UP IV"],
      },
      "Safety Spectacles": {
        "Anti-Scratch Glasses": ["Brava2 AB", "Galeras"],
        "UV Protective Glasses": ["Vista Clear"],
      },
    },
  },
  {
    name: "3M",
    logo: "/images/3m.png",
    categories: {
      "Respirators": {
        "Half Face Masks": ["3M™ Reusable Half Mask Respirator 6000"],
        "Full Face Masks": ["3M™ Full Facepiece Reusable Respirator 6800"],
      },
      "Cartridges & Filters": {
        "Organic Vapor": ["3M™ Multi Gas/Vapor Cartridge 6006"],
        "Acid Gas Filters": ["3M™ Organic Vapor/Acid Gas Cartridge 6003"],
      },
    },
  },
  {
    name: "Brady",
    logo: "/images/brady.png",
    categories: {
      "Labels & Printers": {
        "Industrial Labels": ["Custom Safety Labels", "Barcode Labels"],
        "Barcode Printers": ["Brady BMP41", "Brady BMP71"],
      },
      "Lockout Tagout": {
        "Electrical Lockouts": ["Circuit Breaker Lockout", "Plug Lockout"],
        "Valve Lockouts": ["Gate Valve Lockout", "Ball Valve Lockout"],
      },
    },
  },
  {
    name: "Honeywell",
    logo: "/images/honeywell.png",
    categories: {
      "Fire Safety": {
        "Firefighting Suits": ["Honeywell Pro-Wear"],
        "Thermal Gloves": ["Honeywell Heat-Resistant Gloves"],
      },
      "Gas Detection": {
        "Portable Gas Monitors": ["Honeywell BW Clip4"],
        "Fixed Gas Sensors": ["Sensepoint XCD"],
      },
    },
  },
  {
    name: "KOSMODISK",
    logo: "/images/kosmodisk.png",
    categories: {
      "Therapeutic Support": {
        "Back Supports": ["Kosmodisk Classic", "Kosmodisk Active"],
        "Neck Supports": ["Kosmodisk Neck Relax"],
      },
      "Orthopedic Accessories": {
        "Knee Braces": ["Kosmodisk Knee Brace"],
        "Foot Insoles": ["Kosmodisk Orthopedic Insoles"],
      },
    },
  },
  {
    name: "Tintometer - Lovibond",
    logo: "/images/tintometer.png",
    categories: {
      "Water Testing Equipment": {
        "pH Meters": ["Lovibond SD 300 pH"],
        "Turbidity Meters": ["Lovibond TB211 IR"],
      },
    },
  },
  {
    name: "MSA",
    logo: "/images/msa.png",
    categories: {
      "Hearing Protection": {
        "Ear Muffs": ["MSA Sordin Supreme"],
        "Noise Cancelling": ["MSA Sound Control"],
      },
      "Eye Protection": {
        "Goggles": ["MSA Safety Goggles"],
        "Welding Shields": ["MSA AutoDarkening"],
      },
    },
  },
  {
    name: "Bullard",
    logo: "/images/bullard.png",
    categories: {
      "Full Face Respirators": {
        "Firefighter Masks": ["Bullard Firefighter Mask"],
        "Chemical Resistant": ["Bullard Chemical Mask"],
      },
      "Head Protection": {
        "Hard Hats": ["Bullard C33 Hard Hat"],
        "Bump Caps": ["Bullard Lightweight Cap"],
      },
    },
  },
  {
    name: "IST",
    logo: "/images/ist.png",
    categories: {
      "Electrical Safety": {
        "Insulated Tools": ["IST High Voltage Tools"],
        "Voltage Testers": ["IST Digital Voltage Meter"],
      },
    },
  },
];

const Distributors = () => {
  const { t } = useTranslation();
  const [selectedDistributor, setSelectedDistributor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleDistributorClick = (distributor) => {
    setSelectedDistributor(distributor);
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSelectedProducts([]);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setSelectedProducts([]);
  };

  const handleSubcategoryClick = (subcategory, products) => {
    setSelectedSubcategory(subcategory);
    setSelectedProducts(products);
  };

  return (
    <section id="distributors" className="distributors-section">
      <h2>{t("distributors.title")}</h2>
      <div className="distributors-grid">
        {distributorsData.map((distributor, index) => (
          <div
            key={index}
            className={`distributor-item ${
              selectedDistributor === distributor ? "active" : ""
            }`}
            onClick={() => handleDistributorClick(distributor)}
          >
            <img src={distributor.logo} alt={distributor.name} />
            <p>{distributor.name}</p>
          </div>
        ))}
      </div>

      {selectedDistributor && (
       <div className="categories-grid">
       {Object.keys(selectedDistributor.categories).map((category, idx) => (
         <div
           key={idx}
           className={`category-item ${
             selectedCategory === category ? "active" : ""
           }`}
           onClick={() => handleCategoryClick(category)}
         >
           <strong>{t(`distributors.categories.${category}`, category)}</strong>
         </div>
       ))}
     </div>     
      )}

      {selectedCategory && (
       <div className="subcategories-grid">
       {Object.entries(selectedDistributor.categories[selectedCategory]).map(
         ([subcategory, products], idx) => (
           <div
             key={idx}
             className={`subcategory-item ${
               selectedSubcategory === subcategory ? "active" : ""
             }`}
             onClick={() => handleSubcategoryClick(subcategory, products)}
           >
             <em>{t(`distributors.subcategories.${subcategory}`, subcategory)}</em>
           </div>
         )
       )}
     </div>
     
      )}

      {selectedProducts.length > 0 && (
        <div className="products-container">
          <h3>{t("distributors.productsIn")} {selectedSubcategory}</h3>
          <ul>
            {selectedProducts.map((product, idx) => (
              <li key={idx}>{product}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Distributors;
