import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-eyebrow">
            ABOUT NASCON TECHNOLOGIES
          </p>

          <h1>
            Engineering Smarter
            <br />
            Industrial Control.
          </h1>

          <h2>
            Delivering Reliable.
            <br />
            Driving Performance.
          </h2>

          <p className="about-hero-description">
            Since 2012, Nascon Technologies has been a trusted partner
            in Industrial Automation & Electrical Control Solutions.
            We design and build smart control panels, supply genuine
            industrial products from global brands and provide reliable
            system integration to help industries operate smarter,
            safer and more efficiently.
          </p>

          <div className="about-since">

            <div className="about-since-icon">
              ◫
            </div>

            <div>
              <strong>Serving Industries Since 2012</strong>

              <span>
                Experience. Expertise. Commitment.
              </span>
            </div>

          </div>

        </div>


        {/* =========================
            HERO IMAGE
        ========================= */}

        <div className="about-hero-visual">

          <div className="about-visual-glow"></div>

          <div className="about-image-wrapper">

            <picture>
              <source srcSet="/images/n.webp" type="image/webp" />
              <img
                src="/images/n.png"
                alt="Nascon Technologies industrial automation solutions"
                className="about-industrial-image"
                loading="lazy"
                decoding="async"
              />
            </picture>

            <div className="about-image-overlay"></div>

          </div>

        </div>

      </section>


      {/* =========================
          WHAT DEFINES US
      ========================= */}

      <section className="about-defines">

        <div className="about-section-heading">

          <p className="about-label">
            WHAT DEFINES US
          </p>

          <h2>
            Engineering.
            <br />
            Technology. Integration.
          </h2>

          <p>
            Our approach combines engineering expertise, trusted
            global products and seamless system integration to
            deliver dependable industrial solutions.
          </p>

        </div>


        <div className="about-defines-grid">

          {/* CARD 1 */}

          <article className="about-feature">

            <div className="about-feature-top">

              <div className="about-feature-icon">
                ◫
              </div>

              <span>
                01
              </span>

            </div>

            <h3>
              Engineered
              <br />
              for Industry
            </h3>

            <p>
              Smart, reliable and application-driven control panel
              solutions.
            </p>

            <ul>

              <li>
                Built with precision engineering.
              </li>

              <li>
                Quality components and best practices.
              </li>

              <li>
                Designed to ensure performance,
                safety and long-term reliability.
              </li>

            </ul>

          </article>


          {/* CARD 2 */}

          <article className="about-feature">

            <div className="about-feature-top">

              <div className="about-feature-icon">
                ◇
              </div>

              <span>
                02
              </span>

            </div>

            <h3>
              Powered by
              <br />
              Global Brands
            </h3>

            <p>
              Authorized product supply from leading global
              manufacturers.
            </p>

            <ul>

              <li>
                Wide range of industrial automation
                and electrical control products.
              </li>

              <li>
                Genuine products, on-time delivery
                and complete technical support.
              </li>

            </ul>

          </article>


          {/* CARD 3 */}

          <article className="about-feature">

            <div className="about-feature-top">

              <div className="about-feature-icon">
                ◎
              </div>

              <span>
                03
              </span>

            </div>

            <h3>
              Integration That
              <br />
              Delivers Value
            </h3>

            <p>
              Seamless system integration for maximum productivity.
            </p>

            <ul>

              <li>
                PLC, HMI, SCADA, VFD, IIoT and complete
                automation solutions.
              </li>

              <li>
                End-to-end support from concept
                to commissioning and beyond.
              </li>

            </ul>

          </article>

        </div>

      </section>


      {/* =====================================================
          VISION / MISSION / VALUES
      ===================================================== */}

      <section className="about-purpose">

        <div className="about-purpose-heading">

          <p className="about-label">
            OUR PURPOSE
          </p>

          <h2>
            Vision.
            <br />
            Mission. <span>Values.</span>
          </h2>

          <p>
            Our purpose drives our work.
            <br />
            Our values define who we are.
          </p>

        </div>


        <div className="about-purpose-grid">

          {/* =========================
              VISION
          ========================= */}

          <article className="purpose-card purpose-vision">

            <div className="purpose-card-top">

              <div className="purpose-icon">
                ◉
              </div>

              <span>
                01
              </span>

            </div>

            <p className="purpose-type">
              VISION
            </p>

            <h3>
              Building a stronger
              <br />
              industrial future.
            </h3>

            <p className="purpose-description">
              To be a strong industrial automation and
              electrical control solutions partner for
              modern industries.
            </p>

            <div className="purpose-decoration">
              ↑
            </div>

          </article>


          {/* =========================
              MISSION
          ========================= */}

          <article className="purpose-card purpose-mission">

            <div className="purpose-card-top">

              <div className="purpose-icon">
                ◎
              </div>

              <span>
                02
              </span>

            </div>

            <p className="purpose-type">
              MISSION
            </p>

            <h3>
              Reliable solutions.
              <br />
              Practical automation.
            </h3>

            <p className="purpose-description">
              To deliver reliable products, smart panels
              and practical automation support with
              quality, speed and technical commitment.
            </p>

            <div className="purpose-decoration">
              ⚙
            </div>

          </article>


          {/* =========================
              VALUES
          ========================= */}

          <article className="purpose-card purpose-values">

            <div className="purpose-card-top">

              <div className="purpose-icon">
                ◇
              </div>

              <span>
                03
              </span>

            </div>

            <p className="purpose-type">
              VALUES
            </p>

            <h3>
              Principles that
              <br />
              guide our work.
            </h3>


            <div className="values-list">

              <div className="value-item">

                <span>✓</span>

                <div>
                  <strong>QUALITY</strong>

                  <p>
                    We never compromise on quality.
                  </p>
                </div>

              </div>


              <div className="value-item">

                <span>✓</span>

                <div>
                  <strong>RELIABILITY</strong>

                  <p>
                    We deliver what we promise.
                  </p>
                </div>

              </div>


              <div className="value-item">

                <span>✓</span>

                <div>
                  <strong>TECHNICAL CLARITY</strong>

                  <p>
                    We believe in practical & simple engineering.
                  </p>
                </div>

              </div>


              <div className="value-item">

                <span>✓</span>

                <div>
                  <strong>CUSTOMER SUPPORT</strong>

                  <p>
                    We are with you, every step of the way.
                  </p>
                </div>

              </div>


              <div className="value-item">

                <span>✓</span>

                <div>
                  <strong>LONG-TERM COMMITMENT</strong>

                  <p>
                    We build relationships that last.
                  </p>
                </div>

              </div>

            </div>

          </article>

        </div>


        {/* =========================
            PURPOSE STRIP
        ========================= */}

        <div className="about-purpose-strip">

          <div>
            <strong>Guided by purpose.</strong>
            <span>Driven by values.</span>
            <strong>Committed to your success.</strong>
          </div>

          <div className="purpose-strip-items">

            <span>
              <b>2012</b>
              Since
            </span>

            <span>
              <b>FOCUS</b>
              On You
            </span>

            <span>
              <b>SMART</b>
              Solutions
            </span>

            <span>
              <b>SPEED</b>
              & Commitment
            </span>

            <span>
              <b>SAFETY</b>
              & Integrity
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          COMMITMENT / STATS
      ========================= */}

      <section className="about-commitment">

        <div className="about-commitment-inner">

          <p className="about-commitment-title">
            Our commitment is simple —
            <strong>
              deliver smart solutions that create real impact.
            </strong>
          </p>


          <div className="about-stats">

            <div className="about-stat">

              <strong>
                2012
              </strong>

              <span>
                Since
              </span>

              <p>
                Serving Industries
                <br />
                with Excellence
              </p>

            </div>


            <div className="about-stat">

              <strong>
                100+
              </strong>

              <span>
                Happy Clients
              </span>

              <p>
                Across
                <br />
                Industries
              </p>

            </div>


            <div className="about-stat">

              <strong>
                1000+
              </strong>

              <span>
                Control Panels
              </span>

              <p>
                Engineered &
                <br />
                Delivered
              </p>

            </div>


            <div className="about-stat">

              <strong>
                End-to-End
              </strong>

              <span>
                Solutions
              </span>

              <p>
                From Design
                <br />
                to Commissioning
              </p>

            </div>


            <div className="about-stat">

              <strong>
                Quality
              </strong>

              <span>
                Safety
              </span>

              <p>
                Reliability
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          EXPERIENCE
      ========================= */}

      <section className="about-experience">

        <div className="about-experience-content">

          <p className="about-label">
            OUR APPROACH
          </p>

          <h2>
            From Engineering
            <br />
            to Execution.
          </h2>

          <p>
            We combine industrial knowledge, engineering capabilities
            and proven automation technologies to create solutions
            that are practical, dependable and built for long-term
            performance.
          </p>


          <div className="about-process">

            <div>
              <span>01</span>

              <strong>Understand</strong>

              <p>
                Understand the application and industrial requirement.
              </p>
            </div>


            <div>
              <span>02</span>

              <strong>Engineer</strong>

              <p>
                Design the right control and automation solution.
              </p>
            </div>


            <div>
              <span>03</span>

              <strong>Integrate</strong>

              <p>
                Combine reliable products and complete systems.
              </p>
            </div>


            <div>
              <span>04</span>

              <strong>Deliver</strong>

              <p>
                Support the solution through commissioning and beyond.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="about-cta">

        <div>

          <p className="about-label">
            BUILDING BETTER INDUSTRIAL SOLUTIONS
          </p>

          <h2>
            Let's engineer the
            <br />
            right solution for you.
          </h2>

          <p>
            Talk to our team about your automation, electrical
            or industrial control requirements.
          </p>

          <Link to="/contact">
            Talk to Our Team
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;