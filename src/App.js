import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from './Actions';

import { DrumMachine } from './DrumMachine/';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';

export class StandaloneApp extends Component {

  componentDidMount() {
    this.props.loadConfig()
  }

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Noljud</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h2>React Drum Machine</h2>
            <p>Drum machine in React &lt;3</p>
          </Grid>
        </Jumbotron>
        <DrumMachine />
      </div>
    );
  }
}

export const App = connect(
  state => state,
  Actions
)(StandaloneApp);
