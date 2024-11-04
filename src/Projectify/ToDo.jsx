import { useContext, useState } from "react";
import TodoTask from "../Components/TodoTask";
import { getFilterData } from "../utils/getFilterData";
import { LevelContext } from "./../Contexts/TaskContext";
export default function ToDo() {
  const { tasks, dispatch, searchText } = useContext(LevelContext);
  const [isAscending, setIsAscending] = useState(true);
  const todoTasks = tasks.filter(
    (task) =>
      task.taskName.toLowerCase().includes(searchText.toLowerCase()) ||
      task.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredData = getFilterData(todoTasks, "todo").sort((a, b) =>
    isAscending
      ? new Date(a.dueDate) - new Date(b.dueDate)
      : new Date(b.dueDate) - new Date(a.dueDate)
  );

  // handle delete
  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      id
    });
  };
  return (
    <div className='mb-4 w-full px-2 sm:w-1/2 md:w-1/4'>
      <div className='rounded-lg bg-indigo-600 p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>
            To-Do ({filteredData?.length})
          </h3>
          <svg
            onClick={() => setIsAscending(!isAscending)}
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-sort-descending cursor-pointer'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M4 6l9 0' />
            <path d='M4 12l7 0' />
            <path d='M4 18l7 0' />
            <path d='M15 15l3 3l3 -3' />
            <path d='M18 6l0 12' />
          </svg>
        </div>
        <div>
          {filteredData.length < 1 ? (
            <p className='bg-[#fafafa] text-black font-semibold p-3 rounded-lg'>
              Task List is empty!
            </p>
          ) : (
            filteredData?.map((item) => (
              <TodoTask
                key={item.id}
                item={item}
                onHandleDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
