import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHardHat,
  faGlasses,
  faMask,
  faHeadSideMask,
  faFilter,
  faFireExtinguisher,
  faWrench,
  faFlask,
  faThermometerHalf,
  faTools,
  faHeartbeat,
  faHeadphones,
  faShoePrints,
  faHandPaper,
  faGasPump,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

import heroImages from "../../data/heroImages"; // array of image URLs
import "./Hero.css";

const categoriesData = [
  { name: "hero.safetyHelmets", icon: faHardHat, description: "hero.safetyHelmetsDesc" },
  { name: "hero.disposableMasks", icon: faMask, description: "hero.disposableMasksDesc" },
  { name: "hero.earMuffs", icon: faHeadphones, description: "hero.earMuffsDesc" },
  { name: "hero.safetySpectacles", icon: faGlasses, description: "hero.safetySpectaclesDesc" },
  { name: "hero.respirators", icon: faHeadSideMask, description: "hero.respiratorsDesc" },
  { name: "hero.cartridgesFilters", icon: faFilter, description: "hero.cartridgesFiltersDesc" },
  { name: "hero.labInstruments", icon: faFlask, description: "hero.labInstrumentsDesc" },
  { name: "hero.incubators", icon: faThermometerHalf, description: "hero.incubatorsDesc" },
  { name: "hero.testKits", icon: faTools, description: "hero.testKitsDesc" },
  { name: "hero.fireSafety", icon: faFireExtinguisher, description: "hero.fireSafetyDesc" },
  { name: "hero.weldingProtection", icon: faWrench, description: "hero.weldingProtectionDesc" },
  { name: "hero.therapeuticSupport", icon: faHeartbeat, description: "hero.therapeuticSupportDesc" },
  { name: "hero.safetyGloves", icon: faHandPaper, description: "hero.safetyGlovesDesc" },
  { name: "hero.safetyBoots", icon: faShoePrints, description: "hero.safetyBootsDesc" },
  { name: "hero.workingWear", icon: faTshirt, description: "hero.workingWearDesc" },
  { name: "hero.gasDetectors", icon: faGasPump, description: "hero.gasDetectorsDesc" },
];

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      heroImages.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      setCurrentCategoryIndex((prev) => (prev + 1) % categoriesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentCategory = categoriesData[currentCategoryIndex];

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImages[currentImageIndex]})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{t("hero.title")}</h1>
          <h2 className="hero-subtitle">{t("hero.subtitle")}</h2>
          <div className="hero-category">
            <FontAwesomeIcon icon={currentCategory?.icon} className="animated-icon" />
            <span>{t(currentCategory?.name)}</span>
          </div>
          <p className="hero-description">
            {t(currentCategory?.description)}
          </p>
          <div className="hero-buttons">
            <button className="browse-button" onClick={() => navigate("/products")}>
              {t("hero.browseProducts")}
            </button>
            <button
              className="quote-button"
              onClick={() => window.open("https://wa.me/00962795428029", "_blank")}
            >
              {t("hero.getQuote")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
