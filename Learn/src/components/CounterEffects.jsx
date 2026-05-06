import { useEffect, useState } from "react";

const CounterEffects = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("called useEffect");
    document.title = `Increment ${count}`;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count:{count}</h1>

      <button onClick={handleIncrement}> Increment</button>
    </div>
  );
};

export default CounterEffects;
