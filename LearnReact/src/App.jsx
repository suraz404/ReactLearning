import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount(count + 1);
  };
  const handleSubtractClick = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button disabled={count === 20} onClick={handleAddClick}>
        Add
      </button>
      <br />
      <button disabled={count === 0} onClick={handleSubtractClick}>
        Subtract
      </button>
    </>
  );
}

export default App;
