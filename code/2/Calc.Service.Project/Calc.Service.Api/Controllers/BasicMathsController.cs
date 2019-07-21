using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Calc.Service.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Calc.Service.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasicMathsController : ControllerBase
    {
        private readonly IMathService _mathService;

        public BasicMathsController(IMathService mathService)
        {
            _mathService = mathService ?? throw new ArgumentNullException(nameof(mathService));
        }

        [HttpGet]
        public string Hello()
        {
            return "Hello from BasicMathsController";
        }

        [HttpPost]
        public ActionResult<decimal> Post([FromBody] TwoNumbers model)
        {
            return _mathService.AddTwoDecimals(model.A, model.B);
        }
    }
}
