import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../Types/Types";

const initialState = {
  user: [],
  isloading: false,
  haserror: false,
  error: "",
};

const rootReducer = (State = initialState, actions) => {
  switch (actions.type) {
    case FETCH_REQUEST: {
      return {
        ...State,
        isloading: true,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...State,
        isloading: false,
        user: actions.payload,
      };
    }
    case FETCH_FAILURE: {
      return {
        ...State,
        isloading: false,
        haserror: true,
        error: actions.payload,
      };
    }
    default:
      return State;
  }
};

export default rootReducer;
