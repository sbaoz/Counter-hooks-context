import React, { useContext } from "react";
import { context } from "./reducer/index";

export default function CounterA() {
  const { state, dispatch } = useContext(context);
  return (
    <div>
      CounterA Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
