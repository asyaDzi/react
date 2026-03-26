import { NavLink, type NavLinkRenderProps } from "react-router";
import styles from "../tabs/tabs.module.css";
import type { TabProps } from "./restaurants-page";
import { useAppSelector } from "../../redux/hooks";
import { selectrestaurantById } from "../../redux/entities/restaurants.slice";

export function TabContainer({ id }: TabProps) {
  const restaurant = useAppSelector((state) => selectrestaurantById(state, id));

  return (
    <NavLink
      className={({ isActive }: NavLinkRenderProps) =>
        isActive ? `${styles.tabButton} ${styles.active}` : styles.tabButton
      }
      to={`/restaurants/${id}`}
    >
      {() => {
        return restaurant.name;
      }}
    </NavLink>
  );
}
