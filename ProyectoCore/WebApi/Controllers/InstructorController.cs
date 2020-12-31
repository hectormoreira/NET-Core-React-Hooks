using System.Collections.Generic;
using System.Threading.Tasks;
using Aplicacion.Instructores;
using Microsoft.AspNetCore.Mvc;
using Persistencia.DapperConexion.Instructor;

namespace WebApi.Controllers
{
    public class InstructorController : MiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<InstructorModel>>> ObtenerInstructores(){
            return await Mediator.Send(new Consulta.Lista());
        }
        
    }
}