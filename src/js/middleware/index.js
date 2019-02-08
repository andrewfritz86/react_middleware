import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";
import { foundBadWord } from "../actions/index";
const forbiddenWords = ["spam", "money"];

// Middleware intercepts actions and evaluates the action/payload against
// the current state of the store before potentially updating it.
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          return dispatch(foundBadWord());
        }
      }
      return next(action);
    };
  };
}
