function aggregate(series) {
  const result = [];
  let sum = 0;
  for (const s of series) {
    sum += s;
    result.push(sum);
  }
  return result;
}

export function getChartData(players, tableData) {
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
