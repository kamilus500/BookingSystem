using AutoMapper;
using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using Isopoh.Cryptography.Argon2;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;
        public UserService(ApplicationDbContext dbContext, IMapper mapper, ILogger<UserService> logger)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _logger = logger;
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
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<string> GetRole(UserLoginDto userLoginDto)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == userLoginDto.Email);

                return user.Role.ToString();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<bool> IsExist(UserLoginDto userLoginDto)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == userLoginDto.Email);

                if(user is null)
                    throw new ArgumentNullException(nameof(user));

                if (!Argon2.Verify(user.Password, userLoginDto.Password))
                    return false;

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<bool> IsSameEmailExist(string email)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == email);

                if(user is null)
                    return false;

                return true;
            }
            catch(Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<User> GetUser(UserLoginDto userLoginDto)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == userLoginDto.Email);

                if (user is null)
                    throw new ArgumentNullException(nameof(user));

                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<User> GetUserById(int id)
        {
            try
            {
                var user = await _dbContext.Users.Include(x => x.Orders).FirstOrDefaultAsync(x => x.Id == id);

                if (user is null)
                    throw new ArgumentNullException(nameof(user));

                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }
    }
}
