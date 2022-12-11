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
            }
        }
    }
}
