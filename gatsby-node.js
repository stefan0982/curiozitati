const path = require( 'path' )
const slug = require( 'slug' )

exports.createPages = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions
  const { data } = await graphql( `
    {
      categories:allContentfulCategorii(filter: {denumirea: {ne: "Toate"}}) {
        edges {
          node {
            denumirea
          }
        }
      }
      curiozitati:allContentfulCuriozitati {
        edges {
          node {
            id  
            data:createdAt(formatString: "DDMMYYHHmmss", locale: "ro")
          }
        }
  }
    }
   ` )
  data.categories.edges.forEach( edge => {
    const categorySlug = slug( edge.node.denumirea )
    createPage( {
      path     : `/${ categorySlug }`,
      component: path.resolve( `./src/templates/CategoryTemplate.js` ),
      context  : {
        category: edge.node.denumirea,
      },
    } )
  } )
  data.curiozitati.edges.forEach( edge => {
    const curiozitateSlug = slug( edge.node.data )
    createPage( {
      path     : `/${ curiozitateSlug }`,
      component: path.resolve( `./src/templates/PostTemplate.js` ),
      context  : {
        id: edge.node.id,
      },
    } )
  } )
}



