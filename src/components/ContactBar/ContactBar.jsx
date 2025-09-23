import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFax,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./ContactBar.css"; // Correct CSS for ContactBar

const ContactBar = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-bar">
      <div className="marquee">
        <div className="marquee-content">
          <div className="contact-item">
            <FaPhone /> {t("contactBar.tel")}: <a href="tel:+96264645651">+962-6-4645651/2</a>
          </div>
          <div className="contact-item">
            <FaMobileAlt /> {t("contactBar.mob")}: <a href="tel:+962795428029">0795428029</a>
          </div>
          <div className="contact-item">
            <FaWhatsapp /> {t("contactBar.whatsapp")}: <a href="https://wa.me/962795428029">0795428029</a>
          </div>
          <div className="contact-item">
            <FaEnvelope /> {t("contactBar.email")}: <a href="mailto:haspco@habusham.com">haspco@habusham.com</a>
            {" | "}
            <a href="mailto:enghaspco@outlook.com">enghaspco@outlook.com</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt /> {t("contactBar.address")}: Jabal Amman - Third Circle - Mithqal AL Fayez St, Building #25
          </div>
          <div className="contact-item">
            <FaFax /> {t("contactBar.fax")}: +962-6-4645653 | P.O. Box 831164, Amman 11183
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
