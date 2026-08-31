import { Link } from "react-router-dom";
import "./CTA.css";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight
} from "lucide-react";

function CTA() {
  return (
    <section className="contact-section" id="contact">

      {/* Background decoration */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>


      {/* =========================
          HEADING
      ========================= */}

      <div className="contact-heading">

        <p className="contact-eyebrow">
          GET IN TOUCH
        </p>

        <h2>
          Let's Build Something
          <span>Reliable Together.</span>
        </h2>

        <p className="contact-intro">
          Have an automation, electrical or control requirement?
          Our team is ready to discuss your project and find the
          right solution for your industry.
        </p>

      </div>


      {/* =========================
          CONTACT CARDS
      ========================= */}

      <div className="contact-row">


        {/* ADDRESS */}

        <div className="contact-item">

          <span className="contact-icon">
            <MapPin
              size={21}
              strokeWidth={1.8}
            />
          </span>

          <div>
            <h4>Address</h4>

            <p>
              G-11 Swadesh Bhawan,
              <br />
              2 Press Complex,
              <br />
              Indore, Madhya Pradesh 452018
            </p>
          </div>

        </div>


        {/* PHONE */}

        <div className="contact-item">

          <span className="contact-icon">
            <Phone
              size={21}
              strokeWidth={1.8}
            />
          </span>

          <div>
            <h4>Phone</h4>

            <p>
              +91 98262 88999
            </p>
          </div>

        </div>


        {/* EMAIL */}

        <div className="contact-item">

          <span className="contact-icon">
            <Mail
              size={21}
              strokeWidth={1.8}
            />
          </span>

          <div>
            <h4>Email</h4>

            <p>
              Nishit@nascon.in
            </p>
          </div>

        </div>


        {/* WEBSITE */}

        <div className="contact-item">

          <span className="contact-icon">
            <Globe
              size={21}
              strokeWidth={1.8}
            />
          </span>

          <div>
            <h4>Website</h4>

            <p>
              www.nascon.in
            </p>
          </div>

        </div>

      </div>


      {/* =========================
          BOTTOM CTA
      ========================= */}

      <div className="contact-bottom">

        <div>

          <span className="contact-bottom-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h3>
            Talk to our team about your
            next industrial solution.
          </h3>

        </div>


        <Link
          to="/contact"
          className="contact-button"
        >
          Contact Our Team

          <ArrowRight
            size={18}
            strokeWidth={2}
          />
        </Link>

      </div>

      {/* =========================
          DEVELOPMENT MILESTONE
      ========================= */}

      <div className="development-credit">

        <span className="development-line"></span>

        <p>
          Developed by <strong>A2BN PRIVATE LIMITED</strong>
        </p>

        <span className="development-line"></span>

      </div>

    </section>
  );
}

export default CTA;