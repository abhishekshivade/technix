import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/actions";

function AddTask({ handleClose }) {
  const [formData, setFormData] = useState({
    task: "",
    dayTime: "",
  });
  const dispatch = useDispatch();

  const handleChnage = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(formData));
    handleClose();
  };

  return (
    <div className="border-2 border-black rounded-xl h-96 h-[440px] w-96 md:w-[600px] mx-auto text-center">
      <div className="flex justify-between items-center mx-5 my-3">
        <h1>Task Tracker</h1>
        <button
          onClick={handleClose}
          className="bg-[#ff0000] text-white w-20 h-fit text-center py-2 rounded"
        >
          Close
        </button>
      </div>
      <form onSubmit={handleSubmit} className="px-5 space-y-5">
        <div className="gap-2 text-start">
          <label>Task</label>
          <br />
          <input
            type="text"
            name="task"
            value={formData.task}
            placeholder="Add Task"
            onChange={handleChnage}
            className="focus:outline-none w-full border border-black px-2 pb-0.5"
            required
          />
        </div>
        <div className="text-start">
          <label>Day & Time</label>
          <br />
          <input
            type="text"
            name="dayTime"
            value={formData.dayTime}
            placeholder="Add Day & Task"
            onChange={handleChnage}
            className="focus:outline-none w-full border border-black px-2 pb-0.5"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black hover:bg-[#005ba1] px-2 pb-1 text-white my-5 w-full"
        >
          Save Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
