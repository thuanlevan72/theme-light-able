using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc.Controllers
{
    public class UsersController : Controller
    {
        // GET: Users
        public ActionResult AccountProfile()
        {
            return View();
        }
        public ActionResult SocialMedia()
        {
            return View();
        }
        public ActionResult UserCard()
        {
            return View();
        }
        public ActionResult UserList()
        {
            return View();
        }
        public ActionResult Plans()
        {
            return View();
        }
        public ActionResult Team()
        {
            return View();
        }
    }
}