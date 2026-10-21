import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOForRoute, DEFAULT_OG_IMAGE, BRAND_NAME, CANONICAL_ORIGIN } from '../../seo/seoConfig';

const SEO = ({ route: customRoute }) => {
  const location = useLocation();
  const pathname = customRoute || location?.pathname || '/';
  const seo = getSEOForRoute(pathname);

  const ogUrl = seo.canonical || (pathname === '/' ? CANONICAL_ORIGIN : `${CANONICAL_ORIGIN}${pathname}`);
  const ogImage = seo.image || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.canonical ? (
        <link rel="canonical" href={seo.canonical} />
      ) : null}
      {seo.noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : null}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BRAND_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      {seo.schemas && seo.schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
