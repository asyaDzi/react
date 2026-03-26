import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../const/normalized-mock";
import type { User } from "../../interfaces/user";
import type { GlobalState } from "../../interfaces/state";

const initialState: GlobalState<User> = {
  entities: normalizedUsers.reduce(
    (acc: { [key: string]: User }, user: User) => {
      acc[user.id] = user;

      return acc;
    },
    {},
  ),
  ids: normalizedUsers.map(({ id }) => id),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUserIds: (state) => state.ids,
  },
  reducers: {},
});

export const { selectUserById, selectUserIds } = userSlice.selectors;
