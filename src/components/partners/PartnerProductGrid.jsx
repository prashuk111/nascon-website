import { Link } from "react-router-dom";
import { Check, ArrowRight, Eye, Send } from "lucide-react";

export default function PartnerProductGrid({ partner, onOpenProductModal }) {
  const {
    categories,
    name,
    slug,
    gridEyebrow,
    gridTitle,
    gridSubtitle,
    categoryLabel,
  } = partner;

  return (
    <section className="nascon-partner-products-section" id="partner-products">
      <div className="nascon-partner-products-container">
        {/* Section Header */}
        <div className="nascon-partner-products-header">
          <div className="header-left">
            <span className="nascon-section-eyebrow">{gridEyebrow || "BROCHURE CATALOGUE"}</span>
            <h2 className="nascon-section-title">
              {gridTitle || `${name} Product Portfolio`}
            </h2>
            <p className="nascon-section-subtitle">
              {gridSubtitle || "Authentic industrial automation, control, and electrical products sourced and integrated by NASCON TECHNOLOGIES."}
            </p>
          </div>
          <div className="header-right">
            <div className="nascon-category-count-badge">
              <span className="count-number">{categories.length}</span>
              <span className="count-label">{categoryLabel || "Product Categories"}</span>
            </div>
          </div>
        </div>


        {/* 4-Column Product Grid */}
        <div className="nascon-partner-products-grid">
          {categories.map((category) => (
            <article
              key={category.id}
              className="nascon-partner-product-card"
              id={`product-card-${category.id}`}
            >
              {/* Top meta */}
              <div className="product-card-top">
                <span className="product-card-num">{category.number}</span>
                <span className="product-card-badge">{name}</span>
              </div>

              {/* Product Photographic Image */}
              <div
                className="product-card-img-wrapper"
                onClick={() => onOpenProductModal(category)}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${category.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpenProductModal(category);
                  }
                }}
              >
                <picture>
                  {category.webpImage && <source srcSet={category.webpImage} type="image/webp" />}
                  <img
                    src={category.image}
                    alt={`${category.title} by ${name}`}
                    className="product-card-img"
                    loading="lazy"
                  />
                </picture>
                <div className="product-card-hover-overlay">
                  <span className="overlay-btn">
                    <Eye size={16} /> Quick Preview
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="product-card-body">
                <h3 className="product-card-title">{category.title}</h3>
                {category.subtitle && (
                  <p className="product-card-subtitle">{category.subtitle}</p>
                )}
                <p className="product-card-desc">{category.shortDescription}</p>

                {/* Key Bullet Points from Brochure */}
                {category.features && category.features.length > 0 && (
                  <ul className="product-card-feature-list">
                    {category.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="product-card-feature-item">
                        <Check size={14} className="feature-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="product-card-footer">
                <button
                  type="button"
                  className="product-view-details-btn"
                  onClick={() => onOpenProductModal(category)}
                  id={`btn-view-${category.id}`}
                >
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </button>
                <Link
                  to={`/contact?partner=${slug}&product=${encodeURIComponent(category.title)}`}
                  className="product-enquire-link"
                  title={`Enquire for ${category.title}`}
                >
                  <Send size={13} />
                  <span>Enquire</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
