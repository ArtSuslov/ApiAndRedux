import axios from 'axios';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'

export function getPosts(userId) {
  return function(dispatch) {
    dispatch({
      type: GET_POSTS_REQUEST
    });
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(r => {
      if(Array.isArray(r.data)) {
        const posts = r.data;

        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: posts
        });
      } else {
        dispatch({
          type: GET_POSTS_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации')
        })
      }
    }, 4)
  }
}
