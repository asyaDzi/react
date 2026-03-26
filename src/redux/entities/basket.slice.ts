import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface BasketItem {
  id: string;
  amount: number;
}

interface BasketState {
  entities: {
    [key: string]: number;
  };
}

const initialState: BasketState = {
  entities: {},
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<string>) => {
      state.entities[payload] = (state.entities[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      if (!state.entities[payload]) {
        return state;
      }

      state.entities[payload] = state.entities[payload] - 1;

      if (state.entities[payload] <= 0) {
        delete state.entities[payload];
      }
    },
  },
  selectors: {
    selectBasketItems: (state) =>
      Object.keys(state).reduce((acc: BasketItem[], id) => {
        acc.push({ id, amount: state.entities[id] });

        return acc;
      }, []),
    selectAmountById: (state, id) => state.entities[id] || 0,
  },
});

export const { addToCart, removeFromCart } = basketSlice.actions;
export const { selectAmountById } = basketSlice.selectors;

const selectCartSlice = (state: any) => state[basketSlice.name];
export const selectBasketItems = createSelector(
  [selectCartSlice],
  (basketSlice) =>
    Object.keys(basketSlice.entities).reduce((acc: BasketItem[], id) => {
      acc.push({ id, amount: basketSlice.entities[id] });

      return acc;
    }, []),
);
