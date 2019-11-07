import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

handleSubmit = event => {
  event.preventDefault();
  this.props.addTodo(this.state)
}


  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (formData) => dispatch({type: 'ADD_TODO', payload: formData})
    };
  };

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
        <p>
          <label>add todo</label>
          <input type="text" />
          </p>
          <input type="submit" onChange={ this.handleChange } value={this.state.text} />
          </form>
          {this.state.text}
      </div>
    )
  }
}

export default connect (null, mapDispatchToProps)(CreateTodo);
