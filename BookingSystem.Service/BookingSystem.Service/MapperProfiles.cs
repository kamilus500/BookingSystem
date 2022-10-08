using AutoMapper;
using BookingSystem.Service.Dtos;
using BookingSystem.Service.Entities;

namespace BookingSystem.Service
{
    public class MapperProfiles : Profile
    {
        public MapperProfiles()
        {
            CreateMap<Order, OrderDto>()
                .ReverseMap();

            CreateMap<Tent, TentDto>()
                .ReverseMap();

            CreateMap<Comment, CommentDto>()
                .ReverseMap();
        }
    }
}
