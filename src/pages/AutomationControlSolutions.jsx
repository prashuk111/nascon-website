import { Link } from "react-router-dom";
import {
  Cpu,
  Activity,
  Layers,
  Radio,
  Gauge,
  Wrench,
  ArrowRight,
  ChevronRight,
  Monitor,
  Wifi,
} from "lucide-react";
import "./AutomationControlSolutions.css";

const solutionAreas = [
  {
    number: "01",
    title: "PLC / HMI / SCADA Systems",
    description:
      "Intelligent control, visualization and supervisory monitoring for modern automated manufacturing.",
    icon: Cpu,
    highlights: ["Deterministic Cycle Control", "High-Resolution HMI Visuals", "Historian & Plant SCADA"],
  },
  {
    number: "02",
    title: "VFD & Drive Control Solutions",
    description:
      "Efficient motor control, speed regulation and energy optimization across pumps, fans and conveyors.",
    icon: Activity,
    highlights: ["Variable Torque Curves", "Closed-loop Vector Control", "Regenerative Braking"],
  },
  {
    number: "03",
    title: "Smart Control Panel Manufacturing",
    description:
      "PLC panels, VFD panels, MCC, PCC, APFC and custom automation panels built in-house.",
    icon: Layers,
    highlights: ["IEC 61439 Design", "Neat Wire Routing & Ferruling", "Full Factory Acceptance Test"],
  },
  {
    number: "04",
    title: "IoT & Remote Monitoring",
    description:
      "Connected systems, alerts, dashboards and remote visibility for distributed plant assets.",
    icon: Radio,
    highlights: ["MQTT / OPC UA Telemetry", "Real-Time Alarm SMS/Email", "Cloud Asset Analytics"],
  },
  {
    number: "05",
    title: "Field Instrumentation",
    description:
      "Pressure, temperature, flow and process sensing integration with galvanic isolation.",
    icon: Gauge,
    highlights: ["4-20mA HART Integration", "Submersible & High-Temp", "Calibrated Traceability"],
  },
  {
    number: "06",
    title: "System Integration Support",
    description:
      "Design, selection, programming, commissioning and post-installation technical engineering support.",
    icon: Wrench,
    highlights: ["FAT & SAT Site Validation", "Multi-Brand Interoperability", "On-Call Spares & Service"],
  },
];

const processStages = [
  {
    step: "01",
    title: "Field Devices",
    desc: "Sensors, RTDs, valves & transmitters measuring real-time parameters.",
    icon: Gauge,
  },
  {
    step: "02",
    title: "Control Panel",
    desc: "Enclosure housing switchgear, terminal buses, power supplies & surge units.",
    icon: Layers,
  },
  {
    step: "03",
    title: "PLC / VFD",
    desc: "Deterministic logic execution, speed regulation & motion control.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "HMI / SCADA",
    desc: "Dynamic plant mimic, recipe tuning, trends & alarm logging.",
    icon: Monitor,
  },
  {
    step: "05",
    title: "Remote Monitoring",
    desc: "Secure telemetry, cloud dashboards & proactive maintenance alerts.",
    icon: Wifi,
  },
];

function AutomationControlSolutions() {
  return (
    <main className="automation-solutions-page" id="automation-control">
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
            Automation &amp; Control Solutions
          </span>
        </div>
      </nav>

      {/* ===================================================
          HERO SECTION
      =================================================== */}
      <header className="auto-hero-section">
        <div className="section-container auto-hero-container">
          {/* Left Text */}
          <div className="auto-hero-text">
            <div className="auto-hero-eyebrow">
              <span className="auto-eyebrow-line"></span>
              <span>INDUSTRIAL AUTOMATION SOLUTIONS</span>
            </div>

            <h1 className="auto-hero-title">
              Automation &amp;
              <br />
              <span>Control Solutions</span>
            </h1>

            <div className="auto-hero-taglines">
              <p className="auto-tagline-lead">
                Smart, scalable and future-ready solutions for modern industrial operations.
              </p>
              <p className="auto-hero-desc">
                From standalone machinery control to enterprise SCADA supervision,
                NASCON integrates advanced automation hardware, variable frequency drives,
                and precision instrumentation into seamless, connected industrial architectures.
              </p>
            </div>

            <div className="auto-hero-actions">
              <Link to="/contact?solution=automation-control" className="auto-hero-btn-primary">
                <span>Discuss Your Automation Requirement</span>
                <ArrowRight size={16} />
              </Link>
              <a href="#solution-areas" className="auto-hero-btn-outline">
                <span>Explore Solution Areas</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Visual Industrial Graphic */}
          <div className="auto-hero-visual-card">
            <div className="auto-visual-backdrop-grid"></div>
            <div className="auto-visual-glow"></div>

            <div className="auto-visual-frame">
              <div className="auto-frame-header">
                <div className="auto-frame-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>

              </div>

              <div className="auto-frame-img-container">
                <picture>
                  <source
                    srcSet="/images/industrial-automation-home.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/industrial-automation-home.png"
                    alt="NASCON Industrial Automation & Control Systems"
                    className="auto-frame-img"
                    width="600"
                    height="450"
                    loading="eager"
                  />
                </picture>
              </div>

              <div className="auto-frame-footer">
                <div className="auto-frame-meta">
                  <span className="meta-label">DISCIPLINE</span>
                  <span className="meta-val">END-TO-END AUTOMATION</span>
                </div>
                <div className="auto-frame-status">
                  <span className="status-indicator"></span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===================================================
          SOLUTION AREAS (6 CARDS)
      =================================================== */}
      <section className="solution-areas-section" id="solution-areas">
        <div className="section-container">
          <div className="sol-section-header">
            <p className="sol-section-eyebrow">COMPREHENSIVE CAPABILITIES</p>
            <h2>SOLUTION AREAS</h2>
            <span>
              End-to-end industrial automation and control services tailored to improve
              productivity, ensure electrical safety, and deliver actionable operational data.
            </span>
          </div>

          {/* 6 Solution Cards Grid (3x2 Desktop, 2-col Tablet, 1-col Mobile) */}
          <div className="areas-cards-grid">
            {solutionAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <div key={area.number} className="area-tech-card">
                  <div className="tech-corner top-left"></div>
                  <div className="tech-corner top-right"></div>
                  <div className="tech-corner bottom-left"></div>
                  <div className="tech-corner bottom-right"></div>

                  <div className="area-card-top">
                    <span className="area-card-num">{area.number}</span>
                    <div className="area-card-icon-wrap">
                      <IconComponent size={20} />
                    </div>
                  </div>

                  <h3 className="area-card-title">{area.title}</h3>
                  <p className="area-card-desc">{area.description}</p>

                  <div className="area-card-highlights">
                    {area.highlights.map((h, i) => (
                      <span key={i} className="area-highlight-pill">
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
          PROCESS / SYSTEM FLOW SECTION
      =================================================== */}
      <section className="process-flow-section" id="process-flow">
        <div className="section-container">
          <div className="sol-section-header">
            <p className="sol-section-eyebrow">SYSTEM ARCHITECTURE</p>
            <h2>PROCESS &amp; SYSTEM FLOW</h2>
            <span>
              How our integrated automation solutions capture, process, visualize,
              and transmit critical factory floor data.
            </span>
          </div>

          <div className="process-stages-container">
            {processStages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isLast = idx === processStages.length - 1;
              return (
                <div key={stage.step} className="process-stage-wrapper">
                  <div className="process-stage-node">
                    <div className="stage-node-badge">{stage.step}</div>
                    <div className="stage-icon-wrap">
                      <StageIcon size={24} />
                    </div>
                    <h4 className="stage-title">{stage.title}</h4>
                    <p className="stage-desc">{stage.desc}</p>
                  </div>

                  {!isLast && (
                    <div className="process-connector-arrow" aria-hidden="true">
                      <ArrowRight size={20} className="arrow-desktop" />
                      <div className="arrow-line-mobile"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          PREMIUM DARK BOTTOM CTA
      =================================================== */}
      <section className="dark-auto-cta-section">
        <div className="section-container">
          <div className="dark-auto-card">
            <div className="dark-auto-backdrop-glow"></div>
            <div className="dark-auto-content">
              <span className="dark-auto-eyebrow">FUTURE-READY OPERATIONS</span>
              <h2 className="dark-auto-title">
                SMART AUTOMATION.
                <br />
                CONNECTED CONTROL.
                <br />
                <span>BETTER PERFORMANCE.</span>
              </h2>
              <p className="dark-auto-subtitle">
                Partner with NASCON for application-tailored automation engineering.
              </p>
              <div className="dark-auto-actions">
                <Link
                  to="/contact?solution=automation-control"
                  className="btn-dark-auto-primary"
                >
                  <span>Discuss Your Automation Requirement</span>
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

export default AutomationControlSolutions;
