using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class PersonalData
    {
        [Key]
        public int IdPersonalData { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
        public int age { get; set; }
        public string bornDate { get; set; }
        public string bornPlace { get; set; }
        public string idDocument { get; set; }
        public string address { get; set; }
        public string celPhone { get; set; }
        public List<string> email { get; set; }
    }
}
