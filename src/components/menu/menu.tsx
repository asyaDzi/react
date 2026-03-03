import type { Menu } from "../../interfaces/restorant";
import "./menu.css";

function MenuList(menus: { menu: Menu[] }) {
  return (
    <>
      <ul>
        {menus.menu.map((m) => (
          <li className="menu-el-block">
            <div className="menu-el-name">{m.name}</div>
            <div className="menu-el-price">{m.price}</div>
            <div className="menu-el-block-last">
              <b>Состав:</b>
              {m.ingredients.map((i) => (
                <span>{i}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuList;
