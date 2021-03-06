import request from '@/utils/request';

//  插入
export function insertVideo(body: any) {
  return request(`/api/video/insert`, {
    method: 'POST',
    body
  })
}
//  查询
export function selectVideo(id: any) {
  return request(`/api/video/selectVideo/${id}`, {
    method: 'POST',
  })
}
//  删除
export function deleteVideo(body: any) {
  return request(`/api/video/delVideo`, {
    method: 'POST',
    body
  })
}
// 文件下载
// file / downloadFile
/**
 * {
    "address": "/home/file/b8254f789580425e9ced748f8a207710.psd",
    "classId": 0,
    "id": 0,
    "name": "模板123.psd",
    "uuid": ""
}
 */

export function downloadFile(body: any) {
  return request(`/api/file/downloadFile`, {
    method: 'POST',
    body
  })
}
