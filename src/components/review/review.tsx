import type { Review } from "../../interfaces/restaurant";
import image from "../../assets/star.svg";
import ReviewForm from "../review-form/review-form";
import Counter from "../counter/counter";
import styles from "./review.module.css";

const valid = {
  min: 0,
  max: 5,
};

function ReviewList(reviews: { review: Review[] }) {
  return (
    <div>
      <ul>
        {reviews.review.map((review) => (
          <li key={review.id} className={styles.reviewBlock}>
            <div className={styles.reviewName}>{review.user}</div>
            <div className={styles.reviewPrice}>
              <img className={styles.reviewImg} src={image} />
              {review.rating}
            </div>
            <div className={styles.reviewElLast}>{review.text}</div>
          </li>
        ))}
      </ul>
      <div className={styles.reviewWrapper}>
        <h3>Оценка:</h3>
        <Counter {...valid} />
        <ReviewForm />
      </div>
    </div>
  );
}

export default ReviewList;
