import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';

//actions
import * as userActions from '../actions/userActions.js';

//components
import Login from './Login';
import ProtectedRoutes from './protected/ProtectedRoutes.jsx';


/*class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoggedIn: true
    }
  };


  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn !== nextProps.isLoggedIn) {
      this.setState({ isLoggedIn: nextProps.isLoggedIn })
    }
  }

  componentDidMount() {
    document.title = "Plugg Admin";
  }

  render() {
    console.log(this.props.store)
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/protected"></Redirect>} />
            <Route path="/login" exact component={Login}></Route>
            <MatchWhenAuthorized path="/protected" isLoggedIn={this.state.isLoggedIn} component={ProtectedRoutes} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

App.contextTypes = {
  router: PropTypes.object
}


const MatchWhenAuthorized = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route {...rest}
      render={(props) => {
        return (
          isLoggedIn ? (
            <Component {...props} />
          ) : (
              <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }} />
            )
        )
      }
      } />

  )
}*/

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}



App.propTypes = {

};

/*function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}*/
App = Relay.createContainer(App, {
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
        listings {
          id
        }
      }
    `
  }
})


export default App
//export default connect(mapStateToProps, mapDispatchToProps)(App);
