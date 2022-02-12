﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CHA_Gateway.Model
{
    public class ResponseModel<T> where T : class
    {
        public T Data { get; set; }

        public bool IsSuccessful { get; set; }

        public ErrorModel<string> ErrorDetails { get; set; }
    }
}
