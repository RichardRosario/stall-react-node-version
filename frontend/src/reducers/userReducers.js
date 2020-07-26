import {
  USER_SIGNIN_REQUEST,
  USER_SIGN_SUCCESS,
  USER_SIGNIN_FAIL,
} from "../constants/userConstants";

function userReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return;

      break;

    default:
      break;
  }
}
