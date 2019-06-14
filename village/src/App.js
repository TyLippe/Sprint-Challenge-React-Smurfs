import React, { Component } from 'react';
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

componentDidMount(){
  axios.get("http://localhost:3333/smurfs")
    .then((res) => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch((err) => {
      alert("Smurf info not found", err)
    })
}

addSmurf = smurf => {
  axios.post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      this.setState({ smurfs: res.data})
      this.props.history.push('/')
      console.log("New Smurf", smurf)
    })
    .catch(err => alert("Smurf not added", err))
}

  render() {
    return (
      <div className="App">
        
        <NavLink to="/">
          Smurf List
        </NavLink>

        <NavLink to="/smurf-form">
          Add A Smurf
        </NavLink>

        <Route exact path="/smurf-form"
        render={props => (
          <SmurfForm 
          addSmurf={this.addSmurf} />)}
          />
        
        <Route exact path="/"
        render={props => ( 
          <Smurfs 
          smurfs={this.state.smurfs} />)}
          />
      </div>
    );
  }
}

export default App;
