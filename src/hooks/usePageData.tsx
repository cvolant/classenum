import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import { IMenuItem } from '../types/types';

export type IPageData = {
  title?: string;
  subtitle?: string;
  menuItems?: IMenuItem[];
};
type IPageDataContext = [IPageData, IPageDataUpdater | undefined];
type IPageDataProviderProps = {
  children: ReactNode;
};
export type IPageDataUpdater = (updates: IPageData) => void;

const PageDataContext = createContext<IPageDataContext>([{}, undefined]);

const usePageData = (): IPageDataContext => useContext(PageDataContext);

const PageDataProvider: React.FC<IPageDataProviderProps> = ({ children }) => {
  const [pageData, setPageData] = useState({});
  const updatePageData: IPageDataUpdater = (updates) => {
    setPageData({
      ...pageData,
      ...updates,
    });
  };

  return (
    <PageDataContext.Provider value={[pageData, updatePageData]}>
      {children}
    </PageDataContext.Provider>
  );
};

export { PageDataProvider, usePageData };
export default usePageData;
