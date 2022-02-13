using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using CHA_Gateway.Model.RequestModel;
using Newtonsoft.Json;
using CHA_Gateway.Model.ExceptionModel;

namespace CHA_Gateway.Service
{
    public class HttpService : IHttpService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public HttpService(IHttpClientFactory httpClientFactory,
                           IHttpContextAccessor httpContextAccessor)
        {
            _httpClientFactory = httpClientFactory;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<string> SendRequestAsync(BaseHttpRequestModel requestModel, string url)
        {
            string response = string.Empty;
            try
            {
                using (HttpRequestMessage requestMessage = new HttpRequestMessage(requestModel.httpMethod, url))
                {
                    AddRequestHeader(requestMessage);
                    if (requestModel.shouldAppendRequestBody)
                        requestMessage.Content = new StringContent(JsonConvert.SerializeObject(requestModel), Encoding.UTF8, "application/json");
                    using (HttpClient httpClient = _httpClientFactory.CreateClient())
                    {
                        HttpResponseMessage responseMessage = await httpClient.SendAsync(requestMessage);
                        if (responseMessage.IsSuccessStatusCode)
                        {
                            response = await responseMessage.Content.ReadAsStringAsync();
                        }
                        else
                        {
                            throw new UnhandledException(responseMessage.ReasonPhrase, "HttpService", "SendRequestAsync", requestModel, (int)responseMessage.StatusCode);
                        }
                    }
                }
                return response;
            }
            catch (Exception ex)
            {
                throw new UnhandledException(ex.Message, ex.InnerException, "HttpService", "SendRequestAsync", requestModel);
            }
        }

        private void AddRequestHeader(HttpRequestMessage requestMessage)
        {
            requestMessage.Headers.Add("Accept", "application/json");
            requestMessage.Headers.Add("User-Agent", "CHAGateway");
           // requestMessage.Headers.Add("Authorization", _httpContextAccessor.HttpContext.Request.Headers["Authorization"].ToString());
        }
    }
}
