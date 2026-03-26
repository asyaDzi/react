import { useContext } from "react";
import type { NormalizedReview } from "../../interfaces/restaurant";
import { AuthContext } from "../auth-provider";
import styles from "./review.module.css";
import ReviewTemplate from "./review-template";
import ReviewForm from "../review-form/review-form";
import ReviewCounter from "./rewiew-counter";

function ReviewPage(reviews: { review: NormalizedReview[] }) {
  const user = useContext(AuthContext);

  return (
    <div>
      <ul>
        {reviews.review.map((review) => (
          <ReviewTemplate key={review.id} {...review} />
        ))}
      </ul>
      <div className={styles.reviewWrapper}>
        <h3>Оценка:</h3>
        <ReviewCounter />
        {user && user.user ? <ReviewForm /> : null}
      </div>
    </div>
  );
}

export default ReviewPage;
