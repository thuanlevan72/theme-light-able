using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc.Controllers
{
    public class GalleryController : Controller
    {
        // GET: Gallery
        public ActionResult GalleryMasonry()
        {
            return View();
        }
        public ActionResult GalleryGrid()
        {
            return View();
        }
    }
}