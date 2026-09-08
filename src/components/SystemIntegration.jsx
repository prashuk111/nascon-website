import { Link } from "react-router-dom";
import "./SystemIntegration.css";

function SystemIntegration() {
  const partners = [
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

      {/* =========================
          SECTION INTRO
      ========================= */}

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


      {/* =========================
          PARTNER AREA
      ========================= */}

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


        {/* =========================
            PARTNER GRID
        ========================= */}

        <div className="partners-logos-container">

          {partners.map((partner) => (
            <Link
              to={`/partners/${partner.slug}`}
              className={`partner-logo-item ${partner.className}`}
              key={partner.name}
              title={`Explore ${partner.name} products and solutions`}
              aria-label={partner.name}
            >
              <picture>

                <source
                  srcSet={partner.logo.replace(/\.png$/, ".webp")}
                  type="image/webp"
                />

                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="partner-logo-img"
                />

              </picture>
            </Link>
          ))}

        </div>

      </div>


      {/* =========================
          BOTTOM STATEMENT
      ========================= */}

      <div className="partners-bottom">

        <span className="partners-bottom-line"></span>



      </div>

    </section>
  );
}

export default SystemIntegration;