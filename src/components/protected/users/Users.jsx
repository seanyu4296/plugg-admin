import React, { Component, PropTypes } from 'react';
import SingleUser from './SingleUser';
import { Route, Switch } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton'
import moment from 'moment';
import DeleteUserModal from './DeleteUserModal'

const Users = ({match: {path}}) => {
  return (
    <div>
      <Route path={`${path}`} exact component={UserTable} />
      <Route path={`${path}/:id`} component={SingleUser} />
    </div>
  );
}

class UserTable extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedUser: {
      },
      deleteModalActive: false,
      users: [{
        id: 1234,
        fullName: 'Sean Yu',
        email: 'seanyu4296@gmail.com',
        timeCreated: moment(),
        totalListings: 2
      },
      {
        id: 1234,
        fullName: 'Sean Yu',
        email: 'seanyu4296@gmail.com',
        timeCreated: moment(),
        totalListings: 2
      }]
    }
    this.onRowClick = this.onRowClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };
  componentDidMount() {
    let users = this.state.users;
    let listing = this.state.users[0]
    for (var index = 0; index < 100; index++) {
      users.push(listing);
    }
    this.setState({
      users
    })
  }
  onRowClick(userId) {
    this.context.router.push(`/protected/users/${userId}`)
  }
  handleDelete() {
    console.log("handleDelete");
  }
  openModal(bool, value) {
    if (bool) {
      return this.setState({
        deleteModalActive: true,
        selectedUser: value
      })
    }
    return this.setState({
      deleteModalActive: false
    })
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1 className="title is-2 is-value">Users</h1>
          <div className="container">
            <List>
              {this.state.users.map((value, index) => {
                return (
                  <div key={index}>
                    <ListItem

                      leftAvatar={
                        <div style={{ left: "10px", top: "21px" }}>
                          <Avatar size={50} src="" />
                        </div>}
                      primaryText={
                        <div className="columns">
                          <div className="column is-4">
                            <p className="subtitle is-4 is-value" style={{ marginBottom: "0px", fontWeight: "600" }}>
                              {value["fullName"]}
                            </p>
                            <p className="is-key">{value["email"]}</p>
                          </div>
                          <div className="column is-4">
                            <p className="is-key">Member Since: {moment(value["timeCreated"]).format('ll')}</p>
                            <p className="is-key">Total Listings: {value["totalListings"]} </p>
                          </div>
                          <div className="column is-4">
                            <RaisedButton label="View" primary={true} onTouchTap={() => this.onRowClick(value["id"])} />
                            <RaisedButton label="Delete" secondary={true} onTouchTap={() => this.openModal(true, value)} />
                          </div>
                        </div>
                      }
                    />

                    <Divider inset={true} />
                  </div>
                )
              })}
              <DeleteUserModal
                openModal={this.openModal}
                isActive={this.state.deleteModalActive}
                fullName={`${this.state.selectedUser.fullName}`}
                handleDelete={this.handleDelete}
              />
            </List>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


UserTable.contextTypes = {
  router: PropTypes.object
}


export default Users;
