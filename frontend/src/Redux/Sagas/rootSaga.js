import {all} from "redux-saga/effects";

// List of Watchers
import { WatchSearch } from './Search';





export default function* rootSaga (){

  yield all([
    WatchSearch(),
  ])

}
