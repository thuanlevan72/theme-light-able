using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class ECommerceController : Controller
    {
        // GET: ECommerce
        public IActionResult Checkout()
        {
            return View();
        }
        public IActionResult ProductAdd()
        {
            return View();
        }
        public IActionResult ProductDetails()
        {
            return View();
        }
        public IActionResult ProductList()
        {
            return View();
        }
        public IActionResult Product()
        {
            return View();
        }
    }
}