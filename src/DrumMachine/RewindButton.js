import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTick } from '../Actions';

import { Button, Glyphicon } from 'react-bootstrap';

export class StandaloneRewindButton extends Component {
  render() {
    return <Button onClick={this.props.onClick}>
      <Glyphicon glyph="step-backward" />
    </Button>
  }
}

const mapDispatchToProps = ({
  onClick: () => setTick(0)
})

export const RewindButton = connect(
  null,
  mapDispatchToProps
)(StandaloneRewindButton);
