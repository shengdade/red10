import React, { useState } from 'react';
import LineChart from './LineChart';
import PieChartGroup from './PieChartGroup';
import RoundTable from './RoundTable';
import Header from './Header';
import { Container, Grid } from '@material-ui/core';
import { getChartData } from '../utils';
import ScoreBoard from './ScoreBoard';

function App() {
  const [tableData, setTableData] = useState([
    // createData(8, -4, -4, 4, 4),
    // createData(7, 4, -4, -4, 4),
    // createData(6, 8, -8, 8, -8),
    // createData(5, -16, 16, -16, 16),
    // createData(4, 8, -8, 8, -8),
    // createData(3, -8, -8, 8, 8),
    // createData(2, 4, 4, -4, -4),
    // createData(1, 4, -4, 4, -4)
  ]);
  const [players, setPlayers] = useState({
    player1: 'Player 1',
    player2: 'Player 2',
    player3: 'Player 3',
    player4: 'Player 4'
  });

  const chartData = getChartData(players, tableData);

  return (
    <Container>
      <Header players={players} setPlayers={setPlayers} />
      <Grid container>
        <Grid item xs={12} sm={10}>
          <LineChart source={chartData} />
        </Grid>
        <Grid item xs={12} sm={2} style={{ margin: 'auto' }}>
          <ScoreBoard source={chartData} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={10}>
          <RoundTable
            rows={tableData}
            setTableData={setTableData}
            players={players}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <PieChartGroup source={chartData} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
