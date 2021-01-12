require( `dotenv` ).config( {
                              path: `.env`,
                            } )

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options:
    // https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `Curiozități Știați că Info`,
    siteImage: `./static/banner.jpg`,
  },
  plugins     : [
    {
      resolve: `@lekoarts/gatsby-theme-cara`, // See the theme's README for all// available options
      options: {},
    },
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
