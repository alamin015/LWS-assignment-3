/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Tasks } from "../Data/Tasks";
export const LevelContext = createContext(null);
export default function TaskContext({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [tasks, setTasks] = useState(Tasks);
  const [searchText, setSearchText] = useState("");

  const myValue = {
    tasks,
    setTasks,
    showModal,
    setShowModal,
    editTask,
    setEditTask,
    searchText,
    setSearchText
  };
  return (
    <LevelContext.Provider value={myValue}>{children}</LevelContext.Provider>
  );
}
