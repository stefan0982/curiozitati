require( 'dotenv' ).config( {
  path: `.env.${ process.env.NODE_ENV }`,
} )

module.exports = {
  siteMetadata: {
    siteUrl: `https://curiozitati.app/`,
    url: 'https://curiozitati.app',
    titleTemplate: "%s · Cele mai interesante curiozități",
    siteTitleAlt: `Cele mai interesante curiozități știați că info știai că`,
    siteHeadline   : `Cele mai interesante curiozități știați că info știai că`,
    title: "Curiozitati",
    description: `Curiozități noi în fiecare zi, începe să fii mai bun, uimește-ți prietenii, investiția în cunoștințe mereu îți va oferi cel mai mare profit, Ziua în care nu înveți nimic nou este pierdută`,
    siteLanguage   : `ro`,
    author: `stefan`,
    image: `/banner.png`,
    twitterUsername: '@curiozitati'
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
        name       : `Investiția în cunoștințe mereu îți va oferi cel mai mare profit`,
        short_name : `Curiozități`,
        description: `Curiozități noi în fiecare zi, începe să fii mai bun, uimește-ți prietenii, dezvoltă-te multilateral, Ziua în care nu înveți nimic nou este pierdută`,
        start_url  : `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display    : `standalone`,
        icon: "static/square_logo.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
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
