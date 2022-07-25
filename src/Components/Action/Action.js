import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../../Components/Types/Types";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};
export const fetchFailure = (msg) => {
  return {
    type: FETCH_FAILURE,
    payload: msg,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await res.json();
      dispatch(fetchSuccess(response));
    } catch (error) {
      dispatch(fetchFailure(error.message));
    }
  };
};





