using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingSystem.Service.Entities
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        public int? UserId { get; set; }
        public User? User { get; set; }

        [ForeignKey("Tent")]
        public int TentId { get; set; }
        public Tent Tent { get; set; }
        public decimal Cost { get; set; }
        public DateTime DateTime { get; set; }
        public string Adress { get; set; }
        public bool IsEnd { get; set; } = false;
        public bool IsAccepted { get; set; } = false;
        public bool IsGrill { get; set; } = false;
    }
}