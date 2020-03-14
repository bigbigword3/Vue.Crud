import request from '@/utils/request'

export function getProductPageList(params) {
  return request({
    url: '/api/products/pageList',
    method: 'post',
    data: params
  })
}


export function getProduct(id) {
    return request({
      url: `/api/products/${id}`,
      method: 'get'
    })
  }

  
export function createProduct(product) {
    return request({
      url: '/api/products',
      method: 'post',
      data: product
    })
  }

export function modifyProduct(product) {
    return request({
      url: '/api/products',
      method: 'put',
      data: product
    })
  }
    
export function removeProduct(ids) {
  return request({
    url: '/api/products',
    method: 'delete',
    data: ids
  })
}
