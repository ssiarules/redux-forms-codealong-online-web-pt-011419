import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (formData) => dispatch(<some action>)

    }
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
          <input type="submit" onChange={ this.handleChange } value={this.state.text} />
          </form>
          {this.state.text}
      </div>
    )
  }
}

export default connect (null, mapDispatchToProps)(CreateTodo);
