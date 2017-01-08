import React, { Component } from 'react';
import { connect } from 'react-redux';

import { stop } from '../Actions';

import { Button, Glyphicon } from 'react-bootstrap';

export class StandaloneStopButton extends Component {
  render() {
    return <Button onClick={this.props.onClick}>
      <Glyphicon glyph="stop" />
    </Button>
  }
}

const mapStateToProps = (state) => ({
  playing: state.playing
})

const mapDispatchToProps = ({
  onClick: stop
})

export const StopButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(StandaloneStopButton);
