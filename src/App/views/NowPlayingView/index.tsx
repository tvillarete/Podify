import React from 'react';

import ViewOptions from 'App/views';
import { NowPlaying } from 'components';
import { useMenuHideWindow } from 'hooks';
import { useWindowService } from 'services/window';

const NowPlayingView = ({ uri }: { uri?: string }) => {
  useMenuHideWindow(ViewOptions.nowPlaying.id);
  const { hideWindow } = useWindowService();

  return <NowPlaying onHide={hideWindow} />;
};

export default NowPlayingView;
