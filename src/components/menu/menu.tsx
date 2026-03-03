
import type { Menu } from "../../interfaces/restaurant";
import "./menu.css";

function MenuList(menus: { menu: Menu[] }) {
  return (
      <ul>
        {menus.menu.map((dish) => (
          <li key={dish.id} className="menu-el-block">
            <div className="menu-el-name">{dish.name}</div>
            <div className="menu-el-price">{dish.price}</div>
            <div className="menu-el-block-last">
              <b>Состав:</b>
              {dish.ingredients.map((k, i) => (
                <span key={i}>{k}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
  );
}

export default MenuList;
