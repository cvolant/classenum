import React, { useEffect } from 'react';

import usePageData, { IPageDataContext } from '../hooks/usePageData';
import NotFound from '../components/elements/NotFound';

const NotFoundPage: React.FC = () => {
  const { updatePageData } = usePageData() as IPageDataContext;

  useEffect(() => {
    updatePageData({
      title: 'Page non trouvée',
      subtitle: '404',
    });
  }, [updatePageData]);

  return <NotFound />;
};
export default NotFoundPage;
