import { createContext } from "react";

const initialState = 0;
const context = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { count: initialState };
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export { reducer, context };
