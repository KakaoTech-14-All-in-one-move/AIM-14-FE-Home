// Path: src/components/Head.tsx
// Head component for managing SEO and metadata
import React from 'react';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { CONFIG } from '../constants/config';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const Head: FC<HeadProps> = ({
  title = CONFIG.SITE_NAME,
  description = CONFIG.SITE_DESCRIPTION,
  image = `${CONFIG.SITE_URL}/og-image.png`,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={CONFIG.SITE_URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={CONFIG.SITE_URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Head; 