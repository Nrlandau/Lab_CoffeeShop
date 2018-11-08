﻿using Lab_21.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lab_21.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Confirm()
        {
            return View();
        }
        public ActionResult UserRegistation()
        {
            return View();
        }
        public ActionResult AddUser(User newUser)
        {
            if(ModelState.IsValid)
            {
                ViewBag.ConfMessage = "Thanks " + newUser.FirstName;

                return View("Confirm");
            }
            return View("Error");
        }
    }
}