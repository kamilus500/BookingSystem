using BookingSystem.Service.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public interface ICommentService
    {
        public Task<List<Comment>> GetAll();
        public Task<Comment> GetById(int id);
        public Task Create(Comment comment);
        public Task Delete(int id);
    }
}
