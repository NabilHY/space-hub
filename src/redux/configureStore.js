import { configureStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = configureStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
