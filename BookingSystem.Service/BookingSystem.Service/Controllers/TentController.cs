using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using BookingSystem.Service.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookingSystem.Service.Controllers
{
    [Route("api/Tent")]
    [ApiController]
    public class TentController : ControllerBase
    {
        private readonly ITentService _tentService;
        public TentController(ITentService tentService)
        {
            _tentService = tentService;
        }
        
        [HttpGet]
        public async Task<ActionResult> GetTents()
        {
            var tents = await _tentService.GetTents();

            if (tents == null)
                return NotFound();

            return Ok(tents);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetTentById(int id)
        {
            var tent = await _tentService.GetTentById(id);

            if (tent == null)
                return NotFound();

            return Ok(tent);
        }
    }
}
