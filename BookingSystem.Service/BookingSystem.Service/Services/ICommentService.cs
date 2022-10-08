using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public interface ICommentService
    {
        public Task<List<CommentDto>> GetAll();
        public Task<CommentDto> GetById(int id);
        public Task Create(CommentDto comment);
        public Task Delete(int id);
    }
}
