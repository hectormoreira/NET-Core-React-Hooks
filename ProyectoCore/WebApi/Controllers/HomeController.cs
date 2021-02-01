using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index(){
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}