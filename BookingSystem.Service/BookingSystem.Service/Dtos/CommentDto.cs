using BookingSystem.Service.Entities.Enums;

namespace BookingSystem.Service.Dtos
{
    public class CommentDto
    {
        public int UserId { get; set; }
        public string Message { get; set; }
        public Grade Grade { get; set; }
    }
}
