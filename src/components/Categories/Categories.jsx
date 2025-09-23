import React from "react";
import { useTranslation } from "react-i18next";
import categoriesData from "../../data/categoriesData";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1 className="sectionTitle">{t("categories.title")}</h1>
      <p className="sectionSubtitle">{t("categories.subtitle")}</p>
      <div className="categoriesGrid">
        {categoriesData.map((category, index) => (
          <div key={index} className="categoryCard">
            <i className={`${category.icon} categoryIcon`}></i>
            <h3>{t(`categories.${category.key}`)}</h3>
            {category.subcategories &&
              category.subcategories.map((sub, idx) => (
                <Link to={`/products/${sub.key}`} key={idx} className="subcategoryLink">
                  {t(`categories.${sub.key}`)}
                </Link>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
