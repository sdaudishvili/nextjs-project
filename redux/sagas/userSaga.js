import { takeLatest, call, put } from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';

import { setUser, setAuthError } from '../actions/userActions';
import { AUTHENTICATE_USER, SIGN_OUT } from '../actionTypes';

const cookies = new Cookies();

function* authenticateUser({ payload }) {
  try {
    const response = yield call(axios.post, 'auth/adminAuthenticate', payload);
    const { token } = response.data;
    cookies.set('testUser', token, { path: '/' });
    yield put(setUser(jwtDecode(token).email));
  } catch (error) {
    yield put(setAuthError(error.err));
  }
}

function* signOut() {
  cookies.remove('testUser', { path: '/' });
  yield put(setUser(''));
}
export default function* watchAuthUser() {
  yield takeLatest(AUTHENTICATE_USER, authenticateUser);
  yield takeLatest(SIGN_OUT, signOut);
}
