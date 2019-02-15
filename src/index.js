import React from "react";
import ReactDOM from "react-dom";
import CounterA from "./CounterA";
import CounterB from "./CounterB";
import ContextProvider from "./ContextProvider";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <CounterA />
        <CounterB />
      </ContextProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
