using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class GalleryController : Controller
    {
        // GET: Gallery
        public IActionResult GalleryMasonry()
        {
            return View();
        }
        public IActionResult GalleryGrid()
        {
            return View();
        }
    }
}