using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webapi.Models
{
    
    public class Skill
    {
        [Key] public int Id { get; set; }
        public string skil {  get; set; }
    }
}
