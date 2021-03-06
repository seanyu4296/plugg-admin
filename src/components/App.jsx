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
import Listings from './protected/listings/Listings';
import superagent from 'superagent';

class App extends Component {
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
            <MatchWhenAuthorized path="/protected" isLoggedIn={this.state.isLoggedIn} component={ProtectedRoutes} store={this.props.store} />
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


const MatchWhenAuthorized = ({ component: Component, isLoggedIn, store, ...rest }) => {
  return (
    <Route {...rest}
      render={(props) => {
        return (
          isLoggedIn ? (
            <Component store={store} {...props} />
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
          ${Listings.getFragment('store')}
        }
      }
    `
  }
})


export default App
//export default connect(mapStateToProps, mapDispatchToProps)(App);
