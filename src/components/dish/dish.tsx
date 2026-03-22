import type { Menu } from "../../interfaces/restaurant";
import styles from "./dish.module.css";

function Dish(dish: Menu) {
  return (
    <>
      <div className={styles.dishName}>{dish.name}</div>
      <div className={styles.dishPrice}>{dish.price}</div>
      <div className={styles.dishBlockLast}>
        <b>Состав:</b>
        {dish.ingredients.map((k, i) => (
          <span key={i}>{k}</span>
        ))}
      </div>
    </>
  );
}

export default Dish;
