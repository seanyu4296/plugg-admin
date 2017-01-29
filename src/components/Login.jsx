import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions.js';


class Login extends Component {
    render() {
        return (
            <div>
                <p>LogIn Page</p>
            </div>
        );
    }
}


Login.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);