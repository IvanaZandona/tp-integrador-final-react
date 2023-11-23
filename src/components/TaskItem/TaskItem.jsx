import React from 'react';

const TaskItem = ({ id, nuevaTarea }) => {


    return (
        <>
            {/* Tareas predeterminadas */}
            <ul>
                <input type="checkbox" name={id} value={nuevaTarea} />
                <label htmlFor={id}>{nuevaTarea}</label>
            </ul>

        </>
    );
}

export default TaskItem;
