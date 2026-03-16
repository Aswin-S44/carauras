import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import CarDetails from "./pages/CarDetails/CarDetails";
import Footer from "./components/Footer/Footer";
import BlogScreen from "./pages/BlogScreen/BlogScreen";
import ExploreCarsPage from "./pages/ExploreCarsPage/ExploreCarsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Diagram from "./architecture/diagram";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<CarDetails />} />
          <Route path="/blogs" element={<BlogScreen />} />
          <Route path="/cars" element={<ExploreCarsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/design" element={<Diagram />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
