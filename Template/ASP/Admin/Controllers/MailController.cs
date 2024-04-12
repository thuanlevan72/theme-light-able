using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class MailController : Controller
    {
        // GET: Mail
        public IActionResult Index()
        {
            return View();
        }
    }
}