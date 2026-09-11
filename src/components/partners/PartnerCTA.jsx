import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function PartnerCTA({ partner }) {
  const { name, ctaEyebrow, ctaHeadline, ctaDescription, ctaBadge } = partner;

  return (
    <section className="nascon-partner-bottom-cta" aria-label="Partner Project Consultation">
      <div className="nascon-partner-cta-container">
        <div className="nascon-partner-cta-card">
          <div className="nascon-partner-cta-content">
            <span className="cta-eyebrow">{ctaEyebrow || "INDUSTRIAL PROJECT CONSULTATION"}</span>
            <h2 className="cta-headline">
              {ctaHeadline || `Ready to Integrate ${name} into Your Machinery or Facility?`}
            </h2>
            <p className="cta-description">
              {ctaDescription ||
                "Submit your Bill of Materials (BOM), project specification, or replacement requirement. Our experienced electrical and automation engineers will provide swift technical sizing, genuine quotes, and delivery timelines."}
            </p>
            <div className="cta-actions">
              <Link
                to="/contact"
                className="nascon-btn-secondary cta-btn-alt"
                id="btn-partner-cta-contact"
              >
                <Mail size={16} />
                <span>Contact Engineering Consultation</span>
              </Link>
            </div>
          </div>
          <div className="nascon-partner-cta-decoration">
            <div className="cta-circle-glow" />
            <div className="cta-stat-pill">
              <strong>{ctaBadge ? "32+" : "7+"}</strong>
              <span>{ctaBadge || "Global Technology Partners Under One Roof"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

