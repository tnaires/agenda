import { ADD_PERSON } from './types';

let nextPersonId = 0;

export const addPerson = name => ({
  type: ADD_PERSON,
  id: nextPersonId++,
  name
});
