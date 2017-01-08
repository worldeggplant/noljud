/* eslint-disable */
const INITIAL_STATE = {
  fetching: true,
  playing: false,
  config: {},
  volume: 50,
  bpm: 120,
  bars: 16,
  tick: 0,
  sounds: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAY_TOGGLE':
      return Object.assign({}, state, {
        playing: !state.playing
      })
    case 'PLAY':
      return Object.assign({}, state, {
        playing: true
      })
    case 'STOP':
      return Object.assign({}, state, {
        playing: false,
        tick: 0
      })
    case 'FETCHED_CONFIG':
      return Object.assign({}, state, {
        fetching: false,
        config: action.config
      });
    case 'ADD_SOUND':
      const sound = {
        name: action.sound,
        beats: new Array(state.bars).fill(false)
      }
      return Object.assign({}, state, {
        sounds: state.sounds.concat(sound)
      })
    case 'CHANGED_VOLUME':
      return Object.assign({}, state, {
        volume: action.volume
      })
    case 'CHANGED_PLAYING':
      return Object.assign({}, state, {
        playing: action.playing
      })
    case 'CHANGED_BPM':
      return Object.assign({}, state, {
        bpm: action.bpm
      })
    case 'CHANGED_BARS':
      return Object.assign({}, state, {
        bars: action.bars
      })
    case 'CHANGED_TICK':
      return Object.assign({}, state, {
        tick: action.tick
      })
    case 'TOGGLE_BEAT':
      return Object.assign({}, state, {
        sounds: state.sounds.map((s, id) => {
          if (action.id === id) {
            s.beats[action.beat] = !s.beats[action.beat]
          }
          return s;
        })
      })

  }
  return state;
}
