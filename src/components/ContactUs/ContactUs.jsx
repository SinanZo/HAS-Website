// src/components/ContactUs/ContactUs.jsx

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4"; // Make sure to install react-ga4 with: npm install react-ga4
import "./ContactUs.css";

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send GA event before resetting form
    ReactGA.event({
      category: "Contact",
      action: "Submit Contact Form",
      label: formData.email,
    });

    alert(t("contact.successMessage", "Message sent successfully!"));
    setFormData({ name: "", email: "", message: "" });
  };

  const containerStyle = { marginTop: "120px" };

  return (
    <section className="contact-section" style={containerStyle}>
      <div className="contact-container glass-container">
  <h2 className="contact-title">{t("contact.title")}</h2>
        <p className="section-subtitle">
          {t("contact.description", "Feel free to contact us for any inquiries or support.")}
        </p>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info glass-box">
            <h3 className="info-title">
              <i className="fas fa-building"></i>{" "}
              {t("contact.companyName", "Hilmi Abu Sham & Partner Co.")}
            </h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>{" "}
              {t("contact.address", "Address")}: Jabal Amman - Third Circle - Mithqal AL Fayez Street, Building #25, Amman, Jordan.
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> Tel:{" "}
              <a href="tel:+96264645651">+962-6-4645651/2</a> | {t("contact.mobile", "Mobile")}:{" "}
              <a href="tel:+962795428029">+962 795428029</a>
            </p>
            <p>
              <i className="fas fa-fax"></i> Fax: +962-6-4645653 | P.O. Box 831164, Amman 11183
            </p>
            <p>
              <i className="fas fa-envelope"></i> {t("contact.email", "Email")}:{" "}
              <a href="mailto:haspco@habusham.com">haspco@habusham.com</a> |{" "}
              <a href="mailto:enghaspco@outlook.com">enghaspco@outlook.com</a>
            </p>
            <p>
              <i className="fas fa-globe"></i> {t("contact.website", "Website")}:{" "}
              <a href="https://www.habusham.com" target="_blank" rel="noopener noreferrer">
                www.habusham.com
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="contact-form glass-box">
            <h3 className="form-title">
              <i className="fas fa-paper-plane"></i> {t("contact.sendMessage", "Send Us a Message")}
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={t("contact.namePlaceholder", "Your Name")}
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.emailPlaceholder", "Your Email")}
                required
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder={t("contact.messagePlaceholder", "Your Message")}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">{t("contact.sendButton", "Send Message")}</button>
            </form>
          </div>

          {/* Google Map */}
          <div className="contact-map glass-box">
            <h3 className="map-title">
              <i className="fas fa-map"></i> {t("contact.visitUs", "Visit Us")}
            </h3>
            <iframe
              title="Hilmi Abu Sham Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.304847537365!2d35.90260027611151!3d31.952625525658174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1efbf57e0cb%3A0x8ee6882239e27c43!2sHilmi%20Abu%20Sham%20%26%20Partners%20Co!5e0!3m2!1sen!2sjo!4v1737814328725!5m2!1sen!2sjo"
              allowFullScreen=""
              loading="lazy"
              className="google-map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
