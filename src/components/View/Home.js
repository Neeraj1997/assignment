// src/components/Auth/Home.js
import React, { useEffect,useState } from "react";
import {  useNavigate } from "react-router-dom";
import TaskList from "./task/TaskList";
import { useSelector,useDispatch } from "react-redux";
import { fetchTasksListAction } from "../../store/actions";

const Home = () => {
  const dispatch=useDispatch();
  const [taskList,setTaskList]=useState([])
  const taskListFromStore = useSelector((state) => state.tasks.taskList);
  const navigate = useNavigate();

  useEffect(() => {
  dispatch(fetchTasksListAction())
  }, [])
  useEffect(() => {
    taskListFromStore.length>=0&&setTaskList(taskListFromStore)
    }, [taskListFromStore])
  
  return (
    <div className=" flex items-center justify-center bg-gray-50">
      <div className=" w-full min-h-[80vh] p-6 bg-white rounded-lg shadow-md">
        <TaskList tasks={taskList}/>
      </div>
    </div>
  );
};

export default Home;
