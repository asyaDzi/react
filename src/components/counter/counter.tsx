import "./counter.css";
import type { ReviewRaitConst as CounterPropsConst } from "../../interfaces/review";
import useCounterLogic from "./counter-logic";

function Counter({ min, max }: CounterPropsConst) {
  const { counter, increaseCounter, decreaseCounter } = useCounterLogic({
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
