using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class MedicineInfoController : BaseApiController
    {
        private readonly DataContext _context;
        public MedicineInfoController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicineInfo>>> GetMedicineInfo()
        {
            return await _context.MedicineInfo.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineInfo>> GetMedicineWithId(int id)
        {
            return await _context.MedicineInfo.FindAsync(id);
        }
    }
}