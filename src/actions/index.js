import {
  GET_DATA_REQUEST_WAS_RECIEVED,
  GET_DATA_REQUEST_ERROR,
  GET_DATA_ITEM_REQUEST_WAS_RECIEVED
} from "./types.js";
import { isArray } from "lodash";

export const getData = login => async dispatch => {
  const URL = "https://api.github.com/users";
  const ITEM_URL = `https://api.github.com/users/${login}`;
  await fetch(login ? ITEM_URL : URL)
    .then(response => response.json())
    .then(response => {
      if (!login) {
        dispatch({
          type: isArray(response) ? GET_DATA_REQUEST_WAS_RECIEVED : GET_DATA_REQUEST_ERROR,
          payload: response
        });
      } else {
        dispatch({
          type: GET_DATA_ITEM_REQUEST_WAS_RECIEVED,
          payload: response
        });
      }
    })
    .catch(err => {
      dispatch({ type: GET_DATA_REQUEST_ERROR });
    });
};
