import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProduct, productCategories } from "../data/productsData";
import { contactFAQs } from "../data/faqData";

const pageMetaMap = {
  "/": {
    title: "Nascon Technologies | Industrial Automation & Controls",
    description: "Smart industrial automation, custom control panels, and genuine industrial product supply by Nascon Technologies.",
  },
  "/about": {
    title: "About Us | Nascon Technologies - Automation Since 2012",
    description: "Learn about Nascon Technologies, our 12+ years of engineering experience and industrial automation capabilities.",
  },
  "/products": {
    title: "Industrial Automation Products | Nascon Technologies",
    description: "Explore genuine industrial automation products, PLCs, HMIs, VFD drives, switchgear, relays, and cables from trusted brands.",
  },
  "/products/automation": {
    title: "Automation Products | Nascon Technologies",
    description: "Reliable control, visualization, drive and communication technologies for modern industrial automation. PLCs, HMIs, SCADA, VFDs, and Servo Drives.",
  },
  "/products/electrical-control": {
    title: "Electrical Control & Protection Products | Nascon Technologies",
    description: "Reliable switching, protection and power management products for modern industrial systems. MCBs, Contactors, Overload Relays, Timers, and SMPS.",
  },
  "/products/cables": {
    title: "Cables & Wiring Solutions | Nascon Technologies",
    description: "Power, control, and instrumentation cables, flexible wiring, cable glands, lugs, and cable management accessories for industrial applications.",
  },
  "/products/instrumentation": {
    title: "Field Instrumentation & Sensors | Nascon Technologies",
    description: "Industrial RTD/thermocouples, 4-20mA pressure transmitters, flow meters, ultrasonic level sensors, and signal isolators by Nascon.",
  },
  "/solutions": {
    title: "Automation & Control Solutions | Nascon Technologies",
    description: "Custom process automation, control panels, IoT remote monitoring, SPM automation, and electrical engineering solutions by Nascon.",
  },
  "/solutions/control-panels": {
    title: "Smart Control Panels Solutions | Nascon Technologies",
    description: "Custom PLC panels, VFD panels, MCC, PCC, APFC, RTU and bespoke automation enclosures manufactured and tested to IEC 61439 standards by Nascon Technologies.",
  },
  "/solutions/automation-control": {
    title: "Automation & Control Solutions | Nascon Technologies",
    description: "End-to-end industrial automation, PLC, HMI, SCADA architectures, VFD drives, IoT telemetry, and field instrumentation by Nascon Technologies.",
  },
  "/industries": {
    title: "Industries We Serve | Nascon Technologies",
    description: "Application-driven automation and electrical control solutions across manufacturing, automotive, pharma, and utilities.",
  },
  "/partners": {
    title: "Technology & Brand Partners | Nascon Technologies",
    description: "Authorized system integrator and distributor for global leaders including Schneider, Siemens, Phoenix Contact, and Selec.",
  },
  "/contact": {
    title: "Contact Us & Business Enquiry | Nascon Technologies",
    description: "Get in touch with Nascon Technologies for custom automation panels, product inquiries, and engineering consultation. Indore Office & Pithampur Factory.",
  },
};

const partnerNames = {
  phoenix: "Phoenix Contact",
  multispan: "Multispan",
  schneider: "Schneider Electric",
  siemens: "Siemens",
  selec: "Selec",
  finolex: "Finolex Cables",
  gloster: "Gloster Cables",
};

export default function PageMeta() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    let meta = pageMetaMap[pathname];

    if (!meta) {
      if (pathname.startsWith("/partners/")) {
        const slug = pathname.replace("/partners/", "").toLowerCase();
        const brand = partnerNames[slug] || "Brand";
        meta = {
          title: `${brand} Products & Solutions | Nascon Technologies`,
          description: `Authorized supply and integration for genuine ${brand} automation and electrical products at Nascon Technologies.`,
        };
      } else if (pathname === "/partners" && search) {
        const queryParams = new URLSearchParams(search);
        const queryCompany = queryParams.get("company");
        if (queryCompany && partnerNames[queryCompany.toLowerCase()]) {
          const brand = partnerNames[queryCompany.toLowerCase()];
          meta = {
            title: `${brand} Products & Solutions | Nascon Technologies`,
            description: `Authorized supply and integration for genuine ${brand} automation and electrical products at Nascon Technologies.`,
          };
        }
      } else if (pathname.startsWith("/products/")) {
        const parts = pathname.split("/").filter(Boolean);
        // /products/:category/:productId
        if (parts.length >= 3) {
          const categorySlug = parts[1];
          const productSlug = parts[2];
          const prod = getProduct(categorySlug, productSlug);
          if (prod) {
            meta = {
              title: `${prod.fullName || prod.name} | Nascon Technologies`,
              description: `${prod.fullName}: ${prod.shortDescription} Genuine industrial supply and automation integration by Nascon Technologies.`,
            };
          }
        }
        if (!meta) {
          meta = {
            title: "Industrial Automation Products | Nascon Technologies",
            description: "Explore genuine industrial automation products, PLCs, HMIs, VFD drives, switchgear, relays, and cables from trusted brands.",
          };
        }
      } else {
        meta = {
          title: "Nascon Technologies | Industrial Automation Solutions",
          description:
            "Smart industrial automation solutions and engineered control panels by Nascon Technologies.",
        };
      }
    }

    // Determine dynamic sharing image (Product image for product detail, fallback for others)
    let dynamicImage = "https://nascontechnologies.com/images/hero.png";
    if (pathname.startsWith("/products/")) {
      const parts = pathname.split("/").filter(Boolean);
      if (parts.length >= 3) {
        const prod = getProduct(parts[1], parts[2]);
        if (prod) {
          dynamicImage = prod.webpImage
            ? `https://nascontechnologies.com${prod.webpImage}`
            : `https://nascontechnologies.com${prod.image}`;
        }
      }
    }

    // Update document title
    document.title = meta.title;

    // Update Meta Title Tag
    const metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) {
      metaTitle.setAttribute("content", meta.title);
    }

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", meta.description);
    }

    // Update Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const currentUrl = `https://nascontechnologies.com${pathname === "/" ? "" : pathname}`;
    if (canonical) {
      canonical.setAttribute("href", currentUrl);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", currentUrl);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", dynamicImage);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", meta.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", meta.description);

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute("content", currentUrl);

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute("content", dynamicImage);

    // =========================================================================
    // DYNAMIC SCHEMA.ORG JSON-LD FOR AI SEARCH (GEO) & KNOWLEDGE GRAPH
    // =========================================================================
    const schemas = [];

    // 1. BreadcrumbList Schema for all pages
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nascontechnologies.com/",
      },
    ];

    let runningPath = "";
    pathSegments.forEach((segment, idx) => {
      runningPath += `/${segment}`;
      let name = segment.replace(/-/g, " ");
      name = name.charAt(0).toUpperCase() + name.slice(1);
      if (segment === "automation") name = "Automation Products";
      else if (segment === "electrical-control") name = "Electrical Control & Protection";
      else if (segment === "cables") name = "Cables & Wiring";
      else if (segment === "instrumentation") name = "Instrumentation & Sensors";
      else if (segment === "control-panels") name = "Smart Control Panels";
      else if (segment === "automation-control") name = "Automation & Control Solutions";

      breadcrumbItems.push({
        "@type": "ListItem",
        position: idx + 2,
        name,
        item: `https://nascontechnologies.com${runningPath}`,
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });

    // 2. Page Specific Schemas
    if (pathname === "/contact") {
      // ContactPage + LocalBusiness + FAQPage
      schemas.push({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${currentUrl}#webpage`,
        url: currentUrl,
        name: "Contact Nascon Technologies",
        description: "Official contact channels, registered office in Indore, and manufacturing plant in Pithampur, Madhya Pradesh.",
        mainEntity: {
          "@type": ["LocalBusiness", "Corporation"],
          name: "Nascon Technologies",
          url: "https://nascontechnologies.com",
          telephone: "+919826288999",
          email: "Nishit@nascon.in",
          image: "https://nascontechnologies.com/images/hero.webp",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "G-11 Swadesh Bhawan, 2 Press Complex",
            addressLocality: "Indore",
            addressRegion: "Madhya Pradesh",
            postalCode: "452018",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.7196,
            longitude: 75.8577,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:30",
              closes: "18:30",
            },
          ],
          department: [
            {
              "@type": "LocalBusiness",
              name: "Nascon Technologies Manufacturing Plant",
              telephone: "+919826288999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "41 Industrial Estate, Sector-II",
                addressLocality: "Pithampur",
                addressRegion: "Madhya Pradesh",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.6074,
                longitude: 75.6806,
              },
            },
          ],
        },
      });

      // FAQPage Schema
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: contactFAQs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
    } else if (pathname === "/solutions/control-panels") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Smart Control Panels Manufacturing",
        serviceType: "Custom Industrial Control Panel Manufacturing to IEC 61439 Standards",
        provider: {
          "@type": "Organization",
          name: "Nascon Technologies",
          url: "https://nascontechnologies.com",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Control Panel Solutions",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "PLC Automation Panels" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "VFD & Drive Panels" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "MCC & iMCC Motor Control Centers" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "PCC Power Control Centers" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "APFC Automatic Power Factor Panels" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "RTU & Telemetry Panels" } },
          ],
        },
      });
    } else if (pathname === "/solutions/automation-control") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Industrial Automation & Control Solutions",
        serviceType: "Turnkey PLC, HMI, SCADA, VFD and IoT System Integration",
        provider: {
          "@type": "Organization",
          name: "Nascon Technologies",
          url: "https://nascontechnologies.com",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      });
    } else if (pathname === "/products") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Industrial Automation Products Catalog",
        description: meta.description,
        url: currentUrl,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: productCategories.map((cat, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: cat.title,
            url: `https://nascontechnologies.com${cat.route}`,
          })),
        },
      });
    } else if (pathname.startsWith("/products/")) {
      const parts = pathname.split("/").filter(Boolean);
      if (parts.length >= 3) {
        // Individual Product Detail
        const categorySlug = parts[1];
        const productSlug = parts[2];
        const prod = getProduct(categorySlug, productSlug);
        if (prod) {
          schemas.push({
            "@context": "https://schema.org",
            "@type": "Product",
            name: prod.fullName || prod.name,
            sku: `NASCON-${prod.category.toUpperCase()}-${prod.id.toUpperCase()}`,
            mpn: prod.id,
            description: prod.overview || prod.shortDescription,
            image: prod.webpImage
              ? `https://nascontechnologies.com${prod.webpImage}`
              : `https://nascontechnologies.com${prod.image}`,
            category: prod.categoryName,
            brand: {
              "@type": "Brand",
              name: "Nascon Technologies Authorized Partner Supply",
            },
            offers: {
              "@type": "Offer",
              url: currentUrl,
              priceCurrency: "INR",
              price: "0.00",
              priceValidUntil: "2027-12-31",
              itemCondition: "https://schema.org/NewCondition",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "Nascon Technologies",
                url: "https://nascontechnologies.com/",
              },
            },
          });
        }
      }
    }

    // Inject or update dynamic JSON-LD tag in head
    let scriptTag = document.getElementById("nascon-dynamic-jsonld");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "nascon-dynamic-jsonld";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemas,
    });

  }, [pathname, search]);

  return null;
}
