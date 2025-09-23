import React from "react";
import ProductCard from "../components/ProductCard";
import HelmetData from "../data/helmets.json";

const SafetyHelmets = () => {
  return (
    <div>
      <h1>Safety Helmets</h1>
      <div className="product-grid">
        {HelmetData.map((helmet) => (
          <ProductCard key={helmet.id} title={helmet.name} image={helmet.image} />
        ))}
      </div>
    </div>
  );
};

export default SafetyHelmets;
