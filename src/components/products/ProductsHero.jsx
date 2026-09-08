import { Link } from "react-router-dom";
import { productCategories } from "../../data/productsData";

function ProductsHero() {
  return (
    <header className="products-hero-section">
      <div className="products-hero-inner">
        <div className="products-hero-text">
          <div className="products-hero-eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span>INDUSTRIAL PRODUCT PORTFOLIO</span>
          </div>

          <h1 className="products-hero-h1">
            Industrial Automation &amp; <span>Electrical Control Products</span>
          </h1>

          <p className="products-hero-p">
            Reliable industrial products, automation technologies and electrical
            control solutions for modern industrial applications.
          </p>

          <div className="products-hero-stats">
            <div className="hero-stat-box">
              <span className="hero-stat-num">32</span>
              <span className="hero-stat-label">Industrial Products</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-box">
              <span className="hero-stat-num">04</span>
              <span className="hero-stat-label">Core Categories</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-box">
              <span className="hero-stat-num">100%</span>
              <span className="hero-stat-label">Genuine Supply</span>
            </div>
          </div>
        </div>

        {/* Technical Schematic Graphic */}
        <div className="products-hero-graphic" aria-hidden="true">
          <div className="tech-backdrop-grid"></div>
          <div className="tech-radar-circle circle-1"></div>
          <div className="tech-radar-circle circle-2"></div>
          
          <div className="tech-hardware-card">
            <div className="tech-card-header">
              <span className="indicator-dot online"></span>
              <span className="tech-card-title">INDUSTRIAL AUTOMATION ARCHITECTURE</span>
            </div>
            <div className="tech-card-schematic">
              <div className="schematic-node">
                <span className="node-icon">⚡</span>
                <span className="node-text">PLC / SCADA</span>
              </div>
              <div className="schematic-bus"></div>
              <div className="schematic-node">
                <span className="node-icon">⌁</span>
                <span className="node-text">SWITCHGEAR</span>
              </div>
              <div className="schematic-bus"></div>
              <div className="schematic-node">
                <span className="node-icon">◎</span>
                <span className="node-text">SENSORS</span>
              </div>
            </div>
            <div className="tech-card-footer">
              <span>SYSTEM READY</span>
              <code>NASCON PORTFOLIO</code>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <nav className="category-jump-bar" aria-label="Category navigation">
        <div className="category-jump-container">
          <span className="jump-bar-label">EXPLORE PRODUCT PORTFOLIOS:</span>
          <div className="jump-buttons">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.route || `/products/${cat.id}`}
                className="jump-pill-btn"
                title={`Explore ${cat.title}`}
              >
                <span className="jump-pill-num">{cat.number}</span>
                <span className="jump-pill-name">{cat.shortTitle}</span>
                <span className="jump-pill-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default ProductsHero;
