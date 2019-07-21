using System;
using System.Collections.Generic;
using System.Text;

namespace Calc.Service
{
    public class MathService : IMathService
    {
        public decimal AddTwoDecimals(decimal a, decimal b)
        {
            return a + b;
        }
    }
}
