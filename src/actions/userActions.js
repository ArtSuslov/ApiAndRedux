import axios from 'axios';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';
export const SEND_USERS_NAME = 'SEND_USERS_NAME';

export function getUsers() {
  return function(dispatch) {
    dispatch({
      type: GET_USERS_REQUEST,
    });
    axios.get('https://jsonplaceholder.typicode.com/users').then(r => {
      if(Array.isArray(r.data)) {
        const users = r.data;

        dispatch({
          type: GET_USERS_SUCCESS,
          payload: users,
        });
      } else {
        dispatch({
          type: GET_USERS_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4)
  }
}

export function sendUsersName (name) {
  return {
      type: SEND_USERS_NAME,
      payload: name,
  }
}
