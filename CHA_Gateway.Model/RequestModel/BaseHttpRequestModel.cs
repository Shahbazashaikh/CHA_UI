using Newtonsoft.Json;
using System.Net.Http;

namespace CHA_Gateway.Model.RequestModel
{
    public class BaseHttpRequestModel
    {
        [JsonIgnore]
        public HttpMethod httpMethod { get; set; } = HttpMethod.Get;

        [JsonIgnore]
        public bool shouldAppendRequestBody { get; set; } = false;
    }
}
