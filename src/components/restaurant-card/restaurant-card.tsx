import { useParams } from "react-router";
import Restaurantlogic from "./restaurant-logic";

export function RestaurantCard() {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return null;
  }

  return <Restaurantlogic id={restaurantId} />;
}

export default RestaurantCard;
