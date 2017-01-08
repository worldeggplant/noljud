import React, { Component } from 'react';
import { connect } from 'react-redux';

import { togglePlaying } from '../Actions';

import { Button, Glyphicon } from 'react-bootstrap';

export class StandalonePlayPauseButton extends Component {
  render() {
    const glyph = this.props.playing ? 'pause' : 'play';
    return (
      <Button onClick={this.props.onClick}>
        <Glyphicon glyph={glyph} />
      </Button>
    )
  }
}

const mapStateToProps = (state) => ({
  playing: state.playing
})

const mapDispatchToProps = ({
  onClick: togglePlaying
})

export const PlayPauseButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(StandalonePlayPauseButton)
