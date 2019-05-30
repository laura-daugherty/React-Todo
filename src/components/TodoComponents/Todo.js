import React from "react";

const Todo = (props) => {
    return (
        <div className={`todoItem ${props.singleTask.completed ? 'completed' : ''}`}  onClick={() => props.toggleItem(props.singleTask.id)}>
            <h2>{props.singleTask.taskName}</h2>
        </div>
    )
}

export default Todo;

