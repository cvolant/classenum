import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';
import { IMenuItem } from '../types/types';

export type IPageData = {
  title?: string;
  subtitle?: string;
  menuItems?: IMenuItem[];
};
export type IPageDataContext = {
  pageData: IPageData;
  updatePageData: IPageDataUpdater;
};
type IPageDataProviderProps = {
  children: ReactNode;
};
export type IPageDataUpdater = (updates: IPageData) => void;

const PageDataContext = createContext<IPageDataContext | undefined>(undefined);

const usePageData = (): IPageDataContext | undefined => useContext(PageDataContext);

const PageDataProvider: React.FC<IPageDataProviderProps> = ({ children }) => {
  const [pageData, setPageData] = useState({});
  const updatePageData: IPageDataUpdater = useCallback((updates) => {
    setPageData((formerPageData) => ({
      ...formerPageData,
      ...updates,
    }));
  }, []);

  return (
    <PageDataContext.Provider value={{ pageData, updatePageData }}>
      {children}
    </PageDataContext.Provider>
  );
};

export { PageDataProvider, usePageData };
export default usePageData;
