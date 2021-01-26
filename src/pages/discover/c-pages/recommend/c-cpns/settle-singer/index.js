import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  getSettleSingers
} from "../../store/actionCreators";
import {
  getSizeImage
} from "@/utils/format-utils";

import ThemeHeaderSmall from '@/components/theme-header-small';
import {
  SettleSingerWrapper
} from "./style";

export default memo(function SettleSinger() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    settleSingers: state.getIn(["recommend", "settleSingers"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getSettleSingers());
  }, [dispatch]);

  return (
   <SettleSingerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {
          state.settleSingers.map((item, index) => {
            return (
              <a href="/singer" key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
})
