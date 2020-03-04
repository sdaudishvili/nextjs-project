import { SET_UPLOADED_IMAGE_FILENAME, SET_UPLOADED_IMAGE_ERROR } from '../actions/actionTypes'

const initialState = {
  filename: '',
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPLOADED_IMAGE_FILENAME: {
      return {
        filename: action.payload,
        error: ''
      }
    }
    case SET_UPLOADED_IMAGE_ERROR: {
      return {
        error: action.payload,
        filename: ''
      }
    }
    default:
      return state
  }
}

export default reducer
