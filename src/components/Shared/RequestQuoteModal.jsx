import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './RequestQuoteModal.css';

const RequestQuoteModal = ({ open, onClose, product }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    quantity: 1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setSubmitMessage('Quote request sent successfully! We will contact you soon.');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          quantity: 1
        });
        setSubmitMessage('');
        onClose();
      }, 2000);
      
    } catch (error) {
      setSubmitMessage('Error sending quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{t('Request Quote')}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        
        {product && (
          <div className="product-info">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">{t('Name')} *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('Email')} *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">{t('Phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">{t('Company')}</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter your company name"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">{t('Quantity')} *</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              min="1"
              required
              placeholder="Enter quantity needed"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('Message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Additional information or requirements..."
            />
          </div>

          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
              {submitMessage}
            </div>
          )}

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              {t('Cancel')}
            </button>
            <button 
              type="submit" 
              className="btn-submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? t('Sending...') : t('Send Quote Request')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestQuoteModal;