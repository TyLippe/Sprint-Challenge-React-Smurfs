import React from 'react';
import styled from "styled-components";
// import { NavLink } from "react-router-dom";

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

const SmurthHeight = styled.strong`
  font-size: 20px;
`

const SmurthAge = styled.p`
  font-size: 18px;
`

function Smurf (props) {
  return (
    <SmurfCard>
      {/* <NavLink exact to={`$/smurf-list/${smurfs.id}`}> */}
      <SmurfName>{props.name}</SmurfName>
      {/* </NavLink> */}
      <SmurthHeight>{props.height} tall</SmurthHeight>
      <SmurthAge>{props.age} smurf years old</SmurthAge>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;

