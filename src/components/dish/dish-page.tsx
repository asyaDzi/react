import { useParams } from "react-router";
import { selectMenuById } from "../../redux/entities/menu.slice";
import styles from "./dish.module.css";
import MenuTemplate from "../menu/menu-template";
import { useAppSelector } from "../../redux/hooks";

function DishPage() {
  const { dishId } = useParams();

  if (!dishId) {
    return null;
  }
  const dish = useAppSelector((state) => selectMenuById(state, dishId));

  return (
    <div className={styles.dishContainer}>
      <MenuTemplate {...dish} />
    </div>
  );
}

export default DishPage;
