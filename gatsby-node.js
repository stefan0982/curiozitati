const standardBasePath = `/`

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  const basePath = themeOptions.basePath || standardBasePath

  createPage({
    path: basePath,
    // component: require.resolve(`./src/templates/cara.tsx`),
    component: require.resolve(`./src/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx`),
  })
}
