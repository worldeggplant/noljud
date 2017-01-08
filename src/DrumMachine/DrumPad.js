import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleBeat } from '../Actions';

import { Button } from 'react-bootstrap';
import './DrumPad.css';

export class StandaloneDrumPad extends Component {

  isToggled() {
    const sound = this.props.sounds[this.props.id]
    return sound.beats[this.props.beat]
  }

  shouldPlay() {
    return this.isToggled() && this.props.tick === this.props.beat && this.props.playing
  }

  getButtonStyle() {
    let buttonStyle = {
      color: 'default',
      glyph: 'unchecked',
      disabled: false
    }

    if (this.isToggled()) {
      buttonStyle.glyph = 'expand';
      buttonStyle.color = 'info';
    }

    if (this.isToggled() && this.shouldPlay()) {
       buttonStyle.color = 'success';
    }

    return buttonStyle;
  }

  render() {
    const buttonStyle = this.getButtonStyle()

    return (
      <Button
        className="DrumPad"
        disabled={buttonStyle.disabled}
        bsStyle={buttonStyle.color}
        onClick={this.props.onClick}>
      </Button>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  sounds: state.sounds,
  tick: state.tick,
  playing: state.playing
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleBeat(ownProps.id, ownProps.beat))
})

export const DrumPad = connect(
  mapStateToProps,
  mapDispatchToProps
)(StandaloneDrumPad);
