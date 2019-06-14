import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
    }};
  }

  handleAdd = e => {
    e.preventDefault()
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    })
  }

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleAdd}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
