import { combineReducers } from 'redux';

import contactTypes from './contactTypes';
import people from './people';
import contacts from './contacts';

export default combineReducers({
  contactTypes,
  people,
  contacts
});
