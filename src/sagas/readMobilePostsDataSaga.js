import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

export default function* readMobilePostsDataSaga(action) {
  yield put(actions.readMobilePostsCacheAttempt());
  try {
    const response = yield call(api.mobilePostsRead);
    console.log('response', response);
    yield put(actions.readMobilePostsCacheSuccess(response));
  } catch (error) {
    yield put(actions.readMobilePostsCacheFail(error));
  }
}
