import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, Cpu, Zap, Cable, Gauge, Sliders, Wrench } from "lucide-react";
import "./Navbar.css";

const megaCategories = [
  {
    number: "01",
    title: "AUTOMATION",
    route: "/products/automation",
    icon: Cpu,
    description: "PLCs, HMIs, SCADA Systems, I/O Modules, VFDs & Servo Drives.",
  },
  {
    number: "02",
    title: "ELECTRICAL CONTROL",
    route: "/products/electrical-control",
    icon: Zap,
    description: "MCBs, Contactors, Overload Relays, Timers & SMPS Power Supplies.",
  },
  {
    number: "03",
    title: "CABLES & WIRING",
    route: "/products/cables",
    icon: Cable,
    description: "Power, Control & Instrumentation Cables, Glands & Accessories.",
  },
  {
    number: "04",
    title: "INSTRUMENTATION & SENSORS",
    route: "/products/instrumentation",
    icon: Gauge,
    description: "Temperature, Pressure & Flow Transmitters, RTD, Level & Signal Isolators.",
  },
];

const solutionsDropdownList = [
  {
    number: "01",
    title: "Smart Control Panels",
    route: "/solutions/control-panels",
    icon: Sliders,
    description: "PLC panels, VFD panels, MCC, PCC, APFC, RTU and custom automation panels.",
  },
  {
    number: "02",
    title: "Automation & Control Solutions",
    route: "/solutions/automation-control",
    icon: Wrench,
    description: "Intelligent control, supervisory SCADA, IoT remote monitoring, and field instrumentation.",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);
  const megaTimeoutRef = useRef(null);
  const solutionsTimeoutRef = useRef(null);

  // Check active states
  const isProductsActive = location.pathname.startsWith("/products");
  const isSolutionsActive = location.pathname.startsWith("/solutions");

  // Close menus on route navigation
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsOpen(false);
    setIsMegaOpen(false);
    setIsSolutionsOpen(false);
  }

  // Desktop mega menu hover for Products
  const handleMouseEnter = () => {
    if (megaTimeoutRef.current) {
      clearTimeout(megaTimeoutRef.current);
    }
    setIsMegaOpen(true);
  };

  const handleMouseLeave = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 160);
  };

  // Desktop dropdown hover for Solutions
  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setIsSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 160);
  };

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsMegaOpen(false);
        setIsSolutionsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-container">
        <Link to="/" className="logo" aria-label="Nascon Technologies Home">
          <picture>
            <source srcSet="/images/Nascon.webp" type="image/webp" />
            <img
              src="/images/Nascon.png"
              alt="Nascon Technologies"
              width="170"
              height="45"
              decoding="async"
              className="navbar-brand-logo"
            />
          </picture>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>

          {/* Products Nav Item with Hover Mega-Menu */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/products"
              className={`products-nav-link ${isProductsActive ? "active" : ""}`}
              aria-haspopup="true"
              aria-expanded={isMegaOpen}
            >
              <span>Products</span>
              <ChevronDown
                size={14}
                className={`dropdown-chevron ${isMegaOpen ? "rotated" : ""}`}
                aria-hidden="true"
              />
            </NavLink>

            {/* Desktop Mega Menu Dropdown */}
            {isMegaOpen && (
              <div
                className="mega-menu-dropdown"
                role="region"
                aria-label="Products Mega Menu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mega-menu-inner">
                  <div className="mega-menu-grid">
                    {megaCategories.map((cat) => {
                      const IconComponent = cat.icon;
                      return (
                        <Link
                          key={cat.route}
                          to={cat.route}
                          className="mega-menu-card"
                          onClick={() => setIsMegaOpen(false)}
                        >
                          <div className="mega-card-header">
                            <div className="mega-icon-box">
                              <IconComponent size={22} strokeWidth={2} />
                            </div>
                            <span className="mega-num">{cat.number}</span>
                          </div>

                          <h4 className="mega-title">{cat.title}</h4>
                          <p className="mega-desc">{cat.description}</p>

                          <div className="mega-link-action">
                            <span>Explore Products</span>
                            <ArrowRight size={14} className="mega-arrow" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mega-menu-bottom-bar">
                    <span className="mega-bottom-text">
                      Need a high-level view of all industrial categories?
                    </span>
                    <Link
                      to="/products"
                      className="mega-bottom-link"
                      onClick={() => setIsMegaOpen(false)}
                    >
                      <span>Explore Complete Portfolio (32 Products)</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Nav Item with Hover Dropdown */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={handleSolutionsEnter}
            onMouseLeave={handleSolutionsLeave}
          >
            <NavLink
              to="/solutions"
              className={`products-nav-link ${isSolutionsActive ? "active" : ""}`}
              aria-haspopup="true"
              aria-expanded={isSolutionsOpen}
            >
              <span>Solutions</span>
              <ChevronDown
                size={14}
                className={`dropdown-chevron ${isSolutionsOpen ? "rotated" : ""}`}
                aria-hidden="true"
              />
            </NavLink>

            {/* Desktop Solutions Dropdown Menu */}
            {isSolutionsOpen && (
              <div
                className="solutions-dropdown-menu"
                role="region"
                aria-label="Solutions Menu"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <div className="solutions-dropdown-inner">
                  {solutionsDropdownList.map((sol) => {
                    const IconComponent = sol.icon;
                    return (
                      <Link
                        key={sol.route}
                        to={sol.route}
                        className="solutions-dropdown-card"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        <div className="sol-card-header">
                          <div className="sol-icon-box">
                            <IconComponent size={20} strokeWidth={2} />
                          </div>
                          <span className="sol-card-num">{sol.number}</span>
                        </div>
                        <h4 className="sol-card-title">{sol.title}</h4>
                        <p className="sol-card-desc">{sol.description}</p>
                        <div className="sol-card-action">
                          <span>Explore Solution</span>
                          <ArrowRight size={14} className="sol-arrow" />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="solutions-dropdown-footer">
                  <span className="sol-footer-text">
                    Looking for custom system integration?
                  </span>
                  <Link
                    to="/solutions"
                    className="sol-footer-link"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <span>View All Solutions Overview</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/industries">Industries</NavLink>
          <NavLink to="/partners">Partners</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Dropdown Backdrop Blur Overlay */}
      {(isMegaOpen || isSolutionsOpen) && (
        <div
          className="navbar-dropdown-backdrop"
          onClick={() => {
            setIsMegaOpen(false);
            setIsSolutionsOpen(false);
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer & Overlay */}
      {isOpen && (
        <>
          <div
            className="mobile-backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-drawer" id="mobile-nav-drawer">
            <div className="mobile-drawer-links">
              <NavLink to="/" end onClick={() => setIsOpen(false)}>
                <span>Home</span>
                <ArrowRight size={15} className="mobile-arrow" />
              </NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>
                <span>About</span>
                <ArrowRight size={15} className="mobile-arrow" />
              </NavLink>

              {/* Mobile Products Expandable Accordion Item */}
              <div className="mobile-accordion-wrapper">
                <div className="mobile-accordion-header">
                  <NavLink
                    to="/products"
                    onClick={() => setIsOpen(false)}
                    className={`mobile-accordion-title ${isProductsActive ? "active" : ""}`}
                  >
                    <span>Products</span>
                  </NavLink>
                  <button
                    type="button"
                    className={`mobile-expand-btn ${isMobileProductsOpen ? "expanded" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileProductsOpen(!isMobileProductsOpen);
                    }}
                    aria-label="Toggle products category submenu"
                    aria-expanded={isMobileProductsOpen}
                  >
                    <ChevronDown size={18} />
                  </button>
                </div>

                {isMobileProductsOpen && (
                  <div className="mobile-sub-categories">
                    <NavLink
                      to="/products"
                      end
                      onClick={() => setIsOpen(false)}
                      className="mobile-sub-link"
                    >
                      <span className="mobile-sub-num">ALL</span>
                      <span className="mobile-sub-text">All Products Overview</span>
                      <ArrowRight size={13} className="mobile-arrow" />
                    </NavLink>
                    {megaCategories.map((cat) => {
                      const IconComponent = cat.icon;
                      return (
                        <NavLink
                          key={cat.route}
                          to={cat.route}
                          onClick={() => setIsOpen(false)}
                          className="mobile-sub-link"
                        >
                          <span className="mobile-sub-num">{cat.number}</span>
                          <span className="mobile-sub-text">
                            <IconComponent size={14} className="mobile-sub-icon" />
                            {cat.title}
                          </span>
                          <ArrowRight size={13} className="mobile-arrow" />
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Solutions Expandable Accordion Item */}
              <div className="mobile-accordion-wrapper">
                <div className="mobile-accordion-header">
                  <NavLink
                    to="/solutions"
                    onClick={() => setIsOpen(false)}
                    className={`mobile-accordion-title ${isSolutionsActive ? "active" : ""}`}
                  >
                    <span>Solutions</span>
                  </NavLink>
                  <button
                    type="button"
                    className={`mobile-expand-btn ${isMobileSolutionsOpen ? "expanded" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileSolutionsOpen(!isMobileSolutionsOpen);
                    }}
                    aria-label="Toggle solutions submenu"
                    aria-expanded={isMobileSolutionsOpen}
                  >
                    <ChevronDown size={18} />
                  </button>
                </div>

                {isMobileSolutionsOpen && (
                  <div className="mobile-sub-categories">
                    <NavLink
                      to="/solutions"
                      end
                      onClick={() => setIsOpen(false)}
                      className="mobile-sub-link"
                    >
                      <span className="mobile-sub-num">ALL</span>
                      <span className="mobile-sub-text">All Solutions Overview</span>
                      <ArrowRight size={13} className="mobile-arrow" />
                    </NavLink>
                    {solutionsDropdownList.map((sol) => {
                      const IconComponent = sol.icon;
                      return (
                        <NavLink
                          key={sol.route}
                          to={sol.route}
                          onClick={() => setIsOpen(false)}
                          className="mobile-sub-link"
                        >
                          <span className="mobile-sub-num">{sol.number}</span>
                          <span className="mobile-sub-text">
                            <IconComponent size={14} className="mobile-sub-icon" />
                            {sol.title}
                          </span>
                          <ArrowRight size={13} className="mobile-arrow" />
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>

              <NavLink to="/industries" onClick={() => setIsOpen(false)}>
                <span>Industries</span>
                <ArrowRight size={15} className="mobile-arrow" />
              </NavLink>
              <NavLink to="/partners" onClick={() => setIsOpen(false)}>
                <span>Partners</span>
                <ArrowRight size={15} className="mobile-arrow" />
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <span>Contact</span>
                <ArrowRight size={15} className="mobile-arrow" />
              </NavLink>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;