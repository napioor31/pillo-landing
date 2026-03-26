import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://trypillo.pl';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

const SEO = ({
  title,
  description,
  canonical = '/',
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
  lang = 'pl',
  isHomepage = false,
}) => {
  const fullTitle = isHomepage ? title : `${title} | Pillo`;
  const canonicalUrl = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
