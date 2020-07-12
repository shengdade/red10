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
    ['Player 1', 0, ...player1],
    ['Player 2', 0, ...player2],
    ['Player 3', 0, ...player3],
    ['Player 4', 0, ...player4]
  ];
}

const rows = [
  createData(8, -4, -4, 4, 4),
  createData(7, 4, -4, -4, 4),
  createData(6, 8, -8, 8, -8),
  createData(5, -16, 16, -16, 16),
  createData(4, 8, -8, 8, -8),
  createData(3, -8, -8, 8, 8),
  createData(2, 4, 4, -4, -4),
  createData(1, 4, -4, 4, -4)
];

function App() {
  const [tableData, setTableData] = useState(rows);
  const chartData = getChartData(tableData);

  return (
    <>
      <Header />
      <Container>
        <LineChart source={chartData} />
        <RoundTable rows={tableData} setTableData={setTableData} />
      </Container>
    </>
  );
}

export default App;
