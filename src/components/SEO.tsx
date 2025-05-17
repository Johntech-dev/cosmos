import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Cosmo Lab - Ethical AI & Cognitive Technology',
  description = 'Cosmo Lab is a pioneering force in ethical AI and cognitive technology, committed to advancing human potential through responsible innovation.',
  keywords = ['AI', 'cognitive technology', 'ethical AI', 'machine learning', 'UAE tech', 'Fourth Gate LLE'],
  image = '/images/cosmo-lab-og.jpg',
  url = 'https://cosmolab.cc',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
}) => {
  const siteTitle = 'Cosmo Lab';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'Organization',
    name: siteTitle,
    url: url,
    logo: `${url}/images/cosmo-lab-logo.png`,
    description: description,
    ...(type === 'article' && {
      headline: title,
      author: {
        '@type': 'Organization',
        name: author || 'Cosmo Lab',
      },
      datePublished: publishedTime,
      dateModified: modifiedTime,
      image: image,
    }),
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Cosmo Lab" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 