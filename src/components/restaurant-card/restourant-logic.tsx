import { useSelector } from "react-redux";
import { selectRestourantById } from "../../redux/entities/restourants.slice";
import type { TabProps } from "../restourants-page/restourants-page";
import RestaurantTemplate from "./restourant-template";

export function Restaurantlogic({ id }: TabProps) {
  const restourant = useSelector((state: any) =>
    selectRestourantById(state, id),
  );

  if (!restourant) {
    return null;
  }
  return <RestaurantTemplate {...restourant} />;
}

export default Restaurantlogic;
