using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Persistencia.DapperConexion.Instructor
{
    public interface IInstructor
    {
         Task<IEnumerable<InstructorModel>> ObtenerLista();
         Task<InstructorModel> ObtenerPorId(Guid id);
         Task<int> Nuevo(string nombre, string apellidos, string titulo);
         Task<int> Actualizar(Guid instructorId, string nombre, string apellidos, string titulo);
         Task<int> Eliminar(Guid id);
    }
}