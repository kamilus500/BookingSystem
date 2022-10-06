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
        public CommentService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Create(Comment comment)
        {
            try
            {
                if(comment == null)
                    throw new ArgumentNullException(nameof(comment));

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

        public async Task<Comment> GetById(int id)
        {
            try
            {
                var comment = await _dbContext.Comments.FirstOrDefaultAsync(x => x.Id == id);

                if (comment == null)
                    throw new ArgumentNullException(nameof(comment));

                return comment;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<Comment>> GetAll()
        {
            try
            {
                var comments = await _dbContext.Comments.ToListAsync();

                if (comments == null)
                    throw new ArgumentNullException(nameof(comments));

                return comments;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
