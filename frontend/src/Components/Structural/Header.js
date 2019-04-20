import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton className= {classes.menuButotn}
                      color="inherit" 
                      aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="headline" color="inherit">
            Shin Doubutsu
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);
