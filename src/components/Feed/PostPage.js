import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid           from '@material-ui/core/Grid'
import CardMedia           from '@material-ui/core/CardMedia'
import { Card }            from '@material-ui/core'
import PostPageListDetails from './PostPageListDetails'
import Button              from '@material-ui/core/Button'
import { Link } from 'gatsby'
const useStyles = makeStyles( (theme) => (
  {
    root : {
      flexGrow    : 1,
      marginTop   : 25,
      marginBottom: 25,
    },
    paper: {
      height: 140,
      width : 100,
    },
  }
) )

export default function SpacingGrid({ post }) {
  const classes = useStyles()

  return (
    <Grid
      container
      className={ classes.root }
      justify="center"
    >
      <Grid
        item
        xs={ 12 }
      >
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            lg={ 5 }
            xl={ 5 }
            xs={ 12 }
            sm={ 7 }
            md={ 6 }
          >
            <Card>
              <CardMedia
                component={ 'img' }
                alt="Contemplative Reptile"
                image={ post.info.imagine.fluid.src }
                title="Contemplative Reptile"
              />
            </Card>
          </Grid>
          <Grid
            item lg={ 3 } xl={ 3 } xs={ 12 } sm={ 5 } md={ 4 }
          >
            <PostPageListDetails
              title={ post.info.imagine.title }
              description={ post.info.imagine.description }
              avatar={post.info.categoria[0].avatar}
              categoria={post.info.categoria[0].denumirea}
              data={post.info.data}
              linkId={post.info.linkId}
            />
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained" component={Link} to="/" color="primary" style={{ marginTop: 20 }}>
        Vezi toate curiozitățile
      </Button>
    </Grid>
  )
}

