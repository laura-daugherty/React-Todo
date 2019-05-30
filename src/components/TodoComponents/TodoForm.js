import React from "react"

class TodoForm extends React.Component {
    constructor () {
        super ();
        this.state = {
          taskName: '',
        }
      };
    
    onInputChange = (event) => {
        this.setState({
            taskName: event.target.value})
    }

    onClickButton = e => {
        e.preventDefault();
        this.props.onClickButton(this.state.taskName);
    }

    render () {
        return (
            <div>
                <form>
                    <input 
                    placeholder="Todo Item" 
                    onChange={this.onInputChange} 
                    value={this.state.taskName}
                    name="Todo"
                    />
                </form>
                <button onClick={this.onClickButton}>Add Todo</button>
            </div>
        )
    }
}

export default TodoForm

// make a form that you put a new task into
// when you're typing it updates state with handle change
// update tasks when I submit 

// addtask function
    
