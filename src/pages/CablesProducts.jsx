import { Link } from "react-router-dom";
import { getCategory } from "../data/productsData";
import CategoryProductCard from "../components/products/CategoryProductCard";
import CategoryNavBanner from "../components/products/CategoryNavBanner";
import { Cable, ShieldCheck, Flame, Layers, ArrowRight } from "lucide-react";
import "./CablesProducts.css";

function CablesProducts() {
  const category = getCategory("cables");
  const products = category?.products || [];

  return (
    <main className="dedicated-product-page" id="cables-products">
      {/* ===================================================
          BREADCRUMBS
      =================================================== */}
      <nav className="prod-page-breadcrumbs" aria-label="Breadcrumb">
        <div className="section-container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span className="breadcrumb-current" aria-current="page">Cables &amp; Wiring Solutions</span>
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
              <span className="prod-eyebrow-num">03</span>
              <span>INDUSTRIAL CABLING &amp; ROUTING</span>
            </div>

            <h1 className="prod-hero-h1">
              CABLES &amp; <span>WIRING SOLUTIONS</span>
            </h1>

            <p className="prod-hero-subtitle">
              Reliable cabling, termination, glanding and wiring support for modern
              industrial systems, harsh manufacturing plants, and control enclosures.
            </p>

            <div className="prod-hero-stats">
              <div className="prod-stat-item">
                <span className="prod-stat-val">08</span>
                <span className="prod-stat-lbl">Cable Categories</span>
              </div>
              <div className="prod-stat-div" aria-hidden="true"></div>
              <div className="prod-stat-item">
                <span className="prod-stat-val">FRLS / ZHLS</span>
                <span className="prod-stat-lbl">Fire Retardant Grades</span>
              </div>
              <div className="prod-stat-div" aria-hidden="true"></div>
              <div className="prod-stat-item">
                <span className="prod-stat-val">IS / IEC</span>
                <span className="prod-stat-lbl">Certified Conductors</span>
              </div>
            </div>
          </div>

          <div className="prod-hero-badge-card" aria-hidden="true">
            <div className="hero-card-icon-wrap">
              <Cable size={36} strokeWidth={1.8} />
            </div>
            <h3>Certified Conductor &amp; Termination</h3>
            <p>
              Engineered for signal integrity, electrical noise immunity, and heavy-duty
              power distribution across manufacturing plants.
            </p>
            <div className="hero-card-tag">NASCON CATEGORY 03</div>
          </div>
        </div>
      </header>

      {/* ===================================================
          CATEGORY QUICK NAVIGATION BAR (STICKY)
      =================================================== */}
      <CategoryNavBanner activeCategory="03" />

      {/* ===================================================
          PRODUCT SECTIONS / CARDS GRID (8 PRODUCTS)
      =================================================== */}
      <section className="prod-catalog-section section-container" aria-label="Cables Products Grid">
        <div className="prod-section-header">
          <div className="prod-section-eyebrow">
            <span className="section-pill">8 CABLE &amp; ACCESSORY LINES</span>
            <span>POWER, SIGNAL, CONTROL &amp; ROUTING HARDWARE</span>
          </div>
          <h2>Industrial Cables, Termination Glands &amp; Cable Management</h2>
          <p>
            Genuine industrial cables from authorized brands including Finolex and Gloster,
            paired with brass glands, lugs, din-rail channels, and cable support trays.
          </p>
        </div>

        <div className="prod-grid-4col">
          {products.map((product) => (
            <CategoryProductCard
              key={product.id}
              product={product}
              categoryRoute="cables"
            />
          ))}
        </div>
      </section>

      {/* ===================================================
          WHY CHOOSE NASCON (CABLES)
      =================================================== */}
      <section className="why-nascon-category-section">
        <div className="section-container">
          <div className="why-cat-header">
            <p className="why-cat-eyebrow">QUALITY &amp; COMPLIANCE</p>
            <h2>
              Why Choose NASCON for <span>Cables &amp; Wiring?</span>
            </h2>
            <p className="why-cat-intro">
              We supply pure electrolytic grade copper conductors and aluminum cables with
              rigorous insulation standards to prevent transmission losses and plant hazards.
            </p>
          </div>

          <div className="why-cat-grid">
            <div className="why-cat-card">
              <div className="why-cat-icon">
                <ShieldCheck size={24} />
              </div>
              <h4>100% Genuine Conductors</h4>
              <p>
                Supplied directly with manufacturer test certificates (MTC) verifying
                conductor resistance, tensile strength, and sheath thickness.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Flame size={24} />
              </div>
              <h4>Flame Retardant Options</h4>
              <p>
                FRLS (Flame Retardant Low Smoke) and Zero Halogen (LSZH) sheathing for
                maximum personnel safety in enclosed control rooms.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Layers size={24} />
              </div>
              <h4>Noise Shielded Cables</h4>
              <p>
                Individual and overall aluminum mylar paired shields with drain wire for
                uncompromised 4-20mA instrumentation and RS-485 bus signals.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Cable size={24} />
              </div>
              <h4>Complete Termination Kits</h4>
              <p>
                Matched double-compression brass glands, heavy-duty crimping lugs, ferrule
                numbering, and raceways for professional panel buildouts.
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
              <p className="cat-consult-eyebrow">HAVE A DRUM SCHEDULE OR BULK CABLING REQUIREMENT?</p>
              <h2>Request Industrial Cable Schedules &amp; Quotations</h2>
              <p>
                Share your conductor core sizing, insulation specifications, and required run lengths.
                Our team will calculate voltage drop allowances and deliver project-ready pricing.
              </p>
            </div>
            <div className="cat-consultation-action">
              <Link to="/contact?category=cables" className="btn-consult-primary">
                <span>Request Cables Quotation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CablesProducts;
