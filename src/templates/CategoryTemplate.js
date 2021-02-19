import React       from 'react'
import Layout      from '../components/Layout'
import { graphql } from 'gatsby'
import PostCard    from '../components/Feed/PostCard'
import SEO         from '../components/SEO'
import '../pages/styles.css'
import Navbar      from '../components/Navigation/Navbar'

const CategoryTemplate = ({ data }) => {
  const categoria = data.categoria.denumirea
  const avatar = data.categoria.avatar
  const seoImage = data.categoria.image.fixed.src
  return (
    <>
      <Navbar search={false}/>
      <Layout>
        <SEO
          image={ `https://${ seoImage }` }
          title={ categoria }
          description="O zi în care nu înveți nimic nou este o zi pierdută"
        />

        { data.curiozitati.edges.map( ({ node }) => (
          <PostCard
            img={ node.imagine }
            title={ node.imagine.title }
            description={ node.imagine.description }
            avatar={ avatar }
            categoria={ categoria }
            data={ node.data }
            key={ node.id }
          />
        ) ) }
      </Layout>
    </>
  )
}

export const query = graphql`
 query ($category: String!) {
  curiozitati:allContentfulCuriozitati(filter: {categoria: {elemMatch: {denumirea: {eq: $category}}}}) {
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
      }
    }
  }
  categoria:contentfulCategorii(denumirea: {eq: $category}) {
    avatar {
      fixed(width: 40, height: 40) {
        ...GatsbyContentfulFixed_tracedSVG
      }
    }
    image:avatar {
      fixed {
        ...GatsbyContentfulFixed_tracedSVG
      }
    }
    denumirea
  }
}
`

export default CategoryTemplate
