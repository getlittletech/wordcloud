import { combineReducers } from 'redux'
import wordcloud from '../wordcloud/reducer';

const combinedReducer = combineReducers({
  wordcloud
});

export default combinedReducer;
