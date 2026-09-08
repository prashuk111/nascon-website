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
          FOUR CATEGORY NAVIGATION CARDS
      ===================================================== */}
      <section className="products-categories-overview section-container" aria-label="Product Category Portfolios">
        <div className="cat-overview-header">
          <p className="cat-overview-eyebrow">FOUR CORE DISCIPLINES</p>
          <h2>Industrial Product Portfolios</h2>
          <span>Select any discipline to explore dedicated product specifications, key features, and sizing assistance.</span>
        </div>

        <div className="cat-overview-cards-grid">
          {productCategories.map((cat) => (
            <div key={cat.id} className="cat-overview-card">
              <div className="cat-overview-card-top">
                <span className="cat-overview-num">{cat.number}</span>
                <span className="cat-overview-pill">{cat.products.length} Products</span>
              </div>
              <h3 className="cat-overview-title">{cat.title}</h3>
              <p className="cat-overview-desc">{cat.subtitle}</p>
              <Link
                to={cat.route || `/products/${cat.id}`}
                className="btn-explore-category-action"
                title={`Explore ${cat.title}`}
              >
                <span>Explore Products</span>
                <span className="action-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

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