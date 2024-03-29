﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExperienceData : ControllerBase
    {
        private readonly PersistenceContext.PersistenceContext _persistenceContext;

        public ExperienceData(PersistenceContext.PersistenceContext context)
        {
            _persistenceContext = context;
        }

        [HttpGet]
        public List<Models.ExperienceData> GetAllExperienceData()
        {
            List<Models.ExperienceData> experiences = _persistenceContext.ExperienceData.ToList();
            List<Models.DetailSummary> detailSummaries = _persistenceContext.DetailSummarie.ToList();
            List<Models.Skill> skills = _persistenceContext.Skill.ToList();
            experiences = experiences.OrderByDescending(x=>x.IdExperienceData).ToList();
            return experiences;
        }
    }
}
