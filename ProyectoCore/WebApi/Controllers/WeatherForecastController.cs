using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dominio;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Persistencia;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly CursosOnlineContext _context;
        public WeatherForecastController(CursosOnlineContext context){
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Curso> Get(){
            //string[] nombres = new[]{ "Din Djarin", "Grogu", "Cara Dune"};
            return _context.Curso.ToList();
        }
    }
}
