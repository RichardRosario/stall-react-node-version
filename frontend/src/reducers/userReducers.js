import {
  USER_SIGNIN_REQUEST,
  USER_SIGN_SUCCESS,
  USER_SIGNIN_FAIL,
} from "../constants/userConstants";

function userReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export { userReducer };