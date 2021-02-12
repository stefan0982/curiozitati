import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList       from '@material-ui/core/GridList'
import IconButton     from '@material-ui/core/IconButton'

import logo                              from '../../../static/logo.png'
import { Typography }                    from '@material-ui/core'
import { graphql, Link, useStaticQuery } from 'gatsby'
import GatsbyImage                       from 'gatsby-image'
import slug                              from 'slug'

const query = graphql`
  {
  categorii:allContentfulCategorii(sort: {order: DESC, fields: curiozitati___children}) {
    edges {
      node {
        denumirea
        id
        avatar {
          fixed {
            ...GatsbyContentfulFixed_tracedSVG
          }
          title
        }
      }
    }
  }
}
`

const useStyles = makeStyles( (theme) => (
  {
    root    : {
      display       : 'flex',
      flexWrap      : 'wrap',
      justifyContent: 'space-around',
      overflow      : 'hidden',
    },
    gridList: {
      flexWrap : 'nowrap',
      transform: 'translateZ(0)',
    },
    avatar  : {
      width : '7.5vh',
      height: '7.5vh',
    },
  }
) )

export default function HorizontalList() {
  const classes = useStyles()
  const { categorii } = useStaticQuery( query )

  // categoria toate la care pagina trebuie sa fie doar /
  const categoriaToate = categorii.edges.filter( data => data.node.denumirea
                                                         === 'Toate' )[0].node

  return (
    <div className={ classes.root }>
      <GridList className={ classes.gridList }>
        <Link
          to="/"
          style={ { height: '14vh' } }
          className="disable-link"
          key={ categoriaToate.id }
        >
          <div style={ { flexDirection: 'column' } }>
            <IconButton>
              { categoriaToate.avatar ? <GatsbyImage
                fixed={ categoriaToate.avatar.fixed }
                alt={ categoriaToate.avatar.title }
                style={ {
                  width : '7.5vh',
                  height: '7.5vh',
                } }
              /> : <img
                src={ logo }
                alt="logo"
                className={ classes.avatar }
              /> }
            </IconButton>
            <Typography
              variant={ 'body2' }
              color="textPrimary"
              style={ { marginTop: -10 } }
              align="center"
            >{ categoriaToate.denumirea }</Typography>
          </div>
        </Link>
        { categorii.edges.filter(data => data.node.denumirea !== 'Toate').map( ({ node }) => (
          <Link
            to={`/${slug(node.denumirea)}`}
            style={ { height: '14vh' } }
            className="disable-link"
            key={ node.id }
          >
            <div style={ { flexDirection: 'column' } }>
              <IconButton>
                { node.avatar ? <GatsbyImage
                  fixed={ node.avatar.fixed }
                  alt={ node.avatar.title }
                  style={ {
                    width : '7.5vh',
                    height: '7.5vh',
                  } }
                /> : <img
                  src={ logo }
                  alt="logo"
                  className={ classes.avatar }
                /> }
              </IconButton>
              <Typography
                variant={ 'body2' }
                color="textPrimary"
                style={ { marginTop: -10 } }
                align="center"
              >{ node.denumirea }</Typography>
            </div>
          </Link>
        ) ) }
      </GridList>
    </div>
  )
}