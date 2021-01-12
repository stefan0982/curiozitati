import React from 'react'
import Img from "gatsby-image"

const Card = ({image}) => {
  // 10 carduri - 5 screen
  // 17 carduri - 5 screen pe calc
  return (
    <div>
      {image &&  <Img fluid={image.fluid} /> }
    </div>
  )
}

export default Card
