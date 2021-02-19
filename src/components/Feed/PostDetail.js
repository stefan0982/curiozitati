import React              from 'react';
import CardMedia          from '@material-ui/core/CardMedia';

export default function PostDetail({post}) {

  return (
        <CardMedia
          component={'img'}
          alt="Contemplative Reptile"
          image={post.info.imagine.fluid.src}
          title="Contemplative Reptile"
        />
  );
}
