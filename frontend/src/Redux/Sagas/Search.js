import {takeLatest,all, call,put} from "redux-saga/effects";
import axios from "axios";
import {search} from "../../js/api";


export function* SearchApi(action) {
  try {
    const res = yield call(axios.post, search, action.payload);
    yield put({type:'SEARCH_RESULT', payload:res.data})
  } catch (e) {
    console.log('error network');
  }
}


export function* WatchSearch() {
  yield all([
    takeLatest("CHANGE_DATE", SearchApi)
  ]);
}
