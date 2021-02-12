import React       from 'react'
import Layout      from '../components/Layout'
import { graphql } from 'gatsby'
import PostCard    from '../components/Feed/PostCard'

const CategoryTemplate = ({data}) => {
  const categoria = data.categoria.denumirea
  const avatar = data.categoria.avatar
  return (
    <Layout>
      { data.curiozitati.edges.map ( ({ node }) => (
        <PostCard
          img={ node.imagine }
          title={ node.imagine.title }
          description={ node.imagine.description }
          avatar={avatar}
          categoria={categoria}
          data={node.createdAt}
          key={node.id}
        />
      ) ) }
    </Layout>
  )
}

export const query = graphql`
 query ($category: String!) {
  curiozitati:allContentfulCuriozitati(filter: {categoria: {elemMatch: {denumirea: {eq: $category}}}}) {
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
      }
    }
  }
  categoria:contentfulCategorii(denumirea: {eq: $category}) {
    avatar {
      fixed(width: 40, height: 40) {
        ...GatsbyContentfulFixed_tracedSVG
      }
    }
    denumirea
  }
}
`

export default CategoryTemplate
