import { useSelector } from "react-redux";
import { selectRestourantById } from "../../redux/entities/restourants.slice";
import type { TabProps } from "../restourants-page/restourants-page";
import { selectReviewById } from "../../redux/entities/reviews.slice";
import ReviewPage from "./review-page";

export function ReviewLogic({ id }: TabProps) {
  const reviewsId = useSelector((state: any) =>
    selectRestourantById(state, id),
  ).reviews;

  const reviewArray = reviewsId.map((review) => {
    return useSelector((state: any) => selectReviewById(state, review));
  });

  if (!reviewArray) {
    return null;
  }

  return <ReviewPage review={reviewArray} />;
}

export default ReviewLogic;
