import request from '@/utils/request'

export const getUserInfo = (data: any) =>
  request({
    url: '/mock-api/v1/users/info',
    method: 'post',
    data
  })

export const login = (data: any) =>
  request({
    url: '/users/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/mock-api/v1/users/logout',
    method: 'post'
  })
