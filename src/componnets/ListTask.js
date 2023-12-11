import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../utils/actions";
import AddTask from "./AddTask";

function ListTask() {
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);

  const handleOpenAddTask = () => setAddTaskOpen(true);

  const handleCloseAddTask = () => setAddTaskOpen(false);

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (e, index) => {
    e.preventDefault();
    dispatch(deleteTask(index));
  };

  return (
    <div className="border-2 border-black rounded-xl w-96 h-96 md:w-[600px] mt-28 mx-auto">
      <div className="flex justify-between items-center mx-5 mt-3">
        <h1>Task Tracker</h1>
        <button
          onClick={handleOpenAddTask}
          className="bg-[#2f9a4d] text-white w-20 h-fit text-center py-2 rounded"
        >
          Add
        </button>
      </div>

      {isAddTaskOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl md:mr-12">
            <AddTask handleClose={handleCloseAddTask} />
          </div>
        </div>
      )}

      {tasks.length > 0 ? (
        <div className="mt-5 space-y-3 mx-5">
          {tasks.map((item, index) => (
            <div
              key={index}
              className="border border-black w-full px-5 flex justify-between items-center"
            >
              <p className="px-2 w-fit">
                {index + 1}. {item.task} - {item.dayTime}
              </p>
              <button className="py-2" onClick={(e) => handleDelete(e, index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  // stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="w-fit ml-5 mt-5">No Task To Show</p>
      )}
    </div>
  );
}

export default ListTask;
