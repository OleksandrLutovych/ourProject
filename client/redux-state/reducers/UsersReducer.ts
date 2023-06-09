import { RootState } from "./../store/store";
import { IInitialStateUser, IUser } from "types/User";
import {  createSlice } from "@reduxjs/toolkit";

const initialState: IInitialStateUser = {
  users: [],
  loading: false,
  error: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersFetch: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload
    },
    getUsersError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const userState = (state: RootState) => state.users;
export const { getUsersFetch, getUsersSuccess, getUsersError } =
  usersSlice.actions;
export default usersSlice.reducer;
