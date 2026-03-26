import ReviewPage from "./review-page";
import type { TabProps } from "../restaurants-page/restaurants-page";
import { selectrestaurantById } from "../../redux/entities/restaurants.slice";
import { useAppSelector } from "../../redux/hooks";

export function ReviewLogic({ id }: TabProps) {
  const reviewsIds = useAppSelector((state) =>
    selectrestaurantById(state, id),
  ).reviews;

  if (!reviewsIds.length) {
    return null;
  }

  return <ReviewPage ids={reviewsIds} />;
}

export default ReviewLogic;
