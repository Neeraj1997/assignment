import { createSlice } from "@reduxjs/toolkit";

export const  tasks = createSlice({
  name: "tasks",
  initialState: {
  taskList:[],
  userDetails:{},
  },
  reducers: {
    fetchTasks: (state, action) => {
      state.taskList = action?.payload;
    },
    fetchUserDetails: (state, action) => {
      state.userDetails = action?.payload;
    },
  },
});

export const {
  fetchTasks,
  fetchUserDetails,

} = tasks.actions;

export default tasks.reducer;
