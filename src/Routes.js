import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from './admin/components/pages/ProfilePage';
import StatsPage from './admin/components/pages/StatPage';
import AlertePage from './admin/components/pages/AlertePage';
import NotificationPage from './admin/components/pages/NotificationPage'
import NotFoundPage from './admin/components/pages/NotFoundPage';
import MapPage from './admin/components/pages/MapPage';
import HomePage from './admin/components/pages/HomePage';
import WithMultipleCheckboxes from './admin/components/pages/WithMultipleCheckboxes';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={MapPage} />
        <Route path='/about' component={ProfilePage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/nodes' component={HomePage} />
        <Route path='/notifs' component={NotificationPage} />
        <Route path='/stats' component={StatsPage} />
      </Switch>
    );
  }
}

export default Routes;
