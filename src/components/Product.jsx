import { Link } from "react-router-dom";
import "./Product.css";

function Product() {
  return (
    <section className="products" id="products">

      <div className="products-heading">
        <p>OUR PRODUCTS</p>

        <h2>
          Industrial Automation Solutions
        </h2>

        <span>
          High-quality automation products and solutions from
          trusted industrial technology brands.
        </span>
      </div>

      <div className="products-grid">

        <div className="product-card">
          <div className="product-image">
            <img
            className="control-panel-img"
              src="/images/control-panel-balanced.png"
              alt="Control Panel Manufacturing"
            />
          </div>

          <div className="product-content">
            <h3>Control Panels</h3>

            <p>
              Custom electrical and automation control panels
              designed for industrial applications.
            </p>

            <Link to="/products">View Products →</Link>
          </div>
        </div>


        <div className="product-card">
          <div className="product-image">
            <img
              src="/images/industrial-automation-home.png"
              alt="Industrial automation equipment"
            />
          </div>

          <div className="product-content">
            <h3>Industrial Automation</h3>

            <p>
              Automation components and systems for efficient
              and reliable industrial processes.
            </p>

            <Link to="/products">View Products →</Link>
          </div>
        </div>


        <div className="product-card">
          <div className="product-image">
            <img
              src="/images/electrical-products-home.png"
              alt="Electrical automation products"
            />
          </div>

          <div className="product-content">
            <h3>Electrical Products</h3>

            <p>
              Reliable electrical products sourced from
              trusted industrial manufacturers.
            </p>

            <Link to="/products">View Products →</Link>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Product;