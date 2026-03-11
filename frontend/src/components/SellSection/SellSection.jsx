import React from "react";
import {
  Camera,
  FileSearch,
  Banknote,
  ShieldCheck,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import "./SellSection.css";

const STEPS = [
  {
    id: "01",
    title: "Snap & List",
    desc: "Take 5 high-quality photos of your car and set your price. It takes less than 2 minutes.",
    icon: <Camera size={32} />,
    color: "#E01268",
  },
  {
    id: "02",
    title: "Verification",
    desc: "Our AI and experts verify the car details to ensure trust for potential buyers.",
    icon: <FileSearch size={32} />,
    color: "#0F172A",
  },
  {
    id: "03",
    title: "Get Offers",
    desc: "Receive competitive offers from verified buyers. Choose the best one for you.",
    icon: <Banknote size={32} />,
    color: "#E01268",
  },
  {
    id: "04",
    title: "Secure Sale",
    desc: "We handle the paperwork and ensure the payment hits your account instantly.",
    icon: <ShieldCheck size={32} />,
    color: "#0F172A",
  },
];

function SellSection() {
  return (
    <section className="sell-car-section">
      <div className="gradient-sphere"></div>

      <div className="container">
        <div className="sell-flex">
          <div className="sell-left">
            <span className="mini-tag">Carauras Ecosystem</span>
            <h2>
              Turn Your Car Into <span>Cash</span> In Hours
            </h2>
            <p>
              We've redesigned the selling experience from the ground up. No
              low-ballers, no endless phone calls. Just results.
            </p>

            <div className="auth-cta-card">
              <div className="cta-icon-box">
                <UserPlus color="white" size={28} />
              </div>
              <div className="cta-text">
                <h4>Join 50k+ Sellers</h4>
                <p>Create an account to start your listing</p>
              </div>
              <button className="create-acc-btn">
                Register <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="sell-right">
            <div className="steps-grid">
              {STEPS.map((step) => (
                <div key={step.id} className="step-card">
                  <div className="step-header">
                    <span className="step-number">{step.id}</span>
                    <div className="step-icon" style={{ color: step.color }}>
                      {step.icon}
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <div className="hover-line"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellSection;
