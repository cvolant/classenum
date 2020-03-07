import React from 'react';

import usePanel from '../../hooks/usePanel';
import HorizontalStory from '../elements/HorizontalStory';

const ResponsivePanelContent: React.FC = () => {
  const { panel: { chapters, screenIndex } } = usePanel();

  return (
    <HorizontalStory chapter={screenIndex}>
      {chapters}
    </HorizontalStory>
  );
};

export default ResponsivePanelContent;
