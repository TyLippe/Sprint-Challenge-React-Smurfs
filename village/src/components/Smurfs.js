import React, { Component } from 'react';
import styled from "styled-components";

import Smurf from './Smurf';

const SmurfsList = styled.div`
  margin-left: 20%;
  margin-right: 20%
`
const SmurfVillage = styled.h1`
  font-size: 60px;
  color: white;
  text-decoration: underline;
`

class Smurfs extends Component {
  render() {
    return (
      <SmurfsList>
        <SmurfVillage>Smurf Village</SmurfVillage>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </SmurfsList>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
