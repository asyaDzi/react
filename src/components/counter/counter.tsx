import { useState } from "react";
import "./counter.css";

const initialValue = 0;
const maxValue = 5;

function Counter() {
  const [counter, setCounter] = useState(initialValue);

  const increaseCounter = () => {
    return counter + 1 <= maxValue ? setCounter(counter + 1) : counter;
  };

  const decreaseCounter = () => {
    return counter - 1 >= initialValue ? setCounter(counter - 1) : counter;
  };

  return (
    <div className="counter-aligner">
      <button onClick={increaseCounter}>+</button>
      <div>{counter}</div>
      <button onClick={decreaseCounter}>-</button>
    </div>
  );
}

export default Counter;
