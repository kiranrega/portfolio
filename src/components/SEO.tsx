import { Helmet } from 'react-helmet-async';
import { defaultMetadata } from '@/lib/metadata';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  path?: string;
}

export const SEO = ({
  title = defaultMetadata.title.default,
  description = defaultMetadata.description,
  image = defaultMetadata.openGraph.images[0].url,
  type = defaultMetadata.openGraph.type,
  path = '',
}: SEOProps) => {
  const url = `${defaultMetadata.openGraph.url}${path}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: defaultMetadata.creator,
    url: defaultMetadata.openGraph.url,
    sameAs: [
      defaultMetadata.twitter.creator,
      'https://github.com/kirankumarrega',
      'https://linkedin.com/in/kirankumarrega',
    ],
    jobTitle: 'Frontend Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'IntouchCX',
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={defaultMetadata.keywords.join(', ')} />
      <meta name="author" content={defaultMetadata.creator} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={defaultMetadata.openGraph.siteName} />
      <meta property="og:locale" content={defaultMetadata.openGraph.locale} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={defaultMetadata.twitter.card} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={defaultMetadata.twitter.creator} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}; 