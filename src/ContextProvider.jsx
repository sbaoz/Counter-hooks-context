import React, { useReducer } from "react";
import { context, reducer } from "./reducer";

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <context.Provider value={{ state, dispatch }}>
      {props.children}
    </context.Provider>
  );
};

export default ContextProvider;
