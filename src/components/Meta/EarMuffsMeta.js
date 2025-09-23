import React from 'react';
import { Helmet } from 'react-helmet';

const EarMuffsMeta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Ear Muffs, Hearing Protection, Industrial Ear Muffs, Protective Gear, Delta Plus" />
      <meta name="author" content="Safety Products Store" />
    </Helmet>
  );
};

export default EarMuffsMeta;
