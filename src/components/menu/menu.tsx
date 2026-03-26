import { useParams } from "react-router";
import MenuLogic from "./menu-logic";

function MenuList() {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return null;
  }
  return <MenuLogic id={restaurantId} />;
}

export default MenuList;
