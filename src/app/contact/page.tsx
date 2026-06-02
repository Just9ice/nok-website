"use client";

import { useState } from "react";
import styles from "../shared.module.css";
import contactStyles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: connect to an API endpoint
    alert("Thank you! We will be in touch shortly.");
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <header className={styles.heroHeader}>
        <div className={styles.badge}>Contact Us</div>
        <h1 className={styles.title}>Let&rsquo;s Start a Conversation</h1>
        <p className={styles.introText}>
          We&rsquo;d love to hear from you. Whether you&rsquo;re ready to get
          started, have questions, or want a demo — reach out and our team will
          respond promptly.
        </p>
      </header>

      {/* Contact Info Cards */}
      <div className={contactStyles.infoRow}>
        <div className={contactStyles.infoCard}>
          <div className={styles.cardIcon}>✉️</div>
          <h3 className={styles.cardTitle}>Email</h3>
          <p className={styles.cardText}>info@nokinc.com</p>
        </div>
        <div className={contactStyles.infoCard}>
          <div className={styles.cardIcon}>📞</div>
          <h3 className={styles.cardTitle}>Phone</h3>
          <p className={styles.cardText}>+1 (240) 753-8561</p>
        </div>
      </div>

      {/* Contact Form */}
      <section className={contactStyles.formSection}>
        <h2 className={styles.sectionTitle}>Send Us a Message</h2>
        <p className={contactStyles.formIntro}>
          Fill out our contact form to request a consultation or service call.
        </p>
        <form onSubmit={handleSubmit} className={contactStyles.form}>
          <div className={contactStyles.formRow}>
            <label className={contactStyles.label}>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className={contactStyles.input}
              />
            </label>
            <label className={contactStyles.label}>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={contactStyles.input}
              />
            </label>
          </div>
          <div className={contactStyles.formRow}>
            <label className={contactStyles.label}>
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="+1 (000) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className={contactStyles.input}
              />
            </label>
            <label className={contactStyles.label}>
              Product
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={contactStyles.input}
              >
                <option value="">Select a product</option>
                <option value="battery">Battery & Inverter Systems</option>
                <option value="solar">Solar Power Systems</option>
                <option value="tricycle">Electric Tricycles</option>
                <option value="software">Software Solutions</option>
                <option value="chargers">EV & LFP Chargers</option>
                <option value="lights">Solar & Security Lights</option>
                <option value="industrial">Industrial & Agricultural</option>
                <option value="cooling">Solar-Powered Cooling</option>
              </select>
            </label>
          </div>
          <label className={contactStyles.label}>
            Message
            <textarea
              name="message"
              placeholder="Tell us about your project or inquiry..."
              value={formData.message}
              onChange={handleChange}
              required
              className={contactStyles.textarea}
            />
          </label>
          <button type="submit" className={contactStyles.submitBtn}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
