import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="home">

  <div className="hero-content">

    <p className="hero-subtitle hero-animate hero-delay-1">
      NASCON TECHNOLOGIES
    </p>

    <h1 className="hero-animate hero-delay-2">
      Smart Automation.
      <br />
      Reliable Solutions.
      <br />
      Industrial Excellence.
    </h1>

    <p className="hero-description hero-animate hero-delay-3">
      We deliver innovative automation solutions, engineered
      panels and trusted industrial products for modern industries.
    </p>

    <div className="hero-buttons hero-animate hero-delay-4">

      <Link to="/products" className="primary-btn">
        Explore Products
      </Link>

      <Link to="/contact" className="secondary-btn">
        Contact Us
      </Link>

    </div>

  </div>

  <div className="hero-image hero-image-animate">

    <picture>
      <source srcSet="/images/hero.webp" type="image/webp" />
      <img
        src="/images/hero.png"
        alt="Nascon Technologies industrial automation solutions"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
    </picture>

  </div>

</section>
  );
}

export default Hero;