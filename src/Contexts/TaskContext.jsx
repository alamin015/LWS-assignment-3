/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";
import { Tasks } from "../Data/Tasks";
import { TaskReducer } from "../Reducers/TaskReducer";
export const LevelContext = createContext(null);
export default function TaskContext({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [tasks, dispatch] = useReducer(TaskReducer, Tasks);

  const myValue = {
    tasks,
    showModal,
    setShowModal,
    editTask,
    setEditTask,
    searchText,
    setSearchText,
    dispatch
  };
  return (
    <LevelContext.Provider value={myValue}>{children}</LevelContext.Provider>
  );
}
