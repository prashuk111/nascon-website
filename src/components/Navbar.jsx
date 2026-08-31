import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <img
          src="/images/Nascon.png"
          alt="Nascon Technologies"
        />
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