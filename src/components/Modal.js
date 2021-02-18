import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal          from '@material-ui/core/Modal';
import Backdrop       from '@material-ui/core/Backdrop';
import Fade           from '@material-ui/core/Fade';
import PostModalPage  from './Feed/PostModalPage'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({onClose, children}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (

      <Modal
        className={classes.modal}
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {children}
        </Fade>
      </Modal>
  );
}
