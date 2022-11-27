using AutoMapper;
using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;
        public UserService(ApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task Create(UserRegistrationDto newUserDto)
        {
            try
            {
                var user = _mapper.Map<User>(newUserDto);

                user.Password = BCrypt.Net.BCrypt.HashPassword(newUserDto.Password);

                await _dbContext.Users.AddAsync(user);
                await _dbContext.SaveChangesAsync();
            }
            catch(Exception)
            {
                throw;
            }
        }

        public async Task<string> GetRole(UserLoginDto userLoginDto)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == userLoginDto.Email);

                return user.Role.ToString();
            }
            catch(Exception)
            {
                throw;
            }
        }

        public async Task<bool> IsExist(UserLoginDto userLoginDto)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == userLoginDto.Email);

                if (!BCrypt.Net.BCrypt.Verify(userLoginDto.Password, user.Password))
                    return false;

                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
