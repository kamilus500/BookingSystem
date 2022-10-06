using BookingSystem.Service.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public interface ITentService
    {
        public Task<List<Tent>> GetTents();
        public Task<Tent> GetTentById(int id);
    }
}
