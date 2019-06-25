import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; // to wire up redux-form in our app and we are renaming it as form reducer.
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
