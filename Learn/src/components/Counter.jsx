import { useReducer, useState } from "react";

import { counterReducer, intialState } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, intialState);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <h2>Count :{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button
        onClick={() =>
          dispatch({ type: "incrementByAmount", payload: inputValue })
        }
      >
        Add
      </button>
      <button
        onClick={() =>
          dispatch({ type: "decrementByAmount", payload: inputValue })
        }
      >
        Subtract
      </button>
    </div>
  );
};

export default Counter;
