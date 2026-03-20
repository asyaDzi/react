import styles from "./counter.module.css";
import type { ReviewRaitConst as CounterPropsConst } from "../../interfaces/review";
import useCounterLogic from "./counter-logic";
import Button from "../button/button";

function Counter({ min, max }: CounterPropsConst) {
  const { counter, increaseCounter, decreaseCounter } = useCounterLogic({
    min,
    max,
  });

  return (
    <div className={styles.counterAligner}>
      <Button text="-" disabled={counter <= min} action={decreaseCounter} />
      <div>{counter}</div>
      <Button text="+" disabled={counter >= max} action={increaseCounter} />
    </div>
  );
}

export default Counter;
