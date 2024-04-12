using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class landingController : Controller
    {
        // GET: landing
        public IActionResult Index()
        {
            return View();
        }
    }
}