import React, { useState } from 'react'
import { makeStyles }      from '@material-ui/core/styles'
import Card                from '@material-ui/core/Card'
import CardHeader          from '@material-ui/core/CardHeader'
import CardContent         from '@material-ui/core/CardContent'
import { Link }            from 'gatsby'
import GatsbyImage         from 'gatsby-image'
import slug                from 'slug'

const useStyles = makeStyles( (theme) => (
  {
    root  : {
      marginTop: 25,
    },
    media : {
      // height    : 0,
      // paddingTop: '100%', // 16:9
      width: '100%',
    },
    avatar: {
      width : '40px',
      height: '40px',
    },
  }
) )

export default function PostCard({
  description,
  img,
  title,
  avatar,
  categoria,
  data,
}) {
  const [stateDescription, setDescription] = useState( description.slice(
    0,
    75,
  ) )
  const [readMore, setReadMore] = useState( '... mai mult' )
  const classes = useStyles()


  return (
    <Card className={ classes.root }>
      <CardHeader
        title={ <Link
          to={ categoria
               !== 'Toate' ? `/${ slug( categoria ) }` : '/' }
          className="disable-link"
          style={{ color: 'black', fontSize: '1.2em' }}
        >{ categoria }</Link> }
        subheader={ data }
        style={ {
          padding   : 8,
          marginLeft: 8,
        } }
        // de cautat cum la click sa ramai tot acolo fara reload
        avatar={ <Link
          to={ categoria
               !== 'Toate' ? `/${ slug( categoria ) }` : '/' }
          className="disable-link"
        >
          <GatsbyImage
            fixed={ avatar.fixed }
            alt={ title }
            // className={ classes.avatar }
          />
        </Link> }
        // action={
        //   <IconButton aria-label="settings">
        //     <ShareIcon />
        //   </IconButton>
        // }
      />
      <GatsbyImage
        className={ classes.media }
        fluid={ img.fluid }
        alt="Paella dish"
      />
      <CardContent>
        <div>
          { stateDescription }
          <span
            color="textPrimary"
            onClick={ () => {
              setDescription( description )
              setReadMore( null )
            } }
            style={ {
              color : 'gray',
              cursor: 'pointer',
            } }
          >{ description.length
             >= 75
             && readMore }</span>
        </div>
      </CardContent>
    </Card>
  )
}