import { Link } from "react-router-dom";
import "./ProductsPage.css";

function Products() {
 const productCategories = [
  {
    number: "01",
    title: "Automation Products",
    description:
      "Reliable control, visualization, drive and communication technologies for modern industrial automation.",
    items: [
      "PLCs",
      "HMIs",
      "SCADA Systems",
      "I/O Modules",
      "VFDs",
      "Servo Drives",
      "Industrial Communication",
      "Remote Monitoring Devices",
    ],
    icon: "◈",
  },

  {
    number: "02",
    title: "Electrical Control & Protection Products",
    description:
      "Reliable switching, protection and power management products for modern industrial systems.",
    items: [
      "MCB / MCCB / ACB",
      "Contactors",
      "Overload Relays",
      "Control Relays",
      "Timers",
      "SMPS / Power Supplies",
      "Surge Protection Devices",
      "Terminal Blocks & Accessories",
    ],
    icon: "⌁",
  },

  {
    number: "03",
    title: "Cables & Wiring Solutions",
    description:
      "Reliable cabling, termination and wiring support for modern industrial systems.",
    items: [
      "Power Cables",
      "Control Cables",
      "Instrumentation Cables",
      "Flexible Cables",
      "Panel Wiring Cables",
      "Cable Glands & Lugs",
      "Cable Accessories",
      "Cable Management Support",
    ],
    icon: "〰",
  },

  {
    number: "04",
    title: "Field Instrumentation & Sensors",
    description:
      "Reliable sensing, measurement and signal interface solutions for modern industrial processes.",
    items: [
      "Temperature Sensors",
      "RTD / Thermocouples",
      "Pressure Transmitters",
      "Flow Transmitters",
      "Level Sensors",
      "Signal Isolators",
      "Signal Converters",
      "Process Indicators / Controllers",
    ],
    icon: "◎",
  },
];
  const brands = [
    {
      number: "01",
      name: "Schneider Electric",
      description:
        "Switching, protection, industrial control and automation components.",
    },
    {
      number: "02",
      name: "Siemens",
      description:
        "PLCs, HMIs, drives, industrial communication and control products.",
    },
    {
      number: "03",
      name: "Phoenix Contact",
      description:
        "Terminal blocks, interface modules, power supplies and connectivity solutions.",
    },
    {
      number: "04",
      name: "Multispan",
      description:
        "Temperature controllers, timers, counters and process instruments.",
    },
    {
      number: "05",
      name: "Selec",
      description:
        "Meters, timers, protection relays and industrial control products.",
    },
    {
      number: "06",
      name: "Finolex",
      description:
        "Power, control and panel wiring cables.",
    },
    {
      number: "07",
      name: "Gloster",
      description:
        "Power, control and instrumentation cable solutions.",
    },
  ];

  return (
    <section className="products" id="products">

      {/* =====================================================
          PRODUCTS HERO
      ===================================================== */}

      <div className="products-hero">

        <div className="products-hero-content">

          <div className="products-eyebrow">
            <span></span>
            OUR PRODUCTS
          </div>

          <h1>
            Industrial Automation
            <br />
            <span>Solutions</span>
          </h1>

          <p>
            Reliable products and connected solutions supporting
            modern industrial automation and electrical systems.
          </p>

          <a
            href="#product-categories"
            className="products-hero-button"
          >
            Explore Product Categories
            <span>→</span>
          </a>

        </div>


        {/* =====================================================
            TECHNICAL VISUAL
        ===================================================== */}

        <div className="products-hero-visual">

          <div className="technical-circle circle-one"></div>
          <div className="technical-circle circle-two"></div>
          <div className="technical-circle circle-three"></div>

          <div className="technical-grid"></div>

          <div className="automation-panel">

            <div className="panel-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="panel-screen">

              <div className="screen-line"></div>

              <div className="screen-line short"></div>

              <div className="screen-bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

            </div>

            <div className="panel-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

          <div className="visual-label label-one">
            PLC
          </div>

          <div className="visual-label label-two">
            CONTROL
          </div>

          <div className="visual-label label-three">
            AUTOMATION
          </div>

        </div>

      </div>


      {/* =====================================================
          PRODUCT CATEGORY HEADING
      ===================================================== */}

      <div
        className="products-heading"
        id="product-categories"
      >

        <p>PRODUCT CATEGORIES</p>

        <h2>
          Explore Our <span>Product Range</span>
        </h2>

        <span>
          Industrial automation, electrical control, power,
          protection, cables and instrumentation solutions
          from leading brands.
        </span>

      </div>


      {/* =====================================================
          PRODUCT CATEGORIES
      ===================================================== */}

      <div className="products-grid">

        {productCategories.map((category) => (

          <article
            className="product-card"
            key={category.number}
          >

            <div className="product-top">

              <div className="product-number">
                {category.number}
              </div>

              <div className="product-icon">
                {category.icon}
              </div>

            </div>


            <div className="product-content">

              <h3>
                {category.title}
              </h3>

              <p>
                {category.description}
              </p>


              <div className="product-tags">

                {category.items.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}

              </div>


              <Link
                to="/contact"
                className="product-enquiry"
              >
                Enquire About Products
                <span>→</span>
              </Link>

            </div>

          </article>

        ))}

      </div>


      {/* =====================================================
          AUTHORIZED BRANDS
      ===================================================== */}

      <section className="brands-section">

        <div className="brands-heading">

          <p>
            AUTHORIZED BRAND PRODUCT SUPPLY
          </p>

          <h2>
            Brands We <span>Supply</span>
          </h2>

          <span>
            We supply products from leading industrial automation,
            electrical and instrumentation brands.
          </span>

        </div>


        <div className="brands-grid">

          {brands.map((brand) => (

            <article
              className="brand-card"
              key={brand.number}
            >

              <span>
                {brand.number}
              </span>

              <h3>
                {brand.name}
              </h3>

              <p>
                {brand.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          PRODUCTS CTA
      ===================================================== */}

      <div className="products-cta">

        <div className="products-cta-content">

          <p>
            NEED THE RIGHT PRODUCT?
          </p>

          <h2>
            Let's Find the Right
            <span> Solution for You</span>
          </h2>

          <p className="products-cta-text">
            Tell us what you need for your industrial automation,
            electrical or instrumentation application and our team
            can help you identify the right product solution.
          </p>

          <Link
            to="/contact"
            className="products-cta-button"
          >
            Enquire Now
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Products;