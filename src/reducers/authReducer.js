import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  // here we are defaulting the value of the state argument of the reducer to INITIAL_STATE. we are using the object because we have multiple properties to deliver other than isSignedIn.
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
