import { configureStore } from "@reduxjs/toolkit";
import { reviewsSlice } from "./entities/reviews.slice";
import { menuSlice } from "./entities/menu.slice";
import { userSlice } from "./entities/users.slice";
import { basketSlice } from "./entities/basket.slice";
import { restaurantsSlice } from "./entities/restaurants.slice";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
