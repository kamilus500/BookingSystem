using BookingSystem.Service.Entities.Enums;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookingSystem.Service.Entities
{
    public class Tent
    {
        [Key]
        public int Id { get; set; }
        public Size Size { get; set; }
        public decimal Cost { get; set; }
        public List<Order>? Orders { get; set; }
    }
}
