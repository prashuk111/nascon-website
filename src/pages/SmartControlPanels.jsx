import { Link } from "react-router-dom";
import {
  Cpu,
  Gauge,
  Sliders,
  Zap,
  Activity,
  Radio,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Shield,
  Clock,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import "./SmartControlPanels.css";

const panelSolutions = [
  {
    number: "01",
    title: "PLC PANEL",
    image: "/images/solutions/control-panels/01-plc-panel.png",
    description:
      "Advanced PLC based control panels for precise automation and process control.",
    icon: Cpu,
    highlights: ["Deterministic Execution", "Modular Expansion", "Fieldbus Connected"],
  },
  {
    number: "02",
    title: "VFD PANEL",
    image: "/images/solutions/control-panels/02-vfd-panel.png",
    description:
      "Variable Frequency Drive panels for energy efficiency and smooth motor control.",
    icon: Gauge,
    highlights: ["Speed Regulation", "Soft Ramp Start", "Harmonic Filtering"],
  },
  {
    number: "03",
    title: "MCC / iMCC PANEL",
    image: "/images/solutions/control-panels/03-mcc-panel.png",
    description:
      "Motor Control Centers and intelligent MCC panels for reliable motor management.",
    icon: Sliders,
    highlights: ["Thermal Overload", "Bus Communication", "Draw-out & Fixed Feeders"],
  },
  {
    number: "04",
    title: "PCC PANEL",
    image: "/images/solutions/control-panels/04-pcc-panel.png",
    description:
      "Power Control Center panels for efficient power distribution and load management.",
    icon: Zap,
    highlights: ["High Fault Busbar", "Type-Tested ACB", "Selective Tripping"],
  },
  {
    number: "05",
    title: "APFC / iPFC PANEL",
    image: "/images/solutions/control-panels/05-apfc-panel.png",
    description:
      "Automatic and intelligent Power Factor Control panels for improved efficiency and reduced power cost.",
    icon: Activity,
    highlights: ["Microprocessor Relay", "Thyristor/Contactor", "Penalty Reduction"],
  },
  {
    number: "06",
    title: "RTU PANEL",
    image: "/images/solutions/control-panels/06-rtu-panel.png",
    description:
      "Remote Terminal Unit panels for remote monitoring, data acquisition and control.",
    icon: Radio,
    highlights: ["Cellular/Ethernet", "Datalogging Buffer", "SCADA Telemetry"],
  },
  {
    number: "07",
    title: "CUSTOM AUTOMATION PANEL",
    image: "/images/solutions/control-panels/07-custom-automation-panel.png",
    description:
      "Tailor-made panels designed to meet unique process requirements and application needs.",
    icon: Wrench,
    highlights: ["Custom Dimensions", "Multi-Protocol OEM", "Hazardous/IP Rated"],
  },
];

const qualityFeatures = [
  {
    icon: ShieldCheck,
    title: "Premium Components",
    desc: "Trusted brands, long-term reliability",
  },
  {
    icon: CheckCircle2,
    title: "Engineered to Perform",
    desc: "Built with precision, tested for performance",
  },
  {
    icon: Shield,
    title: "Safe & Compliant",
    desc: "Designed as per IEC standards",
  },
  {
    icon: Clock,
    title: "End to End Support",
    desc: "From design to commissioning and after-sales support",
  },
];

function SmartControlPanels() {
  return (
    <main className="smart-panels-page" id="control-panels">
      {/* ===================================================
          BREADCRUMB
      =================================================== */}
      <nav className="sol-breadcrumbs" aria-label="Breadcrumb">
        <div className="section-container breadcrumb-inner">
          <Link to="/">Home</Link>
          <ChevronRight size={13} className="breadcrumb-sep" />
          <Link to="/solutions">Solutions</Link>
          <ChevronRight size={13} className="breadcrumb-sep" />
          <span className="breadcrumb-current" aria-current="page">
            Smart Control Panels
          </span>
        </div>
      </nav>

      {/* ===================================================
          HERO SECTION
      =================================================== */}
      <header className="sol-hero-section">
        <div className="section-container sol-hero-container">
          {/* Left Text Content */}
          <div className="sol-hero-text">
            <div className="sol-hero-eyebrow">
              <span className="sol-eyebrow-line"></span>
              <span>SMART CONTROL</span>
            </div>

            <h1 className="sol-hero-title">
              SMART
              <br />
              <span>CONTROL PANEL</span>
              <br />
              SOLUTIONS
            </h1>

            <div className="sol-hero-taglines">
              <p className="sol-tagline-lead">
                Engineered for performance.
                <br />
                Built for reliability.
                <br />
                Designed for your process.
              </p>
              <p className="sol-hero-desc">
                NASCON designs, engineers and manufactures industrial control panels
                tailored around rigorous manufacturing demands. Sourcing genuine,
                type-tested switchgear and certified automation hardware, we deliver
                turnkey enclosures ready for safe continuous industrial operation.
              </p>
            </div>

            <div className="sol-hero-actions">
              <Link to="/contact?solution=control-panels" className="sol-hero-btn-primary">
                <span>Request Panel Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <a href="#panel-solutions" className="sol-hero-btn-outline">
                <span>View Panel Types</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Industrial Graphic Card */}
          <div className="sol-hero-visual-card">
            <div className="sol-visual-backdrop-grid"></div>
            <div className="sol-visual-glow"></div>

            <div className="sol-visual-frame">
              <div className="sol-frame-header">
                <div className="sol-frame-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>

              </div>

              <div className="sol-frame-img-container">
                <picture>
                  <source
                    srcSet="/images/control-panel-balanced.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/control-panel-balanced.png"
                    alt="NASCON Smart Control Panel Assembly"
                    className="sol-frame-img"
                    width="600"
                    height="450"
                    loading="eager"
                  />
                </picture>
              </div>

              <div className="sol-frame-footer">
                <div className="sol-frame-meta">
                  <span className="meta-label">ARCHITECTURE</span>
                  <span className="meta-val">IEC 61439 COMPLIANT</span>
                </div>
                <div className="sol-frame-status">
                  <span className="status-indicator"></span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===================================================
          OUR PANEL SOLUTIONS SECTION (7 CARDS)
      =================================================== */}
      <section className="our-panel-solutions-section" id="panel-solutions">
        <div className="section-container">
          <div className="sol-section-header">
            <p className="sol-section-eyebrow">ENGINEERED PANEL PORTFOLIO</p>
            <h2>OUR PANEL SOLUTIONS</h2>
            <span>
              High-quality, application-driven electrical and automation panels
              manufactured with certified components and proven wiring practices.
            </span>
          </div>

          {/* 7 Industrial Technology Cards (4 in Row 1, 3 Centered in Row 2) */}
          <div className="panel-cards-grid">
            {panelSolutions.map((panel) => {
              const IconComponent = panel.icon;
              return (
                <div key={panel.number} className="panel-tech-card">
                  <div className="tech-corner top-left"></div>
                  <div className="tech-corner top-right"></div>
                  <div className="tech-corner bottom-left"></div>
                  <div className="tech-corner bottom-right"></div>

                  <div className="panel-card-top">
                    <span className="panel-card-num">{panel.number}</span>
                    <div className="panel-card-icon-wrap">
                      <IconComponent size={20} />
                    </div>
                  </div>

                  <div className="panel-card-main">
                    <div className="panel-card-info">
                      <h3 className="panel-card-title">{panel.title}</h3>
                      <p className="panel-card-desc">{panel.description}</p>
                    </div>
                    <div className="panel-card-img-wrap">
                      <picture>
                        <source
                          srcSet={panel.image.replace(".png", ".webp")}
                          type="image/webp"
                        />
                        <img
                          src={panel.image}
                          alt={panel.title}
                          className="panel-card-img"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>

                  <div className="panel-card-highlights">
                    {panel.highlights.map((h, i) => (
                      <span key={i} className="panel-highlight-pill">
                        <span className="pill-dot">✓</span>
                        {h}
                      </span>
                    ))}
                  </div>


                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          QUALITY / ENGINEERING HORIZONTAL STRIP
      =================================================== */}
      <section className="quality-engineering-strip-section">
        <div className="section-container">
          <div className="quality-strip-box">
            {qualityFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="quality-feature-item">
                  <div className="quality-icon-box">
                    <IconComp size={22} />
                  </div>
                  <div className="quality-text">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          PREMIUM DARK BOTTOM CTA
      =================================================== */}
      <section className="dark-panel-cta-section">
        <div className="section-container">
          <div className="dark-cta-card">
            <div className="dark-cta-backdrop-glow"></div>
            <div className="dark-cta-content">
              <span className="dark-cta-eyebrow">ENGINEERING EXCELLENCE</span>
              <h2 className="dark-cta-title">
                SMART PANELS.
                <br />
                STRONGER AUTOMATION.
                <br />
                <span>BETTER TOMORROW.</span>
              </h2>
              <p className="dark-cta-subtitle">
                Built with Quality. Delivered with Commitment.
              </p>
              <div className="dark-cta-actions">
                <Link
                  to="/contact?solution=control-panels"
                  className="btn-dark-cta-primary"
                >
                  <span>Talk to Our Experts</span>
                  <ArrowRight size={16} />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SmartControlPanels;
