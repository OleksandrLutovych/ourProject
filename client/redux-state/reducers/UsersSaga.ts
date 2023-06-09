import { takeEvery, put, call } from "redux-saga/effects";
import { getUsersSuccess } from "./UsersReducer";
import { allUsersAPI } from "api/api";
import axios from "axios";
import { IUser } from "types/User";

function* fetchUsersSaga(): Generator<any, void, any> {
  const response = yield call(() => fetch(allUsersAPI));
  const data: IUser[] = yield response.json();
  yield put(getUsersSuccess(data));
}

export function* watchFetchUsers() {
  yield takeEvery("users/getUsersFetch", fetchUsersSaga);
}
