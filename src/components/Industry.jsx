import "./Industry.css";

import {
  Factory,
  Utensils,
  Droplets,
  Zap,
  Pill,
  Building2,
} from "lucide-react";

function Industry() {
  const industries = [
    {
      title: "Manufacturing",
      description:
        "Automation and control solutions for modern manufacturing facilities.",
      icon: Factory,
    },
    {
      title: "Food & Beverage",
      description:
        "Reliable automation solutions for efficient food and beverage production.",
      icon: Utensils,
    },
    {
      title: "Water & Wastewater",
      description:
        "Smart control and monitoring solutions for water treatment systems.",
      icon: Droplets,
    },
    {
      title: "Energy & Utilities",
      description:
        "Industrial automation solutions for dependable energy operations.",
      icon: Zap,
    },
    {
      title: "Pharmaceuticals",
      description:
        "Precise automation solutions for pharmaceutical manufacturing.",
      icon: Pill,
    },
    {
      title: "Infrastructure",
      description:
        "Control and automation systems supporting critical infrastructure.",
      icon: Building2,
    },
  ];

  return (
    <section className="industries" id="industries">
 <center>
      <div className="industries-heading">
        
        <p>INDUSTRIES WE SERVE</p>

        <h2>
          Solutions Across Industries
        </h2>

        <span>
         Our automation and electrical solutions are designed
          to meet the needs of diverse industrial environments.
         
        </span>

      </div>
</center>

      <div className="industries-grid">

        {industries.map((industry) => {

          const Icon = industry.icon;

          return (
            <div className="industry-card" key={industry.title}>

              <div className="industry-icon">
                <Icon
                  size={30}
                  strokeWidth={1.8}
                />
              </div>

              <div className="industry-content">

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Industry;