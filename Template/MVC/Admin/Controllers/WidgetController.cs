using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc.Controllers
{
    public class WidgetController : Controller
    {
        // GET: Widget
        public ActionResult Chart()
        {
            return View();
        }
        public ActionResult Data()
        {
            return View();
        }
        public ActionResult Statistics()
        {
            return View();
        }
        public ActionResult User()
        {
            return View();
        }
    }
}