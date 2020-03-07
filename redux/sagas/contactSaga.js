import { takeLatest, put, call } from 'redux-saga/effects';

import { FETCH_CONTACTS, UPDATE_CONTACTS } from '../actionTypes';
import { setContacts } from '../actions/contactsActions';
import { setError, setSuccess, setLoading } from '../actions/notificationActions';

function* fetchData() {
  try {
    yield put(setLoading(true));
    const response = yield call(axios.default.get, 'contacts');
    yield put(setLoading(false));
    yield put(setContacts(response.data));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
  }
}

function* updateData({ payload }) {
  try {
    yield put(setLoading(true));
    yield call(axios.default.post, 'contacts', payload);
    yield put(setLoading(false));
    yield put(setSuccess(true));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(true));
  }
}

export default function* watchFetchData() {
  yield takeLatest(FETCH_CONTACTS, fetchData);
  yield takeLatest(UPDATE_CONTACTS, updateData);
}
