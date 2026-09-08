import { CheckCircle2, Shield, Zap, Sparkles, Award, Star } from "lucide-react";

export default function WhyChoosePartner({ partner }) {
  const { whyChoose, name } = partner;
  if (!whyChoose || whyChoose.length === 0) return null;

  const icons = [Award, Sparkles, Zap, Shield, Star, CheckCircle2];

  return (
    <section className="nascon-why-partner-section" aria-label={`Why Choose ${name}`}>
      <div className="nascon-why-partner-container">
        <div className="nascon-why-partner-header">
          <span className="nascon-section-eyebrow">TECHNOLOGY ADVANTAGE</span>
          <h2 className="nascon-section-title">
            Why Industry Leaders Choose {name}
          </h2>
          <p className="nascon-section-subtitle">
            Proven performance, global certifications, and continuous innovation trusted by manufacturing and process industries worldwide.
          </p>
        </div>

        <div className="nascon-why-partner-grid">
          {whyChoose.map((item, index) => {
            const IconComp = icons[index % icons.length];
            return (
              <div key={index} className="nascon-why-card">
                <div className="why-card-icon-wrap">
                  <IconComp size={20} className="why-card-icon" />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
