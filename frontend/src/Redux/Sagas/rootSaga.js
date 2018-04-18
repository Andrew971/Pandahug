import {all} from "redux-saga/effects";

// List of Watchers
import { WatchSearch } from './Search';
import { WatchContact } from './Contact';





export default function* rootSaga (){

  yield all([
    WatchSearch(),
    WatchContact(),
  ])

}
