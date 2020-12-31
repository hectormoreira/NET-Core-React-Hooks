using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistencia.DapperConexion.Instructor;

namespace Aplicacion.Instructores
{
    public class Consulta
    {
        public class Lista : IRequest<List<InstructorModel>>{
            
        }

        public class Manejador : IRequestHandler<Lista, List<InstructorModel>>
        {
            private readonly IInstructor _instructorRepositorio;
            public Manejador(IInstructor instructorRepositorio)
            {
                _instructorRepositorio = instructorRepositorio;
            }

            public async Task<List<InstructorModel>> Handle(Lista request, CancellationToken cancellationToken)
            {
                var resultado = await _instructorRepositorio.ObtenerLista();
                return resultado.ToList();
            }
        }

    }
}