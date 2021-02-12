require( 'dotenv' ).config( {
  path: `.env.${ process.env.NODE_ENV }`,
} )

module.exports = {
  siteMetadata: {
    title: "curiozitati",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name       : `Cele mai interesante curiozități`,
        short_name : `Curiozități`,
        description: `Curiozități noi în fiecare zi, începe să fii mai bun, uimește-ți prietenii, dezvoltă-te multilateral, Ziua în care nu înveți nimic nou este pierdută`,
        start_url  : `/`, background_color: `#141821`, theme_color: `#f6ad55`,
        display    : `standalone`,
        icon: "static/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`, options: {
        trackingIds: [
          process.env.GA_TRACKING_ID,
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: "./static/",
      }
    },
    `gatsby-theme-material-ui`,
    `gatsby-plugin-layout`
  ],
};
