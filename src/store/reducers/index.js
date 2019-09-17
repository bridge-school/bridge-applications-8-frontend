import { combineReducers } from 'redux';
import cohorts from './cohortsReducer';
import cohort from './cohortReducer';

const rootReducer = combineReducers({
  cohorts,
  cohort
});

export default rootReducer;