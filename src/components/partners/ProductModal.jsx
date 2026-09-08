import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, CheckCircle2, Factory, ShieldCheck, Send } from "lucide-react";

export default function ProductModal({ category, partner, isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !category || !partner) return null;

  return (
    <div
      className="nascon-product-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="nascon-product-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="nascon-modal-header">
          <div className="modal-header-meta">
            <span className="modal-badge-number">{category.number}</span>
            <span className="modal-badge-partner">{partner.name}</span>

          </div>
          <button
            type="button"
            className="nascon-modal-close-btn"
            onClick={onClose}
            aria-label="Close product modal"
            id="btn-close-product-modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="nascon-modal-body">
          {/* Left: Product Image & Quick CTA */}
          <div className="modal-media-col">
            <div className="modal-image-display">
              <picture>
                {category.webpImage && <source srcSet={category.webpImage} type="image/webp" />}
                <img
                  src={category.image}
                  alt={`${category.title} by ${partner.name}`}
                  className="modal-main-img"
                />
              </picture>
            </div>
            <div className="modal-support-card">
              <ShieldCheck className="support-icon" size={20} />
              <div>
                <strong>Authentic {partner.name} Guarantee</strong>
                <p>Supplied with OEM documentation, warranty, and NASCON technical validation.</p>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs & Applications */}
          <div className="modal-info-col">
            <h2 id="modal-title" className="modal-product-title">
              {category.title}
            </h2>
            {category.subtitle && (
              <p className="modal-product-subtitle">{category.subtitle}</p>
            )}

            <p className="modal-product-overview">
              {category.shortDescription}
            </p>

            {/* Key Features */}
            {category.features && category.features.length > 0 && (
              <div className="modal-section-block">
                <h4 className="modal-block-title">Key Specifications & Features</h4>
                <ul className="modal-feature-list">
                  {category.features.map((feat, idx) => (
                    <li key={idx} className="modal-feature-item">
                      <CheckCircle2 size={16} className="modal-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            {category.applications && category.applications.length > 0 && (
              <div className="modal-section-block">
                <h4 className="modal-block-title">Typical Industrial Applications</h4>
                <div className="modal-applications-grid">
                  {category.applications.map((app, idx) => (
                    <div key={idx} className="modal-app-chip">
                      <Factory size={14} className="app-icon" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="modal-action-row">
              <Link
                to={`/contact?partner=${partner.slug}&product=${encodeURIComponent(category.title)}`}
                className="nascon-btn-primary modal-action-btn"
                id="btn-modal-enquire-now"
                onClick={onClose}
              >
                <Send size={16} />
                <span>Enquire About {category.title}</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
