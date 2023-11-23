import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useState, useEffect } from 'react';

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
        agregarTarea(tarea);
        if (tarea === true) {
            setTarea(false);
        } else {
            setTarea(true);
        }
    };

    useEffect(()=>{
        {tarea ? alert("Tarea añadida a la lista") : " "}
    },[agregarTarea]);

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //        setMensaje('¡Hola desde useEffect!');
    //   }, 2000);
    //      return () => clearTimeout(timeoutId);
    //    }, [ ]);

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
