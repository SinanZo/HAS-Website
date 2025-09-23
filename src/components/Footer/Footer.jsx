import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-info">
          <h3>{t("footer.company")}</h3>
          <address>
            <p>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>{" "}
              {t("footer.address")}
            </p>
            <p>
              <i className="fas fa-phone-alt" aria-hidden="true"></i>{" "}
              <a href="tel:+96264645651">+962-6-4645651</a> |{" "}
              <a href="tel:+96264645652">+962-6-4645652</a>
            </p>
            <p>
              <i className="fas fa-mobile-alt" aria-hidden="true"></i>{" "}
              <a href="tel:+962795428029">0795428029</a>
            </p>
            <p>
              <i className="fas fa-envelope" aria-hidden="true"></i>{" "}
              <a href="mailto:Haspco@habusham.com">Haspco@habusham.com</a>
            </p>
          </address>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>{t("footer.quickLinks")}</h3>
          <ul>
            <li>
              <Link to="/about">{t("footer.aboutUs")}</Link>
            </li>
            <li>
              <Link to="/products">{t("footer.products")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("footer.contactUs")}</Link>
            </li>
            <li>
              <Link to="/careers">{t("footer.careers")}</Link>
            </li>
            <li>
              <Link to="/privacy-policy">{t("footer.privacyPolicy")}</Link>
            </li>
            <li>
              <Link to="/terms-of-use">{t("footer.terms")}</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>{t("footer.followUs")}</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <p className="footer-copy">{t("footer.copyright")}</p>
    </footer>
  );
};

export default Footer;
