using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SummaryData : ControllerBase
    {
        private readonly PersistenceContext.PersistenceContext _persistenceContext;

        public SummaryData(PersistenceContext.PersistenceContext persistenceContext)
        {
            _persistenceContext = persistenceContext;
        }

        [HttpGet]
        public List<Models.SummaryData> GetAllSummaryData()
        {
            List<Models.SummaryData> summaries = _persistenceContext.SummaryData.ToList();
            return summaries;
        }
    }
}
