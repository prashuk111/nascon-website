// ============================================================================
// NASCON TECHNOLOGIES - INDUSTRIAL INTEGRATION SERVICES DATASET
// Reference: NASCON Technologies 32-Page Industrial Brochure (Pages 29-31)
// 1. PLC, HMI & SCADA Integration (Page 29)
// 2. VFD, Drives & Motor Control Solutions (Page 30)
// 3. MCC, PCC, APFC & RTU Panel Engineering (Page 31)
// ============================================================================

export const integrationsData = [
  // --------------------------------------------------------------------------
  // 1. PLC, HMI & SCADA INTEGRATION (Brochure Page 29)
  // --------------------------------------------------------------------------
  {
    slug: "plc-hmi-scada",
    number: "01",
    name: "PLC, HMI & SCADA Integration",
    shortName: "PLC, HMI & SCADA",
    category: "Automation & Supervisory Control",
    logo: "/images/Nascon.png",
    logoWebp: "/images/Nascon.webp",
    heroImage: "/images/integrations/plc-hmi-scada/hero.png",
    heroImageWebp: "/images/integrations/plc-hmi-scada/hero.webp",
    eyebrow: "SMART INDUSTRIAL AUTOMATION & INTEGRATION",
    headline: "PLC, HMI & SCADA Integration",
    tagline: "CONNECT. CONTROL. VISUALIZE. AUTOMATE SMARTER.",
    overview:
      "We deliver seamless PLC, HMI & SCADA integration solutions that turn data into intelligence and operations into excellence across industrial manufacturing, water treatment, utilities, and process lines.",
    brochurePage: "Page 29",
    supportedBrands: ["SIEMENS", "Schneider Electric", "Allen-Bradley", "MITSUBISHI ELECTRIC"],
    badgeText: "SMART INTEGRATION",
    badgeSubtext: "BETTER DECISIONS",
    guarantees: [
      "Multi-Brand PLC/SCADA Certified",
      "Field Proven Architecture",
      "Comprehensive Commissioning",
    ],
    keyThemes: [
      {
        label: "Seamless Integration",
        desc: "Unified multi-vendor PLC, HMI, and supervisory networking on Profinet, Ethernet/IP, and Modbus TCP.",
      },
      {
        label: "Real-Time Visibility",
        desc: "Millisecond-level telemetry, animated mimics, and instantaneous alarm propagation across the plant.",
      },
      {
        label: "Improved Productivity",
        desc: "Automated sequence routines, deterministic control logic, and optimized machine cycle times.",
      },
      {
        label: "Data Driven Decisions",
        desc: "Granular historical logging, SQL database logging, recipe validation, and executive KPI reporting.",
      },
      {
        label: "Secure & Reliable",
        desc: "Hardened industrial cybersecurity, role-based operator access, and fail-safe interlocking.",
      },
    ],
    gridEyebrow: "BROCHURE CAPABILITIES",
    gridTitle: "PLC, HMI & SCADA Integration Capabilities",
    gridSubtitle:
      "Engineered software architecture, visualization screens, and on-site commissioning services delivered by experienced automation professionals.",
    categoryLabel: "Capability Areas",
    categories: [
      {
        id: "plc-programming",
        number: "01",
        title: "PLC Programming",
        subtitle: "Deterministic Logic & Multi-Platform Programming",
        image: "/images/integrations/plc-hmi-scada/plc-programming.png",
        webpImage: "/images/integrations/plc-hmi-scada/plc-programming.webp",
        shortDescription:
          "Modular, robust, and scalable PLC software engineered in accordance with IEC 61131-3 standards across leading global brands.",
        features: [
          "Ladder (LD), Function Block (FBD), Structured Text (SCL/ST)",
          "Modular, scalable & standardized program architecture",
          "Optimized, fail-safe & reliable logic solutions",
          "Thorough pre-commissioning testing, simulation & debugging",
        ],
        applications: [
          "Continuous process control and chemical dosing",
          "High-speed automated packaging machines",
          "Assembly line interlocking and conveyor sorting",
          "Water treatment plant multi-pump sequencing",
        ],
      },
      {
        id: "hmi-screen-development",
        number: "02",
        title: "HMI Screen Development",
        subtitle: "Ergonomic Touchscreen & Operator Interface Design",
        image: "/images/integrations/plc-hmi-scada/hmi-screen-development.png",
        webpImage: "/images/integrations/plc-hmi-scada/hmi-screen-development.webp",
        shortDescription:
          "Custom intuitive operator interfaces with rich vector graphics, clear navigation, and real-time process status displays.",
        features: [
          "Custom & user-friendly touchscreen interfaces",
          "Vector graphics, dynamic animations & fluid screen navigation",
          "Multi-language support for regional operator convenience",
          "Live real-time data, setpoint adjustments & status displays",
        ],
        applications: [
          "Machine-mounted operator control consoles",
          "OEM machine automation interfaces",
          "Batch preparation and mixing consoles",
          "Local pump station monitoring touchscreens",
        ],
      },
      {
        id: "scada-visualization",
        number: "03",
        title: "SCADA Visualization",
        subtitle: "Plant-Wide Supervisory Monitoring & Mimic Dashboards",
        image: "/images/integrations/plc-hmi-scada/scada-visualization.png",
        webpImage: "/images/integrations/plc-hmi-scada/scada-visualization.webp",
        shortDescription:
          "High-performance centralized supervisory control and data acquisition systems featuring comprehensive plant overview mimics.",
        features: [
          "Intuitive & powerful central plant visualization",
          "Comprehensive plant overview & interactive drill-down pages",
          "Extensive industrial widget library & dynamic mimic diagrams",
          "Role-based operator security access & executive dashboards",
        ],
        applications: [
          "Centralized factory control rooms (CCR)",
          "Municipal water distribution and sewage networks",
          "Pharma cleanroom HVAC and BMS surveillance",
          "Power substation and energy management centers",
        ],
      },
      {
        id: "alarm-trend-monitoring",
        number: "04",
        title: "Alarm & Trend Monitoring",
        subtitle: "Active Alarm Annunciation & Trend Analysis",
        image: "/images/integrations/plc-hmi-scada/alarm-trend-monitoring.png",
        webpImage: "/images/integrations/plc-hmi-scada/alarm-trend-monitoring.webp",
        shortDescription:
          "Intelligent alarm management adhering to ISA-18.2 standards with multi-variable trending and predictive threshold detection.",
        features: [
          "Real-time audible, visual & popup alarm notifications",
          "Historical alarm audit logging, timestamping & acknowledgement",
          "High-resolution real-time & historical trend analysis charts",
          "Custom alarm grouping, priority tiers & suppression logic",
        ],
        applications: [
          "Critical temperature and pressure safety monitoring",
          "Motor overload and trip diagnostic logging",
          "Boiler and steam manifold safety annunciation",
          "Environmental compliance and emission monitoring",
        ],
      },
      {
        id: "data-logging",
        number: "05",
        title: "Data Logging",
        subtitle: "High-Speed Telemetry & Historical Database Storage",
        image: "/images/integrations/plc-hmi-scada/data-logging.png",
        webpImage: "/images/integrations/plc-hmi-scada/data-logging.webp",
        shortDescription:
          "Reliable high-throughput logging of analog parameters, production counts, and batch records to standard SQL and CSV formats.",
        features: [
          "Long-term historical telemetry & production data logging",
          "High-speed millisecond data capture for transient events",
          "Direct automated export to Excel, CSV & SQL databases",
          "Fast query data storage, automated backup & retrieval",
        ],
        applications: [
          "Pharmaceutical regulatory compliance (21 CFR Part 11)",
          "OEE and factory production output reporting",
          "Utility consumption (power, water, air, gas) tracking",
          "Quality assurance traceability in automotive stamping",
        ],
      },
      {
        id: "recipe-management",
        number: "06",
        title: "Recipe Management",
        subtitle: "Flexible Formulation Control & Batch Management",
        image: "/images/integrations/plc-hmi-scada/recipe-management.png",
        webpImage: "/images/integrations/plc-hmi-scada/recipe-management.webp",
        shortDescription:
          "Centralized recipe and formulation management allowing operators to load pre-validated parameter sets with zero changeover errors.",
        features: [
          "Multi-recipe creation, editing & versioning control",
          "One-touch recipe selection & deterministic download to PLC",
          "Bi-directional parameter upload, download & verification",
          "Multi-tier recipe security, audit trails & access control",
        ],
        applications: [
          "Food & beverage ingredient proportioning and blending",
          "Textile dyeing and chemical treatment recipes",
          "Plastic extrusion and temperature zone parameters",
          "Paint booth and surface coating formulation cycles",
        ],
      },
      {
        id: "remote-access-support",
        number: "07",
        title: "Remote Access Support",
        subtitle: "Secure Cloud, VPN & Cellular Remote Engineering",
        image: "/images/integrations/plc-hmi-scada/remote-access-support.png",
        webpImage: "/images/integrations/plc-hmi-scada/remote-access-support.webp",
        shortDescription:
          "End-to-end encrypted remote connectivity enabling immediate diagnostic investigation, online program edits, and firmware maintenance.",
        features: [
          "Industrial cybersecurity compliant remote VPN tunnels",
          "Secure VPN, Cloud & responsive Web access options",
          "Live remote diagnostics, telemetry & firmware troubleshooting",
          "Dramatically reduced downtime with rapid engineering response",
        ],
        applications: [
          "Remote solar and wind farm generation facilities",
          "Off-site wastewater lift pumping stations",
          "Export machinery monitoring across international customer sites",
          "24/7 expert emergency breakdown support",
        ],
      },
      {
        id: "commissioning-assistance",
        number: "08",
        title: "Commissioning Assistance",
        subtitle: "On-Site Validation, Tuning & Technical Handover",
        image: "/images/integrations/plc-hmi-scada/commissioning-assistance.png",
        webpImage: "/images/integrations/plc-hmi-scada/commissioning-assistance.webp",
        shortDescription:
          "Experienced automation site engineers providing rigorous cold I/O testing, hot commissioning, PID tuning, and operator training.",
        features: [
          "Comprehensive on-site testing & start-up commissioning",
          "Systematic I/O loop checking & field instrumentation validation",
          "Process loop PID tuning, sequence optimization & load testing",
          "Complete documentation, operator training & formal handover",
        ],
        applications: [
          "Greenfield manufacturing plant start-up",
          "Brownfield automation migration and legacy PLC retrofits",
          "Annual plant turnaround and scheduled shutdown support",
          "Site acceptance testing (SAT) & validation protocols",
        ],
      },
    ],
    whyChooseTitle: "Why Choose NASCON for PLC, HMI & SCADA Solutions?",
    whyChooseSubtitle:
      "Decades of collective multi-brand engineering experience, robust industrial cybersecurity, and end-to-end commissioning commitment.",
    whyChoose: [
      {
        title: "Expert Team",
        desc: "Certified automation engineers with deep domain expertise across multiple PLC, HMI, and SCADA programming platforms.",
      },
      {
        title: "Multi-Brand Expertise",
        desc: "Certified expertise across Siemens (TIA Portal/WinCC), Schneider (EcoStruxure), Rockwell Allen-Bradley, and Mitsubishi.",
      },
      {
        title: "Reliable & Secure",
        desc: "Hardened automation code following strict international cybersecurity standards and fail-safe safety interlocks.",
      },
      {
        title: "Faster Commissioning",
        desc: "Comprehensive digital-twin simulation and structured factory acceptance testing ensure swift, flawless plant start-up.",
      },
      {
        title: "Improved Efficiency",
        desc: "Intelligent automation routines optimized for maximum machine throughput, minimized idle time, and lower energy usage.",
      },
      {
        title: "Lifetime Support",
        desc: "End-to-end technical partnership from initial logic scoping through on-site start-up, post-sales service, and expansion.",
      },
    ],
    ctaEyebrow: "INTEGRATED AUTOMATION • INTELLIGENT OPERATIONS",
    ctaHeadline: "Ready to Automate Smarter with PLC, HMI & SCADA Integration?",
    ctaDescription:
      "Whether you are planning a greenfield automated facility or modernizing an existing production line, NASCON TECHNOLOGIES delivers turnkey engineering, programming, and commissioning support.",
    ctaBadge: "SMART AUTOMATION • STRONGER TOMORROW",
  },

  // --------------------------------------------------------------------------
  // 2. VFD, DRIVES & MOTOR CONTROL SOLUTIONS (Brochure Page 30)
  // --------------------------------------------------------------------------
  {
    slug: "vfd-drives-motor-control",
    number: "02",
    name: "VFD, Drives & Motor Control Solutions",
    shortName: "VFD & Motor Control",
    category: "Variable Speed Drives & Motion",
    logo: "/images/Nascon.png",
    logoWebp: "/images/Nascon.webp",
    heroImage: "/images/integrations/vfd-drives-motor-control/hero.png",
    heroImageWebp: "/images/integrations/vfd-drives-motor-control/hero.webp",
    eyebrow: "INTELLIGENT DRIVES & MOTION ENGINEERING",
    headline: "VFD, Drives & Motor Control Solutions",
    tagline: "CONTROL SPEED, IMPROVE EFFICIENCY. MAXIMIZE PERFORMANCE.",
    overview:
      "We provide intelligent drive and motor control solutions that deliver precision, reliability and energy savings across all industrial applications from fractional kilowatt machine drives to high-power megawatt pump skids.",
    brochurePage: "Page 30",
    supportedBrands: ["SIEMENS", "Schneider Electric", "ABB", "SELEC", "Danfoss"],
    badgeText: "ENERGY SAVING",
    badgeSubtext: "INTELLIGENT CONTROL",
    guarantees: [
      "Authorized Drive Integration",
      "Application Sizing & Harmonics Analysis",
      "Field Startup & PID Tuning",
    ],
    keyThemes: [
      {
        label: "Energy Efficiency",
        desc: "Significant reduction in electrical consumption utilizing dynamic V/f and flux vector energy-optimizing algorithms.",
      },
      {
        label: "Precise Speed Control",
        desc: "Accurate speed and torque regulation with instantaneous response across variable mechanical loads.",
      },
      {
        label: "Motor & Equipment Protection",
        desc: "Full electronic motor overload, earth fault, phase unbalance, and mechanical stall protection.",
      },
      {
        label: "Improved Productivity",
        desc: "Smooth controlled starting and stopping preventing mechanical shear, belt slippage, and water hammer.",
      },
      {
        label: "Reliable Performance",
        desc: "Rugged industrial drive enclosures with coated PCBs designed for continuous harsh factory environments.",
      },
      {
        label: "Expert Support & Commissioning",
        desc: "Turnkey drive parameterization, field bus integration, harmonic filters, and on-site tuning.",
      },
    ],
    gridEyebrow: "BROCHURE CAPABILITIES",
    gridTitle: "Drives & Motor Control Solutions Portfolio",
    gridSubtitle:
      "Application-based VFD selection, custom motor control panels, servo motion systems, and on-site start-up assistance.",
    categoryLabel: "Drive Solutions",
    categories: [
      {
        id: "vfd-selection",
        number: "01",
        title: "VFD Selection",
        subtitle: "Application Sizing & Engineering Recommendation",
        image: "/images/integrations/vfd-drives-motor-control/vfd-selection.png",
        webpImage: "/images/integrations/vfd-drives-motor-control/vfd-selection.webp",
        shortDescription:
          "Engineering selection of AC variable frequency drives tailored precisely to starting torque, duty cycle, ambient thermal ratings, and power supply.",
        features: [
          "Application based selection for normal duty & heavy duty loads",
          "Comprehensive load profile & industrial process requirement analysis",
          "Single phase (230V) to three phase (415V/690V) drive solutions",
          "Wide operational power range from 0.25 kW to 500 kW+",
          "Authorized sourcing from world-leading drive manufacturers",
        ],
        applications: [
          "Constant torque industrial extruders and mixers",
          "Variable torque centrifugal chillers and blowers",
          "Multi-stage high-pressure booster pumping sets",
          "Overhead crane hoist and gantry travel control",
        ],
      },
      {
        id: "motor-control-panels",
        number: "02",
        title: "Motor Control Panels",
        subtitle: "Custom Enclosed Starter & VFD Control Cabinets",
        image: "/images/integrations/vfd-drives-motor-control/motor-control-panels.png",
        webpImage: "/images/integrations/vfd-drives-motor-control/motor-control-panels.webp",
        shortDescription:
          "Custom-engineered panels integrating DOL, Star-Delta, Soft Starter, and VFD feeders with full thermal management and safety interlocking.",
        features: [
          "DOL, Star-Delta, Soft Starter & VFD panel topologies",
          "Compact, modular sheet metal design with IP54/IP55 protection",
          "High quality switchgear, contactors & neat structured wiring",
          "Comprehensive electrical protection & interlocked isolators",
          "Custom built precisely to site layout & client technical specs",
        ],
        applications: [
          "Factory utility pump houses and compressor rooms",
          "Raw material crushing and screening plants",
          "Automated bottling line motor grouping panels",
          "Building services HVAC ventilation and exhaust systems",
        ],
      },
      {
        id: "soft-starters",
        number: "03",
        title: "Soft Starters",
        subtitle: "Smooth Starting & Controlled Deceleration",
        image: "/images/integrations/vfd-drives-motor-control/soft-starters.png",
        webpImage: "/images/integrations/vfd-drives-motor-control/soft-starters.webp",
        shortDescription:
          "Solid-state electronic soft starters that eliminate severe starting inrush current spikes and mitigate hydraulic water hammer shock.",
        features: [
          "Substantially reduces motor starting inrush current by up to 70%",
          "Smooth linear acceleration & deceleration ramp control",
          "Eliminates mechanical stress on gearboxes, belts & couplings",
          "Dedicated pump control algorithms preventing fluid surge",
          "Significantly extends induction motor & mechanical equipment life",
        ],
        applications: [
          "Heavy centrifugal slurry and irrigation pumps",
          "High-inertia industrial exhaust and kiln fans",
          "Screw compressors and refrigeration chillers",
          "Ball mills and heavy rock crushing equipment",
        ],
      },
      {
        id: "servo-drives",
        number: "04",
        title: "Servo Drives",
        subtitle: "High-Precision Dynamic Motion & Positioning",
        image: "/images/integrations/vfd-drives-motor-control/servo-drives.png",
        webpImage: "/images/integrations/vfd-drives-motor-control/servo-drives.webp",
        shortDescription:
          "Ultra-fast closed-loop servo drive systems offering sub-millimeter position accuracy, electronic camming, and multi-axis synchronization.",
        features: [
          "High precision closed-loop dynamic motion control",
          "Ultra-fast torque response & micro-degree angular positioning",
          "Deterministic EtherCAT, PROFINET & CANopen industrial bus",
          "Single-axis stand-alone & multi-axis coordinated drive racks",
          "Optimized for high-speed automated packaging & robotics",
        ],
        applications: [
          "Form-fill-seal (FFS) packaging machines",
          "Multi-axis CNC cutting and routing machinery",
          "Pick-and-place high-speed robotic transfer gantries",
          "Rotary knife sheeters and flying cutoff saws",
        ],
      },
      {
        id: "energy-saving-applications",
        number: "05",
        title: "Energy Saving Applications",
        subtitle: "Affinity Law Optimization for Pumps & Blowers",
        image: "/images/integrations/vfd-drives-motor-control/energy-saving-applications.png",
        webpImage: "/images/integrations/vfd-drives-motor-control/energy-saving-applications.webp",
        shortDescription:
          "Engineered variable speed retrofits on centrifugal pumps and fans delivering 20% to 50% power savings through cube-law affinity dynamics.",
        features: [
          "Drastically reduces electrical power consumption on throttling loads",
          "Optimizes motor operating point according to real-time process demand",
          "Load matching, sleep mode & automatic flux optimization",
          "Variable speed control yields rapid return on investment (ROI)",
          "Lowers plant carbon footprint & total lifecycle operating cost",
        ],
        applications: [
          "Cooling tower water circulation systems",
          "Boiler forced draft (FD) and induced draft (ID) fans",
          "Compressed air ring main pressure regulation",
          "Commercial building central air handling units (AHUs)",
        ],
      },
      {
        id: "speed-control-systems",
        number: "06",
        title: "Speed Control Systems",
        subtitle: "Continuous Multi-Motor Speed & Torque Synchronization",
        image: "/images/integrations/vfd-drives-motor-control/speed-control-systems.png",
        webpImage: "/images/integrations/vfd-drives-motor-control/speed-control-systems.webp",
        shortDescription:
          "Master-follower multi-drive speed coordination systems maintaining uniform tension and zero web breakages in continuous process lines.",
        features: [
          "Wide operational speed range control with 100% rated torque at zero speed",
          "Accurate, stable regulation with encoder feedback loops",
          "Precise torque limiting & load sharing across coupled motors",
          "Master-follower digital synchronization via fieldbus networks",
          "Ideal for continuous strip, web, wire & sheet processing lines",
        ],
        applications: [
          "Paper mill dry-end and calendar multi-roll coordination",
          "Textile continuous yarn spinning and stenter lines",
          "Steel wire drawing and continuous slitting machinery",
          "Rubber and plastic sheet calendering plants",
        ],
      },
      {
        id: "pump-fan-conveyor-control",
        number: "07",
        title: "Pump / Fan / Conveyor Control",
        subtitle: "Dedicated Application Macro Algorithms",
        image: "/images/integrations/vfd-drives-motor-control/pump-fan-conveyor-control.png",
        webpImage: "/images/integrations/vfd-drives-motor-control/pump-fan-conveyor-control.webp",
        shortDescription:
          "Pre-engineered application macros featuring multi-pump cascade staging, pipe fill prevention, broken belt detection, and conveyor soft-ramp.",
        features: [
          "Constant pressure, flow & temperature closed-loop PID control",
          "Smooth start/stop operation reducing pipeline valve wear & tear",
          "Multi-pump lead-lag sequencing with automatic wear balancing",
          "Substantially increases process stability & uptime reliability",
          "Broadly applicable across manufacturing, municipal & agro sectors",
        ],
        applications: [
          "Municipal water booster multi-pump stations",
          "Cement plant overland bulk material belt conveyors",
          "Industrial dust extraction and cyclone baghouse filters",
          "Warehouse automated pallet sorting conveyors",
        ],
      },
      {
        id: "drive-commissioning-support",
        number: "08",
        title: "Drive Commissioning Support",
        subtitle: "On-Site Parameter Tuning & Harmonics Mitigation",
        image: "/images/integrations/vfd-drives-motor-control/drive-commissioning-support.png",
        webpImage: "/images/integrations/vfd-drives-motor-control/drive-commissioning-support.webp",
        shortDescription:
          "Comprehensive field service including motor auto-tuning, PID calibration, harmonic resonance checking, and maintenance training.",
        features: [
          "Precision motor auto-tuning & parameter optimization",
          "Comprehensive application load testing & safety trip validation",
          "On-site start-up, dynamic balancing & vibration suppression",
          "Expert troubleshooting, oscilloscope diagnostics & fault logging",
          "Staff training for routine parameter backup & operational maintenance",
        ],
        applications: [
          "Critical factory production line start-up",
          "Harmonic filter and line choke installation testing",
          "Emergency drive breakdown replacement and retuning",
          "Drive firmware upgrades and network communication integration",
        ],
      },
    ],
    whyChooseTitle: "Why Choose NASCON for Drives & Motor Control Solutions?",
    whyChooseSubtitle:
      "Precision engineering, genuine multi-brand hardware, measurable energy savings, and dedicated end-to-end commissioning support.",
    whyChoose: [
      {
        title: "Expert Engineering",
        desc: "Right technical solution selected and sized for every motor rating, duty cycle, and mechanical installation.",
      },
      {
        title: "Premium Products",
        desc: "100% authentic variable frequency drives and switchgear sourced from leading global manufacturers (Siemens, Schneider, ABB, Danfoss).",
      },
      {
        title: "Energy Efficient",
        desc: "Engineered solutions that dramatically reduce utility kilowatt consumption and deliver rapid operational payback.",
      },
      {
        title: "Reliable & Safe",
        desc: "Built with rigorous safety interlocks, circuit breaker coordination, and thermal dissipation modeling.",
      },
      {
        title: "Customized Solutions",
        desc: "Tailored motor control panels and multi-drive enclosures designed to exact mechanical and environmental specifications.",
      },
      {
        title: "Strong Support",
        desc: "Comprehensive engineering support from pre-sales load calculations to field commissioning and spare parts backup.",
      },
    ],
    ctaEyebrow: "INTELLIGENT DRIVES • OPTIMAL CONTROL • MAXIMUM EFFICIENCY",
    ctaHeadline: "Upgrade to Precision Motor Control & Energy Savings",
    ctaDescription:
      "Consult with NASCON's drive specialists for motor duty calculations, energy audits, harmonic mitigation, or turnkey motor control panel fabrication.",
    ctaBadge: "AUTHENTIC PRODUCTS • TECHNICAL EXPERTISE • LIFETIME SUPPORT",
  },

  // --------------------------------------------------------------------------
  // 3. MCC, PCC, APFC & RTU PANEL ENGINEERING (Brochure Page 31)
  // --------------------------------------------------------------------------
  {
    slug: "mcc-pcc-apfc-rtu",
    number: "03",
    name: "MCC, PCC, APFC & RTU Panel Engineering",
    shortName: "Panel Engineering",
    category: "Power Distribution & Switchgear Panels",
    logo: "/images/Nascon.png",
    logoWebp: "/images/Nascon.webp",
    heroImage: "/images/integrations/mcc-pcc-apfc-rtu/hero.png",
    heroImageWebp: "/images/integrations/mcc-pcc-apfc-rtu/hero.webp",
    eyebrow: "ENGINEERED PANELS & POWER CONTROL",
    headline: "MCC, PCC, APFC & RTU Panel Engineering",
    tagline: "ENGINEERED PANELS. SMARTER POWER CONTROL.",
    overview:
      "We design and build high performance MCC, PCC, APFC and RTU panels that ensure reliable power distribution, motor protection, power factor correction and seamless remote operation for industrial excellence.",
    brochurePage: "Page 31",
    supportedBrands: ["Schneider Electric", "SIEMENS", "ABB", "SELEC", "PHOENIX CONTACT"],
    badgeText: "RELIABLE POWER",
    badgeSubtext: "SMART PANELS • STRONGER INDUSTRIES",
    guarantees: [
      "Type-Tested IEC Standards Compliance",
      "Precision In-House Fabrication",
      "Factory Acceptance Tested (FAT)",
    ],
    keyThemes: [
      {
        label: "Reliable & Safe Operation",
        desc: "Type-tested compartmentalized switchgear assemblies ensuring total operator safety and short-circuit withstand.",
      },
      {
        label: "Efficient Power Distribution",
        desc: "High-conductivity electrolytic copper and aluminum busbars rated up to 6300A with minimal thermal dissipation.",
      },
      {
        label: "Energy Saving & PF Optimization",
        desc: "Microprocessor-governed APFC capacitor banks delivering near-unity power factor and avoiding utility penalties.",
      },
      {
        label: "Motor & Equipment Protection",
        desc: "Comprehensive discrimination with ACBs, MCCBs, electronic overload relays, and earth fault relays.",
      },
      {
        label: "Remote Monitoring & Control",
        desc: "Smart digital energy meters, PLC/RTU communication gateways, and SCADA connectivity built in.",
      },
      {
        label: "Complete Engineering & Support",
        desc: "End-to-end design, CAD electrical drafting, CNC sheet metal fabrication, wiring, testing, and on-site support.",
      },
    ],
    gridEyebrow: "BROCHURE CAPABILITIES",
    gridTitle: "Engineered Switchgear & Automation Panels",
    gridSubtitle:
      "Custom manufactured Power Control Centers, Motor Control Centers, Power Factor Correction, and Remote Terminal Unit panels.",
    categoryLabel: "Panel Types",
    categories: [
      {
        id: "mcc-panels",
        number: "01",
        title: "MCC Panels",
        subtitle: "Motor Control Centers (Draw-out & Non Draw-out)",
        image: "/images/integrations/mcc-pcc-apfc-rtu/mcc-panels.png",
        webpImage: "/images/integrations/mcc-pcc-apfc-rtu/mcc-panels.webp",
        shortDescription:
          "Modular Motor Control Centers with fully segregated compartments, accommodating DOL, Star-Delta, Soft Starter, and VFD motor feeders.",
        features: [
          "Modular, compartmentalized & type-tested Form 3b/4b design",
          "Configurable with DOL, Star-Delta, VFD & Soft Starter feeders",
          "Comprehensive motor protection with MCCB/MCB, OLR & EOCR",
          "Mechanical & electrical interlocking with safety door limits",
          "Suitable for heavy continuous manufacturing and process lines",
        ],
        applications: [
          "Cement, steel, and mineral processing motor halls",
          "Chemical and pharmaceutical process plant utilities",
          "Refinery water injection and cooling pump stations",
          "Automated material handling and conveyor networks",
        ],
      },
      {
        id: "pcc-panels",
        number: "02",
        title: "PCC Panels",
        subtitle: "Power Control Centers (Up to 6300A Rating)",
        image: "/images/integrations/mcc-pcc-apfc-rtu/pcc-panels.png",
        webpImage: "/images/integrations/mcc-pcc-apfc-rtu/pcc-panels.webp",
        shortDescription:
          "Heavy-duty main incomer and distribution switchboards housing air circuit breakers (ACBs) for master electrical infrastructure control.",
        features: [
          "Main incomer with microprocessor-based ACB or MCCB protection",
          "High conductivity busbar ratings engineered up to 6300 Amperes",
          "Rigorous short-circuit withstand capacity (50kA / 65kA for 1s)",
          "Integrated power distribution metering, surge protection & alarms",
          "Customised bus duct entry and top/bottom cable termination",
        ],
        applications: [
          "Industrial plant main incoming transformer sub-stations",
          "Captive power plant and diesel generator synchronizing",
          "Large commercial data centers and hospital complexes",
          "Heavy manufacturing industrial substations",
        ],
      },
      {
        id: "apfc-ipfc-panels",
        number: "03",
        title: "APFC / IPFC Panels",
        subtitle: "Automatic Power Factor Correction & Detuned Filtering",
        image: "/images/integrations/mcc-pcc-apfc-rtu/apfc-ipfc-panels.png",
        webpImage: "/images/integrations/mcc-pcc-apfc-rtu/apfc-ipfc-panels.webp",
        shortDescription:
          "Intelligent APFC panels equipped with detuned harmonic filter reactors and high-endurance capacitor duty contactors or thyristor switches.",
        features: [
          "Microprocessor Automatic Power Factor Correction (APFC) control",
          "Intelligent PFC (IPFC) controllers with real-time harmonic THD sensing",
          "Heavy-duty capacitor banks paired with 7% / 14% detuned reactors",
          "Substantially reduces reactive kVAR demand & avoids power utility penalties",
          "Improves electrical system capacity, voltage stability & saves energy",
        ],
        applications: [
          "Plants with high inductive induction motor populations",
          "Steel rolling mills and arc furnace power factor correction",
          "Automotive assembly plants with variable welding loads",
          "Commercial utility grid penalty mitigation",
        ],
      },
      {
        id: "rtu-panels",
        number: "04",
        title: "RTU Panels",
        subtitle: "Remote Terminal Units & Telemetry Enclosures",
        image: "/images/integrations/mcc-pcc-apfc-rtu/rtu-panels.png",
        webpImage: "/images/integrations/mcc-pcc-apfc-rtu/rtu-panels.webp",
        shortDescription:
          "Ruggedized Remote Terminal Unit panels engineered for unattended geographic substations, pumping nodes, and oil/gas pipelines.",
        features: [
          "Industrial PLC & dedicated RTU microprocessor-based controllers",
          "Long-range remote data acquisition, command & setpoint control",
          "Multi-communication protocols: Modbus TCP, DNP3, IEC 60870-5-104",
          "Non-volatile alarm, event sequence & telemetry data logging",
          "Proven weather-proof IP65 enclosures for extreme climatic conditions",
        ],
        applications: [
          "Municipal cross-country water transmission networks",
          "Electrical distribution smart grid ring main units (RMU)",
          "Oil & gas cross-country pipeline block valve stations",
          "Solar photovoltaic string combiner telemetry stations",
        ],
      },
      {
        id: "power-distribution-panels",
        number: "05",
        title: "Power Distribution Panels",
        subtitle: "Sub-Distribution Boards (PDB / MLDB / LDB)",
        image: "/images/integrations/mcc-pcc-apfc-rtu/power-distribution-panels.png",
        webpImage: "/images/integrations/mcc-pcc-apfc-rtu/power-distribution-panels.webp",
        shortDescription:
          "Reliable secondary sub-distribution boards engineered for safe branch circuit feeding, power metering, and facility illumination.",
        features: [
          "Safe, compact & highly reliable auxiliary power distribution",
          "MCCB, MCB, RCCB & RCBO based outgoing branch feeders",
          "Phase indicator lamps, multi-function digital metering & CTs",
          "Neat compartmentalized cable alleys, terminal blocks & clear labeling",
          "Robust CRCA steel construction with powder coated epoxy finish",
        ],
        applications: [
          "Factory shop floor power distribution boards (PDB)",
          "Industrial lighting and emergency power distribution (LDB)",
          "Office complex floor-level electrical risers",
          "Warehouse HVAC and auxiliary plug-point power distribution",
        ],
      },
      {
        id: "motor-feeder-sections",
        number: "06",
        title: "Motor Feeder Sections",
        subtitle: "Direct-On-Line, Star-Delta & Soft Starters",
        image: "/images/integrations/mcc-pcc-apfc-rtu/motor-feeder-sections.png",
        webpImage: "/images/integrations/mcc-pcc-apfc-rtu/motor-feeder-sections.webp",
        shortDescription:
          "Pre-engineered individual motor control feeder modules featuring Type-2 coordination between circuit breakers, contactors, and relays.",
        features: [
          "Standardized DOL, Star-Delta, VFD & Soft Starter motor feeder circuits",
          "Type-2 coordination protection with thermal OLR & Electronic OCR",
          "Compact, space-efficient modular layout with easy frontal maintenance",
          "Healthy indication, trip indication, ammeters & fault diagnostic lamps",
          "Manufactured exclusively using genuine premium switchgear components",
        ],
        applications: [
          "Individual conveyor, agitator, and fan motor drives",
          "Chemical dosing pump and slurry mixer feeders",
          "Cooling water pump and condenser fan control",
          "Machine tool spindle and auxiliary motor stations",
        ],
      },
      {
        id: "capacitor-bank-systems",
        number: "07",
        title: "Capacitor Bank Systems",
        subtitle: "Heavy-Duty Metallized Polypropylene (MPP) Banks",
        image: "/images/integrations/mcc-pcc-apfc-rtu/capacitor-bank-systems.png",
        webpImage: "/images/integrations/mcc-pcc-apfc-rtu/capacitor-bank-systems.webp",
        shortDescription:
          "Heavy-duty capacitor bank assemblies with self-healing MPP dielectric technology, discharge resistors, and high inrush switching contactors.",
        features: [
          "Standard, heavy-duty & detuned reactor-matched capacitor banks",
          "Engineered with capacitor-duty contactors, fast-acting fuses & reactors",
          "Extremely high inrush switching endurance & self-healing technology",
          "Modular tray design for easy inspection, testing & maintenance",
          "Long operating life capacitors ensuring stable grid factor correction",
        ],
        applications: [
          "Dedicated power factor correction for large induction motors",
          "Main plant substation centralized capacitor steps",
          "Harmonic-polluted electrical networks with VFD concentration",
          "Textile spinning frame centralized power factor banks",
        ],
      },
      {
        id: "remote-monitoring-panel-support",
        number: "08",
        title: "Remote Monitoring Panel Support",
        subtitle: "IoT Telemetry, Smart Gateway & Cloud Integration",
        image: "/images/integrations/mcc-pcc-apfc-rtu/remote-monitoring-panel-support.png",
        webpImage: "/images/integrations/mcc-pcc-apfc-rtu/remote-monitoring-panel-support.webp",
        shortDescription:
          "Intelligent panel retrofits with IoT gateways, Modbus energy meters, temperature monitoring, and cloud-linked alarm notification.",
        features: [
          "Real-time panel electrical monitoring, busbar temperature & diagnostics",
          "Direct remote telemetry access via SCADA, HMI & mobile web dashboards",
          "Continuous electrical data trends, energy audit reports & load analytics",
          "Instantaneous alarm SMS, WhatsApp & Email threshold notifications",
          "24/7 continuous visibility of factory power distribution status",
        ],
        applications: [
          "Smart factory energy management and ISO 50001 compliance",
          "Critical data center power distribution surveillance",
          "Preventive maintenance and busbar thermal monitoring",
          "Solar captive power export and grid synchronizing tracking",
        ],
      },
    ],
    whyChooseTitle: "Why Choose NASCON Panel Engineering?",
    whyChooseSubtitle:
      "Precision engineering, certified quality switchgear, rigorous IEC compliance, in-house manufacturing, and complete lifecycle support.",
    whyChoose: [
      {
        title: "Engineering Excellence",
        desc: "Designed by experienced electrical engineers using modern CAD tools, thermodynamic heat dissipation modeling, and busbar calculations.",
      },
      {
        title: "Quality Components",
        desc: "Built exclusively with genuine, certified components from trusted global brands (Schneider Electric, Siemens, ABB, Selec, Phoenix Contact).",
      },
      {
        title: "Tested & Compliant",
        desc: "All panels rigorously tested for insulation resistance, high-voltage withstand, temperature rise, and functional logic as per IEC standards.",
      },
      {
        title: "Customised Solutions",
        desc: "Tailored sheet-metal design, busbar routing, and cable entry orientations customized exactly to your site conditions.",
      },
      {
        title: "In-House Manufacturing",
        desc: "Built in a quality-controlled panel shop with precision CNC punch/bend machinery and seven-tank powder coating.",
      },
      {
        title: "Lifetime Support",
        desc: "Dedicated support extending from single-line diagram (SLD) conceptualization through factory testing, site commissioning, and warranty.",
      },
    ],
    ctaEyebrow: "SMART PANELS • RELIABLE POWER • STRONGER PERFORMANCE",
    ctaHeadline: "Engineer Your Next Industrial Control Panel with NASCON",
    ctaDescription:
      "Share your Single Line Diagram (SLD), motor schedule, or project specifications. Our electrical engineering team will provide detailed CAD drawings, component schedules, and competitive quotes.",
    ctaBadge: "SAFE & RELIABLE • BUILT TO LAST • IEC TESTED",
  },
];

// Helper functions
export const getIntegration = (slug) => {
  return integrationsData.find((item) => item.slug === slug) || integrationsData[0];
};

export const getAllIntegrations = () => integrationsData;
