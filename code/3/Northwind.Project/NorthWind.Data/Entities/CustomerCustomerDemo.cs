﻿using System;
using System.Collections.Generic;

namespace NorthWind.Data.Entities
{
    public partial class CustomerCustomerDemo
    {
        public string CustomerId { get; set; }
        public string CustomerTypeId { get; set; }

        public Customers Customer { get; set; }
        public CustomerDemographics CustomerType { get; set; }
    }
}
