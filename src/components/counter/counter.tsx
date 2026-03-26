import styles from "./counter.module.css";
import type { CounterPropsConst } from "../../interfaces/review";
import Button from "../button/button";

function Counter({
  min,
  max,
  counter,
  increaseCounter,
  decreaseCounter: decreaseCounetr,
}: CounterPropsConst) {
  return (
    <div className={styles.counterAligner}>
      <Button text="-" disabled={counter <= min} action={decreaseCounetr} />
      <div>{counter}</div>
      <Button text="+" disabled={counter >= max} action={increaseCounter} />
    </div>
  );
}

export default Counter;
