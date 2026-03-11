import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Send,
  Phone,
  Mail,
  MapPin,
  Zap,
} from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="carauras-footer">
      <div className="footer-top-cta">
        <div className="container">
          <div className="cta-content">
            <h2>
              Ready to find your <span>dream drive?</span>
            </h2>
            <p>Join 50,000+ car enthusiasts getting weekly curated deals.</p>
          </div>
          <div className="footer-newsletter">
            <input type="email" placeholder="Enter your email address" />
            <button className="newsletter-btn">
              <Send size={18} />
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>

      <div className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <div className="footer-logo">
                <div className="logo-sq">
                  <Zap size={20} fill="white" />
                </div>
                <span>CARAURAS</span>
              </div>
              <p className="brand-desc">
                Redefining the automotive marketplace with transparency, premium
                curation, and cutting-edge technology.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+1 (800) CAR-AURAS</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>concierge@carauras.com</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>99 Luxury Way, Beverly Hills, CA</span>
                </div>
              </div>
            </div>

            <div className="footer-link-col">
              <h4>Inventory</h4>
              <ul>
                <li>
                  <a href="#new">New Arrivals</a>
                </li>
                <li>
                  <a href="#electric">Electric Vehicles</a>
                </li>
                <li>
                  <a href="#luxury">Luxury & Sports</a>
                </li>
                <li>
                  <a href="#certified">Certified Pre-Owned</a>
                </li>
              </ul>
            </div>

            <div className="footer-link-col">
              <h4>Sellers</h4>
              <ul>
                <li>
                  <a href="#sell">Sell Your Car</a>
                </li>
                <li>
                  <a href="#valuation">Instant Valuation</a>
                </li>
                <li>
                  <a href="#dealers">Dealer Solutions</a>
                </li>
                <li>
                  <a href="#success">Success Stories</a>
                </li>
              </ul>
            </div>

            <div className="footer-link-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">Our Story</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#news">Newsroom</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">© 2025 Carauras Inc. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#ig">
              <Instagram size={20} />
            </a>
            <a href="#tw">
              <Twitter size={20} />
            </a>
            <a href="#fb">
              <Facebook size={20} />
            </a>
            <a href="#yt">
              <Youtube size={20} />
            </a>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="sep">•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
