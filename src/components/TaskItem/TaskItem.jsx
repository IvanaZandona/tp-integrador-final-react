import React from 'react';
// import { useState } from 'react';

const TaskItem = ({ id, nuevaTarea }) => {


    return (
        <>
            {/* <h3>Tareas predeterminadas</h3> */}
            <ul>
                <input type="checkbox" name={id} value={nuevaTarea} />
                <label htmlFor={id}>{nuevaTarea}</label>
            </ul>

        </>
    );
}

export default TaskItem;
