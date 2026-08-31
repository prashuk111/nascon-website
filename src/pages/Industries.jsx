import { Link } from "react-router-dom";
import "./Industries.css";

function Industries() {
  const industries = [
  {
    number: "01",
    title: "Food Processing",
    description:
      "Automation solutions for processing, batching, mixing, cooking and packaging applications.",
    icon: "⌁",
  },
  {
    number: "02",
    title: "Chemical & Process Plants",
    description:
      "Process automation for reactors, tanks, dosing, utilities and critical plant operations.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Packaging Machines",
    description:
      "Automation solutions for filling, sealing, labeling, cartoning and high-speed packaging applications.",
    icon: "▦",
  },
  {
    number: "04",
    title: "Water & Wastewater",
    description:
      "Control solutions for pumping, filtration, aeration, treatment and water management systems.",
    icon: "◌",
  },
  {
    number: "05",
    title: "Distilleries",
    description:
      "Automation for fermentation, distillation, blending, utilities and process control systems.",
    icon: "ϟ",
  },
  {
    number: "06",
    title: "Spray Dryer Applications",
    description:
      "Automation and process control for feed, drying, product handling and associated systems.",
    icon: "◎",
  },
  {
    number: "07",
    title: "Evaporation & Process Systems",
    description:
      "Automation for multiple-effect evaporation, condensate recovery, process control and related systems.",
    icon: "≋",
  },
  {
    number: "08",
    title: "Special Purpose Machines",
    description:
      "Custom automation and control solutions for dedicated industrial machines and applications.",
    icon: "⚙",
  },
];

  const capabilities = [
    {
      number: "01",
      icon: "⌘",
      title: "Panel Design & Engineering",
      description:
        "Engineering and design of control panels around specific industrial applications and requirements.",
    },
    {
      number: "02",
      icon: "◈",
      title: "Component Selection",
      description:
        "Selection of suitable automation, electrical and control components for reliable system performance.",
    },
    {
      number: "03",
      icon: "≋",
      title: "Wiring & Assembly",
      description:
        "Professional panel wiring and assembly focused on organized construction and dependable operation.",
    },
    {
      number: "04",
      icon: "▦",
      title: "PLC / HMI / VFD / SCADA Integration",
      description:
        "Integration of control, visualization, drive and supervisory systems into complete automation solutions.",
    },
    {
      number: "05",
      icon: "✓",
      title: "Testing & Validation",
      description:
        "Systematic testing and validation before delivery to support reliable and consistent operation.",
    },
    {
      number: "06",
      icon: "⚙",
      title: "Custom-Built Solutions",
      description:
        "Application-specific automation and control solutions developed around individual industrial requirements.",
    },
  ];

  return (
    <section className="industries" id="industries">

      {/* =========================
          HERO / HEADING
      ========================= */}

      <div className="industries-heading">

        <p className="industries-label">
          INDUSTRY APPLICATIONS
        </p>

        <h1>
          Automation Built Around
          <br />
          Your Industry.
        </h1>

        <p className="industries-description">
          Application-driven automation and electrical control solutions
          across diverse industrial sectors.
        </p>

      </div>


      {/* =========================
          INDUSTRIES GRID
      ========================= */}

      <div className="industries-grid">

        {industries.map((industry) => (

          <article
            className="industry-card"
            key={industry.number}
          >

            <div className="industry-number">
              {industry.number}
            </div>

            <div className="industry-icon">
              {industry.icon}
            </div>

            <div className="industry-content">

              <h2>
                {industry.title}
              </h2>

              <p>
                {industry.description}
              </p>

              <Link
  to="/contact"
  className="industry-link"
>
                Discuss Your Requirements
                <span>→</span>
              </Link>

            </div>

          </article>

        ))}

      </div>


      {/* =========================
          ENGINEERING CAPABILITIES
      ========================= */}

      <section className="industry-capabilities">

        <div className="capabilities-heading">

          <p>
            OUR ENGINEERING CAPABILITIES
          </p>

          <h2>
            From Engineering to
            <span> Execution.</span>
          </h2>

          <span>
            Engineering, integration and panel-building capabilities
            supporting reliable industrial automation solutions.
          </span>

        </div>


        <div className="capabilities-grid">

          {capabilities.map((capability) => (

            <article
              className="capability-card"
              key={capability.number}
            >

              <span className="capability-number">
                {capability.number}
              </span>

              <div className="capability-icon">
                {capability.icon}
              </div>

              <div className="capability-content">

                <h3>
                  {capability.title}
                </h3>

                <p>
                  {capability.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          BOTTOM CTA
      ========================= */}

      <div className="industries-cta">

        <div className="cta-content">

          <p className="cta-label">
            HAVE A SPECIFIC APPLICATION?
          </p>

          <h2>
            Let's find the right
            <br />
            solution for your industry.
          </h2>

          <p>
            Tell us about your process, application or
            automation requirement and our team can help
            identify the right solution.
          </p>

        </div>

        <Link
  to="/contact"
  className="cta-button"
>
          Talk to Our Team
          <span>→</span>
        </Link>

      </div>

    </section>
  );
}

export default Industries;

