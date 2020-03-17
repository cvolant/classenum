import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ClassPage from '../pages/ClassPage';
import StudentPage from '../pages/StudentPage';
import NotFound from '../pages/NotFoundPage';

type IRouteRenderProps = {
  match: {
    params: {
      slug: string;
    };
  };
};

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ClassPage} />
    <Route
      path="/eleve/:slug"
      render={({
        match: { params: { slug } },
      }: {
        match: {
          params: {
            slug: string;
          };
        };
      }): JSX.Element => <StudentPage id={slug.split('-')[0]} />}
    />
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Routes;
