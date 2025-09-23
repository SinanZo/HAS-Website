import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./AboutSummary.css";

const AboutSummary = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/about");
  };

  return (
    <section className="about-summary fade-in-up">
      <div className="glass-container">
        <h2 className="summary-title">{t("aboutSummary.companyBriefTitle")}</h2>
        <p className="summary-text">
          {t("aboutSummary.companyBriefDesc")}
        </p>
        <button className="read-more-button" onClick={handleReadMore}>
          {t("aboutSummary.readMore")}
        </button>
      </div>
    </section>
  );
};

export default AboutSummary;
