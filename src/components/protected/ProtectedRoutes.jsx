import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import { Match, Miss, Redirect } from 'react-router';

const ProtectedRoutes = ({pathname}) => {
    //interestingly if route is root pathname = "/" so be aware of appending pathname in pattern
    return (
        <div>
            <div className="container">
                <Header></Header>
            </div>
            <div className="container">
                <Match pattern={`${pathname}`} render={() => <Redirect to={`${pathname}/dashboard`} />} />
                <Match pattern={`${pathname}/dashboard`} render={() => <div>Dashboard</div>} />
                <Match pattern={`${pathname}/users`} render={() => <div>Users</div>} />
                <Match pattern={`${pathname}/listings`} render={() => <div>Listings</div>} />
                <Miss component={NoMatch} />
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