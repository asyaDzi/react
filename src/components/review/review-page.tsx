import { useContext } from "react";
import { AuthContext } from "../auth-provider";
import styles from "./review.module.css";
import ReviewTemplate from "./review-template";
import ReviewForm from "../review-form/review-form";
import ReviewCounter from "./rewiew-counter";

function ReviewPage(reviews: { ids: Array<string> }) {
  const user = useContext(AuthContext);

  return (
    <div>
      <ul>
        {reviews.ids.map((id) => (
          <ReviewTemplate key={id} id={id} />
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
