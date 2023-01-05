"use client"
import jsonData from './mocker_citas.json'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


interface Props {
  citas: typeof jsonData
}

export default function Citas({ citas }: Props) {

  citas = jsonData;
  console.log(citas)
  return (
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Hora</StyledTableCell>
            <StyledTableCell align="right">Paciente</StyledTableCell>
            <StyledTableCell align="right">Doctor&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Estado de la cita&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Situacion&nbsp;</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
    {citas.map((c) => (
         <StyledTableRow key={c.id_paciente}>
          
              <StyledTableCell align="right">{c.hora_inicio} a {c.hora_fin}</StyledTableCell>
              <StyledTableCell align="right">{c.nombre_paciente}</StyledTableCell>
              <StyledTableCell align="right">{c.nombre_dentista}</StyledTableCell>
              <StyledTableCell align="right">{c.nombre_estado}</StyledTableCell>
              <StyledTableCell align="right">{c.descripcion_situacion}</StyledTableCell>
          </StyledTableRow>
    ))}
        </TableBody>
      </Table>
    </TableContainer>
  );




















    
  
  
}


