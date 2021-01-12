require( `dotenv` ).config( {
                              path: `.env`,
                            } )

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

let basePath = ''
module.exports = {
    siteMetadata: {
      siteTitle      : `Curiozități`,
      siteTitleAlt   : `Curiozități Știați că Info`,
      siteHeadline   : `Curiozități Știați că Info`,
      siteUrl        : `https://stiati.netlify.app`,
      siteDescription: `Curiozități noi în fiecare zi, începe să fii mai bun, uimește-ți prietenii, investiția în cunoștințe mereu îți va oferi cel mai mare profit, Ziua în care nu înveți nimic nou este pierdută`,
      siteLanguage   : `ro`,
      siteImage      : `/banner.png`,
      author         : `@stefan`,
      basePath,
    },
  plugins     : [
    {
      resolve: `@lekoarts/gatsby-theme-cara`, // See the theme's README for all// available options
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${ __dirname }/src/@lekoarts/gatsby-theme-cara/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `G-4D51DWGXDE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,

      options: {
        name            : `Curiozități Știați că Info Știai că`,
        short_name      : `Curiozități`,
        description     : `Curiozități noi în fiecare zi, începe să fii mai bun, uimește-ți prietenii, investiția în cunoștințe mereu îți va oferi cel mai mare profit, Ziua în care nu înveți nimic nou este pierdută`,
        start_url       : `/`,
        background_color: `#141821`,
        theme_color     : `#f6ad55`,
        display         : `standalone`,
        icon: `./static/android-chrome-512x512.png`,
        icons           : [
          {
            src  : `./static/android-chrome-192x192.png`,
            sizes: `192x192`,
            type : `image/png`,
          }, {
            src  : `./static/android-chrome-512x512.png`,
            sizes: `512x512`,
            type : `image/png`,
          },
        ],
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sjvzi6dlarr9`,
        accessToken: `fNNZsc2PHCgGHyNGDF51_xH-JtJAKrR8jH6CoeGh7O0`,
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode  : `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer  : false,
      },
    },
  ].filter( Boolean ),
}
