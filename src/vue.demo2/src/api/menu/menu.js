import request from '@/utils/request'

export function listForRouter(params) {
    return request({
      url: '/api/menus/routerMenus',
      method: 'get',
      params
    })
  }