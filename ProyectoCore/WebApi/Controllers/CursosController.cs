using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Aplicacion.Cursos;
using Dominio;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    //http://localhost:5000/api/cursos
    [Route("api/[controller]")]
    [ApiController]
    public class CursosController : MiControllerBase
    {

        [HttpGet]
        //[Authorize]
        public async Task<ActionResult<List<CursoDto>>> Get(){
            return await Mediator.Send(new Consulta.ListaCursos());
        }

        //http://localhost:5000/api/cursos/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<CursoDto>> Detalle(Guid id){
            return await Mediator.Send(new ConsultaId.CursoUnico{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Crear(Nuevo.Ejecuta data){
            return await Mediator.Send(data);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Editar(int id, Editar.Ejecuta data){
            data.CursoId = id;
            return await Mediator.Send(data);
        }

        
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Eliminar(int id){
            return await Mediator.Send(new Eliminar.Ejecuta{Id = id});
        }
    }
}