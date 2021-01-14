//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import { reducer as playerReducer } from '../pages/player/store';
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store';

const cReducer = combineReducers({
  player: playerReducer,
  recommend: recommendReducer,
  ranking: rankingReducer
});

export default cReducer;
