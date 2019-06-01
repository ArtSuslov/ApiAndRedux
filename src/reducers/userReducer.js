import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL, SEND_USERS_NAME } from '../actions/userActions'

const initialState = {
  usersList: [],
  isFetching: false,
  error: '',
  usersName: '',
}

export function userReducer (state = initialState, action) {
  switch(action.type) {
    case GET_USERS_REQUEST:
      return { ...state, isFetching: true, error: ''};

    case GET_USERS_SUCCESS:
      return { ...state, isFetching: false, usersList: action.payload};

    case GET_USERS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    case SEND_USERS_NAME:
      return {...state, usersName: action.payload}

    default:
      return state;
  }
}
