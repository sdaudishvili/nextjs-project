import { all } from 'redux-saga/effects';

import watchAuthUser from './sagas/userSaga';
import watchContacts from './sagas/contactSaga';
import watchAbout from './sagas/aboutSaga';

export default function* rootSaga(payload) {
    yield all([watchContacts(payload), watchAuthUser(payload), watchAbout(payload)]);
}
