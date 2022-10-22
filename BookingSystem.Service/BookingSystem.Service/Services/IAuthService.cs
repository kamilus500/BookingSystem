namespace BookingSystem.Service.Services
{
    public interface IAuthService
    {
        public string GenerateToken(string login, string role);
    }
}
