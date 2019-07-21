using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NorthWind.Data.Entities;

namespace Northwind.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        private readonly NorthwindDbContext _db;

        public CustomerController(NorthwindDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public ActionResult<List<Customers>> Get()
        {
            return Ok(this._db.Customers.ToList());
        }

        [HttpGet("{id}")]
        public ActionResult<Customers> Get(string id)
        {
            return Ok(this._db.Customers.SingleOrDefault(x=> x.CustomerId == id));
        }
    }
}
