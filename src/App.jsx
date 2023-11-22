import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from './components/TaskList/TaskList';

function App() {

  return (
    <BrowserRouter>
    
    {/* <NavBar />
    <Routes>
      <Route path="/tasklist" element={<TaskList />} />
      <Route path="/taskform" element={<TaskForm />} />
    </Routes> */}
    <TaskForm />

    </BrowserRouter>
  )
}

export default App
