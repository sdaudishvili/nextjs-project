import { SET_UPLOADED_IMAGE_FILENAME, SET_UPLOADED_IMAGE_ERROR } from './actionTypes'

export const setImageFileName = (payload) => {
  return {
    type: SET_UPLOADED_IMAGE_FILENAME,
    payload
  }
}

export const setImageError = (payload) => {
  return {
    type: SET_UPLOADED_IMAGE_ERROR,
    payload
  }
}

export const uploadImage = (data) => {
  const formData = new FormData()
  formData.append('image', data)
  return () => {
    return axios.default.post('upload', formData)
  }
}

export const cropImage = (data) => {
  return () => {
    return axios.default.post('upload/CropImage', data)
  }
}
