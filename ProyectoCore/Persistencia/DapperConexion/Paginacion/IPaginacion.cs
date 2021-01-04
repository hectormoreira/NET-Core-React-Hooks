using System.Collections.Generic;
using System.Threading.Tasks;

namespace Persistencia.DapperConexion.Paginacion
{
    public interface IPaginacion
    {
        Task<PaginacionModel> RetornarPaginacion(string storeProcedure, int numeroPagina, int cantidadElementos, IDictionary<string, object> parametroFiltro, string ordenamientoColumna);
    }
}