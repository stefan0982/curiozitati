import React       from 'react'
import CardMedia   from '@material-ui/core/CardMedia'

export default function PostDetail({ post }) {

  return (
    <CardMedia
      component={'img'}
      alt={ post.info.imagine.title }
      image={post.info.imagine.fluid.src}
      title={ post.info.imagine.title }
    />
    // <CardMedia
    //   // component={ 'img' }
    //   // image={ post.info.imagine.fluid.src }
    //   alt="Contemplative Reptile"
    //   title="Contemplative Reptile"
    // >
    //   <GatsbyImage
    //     fluid={ post.info.imagine.fluid }
    //     className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img"
    //     alt=""
    //   />
    // </CardMedia>
  )
}
