import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function PartnerHero({ partner, onScrollToProducts }) {
  return (
    <section className="nascon-partner-hero-banner" id="partner-hero">
      <div className="nascon-partner-hero-bg-accent" />
      <div className="nascon-partner-hero-inner">
        {/* Left text column */}
        <div className="nascon-partner-hero-copy">


          <div className="nascon-partner-title-group">
            <div className="nascon-partner-logo-container">
              <picture>
                {partner.logoWebp && <source srcSet={partner.logoWebp} type="image/webp" />}
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="nascon-hero-partner-logo"
                  loading="lazy"
                />
              </picture>
            </div>
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
              Explore {partner.name} Products
              <ArrowRight size={16} />
            </button>
            <Link
              to={`/contact?partner=${partner.slug}`}
              className="nascon-btn-secondary"
              id="btn-enquire-partner"
            >
              Request a Quote
            </Link>
          </div>

          <div className="nascon-partner-guarantee-strip">
            <span className="guarantee-item">
              <CheckCircle2 size={16} className="guarantee-icon" /> 100% Genuine Certified
            </span>
            <span className="guarantee-item">
              <CheckCircle2 size={16} className="guarantee-icon" /> Application Engineering Support
            </span>
            <span className="guarantee-item">
              <CheckCircle2 size={16} className="guarantee-icon" /> Fast Regional Dispatch
            </span>
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
                className="nascon-partner-hero-img"
              />
            </picture>
            <div className="nascon-hero-image-overlay" />
            <div className="nascon-hero-floating-badge">
              <span className="badge-pulse" />
              <div className="badge-text">
                <strong>Authorized Partner</strong>
                <span>NASCON Integration & Supply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
