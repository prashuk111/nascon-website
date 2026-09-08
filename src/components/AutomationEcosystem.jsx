import "./AutomationEcosystem.css";

import {
    Cloud,
    ShieldCheck,
    Network,
    BarChart3,
    Headset,
} from "lucide-react";

function AutomationEcosystem() {

    const ecosystemItems = [
        {
            number: "01",
            title: "Field Devices",
            description: "Sensors, transmitters and process inputs.",
            image: "/images/ecosystem/01-field-devices.png",
            imageWebp: "/images/ecosystem/01-field-devices.webp",
        },
        {
            number: "02",
            title: "Control Panel",
            description: "Centralized electrical and control architecture.",
            image: "/images/ecosystem/02-control-panel.png",
            imageWebp: "/images/ecosystem/02-control-panel.webp",
        },
        {
            number: "03",
            title: "PLC / VFD",
            description: "Logic control and drive regulation.",
            image: "/images/ecosystem/03-plc-vfd.png",
            imageWebp: "/images/ecosystem/03-plc-vfd.webp",
        },
        {
            number: "04",
            title: "HMI / SCADA",
            description: "Visualization, monitoring and control.",
            image: "/images/ecosystem/04-hmi-scada.png",
            imageWebp: "/images/ecosystem/04-hmi-scada.webp",
        },
        {
            number: "05",
            title: "IoT / Remote Monitoring",
            description: "Remote visibility, alerts and analytics.",
            image: "/images/ecosystem/05-iot-remote.png",
            imageWebp: "/images/ecosystem/05-iot-remote.webp",
        },
        {
            number: "06",
            title: "Industrial Operations",
            description: "Smarter, safer and efficient plant performance.",
            image: "/images/ecosystem/06-industrial-operations.png",
            imageWebp: "/images/ecosystem/06-industrial-operations.webp",
        },
    ];

    const benefits = [
        {
            title: "End-to-End Integration",
            description: "Seamless connectivity across every layer.",
            icon: Network,
        },
        {
            title: "Reliable & Scalable",
            description: "Built for performance and future growth.",
            icon: ShieldCheck,
        },
        {
            title: "Secure & Connected",
            description: "Robust data security with remote access.",
            icon: Cloud,
        },
        {
            title: "Actionable Insights",
            description: "Data-driven decisions for higher efficiency.",
            icon: BarChart3,
        },
        {
            title: "Expert Support Every Step",
            description: "From design to commissioning and beyond.",
            icon: Headset,
        },
    ];

    return (
        <section
            className="automation-ecosystem"
            id="automation-ecosystem"
        >

            {/* =========================
                HEADING
            ========================= */}

            <div className="ecosystem-heading">

                <p>COMPLETE AUTOMATION ECOSYSTEM</p>

                <h2>
                    From Field Devices to
                    <span> Intelligent Operations.</span>
                </h2>

                <div className="ecosystem-line"></div>

                <span>
                    From field-level sensing to intelligent industrial operations —
                    connected through reliable control, visualization and remote
                    monitoring.
                </span>

            </div>


            {/* =========================
                ECOSYSTEM FLOW
            ========================= */}

            <div className="ecosystem-flow">

                {ecosystemItems.map((item, index) => {
                    return (
                        <div
                            className="ecosystem-item"
                            key={item.number}
                        >

                            <div className="ecosystem-number">
                                {item.number}
                            </div>

                            <h3>{item.title}</h3>

                            <div className="ecosystem-image-box">
                                <picture>
                                    <source srcSet={item.imageWebp} type="image/webp" />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="ecosystem-card-img"
                                        loading="lazy"
                                        width="130"
                                        height="115"
                                    />
                                </picture>
                            </div>

                            <p>{item.description}</p>

                            {index !== ecosystemItems.length - 1 && (
                                <div className="ecosystem-arrow">
                                    →
                                </div>
                            )}

                        </div>
                    );

                })}

            </div>


            {/* =========================
                CENTER SYSTEM
            ========================= */}



            {/* =========================
                BENEFITS
            ========================= */}

            <div className="ecosystem-benefits">

                {benefits.map((benefit) => {

                    const Icon = benefit.icon;

                    return (
                        <div
                            className="ecosystem-benefit"
                            key={benefit.title}
                        >

                            <div className="benefit-icon">

                                <Icon
                                    size={27}
                                    strokeWidth={1.7}
                                />

                            </div>

                            <div>

                                <h3>{benefit.title}</h3>

                                <p>{benefit.description}</p>

                            </div>

                        </div>
                    );

                })}

            </div>

        </section>
    );
}

export default AutomationEcosystem;