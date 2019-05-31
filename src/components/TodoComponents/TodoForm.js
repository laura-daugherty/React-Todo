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
            [event.target.name]: event.target.value})
    }

    onClickButton = e => {
        e.preventDefault();
        this.props.onClickButton(this.state.taskName);
    }

    onClearClickButton = event => {
        event.preventDefault();
        this.props.onClearClickButton();
    }


///////list array.filter/////


    render () {
        return (
            <div>
                <form>
                    <input 
                    placeholder="Todo Item" 
                    onChange={this.onInputChange} 
                    value={this.state.taskName}
                    name="taskName"
                    />
                </form>
                <button onClick={this.onClickButton}>Add Todo</button>
                <button onClick={this.onClearClickButton}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm

// make a form that you put a new task into
// when you're typing it updates state with handle change
// update tasks when I submit 

// addtask function
    
