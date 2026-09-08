import "./QualitySupport.css";

import {
    ClipboardCheck,
    Cable,
    ShieldCheck,
    Activity,
    MonitorCheck,
    FileCheck,
    Truck,
    Headphones,
    Wrench,
    Settings,
    PackageCheck,
    UsersRound,
} from "lucide-react";

function QualitySupport() {
    const qualityItems = [
        {
            number: "01",
            title: "Panel Inspection",
            image: {
                webp: "/images/quality-support/q-01-panel-inspection.webp",
                png: "/images/quality-support/q-01-panel-inspection.png",
                alt: "Panel Inspection and Enclosure Verification",
            },
            points: [
                "Enclosure & component fitment check",
                "Mounting, alignment & labeling verification",
                "Build quality verification",
            ],
            icon: ClipboardCheck,
        },
        {
            number: "02",
            title: "Wiring Quality Check",
            image: {
                webp: "/images/quality-support/q-02-wiring-check.webp",
                png: "/images/quality-support/q-02-wiring-check.png",
                alt: "Wiring Quality Check and Routing",
            },
            points: [
                "Neat & proper wiring as per drawings",
                "Ferrule, tagging & numbering check",
                "Harness & cable routing verification",
            ],
            icon: Cable,
        },
        {
            number: "03",
            title: "Component Verification",
            image: {
                webp: "/images/quality-support/q-03-component-verification.webp",
                png: "/images/quality-support/q-03-component-verification.png",
                alt: "Component Make and Model Verification",
            },
            points: [
                "Make, model & rating verification",
                "Tightening & torque check",
                "Accessories & spares verification",
            ],
            icon: ShieldCheck,
        },
        {
            number: "04",
            title: "Functional Testing",
            image: {
                webp: "/images/quality-support/q-04-functional-testing.webp",
                png: "/images/quality-support/q-04-functional-testing.png",
                alt: "Control Logic and Functional Testing",
            },
            points: [
                "Control logic & interlock verification",
                "Input / Output functional check",
                "Sequence & operation validation",
            ],
            icon: Activity,
        },
        {
            number: "05",
            title: "PLC / HMI / VFD Testing",
            image: {
                webp: "/images/quality-support/q-05-plc-hmi-testing.webp",
                png: "/images/quality-support/q-05-plc-hmi-testing.png",
                alt: "PLC HMI VFD Testing and Verification",
            },
            points: [
                "PLC program download & test",
                "HMI screen & communication test",
                "VFD parameter check & motor run test",
            ],
            icon: MonitorCheck,
        },
        {
            number: "06",
            title: "Safety Checks",
            image: {
                webp: "/images/quality-support/q-06-safety-checks.webp",
                png: "/images/quality-support/q-06-safety-checks.png",
                alt: "Earth Continuity and Safety Checks",
            },
            points: [
                "Earth continuity & insulation test",
                "Short circuit & protection check",
                "Safety labels & warning verification",
            ],
            icon: ShieldCheck,
        },
        {
            number: "07",
            title: "Dispatch Readiness",
            image: {
                webp: "/images/quality-support/q-07-dispatch-readiness.webp",
                png: "/images/quality-support/q-07-dispatch-readiness.png",
                alt: "Final Visual and Dispatch Readiness",
            },
            points: [
                "Final visual & functional approval",
                "Packing quality & protection check",
                "Documentation & accessories check",
            ],
            icon: Truck,
        },
        {
            number: "08",
            title: "Documentation Support",
            image: {
                webp: "/images/quality-support/q-08-documentation-support.webp",
                png: "/images/quality-support/q-08-documentation-support.png",
                alt: "Documentation Support and Engineering Manuals",
            },
            points: [
                "GA drawings & circuit diagrams",
                "Test reports & checklist",
                "Manuals, datasheets & BOM",
            ],
            icon: FileCheck,
        },
    ];

    const supportItems = [
        {
            number: "01",
            title: "Product Selection Support",
            image: {
                webp: "/images/quality-support/s-01-product-selection.webp",
                png: "/images/quality-support/s-01-product-selection.png",
                alt: "Product Selection Support",
            },
            points: [
                "Expert guidance for the right product selection",
                "Application-based recommendations",
                "Cost-effective & reliable solutions",
            ],
            icon: Settings,
        },
        {
            number: "02",
            title: "Panel Troubleshooting",
            image: {
                webp: "/images/quality-support/s-02-panel-troubleshooting.webp",
                png: "/images/quality-support/s-02-panel-troubleshooting.png",
                alt: "Panel Troubleshooting and Diagnostics",
            },
            points: [
                "Remote and on-site troubleshooting",
                "Fault analysis & solution support",
                "Minimize downtime & maximize efficiency",
            ],
            icon: Wrench,
        },
        {
            number: "03",
            title: "PLC / HMI / VFD Technical Assistance",
            image: {
                webp: "/images/quality-support/s-03-plc-technical-assistance.webp",
                png: "/images/quality-support/s-03-plc-technical-assistance.png",
                alt: "PLC HMI VFD Technical Assistance",
            },
            points: [
                "PLC programming & logic support",
                "HMI screen & communication support",
                "VFD parameter & application support",
            ],
            icon: MonitorCheck,
        },
        {
            number: "04",
            title: "Spare Product Availability",
            image: {
                webp: "/images/quality-support/s-04-spare-product-availability.webp",
                png: "/images/quality-support/s-04-spare-product-availability.png",
                alt: "Genuine Spare Product Availability",
            },
            points: [
                "Genuine products from trusted brands",
                "Wide range of spares readily available",
                "Quick dispatch to reduce downtime",
            ],
            icon: PackageCheck,
        },
        {
            number: "05",
            title: "Commissioning Guidance",
            image: {
                webp: "/images/quality-support/s-05-commissioning-guidance.webp",
                png: "/images/quality-support/s-05-commissioning-guidance.png",
                alt: "On-site Commissioning Guidance and Support",
            },
            points: [
                "On-site commissioning support",
                "System testing & start-up assistance",
                "Smooth handover & operator training",
            ],
            icon: Settings,
        },
        {
            number: "06",
            title: "Long-Term Customer Support",
            image: {
                webp: "/images/quality-support/s-06-customer-support.webp",
                png: "/images/quality-support/s-06-customer-support.png",
                alt: "Dedicated Customer Support Team",
            },
            points: [
                "Dedicated support team",
                "Continuous follow-up and assistance",
                "Building long-term partnerships",
            ],
            icon: UsersRound,
        },
    ];

    return (
        <section className="quality-support">

            {/* =========================
          QUALITY SECTION
      ========================= */}

            <div className="quality-section">

                <div className="quality-header">

                    <p className="quality-eyebrow">
                        QUALITY &amp; COMPLIANCE
                    </p>

                    <h2>
                        Quality, Testing &amp;
                        <span> Compliance</span>
                    </h2>

                    <p>
                        Every panel. Every test. Zero compromise.
                    </p>

                    <div className="quality-header-line"></div>

                    <span>
                        Quality is embedded in every step of our process, from
                        component verification to final functional testing.
                    </span>

                </div>

                <div className="section-process-banner">
                    <span className="banner-chevron-left"></span>
                    <span className="banner-title">OUR TESTING &amp; QUALITY ASSURANCE PROCESS</span>
                    <span className="banner-chevron-right"></span>
                </div>

                <div className="quality-grid">

                    {qualityItems.map((item) => {

                        const Icon = item.icon;

                        return (
                            <div
                                className="quality-card"
                                key={item.number}
                            >

                                <div className="quality-card-top">

                                    <div className="quality-header-badge">
                                        <div className="quality-icon">
                                            <Icon size={18} strokeWidth={2.2} />
                                        </div>
                                        <span className="quality-number">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h3 className="quality-card-title">{item.title}</h3>

                                </div>

                                <div className="quality-image-wrapper">
                                    <picture>
                                        <source srcSet={item.image.webp} type="image/webp" />
                                        <img
                                            src={item.image.png}
                                            alt={item.image.alt}
                                            loading="lazy"
                                            className="quality-card-image"
                                        />
                                    </picture>
                                </div>

                                <ul className="quality-points-list">
                                    {item.points.map((pt, idx) => (
                                        <li key={idx}>
                                            <span className="quality-point-dot"></span>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        );

                    })}

                </div>


                <div className="quality-commitment">

                    <div>
                        <ShieldCheck size={28} />
                        <strong>Quality Assured</strong>
                        <span>Built as per Industry standards and customer specifications.</span>
                    </div>

                    <div>
                        <Activity size={28} />
                        <strong>Reliable Performance</strong>
                        <span>High quality components ensure long life and consistent performance.</span>
                    </div>

                    <div>
                        <ClipboardCheck size={28} />
                        <strong>Tested for Performance</strong>
                        <span>100% electrical &amp; functional testing before dispatch.</span>
                    </div>

                    <div>
                        <ShieldCheck size={28} />
                        <strong>Safety First</strong>
                        <span>Every panel is built with safety, protection and compliance.</span>
                    </div>

                    <div>
                        <PackageCheck size={28} />
                        <strong>Customer Trust</strong>
                        <span>On-time delivery with complete quality and support.</span>
                    </div>

                </div>

            </div>


            {/* =========================
          SUPPORT SECTION
      ========================= */}

            <div className="support-section">

                <div className="support-header">

                    <p className="support-eyebrow">
                        CUSTOMER SUPPORT
                    </p>

                    <h2>
                        After Sales &amp;
                        <span> Technical Support</span>
                    </h2>

                    <p>
                        Reliable Support. Quick Response.
                        Maximum Uptime.
                    </p>

                    <div className="support-header-line"></div>

                    <span>
                        Our relationship doesn't end with delivery. We provide
                        continuous support to help your systems run smoothly,
                        efficiently and without interruption.
                    </span>

                </div>

                <div className="section-process-banner support-process-banner">
                    <span className="banner-chevron-left"></span>
                    <span className="banner-title">OUR AFTER SALES &amp; TECHNICAL SUPPORT SERVICES</span>
                    <span className="banner-chevron-right"></span>
                </div>

                <div className="support-grid">

                    {supportItems.map((item) => {

                        const Icon = item.icon;

                        return (
                            <div
                                className="support-card"
                                key={item.number}
                            >

                                <div className="support-card-top">

                                    <div className="support-title-group">
                                        <span className="support-number-pill">
                                            {item.number}
                                        </span>
                                        <h3 className="support-card-title">{item.title}</h3>
                                    </div>

                                    <div className="support-icon">
                                        <Icon size={18} strokeWidth={2} />
                                    </div>

                                </div>

                                <div className="support-card-body">

                                    <ul className="support-points-list">
                                        {item.points.map((pt, idx) => (
                                            <li key={idx}>
                                                <span className="support-point-bullet">•</span>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="support-image-wrapper">
                                        <picture>
                                            <source srcSet={item.image.webp} type="image/webp" />
                                            <img
                                                src={item.image.png}
                                                alt={item.image.alt}
                                                loading="lazy"
                                                className="support-card-image"
                                            />
                                        </picture>
                                    </div>

                                </div>

                            </div>
                        );

                    })}

                </div>


                <div className="support-bottom">

                    <div className="support-bottom-item">
                        <Headphones size={30} />
                        <div>
                            <strong>We Are Always Here To Support You</strong>
                            <span>Quick response and expert engineering solutions.</span>
                        </div>
                    </div>

                    <div className="support-bottom-item">
                        <ShieldCheck size={30} />
                        <div>
                            <strong>Reliable Support</strong>
                            <span>Maximum uptime and dependable technical assistance.</span>
                        </div>
                    </div>

                    <div className="support-bottom-item">
                        <UsersRound size={30} />
                        <div>
                            <strong>Long-Term Partnership</strong>
                            <span>Continuous technical support beyond delivery.</span>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default QualitySupport;