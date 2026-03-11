import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Grid,
  List,
  X,
  Gauge,
  Fuel,
  Settings,
  Heart,
} from "lucide-react";
import "./ExploreCarsPage.css";

const CARS_DATABASE = [
  {
    id: 1,
    name: "Porsche 911 Carrera S",
    price: "$124,900",
    mileage: "1,200 km",
    fuel: "Petrol",
    trans: "Auto",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
  },
  {
    id: 2,
    name: "BMW M4 Competition",
    price: "$82,500",
    mileage: "5,400 km",
    fuel: "Petrol",
    trans: "Manual",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800",
  },
  {
    id: 3,
    name: "Tesla Model S Plaid",
    price: "$94,000",
    mileage: "800 km",
    fuel: "Electric",
    trans: "Auto",
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800",
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    price: "$105,200",
    mileage: "2,100 km",
    fuel: "Electric",
    trans: "Auto",
    img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800",
  },
  {
    id: 5,
    name: "Range Rover Sport",
    price: "$88,000",
    mileage: "12,000 km",
    fuel: "Diesel",
    trans: "Auto",
    img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800",
  },
  {
    id: 6,
    name: "Mercedes-AMG G63",
    price: "$175,000",
    mileage: "3,500 km",
    fuel: "Petrol",
    trans: "Auto",
    img: "https://images.unsplash.com/photo-1520031444821-f5c185c0746d?q=80&w=800",
  },
];

function ExploreCarsPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="explore-page">
      {/* 1. Page Banner */}
      <div className="explore-banner">
        <div className="inner-container">
          <h1>
            Find Your <span>Dream Car</span>
          </h1>
          <p>Explore over 50,000+ premium verified vehicles.</p>
        </div>
      </div>

      <div className="inner-container">
        <div className="explore-layout">
          {/* 2. Sidebar Filters (Desktop) / Drawer (Mobile) */}
          <aside className={`filter-sidebar ${showFilters ? "active" : ""}`}>
            <div className="filter-head">
              <h3>Filters</h3>
              <button
                className="mobile-only"
                onClick={() => setShowFilters(false)}
              >
                <X />
              </button>
            </div>

            <div className="filter-group">
              <label>Search Keyword</label>
              <div className="filter-search">
                <Search size={16} />
                <input type="text" placeholder="e.g. BMW M4" />
              </div>
            </div>

            <div className="filter-group">
              <label>Body Type</label>
              <div className="checkbox-list">
                {["Sedan", "SUV", "Coupe", "Hatchback", "Convertible"].map(
                  (type) => (
                    <div className="check-item" key={type}>
                      <input type="checkbox" id={type} />
                      <label htmlFor={type}>{type}</label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="filter-group">
              <label>Price Range</label>
              <input type="range" className="range-slider" />
              <div className="range-labels">
                <span>$10k</span>
                <span>$500k</span>
              </div>
            </div>

            <div className="filter-group">
              <label>Transmission</label>
              <select className="filter-select">
                <option>All Transmissions</option>
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>

            <button className="apply-btn">Apply Filters</button>
          </aside>

          {/* 3. Main Content Area */}
          <main className="explore-main">
            {/* Results Toolbar */}
            <div className="results-toolbar">
              <div className="results-count">
                Showing <strong>452</strong> cars available
              </div>
              <div className="toolbar-actions">
                <button
                  className="mobile-filter-trigger"
                  onClick={() => setShowFilters(true)}
                >
                  <SlidersHorizontal size={18} /> Filters
                </button>
                <div className="sort-box">
                  <span>Sort by:</span>
                  <select>
                    <option>Newest Listed</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
                <div className="view-toggle desktop-only">
                  <button className="active">
                    <Grid size={18} />
                  </button>
                  <button>
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Car Grid */}
            <div className="explore-grid">
              {CARS_DATABASE.map((car) => (
                <div className="car-card-compact" key={car.id}>
                  <div className="card-media">
                    <img src={car.img} alt={car.name} />
                    <button className="wishlist-btn">
                      <Heart size={18} />
                    </button>
                  </div>
                  <div className="card-info">
                    <h3>{car.name}</h3>
                    <div className="card-specs">
                      <span>
                        <Gauge size={14} /> {car.mileage}
                      </span>
                      <span>
                        <Fuel size={14} /> {car.fuel}
                      </span>
                      <span>
                        <Settings size={14} /> {car.trans}
                      </span>
                    </div>
                    <div className="card-price-row">
                      <span className="price">{car.price}</span>
                      <button className="view-btn">Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <span className="page-dots">...</span>
              <button className="page-btn">12</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ExploreCarsPage;
