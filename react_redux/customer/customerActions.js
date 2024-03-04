import { FETCH_USER_REQUEST } from "./customerTypes";
import { FETCH_USER_SUCCESS } from "./customerTypes";
import { FETCH_USER_FAILURE } from "./customerTypes";

function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUserSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    return axios
      .get("http://localhost:5000/customers")
      .then((res) => {
        dispatch(fetchUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err.message));
      });
  };
};
