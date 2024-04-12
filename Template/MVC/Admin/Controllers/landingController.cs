using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc.Controllers
{
    public class landingController : Controller
    {
        // GET: landing
        public ActionResult Index()
        {
            return View();
        }
    }
}