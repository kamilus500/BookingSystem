using BookingSystem.Service.Entities;
using BookingSystem.Service.Entities.Enums;
using Microsoft.EntityFrameworkCore;
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
                            FirstName = "Adam",
                            LastName = "Kowalski",
                            Password = "admin123",
                            UserName = "admin",
                            Role = RoleValue.Admin
                        },
                        new User()
                        {
                            FirstName = "Kamil",
                            LastName = "Kurzeja",
                            Password = "kamil123",
                            UserName = "kamilus500",
                            Role = RoleValue.User
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
                        }
                    };

                    _dbContext.Comments.AddRange(comments);
                    _dbContext.SaveChanges();
                }
            }
        }
    }
}
