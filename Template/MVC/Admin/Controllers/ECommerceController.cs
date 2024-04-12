using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc.Controllers
{
    public class ECommerceController : Controller
    {
        // GET: ECommerce
        public ActionResult Checkout()
        {
            return View();
        }
        public ActionResult ProductAdd()
        {
            return View();
        }
        public ActionResult ProductDetails()
        {
            return View();
        }
        public ActionResult ProductList()
        {
            return View();
        }
        public ActionResult Product()
        {
            return View();
        }
    }
}