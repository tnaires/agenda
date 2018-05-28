import { ADD_CONTACT } from '../actions/types';

const contact = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        {
          id: action.id,
          personId: action.personId,
          contactTypeId: action.contactTypeId,
          contact: action.contact
        }
      ];
    default:
      return state;
  }
};

export default contact;
