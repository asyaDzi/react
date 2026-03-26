import { Outlet } from "react-router";
import type { NormalizedRestaurant } from "../../interfaces/restaurant";
import { Tabs } from "../tabs/tabs";
import { CardTabContainer } from "./card-tab-container";
import styles from "./restorant-card.module.css";

function RestaurantTemplate(restourant: NormalizedRestaurant) {
  return (
    <div className={styles.cardWrapper}>
      <h2 className={styles.cardTitle}>{restourant.name}</h2>
      <Tabs>
        <CardTabContainer {...restourant} />
      </Tabs>
      <Outlet></Outlet>
      {/* <h3>Меню:</h3>
      <MenuList menu={menu} />
      <h3>Отзывы :</h3>
      <ReviewList review={reviews} /> */}
    </div>
  );
}

export default RestaurantTemplate;
