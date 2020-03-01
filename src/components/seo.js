/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitter
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:site`,
          content: `https://twitter.com/${site.siteMetadata.twitter}`
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `mobile-web-app-capable`,
          content: "yes"
        },
        {
          name: `apple-mobile-web-app-capable`,
          content: "yes"
        },
        { name: "application-name", content: site.siteMetadata.url },
        { name: "apple-mobile-web-app-title", content: site.siteMetadata.url },
        { name: "theme-color", content: "#fff" },
        { name: "msapplication-navbutton-color", content: "#fff" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent"
        },
        { name: "msapplication-starturl", content: site.siteMetadata.url }
        // {
        //   name: "viewport",
        //   content: "width=device-width, initial-scale=1, maximum-scale=1.0"
        // }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    >
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;
