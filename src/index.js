// Set up your application entry point here...
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import App from './components/App.jsx';

import 'bulma/css/bulma.css';
import './styles/styles.css';

const store = configureStore();



render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app'));
