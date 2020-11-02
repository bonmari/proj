import request from '@/utils/request'

export const getArticles = (params: any) =>
  request({
    url: '/mock-api/v1/articles',
    method: 'get',
    params
  })
