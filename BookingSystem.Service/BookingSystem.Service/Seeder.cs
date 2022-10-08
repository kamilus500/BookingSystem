using BookingSystem.Service.Entities;
using BookingSystem.Service.Entities.Enums;
using System.Collections.Generic;
using System.Linq;

namespace BookingSystem.Service
{
    public class Seeder
    {
        private readonly ApplicationDbContext _dbContext;
        public Seeder(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void SeedData()
        {
            if(_dbContext.Database.CanConnect())
            {
                //Tents
                if (!_dbContext.Tents.Any())
                {
                    var tents = new List<Tent>()
                    {
                        new Tent()
                        {
                            Size = Size.Small,
                            Cost = 589,
                        },
                        new Tent()
                        {
                            Size = Size.Medium,
                            Cost = 689,
                        },
                        new Tent()
                        {
                            Size = Size.Giga,
                            Cost = 879
                        }
                    };

                    _dbContext.Tents.AddRange(tents);
                    _dbContext.SaveChanges();
                }

                //Users
                if (!_dbContext.Users.Any())
                {
                    var users = new List<User>()
                    {
                        new User()
                        {
                            FirstName = "Kamil",
                            LastName = "Kurzeja"
                        },
                        new User()
                        {
                            FirstName = "Jakub",
                            LastName = "Róg"
                        },
                        new User()
                        {
                            FirstName = "Damian",
                            LastName = "Puś",
                        },
                        new User()
                        {
                            FirstName = "Emil",
                            LastName = "Knysak"
                        }
                    };

                    _dbContext.Users.AddRange(users);
                    _dbContext.SaveChanges();
                }

                //Comments
                if (!_dbContext.Comments.Any())
                {
                    var comments = new List<Comment>()
                    {
                        new Comment()
                        {
                            UserId = 1,
                            Grade = Grade.Five,
                            Message = "Good one"
                        },
                        new Comment()
                        {
                            UserId = 2,
                            Grade = Grade.Two,
                            Message = "Bad one"
                        },
                        new Comment()
                        {
                            UserId = 3,
                            Grade = Grade.Two,
                            Message = "Kurwa dobre"
                        },
                        new Comment()
                        {
                            UserId = 4,
                            Grade = Grade.Six,
                            Message = "Japierdole, orzygałem namiot"
                        }
                    };

                    _dbContext.Comments.AddRange(comments);
                    _dbContext.SaveChanges();
                }
            }
        }
    }
}
