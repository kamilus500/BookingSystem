using BookingSystem.Service.Entities.Enums;

namespace BookingSystem.Service.Dtos
{
    public class CommentDto
    {
        public int CommentId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
        public Grade Grade { get; set; }
    }
}
