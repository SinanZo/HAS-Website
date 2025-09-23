import React from 'react';
import { Helmet } from 'react-helmet';

const SpectaclesMeta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Safety Spectacles, Eye Protection, Protective Glasses, Industrial Safety, Delta Plus" />
      <meta name="author" content="Safety Products Store" />
    </Helmet>
  );
};

export default SpectaclesMeta;
