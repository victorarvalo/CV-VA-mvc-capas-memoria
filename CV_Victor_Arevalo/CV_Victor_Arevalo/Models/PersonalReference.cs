using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class PersonalReference
    {
        [Key]
        public int IdPersonalReference { get; set; }
        public string name { get; set; }
        public string? celPhone { get; set; }
        public string? email { get; set; }
        public string? occupation { get; set; }
    }
}
