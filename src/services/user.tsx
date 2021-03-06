import request from '@/utils/request';

export async function register(data: {
  email: string,
  head: number,
  // id: number,
  manager: number,
  nickname: string,
  password: string,
}) {
  return request('/api/user/register', {
    method: 'POST',
    data
  });
}

export async function login(data: {
  email: string,
  password: string,
}) {
  return request('/api/user/login', {
    method: 'POST',
    data
  });
}

export async function update(data: {
  email: string,
  head: number,
  nickname: string,
  password: string,
}) {
  return request('/api/user/update', {
    method: 'POST',
    data
  });
}

export async function getMessage(params: any) {
  return request(`/api/user/message`, {
    method: 'GET',
    params
  })
}

export async function upload(data: any) {
  return request(`/api/classSortMessage`, {
    method: 'POST',
    data
  })
}

export async function getclassSortMessage(params: any) {
  return request(`/api/classSortMessage`, {
    method: 'GET',
    params
  })
}