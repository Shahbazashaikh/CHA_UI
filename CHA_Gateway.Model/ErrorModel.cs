using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CHA_Gateway.Model
{
    public class ErrorModel<T> where T : class
    {
        public T ErrorMessage { get; set; }

        public int StatusCode { get; set; }
    }
}
