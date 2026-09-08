import { Link } from "react-router-dom";
import "./Product.css";

function Product() {
  return (
    <section className="products" id="products">

      <div className="products-heading">
        <p>OUR SOLUTIONS</p>

        <h2>Industrial Automation Solutions</h2>

        <span>
          High-quality automation products and solutions from
          trusted industrial technology brands.
        </span>
      </div>

      <div className="products-grid">

        {/* =========================
            CARD 01
        ========================= */}
        <div className="product-card">

          <div className="product-image">
            <picture>
              <source
                srcSet="/images/control-panel-balanced.webp"
                type="image/webp"
              />

              <img
                src="/images/control-panel-balanced.png"
                alt="Smart Control Panel Solutions"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          <div className="product-content">



            <h3>Smart Control Panels Solutions</h3>

            <p>
              Custom electrical and automation control panels
              designed for reliable industrial applications.
            </p>

            <Link to="/solutions/control-panels">
              Explore Solutions <span>→</span>
            </Link>

          </div>
        </div>


        {/* =========================
            CARD 02
        ========================= */}
        <div className="product-card">

          <div className="product-image">
            <picture>
              <source
                srcSet="/images/industrial-automation-home.webp"
                type="image/webp"
              />

              <img
                src="/images/industrial-automation-home.png"
                alt="Industrial Automation Solutions"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          <div className="product-content">



            <h3>Automation And Control Solutions</h3>

            <p>
              Automation components and systems for efficient
              and reliable industrial processes.
            </p>

            <Link to="/solutions/automation-control">
              Explore Solutions <span>→</span>
            </Link>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Product;