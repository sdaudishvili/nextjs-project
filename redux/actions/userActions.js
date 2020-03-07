import Cookies from 'universal-cookie';
import { SET_USER, SET_AUTH_ERR, AUTHENTICATE_USER } from '../actionTypes';

const cookies = new Cookies();

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

export const signOut = () => {
  return (dispatch) => {
    cookies.remove('testUser', { path: '/' });
    dispatch(setUser(''));
  };
};
