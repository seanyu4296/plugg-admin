import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {

		}
	};
	render() {
		return (
			<Router>
				<div>
					<ul>
						{/* 3. Link to some paths with `Link` */}
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/topics">Topics</Link></li>
					</ul>
				</div>

			</Router>
		);
	}
}


App.propTypes = {

};

export default App;
