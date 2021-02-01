import React, { useEffect, useState } from "react";
import { paginacionCurso } from "../../actions/cursoAction";

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

    paginacionCurso(objetoPaginadorRequest).then((response) => {
      console.log(response);
    });
  }, [paginadorRequest]);

  return <div></div>;
};

export default PaginadorCurso;
