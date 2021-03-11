using System.Collections.Generic;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class EventInfoController : BaseApiController
    {
        private readonly DataContext _context;
        public EventInfoController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventInfo>>> GetEventInfo()
        {
            return await _context.EventInfo.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EventInfo>> GetEventInfoById(int id)
        {
            return await _context.EventInfo.FindAsync(id);
        }

        [HttpPost()]
        public async Task<ActionResult<EventInfo>> AddNewEvent(EventInfo eventInfo)
        {
            await _context.EventInfo.AddAsync(eventInfo);

            await _context.SaveChangesAsync();

            return Ok(eventInfo);
        }
    }
}