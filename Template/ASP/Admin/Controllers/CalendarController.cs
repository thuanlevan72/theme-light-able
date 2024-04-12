using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class CalendarController : Controller
    {
        // GET: Calendar
        public IActionResult Index()
        {
            return View();
        }
    }
}