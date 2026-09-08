import { NavLink } from "react-router-dom";
import { Cpu, Zap, Cable, Gauge, LayoutGrid } from "lucide-react";
import "./CategoryNavBanner.css";

const categoryLinks = [
  {
    num: "01",
    label: "Automation",
    route: "/products/automation",
    icon: Cpu,
  },
  {
    num: "02",
    label: "Electrical Control",
    route: "/products/electrical-control",
    icon: Zap,
  },
  {
    num: "03",
    label: "Cables & Wiring",
    route: "/products/cables",
    icon: Cable,
  },
  {
    num: "04",
    label: "Instrumentation & Sensors",
    route: "/products/instrumentation",
    icon: Gauge,
  },
];

function CategoryNavBanner({ activeCategory }) {
  return (
    <nav className="cat-nav-banner" aria-label="Product Category Selection">
      <div className="cat-nav-container section-container">
        <span className="cat-nav-label">PRODUCT PORTFOLIOS:</span>
        <div className="cat-nav-pills">
          <NavLink
            to="/products"
            end
            className={({ isActive }) =>
              `cat-nav-pill ${isActive ? "active" : ""}`
            }
          >
            <LayoutGrid size={14} />
            <span>All Products</span>
          </NavLink>

          {categoryLinks.map((cat) => {
            const IconComponent = cat.icon;
            const isCurrent = activeCategory === cat.num;
            return (
              <NavLink
                key={cat.route}
                to={cat.route}
                className={({ isActive }) =>
                  `cat-nav-pill ${isActive || isCurrent ? "active" : ""}`
                }
              >
                <span className="cat-pill-num">{cat.num}</span>
                <IconComponent size={14} className="cat-pill-icon" />
                <span>{cat.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default CategoryNavBanner;
