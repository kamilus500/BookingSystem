using BookingSystem.Service.Dtos;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public interface IUserService
    {
        public Task Create(UserRegistrationDto newUserDto);
        public Task<string> GetRole(UserLoginDto userLoginDto);
        public Task<bool> IsExist(UserLoginDto userLoginDto);
    }
}
