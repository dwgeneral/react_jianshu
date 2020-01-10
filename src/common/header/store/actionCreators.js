import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const getHotSearchAction = (data) => ({
  type: actionTypes.GET_HOT_SEARCH,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / perPage)
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

export const enterMouseAction = (value) => ({
  type: actionTypes.MOUSE_ENTER,
  value
})

export const clickSwitchAction = (value) => ({
  type: actionTypes.CLICK_SWITCH,
  value
})

export const perPage = 5