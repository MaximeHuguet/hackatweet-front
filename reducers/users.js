
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, username: null, firstname: null, userId: null },
};

export const usersSlice = createSlice({
 name: 'users',
  initialState,
 reducers: {
  signin: (state, action) => {
    state.value.token = action.payload.token;
    state.value.username = action.payload.username;
    state.value.firstname = action.payload.firstname;
    state.value.userId = action.payload.userId;


   },
   signup: (state, action) => {
    state.value.token = action.payload.token;
    state.value.username = action.payload.username;
    state.value.firstname = action.payload.firstname;
    state.value.userId = action.payload.userId;

   },
 },
});

export const { signin, signup } = usersSlice.actions;
export default usersSlice.reducer;