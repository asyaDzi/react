import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../const/normalized-mock";
import type { NormalizedRestaurant } from "../../interfaces/restaurant";
import type { GlobalState } from "../../interfaces/state";

const initialState: GlobalState<NormalizedRestaurant> = {
  entities: normalizedRestaurants.reduce(
    (
      acc: { [key: string]: NormalizedRestaurant },
      restaurant: NormalizedRestaurant,
    ) => {
      acc[restaurant.id] = restaurant;

      return acc;
    },
    {},
  ),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectrestaurantById: (state, id) => state.entities[id],
    selectrestaurantIds: (state) => state.ids,
  },
  reducers: {},
});

export const { selectrestaurantById, selectrestaurantIds } =
  restaurantsSlice.selectors;
