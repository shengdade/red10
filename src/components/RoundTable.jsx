import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import RoundAdd from './RoundAdd';

function RoundTable({ rows, setTableData }) {
  const onDeleteClick = (round) => {
    setTableData((previous) => previous.filter((row) => row.round !== round));
  };

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell align="center">Round</TableCell>
          <TableCell align="center">Player1</TableCell>
          <TableCell align="center">Player2</TableCell>
          <TableCell align="center">Player3</TableCell>
          <TableCell align="center">Player4</TableCell>
          <TableCell align="center">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <RoundAdd rows={rows} setTableData={setTableData} />
        {rows.map((row) => (
          <TableRow key={row.round}>
            <TableCell align="center">{row.round}</TableCell>
            <TableCell align="center">{row.player1}</TableCell>
            <TableCell align="center">{row.player2}</TableCell>
            <TableCell align="center">{row.player3}</TableCell>
            <TableCell align="center">{row.player4}</TableCell>
            <TableCell align="center">
              <IconButton onClick={() => onDeleteClick(row.round)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default RoundTable;
