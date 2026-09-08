import { Link } from "react-router-dom";
import { ShieldCheck, Layers, Wrench, Truck, Cpu, Headphones, ArrowRight } from "lucide-react";
import { nasconSupportPoints } from "../../data/partnersData";

const iconMap = {
  ShieldCheck,
  Layers,
  Wrench,
  Truck,
  Cpu,
  Headphones,
};

export default function NasconSupport() {
  return (
    <section className="nascon-support-section" aria-label="Why Partner with NASCON Technologies">
      <div className="nascon-support-container">
        <div className="nascon-support-header">
          <div className="support-header-left">
            <span className="nascon-section-eyebrow">THE NASCON VALUE PROPOSITION</span>
            <h2 className="nascon-section-title">
              Why Source & Integrate Through NASCON?
            </h2>
            <p className="nascon-section-subtitle">
              We do not just supply boxes; we provide end-to-end engineering, application sizing, panel manufacturing, and field commissioning support.
            </p>
          </div>
          <div className="support-header-right">
            <Link to="/contact" className="nascon-btn-primary">
              <span>Contact Engineering</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="nascon-support-grid">
          {nasconSupportPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon] || ShieldCheck;
            return (
              <div key={index} className="nascon-support-card">
                <div className="support-card-icon-box">
                  <IconComponent size={22} className="support-card-icon" />
                </div>
                <div className="support-card-body">
                  <h3 className="support-card-title">{point.title}</h3>
                  <p className="support-card-desc">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
