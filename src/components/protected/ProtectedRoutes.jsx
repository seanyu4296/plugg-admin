import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dashboard from './Dashboard';
import Listings from './listings/ListingRoutes';
import Users from './users/Users';


const ProtectedRoutes = ({ children }) => {
  return (
    <div>
      <div className="container">
        <Header></Header>
      </div>
      <div className="container" style={{ padding: "20px 40px 0px 40px" }} >
        {children}
      </div>
    </div>
  )
}

export default ProtectedRoutes
