using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class WidgetController : Controller
    {
        // GET: Widget
        public IActionResult Chart()
        {
            return View();
        }
        public IActionResult Data()
        {
            return View();
        }
        public IActionResult Statistics()
        {
            return View();
        }
        public IActionResult User()
        {
            return View();
        }
    }
}