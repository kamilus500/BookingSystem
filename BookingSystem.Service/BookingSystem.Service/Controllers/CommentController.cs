using BookingSystem.Service.Entities;
using BookingSystem.Service.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
        // GET: api/<CommentController>
        [HttpGet]
        public ActionResult<List<Comment>> Get()
        {
            var comments = _commentService.GetAll().Result;

            if (comments == null)
                return NotFound();

            return Ok(comments);
        }

        // GET api/<CommentController>/5
        [HttpGet("{id}")]
        public ActionResult<Comment> Get(int id)
        {
            var comment = _commentService.GetById(id).Result;

            if (comment == null)
                return NotFound();

            return Ok(comment);
        }

        // POST api/<CommentController>
        [HttpPost]
        public ActionResult Post([FromBody] Comment comment)
        {
            if (comment == null)
                return BadRequest("Comment is null");

            _commentService.Create(comment);

            return Ok();
        }        

        // DELETE api/<CommentController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            if (id == 0)
                return BadRequest("Id is 0");

            _commentService.Delete(id);

            return Ok();
        }
    }
}
