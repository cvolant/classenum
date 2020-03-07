import React from 'react';

import usePanel from '../../hooks/usePanel';
import HorizontalStory from '../elements/HorizontalStory';

const ResponsivePanelContent: React.FC = () => {
  const [{
    left,
    right,
    mainMenu,
    screenIndex,
  }] = usePanel();

  return (
    <HorizontalStory chapter={screenIndex || !right ? 0 : 1}>
      {[
        ...(left || []),
        mainMenu,
        ...(right || []),
      ]}
    </HorizontalStory>
  );
};

export default ResponsivePanelContent;
