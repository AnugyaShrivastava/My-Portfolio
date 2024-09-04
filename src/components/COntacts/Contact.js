import React, { useState } from 'react';
import './Contact.css';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, ] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apikey: '42a53204-92b6-4d40-95bf-d6e1b295f4a9',
          ...formData
        })
      });
      if (response.ok) {
        // Clear form fields on successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div id="contact-page" data-aos="fade-down-right">
    
      <div className="contact-form">
        <h2>Contact Me</h2>
        {formSubmitted ? (
          <p>Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={formErrors.name ? 'error' : ''}
              />
              {formErrors.name && <p className="error-message">{formErrors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={formErrors.email ? 'error' : ''}
              />
              {formErrors.email && <p className="error-message">{formErrors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={formErrors.message ? 'error' : ''}
              />
              {formErrors.message && <p className="error-message">{formErrors.message}</p>}
            </div>
            <button className="btnn" type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
