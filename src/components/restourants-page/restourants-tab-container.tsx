import { useSelector } from "react-redux";
import { NavLink, type NavLinkRenderProps } from "react-router";
import { selectRestourantById } from "../../redux/entities/restourants.slice";
import styles from "../tabs/tabs.module.css";
import type { TabProps } from "./restourants-page";

export function TabContainer({ id }: TabProps) {
  const restourant = useSelector((state: any) =>
    selectRestourantById(state, id),
  );

  return (
    <NavLink
      className={({ isActive }: NavLinkRenderProps) =>
        isActive ? `${styles.tabButton} ${styles.active}` : styles.tabButton
      }
      to={`/restourants/${id}`}
    >
      {() => {
        return restourant.name;
      }}
    </NavLink>
  );
}
