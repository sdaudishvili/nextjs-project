import { takeLatest, put, call } from 'redux-saga/effects';

import { FETCH_ABOUT, UPDATE_ABOUT } from '../actionTypes';
import { setError, setSuccess, setLoading } from '../actions/notificationActions';
import { setAbout } from '../actions/aboutActions';

function* fetchData() {
  try {
    yield put(setLoading(true));
    const response = yield call(axios.default.get, 'about');
    yield put(setLoading(false));
    yield put(setAbout(response.data));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
  }
}

function* updateData({ payload }) {
  try {
    yield put(setLoading(true));
    yield call(axios.default.post, 'about', payload);
    yield put(setLoading(false));
    yield put(setSuccess(true));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(true));
  }
  yield put(setError(false));
  yield put(setSuccess(false));
}

export default function* watchAbout() {
  yield takeLatest(FETCH_ABOUT, fetchData);
  yield takeLatest(UPDATE_ABOUT, updateData);
}
