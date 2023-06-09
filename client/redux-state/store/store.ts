import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "redux-state/reducers/UsersReducer";
import createSagaMidlleware from "redux-saga";
import { all } from "redux-saga/effects";
import { watchFetchUsers } from "redux-state/reducers/UsersSaga";


const sagaMiddleware = createSagaMidlleware();

const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield all([watchFetchUsers()]);
}

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
