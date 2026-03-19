import type { ScrollParams } from "../../interfaces/scroll";
import styles from "./horizontal-scroll.module.css";

function Scroll({ width }: ScrollParams) {
  return <div style={{ width: `${width}%` }} className={styles.scroll}></div>;
}

export default Scroll;
