using System.IO;
using System.Threading.Tasks;
using Aplicacion.Cursos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [AllowAnonymous]
    public class ExportarDocumentoController : MiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<Stream>> GetTask(){
            return await Mediator.Send(new ExportPDF.Consulta());
        }
    }
}