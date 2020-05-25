import {
  GET_DATA_REQUEST_WAS_RECIEVED,
  GET_DATA_REQUEST_ERROR,
  GET_DATA_ITEM_REQUEST_WAS_RECIEVED
} from "../actions/types";

const INITIAL_STATE = {
  data: [],
  dataError: false,
  dataItem: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST_WAS_RECIEVED: {
      return {
        ...state,
        data: payload
      };
    }
    case GET_DATA_ITEM_REQUEST_WAS_RECIEVED: {
      return {
        ...state,
        dataItem: payload
      };
    }
    case GET_DATA_REQUEST_ERROR: {
      return {
        ...state,
        dataError: true
      };
    }
    default:
      return state;
  }
};
