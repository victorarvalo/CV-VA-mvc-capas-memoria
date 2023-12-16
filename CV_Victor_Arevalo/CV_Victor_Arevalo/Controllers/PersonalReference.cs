using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalReference : ControllerBase
    {
        private readonly PersistenceContext.PersistenceContext _persistenceContext;

        public PersonalReference(PersistenceContext.PersistenceContext persistenceContext)
        {
            _persistenceContext = persistenceContext;
        }

        [HttpGet]
        public List<Models.PersonalReference> GetAllPersonalReferences()
        {
            List<Models.PersonalReference> personals = _persistenceContext.personalReference.ToList();
            return personals;
        }
    }
}
