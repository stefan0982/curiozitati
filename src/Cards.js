import React                       from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Card                        from './Card'

const query = graphql`
{
  curiozitati:allContentfulCuriozitati {
    edges {
      node {
        id
        imagine {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}

`
const Cards = () => {
  const data = useStaticQuery(query)
  return (
    <>
      {data.curiozitati.edges.map(({node}) => (
          <Card image={node.imagine} key={node.id}/>
        ))}
      <Card/>
    </>
  )
}

export default Cards
