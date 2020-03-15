using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Vue.Web.Models;

namespace Vue.Web.Controllers
{
    [Route("api/menus")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        /// <summary>
        /// 获取路由菜单
        /// </summary>
        /// <returns></returns>
        [HttpGet("routerMenus")]
        public IActionResult GetRouterMenus()
        {
            var routerMenus = new List<RouterMenu>();

            routerMenus.Add(new RouterMenu
            {
                Path = "/",
                Component = "layout",
                ID = 1,
                Code="01",
              
                Meta=new MenuMeta
                {
                    Title="后台返回的菜单", Icon= "el-icon-s-platform"
                },
                Children=new List<RouterMenu>
                {
                    new RouterMenu
                    {
                         Path="merchandise_list",
                         Name="merchandise_list",
                         Component="views/merchandise/merchandise_list",
                         ParentId=1,
                         Code="01_01",
                         PCode="01",
                         Meta=new MenuMeta
                         {
                             Title="商品管理_后台", Icon= "el-icon-share"
                         }
                    },
                     new RouterMenu
                    {
                         Path="/merchandise/category",
                         Name="merchandise_category",
                         Component="views/merchandise/merchandise_category",
                         ParentId=1,
                         Code="01_02",
                         PCode="01",
                         Meta=new MenuMeta
                         {
                             Title="商品分类_后台", Icon= "el-icon-s-custom"
                         }
                    },
                }
            });
            return Ok(routerMenus);
        }
    }
}