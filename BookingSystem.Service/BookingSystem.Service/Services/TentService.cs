using AutoMapper;
using BookingSystem.Service.Dtos;
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
        private readonly IMapper _mapper;
        public TentService(ApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<TentDto> GetTentById(int id)
        {
            try
            {
                var tent = await _dbContext.Tents.FirstAsync(t => t.Id == id);

                if (tent == null)
                    throw new ArgumentNullException(nameof(tent));

                var tentDto = _mapper.Map<TentDto>(tent);

                return tentDto;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<TentDto>> GetTents()
        {
            try
            {
                var tents = await _dbContext.Tents.ToListAsync();

                if (tents == null)
                    throw new ArgumentNullException(nameof(tents));

                var tentDtos = _mapper.Map<List<TentDto>>(tents);

                return tentDtos;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
