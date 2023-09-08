import React from "react";
import { PencilIcon,TrashIcon } from "@heroicons/react/24/outline";

function TaskItem({ task, onEdit, onDelete }) {
  const bufferToDataUrl = (buffer, contentType) => {
    const x = new Uint8Array(buffer.data);
    const blob = new Blob([x], { type: contentType });
    return URL.createObjectURL(blob);
  };

  return (
    <div className="bg-slate-100 shadow-md rounded-lg p-4 m-4 ">
      <div className="text-center flex justify-center">
        <img className="h-28 w-28" src={bufferToDataUrl(task.image.data, task.image.contentType)} alt={task.title} />
      </div>
      <div className="text-center mt-2">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p className="mt-2">{task.description}</p>
        <div className="flex justify-between mt-4">
          <button onClick={()=>onEdit(task)} className="mr-4 text-blue-500 hover:text-blue-700">
            <PencilIcon className="w-5 h-5 inline-block" /> 
          </button>
          <button onClick={()=>onDelete(task._id)} className="text-gray-500 hover:text-red-700">
            <TrashIcon className="w-5 h-5 inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
