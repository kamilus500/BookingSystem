using BookingSystem.Service.Dtos;
using BookingSystem.Service.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BookingSystem.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;
        public CommentController(ICommentService commentService)
        {
            _commentService = commentService;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var comments = await _commentService.GetAll();

            if (comments == null)
                return NotFound();

            return Ok(comments);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var comment = await _commentService.GetById(id);

            if (comment == null)
                return NotFound();

            return Ok(comment);
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CommentDto comment)
        {
            if (comment == null)
                return BadRequest("Comment is null");

            await _commentService.Create(comment);

            return Ok();
        }        

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            if (id == 0)
                return BadRequest("Id is 0");

            await _commentService.Delete(id);

            return Ok();
        }
    }
}
