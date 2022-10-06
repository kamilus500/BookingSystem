using Xunit;

namespace BookingSystem.UnitTests.ServicesTests
{
    public class TentServiceTests
    {
        
        //To nie są prawdziwe testy tylko podstawa zrobiona
        [Fact]
        public void Get_All_Tents()
        {
            Assert.Equal(1, 1);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(3)]
        public void Get_One_Tent(int id)
        {
            Assert.Equal(1, 1);
        }
    }
}
