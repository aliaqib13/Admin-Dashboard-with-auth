// import { setLoading } from "./auth";

import { enqueueSnackbar } from "notistack";
import API from "utiles/axios";

// Thunk action for login
export const GetAllUser = (limit, page) => {
  return async (dispatch) => {
    try {
      const response = await API.get(
        `/contacts?limit=${limit ? limit : 20}&page=${page ? page : 1}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error?.message, {
        variant: "error",
      });
    }
  };
};
