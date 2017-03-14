import React, { Component, PropTypes } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import TextCell from '../TextCell.jsx';
import moment from 'moment';
import 'fixed-data-table/dist/fixed-data-table.css';
import { calculateTableHeight } from '../tablehelpers.js';
import SingleListing from './SingleListing';
import Relay from 'react-relay';

class Listings extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
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
  };
  componentDidMount() {
    let listings = this.state.listings;
    let listing = this.state.listings[0]
    for (var index = 0; index < 100; index++) {
      listings.push(listing);
    }
    this.setState({
      listings
    })
  }

  onTableRowClick(event, index) {
    let listingId = this.state.listings[index]["id"]
    console.log(listingId);
    let baseUrl = this.context.router.match.path;
    //console.log();
    this.context.router.push(`${baseUrl}/${listingId}`)
  }


  render() {
    console.log(this.props.store)
    return (
      <div>
        <h1 className="title is-2 is-value">Listings</h1>

        <Table
          onRowClick={this.onTableRowClick}
          rowsCount={this.state.listings.length}
          rowHeight={30}
          headerHeight={30}
          width={1100}
          height={600}>
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
            header={<Cell>Time Paid</Cell>}
            cell={
              <TextCell
                data={this.state.listings}
                field="timePaid"
                type="dateObject"
              />
            }
            width={125}
          />
          <Column
            header={<Cell>Parcel Size</Cell>}
            cell={<TextCell
              data={this.state.listings}
              field="parcelSize"
            />}
            width={100}
          />
          <Column
            header={<Cell>Receiving Dates</Cell>}
            cell={<TextCell
              data={this.state.listings}
              field="receivingDate"
              type="dateRange"
            />}
            width={190}
          />
          <Column
            header={<Cell>Local Shipping</Cell>}
            cell={
              <TextCell
                data={this.state.listings}
                field="localShippingDate"
                type="dateObject"
              />
            }
            width={120}
          />
          <Column
            header={<Cell>Stepper</Cell>}
            cell={
              <TextCell
                data={this.state.listings}
                field="stepperCount"

              />
            }
            width={120}
          />
        </Table>

      </div>
    );
  }
}

Listings.contextTypes = {
  router: PropTypes.object
}

/*Listings = Relay.createContainer(Listings, {
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
        listings {
          id
        }
      }
    `
  }
})*/
export default Listings;
