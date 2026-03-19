import { useCallback, useState } from "react";
import type { ReviewRaitConst } from "../../interfaces/review";

export default function useCounterLogic({ min, max }: ReviewRaitConst) {
  const [counter, setCounter] = useState(min);

  const increaseCounter = useCallback(
    () => setCounter((prevState) => Math.min(prevState + 1, max)),
    [max],
  );

  const decreaseCounter = () => setCounter(Math.max(counter - 1, min));

  return {
    counter,
    increaseCounter,
    decreaseCounter,
  };
}
