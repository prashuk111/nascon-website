import { useSearchParams, Link } from "react-router-dom";
import "./Partners.css";

function Partners() {

  const [searchParams, setSearchParams] = useSearchParams();

  const partners = [
    {
      number: "01",
      slug: "schneider",
      name: "Schneider Electric",
      category: "Industrial Control & Automation",

      shortDescription:
        "Switching, protection, industrial control and automation components.",

      description:
        "Schneider Electric provides industrial automation, electrical distribution, switching, protection and control solutions used across industrial applications.",

      solutions: [
        "Industrial control and automation",
        "Switching and protection",
        "Motor control solutions",
        "Electrical distribution",
        "Control panel components",
      ],

      icon: "◈",
    },

    {
      number: "02",
      slug: "siemens",
      name: "Siemens",
      category: "Automation & Control",

      shortDescription:
        "PLCs, HMIs, drives, industrial communication and control products.",

      description:
        "Siemens provides automation and control technologies used for industrial machines, production systems and process applications.",

      solutions: [
        "PLC automation",
        "HMI systems",
        "Industrial drives",
        "Industrial communication",
        "Control systems",
      ],

      icon: "◎",
    },

    {
      number: "03",
      slug: "phoenix",
      name: "Phoenix Contact",
      category: "Connectivity & Interface",

      shortDescription:
        "Terminal blocks, interface modules, power supplies and connectivity solutions.",

      description:
        "Phoenix Contact provides industrial connectivity, interface and control products used for reliable electrical and automation system integration.",

      solutions: [
        "Terminal blocks",
        "Interface modules",
        "Power supplies",
        "Industrial connectivity",
        "Signal and control solutions",
      ],

      icon: "▦",
    },

    {
      number: "04",
      slug: "multispan",
      name: "Multispan",
      category: "Process Instruments",

      shortDescription:
        "Temperature controllers, timers, counters and process instruments.",

      description:
        "Multispan provides process instrumentation and control products for monitoring and controlling industrial parameters.",

      solutions: [
        "Temperature controllers",
        "Timers",
        "Counters",
        "Process instruments",
        "Industrial monitoring",
      ],

      icon: "⌁",
    },

    {
      number: "05",
      slug: "selec",
      name: "Selec",
      category: "Industrial Control",

      shortDescription:
        "Meters, timers, protection relays and industrial control products.",

      description:
        "Selec provides industrial measurement, monitoring, protection and control products for automation and electrical applications.",

      solutions: [
        "Digital meters",
        "Timers",
        "Protection relays",
        "Industrial controllers",
        "Measurement products",
      ],

      icon: "ϟ",
    },

    {
      number: "06",
      slug: "finolex",
      name: "Finolex Cables",
      category: "Cable Solutions",

      shortDescription:
        "Power, control and panel wiring cables.",

      description:
        "Finolex Cables provides cable solutions used for electrical wiring, control systems and industrial applications.",

      solutions: [
        "Power cables",
        "Control cables",
        "Panel wiring",
        "Electrical cables",
        "Industrial wiring solutions",
      ],

      icon: "〰",
    },

    {
      number: "07",
      slug: "gloster",
      name: "Gloster",
      category: "Cable Solutions",

      shortDescription:
        "Power, control and instrumentation cable solutions.",

      description:
        "Gloster provides cable solutions for power, control and instrumentation applications used in industrial environments.",

      solutions: [
        "Power cables",
        "Control cables",
        "Instrumentation cables",
        "Industrial cable solutions",
        "Electrical applications",
      ],

      icon: "≋",
    },
  ];


  /*
   * Get selected company from URL.
   *
   * Example:
   * /partners?company=siemens
   */

  const selectedSlug =
    searchParams.get("company") || "schneider";


  const selectedPartner =
    partners.find(
      (partner) => partner.slug === selectedSlug
    ) || partners[0];


  /*
   * Change selected company
   */

  const selectPartner = (slug) => {

    setSearchParams({
      company: slug,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <main className="nascon-partners-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="nascon-partners-hero">

        <div className="nascon-partners-hero-inner">

          <div className="nascon-partners-hero-text">

            <p className="nascon-partners-eyebrow">
              OUR PARTNERS
            </p>

            <h1>
              Trusted Technology
              <br />
              Partners
            </h1>

            <p className="nascon-partners-hero-description">
              We work with leading technology brands to deliver
              dependable automation, electrical and industrial
              control solutions for our customers.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          PARTNERS LIST
      ================================================= */}

      <section className="nascon-partners-list">

        <div className="nascon-partners-heading">

          <div className="nascon-partners-heading-left">

            <p className="nascon-partners-label">
              TECHNOLOGY PARTNERS
            </p>

            <h2>
              Working With Industry Leaders
            </h2>

          </div>

          <p className="nascon-partners-heading-description">
            Select a technology partner to explore the solutions
            and products relevant to industrial automation,
            electrical control and system integration.
          </p>

        </div>


        {/* =================================================
            PARTNER CARDS
        ================================================= */}

        <div className="nascon-partners-grid">

          {partners.map((partner) => (

            <article
              className={`nascon-partner-card ${
                selectedPartner.slug === partner.slug
                  ? "selected"
                  : ""
              }`}
              key={partner.number}
              onClick={() => selectPartner(partner.slug)}
            >

              <div className="nascon-partner-card-header">

                <span className="nascon-partner-number">
                  {partner.number}
                </span>

                <div className="nascon-partner-icon">
                  {partner.icon}
                </div>

              </div>


              <div className="nascon-partner-card-content">

                <p className="nascon-partner-category">
                  {partner.category}
                </p>

                <h3>
                  {partner.name}
                </h3>

                <p className="nascon-partner-description">
                  {partner.shortDescription}
                </p>

              </div>


              <div className="nascon-partner-accent"></div>

            </article>

          ))}

        </div>


        {/* =================================================
            SELECTED PARTNER DETAILS
        ================================================= */}

        <section className="partner-details">

          <div className="partner-details-header">

            <div>

              <p className="nascon-partners-label">
                PARTNER DETAILS
              </p>

              <h2>
                {selectedPartner.name}
              </h2>

              <p className="partner-details-category">
                {selectedPartner.category}
              </p>

            </div>

            <div className="partner-details-number">
              {selectedPartner.number}
            </div>

          </div>


          <div className="partner-details-content">

            <div className="partner-details-description">

              <p>
                {selectedPartner.description}
              </p>

              <p>
                Nascon Technologies works with trusted technology
                partners to select, integrate and supply suitable
                solutions according to project and application
                requirements.
              </p>

            </div>


            <div className="partner-solutions">

              <p className="partner-solutions-title">
                KEY SOLUTIONS
              </p>

              <div className="partner-solutions-list">

                {selectedPartner.solutions.map(
                  (solution, index) => (

                    <div
                      className="partner-solution-item"
                      key={index}
                    >

                      <span className="solution-check">
                        ✓
                      </span>

                      <span>
                        {solution}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>


          {/* =================================================
              DETAIL CTA
          ================================================= */}

          <div className="partner-details-footer">

            <div>

              <strong>
                Need this technology for your project?
              </strong>

              <span>
                Talk to our team about your application.
              </span>

            </div>

            <Link
              to="/contact"
              className="partner-details-button"
            >
              Enquire Now
              <span>→</span>
            </Link>

          </div>

        </section>


        {/* =================================================
            SUPPLY NETWORK
        ================================================= */}

        <div className="supply-network">

          <div className="supply-heading">

            <p>
              WHY OUR SUPPLY NETWORK MATTERS
            </p>

            <h2>
              Trusted Brands.{" "}
              <span>Reliable Supply.</span>
            </h2>

            <span>
              Access trusted industrial automation, electrical
              control and cable solutions through a multi-brand
              supply network.
            </span>

          </div>


          <div className="supply-grid">

            <div className="supply-card">

              <div className="supply-icon">
                ✓
              </div>

              <div>

                <h3>
                  Genuine Products
                </h3>

                <p>
                  Genuine products from trusted brands.
                </p>

              </div>

            </div>


            <div className="supply-card">

              <div className="supply-icon">
                ◈
              </div>

              <div>

                <h3>
                  Multi-Brand Availability
                </h3>

                <p>
                  Multi-brand availability for integrated solutions.
                </p>

              </div>

            </div>


            <div className="supply-card">

              <div className="supply-icon">
                ⚙
              </div>

              <div>

                <h3>
                  Technical Selection Support
                </h3>

                <p>
                  Application-based technical selection support.
                </p>

              </div>

            </div>


            <div className="supply-card">

              <div className="supply-icon">
                ▣
              </div>

              <div>

                <h3>
                  Reliable Supply
                </h3>

                <p>
                  Reliable supply for projects, panels and
                  maintenance needs.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="nascon-partners-contact">

        <div className="nascon-partners-contact-inner">

          <div className="nascon-partners-contact-text">

            <p className="nascon-partners-label">
              THE RIGHT TECHNOLOGY FOR YOUR APPLICATION
            </p>

            <h2>
              Need the right industrial
              <br />
              solution for your project?
            </h2>

            <p>
              Talk to our team about your automation,
              electrical or control requirements.
            </p>

          </div>


          <Link
            to="/contact"
            className="nascon-partners-contact-button"
          >
            Talk to Our Team
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Partners;