using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class MapsController : Controller
    {
        // GET: Maps
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Gmap()
        {
            return View();
        }
    }
}