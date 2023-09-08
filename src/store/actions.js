import * as api from "./api";
import { fetchTasks, fetchUserDetails } from "./reducer";


//task actions
export const fetchTasksListAction = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();
    dispatch(fetchTasks(data));
  } catch (error) {}
};
export const addTaskAction = (payload) => async (dispatch) => {
  try {
    const { data } = await api.addTask(payload);
    dispatch(fetchTasksListAction(data));
  } catch (error) {}
};
export const editTaskAction = (payload, id) => async (dispatch) => {
  try {
    const { data } = await api.editTask(payload, id);
    dispatch(fetchTasksListAction(data));
  } catch (error) {}
};
export const deleteTaskAction = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteTask(id);
    dispatch(fetchTasksListAction(data));
  } catch (error) {}
};

//user or auth actions
export const loginAction = (payload) => async (dispatch) => {
  try {
    const { data } = await api.login(payload);
    if (data.success) {
      localStorage.setItem("token", data.authData);
      dispatch(getSpecificUserDataAction());
    }
  } catch (error) {
    if (error.response.data != undefined)
    window.alert(error.response.data);
  }
};
export const signupAction = (payload) => async (dispatch) => {
  try {
    const { data } = await api.signup(payload);
    if (data.success) {
      localStorage.setItem("token", data.authData);
      dispatch(getSpecificUserDataAction());
    }
  } catch (error) {
    if (error.response.data != undefined)
      window.alert(error.response.data);
  }
};
export const changePasswordAction = (payload) => async (dispatch) => {
  try {
    const { data } = await api.changePassword(payload);
    if (data.success) {
      window.alert("Password Changed Successfully")
    }
  } catch (error) {
    if (error.response.data != undefined)
      window.alert(error.response.data);
  }
};

export const getSpecificUserDataAction = () => async (dispatch) => {
  try {
    const { data } = await api.userDetails();
    
    if (data.success) {
      localStorage.setItem('name',data.data.name)
      dispatch(fetchUserDetails(data.data));
    }
  } catch (error) {}
};
