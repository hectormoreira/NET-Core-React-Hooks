using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Aplicacion.ManejadorError;
using MediatR;
using Persistencia.DapperConexion.Instructor;

namespace Aplicacion.Instructores
{
    public class ConsultaId
    {
        public class Ejecuta : IRequest<InstructorModel>{
            public Guid Id { get; set; }
        }

        public class Manejador : IRequestHandler<Ejecuta, InstructorModel>
        {
            private readonly IInstructor _instrutorRepositorio;
            public Manejador(IInstructor instrutorRepositorio)
            {
                _instrutorRepositorio = instrutorRepositorio;
            }

            public async Task<InstructorModel> Handle(Ejecuta request, CancellationToken cancellationToken)
            {
                var instructor = await _instrutorRepositorio.ObtenerPorId(request.Id);
                if (instructor == null)
                {
                    throw new ManejadorExcepcion(HttpStatusCode.NotFound, new { mensaje = "No se encontró el instructor"});
                }
                return instructor;
            }
        }
    }
}