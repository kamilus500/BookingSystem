using AutoMapper;
using AutoMapper.Execution;
using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
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
        private readonly ILogger _logger;
        public TentService(ApplicationDbContext dbContext, IMapper mapper, ILogger<TentService> logger)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _logger = logger;
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
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
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
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }
    }
}
