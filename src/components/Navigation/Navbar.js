import React from 'react'
import { fade, makeStyles }           from '@material-ui/core/styles'
import AppBar                         from '@material-ui/core/AppBar'
import Toolbar            from '@material-ui/core/Toolbar'
import IconButton         from '@material-ui/core/IconButton'
import InputBase          from '@material-ui/core/InputBase'
import SearchIcon         from '@material-ui/icons/Search'
import logo               from '../../../static/logo.png'
import { Link }           from 'gatsby'
import InstagramIcon      from '@material-ui/icons/Instagram'
import FacebookIcon       from '@material-ui/icons/Facebook'
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded'
import { MyContext }      from '../../Context'
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
    search        : {
      position                      : 'relative',
      borderRadius                  : theme.shape.borderRadius,
      backgroundColor               : fade( theme.palette.common.black, 0.07 ),
      '&:hover'                     : {
        backgroundColor: fade( theme.palette.common.black, 0.12 ),
      },
      marginLeft                    : 0,
      width                         : '100%',
      [theme.breakpoints.up( 'sm' )]: {
        marginLeft: theme.spacing( 6 ),
        width     : 'auto',
      },
    },
    searchIcon    : {
      padding       : theme.spacing( 0, 2 ),
      height        : '100%',
      position      : 'absolute',
      pointerEvents : 'none',
      display       : 'flex',
      alignItems    : 'center',
      justifyContent: 'center',
    },
    inputRoot     : {
      color: 'inherit',
    },
    inputInput    : {
      // backgroundColor: '#eee',
      padding: theme.spacing( 1, 1, 1, 0 ), // vertical
      // padding
      // + font
      // size
      // from
      // searchIcon
      paddingLeft                   : `calc(1em + ${ theme.spacing( 4 ) }px)`,
      transition                    : theme.transitions.create( 'width' ),
      width                         : '100%',
      [theme.breakpoints.up( 'sm' )]: {
        width    : '24ch',
        '&:focus': {
          width: '30ch',
        },
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
          { search && <MyContext.Consumer>
            { ({ set }) => {
              return (
                <div className={ classes.search }>
                  <div className={ classes.searchIcon }>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Caută…"
                    classes={ {
                      root : classes.inputRoot,
                      input: classes.inputInput,
                    } }
                    inputProps={ { 'aria-label': 'search' } }
                    onChange={ e => set( {
                      searchInput: e.target.value,
                    } ) }
                  />
                </div>
              )
            } }
          </MyContext.Consumer> }
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
            <Search indices={searchIndices}/>
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
            <Search indices={searchIndices}/>
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
