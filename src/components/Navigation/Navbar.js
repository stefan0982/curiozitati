import React from 'react'
import { makeStyles }           from '@material-ui/core/styles'
import AppBar                         from '@material-ui/core/AppBar'
import Toolbar            from '@material-ui/core/Toolbar'
import IconButton         from '@material-ui/core/IconButton'
import logo               from '../../../static/logo.png'
import { Link }           from 'gatsby'
import InstagramIcon      from '@material-ui/icons/Instagram'
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded'
import NavbarMobileMenu   from './NavbarMobileMenu'

// search import
import Search             from '../search'
const searchIndices = [{ name: `Curiozitati`, title: `Curiozitati` }]

const useStyles = makeStyles( (theme) => (
  {
    grow          : {
      flexGrow: 1,
    },
    menuButton    : {
      marginRight: theme.spacing( 2 ),
    },
    title         : {
      display                       : 'none',
      [theme.breakpoints.up( 'sm' )]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display                       : 'none',
      [theme.breakpoints.up( 'md' )]: {
        display: 'flex',
      },
    },
    sectionMobile : {
      display                       : 'flex',
      [theme.breakpoints.up( 'md' )]: {
        display: 'none',
      },
    },
  }
) )


export default function Navbar({ search = true }) {

    const installApp = (
      <a
        href="https://play.google.com/store/apps/details?id=com.curiozitati"
        target="_blank"
        rel="noreferrer"
        className="disable-link"
        style={ { color: 'black' } }
      >
        <IconButton
          color="inherit"
        >
          <AndroidRoundedIcon />
        </IconButton>
      </a>
    )

  const classes = useStyles()

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        className="header"

      >
        <Toolbar>
          <Link
            to="/"
            className="disable-link"
          >
            <IconButton
              edge="start"
              className={ classes.menuButton }
              color="primary"
            >
              <img
                src={ logo }
                alt="logo"
                style={ {
                  width : '1.4em',
                  height: '1.4em',
                } }
              />
            </IconButton>
          </Link>
          {/*search bar */}
          { search && <Search indices={searchIndices}/> }
          <div className={ classes.grow } />
          { search && <div className={ classes.sectionDesktop }>
            { installApp }
            <a
              href="https://www.instagram.com/curiozitati.app/"
              target="_blank"
              rel="noreferrer"
              className="disable-link"
              style={ { color: 'black' } }
            >
              <IconButton
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
            </a>
            {/*<a*/}
            {/*  href="https://www.facebook.com/curiozitatiapp-100527385314276"*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer"*/}
            {/*  className="disable-link"*/}
            {/*  style={ { color: 'black' } }*/}
            {/*>*/}
            {/*  <IconButton*/}
            {/*    color="inherit"*/}
            {/*  >*/}
            {/*    <FacebookIcon />*/}
            {/*  </IconButton>*/}
            {/*</a>*/}
          </div> }
          { !search && <>
            { installApp }
            <a
              href="https://www.instagram.com/curiozitati.app/"
              target="_blank"
              rel="noreferrer"
              className="disable-link"
              style={ { color: 'black' } }
            >
              <IconButton
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
            </a>
            {/*<a*/}
            {/*  href="https://www.facebook.com/curiozitatiapp-100527385314276"*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer"*/}
            {/*  className="disable-link"*/}
            {/*  style={ { color: 'black' } }*/}
            {/*>*/}
            {/*  <IconButton*/}
            {/*    color="inherit"*/}
            {/*  >*/}
            {/*    <FacebookIcon />*/}
            {/*  </IconButton>*/}
            {/*</a>*/}
          </> }
          { search && <div className={ classes.sectionMobile }>
            <NavbarMobileMenu>
              { installApp }
            </NavbarMobileMenu>
          </div> }
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </>
  )
}
