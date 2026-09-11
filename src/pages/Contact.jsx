import "./Contact.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

import {
  Phone,
  Mail,
  MapPin,
  Factory,
  ChevronDown,
  AlertCircle,
} from "lucide-react";
import { contactFAQs } from "../data/faqData";

function getInitialRequirement(searchParams) {
  const productParam = searchParams.get("product");
  const partnerParam = searchParams.get("partner");
  const solutionParam = searchParams.get("solution");
  const categoryParam = searchParams.get("category");

  if (productParam) {
    return `Enquiry for: ${productParam}${partnerParam ? ` (${partnerParam.toUpperCase()})` : ""}`;
  }
  if (partnerParam) {
    return `Enquiry regarding ${partnerParam.toUpperCase()} products and industrial solutions.`;
  }
  if (solutionParam) {
    return `Enquiry regarding ${solutionParam.replace(/-/g, " ")} engineering solutions.`;
  }
  if (categoryParam) {
    return `Enquiry regarding ${categoryParam} products.`;
  }
  return "";
}

function Contact() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState(() => ({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: getInitialRequirement(searchParams),
  }));

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? -1 : index));
  };

  const validateField = (field, value) => {
    const val = (value || "").trim();
    switch (field) {
      case "name":
        if (!val) return "Please enter your full name.";
        if (val.length < 2) return "Name must be at least 2 characters.";
        if (!/^[a-zA-Z\s.'-]+$/.test(val)) return "Name should contain letters only.";
        return "";
      case "company":
        if (!val) return "Please enter your company name.";
        if (val.length < 2) return "Company name must be at least 2 characters.";
        return "";
      case "phone": {
        const digits = val.replace(/\D/g, "");
        if (!val) return "Please enter your phone number.";
        if (digits.length < 10) return "Please enter a valid 10-digit phone number.";
        if (digits.length > 15) return "Phone number cannot exceed 15 digits.";
        return "";
      }
      case "email": {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!val) return "Please enter your email address.";
        if (!emailRegex.test(val)) return "Please enter a valid email address (e.g. name@company.com).";
        return "";
      }
      case "requirement":
        if (!val) return "Please describe your requirement.";
        if (val.length < 10) return "Please provide more details (at least 10 characters).";
        return "";
      default:
        return "";
    }
  };

  const validateAll = () => {
    return {
      name: validateField("name", formData.name),
      company: validateField("company", formData.company),
      phone: validateField("phone", formData.phone),
      email: validateField("email", formData.email),
      requirement: validateField("requirement", formData.requirement),
    };
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (touched[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: validateField(id, value),
      }));
    }
  };

  // Dedicated phone handler to strictly block typing non-numeric characters (like "as")
  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    // Allow digits, spaces, plus, hyphens, and parentheses only
    const sanitized = raw.replace(/[^\d\s+\-()]/g, "");

    setFormData((prev) => ({
      ...prev,
      phone: sanitized,
    }));

    if (touched.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: validateField("phone", sanitized),
      }));
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [id]: true,
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: validateField(id, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields touched
    const allTouched = {
      name: true,
      company: true,
      phone: true,
      email: true,
      requirement: true,
    };
    setTouched(allTouched);

    const formErrors = validateAll();
    setErrors(formErrors);

    const hasError = Object.values(formErrors).some((err) => Boolean(err));
    if (hasError) {
      // Auto-focus the first invalid field
      const firstInvalidField = Object.keys(formErrors).find((k) => Boolean(formErrors[k]));
      if (firstInvalidField) {
        const el = document.getElementById(firstInvalidField);
        if (el) el.focus();
      }
      return;
    }

    setSubmitting(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
      const payload = {
        name: (formData.name || "").trim(),
        company: (formData.company || "").trim(),
        phone: (formData.phone || "").trim(),
        email: (formData.email || "").trim(),
        requirement: (formData.requirement || "").trim(),
      };

      const response = await fetch("/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to send enquiry"
        );
      }

      setSubmitted(true);
      setErrorMessage("");

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        requirement: "",
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error(error);

      setSubmitted(false);

      setErrorMessage(
        error.message ||
        "Unable to send your enquiry right now. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main
      className="contact-page"
      itemScope
      itemType="https://schema.org/ContactPage"
    >

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <p className="contact-eyebrow">
            CONTACT & BUSINESS ENQUIRY
          </p>

          <h1>
            Let’s Build Smarter Automation,
            <br />
            Stronger Panels & Reliable
            <br />
            Industrial Solutions Together.
          </h1>

          <p className="contact-hero-text">
            Partner with Nascon Technologies for innovative automation
            solutions, engineered panels and trusted products to power
            your success.
          </p>

        </div>

      </section>


      {/* =========================================================
          CONTACT MAIN SECTION
      ========================================================= */}

      <section className="contact-section">

        <div className="contact-grid">

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}

          <div className="contact-left-column">

            {/* CONTACT INFORMATION */}

            <div
              className="contact-information"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content="Nascon Technologies" />
              <meta itemProp="image" content="https://nascontechnologies.com/images/hero.webp" />
              <meta itemProp="priceRange" content="$$" />
              <meta itemProp="url" content="https://nascontechnologies.com/contact" />

              <p className="contact-label">
                GET IN TOUCH
              </p>

              <h2>
                Talk to Our Team
              </h2>

              <p className="contact-description">
                For enquiries, quotations, technical support or partnership
                opportunities, reach out to our team.
              </p>


              {/* CONTACT DETAILS */}

              <div className="contact-details">

                {/* MOBILE */}

                <div className="contact-detail">

                  <div className="contact-detail-icon">
                    <Phone
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <span>
                      Mobile / WhatsApp
                    </span>

                    <strong>
                      <a
                        href="tel:+919826288999"
                        itemProp="telephone"
                        className="contact-info-link"
                      >
                        +91 98262 88999
                      </a>
                    </strong>
                  </div>

                </div>


                {/* EMAIL */}

                <div className="contact-detail">

                  <div className="contact-detail-icon">
                    <Mail
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <span>
                      Email
                    </span>

                    <strong>
                      <a
                        href="mailto:Nishit@nascon.in"
                        itemProp="email"
                        className="contact-info-link"
                      >
                        Nishit@nascon.in
                      </a>
                    </strong>
                  </div>

                </div>


                {/* OFFICE ADDRESS */}

                <div
                  className="contact-detail"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >

                  <div className="contact-detail-icon">
                    <MapPin
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <span>
                      Registered Office
                    </span>

                    <strong>
                      G-11 Swadesh Bhawan, 2 Press Complex,
                      <br />
                      Indore, Madhya Pradesh 452018
                    </strong>

                    <meta itemProp="streetAddress" content="G-11 Swadesh Bhawan, 2 Press Complex" />
                    <meta itemProp="addressLocality" content="Indore" />
                    <meta itemProp="addressRegion" content="Madhya Pradesh" />
                    <meta itemProp="postalCode" content="452018" />
                    <meta itemProp="addressCountry" content="IN" />
                  </div>

                </div>


                {/* FACTORY ADDRESS */}

                <div
                  className="contact-detail"
                  itemProp="department"
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                >
                  <meta itemProp="name" content="Nascon Technologies Manufacturing Plant" />

                  <div className="contact-detail-icon">
                    <Factory
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <span>
                      Manufacturing Plant & FAT Testing
                    </span>

                    <strong>
                      41 Industrial Estate, Sector-II,
                      <br />
                      Pithampur, Dhar, Madhya Pradesh
                    </strong>

                    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <meta itemProp="streetAddress" content="41 Industrial Estate, Sector-II" />
                      <meta itemProp="addressLocality" content="Pithampur" />
                      <meta itemProp="addressRegion" content="Madhya Pradesh" />
                      <meta itemProp="addressCountry" content="IN" />
                    </div>
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                WHATSAPP QR
            ================================================= */}

            <div className="contact-qr-section">

              <div className="contact-qr-card">

                <div className="contact-qr-content">

                  <p>
                    WHATSAPP – SCAN TO CHAT
                  </p>

                  <h3>
                    Chat With Our Team
                  </h3>

                  <span>
                    Connect with Nascon Technologies directly
                    for enquiries and requirements.
                  </span>

                </div>


                <div className="contact-qr-code">

                  <QRCodeSVG
                    value="https://wa.me/919826288999"
                    size={150}
                    level="H"
                  />

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT COLUMN - ENQUIRY FORM
          ===================================================== */}

          <div className="contact-form-card">

            <p className="contact-label">
              BUSINESS ENQUIRY
            </p>

            <h2>
              Tell Us About Your Requirement
            </h2>

            <p className="contact-form-description">
              Share your requirements with us and our team will
              get in touch with you.
            </p>


            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              noValidate
              className="contact-form"
            >

              {/* NAME + COMPANY */}

              <div className="contact-form-row">

                <div className={`contact-field ${touched.name && errors.name ? "has-error" : ""}`}>

                  <label htmlFor="name">
                    Your Name <span className="req-star">*</span>
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="enquiry_fullname"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    data-lpignore="true"
                    data-form-type="other"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {touched.name && errors.name && (
                    <span className="contact-field-error" role="alert">
                      <AlertCircle size={13} /> {errors.name}
                    </span>
                  )}

                </div>


                <div className={`contact-field ${touched.company && errors.company ? "has-error" : ""}`}>

                  <label htmlFor="company">
                    Company <span className="req-star">*</span>
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="enquiry_organization"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    data-lpignore="true"
                    data-form-type="other"
                    placeholder="Enter your company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {touched.company && errors.company && (
                    <span className="contact-field-error" role="alert">
                      <AlertCircle size={13} /> {errors.company}
                    </span>
                  )}

                </div>

              </div>


              {/* PHONE + EMAIL */}

              <div className="contact-form-row">

                <div className={`contact-field ${touched.phone && errors.phone ? "has-error" : ""}`}>

                  <label htmlFor="phone">
                    Phone <span className="req-star">*</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    name="enquiry_phone_number"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    data-lpignore="true"
                    data-form-type="other"
                    placeholder="Enter 10-digit phone number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={handleBlur}
                  />

                  {touched.phone && errors.phone && (
                    <span className="contact-field-error" role="alert">
                      <AlertCircle size={13} /> {errors.phone}
                    </span>
                  )}

                </div>


                <div className={`contact-field ${touched.email && errors.email ? "has-error" : ""}`}>

                  <label htmlFor="email">
                    Email <span className="req-star">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="enquiry_email_address"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    data-lpignore="true"
                    data-form-type="other"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {touched.email && errors.email && (
                    <span className="contact-field-error" role="alert">
                      <AlertCircle size={13} /> {errors.email}
                    </span>
                  )}

                </div>

              </div>


              {/* REQUIREMENT */}

              <div className={`contact-field ${touched.requirement && errors.requirement ? "has-error" : ""}`}>

                <label htmlFor="requirement">
                  Your Requirement <span className="req-star">*</span>
                </label>

                <textarea
                  id="requirement"
                  name="enquiry_message_requirement"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  data-lpignore="true"
                  data-form-type="other"
                  rows="5"
                  placeholder="Tell us about your automation, electrical or control requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {touched.requirement && errors.requirement && (
                  <span className="contact-field-error" role="alert">
                    <AlertCircle size={13} /> {errors.requirement}
                  </span>
                )}

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
                disabled={submitting}
              >

                {submitting
                  ? "Sending Enquiry..."
                  : "Send Enquiry"}

                {!submitting && (
                  <span>
                    →
                  </span>
                )}

              </button>

            </form>


            {/* SUCCESS */}

            {submitted && (
              <div className="contact-success-message">

                <div className="contact-success-icon">
                  ✓
                </div>

                <div>

                  <h3>
                    Enquiry Submitted Successfully
                  </h3>

                  <p>
                    Thank you for contacting Nascon Technologies.
                    Our team will review your requirement and get
                    back to you shortly.
                  </p>

                </div>

              </div>
            )}


            {/* ERROR */}

            {errorMessage && (
              <div className="contact-error-message">

                <div className="contact-error-icon">
                  !
                </div>

                <div>

                  <h3>
                    Unable to Send Enquiry
                  </h3>

                  <p>
                    {errorMessage}
                  </p>

                </div>

              </div>
            )}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY NASCON
      ========================================================= */}

      <section className="contact-benefits">

        <div className="contact-benefits-heading">

          <p className="contact-label">
            WHY NASCON
          </p>

          <h2>
            Built Around Reliability.
          </h2>

          <p>
            Our commitment is simple — deliver smart solutions
            that create real industrial impact.
          </p>

        </div>


        <div className="contact-benefits-grid">

          {/* 01 */}

          <div className="contact-benefit">

            <span>
              01
            </span>

            <h3>
              Trusted Partner
            </h3>

            <p>
              Reliable industrial technology and engineering support.
            </p>

          </div>


          {/* 02 */}

          <div className="contact-benefit">

            <span>
              02
            </span>

            <h3>
              Quality Assured
            </h3>

            <p>
              Quality-focused products and solutions for industrial use.
            </p>

          </div>


          {/* 03 */}

          <div className="contact-benefit">

            <span>
              03
            </span>

            <h3>
              Engineered Excellence
            </h3>

            <p>
              Application-driven engineering for dependable performance.
            </p>

          </div>


          {/* 04 */}

          <div className="contact-benefit">

            <span>
              04
            </span>

            <h3>
              After Sales Support
            </h3>

            <p>
              Continued technical support beyond project delivery.
            </p>

          </div>


          {/* 05 */}

          <div className="contact-benefit">

            <span>
              05
            </span>

            <h3>
              On-Time Delivery
            </h3>

            <p>
              Focused execution and dependable project delivery.
            </p>

          </div>


          {/* 06 */}

          <div className="contact-benefit">

            <span>
              06
            </span>

            <h3>
              Industry Focused
            </h3>

            <p>
              Solutions designed around real industrial applications.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          AI & SEARCH FAQ SECTION (Generative Engine Optimization)
      ========================================================= */}

      <section
        className="contact-faq-section"
        itemScope
        itemType="https://schema.org/FAQPage"
      >

        <div className="contact-faq-container">

          <div className="contact-faq-header">

            <p className="contact-label">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2>
              Got Questions? We Have Answers.
            </h2>

            <p className="contact-faq-subtitle">
              Clear answers about custom control panel manufacturing, brand supply,
              lead times, and on-site engineering services.
            </p>

          </div>


          <div className="contact-faq-accordion">

            {contactFAQs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className={`contact-faq-item ${isOpen ? "is-open" : ""}`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >

                  <button
                    type="button"
                    className="contact-faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >

                    <span itemProp="name">
                      {faq.question}
                    </span>

                    <span
                      className={`contact-faq-icon ${isOpen ? "is-rotated" : ""}`}
                    >
                      <ChevronDown size={18} strokeWidth={2.2} />
                    </span>

                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="contact-faq-answer"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    style={{
                      maxHeight: isOpen ? "240px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >

                    <div className="contact-faq-answer-inner" itemProp="text">
                      <p>{faq.answer}</p>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;