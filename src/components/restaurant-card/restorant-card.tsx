import type { Restaurant } from "../../interfaces/restaurant";
import MenuList from "../menu/menu";
import ReviewList from "../review/review";
import styles from "./restorant-card.module.css";

function RestaurantCard({ name, menu, reviews }: Restaurant) {
  return (
    <div className={styles.cardWrapper}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <h3>Меню:</h3>
      <MenuList menu={menu} />
      <h3>Отзывы :</h3>
      <ReviewList review={reviews} />
    </div>
  );
}

export default RestaurantCard;
