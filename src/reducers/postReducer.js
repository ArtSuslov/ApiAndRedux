import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from '../actions/postActions'

const initialState = {
  postsList: [],
  isFetching: false,
  error: ''
}

export function postReducer (state = initialState, action) {
  switch(action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, isFetching: true, error: ''}

    case GET_POSTS_SUCCESS:
      return { ...state, isFetching: false, postsList: action.payload}

    case GET_POSTS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state;
  }
}
