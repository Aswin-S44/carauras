import React from "react";
import {
  Car,
  Truck,
  Zap,
  Timer,
  Disc,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import "./BodyTypes.css";

const TYPES = [
  { id: 1, name: "Sedans", icon: <Car size={32} />, count: "1.2k+ Cars" },
  { id: 2, name: "SUVs", icon: <Disc size={32} />, count: "850+ Cars" },
  { id: 3, name: "Electric", icon: <Zap size={32} />, count: "420+ Cars" },
  { id: 4, name: "Pickups", icon: <Truck size={32} />, count: "230+ Cars" },
  { id: 5, name: "Sports", icon: <Timer size={32} />, count: "150+ Cars" },
  { id: 6, name: "Luxury", icon: <ShieldCheck size={32} />, count: "95+ Cars" },
];

function BodyTypes() {
  return (
    <section className="body-types-section">
      <div className="container">
        <div className="section-intro">
          <div className="intro-text">
            <span className="pill-tag">Categories</span>
            <h2>Browse by Body Type</h2>
            <p>Find the perfect vehicle that fits your lifestyle and needs.</p>
          </div>
          <button className="text-link">
            Explore All <ArrowRight size={18} />
          </button>
        </div>

        <div className="types-grid">
          {TYPES.map((type) => (
            <div key={type.id} className="type-card">
              <div className="icon-wrapper">{type.icon}</div>
              <h3>{type.name}</h3>
              <span>{type.count}</span>
              <div className="card-arrow">
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="promo-banner">
          <div className="promo-content">
            <h3>Want to sell your car instead?</h3>
            <p>Get an instant valuation and sell to verified buyers today.</p>
          </div>
          <button className="promo-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default BodyTypes;
