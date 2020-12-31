using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Persistencia.DapperConexion.Instructor
{
    public interface IInstructor
    {
         Task<IList<InstructorModel>> ObtenerLista();
         Task<InstructorModel> ObtenerPorid();
         Task<int> Nuevo(InstructorModel instructor);
         Task<int> Actualizar(InstructorModel instructor);
         Task<int> Eliminar(Guid id);
    }
}