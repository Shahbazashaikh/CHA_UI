using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using CHA_Gateway.Service;
using CHA_Gateway.Model.RequestModel;

namespace CHA_Gateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("AuthenticateUser")]
        public async Task<IActionResult> AuthenticateUser(AuthenticationRequest authenticationRequest)
        {
            return Ok(await _userService.AuthenticateUser(authenticationRequest));
        }
    }
}
