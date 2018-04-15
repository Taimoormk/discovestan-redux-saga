import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

export default function* fetchPostsDataSaga(action) {
  yield put(actions.fetchPostsCacheAttempt());
  try {
    yield call(api.dataFetch);
    yield put(actions.fetchPostsCacheSuccess());
  } catch (error) {
    yield put(actions.fetchPostsCacheFail(error));
  }
}
