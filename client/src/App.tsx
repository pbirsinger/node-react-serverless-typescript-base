import * as React from 'react';

import { AppBar, IconButton, Toolbar, Typography, WithStyles } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import { Flex } from './utils';

const styles = createStyles({
  grow: {
    flexGrow: 1,
  },
  header: {
    flexGrow: 1,
    margin: '30px 10px'
  },
  label: {
    fontSize: 18,
    margin: 6,
    textTransform: 'none'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const App = ({ classes }: WithStyles<typeof styles>) => {
  return (
    <Flex column={true} align="center" justify="flex-start" className="App">
      <Header classes={classes} />
      <Flex column={true} align="center" justify="flex-start" style={{ paddingTop: 80 }}>
        <Typography key="header" variant="h4" color="inherit" className={classes.header}>
          Coming soon..
        </Typography>
      </Flex>
    </Flex>
  );
};

const Header = ({ classes }: WithStyles<typeof styles>) => (
  <div style={{ flexGrow: 1 }}>
    <AppBar>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="inherit">
          Your app
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(App);
