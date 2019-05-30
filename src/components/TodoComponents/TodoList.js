// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";


function TodoList(props) {
    return (
        <div>
            <h1>This is my list</h1>
            <div>
                {props.listOfTasks.map(taskObject => {
                    return (
                        <Todo
                        toggleItem={props.toggleItem}
                        singleTask={taskObject}
                        key={taskObject.id}
                       />
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList;

//map over todo's
