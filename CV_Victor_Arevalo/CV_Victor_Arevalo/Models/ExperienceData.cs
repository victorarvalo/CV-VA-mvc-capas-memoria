using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class ExperienceData
    {
        [Key]
        public int IdExperienceData { get; set; }

        public string enterprise { get; set; }
        public string? phone { get; set; }
        public string? url { get; set; }
        public string position { get; set; }
        public string summary { get; set; }
        public List<Models.DetailSummary> detailSummary { get; set; }
        public List<Models.Skill> skills { get; set; }
        public string startDate { get; set; }
        public string finishDate { get; set; }
    }
}
