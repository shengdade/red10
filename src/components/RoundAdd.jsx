import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: theme.spacing(7)
  }
}));

function RoundAdd({ rows, setTableData }) {
  const classes = useStyles();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player3, setPlayer3] = useState('');
  const [player4, setPlayer4] = useState('');

  const getLatestRound = () => (rows.length > 0 ? rows[0].round + 1 : 1);

  const onAddClick = () => {
    const round = {
      round: getLatestRound(),
      player1: parseInt(player1) || 0,
      player2: parseInt(player2) || 0,
      player3: parseInt(player3) || 0,
      player4: parseInt(player4) || 0
    };
    setTableData((previous) => {
      return [round, ...previous];
    });
    setPlayer1('');
    setPlayer2('');
    setPlayer3('');
    setPlayer4('');
  };

  return (
    <TableRow>
      <TableCell align="center">{getLatestRound()}</TableCell>
      <TableCell align="center">
        <TextField
          className={classes.textField}
          variant="outlined"
          size="small"
          placeholder="0"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          className={classes.textField}
          variant="outlined"
          size="small"
          placeholder="0"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          className={classes.textField}
          variant="outlined"
          size="small"
          placeholder="0"
          value={player3}
          onChange={(e) => setPlayer3(e.target.value)}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          className={classes.textField}
          variant="outlined"
          size="small"
          placeholder="0"
          value={player4}
          onChange={(e) => setPlayer4(e.target.value)}
        />
      </TableCell>
      <TableCell align="center">
        <IconButton
          onClick={onAddClick}
          disabled={
            (parseInt(player1) || 0) +
              (parseInt(player2) || 0) +
              (parseInt(player3) || 0) +
              (parseInt(player4) || 0) !==
            0
          }
        >
          <AddIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default RoundAdd;
