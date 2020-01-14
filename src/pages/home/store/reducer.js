import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action)=>{
  switch(action.type){
    case actionTypes.SHOW_TOPIC_LIST:
      return state.set('topicList', action.value)
    case actionTypes.SHOW_ARTICLE_LIST:
      return state.set('articleList', action.value)
    case actionTypes.SHOW_RECOMMEND_LIST:
      return state.set('recommendList', action.value)
    default:
      return state
  }
}