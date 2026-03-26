import { Outlet } from "react-router";
import type { NormalizedRestaurant } from "../../interfaces/restaurant";
import { Tabs } from "../tabs/tabs";
import { CardTabContainer } from "./card-tab-container";
import styles from "./restaurant-card.module.css";

function RestaurantTemplate(restaurant: NormalizedRestaurant) {
  return (
    <div className={styles.cardWrapper}>
      <h2 className={styles.cardTitle}>{restaurant.name}</h2>
      <Tabs>
        <CardTabContainer {...restaurant} />
      </Tabs>
      <Outlet></Outlet>
    </div>
  );
}

export default RestaurantTemplate;
