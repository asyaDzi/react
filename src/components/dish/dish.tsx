import type { Menu } from "../../interfaces/restaurant";

function Dish(dish: Menu) {
  return (
    <div className="container">
      <div className="menu-el-name">{dish.name}</div>
      <div className="menu-el-price">{dish.price}</div>
      <div className="menu-el-block-last">
        <b>Состав:</b>
        {dish.ingredients.map((k, i) => (
          <span key={i}>{k}</span>
        ))}
      </div>
    </div>
  );
}

export default Dish;
