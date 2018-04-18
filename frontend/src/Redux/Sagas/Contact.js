import {takeLatest,all, call} from "redux-saga/effects";
import axios from "axios";
import {contact} from "../../js/api";


export function* ContactApi(action) {
  try {
    yield call(axios.post, contact, action.payload);
  } catch (e) {
    console.log('error network');
  }
}


export function* WatchContact() {
  yield all([
    takeLatest("SEND_CONTACT_INFO", ContactApi)
  ]);
}
