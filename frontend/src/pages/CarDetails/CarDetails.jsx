import React, { useState } from "react";
import {
  Gauge,
  Fuel,
  Settings,
  ShieldCheck,
  MapPin,
  ChevronRight,
  Star,
  Share2,
  Heart,
  MessageSquare,
  Zap,
} from "lucide-react";
import "./CarDetails.css";

const images = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=800",
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800",
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800",
];

function CarDetails() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="details-container">
      {/* Breadcrumb - Desktop Only */}
      <div className="breadcrumb desktop-only">
        Inventory <ChevronRight size={14} /> Exotic <ChevronRight size={14} />{" "}
        <span>Porsche 911</span>
      </div>

      <div className="details-layout">
        {/* LEFT: Gallery & Info */}
        <div className="layout-main">
          <div className="gallery-wrapper">
            <div className="main-img">
              <img src={images[activeImg]} alt="Car" />
              <div className="img-count">
                {activeImg + 1} / {images.length}
              </div>
            </div>
            <div className="thumbs">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`thumb-item ${activeImg === i ? "active" : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="mobile-price-section mobile-only">
            <div className="m-price-row">
              <h2>$124,900</h2>
              <div className="m-actions">
                <button>
                  <Share2 size={20} />
                </button>
                <button>
                  <Heart size={20} />
                </button>
              </div>
            </div>
            <button className="m-contact-btn">Contact Seller</button>
          </div>

          <div className="info-header">
            <div className="badge-row">
              <span className="b-cert">Carauras Certified</span>
              <span className="b-stock">In Stock</span>
            </div>
            <h1>
              Porsche 911 Carrera S <span>2023</span>
            </h1>
            <div className="meta">
              <span>
                <MapPin size={16} /> Miami, Florida
              </span>
              <span>
                <Star size={14} fill="#FFB800" color="#FFB800" /> 4.9 (24
                Reviews)
              </span>
            </div>
          </div>

          <div className="specs-grid">
            <div className="spec-card">
              <Gauge size={20} color="#E01268" />
              <div>
                <p>MILEAGE</p>
                <strong>1,200 km</strong>
              </div>
            </div>
            <div className="spec-card">
              <Zap size={20} color="#E01268" />
              <div>
                <p>POWER</p>
                <strong>450 HP</strong>
              </div>
            </div>
            <div className="spec-card">
              <Settings size={20} color="#E01268" />
              <div>
                <p>TRANSMISSION</p>
                <strong>PDK 8-Speed</strong>
              </div>
            </div>
            <div className="spec-card">
              <Fuel size={20} color="#E01268" />
              <div>
                <p>FUEL TYPE</p>
                <strong>Premium</strong>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h3>Description</h3>
            <p>
              This 2023 Porsche 911 Carrera S is finished in Jet Black Metallic.
              Features the Sport Chrono Package and PASM Sport Suspension. One
              owner, clean title, and full service history available.
            </p>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="layout-sidebar desktop-only">
          <div className="sticky-box">
            <div className="price-box">
              <p className="p-label">Retail Price</p>
              <h2 className="p-val">$124,900</h2>
              <div className="p-finance">Est. $1,850/mo</div>
              <div className="p-btns">
                <button className="btn-primary">Contact Seller</button>
                <button className="btn-secondary">Make an Offer</button>
              </div>
              <div className="p-safe">
                <ShieldCheck size={14} /> Verified Transaction
              </div>
            </div>

            <div className="seller-box">
              <div className="s-info">
                <img src="https://i.pravatar.cc/100" alt="seller" />
                <div>
                  <h4>Alex Thompson</h4>
                  <p>Private Seller</p>
                </div>
              </div>
              <button className="s-msg-btn">
                <MessageSquare size={18} /> Send Message
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CarDetails;
