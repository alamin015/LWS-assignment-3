import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { LevelContext } from "../Contexts/TaskContext";

const demoObj = {
  description: "",
  taskName: "",
  category: "todo",
  dueDate: ""
};

/* eslint-disable react/prop-types */
export default function AddTaskModal({ editTask }) {
  const { dispatch, setEditTask, setShowModal } = useContext(LevelContext);

  const [task, setTask] = useState(
    editTask || { ...demoObj, id: crypto.randomUUID() }
  );
  const handleChangeInput = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    setTask({
      ...task,
      [name]: value
    });
  };
  // add task function
  const handleAddTask = (event) => {
    event.preventDefault();
    if (task.taskName && task.description && task.category && task.dueDate) {
      dispatch({
        type: "add",
        setShowModal,
        task
      });
    } else {
      toast.warn("Input field should not be empty", { theme: "colored" });
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setTask({ ...demoObj, id: crypto.randomUUID() });
    setEditTask(null);
  };

  const handleEditTask = (e, myTask) => {
    e.preventDefault();
    dispatch({
      type: "edit",
      setShowModal,
      myTask,
      setEditTask
    });
  };

  return (
    <div className='absolute top-0 left-0 w-[100%]'>
      <div className='flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white'>
        <div className='w-full max-w-md rounded-lg bg-gray-800 shadow-xl'>
          <div className='p-6'>
            <h2 className='mb-6 text-2xl font-bold text-green-400'>
              Create Task
            </h2>
            <form>
              <div className='mb-4'>
                <label
                  htmlFor='taskName'
                  className='mb-1 block text-sm font-medium text-gray-300'
                >
                  Task Name
                </label>
                <input
                  onChange={handleChangeInput}
                  value={task.taskName}
                  type='text'
                  id='taskName'
                  name='taskName'
                  required
                  className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='description'
                  className='mb-1 block text-sm font-medium text-gray-300'
                >
                  Description
                </label>
                <textarea
                  onChange={handleChangeInput}
                  value={task.description}
                  id='description'
                  name='description'
                  rows='3'
                  className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
                ></textarea>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='dueDate'
                  className='mb-1 block text-sm font-medium text-gray-300'
                >
                  Due Date
                </label>
                <input
                  onChange={handleChangeInput}
                  value={task.dueDate}
                  type='date'
                  id='dueDate'
                  name='dueDate'
                  className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='category'
                  className='mb-1 block text-sm font-medium text-gray-300'
                >
                  Category
                </label>
                <select
                  onChange={handleChangeInput}
                  value={task.category}
                  id='category'
                  name='category'
                  className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
                >
                  <option value='todo'>To-Do</option>
                  <option value='onprogress'>On Progress</option>
                  <option value='done'>Done</option>
                  <option value='revised'>Revised</option>
                </select>
              </div>

              <div className='flex justify-end space-x-3'>
                <button
                  onClick={handleCancel}
                  type='button'
                  className='rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  Cancel
                </button>
                {editTask ? (
                  <button
                    onClick={(e) => handleEditTask(e, task)}
                    type='submit'
                    className='rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={handleAddTask}
                    type='submit'
                    className='rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    Create Task
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
