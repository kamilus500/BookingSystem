using AutoMapper;
using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using Isopoh.Cryptography.Argon2;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Security.Cryptography;
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

                var hashedPassword = Argon2.Hash(user.Password);

                user.Password = hashedPassword;

                await _dbContext.Users.AddAsync(user);
                await _dbContext.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
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

                if (!Argon2.Verify(user.Password, userLoginDto.Password))
                    return false;

                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<User> GetUser(UserLoginDto userLoginDto)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == userLoginDto.Email);

                return user;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
