import React, {
  createContext,
  useContext,
  Dispatch,
  ReactNode,
  Reducer,
  useReducer,
} from 'react';

export type IPanel = {
  chapters: ReactNode[];
  open?: boolean;
  screenIndex?: number;
};
type IPanelAction = {
  type?: string | undefined;
  payload?: Partial<IPanel> | undefined;
};
export type IPanelContext = {
  panel: IPanel;
  updatePanel: (updates: Partial<IPanel>) => void;
  replacePanel: (updates: Partial<IPanel>) => void;
  previousScreen: () => void;
  nextScreen: () => void;
  togglePanel: (toOpen?: boolean) => void;
  dispatchPanel: Dispatch<IPanelAction>;
};
type IPanelProviderProps = {
  children: ReactNode;
};

const PanelContext = createContext<IPanelContext>({
  panel: { chapters: [] },
  updatePanel: () => { /*  */ },
  replacePanel: () => { /*  */ },
  previousScreen: () => { /*  */ },
  nextScreen: () => { /*  */ },
  togglePanel: () => { /*  */ },
  dispatchPanel: () => { /*  */ },
});

const usePanel = (): IPanelContext => useContext(PanelContext);

const PanelProvider: React.FC<IPanelProviderProps> = ({ children }) => {
  const panelReducer: Reducer<IPanel, IPanelAction> = (panelState, { type, payload }) => {
    switch (type) {
      case 'update':
        return {
          ...panelState,
          ...payload,
          chapters: payload?.chapters ? payload.chapters.map((chapter, index) => (
            chapter || panelState.chapters[index] || null
          )) : panelState.chapters,
        };
      case 'replace':
        return {
          chapters: [],
          ...payload,
        };
      case 'previous':
        return {
          ...panelState,
          screenIndex: (panelState.screenIndex || 1) - 1,
        };
      case 'next':
        return {
          ...panelState,
          screenIndex: (panelState.screenIndex || 0)
            + (panelState.screenIndex || 0) < panelState.chapters.length - 1 ? 1 : 0,
        };
      case 'toggle':
        return {
          ...panelState,
          open: payload?.open !== undefined ? payload.open : !panelState.open,
        };
      default:
        return panelState;
    }
  };
  const [panel, dispatchPanel] = useReducer(panelReducer, { chapters: [] });

  const updatePanel = (payload: Partial<IPanel>): void => {
    dispatchPanel({ type: 'update', payload });
  };

  const replacePanel = (payload: Partial<IPanel>): void => {
    dispatchPanel({ type: 'replace', payload });
  };

  const previousScreen = (): void => {
    dispatchPanel({ type: 'previous' });
  };

  const nextScreen = (): void => {
    dispatchPanel({ type: 'next' });
  };

  const togglePanel = (toOpen?: boolean): void => {
    dispatchPanel({ type: 'toggle', payload: { open: toOpen } });
  };

  return (
    <PanelContext.Provider value={{
      panel,
      updatePanel,
      replacePanel,
      previousScreen,
      nextScreen,
      togglePanel,
      dispatchPanel,
    }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export { PanelProvider, usePanel };
export default usePanel;
