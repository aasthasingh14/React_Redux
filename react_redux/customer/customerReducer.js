import { FETCH_USER_REQUEST , FETCH_USER_FAILURE , FETCH_USER_SUCCESS } from "./customerTypes";

const intialstate ={
    loading:false,
    users:[] , 
    error:'',


}

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USER_SUCCESS:
        return {
          loading: false,
          user: action.payload,
          error: "",
        };
      case FETCH_USER_FAILURE:
        return {
          loading: false,
          user: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };