using BookingSystem.Service.Services;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("{id}")]
        public async Task<ActionResult> GetUserById([FromRoute] int id)
        {
            var user = await _userService.GetUserById(id);

            if (user is null)
                return NotFound();

            return Ok(user);
        }

        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            var users = await _userService.GetUsers();

            if (users is null)
                return NoContent();

            return Ok(users);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{userId}")]
        public async Task<ActionResult> Remove([FromRoute]int userId)
        {
            await _userService.Remove(userId);

            return Ok();
        }
    }
}
