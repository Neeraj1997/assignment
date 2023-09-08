import { customInterceptors } from "../redux/config";
const API = customInterceptors();
export const fetchTasks = () => {
  return API.get('/task');
};
export const addTask = (payload) => {
  return API.post('/task',payload);
};
export const editTask=(payload,id)=>{
  return API.put("/task/"+id,payload)
}
export const deleteTask=(id)=>{
  return API.put("/task/soft-delete/"+id)
}
export const getSingleTask=()=>{
  return API.get("/task")
}
//auth api's
export const login = (payload) => {
  return API.post('/auth/login',payload);
};
export const signup = (payload) => {
  return API.post('/auth/register',payload);
};
export const userDetails = (payload) => {
  return API.post('/auth/getuser',payload);
};

export const changePassword = (payload) => {
  return API.put('/auth/changePassword',payload);
};
