import type { Menu } from "../../interfaces/restaurant";
import Counter from "../counter/counter";
import Dish from "../dish/dish";
import "./menu.css";

function MenuList(menus: { menu: Menu[] }) {
  return (
    <ul>
      {menus.menu.map((dish) => (
        <li key={dish.id} className="menu-el-block">
          <Dish {...dish} />
          <Counter></Counter>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
