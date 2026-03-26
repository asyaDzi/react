import { useSelector } from "react-redux";
import { selectRestourantById } from "../../redux/entities/restourants.slice";
import type { TabProps } from "../restourants-page/restourants-page";
import { selectMenuById } from "../../redux/entities/menu.slice";
import MenuTemplate from "./menu-template";

export function MenuLogic({ id }: TabProps) {
  const menusId = useSelector((state: any) =>
    selectRestourantById(state, id),
  ).menu;

  const menuArray = menusId.map((menu) => {
    return useSelector((state: any) => selectMenuById(state, menu));
  });

  if (!menuArray) {
    return null;
  }

  return (
    <ul>
      {menuArray.map((dish) => (
        <MenuTemplate key={dish.id} {...dish} />
      ))}
    </ul>
  );
}

export default MenuLogic;
