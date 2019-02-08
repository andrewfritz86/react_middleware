import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  DATA_LOADED
} from "../constants/action-types";

// Action Creators
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function foundBadWord() {
  return { type: FOUND_BAD_WORD };
}

// This is a thunk, allows an action creator to return a promise

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}
