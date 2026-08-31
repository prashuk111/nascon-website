import { Link } from "react-router-dom";
import "./Solutions.css";

function Solutions() {
  const solutions = [
    {
      number: "01",
      title: "Process Automation",
      description:
        "Automation and control solutions for industrial processes, machines and production systems.",
      items: ["PLC Control", "HMI", "SCADA", "VFD"],
      icon: "◈",
    },
    {
      number: "02",
      title: "Industrial Automation",
      description:
        "Application-focused automation solutions designed to improve process control, productivity and reliability.",
      items: ["Machine Automation", "Control Systems", "Drives", "Instrumentation"],
      icon: "⌘",
    },
    {
      number: "03",
      title: "Electrical & Control Solutions",
      description:
        "Reliable electrical control solutions for industrial power distribution, protection and machine control.",
      items: ["Control Systems", "Protection", "Switchgear", "Power Distribution"],
      icon: "ϟ",
    },
    {
      number: "04",
      title: "Control Panel Solutions",
      description:
        "Engineered control panels built around specific industrial applications and system requirements.",
      items: ["PLC Panels", "VFD Panels", "MCC", "PCC"],
      icon: "▣",
    },
    {
      number: "05",
      title: "Quality Testing & Inspection",
      description:
        "Testing and inspection solutions supporting quality, process consistency and reliable industrial operations.",
      items: ["Testing Systems", "Inspection", "Process Monitoring", "Quality Control"],
      icon: "✓",
    },
    {
      number: "06",
      title: "IoT & Remote Monitoring",
      description:
        "Connected monitoring solutions providing remote visibility, dashboards, alerts and operational data.",
      items: ["IoT", "Dashboards", "Alerts", "Analytics"],
      icon: "◎",
    },
    {
      number: "07",
      title: "Special Purpose Machine Automation",
      description:
        "Custom automation solutions for dedicated industrial machines and application-specific requirements.",
      items: ["Machine Control", "PLC", "HMI", "Custom Automation"],
      icon: "⚙",
    },
  ];

  return (
    <main className="solutions-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="solutions-hero">

        <div className="solutions-hero-content">

          <p className="solutions-eyebrow">
            INDUSTRIAL AUTOMATION SOLUTIONS
          </p>

          <h1>
            Smart Solutions for
            <br />
            <span>Industrial Performance.</span>
          </h1>

          <p className="solutions-hero-description">
            Application-driven automation, electrical control and
            monitoring solutions designed around real industrial
            requirements.
          </p>

          <a
            href="#solution-categories"
            className="solutions-hero-button"
          >
            Explore Our Solutions
            <span>→</span>
          </a>

        </div>

        <div className="solutions-hero-visual">

          <div className="solution-orbit orbit-one"></div>
          <div className="solution-orbit orbit-two"></div>
          <div className="solution-orbit orbit-three"></div>

          <div className="solution-core">
            <div className="core-screen">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="core-controls">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          <div className="solution-floating-label label-one">
            PLC
          </div>

          <div className="solution-floating-label label-two">
            CONTROL
          </div>

          <div className="solution-floating-label label-three">
            MONITORING
          </div>

        </div>

      </section>


      {/* =========================
          SOLUTION HEADING
      ========================= */}

      <section
        className="solutions-section"
        id="solution-categories"
      >

        <div className="solutions-heading">

          <p>
            OUR SOLUTIONS
          </p>

          <h2>
            Engineering Solutions for
            <span> Real Applications.</span>
          </h2>

          <span>
            From process automation and control panels to quality
            testing and remote monitoring, our solutions are built
            around industrial application requirements.
          </span>

        </div>


        {/* =========================
            SOLUTION GRID
        ========================= */}

        <div className="solutions-grid">

          {solutions.map((solution) => (

            <article
              className="solution-card"
              key={solution.number}
            >

              <div className="solution-card-top">

                <span className="solution-number">
                  {solution.number}
                </span>

                <div className="solution-icon">
                  {solution.icon}
                </div>

              </div>

              <div className="solution-card-content">

                <h3>
                  {solution.title}
                </h3>

                <p>
                  {solution.description}
                </p>

                <div className="solution-tags">

                  {solution.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

                <Link
                  to="/contact"
                  className="solution-link"
                >
                  Discuss Your Requirement
                  <span>→</span>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          SOLUTION HIGHLIGHT
      ========================= */}

      <section className="solutions-highlight">

        <div className="solutions-highlight-content">

          <p className="solutions-highlight-label">
            APPLICATION-DRIVEN ENGINEERING
          </p>

          <h2>
            From Process Control
            <br />
            to <span>Industrial Intelligence.</span>
          </h2>

          <p>
            We combine automation, electrical control, instrumentation
            and monitoring technologies to develop solutions suited to
            specific industrial applications.
          </p>

        </div>

        <div className="solutions-highlight-points">

          <div>
            <span>01</span>
            <strong>Control</strong>
            <p>Reliable process and machine control.</p>
          </div>

          <div>
            <span>02</span>
            <strong>Automation</strong>
            <p>Efficient industrial automation systems.</p>
          </div>

          <div>
            <span>03</span>
            <strong>Monitoring</strong>
            <p>Visibility into critical operations.</p>
          </div>

          <div>
            <span>04</span>
            <strong>Integration</strong>
            <p>Connected systems working together.</p>
          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="solutions-cta">

        <div>

          <p>
            HAVE AN INDUSTRIAL REQUIREMENT?
          </p>

          <h2>
            Let's Build the Right
            <span> Solution.</span>
          </h2>

          <p>
            Tell us about your process, machine or automation
            requirement and our team can help identify the right
            solution.
          </p>

        </div>

        <Link
          to="/contact"
          className="solutions-cta-button"
        >
          Talk to Our Team
          <span>→</span>
        </Link>

      </section>

    </main>
  );
}

export default Solutions;