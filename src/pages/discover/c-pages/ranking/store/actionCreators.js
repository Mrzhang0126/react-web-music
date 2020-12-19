import * as actionTypes from './constants';

import {
  getTopList,
  getRankingList
} from '@/services/ranking';

const changeTopListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list
})

const changeCurrentIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  index
})

const changePlayListAction = (res) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist
})

export const getTopListAction = () => {
  return (dispatch, getState) => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res));
    })
  }
}

export const getRankingListAction = (id) => {
  return (dispatch, getState) => {
    getRankingList(id).then(res => {
      dispatch(changePlayListAction(res))
    })
  }
}