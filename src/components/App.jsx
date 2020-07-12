import React, { useState } from 'react';
import LineChart from './LineChart';
import RoundTable from './RoundTable';
import Header from './Header';
import { Container } from '@material-ui/core';

function createData(round, player1, player2, player3, player4) {
  return { round, player1, player2, player3, player4 };
}

function aggregate(series) {
  const result = [];
  let sum = 0;
  for (const s of series) {
    sum += s;
    result.push(sum);
  }
  return result;
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

  function getChartData(tableData) {
    const rows = [...tableData];
    rows.reverse();
    const round = rows.map((row) => row.round);
    const player1 = aggregate(rows.map((row) => row.player1));
    const player2 = aggregate(rows.map((row) => row.player2));
    const player3 = aggregate(rows.map((row) => row.player3));
    const player4 = aggregate(rows.map((row) => row.player4));

    return [
      ['round', 0, ...round],
      [players.player1, 0, ...player1],
      [players.player2, 0, ...player2],
      [players.player3, 0, ...player3],
      [players.player4, 0, ...player4]
    ];
  }

  const chartData = getChartData(tableData);

  return (
    <Container>
      <Header players={players} setPlayers={setPlayers} />
      <LineChart source={chartData} />
      <RoundTable
        rows={tableData}
        setTableData={setTableData}
        players={players}
      />
    </Container>
  );
}

export default App;
