import React, { useEffect, useState } from "react";
import { paginacionCurso } from "../../actions/cursoAction";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Hidden,
} from "@material-ui/core";

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

    const obtenerListCurso = async () => {
      const response = await paginacionCurso(objetoPaginadorRequest);
      setPaginadorResponse(response.data);
    };
    obtenerListCurso();
  }, [paginadorRequest]);

  const cambiarPagina = (event, nuevaPagina) => {
    setPaginadorRequest((anterior) => ({
      ...anterior,
      numeroPagina: parseInt(nuevaPagina),
    }));
  };

  const cambiarCantidadRecords = (event) => {
    setPaginadorRequest((anterior) => ({
      ...anterior,
      cantidadElementos: parseInt(event.target.value),
      numeroPagina: 0,
    }));
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Cursos</TableCell>
              <Hidden mdDown>
                <TableCell align="left">Descripción</TableCell>
                <TableCell align="left">Fecha Publicación</TableCell>
                <TableCell align="left">Precio Original</TableCell>
                <TableCell align="left">Precio Promocion</TableCell>
              </Hidden>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginadorResponse.listaRecords.map((curso) => (
              <TableRow key={curso.titulo}>
                <TableCell align="left">{curso.Titulo}</TableCell>
                <Hidden mdDown>
                  <TableCell align="left">{curso.Descripcion}</TableCell>
                  <TableCell align="left">
                    {new Date(curso.FechaPublicacion).toLocaleString()}
                  </TableCell>
                  <TableCell align="left">{curso.PrecioActual}</TableCell>
                  <TableCell align="left">{curso.Promocion}</TableCell>
                </Hidden>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        count={paginadorResponse.totalRecords}
        rowsPerPage={paginadorRequest.cantidadElementos}
        page={paginadorRequest.numeroPagina}
        onChangePage={cambiarPagina}
        onChangeRowsPerPage={cambiarCantidadRecords}
        labelRowsPerPage="Cursos por página"
      />
    </React.Fragment>
  );
};

export default PaginadorCurso;
