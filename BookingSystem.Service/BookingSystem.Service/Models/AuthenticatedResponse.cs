﻿namespace BookingSystem.Service.Models
{
    public class AuthenticatedResponse
    {
        public string? Token { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
