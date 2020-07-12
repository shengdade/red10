import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));

function SettingsDialog({ open, setOpen, players, setPlayers }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextFieldChange = (player, name) => {
    setPlayers((previous) => ({ ...previous, [player]: name }));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter player names:</DialogContentText>
        <TextField
          className={classes.textField}
          label="Player 1"
          variant="outlined"
          size="small"
          value={players.player1}
          onChange={(e) => handleTextFieldChange('player1', e.target.value)}
        />
        <TextField
          className={classes.textField}
          label="Player 2"
          variant="outlined"
          size="small"
          value={players.player2}
          onChange={(e) => handleTextFieldChange('player2', e.target.value)}
        />
        <TextField
          className={classes.textField}
          label="Player 3"
          variant="outlined"
          size="small"
          value={players.player3}
          onChange={(e) => handleTextFieldChange('player3', e.target.value)}
        />
        <TextField
          className={classes.textField}
          label="Player 4"
          variant="outlined"
          size="small"
          value={players.player4}
          onChange={(e) => handleTextFieldChange('player4', e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SettingsDialog;
