import React from "react";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import FeaturedCars from "../../components/FeaturedCars/FeaturedCars";
import BodyTypes from "../../components/BodyTypes/BodyTypes";
import CategorySection from "../../components/CategorySection/CategorySection";
import Showcase from "../../components/Showcase/Showcase";
import SellSection from "../../components/SellSection/SellSection";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Banner />
      <FeaturedCars />
      {/* <BodyTypes /> */}
      {/* <CategorySection /> */}
      <Showcase />
      <SellSection />
    </div>
  );
}

export default HomePage;
