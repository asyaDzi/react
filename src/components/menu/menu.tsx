import { useParams } from "react-router";
import MenuLogic from "./menu-logic";

function MenuList() {
  const { restourantId } = useParams();

  if (!restourantId) {
    return null;
  }
  return <MenuLogic id={restourantId} />;
}

export default MenuList;
