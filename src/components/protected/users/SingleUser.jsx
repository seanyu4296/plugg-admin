import React, { Component, PropTypes } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import moment from 'moment';
import TextCell from '../TextCell.jsx';
import Rating from 'react-rating';
//import Breadcrumbs from 'react-breadcrumbs';
import DeleteUserModal from './DeleteUserModal'
class SingleUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      deleteModalActive: false,
      user: {
        firstName: "Sean Tristan",
        lastName: "Yu",
        rating: 4.5,
        birthdate: moment(),
        paypalEmail: "seanyu4296@gmail.com",
        phStreetAddress: "11 May St. Congressional Village",
        phStreetAddress2: "Bahay Toro",
        phCity: "Quezon",
        phProvince: "Metro Manila",
        phPostalCode: "1106"
      },
      listings: [{
        id: 1234,
        muvrName: "John Wesley Chan",
        shopprName: "Sean Tristan Yu",
        status: "ACTIVE",
        timeCreated: moment(),
        timePaid: moment(),
        parcelSize: "L",
        receivingDate: [moment(), moment()],
        localShippingDate: moment(),
        stepperCount: 4
      }, {
        id: 2345,
        muvrName: "John Wesley Chan",
        shopprName: "Sean Tristan Yu",
        status: "ACTIVE",
        timeCreated: moment(),
        timePaid: moment(),
        parcelSize: "L",
        receivingDate: [moment(), moment()],
        localShippingDate: moment(),
        stepperCount: 4
      }]
    }
    this.onTableRowClick = this.onTableRowClick.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
    this.openModal = this.openModal.bind(this);
    this.goToListing = this.goToListing.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  updateUserState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user: user }, function () {
    })
  }
  goToListing(listingId) {
    this.context.router.push(`/protected/listings/${listingId}`)
  }

  onTableRowClick(event, index) {
    let listingId = this.state.listings[index]["id"]
    console.log(listingId);
    let baseUrl = this.context.router.match.path;
    this.context.router.push(`listings/${listingId}`)
  }
  handleDelete() {
    console.log("handleDelete");
  }
  openModal(bool) {
    if (bool) {
      return this.setState({
        deleteModalActive: true
      })
    }
    return this.setState({
      deleteModalActive: false
    })
  }

  render() {
    return (
      <div>

        <div className="container card-page-container-user" >
          <div className="card">
            <div className="card-content">
              <div className="container">

                {/*<div className="column is-4">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image" style={{ width: "171px", height: "171px" }}>
                            <img src="https://res.cloudinary.com/pluggph/image/upload/v1484842592/profile-icon_yq7blb.png" alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>*/}

                <div className="column" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

                  <p className="title is-3 is-value">{`${this.state.user.firstName} ${this.state.user.lastName}`}</p>
                  <p className="subtitle is-5 is-key">@seanyu4296@gmail.com</p>
                  <div className="columns  title-border-top">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key " style={{ textAlign: "right", paddingRight: "10px" }}>First Name</p>
                    </div>
                    <div className="column">
                      <p className="control ">
                        <input name="firstName" className="input is-value" type="text" onChange={this.updateUserState} value={this.state.user["firstName"]} />
                      </p>
                    </div>
                  </div>
                  <div className="columns title-border-bottom">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key" style={{ textAlign: "right", paddingRight: "10px" }}>Last Name</p>
                    </div>
                    <div className="column">
                      <p className="control">
                        <input name="lastName" className="input is-value" type="text" onChange={this.updateUserState} value={this.state.user["lastName"]} />
                      </p>
                    </div>
                  </div>
                  <div className="columns title-border-bottom">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key" style={{ textAlign: "right", paddingRight: "10px" }}>Rating</p>
                    </div>
                    <div className="column">
                      <Rating placeholderRate={4}
                        empty={<i className="fa fa-star-o rating-star" aria-hidden="true"></i>}
                        placeholder={<i className="fa fa-star rating-star" aria-hidden="true"></i>}
                        full={<i className="fa fa-star rating-star" aria-hidden="true"></i>} fractions={2} readonly quiet />
                    </div>
                  </div>
                  <div className="columns title-border-bottom">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key" style={{ textAlign: "right", paddingRight: "10px" }}>Birthdate</p>
                    </div>
                    <div className="column">
                      <p className="is-5 is-value">{moment(this.state.user.birthdate).format('ll')}</p>
                    </div>
                  </div>
                  <div className="columns title-border-bottom">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key" style={{ textAlign: "right", paddingRight: "10px" }}>Paypal</p>
                    </div>
                    <div className="column">
                      <p className="control">
                        <input name="paypalEmail" className="input is-value" type="text" onChange={this.updateUserState} value={this.state.user["paypalEmail"]} />
                      </p>
                    </div>
                  </div>
                  <div className="columns ">
                    <div className="column is-4">
                      <p className=" is-5 title is-value" style={{ textAlign: "right", paddingRight: "10px" }}>Philippine Address</p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key" style={{ textAlign: "right", paddingRight: "10px" }}>Street Address</p>
                    </div>
                    <div className="column">
                      <p className="control">
                        <input name="phStreetAddress" className="input is-value" type="text" onChange={this.updateUserState} value={this.state.user["phStreetAddress"]} />
                      </p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key" style={{ textAlign: "right", paddingRight: "10px" }}>Street Address 2</p>
                    </div>
                    <div className="column">
                      <p className="control">
                        <input name="phStreetAddress2" className="input is-value" type="text" onChange={this.updateUserState} value={this.state.user["phStreetAddress2"]} />
                      </p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key" style={{ textAlign: "right", paddingRight: "10px" }}>City</p>
                    </div>
                    <div className="column">
                      <p className="control">
                        <input name="phCity" className="input is-value" type="text" onChange={this.updateUserState} value={this.state.user["phCity"]} />
                      </p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key" style={{ textAlign: "right", paddingRight: "10px" }}>Postal Code</p>
                    </div>
                    <div className="column">
                      <p className="control">
                        <input name="phPostalCode" className="input is-value" type="text" onChange={this.updateUserState} value={this.state.user["phPostalCode"]} />
                      </p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4 is-flex-touch">
                      <p className=" is-5 is-key" style={{ textAlign: "right", paddingRight: "10px" }}>Province</p>
                    </div>
                    <div className="column">
                      <p className="control">
                        <input name="phProvince" className="input is-value" type="text" onChange={this.updateUserState} value={this.state.user["phProvince"]} />
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              {/*
              <p className="title is-4 is-value">Listings</p>
              <Table
                onRowClick={this.onTableRowClick}
                rowsCount={this.state.listings.length}
                rowHeight={30}
                headerHeight={30}
                width={650}
                height={300}>
                <Column
                  header={<Cell>Muvr</Cell>}
                  cell={<TextCell
                    data={this.state.listings}
                    field="muvrName"
                  />}
                  width={140}
                />
                <Column
                  header={<Cell>Shoppr</Cell>}
                  cell={<TextCell
                    data={this.state.listings}
                    field="shopprName"
                  />}
                  width={140}
                />
                <Column
                  header={<Cell>Status</Cell>}
                  cell={<TextCell
                    data={this.state.listings}
                    field="status"
                  />}
                  width={80}
                />
                <Column
                  header={<Cell>Time Created</Cell>}
                  cell={
                    <TextCell
                      data={this.state.listings}
                      field="timeCreated"
                      type="dateObject"
                    />}
                  width={125}
                />
                <Column
                  header={<Cell>Parcel Size</Cell>}
                  cell={<TextCell
                    data={this.state.listings}
                    field="parcelSize"
                  />}
                  width={60}
                />
              </Table>*/}


            </div>
            <footer className="card-footer">
              <a className="card-footer-item">Save</a>
              <a className="card-footer-item" onClick={() => this.openModal(true)}>Delete</a>
            </footer>

            {/*Modal Delete*/}
            <DeleteUserModal
              openModal={this.openModal}
              isActive={this.state.deleteModalActive}
              fullName={`${this.state.user.firstName} ${this.state.user.lastName}`}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
        <br />
        <div className="card-page-container-user">
          <p className="title is-4 is-value">{`${this.state.user.firstName} ${this.state.user.lastName}`}'s Listings</p>
          <table className="table">
            <thead>
              <tr>
                <th><abbr >Muvr</abbr></th>
                <th>Shoppr</th>
                <th><abbr >Status</abbr></th>
                <th><abbr >T. Created</abbr></th>
                <th><abbr >Time Paid</abbr></th>
                <th><abbr >Parcel</abbr></th>
                <th><abbr >Receiving Dates</abbr></th>
                <th><abbr >L. Shipping</abbr></th>
                <th><abbr >Stepper</abbr></th>
              </tr>
            </thead>
            <tbody>
              {this.state.listings.map((value, index) => {
                return (
                  <tr key={index} onClick={() => {
                    this.goToListing(value["id"])
                  }}>
                    {(value["muvrName"] == `${this.state.user.firstName} ${this.state.user.lastName}`) ?
                      [<th key={4}>{value["muvrName"]}</th>,
                      <td key={5}>{value["shopprName"]}</td>]
                      :
                      [<td key={2}>{value["muvrName"]}</td>,
                      <th key={3}> {value["shopprName"]}</th>]
                    }
                    <td>{value["status"]}</td>
                    <td>{moment(value["timeCreated"]).format('ll')}</td>
                    <td>{moment(value["timePaid"]).format('ll')}</td>
                    <td>{value["parcelSize"]}</td>
                    <td>{moment(value["receivingDate"][0]).format('l')} - {moment(value["receivingDate"][0]).format('l')}</td>
                    <td>{moment(value["timePaid"]).format('ll')}</td>
                    <td>{value["stepperCount"]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

SingleUser.propTypes = {

};
SingleUser.contextTypes = {
  router: PropTypes.object
}

SingleUser.defaultProps = {

}

export default SingleUser;
