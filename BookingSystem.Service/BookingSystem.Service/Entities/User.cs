using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookingSystem.Service.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<Order>? Orders { get; set; }
    }
}
