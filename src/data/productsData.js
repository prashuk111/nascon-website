// ============================================================================
// NASCON TECHNOLOGIES - PRODUCTS REUSABLE DATASET
// Reference: NASCON Technologies 32-Page Industrial Brochure (Pages 14-17)
// ============================================================================

export const productCategories = [
  {
    id: "automation",
    number: "01",
    title: "Automation Products",
    shortTitle: "Automation",
    route: "/products/automation",
    subtitle:
      "Reliable control, visualization, drive and communication technologies for modern industrial automation.",
    pills: [
      "Reliable Products",
      "Smart Control",
      "Connected Systems",
      "Scalable Solutions",
      "Technical Support",
    ],
    icon: "◈",
    products: [
      {
        id: "plcs",
        number: "01",
        name: "PLCs",
        fullName: "Programmable Logic Controllers (PLCs)",
        category: "automation",
        categoryName: "Automation Products",
        image: "/images/products/automation/plc.png",
        webpImage: "/images/products/automation/plc.webp",
        shortDescription:
          "Programmable logic controllers for reliable machine and process control.",
        overview:
          "Nascon Technologies delivers high-performance programmable logic controllers engineered for rigorous industrial manufacturing, machinery automation, and continuous process control. Supporting modular I/O scaling, real-time deterministic processing, and standard communication buses, our PLC solutions empower seamless plant automation.",
        applications: [
          "Special Purpose Machines (SPM)",
          "Automated Packaging & Bottling Lines",
          "Automotive Assembly & Test Benches",
          "Water & Wastewater Treatment Automation",
        ],
        features: [
          "Modular CPU and expansion architecture for flexible I/O scaling",
          "Fast cycle execution times for precision high-speed control",
          "Embedded industrial fieldbus interfaces (Ethernet/IP, PROFINET, Modbus)",
          "Ruggedized industrial hardware built for harsh electrical noise environments",
        ],
        highlights: [
          "Compact DIN-rail mounting",
          "Integrated diagnostic LEDs",
          "Scalable from micro to distributed architecture",
        ],
        related: ["hmis", "io-modules", "scada", "vfds"],
      },
      {
        id: "hmis",
        number: "02",
        name: "HMIs",
        fullName: "Human-Machine Interface Panels (HMIs)",
        category: "automation",
        categoryName: "Automation Products",
        image: "/images/products/automation/hmi.png",
        webpImage: "/images/products/automation/hmi.webp",
        shortDescription:
          "Operator interfaces for visualization, monitoring and control.",
        overview:
          "Our industrial touch HMI displays combine high-resolution operator visualization with intuitive touch navigation for monitoring machinery status, adjusting process setpoints, and managing operational alarms directly on the factory floor.",
        applications: [
          "Machine-Level Operator Stations",
          "Process Line Overview Displays",
          "Recipe Management Systems",
          "OEM Control Panels",
        ],
        features: [
          "Vibrant high-contrast industrial touchscreens with wide viewing angles",
          "Rich graphic object libraries, trend curves, and real-time alarms",
          "Multi-protocol connectivity to leading PLC brands",
          "Rugged IP-rated front bezels resistant to industrial dust and moisture",
        ],
        highlights: [
          "Front panel mounting",
          "Alarm logging & recipe handling",
          "Remote VNC client access",
        ],
        related: ["plcs", "scada", "industrial-communication", "remote-monitoring"],
      },
      {
        id: "scada",
        number: "03",
        name: "SCADA Systems",
        fullName: "Supervisory Control & Data Acquisition (SCADA)",
        category: "automation",
        categoryName: "Automation Products",
        image: "/images/products/automation/scada.png",
        webpImage: "/images/products/automation/scada.webp",
        shortDescription:
          "Supervisory platforms for plant-wide monitoring and data insight.",
        overview:
          "Scalable SCADA software and workstation platforms delivering centralized supervision, historical data logging, dynamic mimic visualization, and actionable analytics across whole industrial plants and remote utility sites.",
        applications: [
          "Plant-Wide Manufacturing Execution",
          "Power Distribution & Energy Management",
          "Municipal Water Supply Networks",
          "Multi-Site Industrial Telemetry",
        ],
        features: [
          "Real-time graphical plant mimic views and interactive control",
          "Comprehensive alarm notification, acknowledgment, and historical audit trails",
          "Centralized data historian with automated compliance reporting",
          "Open OPC UA, MQTT, and industrial database connectivity",
        ],
        highlights: [
          "Multi-monitor workstation support",
          "Enterprise reporting tools",
          "Role-based security & audit logging",
        ],
        related: ["plcs", "hmis", "industrial-communication", "remote-monitoring"],
      },
      {
        id: "io-modules",
        number: "04",
        name: "I/O Modules",
        fullName: "Distributed & Modular I/O Modules",
        category: "automation",
        categoryName: "Automation Products",
        image: "/images/products/automation/io-modules.png",
        webpImage: "/images/products/automation/io-modules.webp",
        shortDescription:
          "Flexible digital and analog signal interfacing for automation systems.",
        overview:
          "Modular distributed I/O interface units that streamline field wiring and extend controller connectivity across sensors, actuators, valves, and transducers with minimal cable routing and maximum electrical noise immunity.",
        applications: [
          "Remote Junction Boxes & Field Panels",
          "Sensor & Transducer Signal Aggregation",
          "Pneumatic & Hydraulic Valve Actuation",
          "Machinery Sub-Assembly Wiring",
        ],
        features: [
          "High-density digital input/output and analog current/voltage channels",
          "Tool-less push-in or removable screw terminal blocks for quick maintenance",
          "Channel-level diagnostic status LEDs for instantaneous field troubleshooting",
          "Fieldbus communication couplers for Ethernet and serial networks",
        ],
        highlights: [
          "DIN-rail slice architecture",
          "Optical channel isolation",
          "Hot-swappable module replacement",
        ],
        related: ["plcs", "industrial-communication", "signal-isolators", "signal-converters"],
      },
      {
        id: "vfds",
        number: "05",
        name: "VFDs",
        fullName: "Variable Frequency Drives (VFDs)",
        category: "automation",
        categoryName: "Automation Products",
        image: "/images/products/automation/vfd.png",
        webpImage: "/images/products/automation/vfd.webp",
        shortDescription:
          "Variable frequency drives for efficient motor speed control.",
        overview:
          "Advanced AC variable frequency drives engineered for high-efficiency motor speed regulation, soft starting, energy optimization, and dynamic mechanical protection across pumps, fans, conveyors, and heavy industrial machinery.",
        applications: [
          "Industrial Pumps & Booster Systems",
          "Ventilation Fans & Blower Drives",
          "Conveyor Belts & Material Handling",
          "Compressors, Extruders & Mixers",
        ],
        features: [
          "Advanced vector control and V/f modes for high torque at low speeds",
          "Built-in energy-saving algorithms and power factor optimization",
          "Comprehensive motor protection including overload, stall, and thermal trips",
          "Front keypad with parameter readout and industrial communication ports",
        ],
        highlights: [
          "Smooth acceleration/deceleration ramps",
          "Harmonic filtering and EMC compliance",
          "Integrated PID regulation",
        ],
        related: ["servo-drives", "contactors", "overload-relays", "plcs"],
      },
      {
        id: "servo-drives",
        number: "06",
        name: "Servo Drives",
        fullName: "Industrial Servo Drives & Motors",
        category: "automation",
        categoryName: "Automation Products",
        image: "/images/products/automation/servo-drives.png",
        webpImage: "/images/products/automation/servo-drives.webp",
        shortDescription:
          "Precision motion control solutions for dynamic applications.",
        overview:
          "High-dynamic servo drives and precision AC brushless servo motors designed for extreme positioning accuracy, rapid acceleration, synchronized multi-axis motion, and automated robotic systems.",
        applications: [
          "CNC Machining & Cutting Equipment",
          "Pick-and-Place Robotic Mechanisms",
          "High-Speed Rotary Packaging & Labelling",
          "Indexers, Winders & Tension Controllers",
        ],
        features: [
          "High-resolution optical/magnetic absolute encoder feedback",
          "Ultra-fast current, velocity, and position control loop cycles",
          "Vibration suppression filtering and auto-tuning algorithms",
          "Synchronized motion fieldbus integration (EtherCAT, CANopen)",
        ],
        highlights: [
          "High dynamic torque-to-inertia ratio",
          "Integrated safe torque off (STO)",
          "Compact panel footprint",
        ],
        related: ["vfds", "plcs", "io-modules", "hmis"],
      },
      {
        id: "industrial-communication",
        number: "07",
        name: "Industrial Communication",
        fullName: "Industrial Switches & Communication Gateways",
        category: "automation",
        categoryName: "Automation Products",
        image: "/images/products/automation/industrial-communication.png",
        webpImage: "/images/products/automation/industrial-communication.webp",
        shortDescription:
          "Gateways, switches and connectivity products for integrated operations.",
        overview:
          "Ruggedized managed and unmanaged industrial Ethernet switches, protocol converters, and wireless gateways designed to provide bulletproof data communication across demanding industrial plant networks.",
        applications: [
          "Control Panel Ethernet Backbones",
          "Inter-PLC Factory Networking",
          "Legacy Serial (RS485/Modbus) to Ethernet Bridging",
          "Substation & Field Infrastructure",
        ],
        features: [
          "Hardened metal enclosures rated for extreme operating temperatures",
          "Fast network redundancy protocols (RSTP, Ring Redundancy)",
          "Dual redundant DC power inputs with alarm relay outputs",
          "High EMC and surge immunity against factory electrical noise",
        ],
        highlights: [
          "DIN-rail mounting",
          "SFP optical fiber uplink options",
          "Diagnostic port mirroring & QoS",
        ],
        related: ["remote-monitoring", "plcs", "scada", "io-modules"],
      },
      {
        id: "remote-monitoring",
        number: "08",
        name: "Remote Monitoring Devices",
        fullName: "Industrial IoT Gateways & Remote Telemetry",
        category: "automation",
        categoryName: "Automation Products",
        image: "/images/products/automation/remote-monitoring.png",
        webpImage: "/images/products/automation/remote-monitoring.webp",
        shortDescription:
          "Connected solutions for alerts, dashboards and remote visibility.",
        overview:
          "Edge industrial IoT gateways and cellular telemetry devices that securely transmit machinery telemetry, operating hours, and alarm states to centralized cloud dashboards and mobile alerting channels.",
        applications: [
          "Remote Machinery Health & Fleet Monitoring",
          "Solar & Renewable Energy Telemetry",
          "Remote Pumping Station Tracking",
          "Predictive Maintenance & Uptime Tracking",
        ],
        features: [
          "Built-in cellular 4G/5G, Wi-Fi, and Ethernet telemetry interfaces",
          "Direct Modbus and fieldbus data acquisition from PLCs and meters",
          "Automated SMS and email alarms on critical threshold violations",
          "Encrypted edge-to-cloud telemetry transmission with local data buffering",
        ],
        highlights: [
          "Dual SIM failover support",
          "DIN-rail or wall mounting",
          "Web browser configuration interface",
        ],
        related: ["industrial-communication", "scada", "hmis", "plcs"],
      },
    ],
  },
  {
    id: "electrical",
    number: "02",
    title: "Electrical Control & Protection Products",
    shortTitle: "Electrical Control",
    route: "/products/electrical-control",
    subtitle:
      "Reliable switching, protection and power management products for modern industrial systems.",
    pills: [
      "Reliable Protection",
      "Efficient Switching",
      "Safe Distribution",
      "Panel Ready",
      "Technical Support",
    ],
    icon: "⌁",
    products: [
      {
        id: "mcb-mccb-acb",
        number: "01",
        name: "MCB / MCCB / ACB",
        fullName: "Circuit Breakers (MCB / MCCB / ACB)",
        category: "electrical",
        categoryName: "Electrical Control & Protection Products",
        image: "/images/products/electrical/mcb-mccb-acb.png",
        webpImage: "/images/products/electrical/mcb-mccb-acb.webp",
        shortDescription:
          "Circuit protection solutions for safe and efficient power distribution.",
        overview:
          "Complete range of low-voltage circuit protection switchgear comprising Miniature Circuit Breakers (MCB), Molded Case Circuit Breakers (MCCB), and Air Circuit Breakers (ACB) designed to isolate electrical faults and safeguard industrial installations.",
        applications: [
          "Main Power Distribution Boards (PDB)",
          "Motor Control Centers (MCC Panels)",
          "Sub-Distribution and Branch Circuits",
          "Industrial Plant Incomer Feeder Panels",
        ],
        features: [
          "Thermal-magnetic and microprocessor-based electronic trip units",
          "High breaking capacity for reliable short-circuit and overload protection",
          "Auxiliary switch and trip indicator accessories for panel telemetry",
          "Engineered in compliance with international low-voltage safety standards",
        ],
        highlights: [
          "Modular DIN-rail and chassis mounting",
          "Adjustable overload trip settings",
          "Rotary handle and padlockable mechanisms",
        ],
        related: ["contactors", "overload-relays", "surge-protection", "terminal-blocks"],
      },
      {
        id: "contactors",
        number: "02",
        name: "Contactors",
        fullName: "Industrial Power & Control Contactors",
        category: "electrical",
        categoryName: "Electrical Control & Protection Products",
        image: "/images/products/electrical/contactors.png",
        webpImage: "/images/products/electrical/contactors.webp",
        shortDescription:
          "Reliable switching devices for motor and load control applications.",
        overview:
          "Heavy-duty 3-pole and 4-pole electromagnetic power contactors engineered for frequent start-stop switching of electrical motors, resistive heaters, lighting banks, and industrial power circuits.",
        applications: [
          "Direct-On-Line (DOL) and Star-Delta Motor Starters",
          "Reversing Motor Contactors",
          "Capacitor Bank Switching",
          "Industrial Furnace & Heating Load Switching",
        ],
        features: [
          "High mechanical and electrical contact endurance for demanding cycles",
          "Integrated auxiliary contact blocks with front and side mounting options",
          "AC and DC wide-band coil configurations with surge suppression",
          "Direct mechanical interlocking compatibility for reversing starters",
        ],
        highlights: [
          "DIN-rail and base screw mounting",
          "Finger-safe IP20 touch protection",
          "Low coil holding power consumption",
        ],
        related: ["overload-relays", "mcb-mccb-acb", "control-relays", "vfds"],
      },
      {
        id: "overload-relays",
        number: "03",
        name: "Overload Relays",
        fullName: "Thermal & Electronic Motor Overload Relays",
        category: "electrical",
        categoryName: "Electrical Control & Protection Products",
        image: "/images/products/electrical/overload-relays.png",
        webpImage: "/images/products/electrical/overload-relays.webp",
        shortDescription:
          "Protection devices for safeguarding motors against overload conditions.",
        overview:
          "Dedicated thermal-bimetallic and solid-state electronic motor overload protection relays built to protect 3-phase AC motors from sustained current overload, phase loss, and thermal runaway.",
        applications: [
          "Motor Starter Assemblies (DOL / Star-Delta)",
          "Pump and Compressor Motor Protection",
          "Conveyor and Mechanical Drive Panels",
          "Mining, Textile & Cement Plant Drives",
        ],
        features: [
          "Direct plug-in mounting to matching power contactors or separate base",
          "Precision current setting dial with ambient temperature compensation",
          "Integrated phase failure sensitivity and differential trip mechanism",
          "Manual and auto reset selector with test trip and stop pushbuttons",
        ],
        highlights: [
          "Clear visual trip indicator flag",
          "Isolated 1 NO + 1 NC signaling contacts",
          "Class 10 and Class 20 tripping characteristics",
        ],
        related: ["contactors", "mcb-mccb-acb", "vfds", "control-relays"],
      },
      {
        id: "control-relays",
        number: "04",
        name: "Control Relays",
        fullName: "Electromechanical Plug-in & Slim Control Relays",
        category: "electrical",
        categoryName: "Electrical Control & Protection Products",
        image: "/images/products/electrical/control-relays.png",
        webpImage: "/images/products/electrical/control-relays.webp",
        shortDescription:
          "Compact relay solutions for control logic and interface applications.",
        overview:
          "High-reliability plug-in industrial relays and ultra-slim interface relays providing galvanic isolation, signal multiplication, and logic interlocking between automation controllers and field actuators.",
        applications: [
          "PLC Digital Output Interfacing",
          "Control Panel Interlocking Logic",
          "Valve & Solenoid Coil Actuation",
          "Safety Circuit Signal Multiplication",
        ],
        features: [
          "Transparent polycarbonate dust covers for visual contact inspection",
          "Built-in mechanical flag indicator and bright LED coil status light",
          "High contact rating with silver alloy contact pins for low contact resistance",
          "Heavy-duty DIN-rail sockets with integrated retaining ejector clips",
        ],
        highlights: [
          "2 C/O, 3 C/O, and 4 C/O contact configurations",
          "Push-in and screw clamp socket options",
          "Built-in coil surge suppression diode/varistor",
        ],
        related: ["timers", "contactors", "io-modules", "terminal-blocks"],
      },
      {
        id: "timers",
        number: "05",
        name: "Timers",
        fullName: "Multi-Function & Sequence Electronic Timers",
        category: "electrical",
        categoryName: "Electrical Control & Protection Products",
        image: "/images/products/electrical/timers.png",
        webpImage: "/images/products/electrical/timers.webp",
        shortDescription:
          "Precise timing devices for sequence control and automation tasks.",
        overview:
          "Versatile electronic timing relays featuring on-delay, off-delay, cyclic, star-delta, and multi-mode functionality designed for panel sequence coordination, delayed startup, and cyclic industrial routines.",
        applications: [
          "Star-Delta Motor Transition Timing",
          "Sequential Equipment Startup Delays",
          "Lubrication & Purge Cycle Timers",
          "Conveyor Interlock & Jam Detection Delay",
        ],
        features: [
          "Wide operational time range selectable from fractions of seconds to days",
          "Multi-function selector with intuitive front rotary dials or digital LED display",
          "Universal control supply voltage support across AC and DC ranges",
          "High repeat timing accuracy with robust resistance to electrical transients",
        ],
        highlights: [
          "Slim modular DIN-rail footprint",
          "Clear LED power and relay energization indicators",
          "Standard relay changeover contacts",
        ],
        related: ["control-relays", "contactors", "overload-relays", "smps-power-supplies"],
      },
      {
        id: "smps-power-supplies",
        number: "06",
        name: "SMPS / Power Supplies",
        fullName: "Industrial DIN-Rail Switched-Mode Power Supplies (SMPS)",
        category: "electrical",
        categoryName: "Electrical Control & Protection Products",
        image: "/images/products/electrical/smps-power-supplies.png",
        webpImage: "/images/products/electrical/smps-power-supplies.webp",
        shortDescription:
          "Stable and efficient power supplies for control systems and automation panels.",
        overview:
          "High-efficiency industrial DIN-rail switched-mode power supplies delivering regulated, ripple-free 24V DC (and 12V/48V DC) power to PLCs, sensors, HMIs, relays, and sensitive instrumentation.",
        applications: [
          "Automation & Control Panel DC Power Distribution",
          "PLC, HMI, and I/O Module Supply",
          "Instrumentation Loop Power Supplies",
          "Security, Access & Industrial Communication Power",
        ],
        features: [
          "Ultra-high efficiency exceeding 90% with low standby power dissipation",
          "Wide AC/DC universal input voltage range with active power factor correction",
          "Short-circuit, over-voltage, and thermal auto-recovery protection",
          "Front DC-OK LED indicator and dry relay contact for remote power monitoring",
        ],
        highlights: [
          "Heavy-duty metal ventilated enclosure",
          "Output voltage fine-tuning trim potentiometer",
          "Convection cooled without noisy fans",
        ],
        related: ["surge-protection", "plcs", "io-modules", "terminal-blocks"],
      },
      {
        id: "surge-protection",
        number: "07",
        name: "Surge Protection Devices",
        fullName: "Surge Protection Devices & Transient Suppressors (SPD)",
        category: "electrical",
        categoryName: "Electrical Control & Protection Products",
        image: "/images/products/electrical/surge-protection.png",
        webpImage: "/images/products/electrical/surge-protection.webp",
        shortDescription:
          "Protective devices against voltage spikes and transient disturbances.",
        overview:
          "Type 1, Type 2, and Type 3 surge protection arrestors engineered to divert dangerous lightning strikes, switching transients, and grid surges safely to ground, preventing catastrophic hardware destruction.",
        applications: [
          "Main Electrical Panel Incomer Protection",
          "Sensitive Automation & PLC Panel Power Lines",
          "Instrumentation & Data Line Protection",
          "Outdoor Machinery & Remote Telemetry Stations",
        ],
        features: [
          "High-energy Metal Oxide Varistor (MOV) and Gas Discharge Tube (GDT) stages",
          "Pluggable cartridge modules for rapid replacement without rewiring",
          "Visual green/red status inspection window indicating protection readiness",
          "Remote signaling auxiliary contacts for automated alarm integration",
        ],
        highlights: [
          "DIN-rail standard modular format",
          "Thermal disconnect mechanism",
          "Low residual clamping voltage",
        ],
        related: ["mcb-mccb-acb", "smps-power-supplies", "terminal-blocks", "cables"],
      },
      {
        id: "terminal-blocks",
        number: "08",
        name: "Terminal Blocks & Accessories",
        fullName: "DIN-Rail Modular Terminal Blocks & Wiring Accessories",
        category: "electrical",
        categoryName: "Electrical Control & Protection Products",
        image: "/images/products/electrical/terminal-blocks.png",
        webpImage: "/images/products/electrical/terminal-blocks.webp",
        shortDescription:
          "Neat and secure wiring interface solutions for organized panel assembly.",
        overview:
          "Complete family of modular DIN-rail terminal blocks encompassing push-in, spring-cage, and screw-clamp technologies, complemented with cross-connectors, partition plates, and marking systems for immaculate control panel wiring.",
        applications: [
          "Industrial Control Panel Marshalling",
          "Sensor & Actuator Multi-Level Distribution",
          "Power Distribution & Grounding Terminals",
          "Disconnect & Fused Test Circuits",
        ],
        features: [
          "Vibration-proof, gas-tight wire clamping connections",
          "Multi-level, disconnect, ground, and fuse terminal options",
          "Standard plug-in bridging jumpers for effortless potential distribution",
          "High-grade self-extinguishing polyamide insulating housing",
        ],
        highlights: [
          "Standard 35mm DIN-rail mount",
          "Clear snap-on marking tags",
          "High electrical dielectric strength",
        ],
        related: ["panel-wiring", "cable-accessories", "control-relays", "smps-power-supplies"],
      },
    ],
  },
  {
    id: "cables",
    number: "03",
    title: "Cables & Wiring Solutions",
    shortTitle: "Cables & Wiring",
    route: "/products/cables",
    subtitle:
      "Reliable cabling, termination and wiring support for modern industrial systems.",
    pills: [
      "Reliable Cables",
      "Safe Connectivity",
      "Industrial Quality",
      "Clean Installation",
      "Technical Support",
    ],
    icon: "〰",
    products: [
      {
        id: "power-cables",
        number: "01",
        name: "Power Cables",
        fullName: "Industrial Heavy-Duty Power Cables",
        category: "cables",
        categoryName: "Cables & Wiring Solutions",
        image: "/images/products/cables/power-cables.png",
        webpImage: "/images/products/cables/power-cables.webp",
        shortDescription:
          "Durable cables for reliable power transmission in industrial applications.",
        overview:
          "Heavy-duty multi-core armored and unarmored copper/aluminum power cables engineered for low-voltage and medium-voltage electrical power transmission across demanding factory environments and utility networks.",
        applications: [
          "Substation to Main Distribution Panel Feeders",
          "Motor Feeders for Pumps, Compressors & Heavy Drives",
          "Underground Duct & Cable Trench Installation",
          "Industrial Plant Power Infrastructure",
        ],
        features: [
          "High-purity electrolytic grade conductors with high current carrying capacity",
          "Heavy-duty XLPE or PVC insulation offering superior thermal and dielectric rating",
          "Galvanized steel wire/strip armoring providing robust mechanical crush protection",
          "Tough, weather-proof outer sheath resistant to moisture, oils, and chemicals",
        ],
        highlights: [
          "Armored and unarmored configurations",
          "Flame-retardant outer sheath compounds",
          "Compliant with industrial power standards",
        ],
        related: ["control-cables", "mcb-mccb-acb", "cable-glands-lugs", "cable-management"],
      },
      {
        id: "control-cables",
        number: "02",
        name: "Control Cables",
        fullName: "Multi-Core Industrial Control Cables",
        category: "cables",
        categoryName: "Cables & Wiring Solutions",
        image: "/images/products/cables/control-cables.png",
        webpImage: "/images/products/cables/control-cables.webp",
        shortDescription:
          "Stable control wiring for machinery, panels and automation circuits.",
        overview:
          "Multi-core flexible and armored control cables designed to transmit control signals, interlock logic, and operating power between control panels, motor starters, and field-mounted machinery.",
        applications: [
          "Panel-to-Machine Interconnecting Cabling",
          "Pushbutton Stations & Solenoid Valves",
          "Motor Starter Interlocking Circuits",
          "Automated Production Line Control Feeds",
        ],
        features: [
          "Multi-core configuration with sequentially numbered and color-coded cores",
          "Flexible annealed copper conductors for convenient routing through cable trays",
          "Available in shielded (copper braided) and unshielded configurations",
          "Oil, chemical, and flame-retardant outer sheath options",
        ],
        highlights: [
          "High electrical insulation resistance",
          "Flexible for easy bending and pulling",
          "Armored versions for direct outdoor burial",
        ],
        related: ["power-cables", "instrumentation-cables", "cable-glands-lugs", "panel-wiring"],
      },
      {
        id: "instrumentation-cables",
        number: "03",
        name: "Instrumentation Cables",
        fullName: "Shielded Twisted-Pair Instrumentation Cables",
        category: "cables",
        categoryName: "Cables & Wiring Solutions",
        image: "/images/products/cables/instrumentation-cables.png",
        webpImage: "/images/products/cables/instrumentation-cables.webp",
        shortDescription:
          "Accurate signal transmission for process and field instrumentation.",
        overview:
          "Precision individual and overall shielded twisted-pair cables manufactured to eliminate electrostatic interference, crosstalk, and noise in sensitive 4-20mA, thermocouple, RTD, and digital signal loops.",
        applications: [
          "4-20mA Transmitter & Flow Meter Loops",
          "RTD and Thermocouple Temperature Sensor Wiring",
          "DCS & PLC Analog Input/Output Cabling",
          "Process Plant Remote Signal Junction Boxes",
        ],
        features: [
          "Twisted core pairs with uniform lay length to suppress electromagnetic crosstalk",
          "Aluminum-mylar foil screening with tinned copper drain wire for 100% electrostatic shield",
          "Optional overall copper braid shielding for superior high-frequency noise immunity",
          "High dielectric strength and low mutual capacitance for signal integrity over long runs",
        ],
        highlights: [
          "Individual and overall screened pairs/triads",
          "Armored options for mechanical protection",
          "Low signal attenuation",
        ],
        related: ["temperature-sensors", "pressure-transmitters", "flow-transmitters", "signal-isolators"],
      },
      {
        id: "flexible-cables",
        number: "04",
        name: "Flexible Cables",
        fullName: "High-Flexibility Drag Chain & Robotic Cables",
        category: "cables",
        categoryName: "Cables & Wiring Solutions",
        image: "/images/products/cables/flexible-cables.png",
        webpImage: "/images/products/cables/flexible-cables.webp",
        shortDescription:
          "High-flexibility cables for moving equipment and compact routing.",
        overview:
          "Continuous-flex industrial cables built specifically for moving machinery, gantry robots, automated cranes, and energy drag chains subject to continuous bending, torsion, and acceleration.",
        applications: [
          "Cable Drag Chains & Festoon Systems",
          "CNC Machinery Axes & Linear Actuators",
          "Automated Handling Robots & Pick-and-Place Arms",
          "Overhead Cranes and Hoist Systems",
        ],
        features: [
          "Finely stranded Class 5 and Class 6 pure copper conductors for extreme fatigue resistance",
          "Specially formulated low-adhesion, oil-resistant polyurethane (PUR) or PVC outer jacket",
          "High bending cycle endurance tested for millions of continuous flex cycles",
          "Abrasion, cut, and chemical-resistant construction",
        ],
        highlights: [
          "Tight minimum bending radii",
          "Torsion resistant design",
          "Drag chain compatible",
        ],
        related: ["cable-management", "control-cables", "servo-drives", "cable-accessories"],
      },
      {
        id: "panel-wiring",
        number: "05",
        name: "Panel Wiring Cables",
        fullName: "Single-Core Industrial Panel Wiring Cables",
        category: "cables",
        categoryName: "Cables & Wiring Solutions",
        image: "/images/products/cables/panel-wiring.png",
        webpImage: "/images/products/cables/panel-wiring.webp",
        shortDescription:
          "Organized internal panel wiring solutions for clean assembly.",
        overview:
          "High-grade flexible single-core copper wires in standard industrial color codes, engineered specifically for internal panel building, switchgear interconnections, and PLC rack wiring.",
        applications: [
          "Control Panel & Switchboard Internal Wiring",
          "PLC I/O & Relay Terminal Connections",
          "Motor Starter & Power Bus Routing",
          "Distribution Enclosure Harnesses",
        ],
        features: [
          "High-flexibility bright annealed copper conductors for easy panel conduit routing",
          "High thermal rating flame-retardant PVC insulation compounds",
          "Available in comprehensive standard color coding (Red, Yellow, Blue, Black, Green, Grey)",
          "Consistent outer diameter for smooth ferrule crimping and wire marking",
        ],
        highlights: [
          "Uniform stripping and crimping properties",
          "Resistant to panel heat and moisture",
          "Flame-retardant low-smoke options",
        ],
        related: ["terminal-blocks", "cable-accessories", "control-relays", "cable-management"],
      },
      {
        id: "cable-glands-lugs",
        number: "06",
        name: "Cable Glands & Lugs",
        fullName: "Industrial Cable Glands & Heavy-Duty Crimping Lugs",
        category: "cables",
        categoryName: "Cables & Wiring Solutions",
        image: "/images/products/cables/cable-glands-lugs.png",
        webpImage: "/images/products/cables/cable-glands-lugs.webp",
        shortDescription:
          "Secure terminations and cable entry solutions for safe connections.",
        overview:
          "Precision-engineered nickel-plated brass and polyamide cable entry glands alongside electrolytic copper terminal lugs, ensuring ingress protection and zero-resistance electrical terminations.",
        applications: [
          "Enclosure & Control Panel Cable Entry Ports",
          "Motor Junction Box Cable Terminations",
          "Transformer & Busbar High-Current Terminations",
          "Hazardous & Outdoor Weatherproof Assemblies",
        ],
        features: [
          "Double-compression and single-compression brass glands with armor clamping cones",
          "High-grade EPDM sealing rings providing certified IP66/IP68 ingress protection",
          "Pure electrolytic copper crimping lugs with corrosion-resistant tin plating",
          "Inspection sight hole on lug barrels to verify complete conductor insertion",
        ],
        highlights: [
          "Metric, PG, and NPT thread standards",
          "Integrated strain relief",
          "Heavy-duty crimping mechanical strength",
        ],
        related: ["power-cables", "control-cables", "cable-accessories", "cable-management"],
      },
      {
        id: "cable-accessories",
        number: "07",
        name: "Cable Accessories",
        fullName: "Ferrules, Heat Shrink Sleeves, Cable Ties & Markers",
        category: "cables",
        categoryName: "Cables & Wiring Solutions",
        image: "/images/products/cables/cable-accessories.png",
        webpImage: "/images/products/cables/cable-accessories.webp",
        shortDescription:
          "Ferrules, sleeves, ties and essential wiring accessories.",
        overview:
          "Comprehensive assortment of essential panel assembly accessories including insulated bootlace wire ferrules, polyolefin heat shrink tubing, nylon cable ties, and alphanumeric identification sleeves.",
        applications: [
          "Conductor Strand Termination & Crimp Preparation",
          "Wire Identification & Schematics Numbering",
          "Cable Bundle Dressing & Panel Routing",
          "Electrical Joint Insulation & Moisture Sealing",
        ],
        features: [
          "Color-coded insulated bootlace wire ferrules preventing conductor strand splay",
          "Flame-retardant 2:1 heat shrink tubing offering high dielectric insulation",
          "Self-locking UV-stabilized polyamide cable ties with high tensile strength",
          "Snap-on and slip-on wire marking ferrules for quick circuit identification",
        ],
        highlights: [
          "Conforms to DIN wiring standards",
          "Durable indelible legibility",
          "Organized workshop packaging",
        ],
        related: ["panel-wiring", "cable-glands-lugs", "cable-management", "terminal-blocks"],
      },
      {
        id: "cable-management",
        number: "08",
        name: "Cable Management Support",
        fullName: "Cable Drag Chains, Slotted Ducts & Protection Conduits",
        category: "cables",
        categoryName: "Cables & Wiring Solutions",
        image: "/images/products/cables/cable-management.png",
        webpImage: "/images/products/cables/cable-management.webp",
        shortDescription:
          "Neat routing and support systems for professional installations.",
        overview:
          "High-durability cable support systems encompassing articulated plastic drag chains, slotted PVC panel wiring ducts, spiral binding, and flexible protective conduits designed for orderly routing and mechanical shielding.",
        applications: [
          "Machine Motion Axis Cable Guidance",
          "Internal Control Panel Wire Routing",
          "Flexible Conduit Drop to Field Motors",
          "Industrial Cable Tray Organization",
        ],
        features: [
          "Modular snap-together drag chains with removable crossbars for quick cable laying",
          "Slotted PVC wiring channels with non-slip covers and break-off finger slots",
          "Corrugated polyamide flexible conduit resistant to oil, solvents, and mechanical abrasion",
          "Quick-mount conduit glands and mounting brackets for rapid installation",
        ],
        highlights: [
          "Prevents cable strain and pinching",
          "High thermal deflection resistance",
          "Clean industrial panel aesthetics",
        ],
        related: ["flexible-cables", "panel-wiring", "cable-accessories", "cable-glands-lugs"],
      },
    ],
  },
  {
    id: "instrumentation",
    number: "04",
    title: "Field Instrumentation & Sensors",
    shortTitle: "Instrumentation & Sensors",
    route: "/products/instrumentation",
    subtitle:
      "Reliable sensing, measurement and signal interface solutions for modern industrial processes.",
    pills: [
      "Accurate Sensing",
      "Reliable Signals",
      "Process Ready",
      "Industrial Quality",
      "Stable Integration",
      "Technical Support",
    ],
    icon: "◎",
    products: [
      {
        id: "temperature-sensors",
        number: "01",
        name: "Temperature Sensors",
        fullName: "Industrial Temperature Sensors & Thermowells",
        category: "instrumentation",
        categoryName: "Field Instrumentation & Sensors",
        image: "/images/products/instrumentation/temperature-sensors.png",
        webpImage: "/images/products/instrumentation/temperature-sensors.webp",
        shortDescription:
          "Reliable sensing solutions for process temperature monitoring and control.",
        overview:
          "Heavy-duty head-type temperature sensor assemblies complete with aluminum terminal connection heads, stainless steel protection stems, and threaded/flanged thermowell connections designed for continuous process monitoring.",
        applications: [
          "Boiler & Heat Exchanger Temperature Monitoring",
          "Chemical Reactor & Vessel Monitoring",
          "Industrial Furnace & Kiln Thermal Control",
          "HVAC, Chillers & Thermal Fluid Circuits",
        ],
        features: [
          "Corrosion-resistant stainless steel (SS316 / SS304) thermowells for high pressure lines",
          "Cast aluminum weatherproof connection head with IP65/IP67 ingress rating",
          "Option for integrated head-mount 4-20mA / HART temperature transmitter puck",
          "Spring-loaded internal sensor insert for reliable thermal contact and rapid replacement",
        ],
        highlights: [
          "Threaded and flanged process connections",
          "High vibration and pressure tolerance",
          "Wide operational temperature coverage",
        ],
        related: ["rtd-thermocouples", "process-indicators", "signal-converters", "signal-isolators"],
      },
      {
        id: "rtd-thermocouples",
        number: "02",
        name: "RTD / Thermocouples",
        fullName: "RTD Pt100 Sensors & Thermocouple Assemblies (J/K/R/S/T)",
        category: "instrumentation",
        categoryName: "Field Instrumentation & Sensors",
        image: "/images/products/instrumentation/rtd-thermocouples.png",
        webpImage: "/images/products/instrumentation/rtd-thermocouples.webp",
        shortDescription:
          "Accurate temperature elements for industrial measurement applications.",
        overview:
          "High-precision Pt100 Class A/B Resistance Temperature Detectors (RTD) and mineral-insulated thermocouples (Types J, K, R, S, T) engineered for dependable temperature sensing from cryogenic to extreme furnace heat.",
        applications: [
          "Precision Laboratory & Medical Autoclaves",
          "Plastic Extruders & Injection Moulding Machines",
          "Food & Beverage Pasteurization and Ovens",
          "Foundry & Metal Heat Treatment",
        ],
        features: [
          "High-accuracy Class A wire-wound and thin-film platinum Pt100 elements",
          "Mineral-insulated (MI) thermocouple probes pliable for complex mechanical routing",
          "Duplex and triplex element options for redundant safety monitoring",
          "Teflon, fiberglass, and stainless steel braided lead wire configurations",
        ],
        highlights: [
          "Linear resistance-temperature response",
          "Fast thermal response time",
          "High mechanical vibration endurance",
        ],
        related: ["temperature-sensors", "process-indicators", "signal-converters", "instrumentation-cables"],
      },
      {
        id: "pressure-transmitters",
        number: "03",
        name: "Pressure Transmitters",
        fullName: "Gauge, Absolute & Differential Pressure Transmitters",
        category: "instrumentation",
        categoryName: "Field Instrumentation & Sensors",
        image: "/images/products/instrumentation/pressure-transmitters.png",
        webpImage: "/images/products/instrumentation/pressure-transmitters.webp",
        shortDescription:
          "Stable pressure measurement devices for process and utility systems.",
        overview:
          "Industrial piezoresistive and capacitive pressure transmitters featuring stainless steel wetted parts, local digital indicator displays, and 4-20mA / HART signal output for gas, liquid, and steam lines.",
        applications: [
          "Hydraulic & Pneumatic Line Pressure Monitoring",
          "Pump Discharge & Header Pressure Regulation",
          "Steam Boiler & Compressed Air Monitoring",
          "Filter Differential Pressure & Clog Detection",
        ],
        features: [
          "Robust piezoresistive sensing diaphragm with high overpressure burst limit",
          "Standard 4-20mA 2-wire loop-powered output with optional HART protocol",
          "Integrated rotating digital LCD/LED display for on-site pressure reading",
          "Zero and span push-button field calibration adjustments",
        ],
        highlights: [
          "Stainless steel SS316L wetted parts",
          "High temperature and surge protection",
          "IP65 / IP67 robust industrial housing",
        ],
        related: ["flow-transmitters", "level-sensors", "process-indicators", "signal-isolators"],
      },
      {
        id: "flow-transmitters",
        number: "04",
        name: "Flow Transmitters",
        fullName: "Electromagnetic & Turbine Industrial Flow Transmitters",
        category: "instrumentation",
        categoryName: "Field Instrumentation & Sensors",
        image: "/images/products/instrumentation/flow-transmitters.png",
        webpImage: "/images/products/instrumentation/flow-transmitters.webp",
        shortDescription:
          "Flow monitoring solutions for liquids, gases and industrial lines.",
        overview:
          "High-accuracy electromagnetic, vortex, and turbine flow transmitters built to measure instantaneous flow rate and accumulated totalized volume across water pipelines, chemicals, fuels, and industrial utilities.",
        applications: [
          "Water & Wastewater Flow Monitoring",
          "Chemical Dosing & Batching Systems",
          "Cooling Water & Chiller Loop Metering",
          "Food, Beverage & Dairy Process Lines",
        ],
        features: [
          "Obstructionless flow tube with zero pressure loss for conductive fluids",
          "Microprocessor-based transmitter converter with dual-line backlit digital display",
          "Simultaneous analog 4-20mA, pulse frequency, and RS485 Modbus outputs",
          "Bidirectional flow measurement capability with forward/reverse totalization",
        ],
        highlights: [
          "PTFE and Hard Rubber liner options",
          "Flanged industrial pipe installation",
          "Compact and remote transmitter head mounting",
        ],
        related: ["level-sensors", "pressure-transmitters", "process-indicators", "plcs"],
      },
      {
        id: "level-sensors",
        number: "05",
        name: "Level Sensors",
        fullName: "Ultrasonic, Radar & Hydrostatic Level Transmitters",
        category: "instrumentation",
        categoryName: "Field Instrumentation & Sensors",
        image: "/images/products/instrumentation/level-sensors.png",
        webpImage: "/images/products/instrumentation/level-sensors.webp",
        shortDescription:
          "Dependable level sensing for tanks, vessels and storage applications.",
        overview:
          "Continuous level measurement transmitters and point level switches utilizing non-contact ultrasonic, guided-wave radar, and submersible hydrostatic pressure technologies for tanks, silos, and sumps.",
        applications: [
          "Liquid Storage Tanks & Chemical Reservoirs",
          "Water Treatment Sumps, Basins & Pumping Wells",
          "Bulk Solid & Powder Hopper Monitoring",
          "Coolant Tanks & Hydraulic Power Unit Reservoirs",
        ],
        features: [
          "Non-contact ultrasonic and radar transducers immune to liquid corrosion",
          "Submersible hydrostatic transmitters with vented PUR cable for deep borewells",
          "Echo tracking algorithms that filter out internal vessel obstacles and agitator blades",
          "Programmable level alarms, volumetric calculations, and 4-20mA analog output",
        ],
        highlights: [
          "IP68 submersible and IP66 non-contact enclosures",
          "Local digital display programming",
          "Maintenance-free solid-state operation",
        ],
        related: ["flow-transmitters", "pressure-transmitters", "process-indicators", "signal-isolators"],
      },
      {
        id: "signal-isolators",
        number: "06",
        name: "Signal Isolators",
        fullName: "Galvanic Analog Signal Isolators (4-20mA / 0-10V)",
        category: "instrumentation",
        categoryName: "Field Instrumentation & Sensors",
        image: "/images/products/instrumentation/signal-isolators.png",
        webpImage: "/images/products/instrumentation/signal-isolators.webp",
        shortDescription:
          "Signal conditioning devices for safe and accurate interface isolation.",
        overview:
          "High-isolation 3-way galvanic signal isolators designed to break ground loops, suppress common-mode electrical noise, and safely protect sensitive PLC/DCS analog inputs from hazardous field surges.",
        applications: [
          "Eliminating Field Ground Loops in 4-20mA Loops",
          "Field Sensor to PLC Analog Card Isolation",
          "Substation Instrumentation Interfacing",
          "Signal Splitting (1 Input to 2 Isolated Outputs)",
        ],
        features: [
          "True 3-way galvanic isolation between input, output, and auxiliary power supply",
          "High dielectric isolation withstand test voltage up to 2.5 kV AC",
          "High conversion accuracy with low temperature drift coefficient",
          "Loop-powered (passive) and auxiliary-powered (active) module models",
        ],
        highlights: [
          "Ultra-slim 6.2mm or 12.5mm DIN-rail footprint",
          "Zero and span trimming adjustments",
          "LED power and fault indication",
        ],
        related: ["signal-converters", "io-modules", "process-indicators", "pressure-transmitters"],
      },
      {
        id: "signal-converters",
        number: "07",
        name: "Signal Converters",
        fullName: "Multi-Input Signal Conditioners & Converters",
        category: "instrumentation",
        categoryName: "Field Instrumentation & Sensors",
        image: "/images/products/instrumentation/signal-converters.png",
        webpImage: "/images/products/instrumentation/signal-converters.webp",
        shortDescription:
          "Reliable signal conversion solutions for control and communication compatibility.",
        overview:
          "Universal DIN-rail signal conditioning modules that accept RTD, thermocouple, frequency, potentiometer, or DC millivolt signals and convert them into standardized industrial 4-20mA, 0-10V, or Modbus RS485 data.",
        applications: [
          "RTD / Thermocouple to 4-20mA Conversion",
          "0-10V to 4-20mA Level Shifting",
          "Frequency and Pulse to Analog Rate Conversion",
          "Load Cell & Strain Gauge Signal Conditioning",
        ],
        features: [
          "Universal multi-input capability configurable via front DIP switches or software",
          "Cold junction compensation (CJC) for high-precision thermocouple measurements",
          "Integrated linearized resistance and thermocouple conversion curves",
          "Galvanic 3-way isolation preventing sensor interference and field faults",
        ],
        highlights: [
          "Compact DIN-rail enclosure",
          "Pluggable terminal block headers",
          "High measurement resolution",
        ],
        related: ["signal-isolators", "rtd-thermocouples", "process-indicators", "io-modules"],
      },
      {
        id: "process-indicators",
        number: "08",
        name: "Process Indicators / Controllers",
        fullName: "Digital Panel Process Indicators & PID Controllers",
        category: "instrumentation",
        categoryName: "Field Instrumentation & Sensors",
        image: "/images/products/instrumentation/process-indicators.png",
        webpImage: "/images/products/instrumentation/process-indicators.webp",
        shortDescription:
          "Compact display and control units for process monitoring and regulation.",
        overview:
          "Precision panel-mount digital process indicators and intelligent PID controllers with dual high-brightness 7-segment displays, relay alarm outputs, and Modbus communications for monitoring temperature, pressure, flow, and level.",
        applications: [
          "Furnace & Oven PID Temperature Control",
          "Process Tank Level & Volume Display",
          "Pipeline Flow Rate & Totalizer Indication",
          "Control Panel Local Parameter Readout",
        ],
        features: [
          "Dual multi-color LED display for simultaneous Process Value (PV) and Set Value (SV)",
          "Universal input accepting RTD, thermocouples, 4-20mA, and 0-10V DC signals",
          "Auto-tuning PID control algorithm for precise thermal stability with zero overshoot",
          "Configurable relay alarm outputs (High, Low, Deviation) and 4-20mA retransmission",
        ],
        highlights: [
          "Standard 48x48, 72x72, 96x96 DIN panel sizes",
          "IP65 front waterproof membrane keypad",
          "RS485 Modbus RTU interface",
        ],
        related: ["temperature-sensors", "rtd-thermocouples", "pressure-transmitters", "flow-transmitters"],
      },
    ],
  },
];

// Flat array of all 32 products for fast search / iteration
export const allProducts = productCategories.flatMap((cat) => cat.products);

// Lookup a product by its category and productId (or slug)
export function getProduct(category, productId) {
  if (!productId) return null;
  const targetId = productId.toLowerCase();
  if (category) {
    let targetCat = category.toLowerCase();
    if (targetCat === "electrical-control") targetCat = "electrical";
    const product = allProducts.find(
      (p) => (p.category === targetCat || (targetCat === "electrical" && p.category === "electrical-control")) && p.id === targetId
    );
    if (product) return product;
  }
  return allProducts.find((p) => p.id === targetId) || null;
}

// Lookup category by id (supports 'electrical-control' alias for 'electrical')
export function getCategory(categoryId) {
  if (!categoryId) return null;
  const target = categoryId.toLowerCase();
  return (
    productCategories.find(
      (cat) => cat.id === target || (target === "electrical-control" && cat.id === "electrical")
    ) || null
  );
}

// Lookup related products
export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  const currentCat = getCategory(product.category);
  if (!currentCat) return [];

  // Filter out current product, prefer explicit related array or same category
  const explicitRelated = (product.related || [])
    .map((relId) => allProducts.find((p) => p.id === relId))
    .filter(Boolean);

  const pool = [
    ...explicitRelated,
    ...currentCat.products.filter((p) => p.id !== product.id),
  ];

  // De-duplicate
  const seen = new Set();
  const result = [];
  for (const item of pool) {
    if (!seen.has(item.id) && item.id !== product.id) {
      seen.add(item.id);
      result.push(item);
    }
    if (result.length >= limit) break;
  }
  return result;
}

// Authorized brands supplied by Nascon Technologies
export const authorizedBrands = [
  {
    number: "01",
    slug: "phoenix",
    name: "Phoenix Contact",
    description: "Terminal blocks, interface modules, power supplies and connectivity solutions.",
  },
  {
    number: "02",
    slug: "multispan",
    name: "Multispan",
    description: "Temperature controllers, timers, counters and process instruments.",
  },
  {
    number: "03",
    slug: "schneider",
    name: "Schneider Electric",
    description: "Switching, protection, industrial control and automation components.",
  },
  {
    number: "04",
    slug: "siemens",
    name: "Siemens",
    description: "PLCs, HMIs, drives, industrial communication and control products.",
  },
  {
    number: "05",
    slug: "selec",
    name: "Selec",
    description: "Meters, timers, protection relays and industrial control products.",
  },
  {
    number: "06",
    slug: "finolex",
    name: "Finolex",
    description: "Power, control and panel wiring cables.",
  },
  {
    number: "07",
    slug: "gloster",
    name: "Gloster",
    description: "Power, control and instrumentation cable solutions.",
  },
];
