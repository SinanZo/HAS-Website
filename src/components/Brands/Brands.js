import React from 'react';
import './Brands.css';

const brands = [
  { name: 'Delta Plus', logo: './assets/images/brands/delta-plus.png' },
  { name: '3M', logo: './assets/images/brands/3m.png' },
  { name: 'Honeywell', logo: './assets/images/brands/honeywell.png' },
  { name: 'MSA', logo: './assets/images/brands/msa.png' },
];

const Brands = () => (
  <div className="brands">
    <h2>Trusted Brands</h2>
    <div className="brand-logos">
      {brands.map((brand, index) => (
        <div key={index} className="brand">
          <img src={brand.logo} alt={brand.name} />
          <p>{brand.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Brands;
