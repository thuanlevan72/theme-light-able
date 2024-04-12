using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc.Controllers
{
    public class LayoutsController : Controller
    {
        // GET: Layouts
        public ActionResult layout2()
        {
            return View();
        }
        public ActionResult layoutCompact()
        {
            return View();
        }
        public ActionResult LayoutHorizontal()
        {
            return View();
        }
        public ActionResult LayoutTab()
        {
            return View();
        }
        public ActionResult LayoutVertical()
        {
            return View();
        }
    }
}