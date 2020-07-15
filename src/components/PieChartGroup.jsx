import React from 'react';
import PieChart from './PieChart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

function PieChartGroup({ source }) {
  const classes = useStyles();

  const data = source.slice(1).map((player) => ({
    name: player[0],
    value: player[player.length - 1]
  }));

  const win = data.filter((d) => d.value > 0);
  const lose = data.filter((d) => d.value < 0);
  win.sort((a, b) => b.value - a.value);
  lose.sort((a, b) => b.value - a.value);

  const greens = ['#4caf50', '#8bc34a', '#cddc39'];
  const reds = ['#ff6d00', '#ff9100', '#ffab40'];

  return (
    <div className={classes.root}>
      <PieChart name="Won" data={win} color={greens.slice(0, win.length)} />
      <PieChart name="Lost" data={lose} color={reds.slice(0, lose.length)} />
    </div>
  );
}

export default PieChartGroup;
