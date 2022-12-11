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
            try
            {
                if(newOrderDto == null)
                    throw new ArgumentNullException(nameof(newOrderDto));

                _dbContext.Adresses.Add(newOrderDto.Address);
                _dbContext.SaveChanges();

                var order = _mapper.Map<Order>(newOrderDto);

                var address = _dbContext.Adresses.FirstOrDefault(x => x.ZipCode == newOrderDto.Address.ZipCode && x.Street == newOrderDto.Address.Street
                                                         && x.BuildingNumber == newOrderDto.Address.BuildingNumber && x.City == newOrderDto.Address.City);

                order.Adress = address;

                await _dbContext.Orders.AddAsync(order);
                await _dbContext.SaveChangesAsync();

                await _emailService.Send("kkurzeja321@gmail.com", "Namioty", "Rezerwacja namiotu została pomyślnie zakończona");
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

        public async Task<OrderDto> GetOrderById(int id)
        {
            try
            {
                var order = await _dbContext.Orders.Include(x=>x.Adress).FirstOrDefaultAsync(x => x.Id == id);

                if (order == null)
                    throw new ArgumentNullException(nameof(order));

                var orderDto = _mapper.Map<OrderDto>(order);

                return orderDto;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something goes wrong: {ex.Message}");
                throw new Exception(ex.Message, ex);
            }
        }

        public async Task<List<OrderDto>> GetOrders()
        {
            try
            {
                var orders = await _dbContext.Orders.Include(x=>x.Adress).ToListAsync();

                if (orders == null)
                    throw new ArgumentNullException(nameof(orders));

                var ordersDto = _mapper.Map <List<OrderDto>>(orders);

                return ordersDto;
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
                order.Adress = updateOrderDto.Address;
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
