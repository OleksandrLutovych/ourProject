import { RootState } from "./../store/store";
import { IInitialStateUser, IUser } from "types/User";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allUsersAPI, newUsersAPI } from "api/api";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response = await fetch(allUsersAPI);
  const data = await response.json();
  return data as IUser;
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData: IUser) => {
    const user = {
      name: userData.name,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
    };
    try {
      const response = await fetch(
        "https://localhost:57680/Api/CreateNewUser",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = response.json();
      console.log("Succeful", data);
    } catch (error) {
      console.log("Error", error);
    }
  }
);

const initialState: IInitialStateUser = {
  users: [],
  loading: false,
  error: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users.push(action.payload);
      state.loading = false;
    });
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export const userState = (state: RootState) => state.users;
export default usersSlice.reducer;
