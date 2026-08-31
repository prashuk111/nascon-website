import "./WhyChooseUs.css";

function WhyChooseUs() {
  const reasonsLeft = [
    "Strong Automation Expertise",
    "Reliable Product Portfolio",
    "Smart Control Panel Solutions",
    "Multi-Brand Product Capability",
  ];

  const reasonsRight = [
    "Industry-Focused Approach",
    "End-to-End Solution Support",
    "On-Time Delivery Commitment",
    "Customer Satisfaction First",
  ];

  return (
    <section className="why-section">

      <div className="why-content">

        <h2>WHY CHOOSE NASCON TECHNOLOGIES?</h2>

        <div className="reasons">

          <div className="reason-column">
            {reasonsLeft.map((reason) => (
              <div className="reason" key={reason}>
                <span>✓</span>
                <p>{reason}</p>
              </div>
            ))}
          </div>

          <div className="reason-column">
            {reasonsRight.map((reason) => (
              <div className="reason" key={reason}>
                <span>✓</span>
                <p>{reason}</p>
              </div>
            ))}
          </div>

        </div>

      </div>


      <div className="why-cta">

        <div className="handshake">
          🤝
        </div>

        <div>
          <h3>
            LET'S BUILD
            <br />
            SMARTER INDUSTRIAL
            <br />
            CONTROL TOGETHER.
          </h3>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;