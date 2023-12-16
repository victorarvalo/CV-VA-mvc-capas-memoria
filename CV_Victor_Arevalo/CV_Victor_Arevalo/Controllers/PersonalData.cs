using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalData : ControllerBase
    {
        private readonly PersistenceContext.PersistenceContext _persistenceContext;
        
        public PersonalData(PersistenceContext.PersistenceContext persistenceContext)
        {
            _persistenceContext = persistenceContext;
        }

        [HttpGet]
        public List<Models.PersonalData> GetAllPersonalData()
        {
            List<Models.PersonalData> personals = _persistenceContext.PersonalData.ToList();
            return personals;
        }
    }
}
