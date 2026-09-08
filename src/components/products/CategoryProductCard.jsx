import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Tag } from "lucide-react";
import "./CategoryProductCard.css";

function CategoryProductCard({ product, categoryRoute }) {
  if (!product) return null;

  const targetCategory = categoryRoute || (product.category === "electrical" ? "electrical-control" : product.category);
  const productDetailUrl = `/products/${targetCategory}/${product.id}`;
  const enquiryUrl = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <article className="category-product-card" id={`product-${product.id}`}>
      {/* Top Meta Bar */}
      <div className="cat-card-header">
        <span className="cat-card-num">{product.number}</span>
        <span className="cat-card-badge">{product.categoryName || "Genuine Supply"}</span>
      </div>

      {/* Image Container with Object-Fit Contain */}
      <Link
        to={productDetailUrl}
        className="cat-card-img-wrap"
        aria-label={`View detailed specifications for ${product.name}`}
      >
        <picture>
          {product.webpImage && (
            <source srcSet={product.webpImage} type="image/webp" />
          )}
          <img
            src={product.image}
            alt={`${product.name} - ${product.fullName || product.name}`}
            className="cat-card-img"
            loading="lazy"
            decoding="async"
            width="400"
            height="400"
          />
        </picture>
        <span className="cat-card-hover-tag">Inspect Specs</span>
      </Link>

      {/* Content Body */}
      <div className="cat-card-body">
        <h3 className="cat-card-title">
          <Link to={productDetailUrl}>{product.name}</Link>
        </h3>

        <p className="cat-card-desc">{product.shortDescription}</p>

        {/* Key Features List (Brochure verified) */}
        {product.features && product.features.length > 0 && (
          <div className="cat-card-features-section">
            <span className="cat-card-features-label">KEY SPECIFICATIONS &amp; CAPABILITIES</span>
            <ul className="cat-card-features-list">
              {product.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="cat-card-feature-item">
                  <CheckCircle2 size={13} className="cat-feature-icon" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Applications Tag Pills */}
        {product.applications && product.applications.length > 0 && (
          <div className="cat-card-apps-section">
            <span className="cat-card-apps-label">
              <Tag size={11} aria-hidden="true" />
              APPLICATIONS
            </span>
            <div className="cat-card-apps-tags">
              {product.applications.slice(0, 3).map((app, idx) => (
                <span key={idx} className="cat-app-pill">
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="cat-card-actions">
          <Link to={productDetailUrl} className="cat-btn-explore">
            <span>Explore Product</span>
            <ArrowRight size={14} className="cat-btn-arrow" />
          </Link>

          <Link
            to={enquiryUrl}
            className="cat-btn-enquire"
            title={`Send inquiry for ${product.name}`}
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CategoryProductCard;
