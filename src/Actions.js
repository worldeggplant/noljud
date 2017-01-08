export function loadConfig() {
  return (dispatch) => {
    fetch('/assets/config.json').then((response) => {
      response.json().then((data) => {
        dispatch({
          type: 'FETCHED_CONFIG',
          config: data
        });
        if (data.sounds) {
          data.sounds.forEach((sound, i) => {
            dispatch({
              type: 'ADD_SOUND',
              sound
            })
          })
        }
      });
    });
  };
}

export function toggleBeat(id, beat) {
  return {
    type: 'TOGGLE_BEAT',
    id,
    beat
  }
}

export function setBPM(bpm) {
  return {
    type: 'CHANGED_BPM',
    bpm
  }
}

export function setTick(tick) {
  return {
    type: 'CHANGED_TICK',
    tick
  }
}

export function setBars(bars) {
  return {
    type: 'CHANGED_BARS',
    bars
  }
}

export function setVolume(volume) {
  return {
    type: 'CHANGED_VOLUME',
    volume
  };
}

export function setPlaying(playing) {
  return {
    type: 'CHANGED_PLAYING',
    playing
  }
}

export function togglePlaying() {
  return {
    type: 'PLAY_TOGGLE'
  }
}

export function stop() {
  return {
    type: 'STOP'
  }
}
