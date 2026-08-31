import "./Contact.css";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";



import {
  UserRound,
  Phone,
  Mail,
  Globe,
  MapPin,
  Factory,
} from "lucide-react";

function Contact() {
 
    const [formData, setFormData] = useState({
  name: "",
  company: "",
  phone: "",
  email: "",
  requirement: "",
});
const [submitting, setSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [errorMessage, setErrorMessage] = useState("");



const handleChange = (e) => {
  const { id, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [id]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  setSubmitted(false);
  setErrorMessage("");

  try {
    const response = await fetch("/api/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send enquiry");
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
  } catch (error) {
    console.error(error);
    setSubmitted(false);
    setErrorMessage(
      error.message || "Unable to send your enquiry right now. Please try again."
    );
  } finally {
    setSubmitting(false);
  }
};
 return (
    <main className="contact-page">

      {/* =========================
          HERO
      ========================= */}

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


      {/* =========================
          CONTACT INFORMATION + FORM
      ========================= */}

      <section className="contact-section">

        <div className="contact-grid">

          {/* LEFT - CONTACT INFORMATION */}

          <div className="contact-information">

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


            <div className="contact-details">

              <div className="contact-detail">

               <div className="contact-detail-icon">
  <UserRound size={20} strokeWidth={1.8} />
</div>

                <div>
                  <span>Contact Person</span>
                  <strong>Nishit Biyani</strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
  <Phone size={20} strokeWidth={1.8} />
</div>

                <div>
                  <span>Mobile</span>
                  <strong>98262 88999</strong>
                </div>

              </div>


              <div className="contact-detail">

               <div className="contact-detail-icon">
  <Mail size={20} strokeWidth={1.8} />
</div>

                <div>
                  <span>Email</span>
                  <strong>Nishit@nascon.in</strong>
                </div>

              </div>


              <div className="contact-detail">

               <div className="contact-detail-icon">
  <Globe size={20} strokeWidth={1.8} />
</div>

                <div>
                  <span>Website</span>
                  <strong>www.nascon.in</strong>
                </div>

              </div>


              <div className="contact-detail">

            <div className="contact-detail-icon">
  <MapPin size={20} strokeWidth={1.8} />
</div>

                <div>
                  <span>Office Address</span>
                  <strong>
                    G-11 Swadesh Bhawan, 2 Press Complex,
                    <br />
                    Indore, Madhya Pradesh 452018
                  </strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
  <Factory size={20} strokeWidth={1.8} />
</div>

                <div>
                  <span>Factory Address</span>
                  <strong>
                    41 Industrial Estate, Sector-II,
                    <br />
                    Pithampur, Dhar, Madhya Pradesh
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT - ENQUIRY FORM */}

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


            <form onSubmit={handleSubmit} autoComplete="off">

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="name">
                    Your Name
                  </label>
<input
  id="name"
  type="text"
  name="business_enquiry_name"
  autoComplete="new-password"
  placeholder="Enter your name"
  value={formData.name}
  onChange={handleChange}
  required
/>

                </div>


                <div className="contact-field">

                  <label htmlFor="company">
                    Company
                  </label>
<input
  id="company"
  type="text"
  name="business_enquiry_company"
  autoComplete="new-password"
  placeholder="Enter your company"
  value={formData.company}
  onChange={handleChange}
  required
/>

                </div>

              </div>


              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="phone">
                    Phone
                  </label>
<input
  id="phone"
  type="tel"
  name="business_enquiry_phone"
  autoComplete="new-password"
  placeholder="Enter your phone number"
  value={formData.phone}
  onChange={handleChange}
  required
/>

                </div>


                <div className="contact-field">

                  <label htmlFor="email">
                    Email
                  </label>
<input
  id="email"
  type="email"
  name="business_enquiry_email"
  autoComplete="new-password"
  placeholder="Enter your email"
  value={formData.email}
  onChange={handleChange}
  required
/>

                </div>

              </div>


              <div className="contact-field">

                <label htmlFor="requirement">
                  Your Requirement
                </label>
<textarea
  id="requirement"
  name="business_enquiry_requirement"
  autoComplete="off"
  rows="5"
  placeholder="Tell us about your automation, electrical or control requirement"
  value={formData.requirement}
  onChange={handleChange}
  required
></textarea>

              </div>


            <button
  type="submit"
  className="contact-submit"
  disabled={submitting}
>
  {submitting ? "Sending Enquiry..." : "Send Enquiry"}
  {!submitting && <span>→</span>}
</button>

            </form>
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
                  {/* =========================
            QR CONTACT OPTIONS
        ========================= */}

        <div className="contact-qr-section">

          <div className="contact-qr-card">

            <div className="contact-qr-content">

              <p>WHATSAPP – SCAN TO CHAT</p>

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
      </section>


      {/* =========================
          WHY NASCON
      ========================= */}

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

          <div className="contact-benefit">
            <span>01</span>
            <h3>Trusted Partner</h3>
            <p>
              Reliable industrial technology and engineering support.
            </p>
          </div>


          <div className="contact-benefit">
            <span>02</span>
            <h3>Quality Assured</h3>
            <p>
              Quality-focused products and solutions for industrial use.
            </p>
          </div>


          <div className="contact-benefit">
            <span>03</span>
            <h3>Engineered Excellence</h3>
            <p>
              Application-driven engineering for dependable performance.
            </p>
          </div>


          <div className="contact-benefit">
            <span>04</span>
            <h3>After Sales Support</h3>
            <p>
              Continued technical support beyond project delivery.
            </p>
          </div>


          <div className="contact-benefit">
            <span>05</span>
            <h3>On-Time Delivery</h3>
            <p>
              Focused execution and dependable project delivery.
            </p>
          </div>


          <div className="contact-benefit">
            <span>06</span>
            <h3>Industry Focused</h3>
            <p>
              Solutions designed around real industrial applications.
            </p>
          </div>

        </div>
        

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}


    </main>
   
  );
}

export default Contact;