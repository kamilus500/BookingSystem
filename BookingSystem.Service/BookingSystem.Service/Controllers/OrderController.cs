using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities.Enums;
using BookingSystem.Service.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookingSystem.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var order = await _orderService.GetOrders();

            if (order == null)
                return NotFound();

            return Ok(order);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById([FromRoute] int id)
        {
            var orders = await _orderService.GetOrderById(id);

            if (orders == null)
                return NotFound();

            return Ok(orders);
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] OrderDto orderDto)
        {
            if(orderDto == null)
                return BadRequest("Order is empty");

            await _orderService.Create(orderDto);

            return Ok();
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] OrderDto orderDto)
        {
            if (orderDto == null)
                return BadRequest("Order is empty");

            await _orderService.Update(id,orderDto);

            return Ok();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("finish/{id}")]
        public async Task<ActionResult> FinishOrder(int id)
        {
            if (id == 0)
                return BadRequest("Order is 0");

            await _orderService.EndReservation(id);

            return Ok();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("accept/{id}")]
        public async Task<ActionResult> AcceptOrder([FromRoute] int id)
        {
            if (id == 0)
                return BadRequest("Order is 0");

            await _orderService.AcceptOrder(id);

            return Ok();
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            if (id == 0)
                return BadRequest("Id is 0");

            await _orderService.Delete(id);

            return Ok();
        }
    }
}
