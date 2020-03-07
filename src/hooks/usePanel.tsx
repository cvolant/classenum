import React, {
  createContext,
  useContext,
  ReactNode,
  Reducer,
  useReducer,
} from 'react';

export type IPanel = {
  left?: ReactNode[];
  right?: ReactNode[];
  mainMenu?: ReactNode;
  screenIndex?: number;
};
export type IPanelContext = [
  IPanel,
  IPanelUpdater | undefined,
  IPanelUpdater | undefined,
];
type IPanelProviderProps = {
  children: ReactNode;
};
export type IPanelUpdater = (updates: IPanel) => void;

const PanelContext = createContext<IPanelContext>([{}, undefined, undefined]);

const usePanel = (): IPanelContext => useContext(PanelContext);

const PanelProvider: React.FC<IPanelProviderProps> = ({ children }) => {
  const panelReducer: Reducer<IPanel, {
    type: string;
    payload: Partial<IPanel>;
  }> = (panelState, action) => {
    switch (action.type) {
      case 'update':
        return {
          ...panelState,
          ...action.payload,
        };
      case 'replace':
        return action.payload;
      default:
        return panelState;
    }
  };
  const [panel, dispatchPanel] = useReducer(panelReducer, {});

  const updatePanel: IPanelUpdater = (payload) => {
    dispatchPanel({ type: 'update', payload });
  };

  const replacePanel: IPanelUpdater = (payload) => {
    dispatchPanel({ type: 'replace', payload });
  };

  return (
    <PanelContext.Provider value={[panel, updatePanel, replacePanel]}>
      {children}
    </PanelContext.Provider>
  );
};

export { PanelProvider, usePanel };
export default usePanel;
