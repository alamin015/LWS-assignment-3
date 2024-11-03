import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import TaskContext from "./Contexts/TaskContext";
import Header from "./Header/Header";
import Projectify from "./Projectify/Projectify";
import Sidebar from "./SIdebar/Sidebar";

function App() {
  return (
    <TaskContext>
      <ToastContainer />
      <div className='bg-gray-900 text-white'>
        <div className='flex h-screen'>
          <Sidebar />
          <main className='flex-1 overflow-y-auto overflow-x-hidden'>
            <Header />
            <Projectify />
          </main>
        </div>
      </div>
    </TaskContext>
  );
}

export default App;
