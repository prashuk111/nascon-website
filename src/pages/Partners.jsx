import { useState, useEffect } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import { getAllPartners, getPartner } from "../data/partnersData";
import PartnerTabs from "../components/partners/PartnerTabs";
import PartnerHero from "../components/partners/PartnerHero";
import PartnerKeyThemes from "../components/partners/PartnerKeyThemes";
import PartnerProductGrid from "../components/partners/PartnerProductGrid";
import ProductModal from "../components/partners/ProductModal";
import WhyChoosePartner from "../components/partners/WhyChoosePartner";
import NasconSupport from "../components/partners/NasconSupport";
import PartnerCTA from "../components/partners/PartnerCTA";
import "./Partners.css";

export default function Partners() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { slug: routeSlug } = useParams();
  const partners = getAllPartners();

  // Selected company from route param or URL query parameter
  const queryCompany = searchParams.get("company");
  const rawCompany = routeSlug || queryCompany;
  const activeSlug = rawCompany && partners.some((p) => p.slug === rawCompany.toLowerCase())
    ? rawCompany.toLowerCase()
    : (partners[0]?.slug || "phoenix");

  const currentPartner = getPartner(activeSlug);

  // If accessed via query param on /partners, normalize URL to /partners/:slug
  useEffect(() => {
    if (!routeSlug && queryCompany && partners.some((p) => p.slug === queryCompany.toLowerCase())) {
      navigate(`/partners/${queryCompany.toLowerCase()}`, { replace: true });
    }
  }, [routeSlug, queryCompany, navigate, partners]);

  // Modal State for Product Details
  const [modalCategory, setModalCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevPartnerSlug, setPrevPartnerSlug] = useState(activeSlug);

  // Close modal on partner change
  if (prevPartnerSlug !== activeSlug) {
    setPrevPartnerSlug(activeSlug);
    setIsModalOpen(false);
    setModalCategory(null);
  }

  const handleSelectPartner = (slug) => {
    if (slug !== activeSlug) {
      navigate(`/partners/${slug}`);
    }
    // Smoothly scroll to partner hero section
    setTimeout(() => {
      const heroEl = document.getElementById("partner-hero");
      if (heroEl) {
        const navOffset = 150;
        const elementPosition = heroEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    }, 50);
  };

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
    <main className="nascon-partners-page" id="nascon-partners-root">
      {/* Top Main Page Header */}
      <section className="nascon-partners-top-header">
        <div className="top-header-inner">
          <span className="top-header-pill">INDUSTRIAL TECHNOLOGY ECOSYSTEM</span>
          <h1 className="top-header-title">
            Authorized Technology Partners
          </h1>
          <p className="top-header-desc">
            NASCON TECHNOLOGIES partners with the world's most renowned automation, electrical switchgear, instrumentation, and cabling manufacturers to provide end-to-end industrial engineering excellence.
          </p>
        </div>
      </section>

      {/* Sticky / Floating Partner Selector Tabs */}
      <PartnerTabs
        partners={partners}
        activeSlug={activeSlug}
        onSelectPartner={handleSelectPartner}
      />

      {/* Selected Partner Hero Section */}
      <PartnerHero
        key={`hero-${activeSlug}`}
        partner={currentPartner}
        onScrollToProducts={handleScrollToProducts}
      />

      {/* Partner Key Themes (from Brochure) */}
      <PartnerKeyThemes
        key={`themes-${activeSlug}`}
        themes={currentPartner.keyThemes}
        partnerName={currentPartner.name}
      />

      {/* 4-Column Product Category Grid */}
      <PartnerProductGrid
        key={`grid-${activeSlug}`}
        partner={currentPartner}
        onOpenProductModal={handleOpenProductModal}
      />

      {/* Detailed Product Category Modal */}
      <ProductModal
        category={modalCategory}
        partner={currentPartner}
        isOpen={isModalOpen}
        onClose={handleCloseProductModal}
      />

      {/* Why Choose [Partner] Section */}
      <WhyChoosePartner key={`why-${activeSlug}`} partner={currentPartner} />

      {/* Why NASCON Technologies Support & Integration Grid */}
      <NasconSupport currentPartnerName={currentPartner.name} />

      {/* Bottom Closing Call-to-Action */}
      <PartnerCTA partner={currentPartner} />
    </main>
  );
}