import { ADD_CONTACT } from './types';

let nextContactId = 0;

export const addContact = (personId, contactTypeId, contact) => ({
  type: ADD_CONTACT,
  id: nextContactId++,
  personId,
  contactTypeId,
  contact
});
