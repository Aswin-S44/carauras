import React from "react";
import { Heart, Gauge, Fuel, Settings, Star, MapPin } from "lucide-react";
import "./FeaturedCars.css";

const CARS = [
  {
    id: 1,
    name: "Porsche 911 Carrera S",
    year: "2023",
    price: "$124,900",
    rating: "4.9",
    mileage: "1,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
    tag: "Trending",
    location: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
  },
  {
    id: 2,
    name: "BMW M4 Competition",
    year: "2022",
    price: "$82,500",
    rating: "4.8",
    mileage: "5,400 km",
    fuel: "Petrol",
    transmission: "Manual",
    tag: "New Arrival",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800",
  },
  {
    id: 3,
    name: "Tesla Model S Plaid",
    year: "2023",
    price: "$94,000",
    rating: "5.0",
    mileage: "800 km",
    fuel: "Electric",
    transmission: "Automatic",
    tag: "Eco Friendly",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800",
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    year: "2023",
    price: "$105,200",
    rating: "4.9",
    mileage: "2,100 km",
    fuel: "Electric",
    transmission: "Automatic",
    tag: "Limited",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800",
  },
];

function FeaturedCars() {
  return (
    <section className="featured-wrapper">
      <div className="section-head">
        <div className="head-content">
          <span className="overline">Premium Selection</span>
          <h2>Handpicked For You</h2>
          <p>Explore the most premium cars available in your area</p>
        </div>
        <button className="browse-all-btn">View All Inventory</button>
      </div>

      <div className="cars-grid">
        {CARS.map((car) => (
          <div className="premium-card" key={car.id}>
            <div className="image-box">
              <img src={car.image} alt={car.name} />
              <div className="badge-overlay">
                <span className="status-tag">{car.tag}</span>
                <button className="fav-btn">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            <div className="info-box">
              <div className="top-row">
                <span className="car-location">
                  <MapPin size={12} /> {car.location}
                </span>
                <div className="rating-pill">
                  <Star size={12} fill="#FFB800" color="#FFB800" />
                  {car.rating}
                </div>
              </div>

              <h3 className="car-title">{car.name}</h3>
              <p className="car-subtext">{car.year} · Verified History</p>

              <div className="features-strip">
                <div className="f-item">
                  <Gauge size={14} /> <span>{car.mileage}</span>
                </div>
                <div className="f-item">
                  <Fuel size={14} /> <span>{car.fuel}</span>
                </div>
                <div className="f-item">
                  <Settings size={14} /> <span>{car.transmission}</span>
                </div>
              </div>

              <div className="price-row">
                <div className="price-stack">
                  <span className="price-label">Price</span>
                  <span className="price-value">{car.price}</span>
                </div>
                <button className="card-action-btn">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCars;
