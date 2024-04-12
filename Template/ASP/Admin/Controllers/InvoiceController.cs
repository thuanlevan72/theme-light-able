using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class InvoiceController : Controller
    {
        // GET: Invoice
        public IActionResult Create()
        {
            return View();
        }
        public IActionResult List()
        {
            return View();
        }
        public IActionResult InvoiceViews()
        {
            return View();
        }
    }
}