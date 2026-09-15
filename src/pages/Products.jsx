import { Link } from "react-router-dom";
import ProductsHero from "../components/products/ProductsHero";
import ProductCategorySection from "../components/products/ProductCategorySection";
import { productCategories, authorizedBrands } from "../data/productsData";
import "./ProductsPage.css";

function Products() {
  return (
    <main className="products-page" id="products">
      {/* =====================================================
          HERO SECTION (Eyebrow, Heading, Description & Jump Bar)
      ===================================================== */}
      <ProductsHero />


      {/* =====================================================
          FOUR MAJOR PRODUCT CATEGORY SECTIONS
      ===================================================== */}
      <div className="product-categories-wrapper section-container">
        {productCategories.map((category) => (
          <ProductCategorySection key={category.id} category={category} />
        ))}
      </div>

      {/* =====================================================
          AUTHORIZED BRAND SUPPLY SECTION
      ===================================================== */}
      <section className="brands-supply-section">
        <div className="section-container">
          <div className="brands-supply-heading">
            <p>AUTHORIZED BRAND PRODUCT SUPPLY</p>
            <h2>
              Brands We <span>Supply</span>
            </h2>
            <span>
              We supply genuine products from leading industrial automation,
              electrical and instrumentation technology manufacturers.
            </span>
          </div>

          <div className="brands-supply-grid">
            {authorizedBrands.map((brand) => (
              <Link
                to={`/partners/${brand.slug}`}
                key={brand.number}
                className="brand-supply-card"
                title={`View ${brand.name} solutions`}
              >
                <div className="brand-supply-card-top">
                  <span className="brand-supply-num">{brand.number}</span>
                  <span className="brand-supply-arrow" aria-hidden="true">→</span>
                </div>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS BOTTOM CTA
      ===================================================== */}
      <section className="products-catalog-cta">
        <div className="section-container">
          <div className="products-catalog-cta-box">
            <p className="catalog-cta-eyebrow">NEED THE RIGHT PRODUCT?</p>
            <h2>
              Let's Find the Right <span>Solution for You</span>
            </h2>
            <p className="catalog-cta-desc">
              Tell us what you need for your industrial automation,
              electrical or instrumentation application and our engineering team
              will assist you with product selection, technical sizing, and quotations.
            </p>
            <Link to="/contact" className="btn-catalog-cta-enquire">
              Enquire Now <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;