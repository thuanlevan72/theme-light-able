using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class LayoutsController : Controller
    {
        // GET: Layouts
        public IActionResult layout2()
        {
            return View();
        }
        public IActionResult layoutCompact()
        {
            return View();
        }
        public IActionResult LayoutHorizontal()
        {
            return View();
        }
        public IActionResult LayoutTab()
        {
            return View();
        }
        public IActionResult LayoutVertical()
        {
            return View();
        }
    }
}