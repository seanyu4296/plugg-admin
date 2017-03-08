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

const store = configureStore();
console.log(
  Relay.QL`
    query Test {
      listings {
        id
      }
    }
  `
)

injectTapEventPlugin();

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
