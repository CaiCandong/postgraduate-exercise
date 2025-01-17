import request from './common/request';

// const BASE_URL = 'https://www.jessi.club:8000/note';
const BASE_URL = 'http://localhost:4000/api/v1/note';
// 为某题添加或更新笔记
export function addNote (data) {
    return request(`${BASE_URL}/addNote`, {
        method: 'POST',
        data
    })
}

//获取用户某科目下的所有笔记
export function getSubjectNotes (data) {
    return request(`${BASE_URL}/getSubjectNotes`, {
        method: 'GET',
        data
    });
}

// 获取用户的笔记
export function getNote (data) {
    return request(`${BASE_URL}/getNote`, {
        method: 'GET',
        data
    })
}

//删除用户的笔记
export function deleteNote(data){
    return request(`${BASE_URL}/deleteNote`,{
        method: 'POST',
        data
    })
}
