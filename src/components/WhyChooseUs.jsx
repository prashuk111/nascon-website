import "./WhyChooseUs.css";

import {
  CalendarDays,
  Cpu,
  ShieldCheck,
  PanelTop,
  Network,
  Boxes,
  Factory,
  Handshake,
  Target,
  Gauge,
  ThumbsUp,
  Users,
} from "lucide-react";

function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Serving Industries Since 2012",
      description:
        "Over a decade of experience in industrial automation and electrical control solutions.",
      icon: CalendarDays,
    },
    {
      number: "02",
      title: "Strong Automation Expertise",
      description:
        "Deep technical knowledge across PLC, HMI, SCADA, drives and industrial control systems.",
      icon: Cpu,
    },
    {
      number: "03",
      title: "Reliable Industrial Product Portfolio",
      description:
        "Carefully selected industrial products from trusted technology brands for dependable performance.",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Smart Control Panel Solutions",
      description:
        "Engineered control panels designed around safety, performance and your operational requirements.",
      icon: PanelTop,
    },
    {
      number: "05",
      title: "Automation System Integration Support",
      description:
        "From concept to commissioning, we provide practical integration support for industrial systems.",
      icon: Network,
    },
    {
      number: "06",
      title: "Multi-Brand Product Capability",
      description:
        "Access to multiple trusted technology brands to deliver the right solution for every application.",
      icon: Boxes,
    },
    {
      number: "07",
      title: "Industry-Focused Approach",
      description:
        "We understand industrial challenges and deliver practical, application-driven solutions.",
      icon: Factory,
    },
    {
      number: "08",
      title: "End-to-End Solution Support",
      description:
        "From requirement analysis and engineering to commissioning and after-sales support.",
      icon: Handshake,
    },
  ];

  const commitments = [
    {
      title: "Reliable Products",
      icon: ShieldCheck,
    },
    {
      title: "Smart Solutions",
      icon: Cpu,
    },
    {
      title: "Practical Approach",
      icon: Target,
    },
    {
      title: "Long-Term Partnership",
      icon: Users,
    },
  ];

  return (
    <section className="why-section" id="why-choose-us">

      {/* Background decoration */}
      <div className="why-grid"></div>

      <div className="why-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="why-header">

          <div className="why-eyebrow">
            <span></span>
            WHY CHOOSE NASCON
          </div>

          <h2>
            Why Choose{" "}
            <span>NASCON TECHNOLOGIES?</span>
          </h2>

          <p>
            We combine strong engineering, carefully selected products and
            practical integration support to deliver smart, reliable and
            future-ready industrial automation solutions.
          </p>

        </div>


        {/* =========================
            REASONS GRID
        ========================= */}

        <div className="why-reasons">

          {reasons.map((reason) => {

            const Icon = reason.icon;

            return (
              <div className="why-card" key={reason.number}>

                <div className="why-card-top">

                  <span className="why-number">
                    {reason.number}
                  </span>

                  <div className="why-icon">
                    <Icon size={30} strokeWidth={1.7} />
                  </div>

                </div>

                <div className="why-card-content">

                  <h3>
                    {reason.title}
                  </h3>

                  <div className="why-card-line"></div>

                  <p>
                    {reason.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>


        {/* =========================
            COMMITMENT BANNER
        ========================= */}

        <div className="why-commitment">

          <div className="commitment-main">

            <div className="commitment-target">
              <Target size={38} strokeWidth={1.5} />
            </div>

            <div>
              <span>OUR COMMITMENT</span>

              <h3>
                Deliver Smart Solutions.
                <br />
                <strong>Create Real Impact.</strong>
              </h3>
            </div>

          </div>


          <div className="commitment-items">

            {commitments.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="commitment-item"
                  key={item.title}
                >
                  <Icon size={25} strokeWidth={1.6} />

                  <span>
                    {item.title}
                  </span>
                </div>
              );

            })}

          </div>

        </div>


        {/* =========================
            COMPANY STATS
        ========================= */}

        <div className="why-stats">

          <div className="why-stat">
            <CalendarDays size={28} />
            <div>
              <strong>2012</strong>
              <span>Serving Industries Since</span>
            </div>
          </div>

          <div className="why-stat">
            <Users size={28} />
            <div>
              <strong>100+</strong>
              <span>Clients Across Industries</span>
            </div>
          </div>

          <div className="why-stat">
            <PanelTop size={28} />
            <div>
              <strong>1000+</strong>
              <span>Control Panels Delivered</span>
            </div>
          </div>

          <div className="why-stat">
            <Gauge size={28} />
            <div>
              <strong>End-to-End</strong>
              <span>Engineering &amp; Support</span>
            </div>
          </div>

          <div className="why-stat">
            <ThumbsUp size={28} />
            <div>
              <strong>Quality</strong>
              <span>Safety &amp; Reliability</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;