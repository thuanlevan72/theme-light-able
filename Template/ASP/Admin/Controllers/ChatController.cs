using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class ChatController : Controller
    {
        // GET: Chat
        public IActionResult Index()
        {
            return View();
        }
    }
}