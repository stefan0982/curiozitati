require( 'dotenv' ).config( {
  path: `.env.${ process.env.NODE_ENV }`,
} )

let basePath = ''
module.exports = {
  siteMetadata: {
    siteTitle      : `Curiozități`, siteTitleAlt: `Curiozități Știați că Info`,
    siteHeadline   : `Curiozități Știați că Info`,
    siteUrl        : `https://curiozitati.app`,
    siteDescription: `Curiozități noi în fiecare zi, începe să fii mai bun, uimește-ți prietenii, investiția în cunoștințe mereu îți va oferi cel mai mare profit, Ziua în care nu înveți nimic nou este pierdută`,
    siteLanguage   : `ro`, siteImage: `/banner.png`, author: `@stefan`,
    basePath,
  }, plugins  : [
    {
      resolve: `@lekoarts/gatsby-theme-cara`, // See the theme's README for
                                              // all// available options
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`, options: {
        name: `sections`,
        path: `${ __dirname }/src/@lekoarts/gatsby-theme-cara/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`, options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,

      options: {
        name       : `Curiozități Știați că Info Știai că`,
        short_name : `Curiozități`,
        description: `Curiozități noi în fiecare zi, începe să fii mai bun, uimește-ți prietenii, dezvoltă-te multilateral, Ziua în care nu înveți nimic nou este pierdută`,
        start_url  : `/`, background_color: `#141821`, theme_color: `#f6ad55`,
        // display    : `standalone`, icon: `./static/android-chrome-512x512.png`,
        display    : `standalone`, icon: `./static/chrome.png`,
      },
    },

    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-contentful`, options: {
        spaceId    : process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`, options: {
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
        ],
      },
    },
  ].filter( Boolean ),
}
