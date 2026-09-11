import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getIntegration, getAllIntegrations } from "../data/integrationsData";
import PartnerHero from "../components/partners/PartnerHero";
import PartnerKeyThemes from "../components/partners/PartnerKeyThemes";
import PartnerProductGrid from "../components/partners/PartnerProductGrid";
import ProductModal from "../components/partners/ProductModal";
import WhyChoosePartner from "../components/partners/WhyChoosePartner";
import NasconSupport from "../components/partners/NasconSupport";
import PartnerCTA from "../components/partners/PartnerCTA";
import "./Partners.css";

export default function IntegrationDetail({ slug: propSlug }) {
  const params = useParams();
  const activeSlug = propSlug || params.slug || "plc-hmi-scada";
  const currentIntegration = getIntegration(activeSlug);
  const allIntegrations = getAllIntegrations();

  // Modal State for Capability / Solution Details
  const [modalCategory, setModalCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevSlug, setPrevSlug] = useState(activeSlug);

  // Close modal if slug changes
  if (prevSlug !== activeSlug) {
    setPrevSlug(activeSlug);
    setIsModalOpen(false);
    setModalCategory(null);
  }

  const handleScrollToProducts = () => {
    const productsEl = document.getElementById("partner-products");
    if (productsEl) {
      const navOffset = 150;
      const elementPosition = productsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const handleOpenProductModal = (category) => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsModalOpen(false);
    setModalCategory(null);
  };

  return (
    <main className="nascon-partners-page" id="nascon-integration-root">
      {/* Top Header */}
      <section className="nascon-partners-top-header">
        <div className="top-header-inner">
          <span className="top-header-pill">INDUSTRIAL SYSTEM INTEGRATION</span>
          <h1 className="top-header-title">
            {currentIntegration.name}
          </h1>
          <p className="top-header-desc">
            {currentIntegration.tagline} — {currentIntegration.overview}
          </p>
        </div>
      </section>

      {/* Integration Navigation Strip */}
      <nav className="nascon-partner-tabs-wrapper" aria-label="Integration Solutions Navigation">
        <div className="nascon-partner-tabs-container">
          <div className="nascon-partner-tabs-header">
            <span className="nascon-partner-tabs-label">SYSTEM INTEGRATION &amp; ENGINEERING</span>
            <Link to="/partners" className="nascon-partner-tabs-count">
              ← View Technology Partners
            </Link>
          </div>

          <div className="partner-tabs-integration-links" role="tablist">
            {allIntegrations.map((item) => {
              const isActive = item.slug === activeSlug;
              return (
                <Link
                  key={item.slug}
                  to={`/partners/${item.slug}`}
                  role="tab"
                  aria-selected={isActive}
                  className={`partner-tabs-integration-link ${isActive ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <PartnerHero
        key={`hero-${activeSlug}`}
        partner={currentIntegration}
        onScrollToProducts={handleScrollToProducts}
      />

      {/* Key Themes */}
      <PartnerKeyThemes
        key={`themes-${activeSlug}`}
        themes={currentIntegration.keyThemes}
        partnerName={currentIntegration.name}
      />

      {/* 8-Card Capabilities Grid */}
      <PartnerProductGrid
        key={`grid-${activeSlug}`}
        partner={currentIntegration}
        onOpenProductModal={handleOpenProductModal}
      />

      {/* Detailed Category / Solution Modal */}
      <ProductModal
        category={modalCategory}
        partner={currentIntegration}
        isOpen={isModalOpen}
        onClose={handleCloseProductModal}
      />

      {/* Why Choose NASCON Section */}
      <WhyChoosePartner
        key={`why-${activeSlug}`}
        partner={currentIntegration}
      />

      {/* Support Value Proposition Grid */}
      <NasconSupport currentPartnerName={currentIntegration.name} />

      {/* Closing Call-to-Action */}
      <PartnerCTA partner={currentIntegration} />
    </main>
  );
}
