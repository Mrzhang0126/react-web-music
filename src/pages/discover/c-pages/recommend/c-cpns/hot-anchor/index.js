import React, { memo } from 'react';

import {
  hotRadios
} from "@/common/local-data";

import ThemeHeaderSmall from '@/components/theme-header-small';
import {
  HotAnchorWrapper
} from './style';


export default memo(function HotAnchor() {
  return (
    <HotAnchorWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/abc" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotAnchorWrapper>
  )
})
