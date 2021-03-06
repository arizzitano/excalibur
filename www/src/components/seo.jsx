import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

function SEO({
  description, lang, meta, keywords, title,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription = description || data.site.siteMetadata.description;

        const concatenatedMeta = [
          { name: 'description', content: metaDescription },
          { property: 'og:title', content: title },
          { property: 'og:description', content: metaDescription },
          { property: 'og:type', content: 'website' },
        ]
          .concat(keywords.length > 0
            ? { name: 'keywords', content: keywords.join(', ') }
            : [])
          .concat(meta);

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={concatenatedMeta}
          />
        );
      }}
    />
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
};

export default SEO;
