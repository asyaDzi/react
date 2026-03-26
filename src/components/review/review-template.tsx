import styles from "./review.module.css";
import image from "../../assets/star.svg";
import { selectUserById } from "../../redux/entities/users.slice";
import { selectReviewById } from "../../redux/entities/reviews.slice";
import type { TabProps } from "../restaurants-page/restaurants-page";
import { useAppSelector } from "../../redux/hooks";

function ReviewTemplate({ id }: TabProps) {
  const review = useAppSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  const user = useAppSelector((state) => selectUserById(state, review.userId));

  return (
    <li key={review.id} className={styles.reviewBlock}>
      <div className={styles.reviewName}>{user.name}</div>
      <div className={styles.reviewPrice}>
        <img className={styles.reviewImg} src={image} />
        {review.rating}
      </div>
      <div className={styles.reviewElLast}>{review.text}</div>
    </li>
  );
}

export default ReviewTemplate;
