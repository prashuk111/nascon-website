import "./ProjectExecutionFlow.css";

import {
    ClipboardCheck,
    MessageCircle,
    ShoppingCart,
    MonitorCog,
    Factory,
    Code2,
    ShieldCheck,
    Truck,
    Headphones,
} from "lucide-react";

const projectSteps = [
    {
        number: "01",
        title: "Requirement Understanding",
        description: "Understand application, process and objectives.",
        icon: ClipboardCheck,
        color: "blue",
    },
    {
        number: "02",
        title: "Technical Discussion",
        description: "Align technical needs and solution direction.",
        icon: MessageCircle,
        color: "green",
    },
    {
        number: "03",
        title: "Product Selection",
        description: "Choose the right products and architecture.",
        icon: ShoppingCart,
        color: "blue",
    },
    {
        number: "04",
        title: "Design & Engineering",
        description: "Prepare panel and automation engineering details.",
        icon: MonitorCog,
        color: "green",
    },
    {
        number: "05",
        title: "Panel Manufacturing",
        description: "Build quality control panels with precision.",
        icon: Factory,
        color: "blue",
    },
    {
        number: "06",
        title: "Programming & Integration",
        description: "Configure PLC, HMI, VFD and related systems.",
        icon: Code2,
        color: "green",
    },
    {
        number: "07",
        title: "Testing & Validation",
        description: "Verify safety, performance and functionality.",
        icon: ShieldCheck,
        color: "blue",
    },
    {
        number: "08",
        title: "Dispatch / Installation Support",
        description: "Ensure organized delivery and site support.",
        icon: Truck,
        color: "green",
    },
    {
        number: "09",
        title: "Commissioning & Support",
        description: "Assist startup, commissioning and operational handover.",
        icon: Headphones,
        color: "blue",
    },
];

function ProjectExecutionFlow() {
    return (
        <section className="project-flow-section">

            <div className="project-flow-container">

                {/* HEADER */}
                <div className="project-flow-header">
                    <span className="project-flow-eyebrow">
                        OUR PROCESS
                    </span>

                    <h2>
                        Project <span>Execution Flow</span>
                    </h2>

                    <p>
                        A structured approach that transforms requirements
                        into reliable industrial automation solutions.
                    </p>
                </div>


                {/* =========================
                    FIRST ROW - 01 TO 05
                ========================= */}

                <div className="project-flow-row project-flow-row-five">

                    {projectSteps.slice(0, 5).map((step, index) => {

                        const Icon = step.icon;

                        return (
                            <div
                                className="project-flow-item"
                                key={step.number}
                            >

                                <div
                                    className={`project-flow-card ${step.color}`}
                                >

                                    {/* STEP NUMBER */}
                                    <div className="project-flow-number">
                                        {step.number}
                                    </div>


                                    {/* ICON */}
                                    <div className="project-flow-icon">
                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                        />
                                    </div>


                                    {/* CONTENT */}
                                    <div className="project-flow-content">

                                        <h3>
                                            {step.title}
                                        </h3>

                                        <div className="project-flow-divider"></div>

                                        <p>
                                            {step.description}
                                        </p>

                                    </div>

                                </div>


                                {/* ARROW */}
                                {index < 4 && (
                                    <div className="project-flow-arrow">
                                        <span>→</span>
                                    </div>
                                )}

                            </div>
                        );
                    })}

                </div>


                {/* =========================
                    SECOND ROW - 06 TO 09
                ========================= */}

                <div className="project-flow-row project-flow-row-four">

                    {projectSteps.slice(5).map((step, index) => {

                        const Icon = step.icon;

                        return (
                            <div
                                className="project-flow-item"
                                key={step.number}
                            >

                                <div
                                    className={`project-flow-card ${step.color}`}
                                >

                                    {/* STEP NUMBER */}
                                    <div className="project-flow-number">
                                        {step.number}
                                    </div>


                                    {/* ICON */}
                                    <div className="project-flow-icon">
                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                        />
                                    </div>


                                    {/* CONTENT */}
                                    <div className="project-flow-content">

                                        <h3>
                                            {step.title}
                                        </h3>

                                        <div className="project-flow-divider"></div>

                                        <p>
                                            {step.description}
                                        </p>

                                    </div>

                                </div>


                                {/* ARROW */}
                                {index < 3 && (
                                    <div className="project-flow-arrow">
                                        <span>→</span>
                                    </div>
                                )}

                            </div>
                        );
                    })}

                </div>


                {/* =========================
                    BOTTOM HIGHLIGHTS
                ========================= */}

                <div className="project-flow-highlights">

                    <div className="project-flow-highlight">

                        <div className="highlight-icon blue">
                            <ClipboardCheck size={21} />
                        </div>

                        <div>
                            <h4>Clarity</h4>
                            <p>
                                Clear communication at every stage.
                            </p>
                        </div>

                    </div>


                    <div className="project-flow-highlight">

                        <div className="highlight-icon green">
                            <ShieldCheck size={21} />
                        </div>

                        <div>
                            <h4>Quality</h4>
                            <p>
                                Engineered solutions built to standards.
                            </p>
                        </div>

                    </div>


                    <div className="project-flow-highlight">

                        <div className="highlight-icon blue">
                            <Factory size={21} />
                        </div>

                        <div>
                            <h4>Timely Execution</h4>
                            <p>
                                Structured process for efficient delivery.
                            </p>
                        </div>

                    </div>


                    <div className="project-flow-highlight">

                        <div className="highlight-icon green">
                            <Headphones size={21} />
                        </div>

                        <div>
                            <h4>Technical Support</h4>
                            <p>
                                Expert assistance before and after delivery.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProjectExecutionFlow;