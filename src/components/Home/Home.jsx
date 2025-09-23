// src/components/Home/Home.jsx
import React from "react";
import Hero from "../Hero/Hero";
import AboutSummary from "../AboutSummary/AboutSummary";
import Manufacturers from "../Manufacturers/Manufacturers";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ContactUs from "../ContactUs/ContactUs";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <section className="home-section home-about">
        <AboutSummary />
      </section>
      <section className="home-section home-manufacturers">
        <Manufacturers />
      </section>
      <section className="home-section home-featured">
        <FeaturedProducts />
      </section>
      <section className="home-section home-contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
