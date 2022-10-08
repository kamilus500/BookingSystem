using AutoMapper;
using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using System;
using System.Linq;
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

                await _dbContext.Users.AddAsync(user);
                await _dbContext.SaveChangesAsync();
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
                bool isExist = _dbContext.Users.Any(x => x.UserName == userLoginDto.Login && x.Password == userLoginDto.Password);

                return isExist;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
