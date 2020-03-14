using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vue.Web.Models
{
    public class ProductRepository
    {
        private static ProductRepository _productRepository;
        private static List<Product> Products;
        public static ProductRepository Instance
        {
            get
            {
                if (_productRepository == null)
                {

                    Products = new List<Product>();
                    IntitData();
                    _productRepository = new ProductRepository();
                }
                return _productRepository;
            }
        }

        private static void IntitData()
        {
            for (int i = 0; i < 200; i++)
            {
                Products.Add(new Product { Id = DateTime.Now.ToFileTime() + Guid.NewGuid().ToString(), Name = $"{i}高级产品" });
            }
        }

        public PageQueryResult<Product> FindPageList(ProductQueryCriteria productQueryCriteria)
        {
            var pageSize = productQueryCriteria.PageSize;
            var name = productQueryCriteria.Name;
            var data = Products.Where(p => string.IsNullOrEmpty(name) ? true : p.Name.Contains(name)).OrderByDescending(p => p.Id).Skip((productQueryCriteria.PageIndex - 1) * pageSize)
            .Take(pageSize)
            .ToList();
            return new PageQueryResult<Product> { TotalCount = Products.Count, Data = data };
        }

        public void Delete(List<string> ids)
        {
            Products.RemoveAll(p => ids.Contains(p.Id));
            if (Products.Count == 0)
            {
                IntitData();
            }
        }

        public Product Get(string id)
        {
            return Products.Where(p => p.Id == id).SingleOrDefault();
        }

        public void Create(Product product)
        {
            product.Id = DateTime.Now.ToFileTime().ToString();
            Products.Add(product);
        }

        public void Modfify(Product product)
        {
            var productDomain = Products.Where(p => p.Id == product.Id).SingleOrDefault();
            productDomain.Name = product.Name;
        }
    }
}
