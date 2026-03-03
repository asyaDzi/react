import type { Review } from "../../interfaces/restorant";
import "./review.css";

function ReviewList(reviews: { review: Review[] }) {
  return (
    <>
      <ul>
        {reviews.review.map((m) => (
          <li key={m.id} className="review-el-block">
            <div className="review-el-name">{m.user}</div>
            <div className="review-el-price">
              <img className="review-el-img" src="./src/assets/star.svg" />
              {m.rating}
            </div>
            <div className="review-el-block-last">{m.text}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
