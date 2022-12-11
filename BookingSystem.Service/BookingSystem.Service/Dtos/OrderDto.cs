using BookingSystem.Service.Entities;
using System;

namespace BookingSystem.Service.Dtos
{
    public class OrderDto
    {
        public string Adress { get; set; }
        public int? UserId { get; set; }
        public int TentId { get; set; }
        public decimal Cost { get; set; }
        public DateTime DateTime { get; set; }
    }
}
