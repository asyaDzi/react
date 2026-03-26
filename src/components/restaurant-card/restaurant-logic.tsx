import type { TabProps } from "../restaurants-page/restaurants-page";
import { selectrestaurantById } from "../../redux/entities/restaurants.slice";
import RestaurantTemplate from "./restaurant-template";
import { useAppSelector } from "../../redux/hooks";

export function Restaurantlogic({ id }: TabProps) {
  const restaurant = useAppSelector((state) => selectrestaurantById(state, id));

  if (!restaurant) {
    return null;
  }
  return <RestaurantTemplate {...restaurant} />;
}

export default Restaurantlogic;
