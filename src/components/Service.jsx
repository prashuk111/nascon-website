import "./Service.css";

import {
  Settings,
  Package,
  Wrench,
} from "lucide-react";

function Services() {
  const services = [
    {
      number: "01",
      title: "Control Panel Manufacturing",
      description:
        "Engineered control panels designed for reliable industrial power distribution, automation and motor control applications.",

      icon: Settings,

      items: [
        "PLC Panels",
        "VFD Panels",
        "MCC / PCC Panels",
        "APFC Panels",

      ],
    },

    {
      number: "02",
      title: "Authorized Industrial Product Supply",
      description:
        "Genuine industrial automation and electrical control products from trusted global and Indian brands.",

      icon: Package,

      items: [
        "Automation Products",
        "Electrical Control Products",
        "Power And Protection",
        "Cables & Wiring",
      ],
    },

    {
      number: "03",
      title: "Automation System Integration Support",
      description:
        "Complete automation engineering, integration, programming, commissioning and technical support.",

      icon: Wrench,

      items: [
        "PLC /HMI / SCADA",
        "Drive Control Solutions",
        "Iot & Remote Monitoring",
        "Application Support"
      ],
    },
  ];

  return (
    <section className="services" id="services">

      <div className="services-heading">
        <p>WHAT WE DO</p>

        <h2>Our Core Business Pillars</h2>

        <span>
          Three focused strengths. One complete industrial solution approach.
        </span>
      </div>

      <div className="services-container">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className="service-card" key={service.title}>

              <div className="service-top">

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                  />
                </div>

              </div>

              <h3>{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <div className="service-divider"></div>

              <ul className="service-list">

                {service.items.map((item) => (
                  <li key={item}>
                    <span className="service-dot"></span>
                    {item}
                  </li>
                ))}

              </ul>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Services;