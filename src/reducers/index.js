import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; // to wire up redux-form in our app and we are renaming it as form reducer.
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
