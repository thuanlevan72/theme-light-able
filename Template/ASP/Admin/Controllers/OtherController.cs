using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class OtherController : Controller
    {
        // GET: Other
        public IActionResult Index()
        {
            return View();
        }
    }
}