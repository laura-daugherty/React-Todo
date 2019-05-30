import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

const todosArray = [
  {
    taskName: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    taskName: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    taskName: "DO THE THING",
    id: 15288170,
    completed: false
  },
  {
    taskName: "Do the other thing",
    id: 152858,
    completed: false
  },
  {
    taskName: "poop",
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super ();
    this.state = {
      tasks: todosArray,
    }
  };

  addTodoObject = (newTaskName) => {
    const newTodoObject = {
      taskName: newTaskName,
      id: 123,
      completed: false
    };
    this.setState({
      //make a new array with added task 
      //makes a new array plus a new todoObject to replace old array in State
      tasks: [...this.state.tasks, newTodoObject]
    })
  }

  
  render() {
    return (
      <div>
        {/* <TodoForm  /> */}
        <TodoList listOfTasks={this.state.tasks}/>
        <TodoForm onClickButton={this.addTodoObject} stateTaskName={this.state.taskName}/>
      </div>


    );
  }
}

export default App;



