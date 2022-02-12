using System.Net.Http;

namespace CHA_Gateway.Model.RequestModel
{
    public class AuthenticationRequest : BaseHttpRequestModel
    {
        public string UserName { get; set; }

        public string Password { get; set; }

        public AuthenticationRequest()
        {
            this.httpMethod = HttpMethod.Post;
            this.shouldAppendRequestBody = true;
        }
    }
}
