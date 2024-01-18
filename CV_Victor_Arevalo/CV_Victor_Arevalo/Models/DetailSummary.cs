using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class DetailSummary
    {
        [Key] public int Id { get; set; }
        public string detail { get; set; }
        public int IdEducationData { get; set; }
    }
}
