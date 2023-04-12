import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "redux-state/reducers/UsersReducer";

const store = configureStore({
  reducer: {
    users: UsersReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
