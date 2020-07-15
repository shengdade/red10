import React, { useState } from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';
import RoundTable from './RoundTable';
import Header from './Header';
import { Container } from '@material-ui/core';
import { getChartData } from '../utils';

function createData(round, player1, player2, player3, player4) {
  return { round, player1, player2, player3, player4 };
}

function App() {
  const [tableData, setTableData] = useState([
    createData(8, -4, -4, 4, 4),
    createData(7, 4, -4, -4, 4),
    createData(6, 8, -8, 8, -8),
    createData(5, -16, 16, -16, 16),
    createData(4, 8, -8, 8, -8),
    createData(3, -8, -8, 8, 8),
    createData(2, 4, 4, -4, -4),
    createData(1, 4, -4, 4, -4)
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
      <LineChart source={chartData} />
      <PieChart source={chartData} />
      <RoundTable
        rows={tableData}
        setTableData={setTableData}
        players={players}
      />
    </Container>
  );
}

export default App;
