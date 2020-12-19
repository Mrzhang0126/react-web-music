import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTopListAction } from './store/actionCreators';

import TopRanking from './c-cpns/top-ranking';
import RankingHeader from './c-cpns/ranking-header';
import RankingList from './c-cpns/ranking-list';

import {
  RankingWrapper,
  RankingLeft,
  RankingRight
} from './style';

export default memo(function Ranking() {
  // props and state

  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction());
  }, [dispatch])

  // other handle

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking/>
      </RankingLeft>
      <RankingRight>
        <RankingHeader/>
        <RankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
