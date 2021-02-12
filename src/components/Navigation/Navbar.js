import React                from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar               from '@material-ui/core/AppBar'
import Toolbar              from '@material-ui/core/Toolbar'
import IconButton           from '@material-ui/core/IconButton'
import InputBase            from '@material-ui/core/InputBase'
import MenuItem             from '@material-ui/core/MenuItem'
import Menu                 from '@material-ui/core/Menu'
import SearchIcon           from '@material-ui/icons/Search'
import GetAppRoundedIcon    from '@material-ui/icons/GetAppRounded'
import AccountCircle        from '@material-ui/icons/AccountCircle'
import InstagramIcon        from '@material-ui/icons/Instagram'
import FacebookIcon         from '@material-ui/icons/Facebook'
import MailIcon             from '@material-ui/icons/Mail'
import NotificationsIcon    from '@material-ui/icons/Notifications'
import MoreIcon             from '@material-ui/icons/MoreVert'

import logo     from '../../../static/logo.png'
import { Link } from 'gatsby'

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
        backgroundColor: fade( theme.palette.common.black, 0.11 ),
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

export default function Navbar() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState( null )
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState( null )

  const isMobileMenuOpen = Boolean( mobileMoreAnchorEl )

  const handleProfileMenuOpen = (event) => {
    setAnchorEl( event.currentTarget )
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl( null )
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl( event.currentTarget )
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={ mobileMoreAnchorEl }
      anchorOrigin={ {
        vertical  : 'top',
        horizontal: 'right',
      } }
      id={ mobileMenuId }
      keepMounted
      transformOrigin={ {
        vertical  : 'top',
        horizontal: 'right',
      } }
      open={ isMobileMenuOpen }
      onClose={ handleMobileMenuClose }
    >
      <MenuItem>
        <IconButton
          color="inherit"
        >
          <MailIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={ handleProfileMenuOpen }>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div>
      <AppBar
        position="static"
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
          {/*<div className={classes.search}>*/ }
          {/*  <div className={classes.searchIcon}>*/ }
          {/*    <SearchIcon />*/ }
          {/*  </div>*/ }
          {/*  <InputBase*/ }
          {/*    placeholder="Caută…"*/ }
          {/*    classes={{*/ }
          {/*      root: classes.inputRoot,*/ }
          {/*      input: classes.inputInput,*/ }
          {/*    }}*/ }
          {/*    inputProps={{ 'aria-label': 'search' }}*/ }
          {/*  />*/ }
          {/*</div>*/ }
          <div className={ classes.grow } />
          {/*<div className={ classes.sectionDesktop }>*/ }
          <a
            href="https://play.google.com/store/apps/details?id=com.curiozitati"
            target="_blank"
            rel="noreferrer"
            className="disable-link"
            style={ { color: 'black' } }
          >
            <IconButton color="inherit">
              <GetAppRoundedIcon />
            </IconButton>
          </a>
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
          <a
            href="https://www.facebook.com/curiozitatiapp-100527385314276"
            target="_blank"
            rel="noreferrer"
            className="disable-link"
            style={ { color: 'black' } }
          >
            <IconButton
              color="inherit"
            >
              <FacebookIcon />
            </IconButton>
          </a>
          {/*</div>*/ }
          {/*<div className={ classes.sectionMobile }>*/ }
          {/*  <IconButton*/ }
          {/*    aria-label="show more"*/ }
          {/*    aria-controls={ mobileMenuId }*/ }
          {/*    aria-haspopup="true"*/ }
          {/*    onClick={ handleMobileMenuOpen }*/ }
          {/*    color="inherit"*/ }
          {/*  >*/ }
          {/*    <MoreIcon />*/ }
          {/*  </IconButton>*/ }
          {/*</div>*/ }
        </Toolbar>
      </AppBar>
      {/*{ renderMobileMenu }*/ }
    </div>
  )
}
