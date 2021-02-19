import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import '../../pages/styles.css'
import GatsbyImage        from 'gatsby-image'
import slug               from 'slug'
import { formatRelative } from 'date-fns'
import { ro }             from 'date-fns/locale'
import { Link }           from 'gatsby'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));

export default function PostPageListDetails({title, description, avatar, categoria, data}) {
  const formatRelativeLocale = {
    lastWeek : 'eeee \'la\' kk:mm',
    yesterday: '\'ieri la\' kk:mm',
    today    : '\'astăzi la\' kk:mm',
    tomorrow : '\'maine la\' kk:mm',
    nextWeek : '\'urmatoarea \'eeee \'la\' kk:mm',
    other    : 'PP',
  }

  const locale = {
    ...ro,
    formatRelative: token => formatRelativeLocale[token],
  }
  const classes = useStyles();

  console.log(avatar)

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText secondary={title} />
      </ListItem>
      {description && <>
        <Divider component="li" />
        <li>
          <Typography
            className={classes.dividerFullWidth}
            color="textPrimary"
            display="block"
            variant="body2"
          >
            Detalii
          </Typography>
        </li>
        <ListItem>
          <ListItemText secondary={description}/>
        </ListItem>
      </>}
      <Divider component="li" />
      <Link to={`/${slug(categoria)}`} className="disable-link" style={{ color: 'black' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            { avatar ? <GatsbyImage
              className="MuiAvatar-img"
              alt={ categoria }
              fixed={ avatar.fixed }
            /> : 'C' }
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={categoria} secondary={formatRelative(
          new Date( data ), Date.now(), { locale } )} />
      </ListItem>
      </Link>
    </List>
  );
}