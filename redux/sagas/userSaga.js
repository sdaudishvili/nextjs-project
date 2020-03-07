import { takeLatest, call, put } from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';

import { setUser, setAuthError } from '../actions/userActions';
import { AUTHENTICATE_USER } from '../actionTypes';
import apifetch from '../../plugins/apifetch';

const cookies = new Cookies();

function* authenticateUser({ payload }) {
  try {
    const response = yield call(apifetch, 'auth/adminAuthenticate', 'POST', payload);
    const { token } = response;
    cookies.set('testUser', token, { path: '/' });
    yield put(setUser(jwtDecode(token).email));
  } catch (error) {
    yield put(setAuthError(error.err));
  }
}
export default function* watchAuthUser() {
  yield takeLatest(AUTHENTICATE_USER, authenticateUser);
}