import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  SET_LOADING,
} from "./constants";
import API, { deleteToken, setToken } from "../../utiles/axios";
import { enqueueSnackbar } from "notistack";

export const setLoading = () => ({
  type: SET_LOADING,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

// Thunk action for login
export const login = (credentials) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await API.post("/auth/login", credentials);
      console.log(response.data);
      if (response) {
        setToken(response?.data?.tokens?.access?.token);
        const user = response;
        dispatch(loginSuccess(user));
        return response.data;
      } else {
        deleteToken();
      }
    } catch (error) {
      deleteToken();
      dispatch(loginFailure(error.response.data));
      enqueueSnackbar(error.response.data?.message, {
        variant: "error",
      });
    }
  };
};

// Action creators
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// Thunk action for registration
export const register = (userData) => {
  return async (dispatch) => {
    try {
      await API.post("/api/register", userData);
      dispatch(registerSuccess());
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };
};
