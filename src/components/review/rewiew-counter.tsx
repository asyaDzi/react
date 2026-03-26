import Counter from "../counter/counter";
import useCounterLogic from "../counter/counter-logic";
import { minMax } from "../../const/min-max";

export default function ReviewCounter() {
  const { counter, increaseCounter, decreaseCounter } = useCounterLogic({
    ...minMax,
  });

  return (
    <Counter
      min={0}
      max={5}
      counter={counter}
      increaseCounter={increaseCounter}
      decreaseCounter={decreaseCounter}
    />
  );
}
