using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EducationData : ControllerBase
    {
        private readonly PersistenceContext.PersistenceContext _persistenceContext;
        public EducationData(PersistenceContext.PersistenceContext persistenceContext) { 
        
            _persistenceContext = persistenceContext;
        }
        [HttpGet]
        public List<Models.EducationData> GetAllEducationData()
        {
            List<Models.EducationData> educations = _persistenceContext.EducationData.ToList();          
            return educations;
        }        
    }
}
