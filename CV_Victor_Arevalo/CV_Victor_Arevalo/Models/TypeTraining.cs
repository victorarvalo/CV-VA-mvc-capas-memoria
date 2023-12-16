using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class TypeTraining
    {
        [Key]
        public int IdTypeTraining { get; set; }

        public string? Type { get; set; }
    }
}
