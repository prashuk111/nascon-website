import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMetaMap = {
  "/": {
    title: "Nascon Technologies | Industrial Automation, Control Panels & Product Supply",
    description: "Nascon Technologies delivers smart automation solutions, custom engineered control panels, and trusted industrial products for modern manufacturing.",
  },
  "/about": {
    title: "About Us | Nascon Technologies - Industrial Automation Excellence",
    description: "Learn about Nascon Technologies, our 12+ years of engineering experience, values, and industrial automation capabilities.",
  },
  "/products": {
    title: "Industrial Automation Products | Nascon Technologies",
    description: "Explore genuine industrial automation products, PLCs, HMIs, VFD drives, switchgear, relays, cables, and control components.",
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

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta =
      pageMetaMap[pathname] ||
      (pathname.startsWith("/partners/")
        ? {
            title: "Partner Solutions | Nascon Technologies",
            description:
              "Authorized partner products and automation solutions from leading industrial technology brands.",
          }
        : {
            title: "Nascon Technologies | Industrial Automation Solutions",
            description:
              "Smart automation solutions and engineered control panels for modern industries.",
          });

    document.title = meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", meta.description);
    }
  }, [pathname]);

  return null;
}
