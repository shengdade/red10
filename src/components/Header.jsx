import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import red from '@material-ui/core/colors/red';
import SettingsDialog from './SettingsDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FAFAFA'
  },
  logo: {
    flex: 1,
    fontSize: '2rem'
  },
  greyColor: {
    color: '#868e96'
  },
  logoName: {
    fontFamily: 'Agustina Regular',
    fontWeight: 'bold',
    color: red['800']
  }
}));

function Header({ players, setPlayers }) {
  const classes = useStyles();
  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);

  return (
    <Fade top duration={1000} distance="20px">
      <AppBar className={classes.root} position="static" elevation={0}>
        <Toolbar>
          <div className={classes.logo}>
            <span className={classes.greyColor}>&lt;&nbsp;&nbsp;</span>
            <span className={classes.logoName}>Red 10</span>
            <span className={classes.greyColor}>&nbsp;&nbsp;/&gt;</span>
          </div>
          <IconButton onClick={() => setSettingsDialogOpen(true)}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SettingsDialog
        open={settingsDialogOpen}
        setOpen={setSettingsDialogOpen}
        players={players}
        setPlayers={setPlayers}
      />
    </Fade>
  );
}

export default Header;
