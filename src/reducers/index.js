import { combineReducers } from 'redux';

import app from './app';
import user from './user';
import forms from './forms';

const rootReducer = combineReducers({
  app,
  user,
  forms
});

export default rootReducer;
