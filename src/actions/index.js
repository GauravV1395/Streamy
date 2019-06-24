import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = userId => {
  //userId is being passed as an argument from the component Googleauth to this action creater when it is called inside the component.
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
