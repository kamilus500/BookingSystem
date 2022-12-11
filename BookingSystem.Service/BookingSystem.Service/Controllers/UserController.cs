using BookingSystem.Service.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookingSystem.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("{id}")]
        public async Task<ActionResult> GetUserById([FromRoute] int id)
        {
            var user = await _userService.GetUserById(id);

            if (user is null)
                return NotFound();

            return Ok(user);
        }
    }
}
