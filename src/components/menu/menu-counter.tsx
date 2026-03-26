import Counter from "../counter/counter";
import type { TabProps } from "../restaurants-page/restaurants-page";
import { useCounterState } from "./use-counter-state";

export default function MenuCounter({ id }: TabProps) {
  const { counter, increaseCounter, decreaseCounter } = useCounterState({ id });

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
