import { createStore, combineReducers, applyMiddleware } from 'redux';
import userInfoReducer from './reducer/userInfoReducer';
import thunk from 'redux-thunk'

  const allReducers  =combineReducers({
    info:userInfoReducer,
  });

  export const store = createStore(allReducers,applyMiddleware(thunk));
