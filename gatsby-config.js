
require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // Website branding and SEO
    siteTitle: `Candid Reflections Photography`,
    siteTitleAlt: `Candid Reflections Photography - Toronto Photographer`,
    siteHeadline: `Candid Reflections Photography - Toronto Photographer`,
    siteUrl: `https://www.candidreflectionsphotography.com`,
    siteDescription: `Toronto-based photographer capturing portraits, events, travel, wildlife, landscapes, and genuine moments through photography and visual storytelling.`,
    siteImage: `/banner.jpg`,
    author: `Candid Reflections Photography`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      options: {
        navigation: [
          { name: `Projects`, slug: `/projects` },
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Candid Reflections Photography`,
        short_name: `Candid Reflections`,
        description: `Toronto-based photography portfolio featuring portraits, events, travel, wildlife, and landscapes.`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
