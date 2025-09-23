// src/pages/Manufacturers/Manufacturers.jsx

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import manufacturersData from "../../data/manufacturersData";
import productsData from "../../data/productsData";
import "./Manufacturers.css";

const Manufacturers = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Steps
  const [step, setStep] = useState("manufacturer"); 
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);

  // On mount, check if there's a ?manufacturer= query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const manuParam = params.get("manufacturer");
    if (manuParam) {
      setSelectedManufacturer(manuParam);
      setStep("category");
    }
  }, [location.search]);

  // 1) Show all manufacturers
  const handleSelectManufacturer = (manu) => {
    setSelectedManufacturer(manu);
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
    setStep("category");
  };

  // 2) Show categories
  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
    setStep("subCategory");
  };

  // 3) Show subcategories
  const handleSelectSubCategory = (sub) => {
    setSelectedSubCategory(sub);
    setSelectedSubSubCategory(null);
    setStep("subSubCategory");
  };

  // 4) Show subSubCategories or final products
  const handleSelectSubSubCategory = (subsub) => {
    setSelectedSubSubCategory(subsub);
    setStep("products");
  };

  // *** BACK BUTTONS ***
  const goBackToManufacturers = () => {
    setStep("manufacturer");
    setSelectedManufacturer(null);
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
  };
  const goBackToCategories = () => {
    setStep("category");
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
  };
  const goBackToSubCategories = () => {
    setStep("subCategory");
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
  };
  const goBackToSubSubCategories = () => {
    setStep("subSubCategory");
    setSelectedSubSubCategory(null);
  };

  // *** Build arrays from productsData ***

  // All products for the selected manufacturer
  const productsOfManufacturer = productsData.filter(
    (p) => p.distributor === selectedManufacturer
  );

  // Extract unique categories from these products
  const categories = [
    ...new Set(productsOfManufacturer.map((p) => p.category)),
  ].filter(Boolean); // remove undefined

  // If a category is chosen, gather all subCategories for that category
  let subCategories = [];
  if (selectedCategory) {
    const filteredForCategory = productsOfManufacturer.filter(
      (p) => p.category === selectedCategory
    );
    subCategories = [
      ...new Set(filteredForCategory.map((p) => p.subCategory)),
    ].filter(Boolean);
  }

  // Final product list
  let finalProducts = [];
  if (selectedSubSubCategory) {
    // If user has chosen subSubCategory, filter by all 3
    finalProducts = productsOfManufacturer.filter(
      (p) =>
        p.category === selectedCategory &&
        p.subCategory === selectedSubCategory &&
        p.subSubCategory === selectedSubSubCategory
    );
  } else if (step === "subSubCategory") {
    // If we are on subSubCategory step but there's no subSub to pick, we skip
    // But you might want to show the products at this stage if there's no subSub?
    finalProducts = productsOfManufacturer.filter(
      (p) =>
        p.category === selectedCategory && p.subCategory === selectedSubCategory
    );
  } else if (step === "products") {
    // Possibly we jumped straight from subCategory to products
    // if subSubCategories was empty
    if (selectedSubCategory) {
      finalProducts = productsOfManufacturer.filter(
        (p) =>
          p.category === selectedCategory && p.subCategory === selectedSubCategory
      );
    } else {
      // If no subCategory at all, we might just filter by category
      finalProducts = productsOfManufacturer.filter(
        (p) => p.category === selectedCategory
      );
    }
  }

  // Get the manufacturer object for logo display
  const selectedManuObj = manufacturersData.find(
    (m) => m.name === selectedManufacturer
  );
  const fallbackLogo = "/images/manufacturer_placeholder.png";

  return (
    <div className="manufacturersContainer">
      {/* STEP 1: Manufacturer list */}
      {step === "manufacturer" && (
        <>
          <h2 className="sectionTitle">
            {t("manufacturers.seoTitle", t("manufacturers.title", "Our Trusted Manufacturers"))}
          </h2>
          <p className="sectionSubtitle">
            {t(
              "manufacturers.description",
              "Select a manufacturer to view product categories."
            )}
          </p>
          <div className="manufacturersGrid">
            {manufacturersData.map((manu) => (
              <div
                key={manu.name}
                className="manufacturerCard"
                onClick={() => handleSelectManufacturer(manu.name)}
              >
                <img
                  src={manu.logo}
                  alt={manu.name}
                  className="manufacturerLogo"
                  onError={(e) => {
                    e.target.src = fallbackLogo;
                  }}
                />
                <h3 className="manufacturerName">{manu.name}</h3>
                {manu.brief && (
                  <p className="manufacturerBrief">{manu.brief}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* STEP 2: Category list for chosen manufacturer */}
      {step === "category" && selectedManufacturer && (
        <>
          <button className="backButton" onClick={goBackToManufacturers}>
            {t("Back to Manufacturers")}
          </button>
          <div className="manufacturerHeader">
            {selectedManuObj && (
              <img
                src={selectedManuObj.logo}
                alt={selectedManuObj.name}
                className="manufacturerLogoSmall"
                onError={(e) => {
                  e.target.src = fallbackLogo;
                }}
              />
            )}
            <h2 className="sectionTitle">{selectedManufacturer}</h2>
          </div>
          <p className="sectionSubtitle">{t("Select a category")}</p>
          {categories.length > 0 ? (
            <div className="manufacturersGrid">
              {categories.map((catName) => (
                <div
                  key={catName}
                  className="manufacturerCard"
                  onClick={() => handleSelectCategory(catName)}
                >
                  <h3 className="categoryTitle">{catName}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p className="noCategories">
              {t("manufacturers.noCategories", "No categories found.")}
            </p>
          )}
        </>
      )}

      {/* STEP 3: SubCategory list */}
      {step === "subCategory" && selectedCategory && (
        <>
          <button className="backButton" onClick={goBackToCategories}>
            {t("Back to Categories")}
          </button>
          <div className="manufacturerHeader">
            {selectedManuObj && (
              <img
                src={selectedManuObj.logo}
                alt={selectedManuObj.name}
                className="manufacturerLogoSmall"
                onError={(e) => {
                  e.target.src = fallbackLogo;
                }}
              />
            )}
            <h2 className="sectionTitle">{selectedCategory}</h2>
          </div>
          <p className="sectionSubtitle">{t("Select a sub-category")}</p>
          {subCategories.length > 0 ? (
            <div className="manufacturersGrid">
              {subCategories.map((subCat) => (
                <div
                  key={subCat}
                  className="manufacturerCard"
                  onClick={() => handleSelectSubCategory(subCat)}
                >
                  <h3 className="categoryTitle">{subCat}</h3>
                </div>
              ))}
            </div>
          ) : (
            // If no subcategories, we might want to jump straight to showing products
            // or show a message
            <>
              <p className="noCategories">
                {t("manufacturers.noCategories", "No sub-categories found.")}
              </p>
              {/* Alternatively, show products directly: */}
              <div className="productGrid">
                {productsOfManufacturer
                  .filter((p) => p.category === selectedCategory)
                  .map((product) => (
                    <div key={product.id} className="productCard">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="productImage"
                        onError={(e) => {
                          e.target.src = fallbackLogo;
                        }}
                      />
                      <div className="productInfo">
                        <h3 className="productName">{product.name}</h3>
                        <p className="productMeta">
                          <strong>
                            {t("products.manufacturer", "Manufacturer")}:
                          </strong>{" "}
                          {product.distributor}
                        </p>
                        <p className="productMeta">
                          <strong>
                            {t("products.category", "Category")}:
                          </strong>{" "}
                          {product.category}
                        </p>
                        <div className="productActions">
                          <a
                            href={`https://wa.me/962795428029?text=I'm%20interested%20in%20${encodeURIComponent(
                              product.name
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="orderButton"
                          >
                            {t("products.orderNow")}
                          </a>
                          <Link
                            to={`/product/${product.id}`}
                            className="viewDetailsButton"
                          >
                            {t("View Details")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </>
      )}

      {/* STEP 4: SubSubCategory list */}
      {step === "subSubCategory" && selectedSubCategory && (
        <>
          <button className="backButton" onClick={goBackToSubCategories}>
            {t("Back to Sub-Categories")}
          </button>
          <div className="manufacturerHeader">
            {selectedManuObj && (
              <img
                src={selectedManuObj.logo}
                alt={selectedManuObj.name}
                className="manufacturerLogoSmall"
                onError={(e) => {
                  e.target.src = fallbackLogo;
                }}
              />
            )}
            <h2 className="sectionTitle">
              {selectedCategory} - {selectedSubCategory}
            </h2>
          </div>
          <p className="sectionSubtitle">{t("Select a sub-subcategory")}</p>

          {/* gather subSubCategories from the data */}
          {(() => {
            const filtered = productsOfManufacturer.filter(
              (p) =>
                p.category === selectedCategory &&
                p.subCategory === selectedSubCategory
            );
            const subSubs = [
              ...new Set(filtered.map((p) => p.subSubCategory)),
            ].filter(Boolean);

            if (subSubs.length === 0) {
              // no sub-subcategories, show final products
              return (
                <>
                  <p className="noCategories">
                    {t("manufacturers.noCategories", "No sub-subcategories found.")}
                  </p>
                  <div className="productGrid">
                    {filtered.map((product) => (
                      <div key={product.id} className="productCard">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="productImage"
                          onError={(e) => {
                            e.target.src = fallbackLogo;
                          }}
                        />
                        <div className="productInfo">
                          <h3 className="productName">{product.name}</h3>
                          <p className="productMeta">
                            <strong>
                              {t("products.manufacturer", "Manufacturer")}:
                            </strong>{" "}
                            {product.distributor}
                          </p>
                          <p className="productMeta">
                            <strong>
                              {t("products.category", "Category")}:
                            </strong>{" "}
                            {product.category}
                          </p>
                          <div className="productActions">
                            <a
                              href={`https://wa.me/962795428029?text=I'm%20interested%20in%20${encodeURIComponent(
                                product.name
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="orderButton"
                            >
                              {t("products.orderNow")}
                            </a>
                            <Link
                              to={`/product/${product.id}`}
                              className="viewDetailsButton"
                            >
                              {t("View Details")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              );
            } else {
              // we have subSubCategories
              return (
                <div className="manufacturersGrid">
                  {subSubs.map((subSub) => (
                    <div
                      key={subSub}
                      className="manufacturerCard"
                      onClick={() => handleSelectSubSubCategory(subSub)}
                    >
                      <h3 className="categoryTitle">{subSub}</h3>
                    </div>
                  ))}
                </div>
              );
            }
          })()}
        </>
      )}

      {/* STEP 5: Final Products for subSubCategory */}
      {step === "products" && selectedSubSubCategory && (
        <>
          <button className="backButton" onClick={goBackToSubSubCategories}>
            {t("Back to Sub-SubCategories")}
          </button>
          <div className="manufacturerHeader">
            {selectedManuObj && (
              <img
                src={selectedManuObj.logo}
                alt={selectedManuObj.name}
                className="manufacturerLogoSmall"
                onError={(e) => {
                  e.target.src = fallbackLogo;
                }}
              />
            )}
            <h2 className="sectionTitle">
              {selectedCategory} - {selectedSubCategory} - {selectedSubSubCategory}
            </h2>
          </div>
          <p className="sectionSubtitle">{t("Here are the products")}</p>

          <div className="productGrid">
            {finalProducts.length > 0 ? (
              finalProducts.map((product) => (
                <div key={product.id} className="productCard">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="productImage"
                    onError={(e) => {
                      e.target.src = fallbackLogo;
                    }}
                  />
                  <div className="productInfo">
                    <h3 className="productName">{product.name}</h3>
                    <p className="productMeta">
                      <strong>{t("products.manufacturer", "Manufacturer")}:</strong>{" "}
                      {product.distributor}
                    </p>
                    <p className="productMeta">
                      <strong>{t("products.category", "Category")}:</strong>{" "}
                      {product.category}
                    </p>
                    <div className="productActions">
                      <a
                        href={`https://wa.me/962795428029?text=I'm%20interested%20in%20${encodeURIComponent(
                          product.name
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="orderButton"
                      >
                        {t("products.orderNow")}
                      </a>
                      <Link to={`/product/${product.id}`} className="viewDetailsButton">
                        {t("View Details")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="noCategories">
                {t("No products found", "No products found")}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Manufacturers;
