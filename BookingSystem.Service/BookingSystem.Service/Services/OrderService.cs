using AutoMapper;
using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;
using Microsoft.EntityFrameworkCore;
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

        public OrderService(ApplicationDbContext dbContext, IMapper mapper, EmailService emailService)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _emailService = emailService;
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
            catch(Exception ex)
            {
                throw;
            }
        }

        public async Task Create(OrderDto newOrderDto)
        {
            try
            {
                if(newOrderDto == null)
                    throw new ArgumentNullException(nameof(newOrderDto));

                var order = _mapper.Map<Order>(newOrderDto);

                await _dbContext.Orders.AddAsync(order);
                await _dbContext.SaveChangesAsync();

                await _emailService.Send("kkurzeja321@gmail.com", "Namioty", "Rezerwacja namiotu została pomyślnie zakończona");
            }
            catch(Exception)
            {
                throw;
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
            catch(Exception)
            {
                throw;
            }
        }

        public async Task EndReservation(int id)
        {
            try
            {
                if (id == 0)
                    throw new Exception("Id is 0");

                var order = await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);

                order.IsEnd = true;

                await _dbContext.SaveChangesAsync();
            }
            catch(Exception)
            {
                throw;
            }
        }

        public async Task<OrderDto> GetOrderById(int id)
        {
            try
            {
                if(id == 0)
                    throw new Exception("Id is 0");

                var order = await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);

                var orderDto = _mapper.Map<OrderDto>(order);

                return orderDto;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<OrderDto>> GetOrders()
        {
            try
            {
                var orders = await _dbContext.Orders.ToListAsync();

                if (orders == null)
                    throw new ArgumentNullException(nameof(orders));

                var ordersDto = _mapper.Map <List<OrderDto>>(orders);

                return ordersDto;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task Update(int id, OrderDto updateOrderDto)
        {
            try
            {
                if (id == 0)
                    throw new Exception("Id is 0");

                var order = await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);

                order.Cost = updateOrderDto.Cost;
                order.TentId = updateOrderDto.TentId;
                order.Address = updateOrderDto.Address;
                order.DateTime = updateOrderDto.DateTime;

                await _dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
