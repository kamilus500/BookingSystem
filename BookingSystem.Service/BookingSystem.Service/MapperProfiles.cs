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
                .ForMember(x => x.Name, src => src.MapFrom(y => string.Format("{0} {1}", y.User.FirstName, y.User.LastName)));

            CreateMap<CommentDto, Comment>();

            CreateMap<UserRegistrationDto, User>();

            CreateMap<UserLoginDto, User>();
        }
    }
}
