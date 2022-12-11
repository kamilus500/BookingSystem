using System;

namespace BookingSystem.Service.Dtos
{
    public class OrderDto
    {
        public bool IsEnd { get; set; }
        public bool IsAccepted { get; set; }
        public int OrderId { get; set; }
        public string Adress { get; set; }
        public int? UserId { get; set; }
        public int TentId { get; set; }
        public decimal Cost { get; set; }
        public DateTime DateTime { get; set; }
        public string Email { get; set; }
    }
}
