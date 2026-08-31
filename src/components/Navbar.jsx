import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <picture>
          <source srcSet="/images/Nascon.webp" type="image/webp" />
          <img
            src="/images/Nascon.png"
            alt="Nascon Technologies"
            width="170"
            height="45"
            decoding="async"
          />
        </picture>
      </Link>

      <div className="nav-links">

        <NavLink to="/" end>Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/solutions">Solutions</NavLink>

        <NavLink to="/industries">Industries</NavLink>

        <NavLink to="/partners">Partners</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;