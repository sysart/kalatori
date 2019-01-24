import React, { Component, Suspense, useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import { Locations } from './Locations';

const Wrapper = styled.div`
  font-weight: 200;
`;




class App extends Component {

  render() {
    return (
      <Wrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Locations />
        </Suspense>
      </Wrapper>
    );
  }
}


export default (App);
