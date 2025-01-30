import { createSlice } from '@reduxjs/toolkit';

// Slice untuk user
const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    name: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.name = action.payload.name;
    },
    clearUser: (state) => {
      state.username = '';
      state.name = '';
    },
    userLogout: (state) =>{
      state.username = '';
      state.name = '';
    }
  },
});

// Export action dan reducer
export const { setUser, clearUser, userLogout } = userSlice.actions;
export default userSlice.reducer;