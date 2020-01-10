import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const getHotSearchAction = (data) => ({
  type: actionTypes.GET_HOT_SEARCH,
  data: fromJS(data)
})

export const focusSearchAction = (value) => ({
  type: actionTypes.SEARCH_FOCUS,
  value
})

export const getHotSearch = () => {
  return (dispatch) => {
    axios.get('api/hotSearchList.json').then((res) => {
      if (res.status === 200) {
        const list = res.data.list
        dispatch(getHotSearchAction(list))
      } else {
        console.log('error')
      }
    }).catch(()=>{
      console.log('error')
    })
  }
}