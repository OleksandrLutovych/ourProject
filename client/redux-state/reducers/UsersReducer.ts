import { RootState } from "./../store/store";
import { IInitialStateUser, IUser } from "types/User";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allUsersAPI } from "api/api";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
});

// export const createUser = createAsyncThunk(
//   "users/createUser",
//   async (userData: IUser) => {
//     try {
//       const response = await fetch(
//         `https://localhost:5001/Api/CreateNewUser?name=${userData.name}&lastName=${userData.lastName}&email=${userData.email}&password=${userData.password}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-type": "application/json; charset=UTF-8",
//           },
//         }
//       );
//       const data = response.json();
//       data.then((data) => console.log(data));
//     } catch (error) {
//       console.log("Error", error);
//     }
//   }
// );

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
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    // builder.addCase(createUser.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(createUser.fulfilled, (state: any, action) => {
    //   state.users = action.payload;
    //   state.loading = false;
    // });
  },
});

export const userState = (state: RootState) => state.users;
export default usersSlice.reducer;
