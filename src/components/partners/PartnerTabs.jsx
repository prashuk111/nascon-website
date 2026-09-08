import { useRef, useEffect } from "react";

export default function PartnerTabs({ partners, activeSlug, onSelectPartner }) {
  const activeTabRef = useRef(null);

  // Automatically scroll active partner tab into view on mobile / narrow viewports
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSlug]);

  return (
    <section className="nascon-partner-tabs-wrapper" aria-label="Partner Selection Navigation">
      <div className="nascon-partner-tabs-container">
        <div className="nascon-partner-tabs-header">
          <span className="nascon-partner-tabs-label">OFFICIAL TECHNOLOGY PARTNERS</span>
        </div>
        <div className="nascon-partner-tabs-list" role="tablist">
          {partners.map((partner) => {
            const isActive = partner.slug === activeSlug;
            return (
              <button
                key={partner.slug}
                ref={isActive ? activeTabRef : null}
                role="tab"
                aria-selected={isActive}
                className={`nascon-partner-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => onSelectPartner(partner.slug)}
                id={`partner-tab-${partner.slug}`}
              >
                <div className="nascon-tab-logo-box">
                  <picture>
                    {partner.logoWebp && <source srcSet={partner.logoWebp} type="image/webp" />}
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="nascon-tab-logo-img"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="nascon-tab-info">
                  <span className="nascon-tab-name">{partner.name}</span>
                  <span className="nascon-tab-category">{partner.category}</span>
                </div>
                {isActive && <div className="nascon-tab-active-indicator" />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
