import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTick } from '../Actions';

export class StandaloneSoundDriver extends Component {

  constructor(props) {
    super(props)
    this._audioTags = []
  }

  play() {
    this.props.sounds.forEach((sound, id) => {
      if (sound.beats[this.props.tick]) {
        this._audioTags[this.props.tick].play()
      }
    })
  }

  doTick() {
    if (!this.props.playing) {
      return
    }
    this.play()
    this.props.setTick((this.props.tick + 1) % this.props.bars)
    this.tick()
  }

  tick() {
    this.ticker = setTimeout(() => this.doTick(), 1000 * (60 / this.props.bpm))
  }

  componentDidUpdate(props) {
    if (this.props.playing !== props.playing && this.props.playing) {
      this.tick()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.ticker)
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.sounds !== nextProps.sounds) {
      return true
    }

    if (this.props.playing !== nextProps.playing) {
      return true
    }

    if (this.props.bpm !== nextProps.bpm) {
      return true
    }

    return false;
  }

  render() {
    return (
      <div>
        {this.props.sounds.map((sound, i) => (
          <audio
            ref={(tag) => { this._audioTags[i] = tag; }}
            key={i}
            preload="auto"
            src={`sounds/${sound.name}`}
            type="audio/mpeg"></audio>
        ))}
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  sounds: state.sounds,
  bars: state.bars,
  bpm: state.bpm,
  tick: state.tick,
  playing: state.playing
})

const mapDispatchToProps = ({
  setTick
})

export const SoundDriver = connect(
  mapStateToProps,
  mapDispatchToProps
)(StandaloneSoundDriver);
