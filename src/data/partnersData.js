// ============================================================================
// NASCON TECHNOLOGIES - PARTNERS CATALOGUE DATASET
// Reference: NASCON Technologies 32-Page Industrial Brochure (Pages 23-28)
// Partners: Phoenix Contact, Multispan, Schneider Electric, Siemens, Selec, Finolex, Gloster
// ============================================================================

export const partnersData = [
  // --------------------------------------------------------------------------
  // 1. PHOENIX CONTACT (Page 25)
  // --------------------------------------------------------------------------
  {
    slug: "phoenix",
    number: "01",
    name: "Phoenix Contact",
    category: "Industrial Automation & Connectivity",
    logo: "/images/partners/phoenix-contact-brochure.png",
    logoWebp: "/images/partners/phoenix-contact-brochure.webp",
    heroImage: "/images/partners/phoenix/hero.png",
    heroImageWebp: "/images/partners/phoenix/hero.webp",
    eyebrow: "GLOBAL TECHNOLOGY PARTNER",
    headline: "Industrial Automation & Connectivity",
    tagline:
      "Pioneering electrical connection, interface electronics, surge protection, and open automation systems.",
    overview:
      "Phoenix Contact is a worldwide market leader in electrical connection technology, electronic interfaces, and industrial automation. NASCON Technologies integrates Phoenix Contact's legendary push-in terminal blocks, QUINT power supplies, RIFLINE relays, and PLCnext open controllers for rock-solid panel builds.",
    brochurePage: "Page 25",
    keyThemes: [
      { label: "Innovative Technology", desc: "Patented push-in connection and open Linux PLCnext controllers" },
      { label: "Complete Quality", desc: "Rigorous German quality engineering with 100% testing" },
      { label: "Clipline Complete", desc: "Standardized accessories across all terminal block technologies" },
      { label: "Trabtech Surge Defense", desc: "Comprehensive surge protection from grid entrance to end-device" },
    ],
    categories: [
      {
        id: "plc",
        number: "01",
        title: "PLCnext Technology Controllers",
        subtitle: "Open Industrial Linux Controllers & I/O",
        image: "/images/partners/phoenix/plc.png",
        webpImage: "/images/partners/phoenix/plc.webp",
        shortDescription:
          "Open ecosystem controllers combining standard PLC determinism with high-level languages like C++, Python, and Node-RED.",
        features: [
          "PLCnext Control AXC and RFC modular industrial controllers",
          "Real-time Linux operating system with deterministic execution",
          "Parallel programming in IEC 61131-3, C++, C#, Python, and Simulink",
          "Direct cloud telemetry via MQTT, REST API, and Proficloud",
        ],
        applications: [
          "Smart edge computing and machine learning on the shop floor",
          "Modular automation skids and process units",
          "Distributed renewable energy monitoring",
          "Modern Industry 4.0 production cells",
        ],
      },
      {
        id: "hmi",
        number: "02",
        title: "HMI & Industrial PCs",
        subtitle: "Capacitive Touch Panels & Fanless Box PCs",
        image: "/images/partners/phoenix/hmi.png",
        webpImage: "/images/partners/phoenix/hmi.webp",
        shortDescription:
          "High-resolution multi-touch displays and fanless industrial computers for harsh operating environments.",
        features: [
          "Capacitive glass multi-touch displays with gesture control",
          "Embedded HTML5 web visualization without client licenses",
          "Fanless industrial PC hardware rated for continuous 24/7 duty",
          "Wide operating temperature range (-20°C to +60°C)",
        ],
        applications: [
          "Machine visualization and process graphics",
          "SCADA client terminals and plant dashboards",
          "Interactive kiosk and automated testing benches",
          "Outdoor solar and municipal water installations",
        ],
      },
      {
        id: "terminals",
        number: "03",
        title: "Terminal Blocks (Clipline Complete)",
        subtitle: "Push-in (PT), Screw (UT) & Spring (ST)",
        image: "/images/partners/phoenix/terminals.png",
        webpImage: "/images/partners/phoenix/terminals.webp",
        shortDescription:
          "The world's most versatile terminal block system with standardized bridging, testing, and marking.",
        features: [
          "Push-in (PT) connection cuts cabinet wiring time by up to 50%",
          "Standardized dual bridge system shared across all terminal families",
          "Vibration-proof, gas-tight contact springs requiring zero re-tightening",
          "Comprehensive multi-tier, disconnect, fuse, and sensor terminal blocks",
        ],
        applications: [
          "Control panels, marshalling racks & junction boxes",
          "Power distribution and neutral/earth marshaling",
          "Factory instrumentation signal routing",
          "Heavy rail, marine, and explosive hazard cabinets",
        ],
      },
      {
        id: "interface",
        number: "04",
        title: "Interface Technology & Isolators",
        subtitle: "Signal Conditioners, Transducers & Ex-i Barriers",
        image: "/images/partners/phoenix/interface.png",
        webpImage: "/images/partners/phoenix/interface.webp",
        shortDescription:
          "Precision signal conditioners and 3-way galvanic isolators preventing ground loops and noise.",
        features: [
          "MINI Analog Pro ultra-slim 6.2mm signal conditioners",
          "3-way galvanic isolation between input, output, and power supply",
          "Universal temperature (RTD, TC), voltage, current, and frequency conversion",
          "NFC smartphone parameterization and DIP switch configuration",
        ],
        applications: [
          "Elimination of earth loops in analog measurement",
          "Signal conversion from RTD/TC into standard 4-20mA / 0-10V",
          "Hazardous area intrinsic safety (Ex-i) isolation",
          "Current loop amplification and splitting",
        ],
      },
      {
        id: "power-supply",
        number: "05",
        title: "Power Supplies (QUINT POWER)",
        subtitle: "QUINT with SFB Technology, TRIO & STEP",
        image: "/images/partners/phoenix/power-supply.png",
        webpImage: "/images/partners/phoenix/power-supply.webp",
        shortDescription:
          "High-end power supplies with SFB technology for fast, selective magnetic tripping of standard circuit breakers.",
        features: [
          "QUINT POWER with SFB (Selective Fuse Breaking) technology",
          "Dynamic boost delivers up to 200% power for 5 seconds",
          "Preventive function monitoring with early fault warning before outage",
          "High MTBF (>500,000 hours) with integrated lightning surge immunity",
        ],
        applications: [
          "Continuous critical manufacturing plants",
          "Petrochemical refineries and offshore platforms",
          "Pharmaceutical sterile cleanrooms",
          "Automated parcel sorting and logistics",
        ],
      },
      {
        id: "relays",
        number: "06",
        title: "Relay Modules (RIFLINE Complete)",
        subtitle: "Slimline 6.2mm, Industrial Relays & SSRs",
        image: "/images/partners/phoenix/relays.png",
        webpImage: "/images/partners/phoenix/relays.webp",
        shortDescription:
          "Modular plug-in industrial relays, optocouplers, and solid-state modules with push-in wiring.",
        features: [
          "PLC-INTERFACE 6.2mm ultra-slim relay modules with plug-in relays",
          "RIFLINE Complete modular relay family from 1 to 4 PDT contacts",
          "Integrated status LED and reverse polarity protection diode",
          "Solid-state relay options for wear-free high-frequency switching",
        ],
        applications: [
          "Interposing relay banks between PLC outputs and field loads",
          "Solenoid valve and hydraulic actuator switching",
          "Signal multiplication and dry contact output",
          "Fast electronic pulse counting circuits",
        ],
      },
      {
        id: "surge-protection",
        number: "07",
        title: "Surge Protection (Trabtech)",
        subtitle: "Type 1, 2 & 3 SPDs, Signal & MCR Protection",
        image: "/images/partners/phoenix/surge-protection.png",
        webpImage: "/images/partners/phoenix/surge-protection.webp",
        shortDescription:
          "Comprehensive surge arresters and transient voltage surge suppressors (TVSS) for power and signals.",
        features: [
          "VALVETRAB modular surge protective devices (Type 1+2 and Type 2)",
          "PLUGTRAB plug-in protection for 4-20mA instrumentation and bus lines",
          "Visual mechanical flag indication and remote dry contact signaling",
          "Fast response time (<25ns) to divert extreme lightning surges",
        ],
        applications: [
          "Main LV incoming distribution boards",
          "Outdoor instrumentation and remote sensor lines",
          "Industrial Ethernet and RS-485 communication ports",
          "Solar PV combiner boxes and inverter outputs",
        ],
      },
      {
        id: "networking",
        number: "08",
        title: "Industrial Networking & Wireless",
        subtitle: "FL SWITCH, mGuard Security & Cellular Routers",
        image: "/images/partners/phoenix/networking.png",
        webpImage: "/images/partners/phoenix/networking.webp",
        shortDescription:
          "Hardened Ethernet switches, wireless modules, and mGuard industrial cybersecurity appliances.",
        features: [
          "FL SWITCH unmanaged and managed Industrial Ethernet switches",
          "FL mGuard hardware security routers with stateful inspection firewall",
          "Industrial WLAN, Bluetooth, and 4G/5G cellular VPN gateways",
          "Gigabit ports, PoE+ (Power over Ethernet), and fiber optic SFP bays",
        ],
        applications: [
          "Plant OT communication infrastructure",
          "Secure remote machine access and VPN service tunnels",
          "Automated Guided Vehicle (AGV) wireless communication",
          "SCADA and IP camera video surveillance backbones",
        ],
      },
    ],
    whyChoose: [
      {
        title: "Push-in Connection Pioneers",
        desc: "Invented push-in technology, allowing direct, tool-free conductor insertion and saving 50% cabinet build time.",
      },
      {
        title: "Clipline Complete System",
        desc: "Unified bridging, marking, and testing accessories fit all screw, push-in, and spring-cage terminal blocks.",
      },
      {
        title: "SFB Technology Power Supplies",
        desc: "QUINT supplies supply 6x nominal current for 12ms to selectively trip faulty branch breakers without collapsing 24V bus.",
      },
      {
        title: "Open Automation with PLCnext",
        desc: "Integrate open-source software, high-level code, and classical IEC logic seamlessly on one industrial controller.",
      },
      {
        title: "Comprehensive Surge Defense",
        desc: "The industry's most tested lightning and surge protection solutions for power, signals, and networks.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 2. MULTISPAN (Page 26)
  // --------------------------------------------------------------------------
  {
    slug: "multispan",
    number: "02",
    name: "Multispan",
    category: "Process Instrumentation & Control",
    logo: "/images/partners/multispan.png",
    logoWebp: "/images/partners/multispan.webp",
    heroImage: "/images/partners/multispan/hero.png",
    heroImageWebp: "/images/partners/multispan/hero.webp",
    eyebrow: "LEADING INDIAN INSTRUMENTATION",
    headline: "Process Instrumentation & Control",
    tagline:
      "Precision temperature controllers, digital panel meters, timers, and process instrumentation for industrial automation.",
    overview:
      "Multispan is one of India's premier manufacturers of digital panel instruments, process indicators, temperature controllers, and protection relays. With decades of excellence, Multispan delivers highly accurate, robust, and cost-effective instrumentation that NASCON Technologies supplies for control panels, machine tools, and OEM applications.",
    brochurePage: "Page 26",
    keyThemes: [
      { label: "High Precision", desc: "Accurate parameter sensing, indication, and closed-loop control" },
      { label: "Robust Industrial Build", desc: "High noise immunity engineered for Indian operating conditions" },
      { label: "Intuitive Interface", desc: "Bright 7-segment displays with simple keypad programming" },
      { label: "Cost-Effective Value", desc: "High performance-to-cost ratio with rapid availability" },
    ],
    categories: [
      {
        id: "temperature-controllers",
        number: "01",
        title: "Temperature Controllers",
        subtitle: "MTX-1200, MT-44, UTC & PID Series",
        image: "/images/partners/multispan/temperature-controllers.png",
        webpImage: "/images/partners/multispan/temperature-controllers.webp",
        shortDescription:
          "Advanced auto-tuning PID and ON/OFF temperature controllers for precision thermal regulation.",
        features: [
          "MTX-1200 and MT-44 micro-controller based temperature controllers",
          "Universal thermocouple (J, K, R, S) and RTD (Pt100) sensor inputs",
          "Auto-tuning PID algorithm with relay and SSR drive control outputs",
          "Brilliant dual 4-digit 7-segment LED display for PV and SV",
        ],
        applications: [
          "Plastic injection molding & extrusion barrels",
          "Packaging machine heat-sealing jaws",
          "Industrial ovens, furnaces & autoclaves",
          "HVAC chillers and water heating baths",
        ],
      },
      {
        id: "timers",
        number: "02",
        title: "Digital Timers",
        subtitle: "MD-10, MD-20, Sequential & Cyclic Units",
        image: "/images/partners/multispan/timers.png",
        webpImage: "/images/partners/multispan/timers.webp",
        shortDescription:
          "Multi-range programmable digital timers offering flexible timing modes and high repeatability.",
        features: [
          "MD-10 and MD-20 multi-range digital electronic timers",
          "Selectable On-Delay, Off-Delay, Cyclic (On-first / Off-first) modes",
          "Wide timing ranges from 0.01 seconds up to 999 hours",
          "Quartz crystal timebase ensuring exceptional accuracy and low drift",
        ],
        applications: [
          "Automated machine work cycling",
          "Conveyor sequential indexing and sorting",
          "Star-delta motor transition delays",
          "Lubrication pump automatic interval pulsing",
        ],
      },
      {
        id: "counters",
        number: "03",
        title: "Digital Counters & Length Meters",
        subtitle: "MC-24, Length & Batch Totalizers",
        image: "/images/partners/multispan/counters.png",
        webpImage: "/images/partners/multispan/counters.webp",
        shortDescription:
          "High-speed digital pulse counters and length totalizers with programmable scaling factor.",
        features: [
          "MC-24 multi-function digital counters and batch totalizers",
          "Accepts NPN/PNP proximity sensors, microswitches, and encoder inputs",
          "Programmable scale factor for direct metric/imperial length readout",
          "Non-volatile EEPROM memory retentive on power outage",
        ],
        applications: [
          "Cable, pipe, and wire length measurement",
          "Packaging batch counting and carton packing",
          "Textile weaving and rolling machinery",
          "Production piece-rate machine totalizing",
        ],
      },
      {
        id: "panel-meters",
        number: "04",
        title: "Digital Panel Meters",
        subtitle: "Volt, Amp, Frequency & True RMS Meters",
        image: "/images/partners/multispan/panel-meters.png",
        webpImage: "/images/partners/multispan/panel-meters.webp",
        shortDescription:
          "Compact single-phase and 3-phase digital meters for voltage, current, and frequency monitoring.",
        features: [
          "High-accuracy digital AC/DC voltmeters and ammeters",
          "Field-programmable CT secondary ratio (1A / 5A) and PT ratios",
          "True RMS measurement accurately reading distorted thyristor loads",
          "Standard DIN panel cutouts (96x96mm, 48x96mm, and 72x72mm)",
        ],
        applications: [
          "Electrical control and distribution panels",
          "Diesel generator (DG) set instrument clusters",
          "Motor starter panels and MCC cubicles",
          "Sub-distribution and feeder monitoring",
        ],
      },
      {
        id: "process-indicators",
        number: "05",
        title: "Process Indicators",
        subtitle: "PI-96, PI-48 & Universal Loop Indicators",
        image: "/images/partners/multispan/process-indicators.png",
        webpImage: "/images/partners/multispan/process-indicators.webp",
        shortDescription:
          "Universal process indicators accepting standard 4-20mA, 0-10V, and RTD signals with custom scaling.",
        features: [
          "PI-96 and PI-48 universal input process indicators",
          "Configurable display scaling from -1999 to 9999 with decimal point",
          "Programmable engineering units (bar, psi, °C, RPM, m3/hr, kg)",
          "Optional 4-20mA retransmission output and RS-485 Modbus connectivity",
        ],
        applications: [
          "Pressure transmitter readout in pump lines",
          "Storage tank liquid level measurement",
          "Chemical flow rate and total flow display",
          "Process temperature monitoring loops",
        ],
      },
      {
        id: "protection-relays",
        number: "06",
        title: "Protection Relays",
        subtitle: "Voltage, Current & Phase Failure Relays",
        image: "/images/partners/multispan/protection-relays.png",
        webpImage: "/images/partners/multispan/protection-relays.webp",
        shortDescription:
          "Electronic monitoring relays safeguarding equipment against phase loss, asymmetry, and voltage faults.",
        features: [
          "Comprehensive phase failure, phase reversal, and unbalance protection",
          "Adjustable over-voltage and under-voltage trip thresholds",
          "Configurable trip time delay to prevent false tripping on surges",
          "Clear LED indicators displaying exact fault nature for quick diagnostics",
        ],
        applications: [
          "Three-phase industrial motor protection",
          "Refrigeration compressor safeguarding",
          "Elevator and hoist motor panels",
          "Submersible and deep-well pump panels",
        ],
      },
      {
        id: "instruments",
        number: "07",
        title: "Automation Instruments",
        subtitle: "Humidity, RPM, Speed & Flow Units",
        image: "/images/partners/multispan/instruments.png",
        webpImage: "/images/partners/multispan/instruments.webp",
        shortDescription:
          "Specialized speed, RPM, humidity, and frequency indicators for industrial machine control.",
        features: [
          "Digital RPM and line speed indicators with sensor excitation supply",
          "Temperature and relative humidity (%RH) environmental monitors",
          "High sampling speed ensuring instantaneous response to machine variations",
          "Configurable alarm relay contacts for overspeed or high-humidity trips",
        ],
        applications: [
          "Conveyor line and conveyor roller speed",
          "Printing machine and laminating roll velocity",
          "Cleanrooms and pharmaceutical warehouses",
          "Textile spinning frame spindle speed monitoring",
        ],
      },
      {
        id: "control-devices",
        number: "08",
        title: "Industrial Control Devices",
        subtitle: "Solid State Relays, Signal Isolators & Transducers",
        image: "/images/partners/multispan/control-devices.png",
        webpImage: "/images/partners/multispan/control-devices.webp",
        shortDescription:
          "Solid-state switching relays, transducers, and signal isolators for noise-free plant control.",
        features: [
          "Single-phase and 3-phase AC/DC solid state relays (SSR)",
          "Zero-crossing switching minimizing EMI electrical noise generation",
          "Optical galvanic signal isolators eliminating common-mode voltage",
          "Built-in RC snubber circuit protecting against inductive voltage spikes",
        ],
        applications: [
          "High-speed PID temperature control loops",
          "Electric furnace heater elements",
          "Signal isolation between noisy field devices and PLCs",
          "High duty-cycle repetitive switching loads",
        ],
      },
    ],
    whyChoose: [
      {
        title: "35+ Years of Indian Manufacturing",
        desc: "Deep expertise in Indian power conditions, voltage fluctuations, and harsh operating environments.",
      },
      {
        title: "Proven Reliability & Ruggedness",
        desc: "Field-proven across thousands of control panels, textile machinery, and furnace installations nationwide.",
      },
      {
        title: "Optimal Cost-to-Performance",
        desc: "Delivers precision instrumentation at competitive price points, maximizing ROI for OEMs and panel builders.",
      },
      {
        title: "Standard Form Factors",
        desc: "Direct drop-in standard DIN cutouts (96x96, 48x48, 72x72) making replacements fast and painless.",
      },
      {
        title: "Immediate Availability",
        desc: "Ready off-the-shelf inventory supported by NASCON Technologies for rapid project turnaround.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 3. SCHNEIDER ELECTRIC (Page 23)
  // --------------------------------------------------------------------------
  {
    slug: "schneider",
    number: "03",
    name: "Schneider Electric",
    category: "Industrial Control & Automation",
    logo: "/images/partners/schneider-electric.png",
    logoWebp: "/images/partners/schneider-electric.webp",
    heroImage: "/images/partners/schneider/hero.png",
    heroImageWebp: "/images/partners/schneider/hero.webp",
    eyebrow: "GLOBAL TECHNOLOGY PARTNER",
    headline: "Industrial Control & Automation Solutions",
    tagline:
      "Empowering modern industries with world-class electrical distribution, motor management, and smart automation technologies.",
    overview:
      "Schneider Electric is a global specialist in energy management and automation. As an authorized integration and distribution partner, NASCON Technologies supplies and integrates Schneider's industry-leading circuit protection, contactors, variable speed drives, Modicon PLCs, and Harmony operator interfaces for reliable, energy-efficient operations.",
    brochurePage: "Page 23",
    keyThemes: [
      { label: "World-Class Quality", desc: "Global benchmark in electrical and industrial engineering" },
      { label: "Energy Efficient", desc: "EcoStruxure IoT architectures optimizing energy consumption" },
      { label: "Safe & Reliable", desc: "Rigorous compliance with international IEC, UL, and CE standards" },
      { label: "Global Support", desc: "Standardized platforms with extensive global technical availability" },
    ],
    categories: [
      {
        id: "mcb",
        number: "01",
        title: "Circuit Protection & MCBs",
        subtitle: "Acti9, Miniature Circuit Breakers & RCDs",
        image: "/images/partners/schneider/mcb.png",
        webpImage: "/images/partners/schneider/mcb.webp",
        shortDescription:
          "High-performance miniature and molded case circuit breakers for dependable electrical protection.",
        features: [
          "Acti9 miniature circuit breakers (MCBs) with VisiTrip and VisiSafe",
          "Residual current circuit breakers (RCCBs) for earth leakage protection",
          "Compact NSX molded case circuit breakers (MCCBs) up to 630A",
          "High breaking capacity up to 25kA with rapid trip mechanism",
        ],
        applications: [
          "Main distribution boards & sub-panels",
          "Motor feeder short-circuit protection",
          "OEM industrial machinery cabinets",
          "Critical commercial power distribution",
        ],
      },
      {
        id: "contactors",
        number: "02",
        title: "Contactors & Motor Starters",
        subtitle: "TeSys D, TeSys F & Electronic Overload Relays",
        image: "/images/partners/schneider/contactors.png",
        webpImage: "/images/partners/schneider/contactors.webp",
        shortDescription:
          "Robust motor switching and overload protection engineered for high duty cycles and demanding environments.",
        features: [
          "TeSys D contactors from 9A to 150A with AC/DC low-consumption coils",
          "TeSys F heavy-duty contactors up to 1000A for heavy power drives",
          "Class 10/20 thermal and solid-state electronic overload relays",
          "Integrated EverLink patented creepage-free power terminal blocks",
        ],
        applications: [
          "Motor Control Centers (MCC)",
          "Industrial pumps, compressors & fans",
          "Conveyor handling and material transfer",
          "Star-delta and DOL automatic motor starters",
        ],
      },
      {
        id: "vfd",
        number: "03",
        title: "Variable Speed Drives",
        subtitle: "Altivar ATV12, ATV320, ATV630 & ATV930",
        image: "/images/partners/schneider/vfd.png",
        webpImage: "/images/partners/schneider/vfd.webp",
        shortDescription:
          "Advanced variable frequency drives delivering intelligent motor control, energy savings, and connectivity.",
        features: [
          "Sensorless flux vector control for asynchronous and permanent magnet motors",
          "Embedded Modbus RTU, CANopen, Ethernet/IP, and PROFINET communication",
          "Built-in Safe Torque Off (STO SIL3) safety functions",
          "Intelligent energy dashboard providing real-time kWh power measurement",
        ],
        applications: [
          "HVAC chiller & pump flow modulation",
          "Packaging and bottling machine synchronization",
          "Material handling, cranes & hoist drives",
          "Extrusion and continuous process lines",
        ],
      },
      {
        id: "plc-hmi",
        number: "04",
        title: "PLCs & HMI Systems",
        subtitle: "Modicon M221, M241, M251 & Harmony Displays",
        image: "/images/partners/schneider/plc-hmi.png",
        webpImage: "/images/partners/schneider/plc-hmi.webp",
        shortDescription:
          "Scalable machine controllers and intuitive operator touchscreen displays for automated machinery.",
        features: [
          "Modicon M221 compact micro-PLCs with embedded Ethernet and pulse I/O",
          "Modicon M241/M251 high-performance controllers with dual-core processing",
          "Harmony STO/STU/GTO touchscreen HMIs with high-res TFT color displays",
          "Integrated programming via EcoStruxure Machine Expert software",
        ],
        applications: [
          "Special Purpose Machines (SPM)",
          "Pharmaceutical and cleanroom automation",
          "Automated assembly lines",
          "Distributed pumping and remote telemetry skids",
        ],
      },
      {
        id: "power-supply",
        number: "05",
        title: "Power Supplies & Transformers",
        subtitle: "Phaseo & Modicon Regulated Power Solutions",
        image: "/images/partners/schneider/power-supply.png",
        webpImage: "/images/partners/schneider/power-supply.webp",
        shortDescription:
          "Regulated switch-mode DC power supplies providing stable voltage under demanding industrial power grids.",
        features: [
          "Regulated 24V DC switch mode power supplies (1.2A to 40A)",
          "Wide universal input voltage range (100–500V AC single/three-phase)",
          "Power boost capability to handle dynamic startup inrush loads",
          "Comprehensive short-circuit, overvoltage, and thermal protection",
        ],
        applications: [
          "Automation cabinet 24V DC distribution",
          "PLC CPU and I/O module power supply",
          "Field instrumentation loop excitation",
          "Sensors, safety relays, and solenoid drive circuits",
        ],
      },
      {
        id: "control-signaling",
        number: "06",
        title: "Control & Signaling Units",
        subtitle: "Harmony XB4 Metallic & XB5 Plastic Units",
        image: "/images/partners/schneider/control-signaling.png",
        webpImage: "/images/partners/schneider/control-signaling.webp",
        shortDescription:
          "Ergonomic 22mm pushbuttons, selector switches, pilot lights, and emergency stop devices.",
        features: [
          "Harmony XB4 chromium-plated metal & XB5 double-insulated plastic units",
          "Trigger-action emergency stops compliant with EN/ISO 13850",
          "Protected LED pilot lights with 100,000 hours operating life",
          "Modular clip-together contact blocks (NO, NC, slow & snap break)",
        ],
        applications: [
          "Machine operator control stations",
          "Panel door pushbuttons & annunciator lamps",
          "Emergency stop pull-boxes and field trip consoles",
          "Local-remote manual selection stations",
        ],
      },
      {
        id: "panel-components",
        number: "07",
        title: "Panel Components & Relays",
        subtitle: "Zelio Relays, Timers & Monitoring Devices",
        image: "/images/partners/schneider/panel-components.png",
        webpImage: "/images/partners/schneider/panel-components.webp",
        shortDescription:
          "Electromechanical plug-in relays, solid-state relays, and electronic monitoring relays for panels.",
        features: [
          "Zelio plug-in miniature relays with mechanical status flags and test latch",
          "Solid-state relays (SSR) for high-frequency silent heater switching",
          "Phase failure, asymmetry, over/under voltage monitoring relays",
          "Multi-function electronic timers with wide timing ranges",
        ],
        applications: [
          "Interposing relay panels for PLC outputs",
          "Alarm annunciators and fault trip circuits",
          "Temperature and process heater switching",
          "Three-phase supply quality verification",
        ],
      },
      {
        id: "accessories",
        number: "08",
        title: "Enclosure Accessories & Wiring",
        subtitle: "Linergy Distribution, Trunking & Climate Control",
        image: "/images/partners/schneider/accessories.png",
        webpImage: "/images/partners/schneider/accessories.webp",
        shortDescription:
          "Power distribution busbars, cable trunking, din rails, and cabinet thermal management units.",
        features: [
          "Linergy compact power distribution blocks up to 250A",
          "Slotted PVC wiring channels with snap-on covers",
          "Cabinet cooling fans, exhaust filters, and anti-condensation heaters",
          "Pre-punched DIN rails and heavy-duty earthing bars",
        ],
        applications: [
          "Control cabinet wiring optimization",
          "Thermal dissipation and humidity control",
          "Clean power distribution marshaling",
          "Fast panel assembly and retrofit upgrades",
        ],
      },
    ],
    whyChoose: [
      {
        title: "Global Industry Benchmark",
        desc: "Over 180 years of engineering pedigree, recognized universally across automotive, FMCG, and heavy industry.",
      },
      {
        title: "EcoStruxure IoT Ready",
        desc: "Native cloud and edge connectivity built into Altivar drives and Modicon controllers for smart factory visibility.",
      },
      {
        title: "Supreme Energy Efficiency",
        desc: "Engineered to minimize energy consumption, power losses, and heat generation across panels and machine setups.",
      },
      {
        title: "Unmatched Safety Standards",
        desc: "Every breaker, contactor, and E-stop strictly adheres to IEC, UL, CSA, and RoHS environmental directives.",
      },
      {
        title: "Comprehensive Architecture",
        desc: "Seamless interoperability from the power incoming ACB all the way down to 22mm pushbutton pilot devices.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 4. SIEMENS (Page 24)
  // --------------------------------------------------------------------------
  {
    slug: "siemens",
    number: "04",
    name: "Siemens",
    category: "Automation & Drive Systems",
    logo: "/images/partners/siemens.png",
    logoWebp: "/images/partners/siemens.webp",
    heroImage: "/images/partners/siemens/hero.png",
    heroImageWebp: "/images/partners/siemens/hero.webp",
    eyebrow: "GLOBAL TECHNOLOGY PARTNER",
    headline: "Automation & Drive Systems",
    tagline:
      "World-class industrial automation, drive technologies, and digital enterprise solutions engineered for maximum throughput.",
    overview:
      "Siemens is the global market leader in industrial automation, drives, and software. NASCON Technologies integrates Siemens SIMATIC PLCs, HMIs, SINAMICS variable frequency drives, and SIRIUS switchgear to build deterministic, high-speed automated systems for demanding industrial processes.",
    brochurePage: "Page 24",
    keyThemes: [
      { label: "Totally Integrated Automation", desc: "Unified engineering in TIA Portal across controllers, drives, and HMIs" },
      { label: "High Precision & Speed", desc: "Deterministic microsecond cycle times for high-speed automated machinery" },
      { label: "Robust Industrial Design", desc: "Built to withstand severe electromagnetic noise and thermal stresses" },
      { label: "Industry 4.0 Ready", desc: "Direct OPC UA, PROFINET, and cloud telemetry integration" },
    ],
    categories: [
      {
        id: "plc",
        number: "01",
        title: "SIMATIC PLC Systems",
        subtitle: "S7-1200, S7-1500, S7-300 & ET 200SP I/O",
        image: "/images/partners/siemens/plc.png",
        webpImage: "/images/partners/siemens/plc.webp",
        shortDescription:
          "Industry-standard programmable logic controllers offering scalable performance, safety, and security.",
        features: [
          "SIMATIC S7-1200 basic controllers with integrated PROFINET and PID",
          "SIMATIC S7-1500 advanced controllers with high processing power and display",
          "ET 200SP distributed I/O systems for compact cabinet footprints",
          "Integrated safety (F-CPUs) and multi-level cyber security protection",
        ],
        applications: [
          "Automotive assembly plants & robotics",
          "Continuous chemical and pharmaceutical processes",
          "High-speed packaging, filling & labeling",
          "Power generation and municipal water automation",
        ],
      },
      {
        id: "hmi",
        number: "02",
        title: "SIMATIC HMI Panels",
        subtitle: "Basic Panels, Comfort Panels & Unified Displays",
        image: "/images/partners/siemens/hmi.png",
        webpImage: "/images/partners/siemens/hmi.webp",
        shortDescription:
          "Vibrant, rugged operator panels featuring intuitive graphics, alarm handling, and vector visualization.",
        features: [
          "High-resolution 4\" to 22\" widescreen LED backlit displays (16M colors)",
          "Comfort Panels with cast aluminum front and integrated system backup",
          "SIMATIC WinCC Unified web-based modern visualization platform",
          "PROFINET/Ethernet connectivity with OPC UA client/server architecture",
        ],
        applications: [
          "Machine-level graphical operation and recipe setup",
          "Factory SCADA and production tracking terminals",
          "Historical trend logging and alarm management",
          "Pharmaceutical cleanroom visualization (IP65/IP66)",
        ],
      },
      {
        id: "vfd",
        number: "03",
        title: "SINAMICS VFDs & Drives",
        subtitle: "SINAMICS V20, G120, G120X & S120 Servo",
        image: "/images/partners/siemens/vfd.png",
        webpImage: "/images/partners/siemens/vfd.webp",
        shortDescription:
          "Modular variable frequency drives engineered for precise motor speed regulation and energy conservation.",
        features: [
          "SINAMICS V20 cost-effective compact drives for pumps and conveyors",
          "SINAMICS G120 modular multi-function vector drives (up to 250kW)",
          "Integrated Safety Integrated (STO, SS1, SLS) certified to SIL3",
          "Eco mode and regenerative braking capability for energy recovery",
        ],
        applications: [
          "Pumps, fans, blowers, and air compressors",
          "Automated conveyor handling systems",
          "Extruders, mixers, and centrifuge drives",
          "Precision machine tool axis speed regulation",
        ],
      },
      {
        id: "switchgear",
        number: "04",
        title: "SENTRON Switchgear & Breakers",
        subtitle: "SENTRON 3VA MCCBs & 3WL Air Circuit Breakers",
        image: "/images/partners/siemens/switchgear.png",
        webpImage: "/images/partners/siemens/switchgear.webp",
        shortDescription:
          "Heavy-duty molded case and air circuit breakers providing selective power distribution and monitoring.",
        features: [
          "SENTRON 3VA molded case circuit breakers with electronic trip units",
          "Integrated power and energy metering directly in the breaker",
          "SENTRON 3WL / 3WA air circuit breakers up to 6300A",
          "Modbus TCP / PROFINET communication for energy management",
        ],
        applications: [
          "Main Low Voltage (LV) distribution switchboards",
          "Power Control Centers (PCC) in industrial plants",
          "Substation power feeder protection",
          "Generator synchronizing and automatic transfer panels",
        ],
      },
      {
        id: "contactors",
        number: "05",
        title: "SIRIUS Contactors & Relays",
        subtitle: "3RT Contactors, 3RU Overload & 3RV MPCBs",
        image: "/images/partners/siemens/contactors.png",
        webpImage: "/images/partners/siemens/contactors.webp",
        shortDescription:
          "Modular industrial contactors and motor starter protectors with universal snap-on compatibility.",
        features: [
          "SIRIUS 3RT modular contactors up to 250kW with electronic coils",
          "3RV motor starter protectors combining disconnect and overload functions",
          "3RU thermal and 3RB electronic solid-state overload relays",
          "Space-saving compact starters with tool-less busbar assembly",
        ],
        applications: [
          "Motor Control Centers (MCC)",
          "Direct-on-line and reversible motor drives",
          "Industrial heating and furnace banks",
          "Crane hoist and gantry motor control",
        ],
      },
      {
        id: "power-supply",
        number: "06",
        title: "SITOP Power Supplies",
        subtitle: "SITOP PSU8200, Lite & DC UPS Modules",
        image: "/images/partners/siemens/power-supply.png",
        webpImage: "/images/partners/siemens/power-supply.webp",
        shortDescription:
          "High-efficiency 24V DC regulated industrial power supplies and buffer modules with extraordinary reliability.",
        features: [
          "SITOP modular power supplies with up to 95% electrical efficiency",
          "Power Boost delivers up to 300% rated current for dynamic startup loads",
          "SITOP DC UPS modules with maintenance-free capacitor or battery backup",
          "Integrated diagnostics and signaling contacts for PLC alarms",
        ],
        applications: [
          "Critical PLC and industrial PC power rails",
          "Distributed fieldbus network switches",
          "Continuous chemical plant instrumentation",
          "Emergency control and safety shutdown loops",
        ],
      },
      {
        id: "communication",
        number: "07",
        title: "Industrial Communication",
        subtitle: "SCALANCE Switches, PROFINET & Industrial Routers",
        image: "/images/partners/siemens/communication.png",
        webpImage: "/images/partners/siemens/communication.webp",
        shortDescription:
          "Hardened Ethernet switches, optical transceivers, and secure VPN routers for plant OT networks.",
        features: [
          "SCALANCE X unmanaged and managed Industrial Ethernet switches",
          "PROFINET IRT (Isochronous Real-Time) support for deterministic motion",
          "Rugged metal enclosures with redundant 24V DC power inputs",
          "SCALANCE S industrial security routers with integrated firewall",
        ],
        applications: [
          "Factory-wide OT plant networking",
          "Distributed PLC to remote I/O ring topologies",
          "Remote machine telemetry and VPN diagnostics",
          "SCADA and MES network segregation",
        ],
      },
      {
        id: "accessories",
        number: "08",
        title: "SIRIUS ACT & Accessories",
        subtitle: "Pushbuttons, Indicator Towers & Terminals",
        image: "/images/partners/siemens/accessories.png",
        webpImage: "/images/partners/siemens/accessories.webp",
        shortDescription:
          "Modern pushbuttons, visual signal columns, and terminal connection accessories.",
        features: [
          "SIRIUS ACT 22mm pilot devices with genuine metal and plastic bezels",
          "8WD modular signal towers with brilliant multi-color LED modules",
          "Spring-loaded and screw terminal connection technology",
          "Snap-on single-handed mounting without specialized tooling",
        ],
        applications: [
          "Machine operator desks and control consoles",
          "Visual status towers on automated packaging skids",
          "Internal panel wiring distribution",
          "Emergency stop safety circuits (IP69K washdown)",
        ],
      },
    ],
    whyChoose: [
      {
        title: "TIA Portal Unified Engineering",
        desc: "Controllers, HMIs, drives, and safety configured inside a single software framework, slashing project commissioning time.",
      },
      {
        title: "Industry 4.0 Standard",
        desc: "Direct support for OPC UA, industrial edge computing, and cloud connectivity built into the controller architecture.",
      },
      {
        title: "Uncompromising Reliability",
        desc: "Designed and tested for 24/7 continuous operation in the harshest vibration and thermal environments.",
      },
      {
        title: "Safety Integrated",
        desc: "Fail-safe controllers and drives certified up to SIL3 / PLe without requiring separate safety relays.",
      },
      {
        title: "Global Standardization",
        desc: "Universal standard in manufacturing plants worldwide, ensuring parts and skilled support everywhere.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 5. SELEC (Page 27 - 12 Categories)
  // --------------------------------------------------------------------------
  {
    slug: "selec",
    number: "05",
    name: "Selec",
    category: "Industrial Automation & Electrical Measurement",
    logo: "/images/partners/selec.png",
    logoWebp: "/images/partners/selec.webp",
    heroImage: "/images/partners/selec/hero.png",
    heroImageWebp: "/images/partners/selec/hero.webp",
    eyebrow: "INNOVATIVE INDIAN AUTOMATION",
    headline: "Industrial Automation & Electrical Measurement",
    tagline:
      "Comprehensive portfolio of digital panel meters, protection relays, multi-function energy meters, PLCs, HMIs, and VFDs.",
    overview:
      "Selec is a globally recognized manufacturer of electrical measurement instruments, protection relays, industrial controllers, and automation devices. Covering 12 core product categories on Page 27 of the brochure, NASCON Technologies supplies Selec's complete ecosystem from digital panel meters to modular PLCs and variable frequency drives.",
    brochurePage: "Page 27",
    keyThemes: [
      { label: "Precise Electrical Measurement", desc: "Class 1.0 and 0.5S True RMS energy and power monitoring" },
      { label: "Comprehensive Protection", desc: "Total safeguarding against voltage, current, and earth leakage faults" },
      { label: "Integrated Automation", desc: "Compact PLC+HMI combined units and standalone controllers" },
      { label: "High Performance & Value", desc: "Trusted by switchboard manufacturers and OEMs across 75+ countries" },
    ],
    categories: [
      {
        id: "digital-meters",
        number: "01",
        title: "Digital Panel Meters",
        subtitle: "Voltage, Current, Frequency & Power Factor",
        image: "/images/partners/selec/digital-meters.png",
        webpImage: "/images/partners/selec/digital-meters.webp",
        shortDescription:
          "Digital meters for AC/DC electrical parameters with high-visibility multi-row 7-segment LED displays.",
        features: [
          "AC Voltage, Current, and Frequency measurement on 3-phase and 1-phase lines",
          "Power, Energy, and Power Factor multi-parameter indication",
          "True RMS measurement accurately computing non-sinusoidal waveforms",
          "Programmable CT/PT primary and secondary ratios",
        ],
        applications: [
          "Power Control Centers (PCC) & Motor Control Centers (MCC)",
          "Sub-distribution boards and generator panels",
          "Commercial building main electrical switchrooms",
          "Machine power feed monitoring",
        ],
      },
      {
        id: "timers",
        number: "02",
        title: "Digital & Analog Timers",
        subtitle: "Multi-Function, Multi-Range & Star-Delta Timers",
        image: "/images/partners/selec/timers.png",
        webpImage: "/images/partners/selec/timers.webp",
        shortDescription:
          "DIN-rail and panel mount timers featuring universal operating voltage and wide timing spans.",
        features: [
          "Multi-function DIN-rail timers with 8 to 15 operating modes",
          "On-Delay, Interval, Asymmetrical Cyclic, and Signal Off-Delay",
          "Dedicated Star-Delta timers with 100ms pause time to prevent contact welding",
          "Universal supply: 20–240V AC and 12–240V DC in a single unit",
        ],
        applications: [
          "Motor star-delta automatic starter panels",
          "HVAC compressor sequence staging",
          "Automatic machinery process delay",
          "Industrial lighting and conveyor timing",
        ],
      },
      {
        id: "counters",
        number: "03",
        title: "Digital Counters & Hour Meters",
        subtitle: "Preset, Batch, Length & Time Totalizers",
        image: "/images/partners/selec/counters.png",
        webpImage: "/images/partners/selec/counters.webp",
        shortDescription:
          "Multi-function preset counters and run-hour totalizers for precise manufacturing control.",
        features: [
          "Preset digital counters with dual relay outputs for pre-warn and final stop",
          "Quadrature encoder input for bidirectional length measurement",
          "Run-hour meters logging operating time for preventive maintenance",
          "Non-volatile EEPROM memory holding data for up to 10 years without batteries",
        ],
        applications: [
          "Packaging batching and carton packing machines",
          "Wire cutting and sheet metal length sizing",
          "Equipment service interval tracking",
          "Pharmaceutical tablet and blister counting",
        ],
      },
      {
        id: "temperature-controllers",
        number: "04",
        title: "Temperature Controllers",
        subtitle: "PID, Fuzzy Logic & Multi-Channel Units",
        image: "/images/partners/selec/temperature-controllers.png",
        webpImage: "/images/partners/selec/temperature-controllers.webp",
        shortDescription:
          "Precision temperature controllers featuring advanced self-tuning PID and heat/cool dual outputs.",
        features: [
          "Advanced self-tuning PID algorithm with fuzzy logic overshoot prevention",
          "Universal sensor inputs: Thermocouple (J, K, T, R, S) and RTD (Pt100)",
          "Multiple control output options: Relay, 12V SSR drive, and 4-20mA current",
          "Dual setpoint capability with independent heating and cooling outputs",
        ],
        applications: [
          "Plastic extrusion and blow molding machines",
          "Heat treatment furnaces and baking ovens",
          "Packaging sealing jaws and blister packing",
          "Chemical reactors and laboratory incubators",
        ],
      },
      {
        id: "protection-relays",
        number: "05",
        title: "Electrical Protection Relays",
        subtitle: "Voltage, Phase Sequence, Current & Earth Fault",
        image: "/images/partners/selec/protection-relays.png",
        webpImage: "/images/partners/selec/protection-relays.webp",
        shortDescription:
          "Comprehensive electrical relays safeguarding motors and switchboards against phase, voltage, and current anomalies.",
        features: [
          "Over / under voltage, phase failure, and reverse phase sequence protection",
          "Earth leakage relays (ELR) with external CBCT for sensitive ground fault detection",
          "Over-current, under-current, and motor overload trip mechanisms",
          "Adjustable trip delays avoiding nuisance tripping during transient motor starting",
        ],
        applications: [
          "Motor protection panels and submersible pump starters",
          "Main LV switchboards and feeder cubicles",
          "Generator sets and synchronizing panels",
          "Commercial building earth leakage protection",
        ],
      },
      {
        id: "power-monitoring",
        number: "06",
        title: "Power & Energy Meters",
        subtitle: "Multi-Function Energy Meters with RS-485",
        image: "/images/partners/selec/power-monitoring.png",
        webpImage: "/images/partners/selec/power-monitoring.webp",
        shortDescription:
          "Class 1.0 and 0.5S multi-function energy meters with THD harmonics analysis and Modbus connectivity.",
        features: [
          "Measures Active (kWh), Reactive (kVARh), and Apparent energy (kVAh)",
          "Total Harmonic Distortion (THD) analysis up to 31st harmonic order",
          "Isolated RS-485 Modbus RTU communication port for EMS and SCADA integration",
          "Bi-directional four-quadrant energy measurement for solar net metering",
        ],
        applications: [
          "Energy Management Systems (EMS) in manufacturing plants",
          "Factory sub-billing and department cost allocation",
          "Solar rooftop and grid export power monitoring",
          "Data center power distribution units (PDU)",
        ],
      },
      {
        id: "process-indicators",
        number: "07",
        title: "Process Indicators & Transmitters",
        subtitle: "Universal Input Indicators & Signal Isolators",
        image: "/images/partners/selec/process-indicators.png",
        webpImage: "/images/partners/selec/process-indicators.webp",
        shortDescription:
          "Universal process indicators with 24V transmitter power supply and high/low alarm relays.",
        features: [
          "Accepts standard 4-20mA, 0-10V, 0-20mA, and temperature sensor inputs",
          "Field-programmable digital scaling range from -1999 to 9999",
          "Built-in 24V DC auxiliary power supply for 2-wire field transmitters",
          "Dual relay alarm outputs for low and high process limit trips",
        ],
        applications: [
          "Boiler steam pressure and water level display",
          "Chemical dosing and storage tank inventory monitoring",
          "HVAC chilled water temperature and flow monitoring",
          "Effluent treatment plant (ETP) pH and flow logging",
        ],
      },
      {
        id: "automation-instruments",
        number: "08",
        title: "Automation Instruments",
        subtitle: "Speed / RPM Indicators, Signal Converters",
        image: "/images/partners/selec/automation-instruments.png",
        webpImage: "/images/partners/selec/automation-instruments.webp",
        shortDescription:
          "High-speed RPM meters, tachometers, and signal isolation converters for industrial machinery.",
        features: [
          "Digital speed and RPM indicators with sensor excitation output",
          "Frequency-to-analog and analog-to-frequency signal converters",
          "Galvanic isolation barriers suppressing high-voltage common-mode surges",
          "High noise immunity design meeting stringent industrial EMC standards",
        ],
        applications: [
          "Rotating shaft RPM on turbines, motors, and gearboxes",
          "Printing machine and packaging web speed measurement",
          "Signal conditioning between noisy drives and sensitive PLCs",
          "Machine tool spindle speed indication",
        ],
      },
      {
        id: "plc",
        number: "09",
        title: "Programmable Logic Controllers",
        subtitle: "Compact & Modular Micro PLCs (Flexys Series)",
        image: "/images/partners/selec/plc.png",
        webpImage: "/images/partners/selec/plc.webp",
        shortDescription:
          "Compact DIN-rail programmable logic controllers offering modular digital, analog, and temperature I/O.",
        features: [
          "Flexys and MiRO modular PLC platforms with expandable slice I/O",
          "High-speed counting (up to 100kHz) and PWM pulse train outputs for stepper/servo",
          "Free Selpro programming software supporting standard Ladder Logic",
          "Multiple communication ports: RS-485 Modbus RTU and Ethernet",
        ],
        applications: [
          "Special Purpose Machines (SPM)",
          "Packaging, wrapping, and carton forming machines",
          "Water filtration and RO plant automation",
          "HVAC air handling unit (AHU) control",
        ],
      },
      {
        id: "hmi",
        number: "10",
        title: "Human Machine Interfaces (HMIs)",
        subtitle: "3.5\" to 10.1\" Touchscreens & Integrated PLC+HMI",
        image: "/images/partners/selec/hmi.png",
        webpImage: "/images/partners/selec/hmi.webp",
        shortDescription:
          "Touchscreen graphic interfaces and innovative combined PLC+HMI units saving panel door space.",
        features: [
          "High-resolution TFT touchscreen displays: 3.5\", 4.3\", 7\", and 10.1\"",
          "Integrated PLC + HMI combo units eliminating external interconnect cabling",
          "Rich graphics library with recipe management, historical trends, and alarms",
          "Modbus RTU master/slave and Ethernet TCP/IP networking",
        ],
        applications: [
          "Compact machine front door operator interfaces",
          "OEM packaging and pharmaceutical skid control",
          "Water treatment plant multi-stage controllers",
          "Automated test benches and inspection stations",
        ],
      },
      {
        id: "vfd",
        number: "11",
        title: "Variable Frequency Drives (VFDs)",
        subtitle: "FD Series Sensorless Vector AC Drives",
        image: "/images/partners/selec/vfd.png",
        webpImage: "/images/partners/selec/vfd.webp",
        shortDescription:
          "Sensorless vector AC drives engineered for high starting torque, dynamic response, and energy efficiency.",
        features: [
          "Single-phase 230V and 3-phase 415V ratings up to 30kW",
          "Sensorless vector control providing 150% starting torque at 0.5Hz",
          "Built-in PID controller for closed-loop constant pressure pumping",
          "Integrated RS-485 Modbus RTU communication for PLC supervision",
        ],
        applications: [
          "Constant pressure water supply booster pumps",
          "Industrial fans, blowers, and air handling units",
          "Conveyor speed synchronization and material handling",
          "Machine tool spindles and mixer agitators",
        ],
      },
      {
        id: "power-supplies",
        number: "12",
        title: "Switched Mode Power Supplies",
        subtitle: "DIN-Rail Industrial DC Power Supplies",
        image: "/images/partners/selec/power-supplies.png",
        webpImage: "/images/partners/selec/power-supplies.webp",
        shortDescription:
          "Slim DIN-rail mounting power supplies delivering stable, regulated 12V, 24V, and 48V DC power.",
        features: [
          "Ultra-slim compact DIN-rail mounting form factor saving cabinet width",
          "Universal AC input voltage (85–264V AC / 120–370V DC)",
          "Built-in short-circuit, overload, and over-voltage protection circuits",
          "High efficiency (>88%) with low ripple noise and cool running operation",
        ],
        applications: [
          "Powering PLC racks and I/O modules",
          "HMI display and operator interface power",
          "Field sensor excitation and transmitter loop powering",
          "Interposing relays and 24V DC solenoid valve coils",
        ],
      },
    ],
    whyChoose: [
      {
        title: "Pioneer in Indian Electronics",
        desc: "Over 20 years of research and indigenous manufacturing, exported to over 75 countries worldwide.",
      },
      {
        title: "Complete 12-Category Portfolio",
        desc: "Everything from 22mm panel meters to PLCs, HMIs, and VFDs available from a single trusted partner.",
      },
      {
        title: "Space-Saving Integrated Solutions",
        desc: "Innovative PLC+HMI combined units reduce panel wiring complexity, cabinet footprint, and assembly time.",
      },
      {
        title: "Exceptional Price-to-Value",
        desc: "Premium industrial features at competitive Indian market rates, lowering machine building costs.",
      },
      {
        title: "Proven Field Durability",
        desc: "Engineered specifically to survive extreme power fluctuations, surges, and temperature extremes.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 6. FINOLEX CABLES (Page 28)
  // --------------------------------------------------------------------------
  {
    slug: "finolex",
    number: "06",
    name: "Finolex Cables",
    category: "Power, Control & Industrial Cables",
    logo: "/images/partners/finolex-cables.png",
    logoWebp: "/images/partners/finolex-cables.webp",
    heroImage: "/images/partners/finolex/hero.png",
    heroImageWebp: "/images/partners/finolex/hero.webp",
    eyebrow: "INDIA'S LEADING CABLE BRAND",
    headline: "Power, Control & Industrial Cable Solutions",
    tagline:
      "India's most trusted name in electrical cables, delivering pure electrolytic copper, fire retardancy, and certified safety.",
    overview:
      "Finolex Cables is India's largest and leading manufacturer of electrical and telecommunication cables. NASCON Technologies supplies authentic, batch-tested Finolex power cables, multi-core control cables, shielded instrumentation cables, and panel wiring wires for heavy industrial, infrastructure, and automation panel applications.",
    brochurePage: "Page 28",
    keyThemes: [
      { label: "100% Electrolytic Copper", desc: "Pure electrolytic grade bright annealed copper with >100% IACS conductivity" },
      { label: "Fire Retardant (FR/FRLS)", desc: "Self-extinguishing PVC and halogen-free low-smoke insulation compounds" },
      { label: "Certified Compliance", desc: "Strict adherence to IS 694, IS 1554, and IS 7098 national quality standards" },
      { label: "Long Operating Lifespan", desc: "High dielectric strength and chemical resistance for decades of duty" },
    ],
    categories: [
      {
        id: "power-cables",
        number: "01",
        title: "Power Cables",
        subtitle: "LT & HT Power Cables (Up to 33kV)",
        image: "/images/partners/finolex/power-cables.png",
        webpImage: "/images/partners/finolex/power-cables.webp",
        shortDescription:
          "Heavy-duty armored and unarmored power cables for main power distribution and motor drives.",
        features: [
          "XLPE and PVC insulated power cables rated from 1.1kV up to 33kV",
          "High current carrying capacity with high thermal overload resistance",
          "Galvanized steel round wire or flat strip armoring for superior mechanical protection",
          "Moisture-proof outer sheath suitable for direct burial and wet outdoor cable trenches",
        ],
        applications: [
          "Substation to factory main incoming power feeders",
          "Transformer secondary connections to main PCC panels",
          "Heavy motor feeders (compressors, crushers, rolling mills)",
          "Underground utility power distribution networks",
        ],
      },
      {
        id: "control-cables",
        number: "02",
        title: "Control Cables",
        subtitle: "Multi-Core Copper Control Cables (2 to 61 Cores)",
        image: "/images/partners/finolex/control-cables.png",
        webpImage: "/images/partners/finolex/control-cables.webp",
        shortDescription:
          "Multi-core copper cables engineered for control panel interconnections, relaying, and signaling.",
        features: [
          "Annealed high-conductivity electrolytic copper conductors",
          "Clear sequential core number printing or distinct color coding for easy termination",
          "Available in armored (for cable trays/trenches) and unarmored (for conduits)",
          "High resistance to lubricating oils, industrial chemicals, and moisture ingress",
        ],
        applications: [
          "Interconnections between control panels and field equipment",
          "Substation breaker trip and closing control circuits",
          "Motor control center (MCC) auxiliary signaling",
          "Industrial crane control and conveyor interlocking",
        ],
      },
      {
        id: "instrumentation-cables",
        number: "03",
        title: "Instrumentation Cables",
        subtitle: "Individual & Overall Screened Paired/Triad Cables",
        image: "/images/partners/finolex/instrumentation-cables.png",
        webpImage: "/images/partners/finolex/instrumentation-cables.webp",
        shortDescription:
          "Shielded instrumentation cables delivering clean signal transmission free from electromagnetic interference.",
        features: [
          "Paired and triad configuration with uniform lay length minimizing crosstalk",
          "Aluminum mylar tape screening with continuous tinned copper drain wire",
          "Individual pair screening plus overall collective shield options",
          "Low mutual capacitance and low signal attenuation over long cable runs",
        ],
        applications: [
          "PLC and DCS 4-20mA analog signal transmission",
          "Thermocouple extension and RTD sensor wiring",
          "Hazardous area fieldbus instrumentation",
          "Electronic weighbridge and load cell cabling",
        ],
      },
      {
        id: "panel-wiring",
        number: "04",
        title: "Panel Wiring & Building Wires",
        subtitle: "FR / FRLS / HFFR Single Core Flexible Wires",
        image: "/images/partners/finolex/panel-wiring.png",
        webpImage: "/images/partners/finolex/panel-wiring.webp",
        shortDescription:
          "Highly flexible single-core wires designed for neat, dense wiring inside control panels and switchboards.",
        features: [
          "High-purity multi-strand bright annealed copper conductor (Class 5)",
          "Flame Retardant (FR) and Fire Retardant Low Smoke (FRLS) insulation",
          "Superior flexibility allowing easy bending and routing through narrow trunking",
          "Vibrant, permanent color coding: Red, Yellow, Blue, Black, Green, Grey",
        ],
        applications: [
          "Automation panel and switchgear internal power wiring",
          "PLC rack interconnecting harnesses",
          "Distribution board busbar to breaker connections",
          "Machine enclosure internal control circuits",
        ],
      },
      {
        id: "flexible-cables",
        number: "05",
        title: "Flexible Cables & Cords",
        subtitle: "Multi-Core Flexible Sheathed Industrial Cords",
        image: "/images/partners/finolex/flexible-cables.png",
        webpImage: "/images/partners/finolex/flexible-cables.webp",
        shortDescription:
          "Heavy-duty flexible multi-core cables built for continuous machine motion, bending, and vibration.",
        features: [
          "Multi-strand Class 5 flexible copper conductors engineered for flex life",
          "Tough, abrasion-resistant PVC outer jacket preventing tears and cuts",
          "High resistance to oil, cutting fluids, and weathering",
          "Rated for continuous dynamic bending in cable drag chains",
        ],
        applications: [
          "CNC machine drag chains and robotic articulated arms",
          "Pendant push-button control stations on overhead cranes",
          "Portable industrial power equipment and generators",
          "Vibrating screens and packaging machines",
        ],
      },
      {
        id: "industrial-cables",
        number: "06",
        title: "Industrial Communication Cables",
        subtitle: "Cat6 Ethernet, RS-485 & Special Purpose Cables",
        image: "/images/partners/finolex/industrial-cables.png",
        webpImage: "/images/partners/finolex/industrial-cables.webp",
        shortDescription:
          "High-speed data, industrial Ethernet, and serial communication cables with high noise rejection.",
        features: [
          "Category 6 and 6A Industrial Ethernet cables with foil and braid screening",
          "Characteristic 120-ohm impedance controlled RS-485 Modbus cables",
          "High-density tinned copper braid protecting against severe VFD noise",
          "UV-stabilized outdoor jackets resistant to sunlight degradation",
        ],
        applications: [
          "Plant-wide SCADA and Industrial Ethernet backbones",
          "RS-485 Modbus multidrop meter communication loops",
          "High-definition industrial security camera feeds",
          "Inter-building high-speed telemetry links",
        ],
      },
      {
        id: "cable-accessories",
        number: "07",
        title: "Cable Accessories & Glands",
        subtitle: "Brass Cable Glands, Lugs & Terminations",
        image: "/images/partners/finolex/cable-accessories.png",
        webpImage: "/images/partners/finolex/cable-accessories.webp",
        shortDescription:
          "High-conductivity copper lugs, brass double-compression glands, and heat-shrink jointing kits.",
        features: [
          "Heavy-duty nickel-plated brass double compression cable glands (IP66/IP68)",
          "Electrolytic copper heavy-duty crimping lugs with tin plating",
          "Insulated pin, ring, fork, and bootlace ferrules for clean terminations",
          "Heat-shrinkable straight-through jointing and termination kits",
        ],
        applications: [
          "Armored cable entry into outdoor panels and junction boxes",
          "Motor terminal box terminations preventing moisture ingress",
          "Busbar bolted connections with low contact resistance",
          "Underground cable joint repairs and extensions",
        ],
      },
      {
        id: "wiring-support",
        number: "08",
        title: "Cable Management & Support",
        subtitle: "Cable Ties, Flexible Conduits, Marking Systems",
        image: "/images/partners/finolex/wiring-support.png",
        webpImage: "/images/partners/finolex/wiring-support.webp",
        shortDescription:
          "Heavy-duty cable ties, corrugated conduits, and permanent marker sleeves for organized wiring.",
        features: [
          "UV-stabilized Virgin Nylon 66 cable ties and stainless steel ties",
          "Polyamide flexible corrugated conduits with quick-click gland fittings",
          "Thermal transfer printable marker sleeves for permanent wire tagging",
          "Slotted wiring ducts and spiral wraps for clean harness management",
        ],
        applications: [
          "Cable tray routing and bundle securing",
          "Mechanical protection of exposed wires on machine arms",
          "Permanent identification of control wires inside panels",
          "Switchboard cable grooming and segregation",
        ],
      },
    ],
    whyChoose: [
      {
        title: "India's #1 Trusted Cable Brand",
        desc: "Over 65 years of undisputed market leadership, synonymous with electrical safety and copper purity.",
      },
      {
        title: "100% In-House Copper Rod Casting",
        desc: "Controls the entire manufacturing chain from continuous cast copper rods to final insulated cables.",
      },
      {
        title: "Advanced Flame Retardancy",
        desc: "Specialized FR and FRLS compounds self-extinguish upon flame removal, preventing fire spread.",
      },
      {
        title: "Rigorous Quality Certifications",
        desc: "Fully certified by Bureau of Indian Standards (BIS), ISO 9001, and leading international agencies.",
      },
      {
        title: "Guaranteed Authenticity via NASCON",
        desc: "Direct supplier access guarantees genuine, factory-fresh Finolex cables with full test certificates.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 7. GLOSTER CABLES (Page 28)
  // --------------------------------------------------------------------------
  {
    slug: "gloster",
    number: "07",
    name: "Gloster Cables",
    category: "Specialized Heavy Industrial Cables",
    logo: "/images/partners/gloster-brochure.png",
    logoWebp: "/images/partners/gloster-brochure.webp",
    heroImage: "/images/partners/gloster/hero.png",
    heroImageWebp: "/images/partners/gloster/hero.webp",
    eyebrow: "ENGINEERED INDUSTRIAL CABLES",
    headline: "Engineered Cable Solutions",
    tagline:
      "Heavy-duty power, control, and instrumentation cables engineered for extreme thermal, chemical, and mechanical stresses.",
    overview:
      "Gloster Cables is an esteemed Indian manufacturer of high-reliability cables engineered specifically for utilities, power plants, steel mills, oil & gas, and heavy manufacturing. NASCON Technologies supplies Gloster's certified power, control, and instrumentation cables for mission-critical infrastructure where downtime is unacceptable.",
    brochurePage: "Page 28",
    keyThemes: [
      { label: "Heavy Industrial Build", desc: "Superior mechanical crush resistance and heavy-duty armoring" },
      { label: "Thermal & Chemical Resistance", desc: "Engineered for high ambient temperatures and aggressive environments" },
      { label: "Type-Tested Quality", desc: "Extensively certified by CPRI, ERDA, and major global consulting engineers" },
      { label: "Infrastructure Pedigree", desc: "Trusted in steel plants, thermal power stations, and petrochemical refineries" },
    ],
    categories: [
      {
        id: "power-cables",
        number: "01",
        title: "Power Cables",
        subtitle: "LT & HT Power Cables (Up to 33kV)",
        image: "/images/partners/gloster/power-cables.png",
        webpImage: "/images/partners/gloster/power-cables.webp",
        shortDescription:
          "Robust XLPE insulated power cables engineered to handle heavy continuous currents and short-circuit faults.",
        features: [
          "Cross-linked polyethylene (XLPE) insulation with 90°C continuous thermal rating",
          "Heavy galvanized steel wire / strip armoring providing crush and impact defense",
          "Extruded inner and outer PVC / FRLS sheathing preventing moisture penetration",
          "Voltage classes from 1.1kV up to 33kV for plant distribution",
        ],
        applications: [
          "Primary feeder cables from switchyard to plant substations",
          "High-power AC drive and rolling mill power supply",
          "Underground cable networks in steel and chemical plants",
          "Heavy infrastructure and utility distribution",
        ],
      },
      {
        id: "control-cables",
        number: "02",
        title: "Control Cables",
        subtitle: "Multi-Core Armored & Unarmored Cables",
        image: "/images/partners/gloster/control-cables.png",
        webpImage: "/images/partners/gloster/control-cables.webp",
        shortDescription:
          "High-reliability multi-core control cables designed for safety interlocking and breaker trip circuits.",
        features: [
          "Electrolytic copper conductor strands annealed for maximum conductivity",
          "Numbered core identification adhering to national and international conventions",
          "Heavy armor options protecting against rodent attacks and physical damage",
          "Resistant to ozone, ultraviolet rays, acids, and aggressive alkalis",
        ],
        applications: [
          "Power plant turbine control and trip circuits",
          "Substation relay panels and switchyard marshalling boxes",
          "Automated blast furnace and continuous casting control",
          "Inter-panel interlocking and safety trip loops",
        ],
      },
      {
        id: "instrumentation-cables",
        number: "03",
        title: "Instrumentation Cables",
        subtitle: "Individual & Overall Screened Paired/Triad Cables",
        image: "/images/partners/gloster/instrumentation-cables.png",
        webpImage: "/images/partners/gloster/instrumentation-cables.webp",
        shortDescription:
          "Precision screened cables safeguarding critical low-level signals from high-voltage electromagnetic interference.",
        features: [
          "Twisted pairs and triads with specialized lay to reject cross-induction",
          "Individual pair aluminum mylar screen plus overall screen with drain wire",
          "Superior noise attenuation even when running parallel to high-power cables",
          "Low signal loss across long plant distances",
        ],
        applications: [
          "DCS and PLC analog field loops (4-20mA, 1-5V, RTD)",
          "Petrochemical refinery tank farm telemetry",
          "Boiler pressure, temperature, and combustion gas monitoring",
          "Critical safety shutdown systems (SIS)",
        ],
      },
      {
        id: "panel-wiring",
        number: "04",
        title: "Panel Wiring & Building Wires",
        subtitle: "FR / FRLS Single Core Flexible Wires",
        image: "/images/partners/gloster/panel-wiring.png",
        webpImage: "/images/partners/gloster/panel-wiring.webp",
        shortDescription:
          "Class 5 multi-strand flexible wires engineered for clean, reliable routing inside heavy control panels.",
        features: [
          "Bright annealed flexible electrolytic copper conductor",
          "Flame Retardant Low Smoke (FRLS) insulation compound",
          "High thermal stability resisting insulation shrinkage during soldering or crimping",
          "Standard color coding: R, Y, B, Black, Green, Grey, Blue",
        ],
        applications: [
          "Heavy industrial switchgear cubicle wiring",
          "Motor control center internal power and control links",
          "Relay logic and annunciator panel internal wiring",
          "Machine terminal box connections",
        ],
      },
      {
        id: "flexible-cables",
        number: "05",
        title: "Flexible Cables & Heavy Cords",
        subtitle: "Multi-Core Flexible Sheathed Industrial Cords",
        image: "/images/partners/gloster/flexible-cables.png",
        webpImage: "/images/partners/gloster/flexible-cables.webp",
        shortDescription:
          "Durable multi-core flexible cords engineered for mobile machinery, gantries, and vibrating equipment.",
        features: [
          "Multi-strand flexible copper conductors with high fatigue resistance",
          "Heavy-duty elastomeric or PVC outer jacket resisting abrasion and oil",
          "Withstands continuous repeated flexing, coiling, and vibration",
          "Tear-resistant outer sheath protecting internal cores",
        ],
        applications: [
          "Overhead gantry cranes and hoist festoon systems",
          "Heavy mobile conveyor stackers and reclaimers",
          "Portable welding sets and heavy machinery feeds",
          "Vibrating screens and coal handling machinery",
        ],
      },
      {
        id: "industrial-cables",
        number: "06",
        title: "Special Purpose & Comm Cables",
        subtitle: "High-Temperature, Fire Survival & Data Cables",
        image: "/images/partners/gloster/industrial-cables.png",
        webpImage: "/images/partners/gloster/industrial-cables.webp",
        shortDescription:
          "Specialized cables for extreme industrial conditions including high heat, fire survival, and serial communication.",
        features: [
          "Fire Survival (FS) cables capable of maintaining circuit integrity in fires up to 950°C",
          "High-temperature silicone and PTFE insulated cables for furnace environments",
          "Low-smoke zero-halogen (LSZH) compounds for enclosed public spaces",
          "Industrial shielded serial bus and Profibus communication cables",
        ],
        applications: [
          "Fire alarm and emergency smoke extraction circuits",
          "Steel furnace and hot rolling mill proximity wiring",
          "Metro rail stations and underground mining tunnels",
          "Process plant critical control loops",
        ],
      },
      {
        id: "cable-accessories",
        number: "07",
        title: "Cable Accessories & Glands",
        subtitle: "Brass Cable Glands, Lugs & Terminations",
        image: "/images/partners/gloster/cable-accessories.png",
        webpImage: "/images/partners/gloster/cable-accessories.webp",
        shortDescription:
          "Industrial cable glands, heavy-duty tinned copper lugs, and high-voltage termination kits.",
        features: [
          "Brass double compression flameproof / weatherproof glands (Ex-d certified)",
          "Thick-walled electrolytic copper terminal lugs with inspection hole",
          "Heat-shrink and cold-shrink termination kits up to 33kV",
          "Corrosion-resistant stainless steel fasteners and earthing washers",
        ],
        applications: [
          "Hazardous area cable gland entries in refineries and chemical plants",
          "Medium voltage transformer and switchgear terminations",
          "Motor terminal box bolted connections",
          "Outdoor junction box IP66 sealing",
        ],
      },
      {
        id: "wiring-support",
        number: "08",
        title: "Cable Management & Support",
        subtitle: "Cable Ties, Conduits, Marking Systems",
        image: "/images/partners/gloster/wiring-support.png",
        webpImage: "/images/partners/gloster/wiring-support.webp",
        shortDescription:
          "Heavy-duty cable cleating, UV-resistant ties, and flexible conduit assemblies for harsh plant routing.",
        features: [
          "Heavy-duty metallic cable cleats resisting electromechanical short-circuit forces",
          "Corrugated polyamide conduits with high crush resistance",
          "Permanent embossed stainless steel cable identification tags",
          "Perforated cable tray support accessories and firestop wraps",
        ],
        applications: [
          "Heavy feeder cable cleating along vertical risers",
          "Cable tray routing in outdoor chemical plants",
          "Physical protection against mechanical falling debris",
          "Permanent identification of high-voltage feeders",
        ],
      },
    ],
    whyChoose: [
      {
        title: "Heavy Infrastructure Specialization",
        desc: "Engineered specifically for steel plants, thermal power stations, refineries, and demanding utilities.",
      },
      {
        title: "Superior Crush & Impact Defense",
        desc: "Heavy galvanized steel armoring protects against mechanical crush, impact, and rodent damage in trenches.",
      },
      {
        title: "Type-Tested Quality Approvals",
        desc: "Rigorously tested and approved by leading agencies such as CPRI, ERDA, NTPC, BHEL, and major consultants.",
      },
      {
        title: "Thermal & Chemical Endurance",
        desc: "Formulated to resist high ambient operating temperatures, corrosive fumes, and oil splash environments.",
      },
      {
        title: "Engineered Reliability",
        desc: "Designed for continuous duty where cable failure would cause catastrophic plant shutdown.",
      },
    ],
  },
];

// Helper functions
export const getPartner = (slug) => {
  return partnersData.find((p) => p.slug === slug) || partnersData[0];
};

export const getAllPartners = () => partnersData;

export const nasconSupportPoints = [
  {
    icon: "ShieldCheck",
    title: "100% Authentic Products",
    desc: "Direct authorized sourcing ensures all supplied equipment, switchgear, controllers, and cables are 100% genuine with factory test certificates.",
  },
  {
    icon: "Layers",
    title: "Multi-Brand Sourcing",
    desc: "Complete multi-brand integration under one roof: Phoenix Contact, Multispan, Schneider, Siemens, Selec, Finolex, and Gloster.",
  },
  {
    icon: "Wrench",
    title: "Technical Selection Support",
    desc: "Application-based engineering assistance for sizing VFDs, selecting PLCs, specifying circuit breakers, and choosing cable ratings.",
  },
  {
    icon: "Truck",
    title: "Rapid Dispatch & Supply",
    desc: "Strategic warehouse inventory and logistics coordination to ensure on-time delivery for project timelines and shutdown maintenance.",
  },
  {
    icon: "Cpu",
    title: "Panel & System Integration",
    desc: "End-to-end capabilities from component supply to custom control panel design, assembly, PLC programming, and commissioning.",
  },
  {
    icon: "Headphones",
    title: "Dedicated Post-Sales Support",
    desc: "Comprehensive warranty backing, on-site troubleshooting, spare parts availability, and long-term engineering partnership.",
  },
];
