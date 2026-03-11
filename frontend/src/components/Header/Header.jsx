import React, { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  Heart,
  User,
  ShoppingBag,
  ChevronDown,
  MapPin,
  Phone,
  Car,
  PlusSquare,
} from "lucide-react";
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`ecommerce-header ${isScrolled ? "sticky" : ""}`}>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span>
              <MapPin size={14} /> Global Delivery
            </span>
            <span>
              <Phone size={14} /> +1 800 CAR-AURAS
            </span>
          </div>
          <div className="top-bar-right">
            <a href="#support">Help Center</a>
            <a href="#order">Track Order</a>
            <div className="lang-select">
              EN <ChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="logo-section">
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="logo">
              <div className="logo-icon">C</div>
              <span className="logo-name">Carauras</span>
            </div>
          </div>

          <div className="search-section">
            <div className="search-bar">
              <div className="category-dropdown">
                All Types <ChevronDown size={14} />
              </div>
              <input
                type="text"
                placeholder="Search for Audi, BMW, Electric..."
              />
              <button className="main-search-btn">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="user-actions">
            <div className="action-item desktop-only">
              <Heart size={24} />
              <span className="badge">0</span>
              <p>Wishlist</p>
            </div>
            <div className="action-item">
              <User size={24} />
              <p>Account</p>
            </div>
            <button className="sell-car-cta">
              <PlusSquare size={18} />
              <span>Sell Your Car</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="category-nav desktop-only">
        <div className="container">
          <ul className="nav-menu">
            <li>
              <a href="#new" className="active">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#used">Certified Used</a>
            </li>
            <li>
              <a href="#electric">Electric Vehicles</a>
            </li>
            <li>
              <a href="#luxury">Luxury & Sports</a>
            </li>
            <li>
              <a href="#suv">SUVs</a>
            </li>
            <li>
              <a href="#deals">Special Deals</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="logo-name">Carauras</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="sidebar-content">
          <button className="m-post-btn">Sell Your Car Now</button>
          <div className="m-nav-list">
            <a href="#buy">Browse Inventory</a>
            <a href="#used">Used Cars</a>
            <a href="#finance">Financing</a>
            <a href="#wishlist">My Wishlist</a>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;
