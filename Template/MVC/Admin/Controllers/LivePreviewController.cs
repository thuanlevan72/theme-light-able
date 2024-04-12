using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc.Controllers
{
    public class LivePreviewController : Controller
    {
        // GET: LivePreview
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LivePreviewTwo()
        {
            return View();
        }
        public ActionResult LivePreviewTwoOld()
        {
            return View();
        }
    }
}