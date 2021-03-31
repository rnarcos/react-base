import { combineReducers, createStore } from 'redux';
import { reducers as coreReducers } from './core';

const reducers = combineReducers({
  ...coreReducers,
});

const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development' &&
    window?.__REDUX_DEVTOOLS_EXTENSION__?.(),
);

export default store;
