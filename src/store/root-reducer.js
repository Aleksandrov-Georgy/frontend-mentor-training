import { combineReducers } from 'redux';

import { positionsReducer } from './positions/positions-reducers';
import { filterReducer } from './filters/filter-reducers';

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filterReducer,
});
