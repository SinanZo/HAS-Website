import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetMeta = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
  </Helmet>
);

export default HelmetMeta;
