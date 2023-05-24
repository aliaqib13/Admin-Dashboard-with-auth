import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  SET_LOADING,
} from "Redux/actions/constants";
import { deleteToken } from "utiles/axios";

const initialState = {
  isLogin: false,
  token: null,
  user: {},
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        token: action.payload?.tokens?.access?.token,
        user: action.payload?.user,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      deleteToken();
      return {
        ...state,
        isLogin: false,
        token: null,

        user: null,
        error: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
