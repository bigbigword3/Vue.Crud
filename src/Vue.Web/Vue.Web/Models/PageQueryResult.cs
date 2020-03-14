using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vue.Web.Models
{
    public class PageQueryResult<T>
    {
        public int TotalCount { get; set; }

        public IList<T> Data { get; set; }
    }
}
