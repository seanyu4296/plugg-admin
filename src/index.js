// Set up your application entry point here...
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Relay from 'react-relay';
import configureStore from './store/configureStore';

import App from './components/App.jsx';

import 'bulma/css/bulma.css';
import './styles/styles.css';
/*import {
  RelayNetworkLayer, retryMiddleware, urlMiddleware, authMiddleware, loggerMiddleware,
  perfMiddleware, gqErrorsMiddleware
} from 'react-relay-network-layer';*/


Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://plugg-admin-back.herokuapp.com/graphql', )
);

class HomeRoute extends Relay.Route {

}

HomeRoute.routeName = 'Home';
HomeRoute.queries = {
  //receives a component that gets associated with its route
  //App in this case?
  //store then put a fragment that we used in the component
  //component.getfragment reuse any fragment from any container and pass name of the fragment which is also store in the components
  store: (Component) => Relay.QL`
      query MainQuery{
        store {${Component.getFragment('store')} }
      }
    `
}

const store = configureStore();


injectTapEventPlugin();

render(
  <Relay.RootContainer
    Component={App}
    route={new HomeRoute()}
  />
  , document.getElementById('app'));


/*render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
*/
