import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from './admin/components/pages/ProfilePage';
import StatsPage from './admin/components/pages/StatPage';
import AlertePage from './admin/components/pages/AlertePage';
import NotifPage from './admin/components/pages/NotifPage'
import NotFoundPage from './admin/components/pages/NotFoundPage';
import MapPage from './admin/components/pages/MapPage';
import HomePage from './admin/components/pages/HomePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={AlertePage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/map' component={MapPage} />
        <Route path='/notifs' component={NotifPage} />
        <Route path='/stats' component={StatsPage} />
      </Switch>
    );
  }
}

export default Routes;
