using Microsoft.AspNetCore.Mvc;


namespace Asp.Controllers
{
    public class LivePreviewController : Controller
    {
        // GET: LivePreview
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult LivePreviewTwo()
        {
            return View();
        }
    }
}