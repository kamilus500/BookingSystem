using BookingSystem.Service.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public class TentService : ITentService
    {
        private readonly ApplicationDbContext _dbContext;
        public TentService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Tent> GetTentById(int id)
        {
            try
            {
                var tent = await _dbContext.Tents.FirstAsync(t => t.Id == id);

                if (tent == null)
                    throw new ArgumentNullException(nameof(tent));

                return tent;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<Tent>> GetTents()
        {
            try
            {
                var tents = await _dbContext.Tents.ToListAsync();

                if (tents == null)
                    throw new ArgumentNullException(nameof(tents));

                return tents;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
