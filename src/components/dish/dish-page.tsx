import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectMenuById } from "../../redux/entities/menu.slice";
import styles from "./dish.module.css";
import MenuTemplate from "../menu/menu-template";

function DishPage() {
  const { dishId } = useParams();

  if (!dishId) {
    return null;
  }
  const dish = useSelector((state: any) => selectMenuById(state, dishId));

  return (
    <div className={styles.dishContainer}>
      <MenuTemplate {...dish} />
    </div>
  );
}

export default DishPage;
