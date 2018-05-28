import { ADD_CONTACT_TYPE } from './types';

let nextContactTypeId = 0;

export const addContactType = description => ({
  type: ADD_CONTACT_TYPE,
  id: nextContactTypeId++,
  description
});
