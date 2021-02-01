import React, { useEffect, useState } from "react";
import { paginacionCurso } from "../../actions/cursoAction";
import {TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';

const PaginadorCurso = () => {
  const [paginadorRequest, setPaginadorRequest] = useState({
    titulo: "",
    numeroPagina: 0,
    cantidadElementos: 5,
  });

  const [paginadorResponse, setPaginadorResponse] = useState({
    listaRecords: [],
    totalRecords: 0,
    numeroPaginas: 0,
  });

  useEffect(() => {
    const objetoPaginadorRequest = {
      titulo: paginadorRequest.titulo,
      numeroPagina: paginadorRequest.numeroPagina + 1,
      cantidadElementos: paginadorRequest.cantidadElementos,
    };

    const obtenerListCurso = async() => {
      const response = await paginacionCurso(objetoPaginadorRequest);
      setPaginadorResponse(response.data);
    }
    obtenerListCurso();
  }, [paginadorRequest]);

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Cursos</TableCell>
              <TableCell align="left">Descripción</TableCell>
              <TableCell align="left">Fecha Publicación</TableCell>
              <TableCell align="left">Precio Original</TableCell>
              <TableCell align="left">Precio Promocion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginadorResponse.listaRecords.map((curso) => (
              <TableRow key={curso.titulo}>
                <TableCell align="left">{curso.Titulo}</TableCell>
                <TableCell align="left">{curso.Descripcion}</TableCell>
                <TableCell align="left">{curso.FechaPublicacion}</TableCell>
                <TableCell align="left">{curso.PrecioActual}</TableCell>
                <TableCell align="left">{curso.Promocion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default PaginadorCurso;
