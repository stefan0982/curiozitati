import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow              from '@material-ui/core/Grow';
import Paper             from '@material-ui/core/Paper';
import Popper            from '@material-ui/core/Popper';
import MenuItem          from '@material-ui/core/MenuItem';
import MenuList          from '@material-ui/core/MenuList';
import MoreIcon          from '@material-ui/icons/MoreVert'
import InstagramIcon     from '@material-ui/icons/Instagram'
import FacebookIcon      from '@material-ui/icons/Facebook'
import { makeStyles }    from '@material-ui/core/styles';
import IconButton        from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavbarMobileMenu({children}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ marginRight: -14, marginLeft: 2, color: 'black' }}
        >
          <MoreIcon/>
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ zIndex: 1 }}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {children}
                    <a
                      href="https://www.instagram.com/curiozitati.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="disable-link"
                      style={ { color: 'black' } }
                    ><MenuItem onClick={handleClose}> <InstagramIcon /> </MenuItem> </a>
                    <a
                      href="https://www.facebook.com/curiozitatiapp-100527385314276"
                      target="_blank"
                      rel="noreferrer"
                      className="disable-link"
                      style={ { color: 'black' } }
                    ><MenuItem onClick={handleClose}> <FacebookIcon /> </MenuItem></a>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}