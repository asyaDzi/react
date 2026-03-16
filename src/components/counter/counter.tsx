import "./counter.css";
import type { ReviewRaitConst } from "../../interfaces/review";
import counterLogic from "./counter-logic";

function Counter({ min, max }: ReviewRaitConst) {
  const { counter, increaseCounter, decreaseCounter } = counterLogic({
    min,
    max,
  });

  return (
    <div className="counter-aligner">
      <button onClick={decreaseCounter}>-</button>
      <div>{counter}</div>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
}

export default Counter;
