module.exports = ({ basePath = `/`, mdx = true }) => (
  {
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
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `sections`,
          path: `${ __dirname }/src/sections`,
        },
      },
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {},
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-theme-ui`,
    ].filter( Boolean ),
  }
)
