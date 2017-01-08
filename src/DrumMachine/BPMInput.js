import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setBPM } from '../Actions';

import { FormControl } from 'react-bootstrap';

export class StandaloneBPMInput extends Component {
  render() {
    return (
      <FormControl type="text" onChange={this.props.onChange.bind(this)} value={this.props.bpm} />
    )
  }
}

const mapStateToProps = (state) => ({
  bpm: state.bpm
})

const mapDispatchToProps = ({
  onChange: (e) => {
    return setBPM(parseInt(e.target.value, 10))
  }
})

export const BPMInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(StandaloneBPMInput);
