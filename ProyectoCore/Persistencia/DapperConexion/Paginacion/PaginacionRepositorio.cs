using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Dapper;
using System.Linq;

namespace Persistencia.DapperConexion.Paginacion
{
    public class PaginacionRepositorio : IPaginacion
    {
        public PaginacionRepositorio(IFactoryConnection factoryConnection)
        {
            _factoryConnection = factoryConnection;
        }

        public IFactoryConnection _factoryConnection { get; set; }

        public async Task<PaginacionModel> RetornarPaginacion(string storeProcedure, int numeroPagina, int cantidadElementos, IDictionary<string, object> parametroFiltro, string ordenamientoColumna)
        {
            PaginacionModel paginacionModel = new PaginacionModel();
            List<IDictionary<string, object>> listaReporte = null;
            int totalRecords = 0;
            int totalPaginas = 0;
            try
            {
                var connection = _factoryConnection.GetConnection();
                DynamicParameters parametros = new DynamicParameters();

                foreach (var param in parametroFiltro)
                {
                    parametros.Add("@" + param.Key, param.Value);
                }

                parametros.Add("@NumeroPagina", numeroPagina);
                parametros.Add("@CantidadElementos", cantidadElementos);
                parametros.Add("@Ordenamiento", ordenamientoColumna);

                parametros.Add("@TotalRecords", totalRecords, DbType.Int32, ParameterDirection.Output);
                parametros.Add("@TotalPaginas", totalPaginas, DbType.Int32, ParameterDirection.Output);

                var result = await connection.QueryAsync( storeProcedure, parametros, commandType: CommandType.StoredProcedure);
                listaReporte = result.Select(x => (IDictionary<string, object>)x ).ToList();

                paginacionModel.ListaRecords = listaReporte;
                paginacionModel.NumeroPaginas = parametros.Get<int>("@TotalPaginas");
                paginacionModel.TotalRecords = parametros.Get<int>("@TotalRecords");
                
            }
            catch (Exception e)
            {
                throw new Exception("No se pudo ejecutar el procedimiento almacenado", e);
            }
            finally
            {
                _factoryConnection.CloseConnection();
            }
            return paginacionModel;
        }
    }
}