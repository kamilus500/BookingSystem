using BookingSystem.Service.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public interface ITentService
    {
        public Task<List<TentDto>> GetTents();
        public Task<TentDto> GetTentById(int id);
    }
}
