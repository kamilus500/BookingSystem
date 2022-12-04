using System.ComponentModel.DataAnnotations;

namespace BookingSystem.Service.Entities
{
    public class Adress
    {
        [Key]
        public int Id { get; set; }
        public string Street { get; set; }
        public string BuildingNumber { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
    }
}
