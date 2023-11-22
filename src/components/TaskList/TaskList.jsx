import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useState } from 'react';

const TaskList = ({agregarTarea}) => {

    const tareas = [
        { id: "111", nuevaTarea: "Ordenar habitación" },
        { id: "222", nuevaTarea: "Estudiar" },
        { id: "333", nuevaTarea: "Hacer TP Final de React"}
    ]
    
    const [tarea, setTarea] = useState("");
    const handleTarea = (e) => setTarea(e.target.value);

    const handleAgregarTarea = (e) => {
        e.preventDefault();
        console.log(tarea);
        agregarTarea(tarea);
    };


    return (
        <>
            <div className='containerTaskList'>
                {tareas.map((tar) => (
                    <TaskItem key={tar.id} nuevaTarea={tar.nuevaTarea} />
                ))}
            </div><br />
            
            <div className="containerAgregarTarea">
                <input type="text" className='inputTarea' value={tarea} onChange={handleTarea} placeholder='Agrega una tarea' required /><br /><br />
                <button onClick={handleAgregarTarea} >Agregar tarea</button><br />
            </div>
        </>
    );
}

export default TaskList;
