import { useParams } from "react-router";
import ReviewLogic from "./review-logic";

function ReviewList() {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return null;
  }

  return <ReviewLogic id={restaurantId} />;
}

export default ReviewList;
