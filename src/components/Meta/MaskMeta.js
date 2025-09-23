import React from 'react';
import { Helmet } from 'react-helmet';

const MaskMeta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Disposable Masks, Safety Masks, Protective Masks, Industrial Masks, Delta Plus" />
      <meta name="author" content="Safety Products Store" />
    </Helmet>
  );
};

export default MaskMeta;
