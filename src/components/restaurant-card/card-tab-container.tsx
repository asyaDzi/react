import { NavLink, type NavLinkRenderProps } from "react-router";
import styles from "../tabs/tabs.module.css";
import type { NormalizedRestaurant } from "../../interfaces/restaurant";

export function CardTabContainer(restourant: NormalizedRestaurant) {
  return (
    <>
      <NavLink
        className={({ isActive }: NavLinkRenderProps) =>
          isActive ? `${styles.tabButton} ${styles.active}` : styles.tabButton
        }
        to={`/restourants/${restourant.id}/menu`}
      >
        {() => {
          return "Меню";
        }}
      </NavLink>
      <NavLink
        className={({ isActive }: NavLinkRenderProps) =>
          isActive ? `${styles.tabButton} ${styles.active}` : styles.tabButton
        }
        to={`/restourants/${restourant.id}/reviews`}
      >
        {() => {
          return "Отзывы";
        }}
      </NavLink>
    </>
  );
}
