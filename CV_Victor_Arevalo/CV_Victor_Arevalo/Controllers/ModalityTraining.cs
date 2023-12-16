using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModalityTraining : ControllerBase
    {
        private readonly PersistenceContext.PersistenceContext _persistenceContext;

        public ModalityTraining(PersistenceContext.PersistenceContext persistenceContext)
        {
            this._persistenceContext = persistenceContext;
        }

        [HttpGet]
        public List<Models.ModalityTraining> GetAllModalityTraining()
        {
            List<Models.ModalityTraining> modalities = _persistenceContext.ModalityTraining.ToList();
            return modalities;
        }

    }
}
