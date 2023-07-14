
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, username: null, firstname: null, userId: null, image: '/images/default_profile_400x400.png'},
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
    state.value.image = action.payload.image;


   },
   signup: (state, action) => {
    state.value.token = action.payload.token;
    state.value.username = action.payload.username;
    state.value.firstname = action.payload.firstname;
    state.value.userId = action.payload.userId;
    state.value.image = action.payload.image;

   },
   logoutUser: (state) => {
    state.value.token = null;
    state.value.username = null;
    state.value.firstname = null;
    state.value.userId = null;
    state.value.image = '/images/default_profile_400x400.png';
   }
 },
});

export const { signin, signup, logoutUser} = usersSlice.actions;
export default usersSlice.reducer;