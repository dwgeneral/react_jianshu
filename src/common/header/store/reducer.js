import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', action.value)
    case actionTypes.GET_HOT_SEARCH:
      return state.set('list', action.data)
    default:
      return state
  }
}