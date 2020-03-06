import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ClassPage from '../pages/ClassPage';
import StudentPage from '../pages/StudentPage';
import NotFound from '../pages/NotFoundPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ClassPage} />
    <Route path="/eleve/:slug" render={StudentPage} />
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Routes;
