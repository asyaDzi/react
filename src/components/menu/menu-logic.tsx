import type { TabProps } from "../restaurants-page/restaurants-page";
import { selectrestaurantById } from "../../redux/entities/restaurants.slice";
import MenuWrapper from "./menu-wrapper";
import { useAppSelector } from "../../redux/hooks";

export function MenuLogic({ id }: TabProps) {
  const menusId = useAppSelector((state) =>
    selectrestaurantById(state, id),
  ).menu;

  if (!menusId.length) {
    return null;
  }

  return (
    <ul>
      {menusId.map((id) => (
        <MenuWrapper key={id} id={id} />
      ))}
    </ul>
  );
}

export default MenuLogic;
