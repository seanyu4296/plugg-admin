import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Link, Match, Miss, Redirect } from 'react-router';

//actions
import * as userActions from '../actions/userActions.js';

//components
import Login from './Login';
import ProtectedRoutes from './protected/ProtectedRoutes.jsx';


class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isLoggedIn: this.props.isLoggedIn
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
		return (
			<Router>
				{({ router }) => (
					<div>
						{this.state.isLoggedIn ? (
							<Redirect to={{
								pathname: '/protected',
								state: { from: this.props.location }
							}} />
						) : (
								<Redirect to={{
									pathname: '/login',
									state: { from: this.props.location }
								}} />
							)}
						<Match pattern="/" exactly render={() => <Redirect to="/protected"></Redirect>} />
						<Match pattern="/login" exactly component={Login}></Match>
						<MatchWhenAuthorized pattern="/protected" isLoggedIn={this.state.isLoggedIn} component={ProtectedRoutes} />
					</div>
				)}
			</Router>
		);
	}
}

App.contextTypes = {
	router: PropTypes.object
}


const MatchWhenAuthorized = ({component: Component, isLoggedIn, ...rest }) => {

	return (
		<Match {...rest}
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
}




App.propTypes = {

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


export default connect(mapStateToProps, mapDispatchToProps)(App);
