using BookingSystem.Service.Entities.Enums;

namespace BookingSystem.Service.Entities
{
    public class Item
    {
        public ItemType Type { get; set; }
        public int Count { get; set; }
    }
}
