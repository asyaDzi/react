import { useParams } from "react-router";
import ReviewLogic from "./review-logic";

function ReviewList() {
  const { restourantId } = useParams();

  if (!restourantId) {
    return null;
  }

  return <ReviewLogic id={restourantId} />;
}

export default ReviewList;
