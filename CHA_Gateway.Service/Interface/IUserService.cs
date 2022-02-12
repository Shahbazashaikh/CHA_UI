using System.Threading.Tasks;
using CHA_Gateway.Model;
using CHA_Gateway.Model.RequestModel;

namespace CHA_Gateway.Service
{
    public interface IUserService
    {
        Task<ResponseModel<string>> AuthenticateUser(AuthenticationRequest authenticationRequest);
    }
}
