import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Meta from "../components/Meta/Meta";
import "../styles/Contact.css";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: "",
    honeypot: "", // Spam protection
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validate form data
  const validateForm = useCallback(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s-+()]+$/;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.errors.nameRequired", "Name is required");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.emailRequired", "Email is required");
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t("contact.errors.emailInvalid", "Please enter a valid email");
    }

    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = t("contact.errors.phoneInvalid", "Please enter a valid phone number");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.errors.subjectRequired", "Subject is required");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.errors.messageRequired", "Message is required");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.errors.messageTooShort", "Message must be at least 10 characters");
    }

    // Honeypot - if filled, it's a bot
    if (formData.honeypot) {
      newErrors.honeypot = t("contact.errors.spam", "Spam detected");
      return newErrors;
    }

    return newErrors;
  }, [formData, t]);

  // Handle input change
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  // Handle form submission
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Validate form
      const newErrors = validateForm();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setSubmitStatus({
          type: "error",
          message: t("contact.errors.formInvalid", "Please fix the errors above"),
        });
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Prepare data to send
        const dataToSend = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          company: formData.company.trim(),
          language: i18n.language,
          timestamp: new Date().toISOString(),
        };

        // Send to backend
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Success
        setSubmitStatus({
          type: "success",
          message: t(
            "contact.success",
            "Thank you! Your message has been sent. We'll get back to you soon."
          ),
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          company: "",
          honeypot: "",
        });

        // Track event
        if (window.gtag) {
          window.gtag("event", "contact_form_submit", {
            language: i18n.language,
          });
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitStatus({
          type: "error",
          message: t(
            "contact.errors.submitFailed",
            "Failed to send message. Please try again."
          ),
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, i18n.language, t]
  );

  // WhatsApp CTA handler
  const handleWhatsApp = useCallback(() => {
    const message = t(
      "contact.whatsappMessage",
      "Hello, I'm interested in your safety products. Can you provide more information?"
    );
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/962799123456?text=${encoded}`;
    window.open(whatsappUrl, "_blank");

    // Track event
    if (window.gtag) {
      window.gtag("event", "whatsapp_cta_click", {
        language: i18n.language,
      });
    }
  }, [i18n.language, t]);

  return (
    <>
      <Meta
        pageType="contact"
        title={t("contact.metaTitle", "Contact Us - Hilmi Abu Sham & Partners")}
        description={t(
          "contact.metaDescription",
          "Get in touch with us. Send us a message and we'll respond as soon as possible."
        )}
      />

      <main className="contact-page" role="main">
        <div className="contact-container">
          <div className="contact-header">
            <h1>{t("contact.title", "Contact Us")}</h1>
            <p className="contact-subtitle">
              {t(
                "contact.subtitle",
                "Have questions? Get in touch with our team. We're here to help!"
              )}
            </p>
          </div>

          <div className="contact-content">
            {/* Contact Form */}
            <section className="contact-form-section">
              <h2>{t("contact.formTitle", "Send us a Message")}</h2>

              {submitStatus && (
                <div
                  className={`alert alert-${submitStatus.type}`}
                  role="alert"
                  aria-live="polite"
                >
                  <p>{submitStatus.message}</p>
                  {submitStatus.type === "success" && (
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="alert-close"
                      aria-label={t("contact.closeAlert", "Close")}
                    >
                      ×
                    </button>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="required">
                    {t("contact.fields.name", "Name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.fields.namePlaceholder", "Your name")}
                    className={`form-input ${errors.name ? "input-error" : ""}`}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.name && (
                    <span className="field-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="required">
                    {t("contact.fields.email", "Email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.fields.emailPlaceholder", "your.email@example.com")}
                    className={`form-input ${errors.email ? "input-error" : ""}`}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.email && (
                    <span className="field-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label htmlFor="phone">
                    {t("contact.fields.phone", "Phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.fields.phonePlaceholder", "+962 (0) 79 1234567")}
                    className={`form-input ${errors.phone ? "input-error" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <span className="field-error" role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Company Field */}
                <div className="form-group">
                  <label htmlFor="company">
                    {t("contact.fields.company", "Company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("contact.fields.companyPlaceholder", "Your company name (optional)")}
                    className="form-input"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject" className="required">
                    {t("contact.fields.subject", "Subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("contact.fields.subjectPlaceholder", "What is this about?")}
                    className={`form-input ${errors.subject ? "input-error" : ""}`}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.subject && (
                    <span className="field-error" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-group form-group-full">
                  <label htmlFor="message" className="required">
                    {t("contact.fields.message", "Message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.fields.messagePlaceholder", "Your message...")}
                    rows="6"
                    className={`form-input ${errors.message ? "input-error" : ""}`}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.message && (
                    <span className="field-error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="form-group form-group-full">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting
                      ? t("contact.submitting", "Sending...")
                      : t("contact.sendMessage", "Send Message")}
                  </button>
                </div>
              </form>
            </section>

            {/* Contact Info & WhatsApp CTA */}
            <aside className="contact-info-section">
              <h2>{t("contact.infoTitle", "Get in Touch")}</h2>

              <div className="contact-info">
                <div className="info-item">
                  <h3>{t("contact.info.phone", "Phone")}</h3>
                  <p>
                    <a href="tel:+962799123456">+962 (0) 79 9123456</a>
                  </p>
                </div>

                <div className="info-item">
                  <h3>{t("contact.info.email", "Email")}</h3>
                  <p>
                    <a href="mailto:info@hilmiabusham.com">info@hilmiabusham.com</a>
                  </p>
                </div>

                <div className="info-item">
                  <h3>{t("contact.info.address", "Address")}</h3>
                  <p>
                    Hilmi Abu Sham & Partners Co.
                    <br />
                    Amman, Jordan
                  </p>
                </div>

                <div className="info-item">
                  <h3>{t("contact.info.hours", "Business Hours")}</h3>
                  <p>
                    {t("contact.info.saturday", "Saturday - Thursday")}: 8:00 AM - 5:00 PM
                    <br />
                    {t("contact.info.friday", "Friday")}: {t("contact.info.closed", "Closed")}
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsApp}
                className="btn btn-accent btn-lg btn-whatsapp"
                aria-label={t("contact.whatsappAriaLabel", "Chat on WhatsApp")}
              >
                <span className="whatsapp-icon">💬</span>
                {t("contact.whatsapp", "Chat on WhatsApp")}
              </button>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
