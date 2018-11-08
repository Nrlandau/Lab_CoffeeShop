using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Lab_21.Models
{
    public class User
    {
        [Required] // attributes 
        [RegularExpression(@"^[a-zA-Z]{2,}$")]
        public string FirstName { set; get; } 

        [Required] // attributes 
        [RegularExpression(@"^[a-zA-Z]{2,}$")]
        public string LastName { set; get; }

        [Required] // attributes 
        [RegularExpression(@"^[a-zA-Z]\w{2,}@(([a-zA-Z]{2,})|([A-Za-z0-9_]{2,}\.[a-zA-Z]{2,}))$")]
        public string Email { set; get; }

        [Required] // attributes 
        [RegularExpression(@"^\d{10}$")]
        public string Phone { set; get; }

        [Required] // attributes 
        [RegularExpression(@"^\w{8,}$")]
        public string Password { set; get; }
    }
}