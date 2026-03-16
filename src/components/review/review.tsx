import type { Review } from "../../interfaces/restaurant";
import "./review.css";
import image from "../../assets/star.svg";
import ReviewForm from "../review-form/review-form";

const valid = {
  min: 0,
  max: 5,
};

function ReviewList(reviews: { review: Review[] }) {
  return (
    <div>
      <ul>
        {reviews.review.map((review) => (
          <li key={review.id} className="review-el-block">
            <div className="review-el-name">{review.user}</div>
            <div className="review-el-price">
              <img className="review-el-img" src={image} />
              {review.rating}
            </div>
            <div className="review-el-block-last">{review.text}</div>
          </li>
        ))}
      </ul>
      <ReviewForm {...valid} />
    </div>
  );
}

export default ReviewList;
