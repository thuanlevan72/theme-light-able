using Microsoft.AspNetCore.Mvc;

namespace Asp.Controllers
{
    public class UsersController : Controller
    {
        // GET: Users
        public IActionResult AccountProfile()
        {
            return View();
        }
        public IActionResult SocialMedia()
        {
            return View();
        }
        public IActionResult UserCard()
        {
            return View();
        }
        public IActionResult UserList()
        {
            return View();
        }
        public IActionResult Plans()
        {
            return View();
        }
        public IActionResult Team()
        {
            return View();
        }
    }
}