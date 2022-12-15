using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public interface IOrderService
    {
        public Task<List<Order>> GetOrders();
        public Task<Order> GetOrderById(int id);
        public Task Create(OrderDto newOrderDto);
        public Task Update(int id, OrderDto updateOrderDto);
        public Task Delete(int id);
        public Task EndReservation(int id);
        public Task AcceptOrder(int id);
    }
}
