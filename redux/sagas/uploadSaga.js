import { takeLatest, put, call } from 'redux-saga/effects';

import { UPLOAD_IMAGE } from '../actionTypes';
import { setError, setSuccess, setLoading } from '../actions/notificationActions';

function* uploadImage(data) {
    try {
        yield put(setLoading(true));
        const response = yield call(axios.post, 'upload', data.payload.file);
        data.payload.getResponse(response);
        yield put(setSuccess(true));
    } catch (error) {
        yield put(setError(true));
        throw error;
    }
    yield put(setLoading(false));
    yield put(setError(false));
    yield put(setSuccess(false));
}

export default function* watchContacts() {
    yield takeLatest(UPLOAD_IMAGE, uploadImage);
}
