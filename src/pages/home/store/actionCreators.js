import * as actionTypes from './actionTypes'
import axios from 'axios'

const showTopicListAction = (value) => ({
  type: actionTypes.SHOW_TOPIC_LIST,
  value
})

const showArticleListAction = (value) => ({
  type: actionTypes.SHOW_ARTICLE_LIST,
  value
})

const showRecommendListAction = (value) => ({
  type: actionTypes.SHOW_RECOMMEND_LIST,
  value
})

export const getTopicListAction = () => {
  return (dispatch) => {
    axios.get('api/topicList.json').then((res)=>{
      if (res.data){
        let list = res.data
        dispatch(showTopicListAction(list))
      } else {
        console.log('res data is null')
      }
    }).catch(()=>{
      console.log('error')
    })
  }
}

export const getArticleListAction = () => {
  return (dispatch) => {
    axios.get('api/articleList.json').then((res)=>{
      if (res.data){
        let list = res.data
        dispatch(showArticleListAction(list))
      } else {
        console.log('res data is null')
      }
    }).catch(()=>{
      console.log('error')
    })
  }
}

export const getRecommendListAction = () => {
  return (dispatch) => {
    axios.get('api/recommendList.json').then((res)=>{
      if(res.data){
        let list = res.data
        dispatch(showRecommendListAction(list))
      }
    }).catch(()=>{
      console.log('error')
    })
  }
}