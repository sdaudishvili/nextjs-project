import { SET_ERROR, SET_SUCCESS, SET_LOADING } from '../actionTypes';

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload
  };
};
export const setSuccess = (payload) => {
  return {
    type: SET_SUCCESS,
    payload
  };
};
export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload
  };
};
