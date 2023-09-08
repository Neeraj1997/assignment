import React, { useState } from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { useDispatch} from "react-redux";
import { deleteTaskAction } from "../../../store/actions";
function TaskList({ tasks }) {
  const dispatch = useDispatch();
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [editTaskData, setEditTaskData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [editMode, setEditMode] = useState(false);
  const onEdit = (data) => {
    setAddTaskModal(true);
    setEditTaskData(data);
    setEditMode(true);
  };
  const onDelete = (id) => {
    dispatch(deleteTaskAction(id));
  };
  return (
    <>
      <AddTask
        open={addTaskModal}
        setOpen={setAddTaskModal}
        taskData={editTaskData}
        setEditMode={setEditMode}
        editMode={editMode}
        setEditTaskData={setEditTaskData}
      />
      <div className="grid grid-cols-2 md:grid-cols-6 justify-center">
        {tasks.length ? (
          tasks.map((task, index) => (
            <TaskItem
              onDelete={onDelete}
              onEdit={onEdit}
              key={index}
              task={task}
            />
          ))
        ) : (
          <div className="p-3 shadow bg-gray-200 text-center grid col-span-2 md:col-span-6 my-6">
            No Task Exist, Add Using Add Task Button
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {" "}
        <button
          onClick={() => setAddTaskModal(true)}
          className="bg-blue-300 py-2 px-4 rounded-md hover:bg-blue-500"
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default TaskList;
