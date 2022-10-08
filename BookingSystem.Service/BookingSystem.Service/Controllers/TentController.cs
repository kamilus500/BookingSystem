using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using BookingSystem.Service.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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
        public ActionResult<List<TentDto>> GetTents()
        {
            var tents = _tentService.GetTents().Result;

            if (tents == null)
                return NotFound();

            return Ok(tents);
        }

        [HttpGet("{id}")]
        public ActionResult<TentDto> GetTentById(int id)
        {
            var tent = _tentService.GetTentById(id).Result;

            if (tent == null)
                return NotFound();

            return Ok(tent);
        }
    }
}
