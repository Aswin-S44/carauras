import React from "react";
import { ArrowRight, Gauge, Zap, Wind, Star } from "lucide-react";
import "./Showcase.css";

function Showcase() {
  return (
    <section className="premium-showcase">
      <div className="decor-text">EXCELLENCE</div>

      <div className="showcase-container">
        <div className="showcase-visual">
          <div className="floating-glow"></div>
          {/* High-quality car PNG with background removed for the 'floating' effect */}
          <img
            src="https://www.pngplay.com/wp-content/uploads/13/Porsche-911-PNG-HD-Quality.png"
            alt="Porsche 911"
            className="main-car-img"
          />

          <div className="stat-bubble bubble-1">
            <Gauge size={20} />
            <div>
              <p>Top Speed</p>
              <strong>320 km/h</strong>
            </div>
          </div>

          <div className="stat-bubble bubble-2">
            <Zap size={20} />
            <div>
              <p>0-100 km/h</p>
              <strong>2.7s</strong>
            </div>
          </div>
        </div>

        <div className="showcase-info">
          <div className="brand-tag">
            <Star size={14} fill="#E01268" color="#E01268" />
            <span>DEAL OF THE MONTH</span>
          </div>

          <h2 className="title-large">
            Porsche 911 <br />
            <span>GT3 RS</span>
          </h2>

          <p className="description">
            The ultimate expression of performance. A street-legal racer built
            for those who demand precision in every corner.
          </p>

          <div className="price-tag-large">
            <div className="price-info">
              <span className="label">Starting at</span>
              <span className="value">$223,450</span>
            </div>
            <button className="premium-cta">
              Configure Now <ArrowRight size={20} />
            </button>
          </div>

          <div className="feature-list">
            <div className="f-row">
              <Wind size={18} />
              <span>Advanced Aerodynamics Package</span>
            </div>
            <div className="f-row">
              <Star size={18} />
              <span>Carbon Fiber Lightweight Construction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
