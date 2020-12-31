using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Persistencia.DapperConexion.Instructor
{
    public interface IInstructor
    {
         Task<IEnumerable<InstructorModel>> ObtenerLista();
         Task<InstructorModel> ObtenerPorId();
         Task<int> Nuevo(InstructorModel instructor);
         Task<int> Actualizar(InstructorModel instructor);
         Task<int> Eliminar(Guid id);
    }
}