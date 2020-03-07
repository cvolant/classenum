import React from 'react';

import useScreen from '../../hooks/useScreen';
import FixedPanel from './FixedPanel';
import ResponsivePanelContent from './ResponsivePanelContent';
import SlidingPanel from './SlidingPanel';

const ResponsivePanel: React.FC = () => {
  const screen = useScreen();

  if (screen.mdup) {
    return (
      <FixedPanel>
        <ResponsivePanelContent />
      </FixedPanel>
    );
  }
  return (
    <SlidingPanel>
      <ResponsivePanelContent />
    </SlidingPanel>
  );
};

export default ResponsivePanel;
