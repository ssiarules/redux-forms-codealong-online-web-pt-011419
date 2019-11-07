import React, { Component } from 'react'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return(
      <div>
        <form>
        <p>
          <label>add todo</label>
          <input type="text" />
          </p>
          <input type="submit" onChange={(event) => this.handleChange(event)} />
          </form>
      </div>
    )
  }
}

export default CreateTodo;
