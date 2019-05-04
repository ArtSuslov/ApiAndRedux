import axios from 'axios';
import uuidv4 from 'uuid/v4'

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAIL = 'GET_USERS_FAIL'

export function getUsers() {
  return function(dispatch) {
    dispatch({
      type: GET_USERS_REQUEST
    });
    axios.get('https://jsonplaceholder.typicode.com/users').then(r => {
      if(Array.isArray(r.data)) {
        const users = r.data;
        users.forEach(el => (el.key = uuidv4()));

        dispatch({
          type: GET_USERS_SUCCESS,
          payload: users
        });
      } else {
        dispatch({
          type: GET_USERS_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации')
        })
      }
    }, 4)
  }
}
