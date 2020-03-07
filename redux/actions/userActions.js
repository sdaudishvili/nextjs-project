import { SET_USER, SET_AUTH_ERR, AUTHENTICATE_USER, SIGN_OUT } from '../actionTypes';

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload
  };
};

export const setAuthError = (payload) => {
  return {
    type: SET_AUTH_ERR,
    payload
  };
};

export const authenticateUser = (payload) => {
  return {
    type: AUTHENTICATE_USER,
    payload
  };
};

export const signOut = (payload) => {
  return {
    type: SIGN_OUT,
    payload
  };
};
