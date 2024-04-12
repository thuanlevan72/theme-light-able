using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult AffiliateDashboard()
        {
            return View();
        }
    }
}