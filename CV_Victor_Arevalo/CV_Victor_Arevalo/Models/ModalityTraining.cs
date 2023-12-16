using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class ModalityTraining
    {
        [Key]
        public int IdModalityTraning { get; set; }

        public string? Modality { get; set; }
    }
}
