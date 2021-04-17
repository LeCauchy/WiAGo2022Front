import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from './admin/components/pages/ProfilePage';
import TablesPage from './admin/components/pages/NotificationPage';
import NotFoundPage from './admin/components/pages/NotFoundPage';
import MapPage from './admin/components/pages/MapPage';
import HomePage from './admin/components/pages/HomePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/map' component={MapPage} />

      </Switch>
    );
  }
}

export default Routes;
