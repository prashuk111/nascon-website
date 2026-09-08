import { Award, Zap, ShieldCheck, Globe2, CheckCircle } from "lucide-react";

export default function PartnerKeyThemes({ themes }) {
  if (!themes || themes.length === 0) return null;

  const icons = [Award, Zap, ShieldCheck, Globe2];

  return (
    <section className="nascon-partner-themes-section" aria-label="Partner Core Competencies">
      <div className="nascon-partner-themes-container">
        <div className="nascon-partner-themes-grid">
          {themes.map((theme, index) => {
            const IconComponent = icons[index % icons.length] || CheckCircle;
            return (
              <div key={index} className="nascon-partner-theme-card">
                <div className="nascon-theme-icon-box">
                  <IconComponent size={22} className="nascon-theme-icon" />
                </div>
                <div className="nascon-theme-content">
                  <h3 className="nascon-theme-title">{theme.label}</h3>
                  <p className="nascon-theme-desc">{theme.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
