using System;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Aplicacion.ManejadorError;
using MediatR;
using Persistencia;

namespace Aplicacion.Cursos
{
    public class Eliminar
    {
        public class Ejecuta : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Manejador : IRequestHandler<Ejecuta>
        {
            private readonly CursosOnlineContext _context;
            public Manejador(CursosOnlineContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Ejecuta request, CancellationToken cancellationToken)
            {
                var instructoresDb = _context.CursoInstructor.Where(x => x.CursoId.Equals(request.Id));
                foreach (var instructor in instructoresDb)
                {
                    _context.CursoInstructor.Remove(instructor);
                }

                var comentariosDb = _context.Comentario.Where(x => x.CursoId.Equals(request.Id));
                foreach (var comentario in comentariosDb)
                {
                    _context.Comentario.Remove(comentario);
                }

                var precioDb = _context.Precio.Where(x => x.CursoId.Equals(request.Id)).FirstOrDefault();
                if (precioDb != null)
                {
                    _context.Precio.Remove(precioDb);
                }

                var curso = await _context.Curso.FindAsync(request.Id);
                if (curso == null)
                {
                    //throw new Exception("No se pudo eliminar el curso");
                    throw new ManejadorExcepcion(HttpStatusCode.NotFound, new {mensaje = "No se encontró el curso"});
                }
                _context.Remove(curso);

                var resultado = await _context.SaveChangesAsync();

                if (resultado > 0)
                {
                    return Unit.Value;
                }
                else
                {
                    //throw new Exception("No se guardaron los cambios");
                    throw new ManejadorExcepcion(HttpStatusCode.NotModified, new {curso = "No se guardaron los cambios"});
                }
            }
        }
    }
}