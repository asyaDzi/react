import { NavLink } from "react-router";
import type { Menu } from "../../interfaces/restaurant";
import Dish from "../dish/dish";
import styles from "./menu.module.css";
import MenuCounter from "./menu-counter";

function MenuTemplate(dish: Menu) {
  return (
    <li key={dish.id} className={styles.menuBlock}>
      <NavLink to={`/dish/${dish.id}`}>
        <Dish {...dish} />
      </NavLink>
      <MenuCounter id={dish.name} />
    </li>
  );
}

export default MenuTemplate;
