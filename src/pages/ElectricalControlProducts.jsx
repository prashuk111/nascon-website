import { Link } from "react-router-dom";
import { getCategory } from "../data/productsData";
import CategoryProductCard from "../components/products/CategoryProductCard";
import CategoryNavBanner from "../components/products/CategoryNavBanner";
import { Zap, ShieldCheck, CheckCircle2, Sliders, ArrowRight } from "lucide-react";
import "./ElectricalControlProducts.css";

function ElectricalControlProducts() {
  const category = getCategory("electrical-control") || getCategory("electrical");
  const products = category?.products || [];

  return (
    <main className="dedicated-product-page" id="electrical-control-products">
      {/* ===================================================
          BREADCRUMBS
      =================================================== */}
      <nav className="prod-page-breadcrumbs" aria-label="Breadcrumb">
        <div className="section-container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span className="breadcrumb-current" aria-current="page">Electrical Control Products</span>
        </div>
      </nav>

      {/* ===================================================
          HERO SECTION
      =================================================== */}
      <header className="prod-page-hero">
        <div className="section-container prod-hero-inner">
          <div className="prod-hero-content">
            <div className="prod-hero-eyebrow">
              <span className="prod-eyebrow-line" aria-hidden="true"></span>
              <span className="prod-eyebrow-num">02</span>
              <span>POWER DISTRIBUTION &amp; SWITCHGEAR</span>
            </div>

            <h1 className="prod-hero-h1">
              ELECTRICAL CONTROL &amp; <span>PROTECTION PRODUCTS</span>
            </h1>

            <p className="prod-hero-subtitle">
              Reliable switching, protection and power management products
              for modern industrial systems and engineered control panels.
            </p>

            <div className="prod-hero-stats">
              <div className="prod-stat-item">
                <span className="prod-stat-val">08</span>
                <span className="prod-stat-lbl">Protection Categories</span>
              </div>
              <div className="prod-stat-div" aria-hidden="true"></div>
              <div className="prod-stat-item">
                <span className="prod-stat-val">Type-Tested</span>
                <span className="prod-stat-lbl">Certified Switchgear</span>
              </div>
              <div className="prod-stat-div" aria-hidden="true"></div>
              <div className="prod-stat-item">
                <span className="prod-stat-val">Panel-Ready</span>
                <span className="prod-stat-lbl">Modular Architecture</span>
              </div>
            </div>
          </div>

          <div className="prod-hero-badge-card" aria-hidden="true">
            <div className="hero-card-icon-wrap">
              <Zap size={36} strokeWidth={1.8} />
            </div>
            <h3>Circuit Protection &amp; Safe Power</h3>
            <p>
              Engineered for motor control centers (MCC), power distribution boards,
              and machine control enclosures.
            </p>
            <div className="hero-card-tag">NASCON CATEGORY 02</div>
          </div>
        </div>
      </header>

      {/* ===================================================
          CATEGORY QUICK NAVIGATION BAR (STICKY)
      =================================================== */}
      <CategoryNavBanner activeCategory="02" />

      {/* ===================================================
          PRODUCT SECTIONS / CARDS GRID (8 PRODUCTS)
      =================================================== */}
      <section className="prod-catalog-section section-container" aria-label="Electrical Control Products Grid">
        <div className="prod-section-header">
          <div className="prod-section-eyebrow">
            <span className="section-pill">8 CORE PRODUCT LINES</span>
            <span>TYPE-TESTED BREAKERS, CONTACTORS &amp; POWER SUPPLIES</span>
          </div>
          <h2>Switching, Relays, Surge Protection &amp; Terminal Blocks</h2>
          <p>
            We supply genuine, certified switchgear and electrical protection components
            from trusted global leaders including Schneider Electric, Siemens, and Phoenix Contact.
          </p>
        </div>

        <div className="prod-grid-4col">
          {products.map((product) => (
            <CategoryProductCard
              key={product.id}
              product={product}
              categoryRoute="electrical-control"
            />
          ))}
        </div>
      </section>

      {/* ===================================================
          WHY CHOOSE NASCON (ELECTRICAL CONTROL)
      =================================================== */}
      <section className="why-nascon-category-section">
        <div className="section-container">
          <div className="why-cat-header">
            <p className="why-cat-eyebrow">ELECTRICAL RELIABILITY</p>
            <h2>
              Why Choose NASCON for <span>Electrical Control?</span>
            </h2>
            <p className="why-cat-intro">
              Our electrical engineers ensure all supplied switchgear meets national and
              international fault ratings, breaking capacities, and discrimination requirements.
            </p>
          </div>

          <div className="why-cat-grid">
            <div className="why-cat-card">
              <div className="why-cat-icon">
                <ShieldCheck size={24} />
              </div>
              <h4>Type-Tested Compliance</h4>
              <p>
                Circuit breakers, contactors, and relays complying with IEC/IS standards
                for industrial safety and operational integrity.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Sliders size={24} />
              </div>
              <h4>Accurate Breaker Sizing</h4>
              <p>
                Engineering assistance for prospective fault calculation, selective tripping,
                and motor starter coordination.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <CheckCircle2 size={24} />
              </div>
              <h4>Ready Panel Integration</h4>
              <p>
                DIN-rail mountable modules, standard auxiliary contacts, and tool-free
                push-in terminal interfaces for swift panel wiring.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Zap size={24} />
              </div>
              <h4>Comprehensive Power Protection</h4>
              <p>
                From incoming main air circuit breakers down to SMPS power distribution
                and surge arrestors protecting sensitive electronics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CATEGORY CONSULTATION CTA
      =================================================== */}
      <section className="cat-consultation-section">
        <div className="section-container">
          <div className="cat-consultation-box">
            <div className="cat-consultation-text">
              <p className="cat-consult-eyebrow">LOOKING FOR SWITCHGEAR SIZING OR TENDER BILLS OF MATERIAL?</p>
              <h2>Request Electrical Sizing &amp; Component Pricing</h2>
              <p>
                Submit your single-line diagram (SLD), motor ratings, or switchgear schedule.
                Our team will provide prompt commercial pricing, genuine certificates of origin,
                and technical coordination.
              </p>
            </div>
            <div className="cat-consultation-action">
              <Link to="/contact?category=electrical" className="btn-consult-primary">
                <span>Request Switchgear Quotation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ElectricalControlProducts;
