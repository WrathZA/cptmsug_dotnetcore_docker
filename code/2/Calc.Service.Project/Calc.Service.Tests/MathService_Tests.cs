using System;
using Xunit;

namespace Calc.Service.Tests
{
    public class MathService_Tests
    {
        private readonly IMathService mathService;

        public MathService_Tests()
        {
            mathService = new MathService();
        }

        [Fact]
        public void AddingTwoDecimalsShouldAddCorrectly()
        {
            var result = mathService.AddTwoDecimals(1.0m, 2.5m);
            Assert.True(3.5m == result);
        }
    }
}
