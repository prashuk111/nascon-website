import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMetaMap = {
  "/": {
    title: "Nascon Technologies | Industrial Automation, Control Panels & Product Supply",
    description: "Nascon Technologies delivers smart automation solutions, custom engineered control panels, and trusted industrial products for modern manufacturing.",
  },
  "/about": {
    title: "About Us | Nascon Technologies - Industrial Automation Excellence Since 2012",
    description: "Learn about Nascon Technologies, our 12+ years of engineering experience, values, and industrial automation capabilities.",
  },
  "/products": {
    title: "Industrial Automation Products | Nascon Technologies",
    description: "Explore genuine industrial automation products, PLCs, HMIs, VFD drives, switchgear, relays, cables, and control components from trusted brands.",
  },
  "/solutions": {
    title: "Engineering & Automation Solutions | Nascon Technologies",
    description: "Custom process automation, control panels, IoT remote monitoring, SPM automation, and electrical engineering solutions.",
  },
  "/industries": {
    title: "Industries We Serve | Nascon Technologies",
    description: "Application-driven automation and electrical control solutions across automotive, packaging, food & beverage, pharmaceuticals, and manufacturing.",
  },
  "/partners": {
    title: "Technology & Brand Partners | Nascon Technologies",
    description: "Authorized system integrator and distributor for global leaders including Schneider Electric, Siemens, Phoenix Contact, Multispan, and Selec.",
  },
  "/contact": {
    title: "Contact Us & Business Enquiry | Nascon Technologies",
    description: "Get in touch with Nascon Technologies for custom automation panels, product inquiries, project consultation, and business partnerships.",
  },
};

const partnerNames = {
  schneider: "Schneider Electric",
  siemens: "Siemens",
  phoenix: "Phoenix Contact",
  multispan: "Multispan",
  selec: "Selec",
  finolex: "Finolex Cables",
  gloster: "Gloster Cables",
};

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    let meta = pageMetaMap[pathname];

    if (!meta) {
      if (pathname.startsWith("/partners/")) {
        const slug = pathname.replace("/partners/", "").toLowerCase();
        const brand = partnerNames[slug] || "Brand";
        meta = {
          title: `${brand} Products & Solutions | Nascon Technologies`,
          description: `Authorized supply and integration for genuine ${brand} automation, control, and electrical products at Nascon Technologies.`,
        };
      } else {
        meta = {
          title: "Nascon Technologies | Industrial Automation Solutions",
          description:
            "Smart automation solutions and engineered control panels for modern industries.",
        };
      }
    }

    // Update document title
    document.title = meta.title;

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

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", meta.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", meta.description);

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute("content", currentUrl);

  }, [pathname]);

  return null;
}
