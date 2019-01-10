import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rootReducer from 'redux/reducers';
import { loadState, saveState } from 'redux/localStorage';

const persistedState = loadState();

const store = createStore(
  combineReducers({
    todos: rootReducer,
    router: routerReducer,
  }),
  persistedState,
);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});

export default store;
