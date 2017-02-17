import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dashboard from './Dashboard';
import Listings from './listings/ListingRoutes';
import Users from './Users';

const ProtectedRoutes = ({match: {path }}) => {
  //interestingly if route is root pathname = "/" so be aware of appending pathname in pattern
  //console.log(match);
  return (
    <div>
      <div className="container">
        <Header></Header>
      </div>
      <div className="container" style={{ padding: "20px 40px 0px 40px" }} >
        <Switch>
          <Route path={`${path}`} exact render={() => <Redirect to={`${path}/dashboard`} />} />
          <Route path={`${path}/dashboard`} component={Dashboard} />
          <Route path={`${path}/users`} component={Users} />
          <Route path={`${path}/listings`} component={Listings} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  )
}

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default ProtectedRoutes
