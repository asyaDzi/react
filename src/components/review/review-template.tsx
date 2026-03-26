import type { NormalizedReview } from "../../interfaces/restaurant";
import styles from "./review.module.css";
import image from "../../assets/star.svg";
import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users.slice";

function ReviewTemplate(review: NormalizedReview) {
  const user = useSelector((state: any) =>
    selectUserById(state, review.userId),
  );

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
