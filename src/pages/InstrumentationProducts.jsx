import { Link } from "react-router-dom";
import { getCategory } from "../data/productsData";
import CategoryProductCard from "../components/products/CategoryProductCard";
import CategoryNavBanner from "../components/products/CategoryNavBanner";
import { Gauge, ShieldCheck, Activity, Cpu, ArrowRight } from "lucide-react";
import "./InstrumentationProducts.css";

function InstrumentationProducts() {
  const category = getCategory("instrumentation");
  const products = category?.products || [];

  return (
    <main className="dedicated-product-page" id="instrumentation-products">
      {/* ===================================================
          BREADCRUMBS
      =================================================== */}
      <nav className="prod-page-breadcrumbs" aria-label="Breadcrumb">
        <div className="section-container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span className="breadcrumb-current" aria-current="page">Field Instrumentation &amp; Sensors</span>
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
              <span className="prod-eyebrow-num">04</span>
              <span>SENSING, MEASUREMENT &amp; SIGNALS</span>
            </div>

            <h1 className="prod-hero-h1">
              FIELD INSTRUMENTATION &amp; <span>SENSORS</span>
            </h1>

            <p className="prod-hero-subtitle">
              Reliable sensing, measurement and signal interface solutions
              for modern industrial processes, closed-loop PID control and factory monitoring.
            </p>

            <div className="prod-hero-stats">
              <div className="prod-stat-item">
                <span className="prod-stat-val">08</span>
                <span className="prod-stat-lbl">Instrument Families</span>
              </div>
              <div className="prod-stat-div" aria-hidden="true"></div>
              <div className="prod-stat-item">
                <span className="prod-stat-val">High-Precision</span>
                <span className="prod-stat-lbl">Class A / 0.1% FS</span>
              </div>
              <div className="prod-stat-div" aria-hidden="true"></div>
              <div className="prod-stat-item">
                <span className="prod-stat-val">3-Way</span>
                <span className="prod-stat-lbl">Galvanic Isolation</span>
              </div>
            </div>
          </div>

          <div className="prod-hero-badge-card" aria-hidden="true">
            <div className="hero-card-icon-wrap">
              <Gauge size={36} strokeWidth={1.8} />
            </div>
            <h3>Precision Process Measurement</h3>
            <p>
              Engineered for continuous chemical processing, food &amp; beverage hygienic lines,
              water treatment plants, and thermal furnace control.
            </p>
            <div className="hero-card-tag">NASCON CATEGORY 04</div>
          </div>
        </div>
      </header>

      {/* ===================================================
          CATEGORY QUICK NAVIGATION BAR (STICKY)
      =================================================== */}
      <CategoryNavBanner activeCategory="04" />

      {/* ===================================================
          PRODUCT SECTIONS / CARDS GRID (8 PRODUCTS)
      =================================================== */}
      <section className="prod-catalog-section section-container" aria-label="Instrumentation Products Grid">
        <div className="prod-section-header">
          <div className="prod-section-eyebrow">
            <span className="section-pill">8 INSTRUMENTATION LINES</span>
            <span>TRANSMITTERS, PROBES, ISOLATORS &amp; DIGITAL CONTROLLERS</span>
          </div>
          <h2>Temperature, Pressure, Flow, Level &amp; Signal Conditioners</h2>
          <p>
            Explore high-accuracy process transmitters and signal isolators from trusted
            industrial manufacturers including Multispan, Selec, and Phoenix Contact.
          </p>
        </div>

        <div className="prod-grid-4col">
          {products.map((product) => (
            <CategoryProductCard
              key={product.id}
              product={product}
              categoryRoute="instrumentation"
            />
          ))}
        </div>
      </section>

      {/* ===================================================
          WHY CHOOSE NASCON (INSTRUMENTATION)
      =================================================== */}
      <section className="why-nascon-category-section">
        <div className="section-container">
          <div className="why-cat-header">
            <p className="why-cat-eyebrow">MEASUREMENT EXCELLENCE</p>
            <h2>
              Why Choose NASCON for <span>Process Instrumentation?</span>
            </h2>
            <p className="why-cat-intro">
              Reliable plant automation requires uncompromised measurement accuracy.
              Our instruments are selected to prevent signal drifting, ground loops, and electrical noise.
            </p>
          </div>

          <div className="why-cat-grid">
            <div className="why-cat-card">
              <div className="why-cat-icon">
                <ShieldCheck size={24} />
              </div>
              <h4>Calibrated Accuracy</h4>
              <p>
                Instruments supplied with factory calibration reports meeting traceable
                national measurement standards for audit readiness.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Activity size={24} />
              </div>
              <h4>HART &amp; Fieldbus Protocols</h4>
              <p>
                Transmitters supporting 4-20mA current loops with superimposed digital
                HART, Modbus RTU, and IO-Link communication interfaces.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Cpu size={24} />
              </div>
              <h4>Galvanic Signal Isolation</h4>
              <p>
                3-way galvanic isolation between input, output, and power supply to eliminate
                ground loops and shield PLCs from lethal voltage spikes.
              </p>
            </div>

            <div className="why-cat-card">
              <div className="why-cat-icon">
                <Gauge size={24} />
              </div>
              <h4>Harsh Environment Build</h4>
              <p>
                IP67/IP68 submersible housings, SS316 wetted parts, and intrinsically safe
                options for hazardous chemical and outdoor utility zones.
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
              <p className="cat-consult-eyebrow">NEED ASSISTANCE WITH TRANSMITTER SIZING OR CALIBRATION RANGES?</p>
              <h2>Request Instrumentation Engineering Consultation</h2>
              <p>
                Provide your pipe diameters, pressure thresholds, operating temperatures, or fluid
                viscosity data. Our instrumentation specialists will specify the ideal sensor setup.
              </p>
            </div>
            <div className="cat-consultation-action">
              <Link to="/contact?category=instrumentation" className="btn-consult-primary">
                <span>Request Sensor Quotation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InstrumentationProducts;
