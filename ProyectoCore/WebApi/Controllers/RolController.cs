using System.Threading.Tasks;
using Aplicacion.Seguridad;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    public class RolController : MiControllerBase
    {
        [HttpPost("crear")]
        public async Task<ActionResult<Unit>> Crear(RolNuevo.Ejecuta parametros){
            return await Mediator.Send(parametros);
        }

        [HttpDelete("eliminar")]
        public async Task<ActionResult<Unit>> Elminar(RolEliminar.Ejecuta parametros){
            return await Mediator.Send(parametros);
        }

    }
}