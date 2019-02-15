import React, { useContext } from "react";
import { context } from "./reducer/index";

export default function CounterB() {
  const { state, dispatch } = useContext(context);
  return (
    <div>
      CounterB Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
