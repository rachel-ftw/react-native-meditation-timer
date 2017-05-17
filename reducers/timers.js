import { EDIT_TIMER_NAME, EDIT_MEDITATION_TIME, ADD_TIMER, REMOVE_TIMER } from '../constants/ActionTypes'

const defaultState = {
  timers: [{
    id: 1,
    name: 'Quick Meditation',
    meditation_time: 300
  }]
}

export default function timers(state = defaultState.timers, action) {
  switch (action.type){
    case ADD_TIMER:
      return [{
          id: state.reduce((maxIdAcc, timer) => Math.max(timer.id, MaxIdAcc), -1) + 1,
          name: action.name
          meditation_time: action.time * 60
        },
        ...state
      ]
      default:
        return state
  }
}
