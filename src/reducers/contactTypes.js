import { ADD_CONTACT_TYPE } from '../actions/types';

const contactType = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT_TYPE:
      return [
        ...state,
        {
          id: action.id,
          description: action.description
        }
      ];
    default:
      return state;
  }
};

export default contactType;
