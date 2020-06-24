import { SET_UPLOADED_IMAGE_FILENAME, SET_UPLOADED_IMAGE_ERROR, UPLOAD_IMAGE } from '../actionTypes';

export const setImageFileName = (payload) => {
  return {
    type: SET_UPLOADED_IMAGE_FILENAME,
    payload
  };
};

export const setImageError = (payload) => {
  return {
    type: SET_UPLOADED_IMAGE_ERROR,
    payload
  };
};

export const uploadImage = (payload) => {
  return {
    type: UPLOAD_IMAGE,
    payload
  };
};
