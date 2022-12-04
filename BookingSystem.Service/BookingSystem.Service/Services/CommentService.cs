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
    public class CommentService : ICommentService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;
        public CommentService(ApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task Create(CommentDto commentDto)
        {
            try
            {
                if(commentDto == null)
                    throw new ArgumentNullException(nameof(commentDto));

                var comment = _mapper.Map<Comment>(commentDto);

                await _dbContext.Comments.AddAsync(comment);
                await _dbContext.SaveChangesAsync();
            }
            catch(Exception)
            {
                throw;
            }
        }

        public async Task Delete(int id)
        {
            try
            {
                var comment = _dbContext.Comments.FirstOrDefault(x => x.Id == id);

                if (comment == null)
                    throw new ArgumentNullException(nameof(comment));

                _dbContext.Comments.Remove(comment);
                await _dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<CommentDto> GetById(int id)
        {
            try
            {
                var comment = await _dbContext.Comments
                    .Include(x => x.User)
                    .FirstOrDefaultAsync(x => x.Id == id);

                if (comment == null)
                    throw new ArgumentNullException(nameof(comment));

                var commentDto = _mapper.Map<CommentDto>(comment);

                return commentDto;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<CommentDto>> GetAll()
        {
            try
            {
                var comments = await _dbContext.Comments
                    .Include(x => x.User)
                    .ToListAsync();

                if (comments == null)
                    throw new ArgumentNullException(nameof(comments));

                var commentDtos = _mapper.Map<List<CommentDto>>(comments);

                return commentDtos;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
