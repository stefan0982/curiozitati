import React, { useContext } from 'react'
import './styles.css'
import PostCard              from '../components/Feed/PostCard'
import Layout                from '../components/Layout'
import { graphql }           from 'gatsby'
import SEO                   from '../components/SEO'
import { MyContext }         from '../Context'
import Navbar                from '../components/Navigation/Navbar'

const IndexPage = ({ data }) => {
  const value = useContext(MyContext)

  const initialData = data.curiozitati.edges

  // le facem pe toate LowerCase
  let filter = value.data.searchInput.toLowerCase()

  // li este vectorul nostru
  let filteredData = []
  for (let i = 0; i < initialData.length; i++) {
    // txtValue = asta ii titlul la post nostru
    let txtValue = initialData[i].node.imagine.title
    if (txtValue.toLowerCase().indexOf( filter ) > -1) {
      filteredData.push( initialData[i] )
    }
  }

  return (
    <>
      <Navbar/>
          <Layout>
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
              />
            ) ) }
          </Layout>
    </>
  )
}

export const query = graphql`
{
  curiozitati: allContentfulCuriozitati(sort: {fields: imagine___createdAt, order: DESC}) {
    edges {
      node {
        id
        data:createdAt
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
