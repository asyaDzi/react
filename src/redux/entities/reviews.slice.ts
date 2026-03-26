import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../const/normalized-mock";
import type { NormalizedReview } from "../../interfaces/restaurant";
import type { GlobalState } from "../../interfaces/state";

const initialState: GlobalState<NormalizedReview> = {
  entities: normalizedReviews.reduce(
    (acc: { [key: string]: NormalizedReview }, review: NormalizedReview) => {
      acc[review.id] = review;

      return acc;
    },
    {},
  ),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "review",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviewIds: (state) => state.ids,
  },
  reducers: {},
});

export const { selectReviewById, selectReviewIds } = reviewsSlice.selectors;
