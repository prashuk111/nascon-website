import "./EngineeringCapabilities.css";

import {
    MonitorCog,
    Cpu,
    Cable,
    Settings2,
    ClipboardCheck,
    Factory,
    ShieldCheck,
    Clock3,
    Headset,
    Globe2,
} from "lucide-react";

function EngineeringCapabilities() {
    const capabilities = [
        {
            number: "01",
            title: "Panel Design & Engineering",
            description:
                "Advanced CAD design and detailed electrical drawings for accurate and efficient panel engineering.",
            icon: MonitorCog,
        },
        {
            number: "02",
            title: "Component Selection",
            description:
                "Careful selection of high-quality components from trusted global brands for maximum reliability.",
            icon: Cpu,
        },
        {
            number: "03",
            title: "Wiring & Assembly",
            description:
                "Professional wiring, neat assembly and strict adherence to industry standards.",
            icon: Cable,
        },
        {
            number: "04",
            title: "PLC / HMI / VFD / SCADA Integration",
            description:
                "Seamless integration of PLC, HMI, VFD and SCADA systems for intelligent process control.",
            icon: Settings2,
        },
        {
            number: "05",
            title: "Testing & Validation",
            description:
                "Rigorous testing at every stage to ensure safety, performance and trouble-free operation.",
            icon: ClipboardCheck,
        },
        {
            number: "06",
            title: "Custom-Built Solutions",
            description:
                "Tailor-made panels built to meet unique process requirements and operational needs.",
            icon: Factory,
        },
    ];

    const assurances = [
        {
            title: "Global Quality Components",
            icon: Globe2,
        },
        {
            title: "IEC Compliant Design",
            icon: ShieldCheck,
        },
        {
            title: "Built for Safety & Reliability",
            icon: ShieldCheck,
        },
        {
            title: "On-Time Delivery Assurance",
            icon: Clock3,
        },
        {
            title: "Expert Technical Support",
            icon: Headset,
        },
    ];

    return (
        <section className="engineering-capabilities">

            {/* =========================
          HEADING
      ========================= */}

            <div className="engineering-heading">
                <p>ENGINEERED FOR INDUSTRIAL PERFORMANCE</p>

                <h2>
                    Our Engineering <span>Capabilities</span>
                </h2>

                <div className="engineering-heading-line"></div>

                <span>
                    Precision in design, excellence in execution and reliable
                    engineering solutions built for demanding industrial applications.
                </span>
            </div>


            {/* =========================
          CAPABILITIES
      ========================= */}

            <div className="capabilities-grid">

                {capabilities.map((capability) => {
                    const Icon = capability.icon;

                    return (
                        <div
                            className="capability-card"
                            key={capability.number}
                        >

                            <div className="capability-top">

                                <div className="capability-number">
                                    {capability.number}
                                </div>

                                <div className="capability-icon">
                                    <Icon
                                        size={30}
                                        strokeWidth={1.7}
                                    />
                                </div>

                            </div>

                            <h3>
                                {capability.title}
                            </h3>

                            <div className="capability-divider"></div>

                            <p>
                                {capability.description}
                            </p>

                        </div>
                    );
                })}

            </div>


            {/* =========================
          BOTTOM MESSAGE
      ========================= */}

            <div className="engineering-message">

                <div className="engineering-message-item">

                    <ShieldCheck size={34} strokeWidth={1.6} />

                    <div>
                        <strong>ENGINEERED PRECISELY</strong>
                        <span>BUILT RELIABLY</span>
                    </div>

                </div>


                <div className="engineering-message-arrow">
                    »»
                </div>


                <div className="engineering-message-item">

                    <ShieldCheck size={34} strokeWidth={1.6} />

                    <div>
                        <strong>DELIVERED CONFIDENTLY</strong>
                        <span>PERFORMANCE ASSURED</span>
                    </div>

                </div>

            </div>


            {/* =========================
          ASSURANCE BAR
      ========================= */}

            <div className="engineering-assurances">

                {assurances.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            className="engineering-assurance"
                            key={item.title}
                        >

                            <Icon
                                size={27}
                                strokeWidth={1.6}
                            />

                            <span>
                                {item.title}
                            </span>

                        </div>
                    );
                })}

            </div>

        </section>
    );
}

export default EngineeringCapabilities;