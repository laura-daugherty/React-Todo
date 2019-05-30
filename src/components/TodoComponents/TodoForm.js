import React from "react"

class TodoForm extends React.Component {
    constructor () {
        super ();
        this.state = {
          taskName: '',
        }
      };
    
    onInputChange = (event) => {
        console.log(event.target.value)
        this.setState({taskName: event.target.value})
    }


    render () {
        console.log(this.props.onClickButton)
    
        return (
            <div>
                <form>
                    <input 
                    placeholder="Todo Item" 
                    onChange={this.onInputChange} 
                    value={this.state.taskName}
                    />
                </form>
                <button onClick={() => this.props.onClickButton(this.state.taskName)}>Add Todo</button>
            </div>
        )
    }
}

export default TodoForm

// make a form that you put a new task into
// when you're typing it updates state with handle change
// update tasks when I submit 

// addtask function
    
