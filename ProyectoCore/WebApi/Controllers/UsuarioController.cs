using System.Threading.Tasks;
using Aplicacion.Seguridad;
using Dominio;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    public class UsuarioController : MiControllerBase
    {
        // http://localhost:5000/api/usuario/login
        [HttpPost("login")]
        public async Task<ActionResult<Usuario>> Login(Login.Ejecuta parametros){
            return await Mediator.Send(parametros);
        }
        
    }
}