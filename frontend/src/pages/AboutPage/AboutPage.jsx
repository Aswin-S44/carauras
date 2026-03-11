import React from "react";
import {
  ShieldCheck,
  Zap,
  Users,
  Trophy,
  ArrowRight,
  Heart,
  Car,
} from "lucide-react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="main-container">
        {/* 1. Centered Hero */}
        <section className="about-intro">
          <span className="mini-overline">Our Story</span>
          <h1>
            Redefining the Art of the <span>Automotive Trade.</span>
          </h1>
          <p className="hero-text">
            Carauras isn't just a marketplace. It’s a premium ecosystem built
            for those who view cars as more than just transport—they are a
            passion.
          </p>
        </section>

        {/* 2. Balanced Stats */}
        <div className="stats-row-v2">
          <div className="s-block">
            <strong>50K+</strong>
            <p>Cars Sold</p>
          </div>
          <div className="s-block">
            <strong>120+</strong>
            <p>Verified Dealers</p>
          </div>
          <div className="s-block">
            <strong>4.9/5</strong>
            <p>User Rating</p>
          </div>
          <div className="s-block">
            <strong>24H</strong>
            <p>Avg. Sale Time</p>
          </div>
        </div>

        {/* 3. The Vision - Fixed Image & Text Alignment */}
        <section className="vision-split">
          <div className="vision-visual">
            <div className="image-placeholder">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200"
                alt="Luxury Car"
              />
              <div className="visual-badge">
                <Trophy size={18} />
                <span>#1 Exotic Marketplace</span>
              </div>
            </div>
          </div>
          <div className="vision-info">
            <h2>
              Why We Built <span>Carauras</span>
            </h2>
            <p>
              We noticed the used car market was broken. Lack of trust, hidden
              histories, and tedious paperwork made buying a car a chore.
            </p>
            <p>
              At Carauras, every listing is a promise of quality. We combine
              cutting-edge AI verification with concierge service to ensure you
              get the best deal.
            </p>
            <div className="feature-checklist">
              <div className="f-check">
                <ShieldCheck size={18} color="#E01268" />{" "}
                <span>Verified History Reports</span>
              </div>
              <div className="f-check">
                <Zap size={18} color="#E01268" />{" "}
                <span>Instant Lightning Valuations</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Principles - Grid Fix */}
        <section className="principles-section">
          <h2 className="section-title">The Principles That Drive Us</h2>
          <div className="principles-grid">
            <div className="p-card">
              <div className="p-icon">
                <ShieldCheck size={32} />
              </div>
              <h3>Trust Above All</h3>
              <p>
                Every seller and dealer is manually verified to ensure a
                scam-free environment.
              </p>
            </div>
            <div className="p-card">
              <div className="p-icon">
                <Heart size={32} />
              </div>
              <h3>User Obsessed</h3>
              <p>
                Our interface is designed for humans, not robots. Simple, fast,
                and beautiful.
              </p>
            </div>
            <div className="p-card">
              <div className="p-icon">
                <Car size={32} />
              </div>
              <h3>Curation</h3>
              <p>
                We filter out the noise so you only see high-quality, reliable
                vehicles.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Modern CTA */}
        <section className="final-cta-v2">
          <div className="cta-inner">
            <h2>Ready to find your next beast?</h2>
            <div className="cta-actions">
              <button className="cta-main">
                Browse Inventory <ArrowRight size={18} />
              </button>
              <button className="cta-sec">Sell Your Car</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
