import React, { useContext } from 'react'
import './styles.css'
import PostCard          from '../components/Feed/PostCard'
import MainGridContainer from '../components/MainGridContainer'
import { graphql }       from 'gatsby'
import SEO                   from '../components/SEO'
import { MyContext }         from '../Context'
import Navbar                from '../components/Navigation/Navbar'

const IndexPage = React.memo( ({ data }) => {
  const value = useContext( MyContext )

  const initialData = data.curiozitati.edges

  // le facem pe toate LowerCase
  let filter = value.data.searchInput.toLowerCase()

  // li este vectorul nostru
  let filteredData = []
  for (let i = 0; i < initialData.length; i++) {
    // txtValue = asta ii titlul la post nostru
    let txtValue = initialData[i].node.imagine.title
      .replace( /ă/g, 'a' )
      .replace( /ț/g, 't' )
      .replace( /ș/g, 's' )
      .replace( /â/g, 'a' )
      .replace( /î/g, 'i' )
    if (txtValue.toLowerCase().indexOf( filter ) > -1) {
      filteredData.push( initialData[i] )
    }
  }

  return (
    <>
      <Navbar />
      <MainGridContainer>
        <SEO
          title="Curiozități"
          description="O zi în care nu înveți nimic nou este o zi pierdută, deaceea află cele mai interesante curiozități aici"
        />
        { filteredData.map( ({ node }) => (
          <PostCard
            img={ node.imagine }
            title={ node.imagine.title }
            description={ node.imagine.description }
            avatar={ node.categoria[0].avatar }
            categoria={ node.categoria[0].denumirea }
            data={ node.data }
            key={ node.id }
            linkId={node.linkId}
          />
        ) ) }
      </MainGridContainer>
    </>
  )
} )

export const query = graphql`
{
  curiozitati: allContentfulCuriozitati(sort: {fields: imagine___createdAt, order: DESC}) {
    edges {
      node {
        id
        data:createdAt
        linkId:createdAt(formatString: "DDMMYYHHmmss", locale: "ro")
        imagine {
          fluid {
            ...GatsbyContentfulFluid
          }
          title
          description
        }
        categoria {
          avatar {
            fixed(width: 40, height: 40) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          denumirea
        }
      }
    }
  }
}
`

export default IndexPage
