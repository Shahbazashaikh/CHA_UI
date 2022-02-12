using System.Threading.Tasks;
using CHA_Gateway.Model.RequestModel;

namespace CHA_Gateway.Service
{
    public interface IHttpService
    {
        Task<string> SendRequestAsync(BaseHttpRequestModel requestModel, string url);
    }
}
