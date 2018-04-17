import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {SearchReducer} from './Modules/Search';
import {LanguageReducer} from './Modules/Language';


import rootSaga from './Sagas/rootSaga'


function createReducer(asyncReducers) {
  return combineReducers({
      Search:SearchReducer,
      Language:LanguageReducer,
      ...asyncReducers
  });
}


export default function configureStore(initialState = {}) {
  // Create the store with thunk middleware
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware];

  const enhancers = [
      applyMiddleware(...middlewares),
  ];

  const store = createStore(
      createReducer(),
      initialState,
      compose(...enhancers)
  );
  sagaMiddleware.run(rootSaga)

  // Initialize it with no other reducers
  store.asyncReducers = {data:'try'};
  return store;
}
