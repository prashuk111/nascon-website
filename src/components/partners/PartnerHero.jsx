import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function PartnerHero({ partner, onScrollToProducts }) {
  const guarantees = partner.guarantees || [
    "100% Genuine Certified",
    "Application Engineering Support",
    "Fast Regional Dispatch",
  ];

  return (
    <section className="nascon-partner-hero-banner" id="partner-hero">
      <div className="nascon-partner-hero-bg-accent" />
      <div className="nascon-partner-hero-inner">
        {/* Left text column */}
        <div className="nascon-partner-hero-copy">

          <div className="nascon-partner-title-group">


            {partner.supportedBrands && partner.supportedBrands.length > 0 && (
              <div className="nascon-hero-brands-row" aria-label="Supported Technology Platforms">
                <span className="hero-brands-tag-label">SUPPORTED BRANDS:</span>
                <div className="hero-brands-pills">
                  {partner.supportedBrands.map((brand, idx) => (
                    <span key={idx} className="hero-brand-badge">{brand}</span>
                  ))}
                </div>
              </div>
            )}

            <h2 className="nascon-partner-headline">
              {partner.name}
            </h2>
            <p className="nascon-partner-tagline">
              {partner.tagline}
            </p>
          </div>

          <p className="nascon-partner-overview">
            {partner.overview}
          </p>

          <div className="nascon-partner-hero-ctas">
            <button
              onClick={onScrollToProducts}
              className="nascon-btn-primary nascon-btn-explore"
              id="btn-explore-partner-products"
            >
              {partner.exploreBtnText || `Explore ${partner.shortName || partner.name} ${partner.categoryLabel || "Capabilities"}`}
              <ArrowRight size={16} />
            </button>
            <Link
              to={`/contact?partner=${partner.slug}`}
              className="nascon-btn-secondary"
              id="btn-enquire-partner"
            >
              Request a Consultation
            </Link>
          </div>

          <div className="nascon-partner-guarantee-strip">
            {guarantees.map((item, idx) => (
              <span key={idx} className="guarantee-item">
                <CheckCircle2 size={16} className="guarantee-icon" /> {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right industrial hero image */}
        <div className="nascon-partner-hero-media">
          <div className="nascon-hero-image-frame">
            <picture>
              {partner.heroImageWebp && <source srcSet={partner.heroImageWebp} type="image/webp" />}
              <img
                src={partner.heroImage}
                alt={`${partner.name} industrial automation showcase`}
                className={`nascon-partner-hero-img ${partner.heroFitContain ? "fit-contain" : ""}`}
              />
            </picture>
            {!partner.hideHeroOverlay && <div className="nascon-hero-image-overlay" />}
            {!partner.hideHeroBadge && (
              <div className="nascon-hero-floating-badge">
                <span className="badge-pulse" />
                <div className="badge-text">
                  <strong>{partner.badgeText || "Authorized Partner"}</strong>
                  <span>{partner.badgeSubtext || "NASCON Integration & Supply"}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

