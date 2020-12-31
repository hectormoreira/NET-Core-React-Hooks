using System;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Persistencia.DapperConexion.Instructor;

namespace Aplicacion.Instructores
{
    public class Nuevo
    {
        public class Ejecuta : IRequest{
            public string Nombre { get; set; }
            public string Apellidos { get; set; }
            public string Titulo { get; set; }
        }

        public class EjecutaValidacion : AbstractValidator<Ejecuta>
        {
            public EjecutaValidacion()
            {
                RuleFor( x => x.Nombre).NotEmpty();
                RuleFor( x => x.Apellidos).NotEmpty();
                RuleFor( x => x.Titulo).NotEmpty();
            }
        }

        public class Manejador : IRequestHandler<Ejecuta>
        {
            private readonly IInstructor _instrutorRepositorio;

            public Manejador(IInstructor instrutorRepositorio)
            {
                _instrutorRepositorio = instrutorRepositorio;
            }

            public async Task<Unit> Handle(Ejecuta request, CancellationToken cancellationToken)
            {
                var resultado = await _instrutorRepositorio.Nuevo(request.Nombre, request.Apellidos, request.Titulo);
                if (resultado > 0)
                {
                    return Unit.Value;
                }

                throw new Exception("No se pudo ingresar el instructor");
            }
        }
    }
}