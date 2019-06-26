import React, { Component } from 'react';
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

const AppDiv = styled.div`
  text-align: center;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      selectedSmurf: []
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
      <AppDiv>
        
        <NavLink 
        className="nav-link"
        to="/">
          Smurf List
        </NavLink>

        <NavLink 
        className="nav-link"
        to="/smurf-form">
          Add A Smurf
        </NavLink>

        <Route exact path="/smurf-form"
        render={props => (
          <SmurfForm 
          {...props}
          addSmurf={this.addSmurf} />)}
          />
        
        <Route exact path="/"
        render={props => ( 
          <Smurfs 
          {...props}
          smurfs={this.state.smurfs} 
          sendNewData={(smurf) => this.setState({selectedSmurf: smurf})} />)}
          />

        <Route path="/smurf-list/:id"
        render={props => 
          <Smurfs
          {...props}
          sendNewData={(smurf) => this.setState({selectedSmurf: smurf})}
          smurfs={this.state.smurfs.filter(smurf => smurf.id === this.state.selectedSmurf.id)} /> }
          />
      
      </AppDiv>
    );
  }
}

export default App;
