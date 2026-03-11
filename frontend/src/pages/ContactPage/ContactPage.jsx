import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ShieldCheck,
  Globe,
} from "lucide-react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-screen">
      <div className="inner-content">
        {/* Simplified & Centered Header */}
        <div className="contact-header-v2">
          <span className="overline">Get in Touch</span>
          <h1>
            We’re Here to Help You <span>Drive.</span>
          </h1>
          <p>
            Whether you're buying, selling, or just need expert advice, our team
            is ready to assist.
          </p>
        </div>

        <div className="contact-grid-v2">
          {/* Left Side: Info */}
          <div className="info-column">
            <div className="contact-card-v2">
              <div className="c-icon">
                <Phone size={24} />
              </div>
              <div className="c-details">
                <h4>Call Us</h4>
                <p>+1 (800) CAR-AURAS</p>
                <span>Mon-Fri: 9am - 6pm EST</span>
              </div>
            </div>

            <div className="contact-card-v2">
              <div className="c-icon">
                <Mail size={24} />
              </div>
              <div className="c-details">
                <h4>Email Us</h4>
                <p>support@carauras.com</p>
                <span>24/7 Response within 2hrs</span>
              </div>
            </div>

            <div className="contact-card-v2">
              <div className="c-icon">
                <MapPin size={24} />
              </div>
              <div className="c-details">
                <h4>Visit Showroom</h4>
                <p>99 Luxury Way, Beverly Hills</p>
                <span>California, CA 90210</span>
              </div>
            </div>

            <div className="trust-badges-v2">
              <div className="t-badge">
                <ShieldCheck size={18} /> Verified Dealership
              </div>
              <div className="t-badge">
                <Globe size={18} /> Global Export Support
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="form-column">
            <form className="contact-form-v2">
              <div className="form-title">
                <MessageSquare size={20} color="#E01268" />
                <h3>Send a Message</h3>
              </div>

              <div className="form-row">
                <div className="field-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="field-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="field-group">
                <label>Subject</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Buying a Car</option>
                  <option>Selling my Car</option>
                </select>
              </div>

              <div className="field-group">
                <label>Your Message</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button className="send-btn-v2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
