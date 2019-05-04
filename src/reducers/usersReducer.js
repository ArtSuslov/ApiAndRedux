import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from '../actions/pageActions'

export const initialState = {
  users: [],
  isFetching: false,
  error: ''
}

export function usersReducer (state = initialState, action) {
  switch(action.type) {
    case GET_USERS_REQUEST:
      return { ...state, isFetching: true, error: ''}

    case GET_USERS_SUCCESS:
      return { ...state, isFetching: false, users: action.payload}

    case GET_USERS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state;
  }
}
