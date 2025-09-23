import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaChevronRight,
  FaHardHat,
  FaHeadSideMask,
  FaShoePrints,
  FaPrint,
  FaTshirt,
  FaShower,
  FaBacon,
  FaStackOverflow,
  FaBolt,
  FaFilter,
} from "react-icons/fa";
import { GiGloves } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import productsData from "../../data/productsData";
import "./CategoryBar.css";

const categoryTranslationKey = {
  "Head Protection": "headProtection",
  "Safety Gloves": "safetyGloves",
  "Safety Boots": "safetyBoots",
  "Respirators": "respirators",
  "Labels & Printers": "labelsPrinters",
  "Lab Supplies": "labSupplies",
  "Cartridges & Filters": "cartridgesFilters",
  "Fire Safety": "fireSafety",
  "Welding Protection": "weldingProtection",
  "KOSMODISK": "kosmodisk",
  "Working Wear": "workingWear",
  "Electric & ARC Flash Kit": "electricArcFlash",
};

const getCategoryIcon = (cat) => {
  const lower = cat.toLowerCase().trim();
  switch (lower) {
    case "head protection": return <FaHardHat className="level-icon" />;
    case "respirators": return <FaHeadSideMask className="level-icon" />;
    case "electric & arc flash kit": return <FaBolt className="level-icon" />;
    case "safety gloves": return <GiGloves className="level-icon" />;
    case "safety boots": return <FaShoePrints className="level-icon" />;
    case "labels & printers": return <FaPrint className="level-icon" />;
    case "lab supplies": return <MdScience className="level-icon" />;
    case "cartridges & filters": return <FaFilter className="level-icon" />;
    case "safety shower & eyewash": return <FaShower className="level-icon" />;
    case "welding protection": return <FaStackOverflow className="level-icon" />;
    case "kosmodisk": return <FaBacon className="level-icon" />;
    case "working wear": return <FaTshirt className="level-icon" />;
    default: return <FaPrint className="level-icon" />;
  }
};

const CategoryBar = () => {
  const { t } = useTranslation();

  const categories = {};
  productsData.forEach((p) => {
    const { category, subCategory, subSubCategory, id, name } = p;
    if (!categories[category]) categories[category] = {};
    if (subCategory) {
      if (!categories[category][subCategory]) categories[category][subCategory] = {};
      if (subSubCategory) {
        if (!categories[category][subCategory][subSubCategory])
          categories[category][subCategory][subSubCategory] = [];
        categories[category][subCategory][subSubCategory].push({ id, name });
      } else {
        if (!categories[category][subCategory]._products)
          categories[category][subCategory]._products = [];
        categories[category][subCategory]._products.push({ id, name });
      }
    } else {
      if (!categories[category]._products) categories[category]._products = [];
      categories[category]._products.push({ id, name });
    }
  });

  return (
    <nav className="category-bar">
      <ul className="cat-level-1">
        {Object.keys(categories).map((cat) => {
          const mainProducts = categories[cat]._products || [];
          const subKeys = Object.keys(categories[cat]).filter((key) => key !== "_products");
          const hasSub = subKeys.length > 0;
          const translationKey = categoryTranslationKey[cat] || cat;

          return (
            <li key={cat} className="cat-item">
              <Link to={`/products?category=${encodeURIComponent(cat)}`} className="cat-link">
                <div className="cat-main">
                  {getCategoryIcon(cat)}
                  <span className="cat-title">
                    {t(`categoryBar.${translationKey}.label`, { defaultValue: cat })}
                  </span>
                </div>
                {hasSub && <FaChevronRight className="cat-chevron" />}
              </Link>

              {hasSub && (
                <ul className="cat-level-2">
                  {subKeys.map((sub) => {
                    const subObj = categories[cat][sub];
                    const subProducts = subObj._products || [];
                    const subSubKeys = Object.keys(subObj).filter((key) => key !== "_products");
                    const hasSubSub = subSubKeys.length > 0;

                    return (
                      <li key={sub} className="sub-item">
                        <Link
                          to={`/products?category=${encodeURIComponent(cat)}&subCategory=${encodeURIComponent(sub)}`}
                          className="sub-link"
                        >
                          <span className="bullet">&#9679;</span>
                          {t(`categoryBar.${translationKey}.sub.${sub}`, { defaultValue: sub })}
                          {hasSubSub && <FaChevronRight className="sub-chevron" />}
                        </Link>

                        {hasSubSub ? (
                          <ul className="cat-level-3">
                            {subSubKeys.map((subSub) => (
                              <li key={subSub} className="subsub-item">
                                <Link
                                  to={`/products?category=${encodeURIComponent(cat)}&subCategory=${encodeURIComponent(sub)}&subSubCategory=${encodeURIComponent(subSub)}`}
                                  className="subsub-link"
                                >
                                  <span className="bullet">&#9679;</span>
                                  {t(`categoryBar.${translationKey}.subSub.${subSub}`, { defaultValue: subSub })}
                                  <FaChevronRight className="subsub-chevron" />
                                </Link>

                                <ul className="cat-level-4">
                                  {subObj[subSub].map((prod) => (
                                    <li key={prod.id} className="product-item">
                                      <Link
                                        to={`/product/${prod.id}?category=${encodeURIComponent(cat)}&subCategory=${encodeURIComponent(sub)}&subSubCategory=${encodeURIComponent(subSub)}`}
                                        className="product-link"
                                      >
                                        <span className="bullet">&#9679;</span> {prod.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul className="cat-level-3">
                            {subProducts.map((prod) => (
                              <li key={prod.id} className="product-item">
                                <Link
                                  to={`/product/${prod.id}?category=${encodeURIComponent(cat)}&subCategory=${encodeURIComponent(sub)}`}
                                  className="product-link"
                                >
                                  <span className="bullet">&#9679;</span> {prod.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}

              {!hasSub && mainProducts.length > 0 && (
                <ul className="cat-level-2">
                  {mainProducts.map((prod) => (
                    <li key={prod.id} className="product-item">
                      <Link
                        to={`/product/${prod.id}?category=${encodeURIComponent(cat)}`}
                        className="product-link"
                      >
                        <span className="bullet">&#9679;</span> {prod.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoryBar;
