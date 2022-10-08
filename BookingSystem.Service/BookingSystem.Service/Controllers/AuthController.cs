using BookingSystem.Service.Dtos;
using BookingSystem.Service.Models;
using BookingSystem.Service.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BookingSystem.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] UserLoginDto loginUser)
        {
            if (loginUser is null)
            {
                return BadRequest("Invalid client request");
            }
            if (_userService.IsExist(loginUser).Result)
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: "https://localhost:5001",
                    audience: "https://localhost:5001",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new AuthenticatedResponse { Token = tokenString });
            }
            return Unauthorized();
        }

        [HttpPost("registration")]
        public ActionResult Registration([FromBody] UserRegistrationDto registrationUser)
        {
            if(string.IsNullOrWhiteSpace(registrationUser.UserName) || 
                string.IsNullOrWhiteSpace(registrationUser.Password) ||
                string.IsNullOrWhiteSpace(registrationUser.FirstName) || 
                string.IsNullOrWhiteSpace(registrationUser.LastName))
            {
                return BadRequest("One or more fields are empty");
            }

            _userService.Create(registrationUser);

            return Ok();            
        }
    }
}
