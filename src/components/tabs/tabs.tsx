import type { Restaurant } from "../../interfaces/restaurant";
import styles from "./tabs.module.css";

export default function TabButtons(restaurants: {
  restaurant: Restaurant[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}) {
  return (
    <div className={styles.tabsHeader}>
      {restaurants.restaurant.map((restorant, index) => (
        <li
          className={
            index === restaurants.activeTab
              ? `${styles.tabButton} ${styles.active}`
              : styles.tabButton
          }
          key={restorant.id}
          onClick={() => restaurants.setActiveTab(index)}
        >
          {restorant.name}
        </li>
      ))}
    </div>
  );
}
