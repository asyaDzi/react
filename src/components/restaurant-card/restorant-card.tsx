import { useParams } from "react-router";
import Restaurantlogic from "./restourant-logic";

export function RestaurantCard() {
  const { restourantId } = useParams();

  if (!restourantId) {
    return null;
  }

  return <Restaurantlogic id={restourantId} />;
}

export default RestaurantCard;
