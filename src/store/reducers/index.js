import { combineReducers } from 'redux';
import cohorts from './cohortsReducer';

const rootReducer = combineReducers({
  cohorts
});

export default rootReducer;