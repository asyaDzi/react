import { NavLink, type NavLinkRenderProps } from "react-router";
import styles from "../tabs/tabs.module.css";
import type { NormalizedRestaurant } from "../../interfaces/restaurant";

export function CardTabContainer(restaurant: NormalizedRestaurant) {
  return (
    <>
      <NavLink
        className={({ isActive }: NavLinkRenderProps) =>
          isActive ? `${styles.tabButton} ${styles.active}` : styles.tabButton
        }
        to={`/restaurants/${restaurant.id}/menu`}
      >
        {() => {
          return "Меню";
        }}
      </NavLink>
      <NavLink
        className={({ isActive }: NavLinkRenderProps) =>
          isActive ? `${styles.tabButton} ${styles.active}` : styles.tabButton
        }
        to={`/restaurants/${restaurant.id}/reviews`}
      >
        {() => {
          return "Отзывы";
        }}
      </NavLink>
    </>
  );
}
