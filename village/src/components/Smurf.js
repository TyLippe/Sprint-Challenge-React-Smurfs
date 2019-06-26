import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SmurfCard = styled.div`
  border: 2px black solid;
  border-radius: 10px;
  background: white;
  margin: 6px;
`

const SmurfName = styled.h3`
  color: #88CCFF;
  font-size: 24px;
`

const SmurfHeight = styled.strong`
  font-size: 20px;
`

const SmurfAge = styled.p`
  font-size: 18px;
`

class Smurf extends React.Component {
  constructor(props) {
  super(props);
  }
  render(){
  let {name, age, height, id} = this.props
  return (
    <SmurfCard onClick={() => this.props.sendNewData({name, age, height, id})}>
      <NavLink to={`/smurf-list/${this.props.id}`}>
      <SmurfName >
      {this.props.name}
      </SmurfName>
      </NavLink>
      <SmurfHeight>{this.props.height} tall</SmurfHeight>
      <SmurfAge>{this.props.age} smurf years old</SmurfAge>
    </SmurfCard>
  );
}}



Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;

