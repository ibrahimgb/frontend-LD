import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DataFormat } from "./Demo";




   function calcPower(data: DataFormat):number{
    const power = data.hp + data.attack + data.defense + data.special_attack + data.special_defense + data.speed
return power
   }


export default function DataTable(payload  ) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Hp</TableCell>

            <TableCell align="right">attack</TableCell>
            <TableCell align="right">defense</TableCell>
            <TableCell align="right">special_attack</TableCell>
            <TableCell align="right">special_defense</TableCell>
            <TableCell align="right">speed</TableCell>
            <TableCell align="right">Power</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payload.payload.map((row : DataFormat) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >


              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.hp}</TableCell>
              <TableCell align="right">{row.attack}</TableCell>
              <TableCell align="right">{row.defense}</TableCell>

              <TableCell align="right">{row.special_attack}</TableCell>
              <TableCell align="right">{row.special_defense}</TableCell>
              <TableCell align="right">{row.speed}</TableCell>
              <TableCell align="right">{row.power}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
