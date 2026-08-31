import { Link } from "react-router-dom";
import "./SystemIntegration.css";

function SystemIntegration() {
  const partners = [
  {
    name: "Schneider Electric",
    className: "schneider",
    slug: "schneider",
    logo: "/images/partners/schneider-electric.png",
  },
  {
    name: "SIEMENS",
    className: "siemens",
    slug: "siemens",
    logo: "/images/partners/siemens.png",
  },
  {
    name: "PHOENIX CONTACT",
    className: "phoenix",
    slug: "phoenix",
    logo: "/images/partners/phoenix-contact-brochure.png",
  },
  {
    name: "MULTISPAN",
    className: "multispan",
    slug: "multispan",
    logo: "/images/partners/multispan.png",
  },
  {
    name: "SELEC",
    className: "selec",
    slug: "selec",
    logo: "/images/partners/selec.png",
  },
  {
    name: "Finolex",
    className: "finolex",
    slug: "finolex",
    logo: "/images/partners/finolex-cables.png",
  },
  {
    name: "GLOSTER",
    className: "gloster",
    slug: "gloster",
    logo: "/images/partners/gloster-brochure.png",
  },
];
  return (
    <section className="partners-section" id="partners">

      {/* =================================================
          SECTION INTRO
      ================================================= */}

      <div className="partners-intro">

        <p className="partners-eyebrow">
          TECHNOLOGY ECOSYSTEM
        </p>

        <h2>
          System Integration &amp; Product Partners
        </h2>

        <p className="partners-description">
          We work with trusted technology and product brands to
          deliver reliable automation, electrical and control solutions
          for industrial applications.
        </p>

      </div>


      {/* =================================================
          PARTNER AREA
      ================================================= */}

      <div className="partners-area">

        <div className="partners-area-heading">

          <div className="partners-heading-line"></div>

          <div className="partners-heading-content">

            <p>
              OUR TECHNOLOGY PARTNERS
            </p>

            <span>
              Click a partner to explore their products and solutions.
            </span>

          </div>

          <div className="partners-heading-line"></div>

        </div>


        {/* =================================================
            PARTNER GRID
        ================================================= */}

        <div className="partners-container">

          {partners.map((partner, index) => (

            <Link
              to={`/partners?company=${partner.slug}`}
              className="partner-card"
              key={partner.name}
              style={{
                "--partner-delay": `${index * 0.08}s`,
              }}
            >

              {/* Card top information */}

              <div className="partner-card-top">

                <span className="partner-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="partner-status"></span>

              </div>


              {/* Partner name */}

              <div className={`partner-logo ${partner.className}`}>
  <img
    src={partner.logo}
    alt={partner.name}
  />
</div>


              {/* Partner subtitle */}

              {partner.sub && (
                <div className="partner-sub">
                  {partner.sub}
                </div>
              )}


              {/* Hover arrow */}

              <div className="partner-arrow">
                →
              </div>

            </Link>

          ))}

        </div>

        {/* =================================================
    INTEGRATION WORKFLOW
================================================= */}

<div className="integration-workflow">

  <div className="integration-workflow-heading">

    <p>HOW WE INTEGRATE</p>

    <h3>
      From Field Devices to
      <span> Connected Monitoring</span>
    </h3>

    <span>
      We connect field-level equipment, control systems and
      monitoring technologies into reliable industrial solutions.
    </span>

  </div>


  <div className="integration-flow">

    <div className="integration-step">
      <span className="integration-number">01</span>
      <h4>Field Devices</h4>
      <p>Sensors, instruments and process signals</p>
    </div>

    <span className="integration-arrow">→</span>

    <div className="integration-step">
      <span className="integration-number">02</span>
      <h4>Control Panel</h4>
      <p>Industrial control and electrical systems</p>
    </div>

    <span className="integration-arrow">→</span>

    <div className="integration-step">
      <span className="integration-number">03</span>
      <h4>PLC / VFD</h4>
      <p>Automation and motor control</p>
    </div>

    <span className="integration-arrow">→</span>

    <div className="integration-step">
      <span className="integration-number">04</span>
      <h4>HMI / SCADA</h4>
      <p>Visualization and process monitoring</p>
    </div>

    <span className="integration-arrow">→</span>

    <div className="integration-step">
      <span className="integration-number">05</span>
      <h4>Remote Monitoring</h4>
      <p>Connected visibility and system support</p>
    </div>

  </div>

</div>

      </div>


      {/* =================================================
          BOTTOM STATEMENT
      ================================================= */}

      <div className="partners-bottom">

        <span className="partners-bottom-line"></span>

        <p>
          Reliable products. Trusted technology. Engineered solutions.
        </p>

        <span className="partners-bottom-line"></span>

      </div>

    </section>
  );
}

export default SystemIntegration;