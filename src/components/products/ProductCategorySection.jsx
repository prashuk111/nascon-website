import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

function ProductCategorySection({ category }) {
  if (!category) return null;

  const categoryRoute = category.route || (category.id === "electrical" ? "/products/electrical-control" : `/products/${category.id}`);

  return (
    <section
      className="product-category-section"
      id={`cat-${category.id}`}
      aria-labelledby={`heading-${category.id}`}
    >
      {/* Category Section Header */}
      <div className="product-category-header">
        <div className="product-category-header-top">
          <div className="product-category-eyebrow">
            <span className="cat-num-pill">{category.number}</span>
            <span className="cat-label">PRODUCT LINE</span>
          </div>

          <Link
            to={categoryRoute}
            className="btn-explore-dedicated-cat"
            title={`Explore dedicated ${category.title} page`}
          >
            <span>Explore All {category.shortTitle} Products</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <h2 id={`heading-${category.id}`} className="product-category-title">
          {category.title}
        </h2>

        <p className="product-category-subtitle">{category.subtitle}</p>

        {/* Brochure Value Pills */}
        {category.pills && category.pills.length > 0 && (
          <div className="product-category-pills" aria-label="Category key highlights">
            {category.pills.map((pill, idx) => (
              <span key={idx} className="category-value-pill">
                <span className="pill-dot" aria-hidden="true">✓</span>
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 8 Products Grid */}
      <div className="product-cards-grid">
        {category.products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
}

export default ProductCategorySection;
