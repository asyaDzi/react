import type { Restaurant } from "../../interfaces/restaurant";
import Counter from "../counter/counter";
import MenuList from "../menu/menu";
import ReviewList from "../review/review";

import "./restorant-card.css";
const someCounterExtremum = {
  min: 0,
  max: 7,
};

function RestaurantCard({ name, menu, reviews }: Restaurant) {
  return (
    <div className="card-wrapper">
      <h2>{name}</h2>
      <h3>Меню:</h3>
      <MenuList menu={menu} />
      <Counter {...someCounterExtremum} />
      <h3>Отзывы :</h3>
      <ReviewList review={reviews} />
    </div>
  );
}

export default RestaurantCard;
