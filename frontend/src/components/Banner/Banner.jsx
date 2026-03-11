import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import "./Banner.css";

const SLIDES = [
  {
    id: 1,
    title: "Find Your Precision Performance",
    subtitle: "Premium Selection",
    description:
      "Experience the thrill of driving. Explore our curated collection of certified luxury vehicles with verified history.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920",
    cta: "Browse Inventory",
    accent: "featured",
  },
  {
    id: 2,
    title: "Sell Your Car in 24 Hours",
    subtitle: "Instant Valuation",
    description:
      "Get a competitive offer within minutes. We handle all the paperwork and ensure instant payment to your account.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920",
    cta: "Get an Offer",
    accent: "sell",
  },
  {
    id: 3,
    title: "The Future is Electric",
    subtitle: "Eco-Performance",
    description:
      "Join the revolution with the latest EV models. High range, zero emissions, and cutting-edge technology.",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1920",
    cta: "Explore EVs",
    accent: "ev",
  },
];

function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent(current === SLIDES.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? SLIDES.length - 1 : current - 1);

  return (
    <section className="hero-slider">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
          </div>

          <div className="slide-content">
            <div className="container">
              <div className="text-box">
                <div className="badge">
                  <Zap size={14} fill="#E01268" />
                  <span>{slide.subtitle}</span>
                </div>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>

                <div className="cta-group">
                  <button className="main-cta">
                    {slide.cta} <ArrowRight size={20} />
                  </button>
                  <button className="sec-cta">View Details</button>
                </div>

                <div className="trust-badges">
                  <div className="t-item">
                    <ShieldCheck size={18} />
                    <span>Verified Seller</span>
                  </div>
                  <div className="t-item">
                    <Zap size={18} />
                    <span>Instant Approval</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-controls">
        <button onClick={prevSlide} className="ctrl-btn">
          <ChevronLeft />
        </button>
        <div className="progress-container">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={`prog-bar ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            >
              <div className="fill"></div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="ctrl-btn">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Banner;
