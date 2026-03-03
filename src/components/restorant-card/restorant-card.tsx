import type { Restorant } from "../../interfaces/restorant";
import MenuList from "../menu/menu";
import ReviewList from "../review/review";

import "./restorant-card.css";

function RestorantCard({ name, menu, reviews }: Restorant) {
  return (
    <div className="card-wrapper">
      <h2>{name}</h2>
      <h3>Меню:</h3>
      <MenuList menu={[...menu]}></MenuList>
      <h3>Отзывы :</h3>
      <ReviewList review={[...reviews]}></ReviewList>
    </div>
  );
}

export default RestorantCard;
