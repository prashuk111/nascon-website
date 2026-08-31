import "./Service.css";

import {
  Settings,
  Package,
  Wrench,
} from "lucide-react";


function Services() {
  const services = [
    {
      title: "Control Panel Manufacturing",
      description:
        "Custom-built electrical and automation control panels designed for reliable industrial operations.",
      icon: Settings,
    },
    {
      title: "Authorized Industrial Product Supply",
      description:
        "Genuine industrial automation products from trusted manufacturers and global brands.",
      icon: Package,
    },
    {
      title: "Automation System Integration",
      description:
        "Complete automation integration and support solutions tailored to industrial requirements.",
      icon: Wrench,
    },
  ];


  return (
    <section className="services" id="services">

      <div className="services-heading">

        <p>WHAT WE DO</p>

        <h2>Our Solutions</h2>

        <span>
          Reliable industrial solutions designed to support modern
          manufacturing and automation.
        </span>

      </div>


      <div className="services-container">

        {services.map((service) => {

          const Icon = service.icon;

          return (
            <div className="service-card" key={service.title}>

              <div className="service-icon">
                <Icon
                  size={26}
                  strokeWidth={1.8}
                />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Learn More →
              </a>

            </div>
          );

        })}

      </div>

    </section>
  );
}


export default Services;