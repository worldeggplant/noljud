import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../Actions';

import { DrumPad } from './';
import { ButtonGroup, Row, Col } from 'react-bootstrap';

export class StandaloneDrumRow extends Component {
  render() {
    return (
        <Row>
          <Col md={2}>
              <label>{this.props.sound}</label>
          </Col>
          <Col md={10}>
            <ButtonGroup bsSize="large" justified>
                {Array(this.props.bars).fill().map((_, i) => (
                    <ButtonGroup key={i}>
                      <DrumPad id={this.props.id} beat={i} />
                    </ButtonGroup>
                  )
                )}
            </ButtonGroup>
          </Col>
        </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  bars: state.bars
})

export const DrumRow = connect(
  mapStateToProps,
  Actions
)(StandaloneDrumRow);
