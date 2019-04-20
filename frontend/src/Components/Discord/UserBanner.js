import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Card, CardMedia, CardContent, Typography} from '@material-ui/core';


const styles = {
  card: {
    display: 'flex',
    maxWidth: 800,
    elevation: 24
  },
  media: {
    height: 100,
    width: 100
  },
};

function UserBanner(props) {
  const {classes, theme, icon, name} = props;
  console.log(typeof(icon))

  return(
    <Grid item>
      <Card className={classes.card}>

        <CardMedia
          className={classes.media}
          image={icon}
          title="User"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>

      </Card>
    </Grid>

  );
} 

UserBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserBanner);