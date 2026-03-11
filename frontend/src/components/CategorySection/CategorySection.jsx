import React from "react";
import {
  ArrowUpRight,
  Zap,
  Trophy,
  Shield,
  Compass,
  ChevronRight,
} from "lucide-react";
import "./CategorySection.css";

const CATEGORIES = [
  {
    id: 1,
    name: "Hypercars",
    count: "12 Units",
    icon: <Zap />,
    class: "card-tall",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=400",
  },
  {
    id: 2,
    name: "SUVs",
    count: "840+ Units",
    icon: <Compass />,
    class: "card-wide",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400",
  },
  {
    id: 3,
    name: "Electric",
    count: "320 Units",
    icon: <Zap />,
    class: "card-small",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=400",
  },
  {
    id: 4,
    name: "Classic",
    count: "45 Units",
    icon: <Trophy />,
    class: "card-small",
    img: "https://images.unsplash.com/photo-1550202163-f9bc401777b1?q=80&w=400",
  },
  {
    id: 5,
    name: "Luxury",
    count: "150+ Units",
    icon: <Shield />,
    class: "card-medium",
    img: "https://images.unsplash.com/photo-1632243193044-77041261a33a?q=80&w=400",
  },
];

function CategorySection() {
  return (
    <section className="cat-section">
      <div className="bg-text">CARAURAS</div>
      <div className="container">
        <div className="cat-header">
          <div className="title-stack">
            <span className="accent-line"></span>
            <span className="sub-title">The Collection</span>
            <h2>
              Select by <span>DNA</span>
            </h2>
          </div>
          <p className="desc">
            Filtering isn't enough. Choose the vehicle that matches your pulse.
          </p>
        </div>

        <div className="bento-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className={`cat-card ${cat.class}`}>
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${cat.img})` }}
              ></div>
              <div className="card-overlay"></div>

              <div className="card-content">
                <div className="card-top">
                  <div className="card-icon">{cat.icon}</div>
                  <span className="count-pill">{cat.count}</span>
                </div>
                <div className="card-bottom">
                  <h3>{cat.name}</h3>
                  <button className="explore-btn">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="view-all-tile">
            <p>Don't see what you need?</p>
            <h3>Explore Full Inventory</h3>
            <button className="ghost-btn">
              Explore All <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
