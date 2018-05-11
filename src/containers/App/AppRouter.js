import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={asyncComponent(() => import('../dashboard'))}
        />
        <Route
          exact
          path={`${url}/blankPage`}
          component={asyncComponent(() => import('../blankPage'))}
        />
        <Route
          exact
          path={`${url}/browsePage`}
          component={asyncComponent(() => import('../browsePage'))}
        />
        <Route
          exact
          path={`${url}/categoriesPage`}
          component={asyncComponent(() => import('../categoriesPage'))}
        />
        <Route
          exact
          path={`${url}/filesPage`}
          component={asyncComponent(() => import('../filesPage'))}
        />
      </Switch>
    );
  }
}

export default AppRouter;
