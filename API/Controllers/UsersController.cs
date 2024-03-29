using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  [Authorize]
  public class UsersController : BaseApiController
  {
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    public UsersController(IUserRepository userRepository, IMapper mapper)
    {
      _mapper = mapper;
      _userRepository = userRepository;
    }

    [HttpGet]
    // [AllowAnonymous]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
      return Ok(await _userRepository.GetMembersAsync());
    }

    [HttpGet("{username}")]
    // [Authorize]
    public async Task<ActionResult<MemberDto>> GetUser(string username)
    {
      return Ok(await _userRepository.GetMemberAsync(username));
    }
  }
}