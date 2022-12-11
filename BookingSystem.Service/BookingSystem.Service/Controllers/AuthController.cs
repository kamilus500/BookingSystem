using BookingSystem.Service.Dtos;
using BookingSystem.Service.Models;
using BookingSystem.Service.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookingSystem.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IAuthService _authService;
        public AuthController(IUserService userService, IAuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }


        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] UserLoginDto loginUser)
        {
            if (loginUser is null)
            {
                return BadRequest("Invalid client request");
            }

            bool isExist = _userService.IsExist(loginUser).Result;

            var role = await _userService.GetRole(loginUser);

            if (isExist)
            {
                string tokenString = _authService.GenerateToken(loginUser.Email, role);

                var user = await _userService.GetUser(loginUser);

                return Ok(new AuthenticatedResponse { Token = tokenString, FirstName = user.FirstName, LastName = user.LastName, UserId = user.Id});
            }
            return Unauthorized();
        }

        [HttpPost("registration")]
        public async Task<ActionResult> Registration([FromBody] UserRegistrationDto registrationUser)
        {
            if(string.IsNullOrWhiteSpace(registrationUser.Email) || 
                string.IsNullOrWhiteSpace(registrationUser.Password) ||
                string.IsNullOrWhiteSpace(registrationUser.FirstName) || 
                string.IsNullOrWhiteSpace(registrationUser.LastName))
            {
                return BadRequest("One or more fields are empty");
            }

            bool IsExist = await _userService.IsSameEmailExist(registrationUser.Email);

            if (IsExist)
                return BadRequest("User with that email is exist");

            await _userService.Create(registrationUser);

            return Ok();            
        }
    }
}
