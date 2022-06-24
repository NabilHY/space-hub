import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
