import React, { memo } from 'react';

import PlayerInfo from './c-cpns/player-info';
import SongReviews from './c-cpns/song-reviews';
import SimiPlaylist from './c-cpns/simi-playlist';
import SimiSong from './c-cpns/simi-song';
import Download from './c-cpns/download';

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function Player() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <PlayerInfo/>
          <SongReviews/>
        </PlayerLeft>
        <PlayerRight>
          <SimiPlaylist/>
          <SimiSong/>
          <Download/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
