import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Behavior from './Behaivour.jsx';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat) {
  return { name, calories, fat};
}

const rows = [
  createData('03/03/2020', 5, 1000 ),
  createData('10/03/2020', 4, 900),
  createData('17/03/2020', 5, 1100),
  createData('Total Contribution', '', 3000),
  createData('Bank Charges', '', 15),
  createData('Total Amount Available','', 2985),

];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div>
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date of Contribution</TableCell>
            <TableCell align="right">Members Contributed</TableCell>
            <TableCell align="right">Amount Contributed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div>
    <Behavior />
    </div>
    </div>
  );
}
