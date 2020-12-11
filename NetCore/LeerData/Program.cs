using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace LeerData
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new AppVentaCursosContext())
            {
                //one to one
                // var cursos = db.Curso.AsNoTracking();//array IQueryable
                // foreach (var curso in cursos)
                // {
                //     Console.WriteLine(curso.Titulo + " - "+ curso.Descripcion);
                // }

                //one to many
                // var cursos = db.Curso.Include(p => p.PrecioPromocion).AsNoTracking();
                // foreach (var curso in cursos)
                // {
                //     Console.WriteLine(curso.Titulo + "----" + curso.PrecioPromocion.PrecioActual);
                // }

                //one to many
                // var cursos = db.Curso.Include(c => c.ComentarioLista).AsNoTracking();
                // foreach (var curso in cursos)
                // {
                //     Console.WriteLine(curso.Titulo);
                //     foreach (var comentario in curso.ComentarioLista)
                //     {
                //         Console.WriteLine("**** " + comentario.Alumno + " >>> " + comentario.ComentarioTexto);
                //     }
                //     Console.WriteLine("--------");
                // }

                //many to many
                var cursos = db.Curso.Include(c => c.InstructorLink).ThenInclude(ci => ci.Instructor);
                foreach (var curso in cursos)
                {
                    Console.WriteLine("Curso: " + curso.Titulo);

                    foreach (var insLink in curso.InstructorLink)
                    {
                        Console.WriteLine("Instructor: " + insLink.Instructor.Nombre + " " + insLink.Instructor.Apellidos);
                    }
                    Console.WriteLine("--------");
                }
            }
        }
    }
}
