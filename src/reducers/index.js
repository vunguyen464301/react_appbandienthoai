import { combineReducers } from 'redux';

import dialog from './dialog';
import companys from './companys';
import phones from './phones';
import selectedPhone from './selectedPhone';
const todoApp = combineReducers({
  companys,
  dialog,
  phones,
  selectedPhone
});

export default todoApp;
