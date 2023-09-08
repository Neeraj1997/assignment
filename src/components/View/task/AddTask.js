import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../../store/actions";
import { editTaskAction } from "../../../store/actions";

export default function AddTask({
  open,
  setOpen,
  taskData,
  editMode,
  setEditMode,
}) {
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);
  //clean all on close and reset edit mode
  const closeAction = () => {
    setTaskPayload({});
    setOpen(false);
    setEditMode(false);
  };
  const [taskPayload, setTaskPayload] = useState();
  const handleInput = (e) => {
    if (e.target.name == "image") {
      setTaskPayload({ ...taskPayload, [e.target.name]: e.target.files[0] });
      return;
    }
    setTaskPayload({ ...taskPayload, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("title", taskPayload.title);
    payload.append("description", taskPayload.description);
    payload.append("image", taskPayload.image);
    editMode
      ? dispatch(
          editTaskAction(
            { discription: taskPayload.description, title: taskPayload.title },
            taskData._id
          )
        )
      : dispatch(addTaskAction(payload));
    closeAction();
  };
  useEffect(() => {
    if (taskData) {
      setTaskPayload(taskData);
    }
  }, [taskData]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={closeAction}
      >
        <div className="min-h-screen flex items-center justify-center px-4 py-6">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="px-6 py-4">
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircleIcon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {editMode ? "Edit Task" : "Create a New Task"}
                    </h3>
                  </div>

                  <div className="mt-6">
                    <div className="mb-4">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={taskPayload?.title}
                        onChange={handleInput}
                        required
                        className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-gray-100 focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={taskPayload?.description}
                        onChange={handleInput}
                        rows="3"
                        required
                        className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-gray-100 focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                    {!editMode && (
                      <div className="mb-4">
                        <label
                          htmlFor="image"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Image
                        </label>
                        <input
                          type="file"
                          required={!editMode}
                          id="image"
                          name="image"
                          accept="image/*"
                          onChange={handleInput}
                          className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2 focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {editMode ? "Edit Task" : "Create Task"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={closeAction}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
