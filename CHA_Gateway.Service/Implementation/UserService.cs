using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CHA_Gateway.Model;
using CHA_Gateway.Model.RequestModel;
using CHA_Gateway.Model.ExceptionModel;
using Microsoft.Extensions.Options;

namespace CHA_Gateway.Service
{
    public class UserService : IUserService
    {
        private readonly IHttpService _httpService;
        private readonly AppSettings _appSettings;

        public UserService(IHttpService httpService,
                           IOptions<AppSettings> appSettings)
        {
            _httpService = httpService;
            _appSettings = appSettings.Value;
        }

        public async Task<ResponseModel<string>> AuthenticateUser(AuthenticationRequest authenticationRequest)
        {
            try
            {
                ResponseModel<string> response = new ResponseModel<string>();
                string authenicateUserUrl = _appSettings.CHA_API + "User/AuthenticateUser";
                string result = await _httpService.SendRequestAsync(authenticationRequest, authenicateUserUrl);
                response.Data = !string.IsNullOrEmpty(result) ? result : "";
                response.IsSuccessful = !string.IsNullOrEmpty(result);
                return response;
            }
            catch (Exception ex)
            {
                throw new UnhandledException(ex.Message, ex.InnerException, "UserService", "AuthenticateUser", authenticationRequest);
            }
        }
    }
}
