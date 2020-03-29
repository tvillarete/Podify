import React from 'react';

import { WINDOW_TYPE } from 'App/views';
import { Unit } from 'components';
import { useWindowService } from 'services/window';
import styled from 'styled-components';

import CoverFlowInterface from './CoverFlowInterface';
import FullScreenInterface from './FullScreenInterface';
import SplitScreenInterface from './SplitScreenInterface';

const Container = styled.div`
  position: relative;
  height: 260px;
  margin: ${Unit.LG} ${Unit.LG} ${Unit.XL};
  border: 4px solid black;
  border-radius: ${Unit.XS};
  overflow: hidden;
  background: white;
  animation: fadeFromBlack 0.5s;
  user-select: none;

  @keyframes fadeFromBlack {
    0% {
      filter: brightness(0);
    }
  }
`;

/** Prevents the user from scrolling the display with a mouse. */
const Mask = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Interface = () => {
  const { windowStack } = useWindowService();
  const splitViewWindows = windowStack.filter(
    window => window.type === WINDOW_TYPE.SPLIT
  );
  const fullViewWindows = windowStack.filter(
    window => window.type === WINDOW_TYPE.FULL
  );
  const coverFlowWindow = windowStack.find(
    window => window.type === WINDOW_TYPE.COVER_FLOW
  );

  return (
    <Container>
      <Mask />
      <CoverFlowInterface window={coverFlowWindow} />
      <SplitScreenInterface
        windowStack={splitViewWindows}
        menuHidden={fullViewWindows.length > 0}
        allHidden={!!coverFlowWindow}
      />
      <FullScreenInterface windowStack={fullViewWindows} />
    </Container>
  );
};

export default Interface;
