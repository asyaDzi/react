import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../const/normalized-mock";
import type { Menu } from "../../interfaces/restaurant";
import type { GlobalState } from "../../interfaces/state";

const initialState: GlobalState<Menu> = {
  entities: normalizedDishes.reduce(
    (acc: { [key: string]: Menu }, menu: Menu) => {
      acc[menu.id] = menu;

      return acc;
    },
    {},
  ),
  ids: normalizedDishes.map(({ id }) => id),
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  selectors: {
    selectMenuById: (state, id) => state.entities[id],
    selectMenuIds: (state) => state.ids,
  },
  reducers: {},
});

export const { selectMenuById, selectMenuIds } = menuSlice.selectors;
