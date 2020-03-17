import React from 'react';

import usePanel, { IPanelContext } from '../../hooks/usePanel';
import HorizontalStory from '../elements/HorizontalStory';

const ResponsivePanelContent: React.FC = () => {
  const { panel: { chapters, screenIndex } } = usePanel() as IPanelContext;

  return (
    <HorizontalStory chapter={screenIndex}>
      {chapters}
    </HorizontalStory>
  );
};

export default ResponsivePanelContent;
