const path = require ( 'path' )
const slug = require ( 'slug' )

exports.createPages = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions
  const { data } = await graphql ( `
    {
  categories:allContentfulCategorii(filter: {denumirea: {ne: "Toate"}}) {
    edges {
      node {
        denumirea
      }
    }
  }
}

   ` )
  data.categories.edges.forEach ( edge => {
    const categorySlug = slug ( edge.node.denumirea )
    createPage ( {
      path: `/${ categorySlug }`,
      component: path.resolve ( `./src/templates/CategoryTemplate.js` ),
      context: {
        category: edge.node.denumirea,
      },
    } )
  } )
}



