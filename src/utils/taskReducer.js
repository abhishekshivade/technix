const initalState = {
  tasks: [],
};

const taskReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      const newTasks = [...state.tasks];
      newTasks.splice(action.payload, 1);
      return {
        ...state,
        tasks: newTasks,
      };

    default:
      return state;
  }
};

export default taskReducer;
