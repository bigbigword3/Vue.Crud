using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Vue.Web.Models;

namespace Vue.Web.Controllers
{
    [Route("api/products")]
    [ApiController]
    [Authorize]
    public class ProductController : ControllerBase
    {
        /// <summary>
        /// 分页列表
        /// </summary>
        /// <param name="productQueryCriteria"></param>
        /// <returns></returns>
        [HttpPost("pageList")]
        public IActionResult GetPageList([FromBody]  ProductQueryCriteria productQueryCriteria)
        {
            var result = ProductRepository.Instance.FindPageList(productQueryCriteria);
            return Ok(result);
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        [HttpDelete("")]
        public IActionResult Remove([FromBody] List<string> ids)
        {
            ProductRepository.Instance.Delete(ids);
            return Ok(true);
        }

        /// <summary>
        /// 详情
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult Get([FromRoute] string id)
        {
            var product = ProductRepository.Instance.Get(id);
            return Ok(product);
        }

        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpPut("")]
        public IActionResult Modify([FromBody] Product product)
        {
            ProductRepository.Instance.Modfify(product);
            return Ok(true);
        }

        /// <summary>
        /// 新增
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        [HttpPost("")]
        public IActionResult Create([FromBody] Product product)
        {
            ProductRepository.Instance.Create(product);
            return Ok(true);
        }
    }
}
