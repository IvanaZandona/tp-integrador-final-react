import React from 'react';
import TaskList from "../TaskList/TaskList";
import { useState } from 'react';

const TaskForm = ({}) => {

    const [tareas, setTareas] = useState([]);
    const handleAgregarTarea = (option) => {
        setTareas([...tareas, option]);
    }
    
    const borrar = () => {
        console.log("borrar")
        // const selectTarea = document.getElementById('selectTarea').value;
        // const optionTarea = document.getElementById('optionTarea').value;
        // switch (selectTarea) {
        //     case :
        //         optionTarea = " ";
        //         break;
        //     default:
        //         console.log("error");
        //         break;
        // }
    }

    return (
        <div>

            <h3>Tareas</h3>
            <select id='selectTarea'>
                {tareas.map((option, index) => (
                    <option id='optionTarea' key={index} value={index} >{option}</option>
                    
                ))}
            </select>
            {/* <ul>
                {tareas.map((option, index) => (
                    <li key={index} >{option}</li>
                    
                ))}
            </ul> */}

            <br /><br />
            <button onClick={borrar}>Completa ⇨ borrar</button>

            <div className="containerTaskList">
                <TaskList agregarTarea={handleAgregarTarea} />

            </div>
        </div>
    );
}

export default TaskForm;
