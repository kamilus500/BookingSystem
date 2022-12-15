using AutoMapper;
using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.Service.Services
{
    public class OrderService : IOrderService
    {
        private readonly EmailService _emailService;
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly ILogger<OrderService> _logger;

        public OrderService(ApplicationDbContext dbContext, IMapper mapper, EmailService emailService, ILogger<OrderService> logger)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _emailService = emailService;
            _logger = logger;
        }

        public async Task AcceptOrder(int id)
        {
            try
            {
                if (id == 0)
                    throw new Exception("Id is 0");

                var order = await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);

                order.IsAccepted = true;

                await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task Create(OrderDto newOrderDto)
        {
            string email = string.Empty;

            try
            {
                if(newOrderDto == null)
                    throw new ArgumentNullException(nameof(newOrderDto));

                var order = _mapper.Map<Order>(newOrderDto);

                await _dbContext.Orders.AddAsync(order);
                await _dbContext.SaveChangesAsync();

                if(newOrderDto.UserId == null)
                    await _emailService.Send(newOrderDto.Email, "Namioty", "Rezerwacja namiotu została pomyślnie zakończona");
                else
                {
                    email = _dbContext.Users.FirstOrDefault(x => x.Id == order.UserId).Email;
                    await _emailService.Send(email, "Namioty", "Rezerwacja namiotu została pomyślnie zakończona");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task Delete(int id)
        {
            try
            {
                if (id == 0)
                    throw new Exception("Id is 0");

                var order = _dbContext.Orders.FirstOrDefault(x => x.Id == id);

                if (order == null)
                    throw new ArgumentNullException(nameof(order));

                _dbContext.Orders.Remove(order);
                await _dbContext.SaveChangesAsync();

            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task EndReservation(int id)
        {
            try
            {
                var order = await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);

                if (order == null)
                    throw new ArgumentNullException(nameof(order));

                order.IsEnd = true;

                await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<Order> GetOrderById(int id)
        {
            try
            {
                var order = await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);

                if (order == null)
                    throw new ArgumentNullException(nameof(order));

                //var orderDto = _mapper.Map<OrderDto>(order);

                return order;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<List<Order>> GetOrders()
        {
            try
            {
                var orders = await _dbContext.Orders.ToListAsync();

                if (orders == null)
                    throw new ArgumentNullException(nameof(orders));

                //var ordersDto = _mapper.Map <List<OrderDto>>(orders);

                return orders;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task Update(int id, OrderDto updateOrderDto)
        {
            try
            {
                var order = await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);

                if (order == null)
                    throw new ArgumentNullException(nameof(order));

                order.Cost = updateOrderDto.Cost;
                order.TentId = updateOrderDto.TentId;
                order.Adress = updateOrderDto.Adress;
                order.DateTime = updateOrderDto.DateTime;

                await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }
    }
}
