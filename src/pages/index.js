import React       from 'react'
import './styles.css'
import PostCard    from '../components/Feed/PostCard'
import Layout      from '../components/Layout'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {

  return (
    <Layout>
      { data.curiozitati.edges.map ( ({ node }) => (
        <PostCard
          img={ node.imagine }
          title={ node.imagine.title }
          description={ node.imagine.description }
          avatar={node.categoria[0].avatar}
          categoria={node.categoria[0].denumirea}
          data={node.createdAt}
          key={node.id}
        />
      ) ) }
    </Layout>
  )
}

export const query = graphql`
{
  curiozitati: allContentfulCuriozitati(sort: {fields: imagine___createdAt, order: DESC}) {
    edges {
      node {
        id
        createdAt(fromNow: true, locale: "ro")
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
