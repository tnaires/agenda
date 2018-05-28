import { ADD_PERSON } from '../actions/types';

const person = (state = [], action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];
    default:
      return state;
  }
};

export default person;
