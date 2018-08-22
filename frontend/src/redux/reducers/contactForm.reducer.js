import {
  SET_CONTACT_INPUT,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SET_CONTACT_INPUT:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
