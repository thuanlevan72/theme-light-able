using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc.Controllers
{
    public class InvoiceController : Controller
    {
        // GET: Invoice
        public ActionResult Create()
        {
            return View();
        }
        public ActionResult List()
        {
            return View();
        }
        public ActionResult InvoiceViews()
        {
            return View();
        }
    }
}