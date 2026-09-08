import { Link } from "react-router-dom";
import { getCategory } from "../data/productsData";
import CategoryProductCard from "../components/products/CategoryProductCard";
import CategoryNavBanner from "../components/products/CategoryNavBanner";
import { Cpu, ShieldCheck, Wrench, Clock, ArrowRight } from "lucide-react";
import "./AutomationProducts.css";

function AutomationProducts() {
  const category = getCategory("automation");
  const products = category?.products || [];

  return (
    <main className="dedicated-product-page" id="automation-products">
      {/* ===================================================
          BREADCRUMBS
      =================================================== */}
      <nav className="prod-page-breadcrumbs" aria-label="Breadcrumb">
        <div className="section-container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span className="breadcrumb-current" aria-current="page">Automation Products</span>
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
              <span className="prod-eyebrow-num">01</span>
              <span>INDUSTRIAL AUTOMATION PORTFOLIO</span>
            </div>

            <h1 className="prod-hero-h1">
              AUTOMATION <span>PRODUCTS</span>
            </h1>

            <p className="prod-hero-subtitle">
              Reliable control, visualization, drive and communication technologies
              for modern industrial automation.
            </p>

            <div className="prod-hero-stats">
              <div className="prod-stat-item">
                <span className="prod-stat-val">08</span>
                <span className="prod-stat-lbl">Core Technologies</span>
              </div>
              <div className="prod-stat-div" aria-hidden="true"></div>
              <div className="prod-stat-item">
                <span className="prod-stat-val">100%</span>
                <span className="prod-stat-lbl">Genuine Products</span>
              </div>
              <div className="prod-stat-div" aria-hidden="true"></div>
              <div className="prod-stat-item">
                <span className="prod-stat-val">12+</span>
                <span className="prod-stat-lbl">Years Field Expertise</span>
              </div>
            </div>
          </div>

          <div className="prod-hero-badge-card" aria-hidden="true">
            <div className="hero-card-icon-wrap">
              <Cpu size={36} strokeWidth={1.8} />
            </div>
            <h3>Smart Machine &amp; Process Control</h3>
            <p>
              Engineered for OEMs, automated production lines, batch processing and
              distributed plant supervision.
            </p>
            <div className="hero-card-tag">NASCON CATEGORY 01</div>
          </div>
        </div>
      </header>

      {/* ===================================================
          CATEGORY QUICK NAVIGATION BAR (STICKY)
      =================================================== */}
      <CategoryNavBanner activeCategory="01" />

      {/* ===================================================
          PRODUCT SECTIONS / CARDS GRID (8 PRODUCTS)
      =================================================== */}
      <section className="prod-catalog-section section-container" aria-label="Automation Products Grid">
        <div className="prod-section-header">
          <div className="prod-section-eyebrow">
            <span className="section-pill">8 INDUSTRIAL SYSTEMS</span>
            <span>AVAILABLE SIZES, CAPACITIES &amp; CONFIGURATIONS</span>
          </div>
          <h2>Control, Visualization, Drives &amp; Communications</h2>
          <p>
            Explore our industrial automation hardware and supervisory software platforms.
            Each solution is backed by complete technical documentation, integration support,
            and authorized warranty.
          </p>
        </div>

        <div className="prod-grid-4col">
          {products.map((product) => (
            <CategoryProductCard
              key={product.id}
              product={product}
              categoryRoute="automation"
            />
          ))}
        </div>
      </section>

      {/* ===================================================
          WHY CHOOSE NASCON (CATEGORY TAILORED)
      =================================================== */}
      <section className="why-nascon-category-section">
        <div className="section-container">
          <div className="why-cat-header">
            <p className="why-cat-eyebrow">ENGINEERING ASSURANCE</p>
            <h2>
              Why Choose NASCON for <span>Automation Solutions?</span>
            </h2>
            <p className="why-cat-intro">
              We go beyond product distribution by providing complete engineering sizing,
              PLC programming architecture, SCADA development, and on-site integration support.
            </p>
          </div>

          <div className="why-cat-grid">
            <div className="why-cat-card">
              <div className="why-cat-icon">
                <ShieldCheck size={24} />
              </div>
              <h4>Authorized Hardware</h4>
              <p>
                100% genuine automation products sourced directly from authorized principals
                including Siemens, Schneider Electric, and Selec.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Wrench size={24} />
              </div>
              <h4>System Integration Ready</h4>
              <p>
                In-house engineering team experienced in turnkey control panel manufacturing,
                wiring schematics, and fieldbus networking.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Cpu size={24} />
              </div>
              <h4>Multi-Protocol Interoperability</h4>
              <p>
                Seamless communication interfacing across PROFINET, Modbus TCP/RTU, EtherNet/IP,
                OPC UA, and industrial IoT protocols.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Clock size={24} />
              </div>
              <h4>Rapid Delivery &amp; Spares</h4>
              <p>
                Critical automation spares and replacement modules maintained in inventory
                to minimize industrial downtime and line stoppages.
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
              <p className="cat-consult-eyebrow">NEED AUTOMATION SIZING &amp; BILL OF MATERIALS?</p>
              <h2>Consult with Our Automation Engineers</h2>
              <p>
                Share your machinery specifications, I/O count, drive kilowatts, or SCADA
                architecture requirements. We will prepare an optimized technical recommendation
                and transparent quotation.
              </p>
            </div>
            <div className="cat-consultation-action">
              <Link to="/contact?category=automation" className="btn-consult-primary">
                <span>Request Automation Quotation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AutomationProducts;
