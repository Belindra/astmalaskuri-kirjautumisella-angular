using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class MedicineEventController : BaseApiController
    {
        private readonly DataContext _context;
        public MedicineEventController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicineEvent>>> GetAllMedicineEvents()
        {
            return await _context.MedicineEvents.ToListAsync();
        }

        [HttpGet("{userId}/{medId}")]
        public async Task<ActionResult<MedicineEvent>> GetMedicineEventsByIds(int userId, int medId)
        {
            return await _context.MedicineEvents.FindAsync(userId, medId);
        }

        [HttpPut()]
        public async Task<ActionResult<MedicineEvent>> ResetMedicine(MedicineEvent medicineEvent)
        {
            var medicine = await _context.MedicineEvents.FindAsync(medicineEvent.UserId, medicineEvent.MedicineId);

            medicine.UsedPortionTotal = medicineEvent.UsedPortionTotal;

            medicine.UsedPortionTotal = 0;

            await _context.SaveChangesAsync();

            return Ok(medicine.UsedPortionTotal);
        }
    }
}