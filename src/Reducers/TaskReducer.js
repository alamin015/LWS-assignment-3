import { toast } from "react-toastify";
export const TaskReducer = (tasks, action) => {
  switch (action.type) {
    case "delete": {
      return tasks.filter((t) => t.id !== action.id);
    }
    case "add": {
      if (
        action.task.taskName &&
        action.task.description &&
        action.task.category &&
        action.task.dueDate
      ) {
        action.setShowModal(false);
        return [...tasks, action.task];
      } else {
        toast.warn("Input field should not be empty", { theme: "colored" });
      }
      break;
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
