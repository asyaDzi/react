import type { TabProps } from "../restaurants-page/restaurants-page";
import { selectMenuById } from "../../redux/entities/menu.slice";
import MenuTemplate from "./menu-template";
import { useAppSelector } from "../../redux/hooks";

export function MenuWrapper({ id }: TabProps) {
  const dish = useAppSelector((state) => selectMenuById(state, id));

  return <MenuTemplate key={dish.id} {...dish} />;
}

export default MenuWrapper;
