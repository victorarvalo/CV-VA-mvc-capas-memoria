using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class SummaryData
    {
        [Key]
        public int IdSummaryData { get; set; }

        public string? Title { get; set; }

        public string? Data { get; set; }
    }
}
