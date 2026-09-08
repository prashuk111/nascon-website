import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  if (!product) return null;

  const catRoute = product.category === "electrical" ? "electrical-control" : product.category;
  const productDetailUrl = `/products/${catRoute}/${product.id}`;
  const enquiryUrl = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <article className="industrial-product-card" id={`product-${product.id}`}>
      {/* Top Meta Bar */}
      <div className="product-card-top">
        <span className="product-card-number">{product.number}</span>
        <span className="product-card-cat-badge">{product.categoryName}</span>
      </div>

      {/* Product Image Frame */}
      <Link
        to={productDetailUrl}
        className="product-card-image-wrap"
        aria-label={`View details for ${product.name}`}
      >
        <picture>
          {product.webpImage && (
            <source srcSet={product.webpImage} type="image/webp" />
          )}
          <img
            src={product.image}
            alt={`${product.name} - ${product.categoryName}`}
            className="product-card-img"
            loading="lazy"
            decoding="async"
            width="400"
            height="400"
          />
        </picture>
        <span className="product-card-zoom-hint" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </span>
      </Link>

      {/* Product Info */}
      <div className="product-card-body">
        <h3 className="product-card-title">
          <Link to={productDetailUrl}>{product.name}</Link>
        </h3>

        <p className="product-card-desc">{product.shortDescription}</p>

        {/* Action Buttons */}
        <div className="product-card-actions">
          <Link to={productDetailUrl} className="product-card-btn-explore">
            <span>Explore Product</span>
            <svg
              className="product-card-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <Link
            to={enquiryUrl}
            className="product-card-btn-enquire"
            title={`Enquire about ${product.name}`}
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
