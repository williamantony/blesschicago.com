export const SET_CONTACT_INPUT = 'SET_CONTACT_INPUT';

export const setContactInput = (name, value) => {
  return {
    type: SET_CONTACT_INPUT,
    payload: {
      [name]: value,
    },
  };
};
