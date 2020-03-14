using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vue.Web.Models
{
    public class ProductQueryCriteria
    {
        public int PageIndex { get; set; }

        public int PageSize { get; set; }

        public string Name { get; set; }
    }
}
