export const TaskReducer = (tasks, action) => {
  switch (action.type) {
    case "delete": {
      return tasks.filter((t) => t.id !== action.id);
    }
    case "add": {
      action.setShowModal(false);
      return [...tasks, action.task];
    }
    case "edit": {
      action.setShowModal(false);
      action.setEditTask(null);
      return tasks.map((i) => {
        if (i.id === action.myTask.id) {
          return action.myTask;
        } else {
          return i;
        }
      });
    }

    default:
      throw new Error("Something went wrong");
  }
};
