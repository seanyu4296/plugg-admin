import React, { Component, PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Listings from './Listings';
import SingleListing from './SingleListing'
const ListingRoutes = ({match: {path }}) => {
  return (
    <div>
      <Route path={`${path}`} exact component={Listings} />
      <Route path={`${path}/:id`} component={SingleListing} />
    </div>
  )
}


export default ListingRoutes
