import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../const/normalized-mock";
import type { NormalizedRestaurant } from "../../interfaces/restaurant";
import type { GlobalState } from "../../interfaces/state";

const initialState: GlobalState<NormalizedRestaurant> = {
  entities: normalizedRestaurants.reduce(
    (
      acc: { [key: string]: NormalizedRestaurant },
      restourant: NormalizedRestaurant,
    ) => {
      acc[restourant.id] = restourant;

      return acc;
    },
    {},
  ),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restourantsSlice = createSlice({
  name: "restourants",
  initialState,
  selectors: {
    selectRestourantById: (state, id) => state.entities[id],
    selectRestourantIds: (state) => state.ids,
  },
  reducers: {},
});

export const { selectRestourantById, selectRestourantIds } =
  restourantsSlice.selectors;
