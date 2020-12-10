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
                var cursos = db.Curso.AsNoTracking();//array IQueryable
                foreach (var curso in cursos)
                {
                    Console.WriteLine(curso.Titulo + " - "+ curso.Descripcion);
                }

            }
        }
    }
}
