import { useParams, Link } from "react-router-dom";
import { getProduct, getRelatedProducts, getCategory } from "../data/productsData";
import ProductCard from "../components/products/ProductCard";
import "./ProductDetail.css";

function ProductDetail() {
  const { category: categoryParam, productId } = useParams();

  const product = getProduct(categoryParam, productId);
  const categoryInfo = product ? getCategory(product.category) : null;
  const relatedProducts = product ? getRelatedProducts(product, 4) : [];
  const categoryRoute = product ? (product.category === "electrical" ? "/products/electrical-control" : `/products/${product.category}`) : "/products";

  if (!product) {
    return (
      <main className="product-not-found section-container">
        <div className="not-found-card">
          <p className="not-found-eyebrow">PRODUCT CATALOG</p>
          <h1>Product Not Found</h1>
          <p>
            The requested industrial product could not be located in our catalog.
          </p>
          <Link to="/products" className="btn-primary">
            ← Return to Products Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const enquiryUrl = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <main className="product-detail-page">
      {/* ===================================================
          BREADCRUMBS
      =================================================== */}
      <nav className="product-breadcrumbs" aria-label="Breadcrumb">
        <div className="breadcrumb-inner section-container">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link to={categoryRoute}>
            {product.categoryName}
          </Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span className="breadcrumb-current" aria-current="page">
            {product.name}
          </span>
        </div>
      </nav>

      {/* ===================================================
          PRODUCT HERO
      =================================================== */}
      <section className="product-detail-hero">
        <div className="section-container product-hero-grid">
          {/* Left Column: Product Info */}
          <div className="product-hero-info">
            <div className="product-hero-badges">
              <span className="badge-num">{product.number}</span>
              <span className="badge-category">{product.categoryName}</span>
              <span className="badge-brand">GENUINE INDUSTRIAL PRODUCT</span>
            </div>

            <h1 className="product-detail-h1" aria-label={`${product.fullName || product.name}`}>
              {product.name}
            </h1>
            <p className="product-detail-fullname">{product.fullName}</p>

            <div className="product-short-callout">
              <span className="callout-icon" aria-hidden="true">◈</span>
              <p>{product.shortDescription}</p>
            </div>

            <p className="product-overview-text">{product.overview}</p>

            {/* Category Highlights */}
            {categoryInfo && categoryInfo.pills && (
              <div className="product-hero-pills" aria-label="Engineering value">
                {categoryInfo.pills.map((pill, i) => (
                  <span key={i} className="detail-pill">
                    <span className="detail-pill-check">✓</span>
                    {pill}
                  </span>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="product-hero-ctas">
              <Link to={enquiryUrl} className="btn-detail-enquire">
                <span>Enquire About This Product</span>
                <svg
                  width="18"
                  height="18"
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
                to={categoryRoute}
                className="btn-detail-category"
              >
                View Full Category Range
              </Link>
            </div>
          </div>

          {/* Right Column: Large Product Photography Showcase */}
          <div className="product-hero-media">
            <div className="product-media-card">
              <div className="media-card-corner top-left"></div>
              <div className="media-card-corner top-right"></div>
              <div className="media-card-corner bottom-left"></div>
              <div className="media-card-corner bottom-right"></div>

              <div className="media-card-topbar">
                <span className="status-indicator"></span>
                <span className="media-code">
                  ID: {product.category.toUpperCase()}-{product.id.toUpperCase()}
                </span>
                <span className="media-verified">GENUINE SUPPLY</span>
              </div>

              <div className="media-image-frame">
                <picture>
                  {product.webpImage && (
                    <source srcSet={product.webpImage} type="image/webp" />
                  )}
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.fullName}`}
                    className="product-detail-img"
                    width="600"
                    height="600"
                    decoding="async"
                  />
                </picture>
              </div>

              <div className="media-card-footer">
                <span>NASCON TECHNOLOGIES PRODUCT PORTFOLIO</span>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          APPLICATIONS & KEY FEATURES SECTION
      =================================================== */}
      <section className="product-specs-section">
        <div className="section-container">
          <div className="specs-two-col">
            {/* Applications */}
            <div className="spec-card applications-card">
              <div className="spec-card-head">
                <div className="spec-icon-box">⚙</div>
                <div>
                  <h2>Industrial Applications</h2>
                  <p>Typical automation &amp; industrial environments</p>
                </div>
              </div>

              <ul className="spec-list">
                {product.applications.map((app, i) => (
                  <li key={i} className="spec-list-item">
                    <span className="list-bullet-icon">▸</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div className="spec-card features-card">
              <div className="spec-card-head">
                <div className="spec-icon-box">★</div>
                <div>
                  <h2>Key Capabilities &amp; Features</h2>
                  <p>Engineering features grounded in industrial practice</p>
                </div>
              </div>

              <ul className="spec-list">
                {product.features.map((feat, i) => (
                  <li key={i} className="spec-list-item">
                    <span className="list-bullet-check">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Engineering Highlights Banner */}
          {product.highlights && (
            <div className="highlights-banner">
              <div className="highlights-label">
                <span>KEY HIGHLIGHTS</span>
              </div>
              <div className="highlights-grid">
                {product.highlights.map((hl, i) => (
                  <div key={i} className="highlight-item">
                    <span className="hl-marker">0{i + 1}</span>
                    <span className="hl-text">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================
          RELATED PRODUCTS SECTION
      =================================================== */}
      {relatedProducts.length > 0 && (
        <section className="product-related-section">
          <div className="section-container">
            <div className="related-heading">
              <p>EXPLORE COMPLEMENTARY HARDWARE</p>
              <h2>Related Products</h2>
              <span>
                Complementary industrial automation, protection and instrumentation
                products engineered to work together.
              </span>
            </div>

            <div className="product-cards-grid">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          BOTTOM ENQUIRY CTA
      =================================================== */}
      <section className="product-detail-cta">
        <div className="section-container">
          <div className="detail-cta-box">
            <p className="detail-cta-eyebrow">NEED SIZING OR QUOTATION?</p>
            <h2>
              Enquire About <span>{product.name}</span>
            </h2>
            <p className="detail-cta-sub">
              Our engineering team assists with technical product selection,
              system compatibility, panel layout integration, and competitive quotations.
            </p>
            <Link to={enquiryUrl} className="btn-detail-cta-submit">
              Submit Enquiry for {product.name} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
