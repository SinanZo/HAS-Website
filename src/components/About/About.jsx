// src/components/About/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import aboutHero from "../../assets/about-hero.jpg";

// React Icons
import { FaCheckCircle, FaIndustry, FaShieldAlt } from "react-icons/fa";
import { GiMining, GiChemicalDrop } from "react-icons/gi";

import "./About.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="hero-content">
          <h1>
            <FaShieldAlt /> {t("aboutPage.pageTitle")}
          </h1>
          <p>{t("aboutPage.pageIntro")}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-main container">
        <div className="subsection-grid">
          {/* Background */}
          <div className="subsection-card">
            <h2>
              <FaIndustry /> {t("aboutPage.backgroundTitle")}
            </h2>
            <p>{t("aboutPage.backgroundDesc")}</p>
          </div>

          {/* Product Offering */}
          <div className="subsection-card">
            <h2>
              <GiChemicalDrop /> {t("aboutPage.productOfferingTitle")}
            </h2>
            <p>{t("aboutPage.productOfferingDesc")}</p>
          </div>

          {/* Personal Safety */}
          <div className="subsection-card">
            <h2>
              <FaShieldAlt /> {t("aboutPage.personalSafetyTitle")}
            </h2>
            <p>{t("aboutPage.personalSafetyDesc")}</p>
            {/* Example bullet list with icons */}
            {/* Example bullet list with icons in About.jsx */}
<ul className="custom-bullet-list">
  <li>
    <FaCheckCircle className="list-icon" />
    {"High-quality PPE"}
  </li>
  <li>
    <FaCheckCircle className="list-icon" />
    {"Wide range of gloves and helmets"}
  </li>
</ul>

          </div>

          {/* Lab Equipment */}
          <div className="subsection-card">
            <h2>
              <GiMining /> {t("aboutPage.labEquipmentTitle")}
            </h2>
            <p>{t("aboutPage.labEquipmentDesc")}</p>
          </div>

          {/* Our Manufacturers */}
          <div className="subsection-card">
            <h2>{t("aboutPage.manufacturersTitle")}</h2>
            <p>{t("aboutPage.manufacturersDesc", "We cooperate with global brands.")}</p>
          </div>

          {/* Key Features */}
          <div className="subsection-card">
            <h2>{t("aboutPage.keyFeaturesTitle")}</h2>
            <p>{t("aboutPage.keyFeaturesDesc")}</p>
          </div>

          {/* Why Choose Us */}
          <div className="subsection-card">
            <h2>{t("aboutPage.whyChooseUsTitle")}</h2>
            <p>{t("aboutPage.whyChooseUsDesc")}</p>
          </div>

          {/* Contact Info */}
          <div className="subsection-card">
            <h2>{t("aboutPage.contactInfoTitle")}</h2>
            <p>{t("aboutPage.contactInfoDetails")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
