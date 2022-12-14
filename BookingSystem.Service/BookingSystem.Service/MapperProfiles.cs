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
                .ForMember(x => x.OrderId, src => src.MapFrom(x => x.Id))
                .ReverseMap();

            CreateMap<Tent, TentDto>()
                .ReverseMap();

            CreateMap<Comment, CommentDto>()
                .ForMember(x => x.Name, src => src.MapFrom(y => string.Format("{0} {1}", y.User.FirstName, y.User.LastName)))
                .ForMember(x => x.CommentId, src => src.MapFrom(y => y.Id));

            CreateMap<CommentDto, Comment>();

            CreateMap<UserRegistrationDto, User>();

            CreateMap<UserLoginDto, User>();
        }
    }
}
