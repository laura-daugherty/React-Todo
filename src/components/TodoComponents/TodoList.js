// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo";


function TodoList(props) {
    return (
        <div>

        <h1>This is my list</h1>
        <div>
            {
                props.Todo.map(Todo => <h1>{todosArray.task}</h1>)
            }
        </div>

        </div>
        
    )
}

export default TodoList;

export const todosArray = [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },
    {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: false
    },
    {
      task: "DO THE THING",
      id: 15288170,
      completed: false
    },
    {
      task: "Do the other thing",
      id: 152858,
      completed: false
    }
  ];