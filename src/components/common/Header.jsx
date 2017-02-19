import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import * as userActions from '../../actions/userActions.js';


class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    }
    this.handleLogout = this.handleLogout.bind(this);

  };

  handleLogout(e) {
    e.preventDefault();
    this.props.actions.logout().then(() => {
      this.context.router.push('/');
    })
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <Link to="/">
              <img src="http://res.cloudinary.com/pluggph/image/upload/c_scale,w_150/v1484741754/plugg-logo-complete_p8hshc.png"
                alt=""
                style={{
                  padding: "10px 10px 0px 10px"
                }} />
            </Link>
          </div>
          <div className="nav-center">
            <a href="https://www.facebook.com/plugg.ph/ " className="nav-item">
              <span className="icon">
                <i className="fa fa-facebook-official" aria-hidden="true" style={{ color: "#3B5998" }}></i>
              </span>
            </a>
            <a href="https://analytics.google.com/analytics/web/?authuser=2#home/a84220309w125661612p129771312/" className="nav-item">
              <span className="icon">
                <img src={require('../../images/g-anaytics-icon.png')} alt="" />
              </span>
            </a>
            <a href="https://bitbucket.org/plugg-dev/" className="nav-item">
              <span className="icon">
                <i className="fa fa-bitbucket" aria-hidden="true" style={{ color: "#205081" }}></i>
              </span>
            </a>

          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-right nav-menu">
            <Link className="nav-item is-value" to="/protected/users">Users</Link>
            <Link className="nav-item is-value" to="/protected/listings">Listings</Link>
            {/*<Link className="nav-item is-value" to="/protected/credentials">Credentials</Link>*/}
            <span className="nav-item" >
              <a className="button is-primary" onClick={this.handleLogout}>
                <span className="icon">
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </span>
                <span>Log Out</span>
              </a>
            </span>
          </div>
        </nav>
      </div >
    );
  }
}

function logOut() {
  return (state, props) => {
  }
}

Header.propTypes = {

};

Header.contextTypes = {
  router: PropTypes.object
}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
