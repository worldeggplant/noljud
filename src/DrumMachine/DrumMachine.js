import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DrumRow, SoundDriver, PlayPauseButton, StopButton, RewindButton, BPMInput } from './'
import { Grid, Row, Col, ButtonGroup, InputGroup } from 'react-bootstrap';

export class StandaloneDrumMachine extends Component {
  render() {
    if (!this.props.sounds || !this.props.sounds.length) {
      return (
        <div>
          No sounds!
        </div>
      )
    }

    return (
      <Grid>
        <Row>
          <ButtonGroup>
            <PlayPauseButton />
            <StopButton />
            <RewindButton />
            <Col md={4}>
              <InputGroup>
                <InputGroup.Addon>BPM</InputGroup.Addon>
                <BPMInput />
              </InputGroup>
            </Col>
          </ButtonGroup>

        </Row>

        <SoundDriver />

        {this.props.sounds.map((sound, key) => {
          return <DrumRow key={key} id={key} sound={sound.name} beats={sound.beats} />
        })}
      </Grid>
    )
  }
}
const mapStateToProps = (state) => ({
  sounds: state.sounds
})

export const DrumMachine = connect(
  mapStateToProps
)(StandaloneDrumMachine);
