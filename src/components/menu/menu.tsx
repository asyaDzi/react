import type { Menu } from "../../interfaces/restaurant";
import Counter from "../counter/counter";
import Dish from "../dish/dish";
import styles from "./menu.module.css";
const menuExtremum = {
  min: 0,
  max: 5,
};

function MenuList(menus: { menu: Menu[] }) {
  return (
    <ul>
      {menus.menu.map((dish) => (
        <li key={dish.id} className={styles.menuBlock}>
          <Dish {...dish} />
          <Counter {...menuExtremum}></Counter>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
